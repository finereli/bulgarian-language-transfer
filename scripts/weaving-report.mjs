// Weaving analysis: find concepts that go cold (long gaps between uses)
// and words that appear in too few exercises. Outputs a prioritized
// list of where masked-repetition exercises would help most.
import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-weave-"));

await build({
  root,
  logLevel: "error",
  configFile: false,
  build: {
    lib: {
      entry: path.join(root, "src/content/index.ts"),
      formats: ["es"],
      fileName: "content",
    },
    outDir,
    emptyOutDir: true,
    minify: false,
  },
});

await build({
  root,
  logLevel: "error",
  configFile: false,
  build: {
    lib: {
      entry: path.join(root, "src/content/pedagogy-bundle.ts"),
      formats: ["es"],
      fileName: "pedagogy",
    },
    outDir,
    emptyOutDir: false,
    minify: false,
  },
});

const { modules } = await import(path.join(outDir, "content.js"));
const { concepts, conceptsById } = await import(path.join(outDir, "pedagogy.js"));

const cyrillicWord = /[Ѐ-ӿа-яА-ЯёЁ]+/g;

// Build lesson index
const orderedLessons = [];
for (const mod of modules) {
  for (const lesson of mod.lessons) {
    orderedLessons.push({ mod, lesson });
  }
}

// Build word-to-concept lookup (all forms -> concept id)
const formToWordConcept = new Map();
const wordConcepts = concepts.filter((c) => c.kind === "word");
for (const wc of wordConcepts) {
  for (const forms of Object.values(wc.forms)) {
    for (const f of forms) {
      for (const part of f.toLowerCase().split(" ")) {
        formToWordConcept.set(part, wc.id);
      }
      formToWordConcept.set(f.toLowerCase(), wc.id);
    }
  }
}

// Track concept appearances (from tags AND from word usage in exercises)
const conceptIntroLesson = new Map(); // concept -> lesson index
const conceptAppearances = new Map(); // concept -> [lesson indices]

// Walk content
let lessonIdx = 0;
for (const { mod, lesson } of orderedLessons) {
  // Auto-introduce word concepts
  for (const wc of wordConcepts) {
    if (wc.lesson === lesson.id && !conceptIntroLesson.has(wc.id)) {
      conceptIntroLesson.set(wc.id, lessonIdx);
    }
  }

  lesson.items.forEach((item, i) => {
    // Track introduces
    if (item.introduces) {
      for (const cid of item.introduces) {
        if (!conceptIntroLesson.has(cid)) {
          conceptIntroLesson.set(cid, lessonIdx);
        }
      }
    }

    // Track reviews (explicit)
    if (item.reviews) {
      for (const cid of item.reviews) {
        if (!conceptAppearances.has(cid)) conceptAppearances.set(cid, []);
        conceptAppearances.get(cid).push(lessonIdx);
      }
    }

    // Track word usage in exercises (implicit review)
    if (item.type === "exercise" && !lesson.id.startsWith("m0")) {
      const texts = [item.answer, ...(item.accept || [])];
      const seenThisItem = new Set();
      for (const text of texts) {
        if (!text) continue;
        const words = text.match(cyrillicWord) || [];
        for (const word of words) {
          const lower = word.toLowerCase();
          const wcId = formToWordConcept.get(lower);
          if (wcId && !seenThisItem.has(wcId)) {
            seenThisItem.add(wcId);
            if (!conceptAppearances.has(wcId)) conceptAppearances.set(wcId, []);
            conceptAppearances.get(wcId).push(lessonIdx);
          }
        }
      }

      // Also track grammar concepts used implicitly
      // If the exercise uses a definite form, it's reviewing the definite concept, etc.
      if (item.introduces) {
        for (const cid of item.introduces) {
          if (!conceptAppearances.has(cid)) conceptAppearances.set(cid, []);
          conceptAppearances.get(cid).push(lessonIdx);
        }
      }
    }
  });

  lessonIdx++;
}

const totalLessons = orderedLessons.length;

// === Analysis ===

// 1. Cold concepts: introduced but not seen for many lessons
const coldGaps = [];
for (const c of concepts) {
  const intro = conceptIntroLesson.get(c.id);
  if (intro === undefined) continue;

  const appearances = conceptAppearances.get(c.id) || [];
  const uniqueLessons = [...new Set(appearances)].sort((a, b) => a - b);

  // Last seen lesson
  const lastSeen = uniqueLessons.length > 0
    ? Math.max(...uniqueLessons)
    : intro;

  const lessonsSinceLastSeen = totalLessons - 1 - lastSeen;
  const totalAppearances = uniqueLessons.length;

  // Find the longest gap between consecutive appearances
  const allPoints = [intro, ...uniqueLessons].sort((a, b) => a - b);
  let maxGap = 0;
  let gapStart = -1;
  for (let i = 1; i < allPoints.length; i++) {
    const gap = allPoints[i] - allPoints[i - 1];
    if (gap > maxGap) {
      maxGap = gap;
      gapStart = allPoints[i - 1];
    }
  }
  // Also check gap from last appearance to end
  const tailGap = totalLessons - 1 - allPoints[allPoints.length - 1];
  if (tailGap > maxGap) {
    maxGap = tailGap;
    gapStart = allPoints[allPoints.length - 1];
  }

  coldGaps.push({
    id: c.id,
    kind: c.kind,
    name: c.name,
    complexity: c.complexity,
    introLesson: intro,
    totalAppearances,
    lastSeenLesson: lastSeen,
    lessonsSinceLastSeen,
    maxGap,
    maxGapAfterLesson: gapStart,
  });
}

