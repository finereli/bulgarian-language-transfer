import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "ajde-dynamics-"));

await build({
  root, logLevel: "error", configFile: false,
  build: { lib: { entry: path.join(root, "src/content/index.ts"), formats: ["es"], fileName: "content" }, outDir, emptyOutDir: true, minify: false },
});
await build({
  root, logLevel: "error", configFile: false,
  build: { lib: { entry: path.join(root, "src/content/pedagogy-bundle.ts"), formats: ["es"], fileName: "pedagogy" }, outDir, emptyOutDir: false, minify: false },
});

const { modules } = await import(path.join(outDir, "content.js"));
const { conceptsById } = await import(path.join(outDir, "pedagogy.js"));

const IMPLICIT = new Set([
  "cyrillic-reading", "cyrillic-typing", "stress", "щ-sound",
  "ж-sound", "ч-sound", "ш-sound", "ъ-sound", "ь-soft-sign", "ю-sound", "я-sound",
]);

// ── Rhythm ──────────────────────────────────────────────────────────

function rhythmSignature(items) {
  return items.map(i => i.type === "note" ? "N" : i.type === "exercise" ? "E" : "C");
}

function rhythmVariance(sig) {
  if (sig.length < 4) return 1;
  const runs = [];
  let cur = sig[0], len = 1;
  for (let i = 1; i < sig.length; i++) {
    if (sig[i] === cur) len++;
    else { runs.push(len); cur = sig[i]; len = 1; }
  }
  runs.push(len);
  if (runs.length < 2) return 0;
  const mean = runs.reduce((a, b) => a + b, 0) / runs.length;
  const variance = runs.reduce((a, b) => a + (b - mean) ** 2, 0) / runs.length;
  return Math.sqrt(variance) / mean;
}

// Detects repeated note-then-exercises blocks (the actual m5l2 problem).
// Returns the fraction of the lesson that follows a repeating N+E* motif.
function patternRepetition(sig) {
  if (sig.length < 6) return 0;
  // Find N-E+ blocks
  const blocks = [];
  let i = 0;
  while (i < sig.length) {
    if (sig[i] === "N") {
      let j = i + 1;
      while (j < sig.length && sig[j] !== "N") j++;
      blocks.push(j - i - 1); // exercise count after this note
      i = j;
    } else {
      i++;
    }
  }
  if (blocks.length < 3) return 0;
  // How many consecutive blocks have similar exercise counts (within 1)?
  let repeating = 0;
  for (let k = 1; k < blocks.length; k++) {
    if (Math.abs(blocks[k] - blocks[k - 1]) <= 1) repeating++;
  }
  return repeating / (blocks.length - 1);
}

// ── Load contour ────────────────────────────────────────────────────

function loadContour(items, lessonItems) {
  const introduced = new Set();
  const lastSeen = new Map();

  for (let i = 0; i < lessonItems.length; i++) {
    const item = lessonItems[i];
    for (const id of item.introduces || []) introduced.add(id);

    let load = 0;
    if (item.introduces?.length) load += item.introduces.length * 5;

    for (const id of item.reviews || []) {
      if (IMPLICIT.has(id)) continue;
      const gap = i - (lastSeen.get(id) ?? -10);
      const isNew = introduced.has(id) && gap > 3;
      load += isNew ? 3 : gap > 5 ? 2 : 1;
    }

    items.push({ index: i, type: item.type, load, introduces: item.introduces || [] });
    for (const id of [...(item.reviews || []), ...(item.introduces || [])]) {
      lastSeen.set(id, i);
    }
  }
}

function contourShape(items) {
  if (items.length < 3) return { peaks: 0, endsResolved: true, peakLoad: 0 };
  const loads = items.map(i => i.load);
  const peaks = [];
  for (let i = 1; i < loads.length - 1; i++) {
    if (loads[i] > loads[i - 1] && loads[i] >= loads[i + 1] && loads[i] >= 3) {
      peaks.push({ index: i, load: loads[i] });
    }
  }
  const maxLoad = Math.max(...loads);
  const tail = loads.slice(-3);
  const tailAvg = tail.reduce((a, b) => a + b, 0) / tail.length;
  const endsResolved = maxLoad < 4 || tailAvg < maxLoad * 0.5;
  return { peaks: peaks.length, endsResolved, peakLoad: maxLoad };
}

