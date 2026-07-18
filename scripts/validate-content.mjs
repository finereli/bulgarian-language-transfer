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
const { cognates, cognateForms } = await import(path.join(outDir, "pedagogy.js"));

const errors = [];
const warnings = [];
const lessonIds = new Set();
const cyrillic = /[Ѐ-ӿ]/;
const cyrillicWord = /[Ѐ-ӿа-яА-ЯёЁ]+/g;

let lessonCount = 0;
let itemCount = 0;
let exerciseCount = 0;

// === Structural checks ===

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

const allCognates = new Set([...cognates, ...cognateForms].map(c => c.toLowerCase()));
const properNames = new Set(["петър", "мария", "германия"]);
const introducedConcepts = new Set();
const conceptIntroLocation = new Map();
const conceptLastSeen = new Map();
const conceptReviewCount = new Map();

// Available words: derived entirely from introduced concepts
const wordsAvailable = new Set();
const wordsUsedInExercises = new Set();

// Separate word concepts from grammar/function-word concepts
const wordConcepts = concepts.filter((c) => c.kind === "word");
const wordConceptsByLesson = new Map();
for (const wc of wordConcepts) {
  if (!wordConceptsByLesson.has(wc.lesson)) wordConceptsByLesson.set(wc.lesson, []);
  wordConceptsByLesson.get(wc.lesson).push(wc);
}

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

// Recalculate available words when a new grammar concept unlocks form groups
function unlockForms() {
  for (const wc of wordConcepts) {
    if (!introducedConcepts.has(wc.id)) continue;
    for (const [key, forms] of Object.entries(wc.forms)) {
      if (key === "base") continue;
      if (introducedConcepts.has(key)) {
        for (const f of forms) {
          // Multi-word forms: add both the phrase and individual words
          wordsAvailable.add(f.toLowerCase());
          if (f.includes(" ")) {
            for (const part of f.split(" ")) wordsAvailable.add(part.toLowerCase());
          }
        }
      }
    }
  }
}

// Introduce a word concept: add its base forms to available words
function introduceWordConcept(wc) {
  introducedConcepts.add(wc.id);
  for (const f of wc.forms.base || []) {
    wordsAvailable.add(f.toLowerCase());
    if (f.includes(" ")) {
      for (const part of f.split(" ")) wordsAvailable.add(part.toLowerCase());
    }
  }
  // Also unlock any form groups whose grammar concept is already introduced
  for (const [key, forms] of Object.entries(wc.forms)) {
    if (key === "base") continue;
    if (introducedConcepts.has(key)) {
      for (const f of forms) {
        wordsAvailable.add(f.toLowerCase());
        if (f.includes(" ")) {
          for (const part of f.split(" ")) wordsAvailable.add(part.toLowerCase());
        }
      }
    }
  }
}

