import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-health-"));

await build({
  root, logLevel: "error", configFile: false,
  build: { lib: { entry: path.join(root, "src/content/index.ts"), formats: ["es"], fileName: "content" }, outDir, emptyOutDir: true, minify: false },
});
await build({
  root, logLevel: "error", configFile: false,
  build: { lib: { entry: path.join(root, "src/content/pedagogy-bundle.ts"), formats: ["es"], fileName: "pedagogy" }, outDir, emptyOutDir: false, minify: false },
});

const { modules } = await import(path.join(outDir, "content.js"));
const { concepts, conceptsById } = await import(path.join(outDir, "pedagogy.js"));

const cyrillicWord = /[Ѐ-ӿа-яА-ЯёЁ]+/g;

const orderedLessons = [];
for (const mod of modules) {
  for (const lesson of mod.lessons) orderedLessons.push(lesson);
}
const totalLessons = orderedLessons.length;
const lessonNames = orderedLessons.map(l => l.id);

// Word form lookup
const formToWordConcept = new Map();
const wordConcepts = concepts.filter(c => c.kind === "word");
for (const wc of wordConcepts) {
  for (const forms of Object.values(wc.forms)) {
    for (const f of forms) {
      for (const part of f.toLowerCase().split(" ")) formToWordConcept.set(part, wc.id);
      formToWordConcept.set(f.toLowerCase(), wc.id);
    }
  }
}

// Track concept appearances
const conceptIntroLesson = new Map();
const conceptAppearances = new Map(); // concept -> [lesson indices]

let lessonIdx = 0;
for (const lesson of orderedLessons) {
  for (const wc of wordConcepts) {
    if (wc.lesson === lesson.id && !conceptIntroLesson.has(wc.id)) {
      conceptIntroLesson.set(wc.id, lessonIdx);
    }
  }

  lesson.items.forEach((item) => {
    if (item.introduces) {
      for (const cid of item.introduces) {
        if (!conceptIntroLesson.has(cid)) conceptIntroLesson.set(cid, lessonIdx);
      }
    }
    if (item.reviews) {
      for (const cid of item.reviews) {
        if (!conceptAppearances.has(cid)) conceptAppearances.set(cid, []);
        conceptAppearances.get(cid).push(lessonIdx);
      }
    }
    if (item.type === "exercise" && !lesson.id.startsWith("m0")) {
      const texts = [item.answer, ...(item.accept || [])];
      const seenThisItem = new Set();
      for (const text of texts) {
        if (!text) continue;
        const words = text.match(cyrillicWord) || [];
        for (const word of words) {
          const wcId = formToWordConcept.get(word.toLowerCase());
          if (wcId && !seenThisItem.has(wcId)) {
            seenThisItem.add(wcId);
            if (!conceptAppearances.has(wcId)) conceptAppearances.set(wcId, []);
            conceptAppearances.get(wcId).push(lessonIdx);
          }
        }
      }
    }
  });
  lessonIdx++;
}

// Compute health for each concept
const results = [];

for (const c of concepts) {
  const intro = conceptIntroLesson.get(c.id);
  if (intro === undefined) continue;

  const appearances = conceptAppearances.get(c.id) || [];
  const uniqueLessons = [...new Set(appearances)].sort((a, b) => a - b);
  const totalReviews = appearances.length;
  const uniqueReviewLessons = uniqueLessons.length;

  const lastSeen = uniqueLessons.length > 0 ? Math.max(...uniqueLessons) : intro;
  const tailGap = totalLessons - 1 - lastSeen;

  // All points including intro
  const allPoints = [...new Set([intro, ...uniqueLessons])].sort((a, b) => a - b);
  let maxGap = 0;
  let maxGapAfter = intro;
  for (let i = 1; i < allPoints.length; i++) {
    const gap = allPoints[i] - allPoints[i - 1];
    if (gap > maxGap) { maxGap = gap; maxGapAfter = allPoints[i - 1]; }
  }
  const tailAsGap = totalLessons - 1 - allPoints[allPoints.length - 1];
  if (tailAsGap > maxGap) { maxGap = tailAsGap; maxGapAfter = allPoints[allPoints.length - 1]; }

  // Gaps between consecutive appearances (for spacing analysis)
  const gaps = [];
  for (let i = 1; i < allPoints.length; i++) gaps.push(allPoints[i] - allPoints[i - 1]);
  if (tailAsGap > 0) gaps.push(tailAsGap);

  // Health formula (complexity-free, unique-lesson based, uncapped)
  const target = 3;
  const coverage = uniqueReviewLessons / target;

  const maxAllowedGap = 9;
  const gapHealth = Math.min(1, Math.max(0, 1 - (maxGap - maxAllowedGap) / maxAllowedGap));
  const tailHealth = Math.min(1, Math.max(0, 1 - (tailGap - maxAllowedGap) / maxAllowedGap));

  const health = (coverage * 2 + gapHealth + tailHealth) / 4;

  // Per-lesson review count (for timeline)
  const lessonCounts = new Array(totalLessons).fill(0);
  for (const li of appearances) lessonCounts[li]++;

  results.push({
    id: c.id,
    name: c.name,
    kind: c.kind,
    complexity: c.complexity,
    introLesson: intro,
    introLessonId: lessonNames[intro],
    totalReviews,
    uniqueReviewLessons: uniqueReviewLessons,
    lastSeenLesson: lastSeen,
    lastSeenLessonId: lessonNames[lastSeen],
    tailGap,
    maxGap,
    maxGapAfterLesson: lessonNames[maxGapAfter],
    gaps,
    coverage: Math.round(coverage * 100) / 100,
    gapHealth: Math.round(gapHealth * 100) / 100,
    tailHealth: Math.round(tailHealth * 100) / 100,
    health: Math.round(health * 100) / 100,
    target,
    maxAllowedGap,
    timeline: lessonCounts,
  });
}

results.sort((a, b) => a.health - b.health);

const outputPath = path.join(root, "scripts", "health-data.json");
fs.writeFileSync(outputPath, JSON.stringify({ lessonNames, totalLessons, concepts: results }, null, 2));
console.log(`Written ${results.length} concepts to ${outputPath}`);

// Quick summary
const buckets = { critical: 0, weak: 0, ok: 0, good: 0 };
for (const r of results) {
  if (r.health < 0.25) buckets.critical++;
  else if (r.health < 0.5) buckets.weak++;
  else if (r.health < 0.75) buckets.ok++;
  else buckets.good++;
}
console.log(`Health distribution: ${buckets.critical} critical (<0.25), ${buckets.weak} weak (0.25-0.5), ${buckets.ok} ok (0.5-0.75), ${buckets.good} good (>0.75)`);

fs.rmSync(outDir, { recursive: true });