// ── Masking overlap ─────────────────────────────────────────────────

function jaccard(a, b) {
  const setA = new Set(a.filter(x => !IMPLICIT.has(x)));
  const setB = new Set(b.filter(x => !IMPLICIT.has(x)));
  if (setA.size === 0 && setB.size === 0) return 0;
  let intersection = 0;
  for (const x of setA) if (setB.has(x)) intersection++;
  const union = new Set([...setA, ...setB]).size;
  return union === 0 ? 0 : intersection / union;
}

function nakedDrillRuns(lessonItems) {
  const runs = [];
  let runStart = -1;
  let runReviews = null;

  for (let i = 0; i < lessonItems.length; i++) {
    const item = lessonItems[i];
    if (item.type !== "exercise" && item.type !== "choice") {
      if (runStart >= 0 && i - runStart >= 3) {
        runs.push({ start: runStart, end: i - 1, length: i - runStart });
      }
      runStart = -1;
      runReviews = null;
      continue;
    }

    const reviews = item.reviews || [];
    if (runReviews === null) {
      runStart = i;
      runReviews = reviews;
    } else {
      const sim = jaccard(runReviews, reviews);
      if (sim < 0.5) {
        if (i - runStart >= 3) {
          runs.push({ start: runStart, end: i - 1, length: i - runStart });
        }
        runStart = i;
        runReviews = reviews;
      } else {
        runReviews = reviews;
      }
    }
  }
  if (runStart >= 0 && lessonItems.length - runStart >= 3) {
    runs.push({ start: runStart, end: lessonItems.length - 1, length: lessonItems.length - runStart });
  }
  return runs;
}

// ── Report ──────────────────────────────────────────────────────────

const RHYTHM_THRESHOLD = 0.3;
const MAX_NAKED_RUN = 3;

let totalIssues = 0;

for (const mod of modules) {
  for (const lesson of mod.lessons) {
    const sig = rhythmSignature(lesson.items);
    const rv = rhythmVariance(sig);
    const pr = patternRepetition(sig);

    const contourItems = [];
    loadContour(contourItems, lesson.items);
    const shape = contourShape(contourItems);

    const naked = nakedDrillRuns(lesson.items);

    const issues = [];

    if (rv < RHYTHM_THRESHOLD) {
      issues.push(`  RHYTHM: variance ${rv.toFixed(2)} < ${RHYTHM_THRESHOLD} (metronome) — pattern: ${sig.join("")}`);
    }
    if (pr > 0.7 && lesson.items.length > 10) {
      issues.push(`  RHYTHM: ${(pr * 100).toFixed(0)}% pattern repetition (note + same-length exercise blocks) — pattern: ${sig.join("")}`);
    }

    if (shape.peaks === 0 && lesson.items.length > 10) {
      issues.push(`  LOAD: no peaks detected — flat contour (peak load: ${shape.peakLoad})`);
    }
    if (!shape.endsResolved && lesson.items.length > 10) {
      issues.push(`  LOAD: doesn't resolve — last 3 items near peak load`);
    }

    for (const run of naked) {
      if (run.length > MAX_NAKED_RUN) {
        const items = lesson.items.slice(run.start, run.end + 1);
        const prompts = items.map(i => i.prompt || i.body?.slice(0, 30) || "?").join(" / ");
        issues.push(`  MASKING: naked drill run of ${run.length} at items ${run.start + 1}-${run.end + 1}: ${prompts}`);
      }
    }

    if (issues.length) {
      totalIssues += issues.length;
      console.log(`\n${lesson.id} — ${lesson.title} (${lesson.items.length} items, rv: ${rv.toFixed(2)}, pr: ${(pr * 100).toFixed(0)}%)`);
      for (const issue of issues) console.log(issue);
    }
  }
}

if (totalIssues === 0) {
  console.log("\nAll lessons pass dynamics checks.");
} else {
  console.log(`\n${totalIssues} issues across all lessons.`);
}

console.log("");
fs.rmSync(outDir, { recursive: true });