// Walk all items in order
let lessonIndex = 0;
for (const { mod, lesson } of orderedLessons) {
  // Auto-introduce word concepts for this lesson
  const lessonWords = wordConceptsByLesson.get(lesson.id) || [];
  for (const wc of lessonWords) {
    introduceWordConcept(wc);
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

        // Function-word concepts add their words to available set
        if (concept.kind === "function-word" && concept.words) {
          for (const w of concept.words) wordsAvailable.add(w.toLowerCase());
        }

        // Grammar concepts may unlock form groups on already-introduced word concepts
        if (concept.kind === "grammar" || concept.kind === "pattern") {
          unlockForms();
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
        } else if (!introducedConcepts.has(cid) && conceptsById.get(cid).kind !== "word") {
          errors.push(`${where}: reviews "${cid}" but it hasn't been introduced yet`);
        } else {
          conceptLastSeen.set(cid, lessonIndex);
          conceptReviewCount.set(cid, (conceptReviewCount.get(cid) || 0) + 1);
        }
      }
    }

    // Vocabulary gating: check Cyrillic words in exercise answers
    // Skip module 0 (reading/typing practice)
    if (item.type === "exercise" && !lesson.id.startsWith("m0")) {
      const fieldsToCheck = [item.answer, ...(item.accept || [])];
      for (const text of fieldsToCheck) {
        if (!text) continue;
        const words = text.match(cyrillicWord) || [];
        for (const word of words) {
          const lower = word.toLowerCase();
          wordsUsedInExercises.add(lower);
          if (!wordsAvailable.has(lower) && !allCognates.has(lower)) {
            // Single-letter function words (е, а, и, с, в) are always available
            if (lower.length <= 1) continue;
            // Pronouns are grammar concepts, not words - always available once introduced
            const pronouns = [
              "аз", "ти", "той", "тя", "то", "ние", "вие", "те",
              "ме", "го", "я", "ни", "ви", "ги",
              "ми", "му", "ѝ",
              "се", "си",
              "мен", "теб", "тебе", "него", "нея",
              "мой", "моя", "мое", "мои",
            ];
            if (pronouns.includes(lower)) continue;
            // Particles that are part of grammar concepts
            const particles = ["не", "ще", "би", "на", "да"];
            if (particles.includes(lower)) continue;
            // Numbers (taught as grammar concept, not individual words)
            const numbers = ["един", "една", "едно", "два", "две", "три", "четири", "пет", "трите"];
            if (numbers.includes(lower)) continue;
            if (properNames.has(lower)) continue;

            errors.push(`${where}: word "${word}" not in vocabulary at this point`);
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

// Word ordering check: words should be explained (note/prompt) before used in answers.
// Tracks across the entire course, not just within a single lesson.
{
  // Map all word concept forms -> set of concept ids
  // A form can belong to multiple concepts (e.g. "добър" is both the adjective
  // and a component of the greeting "добър вечер")
  const allWordForms = new Map();
  function addWordForm(form, cid) {
    if (!allWordForms.has(form)) allWordForms.set(form, new Set());
    allWordForms.get(form).add(cid);
  }
  for (const wc of wordConcepts) {
    for (const forms of Object.values(wc.forms)) {
      for (const f of forms) {
        for (const part of f.toLowerCase().split(" ")) {
          addWordForm(part, wc.id);
        }
        addWordForm(f.toLowerCase(), wc.id);
      }
    }
  }

  const wordExplained = new Map();  // concept id -> first "lessonId[i]" where explained
  const wordUsedInAnswer = new Map(); // concept id -> first "lessonId[i]" where used in answer
  let globalIdx = 0;
  const wordExplainedIdx = new Map(); // concept id -> global item index of first explanation
  const wordUsedIdx = new Map();      // concept id -> global item index of first answer usage

  for (const { mod, lesson } of orderedLessons) {
    if (lesson.id.startsWith("m0")) continue;

    lesson.items.forEach((item, i) => {
      const where = `${lesson.id}[${i}]`;

      // Explanation contexts: note body, exercise/choice prompt, speak chips
      // Deliberately excludes hint/after - those are reactive help, not proactive teaching
      const explanationTexts = [];
      if (item.type === "note" && item.body) explanationTexts.push(item.body);
      if (item.prompt) explanationTexts.push(item.prompt);
      if (item.speak) {
        const speaks = Array.isArray(item.speak) ? item.speak : [item.speak];
        explanationTexts.push(...speaks);
      }

      for (const text of explanationTexts) {
        const words = text.match(cyrillicWord) || [];
        for (const w of words) {
          const cids = allWordForms.get(w.toLowerCase());
          if (!cids) continue;
          for (const cid of cids) {
            if (!wordExplained.has(cid)) {
              wordExplained.set(cid, where);
              wordExplainedIdx.set(cid, globalIdx);
            }
          }
        }
      }

      // Usage in answers
      if (item.type === "exercise") {
        const answerTexts = [item.answer, ...(item.accept || [])];
        for (const text of answerTexts) {
          if (!text) continue;
          const words = text.match(cyrillicWord) || [];
          for (const w of words) {
            const cids = allWordForms.get(w.toLowerCase());
            if (!cids) continue;
            for (const cid of cids) {
              if (!wordUsedInAnswer.has(cid)) {
                wordUsedInAnswer.set(cid, where);
                wordUsedIdx.set(cid, globalIdx);
              }
            }
          }
        }
      }

      globalIdx++;
    });
  }

  for (const [cid, usedWhere] of wordUsedInAnswer) {
    const explainedWhere = wordExplained.get(cid);
    const usedAt = wordUsedIdx.get(cid);
    const explainedAt = wordExplainedIdx.get(cid);

    if (explainedAt === undefined || explainedAt > usedAt) {
      const wc = conceptsById.get(cid);
      const detail = explainedWhere
        ? `first explained later at ${explainedWhere}`
        : "never explained in notes/prompts";
      warnings.push(`${usedWhere}: word "${cid}" (${wc?.name}) used in answer but ${detail}`);
    }
  }
}

// Orphan concept check (skip word concepts - they're auto-introduced by lesson)
for (const c of concepts) {
  if (c.kind === "word") continue;
  if (!introducedConcepts.has(c.id)) {
    warnings.push(`concept "${c.id}" (${c.name}) is defined but never introduced in any content item`);
  }
}

// Reinforcement spacing check
const MIN_REVIEWS = 2;
for (const c of concepts) {
  if (c.kind === "word") continue;
  if (c.complexity >= 3 && introducedConcepts.has(c.id)) {
    const reviews = conceptReviewCount.get(c.id) || 0;
    if (reviews < MIN_REVIEWS) {
      warnings.push(`concept "${c.id}": complexity ${c.complexity} but only ${reviews} reviews (need ${MIN_REVIEWS}+)`);
    }
  }
}

// Dead word check (word concepts whose forms never appear in exercises)
for (const wc of wordConcepts) {
  if (wc.pos === "other") continue;
  const allForms = Object.values(wc.forms).flat();
  const used = allForms.some((f) => {
    const lower = f.toLowerCase();
    if (wordsUsedInExercises.has(lower)) return true;
    if (lower.includes(" ")) {
      return lower.split(" ").some((p) => wordsUsedInExercises.has(p));
    }
    return false;
  });
  if (!used) {
    warnings.push(`word "${wc.id}" (${wc.name}): taught but never appears in any exercise`);
  }
}

// === Output ===

const grammarCount = concepts.filter((c) => c.kind !== "word").length;
const wordCount = wordConcepts.length;

console.log(
  `content: ${modules.length} modules, ${lessonCount} lessons, ${itemCount} items (${exerciseCount} exercises/choices)`
);
console.log(
  `concepts: ${grammarCount} grammar/function-word + ${wordCount} words = ${concepts.length} total, ${introducedConcepts.size} introduced`
);
console.log(
  `vocabulary: ${wordsAvailable.size} available forms, ${allCognates.size} cognates`
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