// Sort by severity: high complexity + long gaps first
coldGaps.sort((a, b) => {
  const scoreA = a.maxGap * a.complexity;
  const scoreB = b.maxGap * b.complexity;
  return scoreB - scoreA;
});

// === Output ===

const lessonNames = orderedLessons.map(({ lesson }) => lesson.id);

console.log("=== WEAVING ANALYSIS ===\n");
console.log(`${concepts.length} concepts across ${totalLessons} lessons\n`);

// Cold concepts (gap >= 5 lessons)
const coldThreshold = 5;
const coldOnes = coldGaps.filter((g) => g.maxGap >= coldThreshold);
console.log(`--- COLD CONCEPTS (gap >= ${coldThreshold} lessons): ${coldOnes.length} ---\n`);
console.log("Gap  Cmplx  Uses  Concept                              Where cold");
console.log("---  -----  ----  -----------------------------------  ----------");
for (const g of coldOnes) {
  const gapStr = String(g.maxGap).padStart(3);
  const cplxStr = String(g.complexity).padStart(5);
  const usesStr = String(g.totalAppearances).padStart(4);
  const nameStr = `${g.id} (${g.kind})`.padEnd(37);
  const afterLesson = lessonNames[g.maxGapAfterLesson] || "?";
  const gapEnd = g.maxGapAfterLesson + g.maxGap;
  const toLesson = gapEnd < totalLessons ? lessonNames[gapEnd] : "end";
  console.log(`${gapStr}  ${cplxStr}  ${usesStr}  ${nameStr}  ${afterLesson} → ${toLesson}`);
}

// Under-exercised words (< 3 exercise appearances)
const underExercised = coldGaps
  .filter((g) => g.kind === "word" && g.totalAppearances < 3)
  .sort((a, b) => a.totalAppearances - b.totalAppearances);

console.log(`\n--- UNDER-EXERCISED WORDS (<3 uses): ${underExercised.length} ---\n`);
console.log("Uses  Word                          Introduced");
console.log("----  ----------------------------  ----------");
for (const g of underExercised) {
  const usesStr = String(g.totalAppearances).padStart(4);
  const nameStr = g.name.padEnd(30);
  const introStr = lessonNames[g.introLesson];
  console.log(`${usesStr}  ${nameStr}  ${introStr}`);
}

// Grammar concepts with no reviews
const noReviews = coldGaps
  .filter((g) => g.kind !== "word" && g.complexity >= 2 && g.totalAppearances === 0);
console.log(`\n--- GRAMMAR CONCEPTS WITH NO REVIEWS (complexity >= 2): ${noReviews.length} ---\n`);
for (const g of noReviews) {
  console.log(`  ${g.id} (complexity ${g.complexity}, introduced ${lessonNames[g.introLesson]})`);
}

// Summary stats
const avgGap = coldGaps.reduce((s, g) => s + g.maxGap, 0) / coldGaps.length;
const avgAppearances = coldGaps.reduce((s, g) => s + g.totalAppearances, 0) / coldGaps.length;
console.log(`\n--- SUMMARY ---`);
console.log(`Average max gap: ${avgGap.toFixed(1)} lessons`);
console.log(`Average appearances: ${avgAppearances.toFixed(1)}`);
console.log(`Concepts with gap >= 5: ${coldOnes.length}`);
console.log(`Words used < 3 times: ${underExercised.length}`);
console.log(`Grammar with 0 reviews: ${noReviews.length}`);

// Suggested weaving targets (prioritized)
console.log(`\n--- TOP WEAVING PRIORITIES ---\n`);
const priorities = coldGaps
  .filter((g) => g.maxGap >= coldThreshold || (g.kind === "word" && g.totalAppearances < 2))
  .sort((a, b) => {
    const scoreA = a.maxGap * a.complexity * (a.kind === "word" ? 1.5 : 1);
    const scoreB = b.maxGap * b.complexity * (b.kind === "word" ? 1.5 : 1);
    return scoreB - scoreA;
  })
  .slice(0, 20);

for (let i = 0; i < priorities.length; i++) {
  const g = priorities[i];
  const afterLesson = lessonNames[g.maxGapAfterLesson];
  console.log(`${i + 1}. ${g.id} - gap ${g.maxGap} after ${afterLesson}, ${g.totalAppearances} uses, complexity ${g.complexity}`);
}

fs.rmSync(outDir, { recursive: true });
