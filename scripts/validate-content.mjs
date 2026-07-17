// Structural + pedagogical checks for the course content.
// Runs against the built content via vite's esbuild bundler.
import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-content-"));

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

// Second build for the pedagogy data files
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
const { vocab } = await import(path.join(outDir, "pedagogy.js"));
const { cognates, cognateForms } = await import(path.join(outDir, "pedagogy.js"));
const { expand } = await import(path.join(outDir, "pedagogy.js"));

const errors = [];
const warnings = [];
const lessonIds = new Set();
const cyrillic = /[Ѐ-ӿ]/;
const cyrillicWord = /[Ѐ-ӿа-яА-ЯёЁ]+/g;

let lessonCount = 0;
let itemCount = 0;
let exerciseCount = 0;

// === Structural checks (existing) ===

for (const mod of modules) {
  if (!mod.id || !mod.title) errors.push(`module missing id/title: ${JSON.stringify(mod.id)}`);
  for (const lesson of mod.lessons) {
    lessonCount++;
    if (lessonIds.has(lesson.id)) errors.push(`duplicate lesson id: ${lesson.id}`);
    lessonIds.add(lesson.id);
    if (!lesson.items?.length) errors.push(`${lesson.id}: no items`);
    if (lesson.items.length < 8) errors.push(`${lesson.id}: suspiciously short (${lesson.items.length} items)`);
    lesson.items.forEach((item, i) => {
      itemCount++;
      const where = `${lesson.id}[${i}]`;
      if (item.type === "note") {
        if (!item.body?.trim()) errors.push(`${where}: empty note body`);
        for (const s of item.speak ?? []) {
          if (!cyrillic.test(s)) errors.push(`${where}: speak chip has no Cyrillic: "${s}"`);
        }
      } else if (item.type === "exercise") {
        exerciseCount++;
        if (!item.prompt?.trim()) errors.push(`${where}: empty prompt`);
        if (!item.answer?.trim()) errors.push(`${where}: empty answer`);
        if (item.answer && item.accept?.some((a) => a.trim() === item.answer.trim())) {
          errors.push(`${where}: accept duplicates the answer`);
        }
      } else if (item.type === "choice") {
        exerciseCount++;
        if (!item.options || item.options.length < 2) errors.push(`${where}: needs 2+ options`);
        if (
          typeof item.correct !== "number" ||
          item.correct < 0 ||
          item.correct >= (item.options?.length ?? 0)
        ) {
          errors.push(`${where}: correct index out of range`);
        }
      } else {
        errors.push(`${where}: unknown item type ${item.type}`);
      }
    });
  }
}

// === Pedagogical checks ===

// Build the "all known" sets
const allCognates = new Set([...cognates, ...cognateForms]);
const introducedConcepts = new Set();
const conceptIntroLocation = new Map(); // concept id -> "lessonId[idx]"
const conceptLastSeen = new Map(); // concept id -> lesson index
const conceptReviewCount = new Map(); // concept id -> count
const vocabAvailable = new Set(); // cumulative available vocabulary (expanded forms)
const vocabLemmasIntroduced = new Set(); // lemmas only
const vocabUsedInExercises = new Set(); // track which vocab lemmas appear in exercises

// Flatten lessons in order
const orderedLessons = [];
for (const mod of modules) {
  for (const lesson of mod.lessons) {
    orderedLessons.push({ mod, lesson });
  }
}

// Check concept graph for cycles
function checkCycles() {
  const visited = new Set();
  const stack = new Set();
  function dfs(id) {
    if (stack.has(id)) {
      errors.push(`concept graph has a cycle involving "${id}"`);
      return;
    }
    if (visited.has(id)) return;
    stack.add(id);
    const concept = conceptsById.get(id);
    if (concept) {
      for (const req of concept.requires) {
        if (!conceptsById.has(req)) {
          errors.push(`concept "${id}" requires unknown concept "${req}"`);
        } else {
          dfs(req);
        }
      }
    }
    stack.delete(id);
    visited.add(id);
  }
  for (const c of concepts) dfs(c.id);
}
checkCycles();

// Walk all items in order
let lessonIndex = 0;
for (const { mod, lesson } of orderedLessons) {
  // Add vocabulary for this lesson
  const lessonVocab = vocab[lesson.id] || [];
  for (const v of lessonVocab) {
    vocabLemmasIntroduced.add(v.word);
    const expanded = expand(v, introducedConcepts);
    for (const form of expanded) vocabAvailable.add(form.toLowerCase());
    // Multi-word entries: also add individual component words
    if (v.word.includes(" ")) {
      for (const part of v.word.split(" ")) vocabAvailable.add(part.toLowerCase());
    }
  }

  let lessonComplexitySum = 0;

  lesson.items.forEach((item, i) => {
    const where = `${lesson.id}[${i}]`;

    // Check introduces tags
    if (item.introduces) {
      for (const cid of item.introduces) {
        if (!conceptsById.has(cid)) {
          errors.push(`${where}: introduces unknown concept "${cid}"`);
          continue;
        }
        if (introducedConcepts.has(cid)) {
          warnings.push(`${where}: concept "${cid}" already introduced at ${conceptIntroLocation.get(cid)}`);
        }
        // Check graph prerequisites
        const concept = conceptsById.get(cid);
        for (const req of concept.requires) {
          if (!introducedConcepts.has(req)) {
            errors.push(`${where}: introduces "${cid}" but prerequisite "${req}" hasn't been introduced yet`);
          }
        }
        introducedConcepts.add(cid);
        conceptIntroLocation.set(cid, where);
        conceptLastSeen.set(cid, lessonIndex);
        lessonComplexitySum += concept.complexity;

        // Re-expand vocab with newly introduced concept
        for (const v of [...vocabLemmasIntroduced].map((w) => {
          const allVocab = Object.values(vocab).flat();
          return allVocab.find((ve) => ve.word === w);
        }).filter(Boolean)) {
          const expanded = expand(v, introducedConcepts);
          for (const form of expanded) vocabAvailable.add(form.toLowerCase());
        }
      }
    }

    // Check requires tags
    if (item.requires) {
      for (const cid of item.requires) {
        if (!conceptsById.has(cid)) {
          errors.push(`${where}: requires unknown concept "${cid}"`);
        } else if (!introducedConcepts.has(cid)) {
          errors.push(`${where}: requires "${cid}" but it hasn't been introduced yet`);
        }
      }
    }

    // Track reviews
    if (item.reviews) {
      for (const cid of item.reviews) {
        if (!conceptsById.has(cid)) {
          errors.push(`${where}: reviews unknown concept "${cid}"`);
        } else {
          conceptLastSeen.set(cid, lessonIndex);
          conceptReviewCount.set(cid, (conceptReviewCount.get(cid) || 0) + 1);
        }
      }
    }

    // Vocabulary gating: check Cyrillic words in exercise answers
    // Skip module 0 - it's reading/typing practice, not vocabulary teaching
    if (item.type === "exercise" && !lesson.id.startsWith("m0")) {
      const fieldsToCheck = [
        item.answer,
        ...(item.accept || []),
      ];
      for (const text of fieldsToCheck) {
        if (!text) continue;
        const words = text.match(cyrillicWord) || [];
        for (const word of words) {
          const lower = word.toLowerCase();
          vocabUsedInExercises.add(lower);
          if (!vocabAvailable.has(lower) && !allCognates.has(lower)) {
            // Skip single-letter words (е, а, и, с, в - function words)
            if (lower.length <= 1) continue;
            // Skip pronouns, particles, and function words that are concepts
            const functionWords = [
              "аз", "ти", "той", "тя", "ние", "вие", "те",
              "не", "да", "ли", "нали", "от", "но", "моля",
              "ме", "те", "го", "я", "ни", "ви", "ги",
              "ми", "му", "ѝ", "се", "на", "за", "до",
              "как", "къде", "какво", "кой", "коя", "кога",
              "защо", "защото", "че", "или", "може",
              "тук", "там", "това",
              "още", "всичко", "много", "малко", "добре",
              // Future/conditional particles
              "ще", "би",
              // Strong pronouns
              "мен", "теб", "тебе",
              // Perfective verb forms (not modeled in expander yet)
              "кажа", "казах", "бъде", "бъдат",
              // Question/quantifier words
              "колко", "всеки",
              // Numbers
              "един", "една", "едно", "два", "две", "три",
              "четири", "пет", "трите",
            ];
            if (functionWords.includes(lower)) continue;
            // Skip proper nouns (start with capital in original)
            if (word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()) continue;

            warnings.push(`${where}: word "${word}" not in vocabulary or cognate list at this point`);
          }
        }
      }
    }
  });

  // Concept density check
  if (lessonComplexitySum > 12) {
    warnings.push(`${lesson.id}: high concept density (complexity sum: ${lessonComplexitySum}, threshold: 12)`);
  }

  lessonIndex++;
}

// Orphan concept check
for (const c of concepts) {
  if (!introducedConcepts.has(c.id)) {
    warnings.push(`concept "${c.id}" (${c.name}) is defined but never introduced in any content item`);
  }
}

// Reinforcement spacing check
const MAX_GAP = 8; // lessons
const MIN_REVIEWS = 2;
for (const c of concepts) {
  if (c.complexity >= 3 && introducedConcepts.has(c.id)) {
    const reviews = conceptReviewCount.get(c.id) || 0;
    if (reviews < MIN_REVIEWS) {
      warnings.push(`concept "${c.id}": complexity ${c.complexity} but only ${reviews} reviews (need ${MIN_REVIEWS}+)`);
    }
  }
}

// Dead vocabulary check (skip greetings/interjections - pos "other")
for (const entries of Object.values(vocab)) {
  for (const v of entries) {
    if (v.pos === "other") continue;
    if (!vocabUsedInExercises.has(v.word.toLowerCase())) {
      // Check expanded forms too
      const expanded = expand(v, introducedConcepts);
      const used = expanded.some((f) => vocabUsedInExercises.has(f.toLowerCase()));
      if (!used) {
        warnings.push(`vocab "${v.word}" (${v.gloss}): taught but never appears in any exercise`);
      }
    }
  }
}

// === Output ===

console.log(
  `content: ${modules.length} modules, ${lessonCount} lessons, ${itemCount} items (${exerciseCount} exercises/choices)`
);
console.log(
  `concepts: ${concepts.length} defined, ${introducedConcepts.size} introduced, ${concepts.length - introducedConcepts.size} orphaned`
);
console.log(
  `vocabulary: ${vocabLemmasIntroduced.size} lemmas, ${vocabAvailable.size} expanded forms, ${allCognates.size} cognates`
);

if (errors.length) {
  console.error(`\n${errors.length} ERRORS:`);
  for (const e of errors) console.error(" -", e);
}

if (warnings.length) {
  console.warn(`\n${warnings.length} WARNINGS:`);
  for (const w of warnings) console.warn(" -", w);
}

if (errors.length) {
  process.exit(1);
}
console.log("\nContent validation passed.");
