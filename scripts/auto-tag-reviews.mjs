// Auto-tag exercises with `reviews` arrays by analyzing which concepts
// each exercise reinforces. Uses claude -p to do the analysis per-module.
// Outputs a JSON file of tags, then a second invocation applies them.
import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileP = promisify(execFile);

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-tag-"));

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
const { concepts } = await import(path.join(outDir, "pedagogy.js"));

// Build concept introduction order
const grammarConcepts = concepts.filter((c) => c.kind !== "word");
const wordConcepts = concepts.filter((c) => c.kind === "word");

const conceptIntroOrder = new Map();
let introIdx = 0;

const orderedLessons = [];
for (const mod of modules) {
  for (const lesson of mod.lessons) {
    orderedLessons.push(lesson);
  }
}

for (const lesson of orderedLessons) {
  // Word concepts introduced at lesson start
  for (const wc of wordConcepts) {
    if (wc.lesson === lesson.id) {
      conceptIntroOrder.set(wc.id, introIdx++);
    }
  }
  // Grammar concepts introduced via tags
  for (const item of lesson.items) {
    if (item.introduces) {
      for (const cid of item.introduces) {
        if (!conceptIntroOrder.has(cid)) {
          conceptIntroOrder.set(cid, introIdx++);
        }
      }
    }
  }
}

// For each module, build the list of concepts available by that module's start
function conceptsAvailableByLesson(lessonId) {
  const available = [];
  for (const lesson of orderedLessons) {
    // Word concepts
    for (const wc of wordConcepts) {
      if (wc.lesson === lesson.id) available.push(wc.id);
    }
    // Grammar concepts
    for (const item of lesson.items) {
      if (item.introduces) {
        for (const cid of item.introduces) {
          available.push(cid);
        }
      }
    }
    if (lesson.id === lessonId) break;
  }
  return available;
}

const PROMPT = `You are analyzing exercises from a Bulgarian language course to determine which grammar/vocabulary concepts each exercise REINFORCES (reviews).

An exercise "reviews" a concept when it requires the learner to USE that concept to construct the answer, even though the exercise isn't explicitly teaching it. For example:
- An exercise asking "I want water" reviews verb-а-family (because искам is а-family) and reviews the word "вода"
- An exercise asking "The big house" reviews adj-agreement and definite-masc
- An exercise using "не искам" reviews не-negation

Rules:
- Only tag concepts that the learner must actively USE to produce the answer
- Do NOT tag the concept an exercise INTRODUCES (that's already tracked separately)
- Do NOT tag concepts that are merely present in the prompt but not required in the answer
- Skip module 0 exercises (reading practice, no concepts to review)
- Be conservative - only tag clear, unambiguous reviews
- For word concepts, only tag them if the word (or one of its forms) appears in the ANSWER
- For grammar concepts, tag them when the grammatical pattern is needed in the answer

AVAILABLE CONCEPTS at this point in the course:
CONCEPTS_LIST

EXERCISES to analyze (format: lessonId[index] | type | prompt | answer):
EXERCISES_LIST

Return a JSON object mapping "lessonId[index]" to an array of concept IDs that exercise reviews.
Only include exercises that review at least one concept. Skip exercises that don't clearly review anything.
Return ONLY valid JSON, no explanation.`;

const CONCURRENCY = 4;

async function analyzeLesson(lesson, available) {
  const exercises = [];
  lesson.items.forEach((item, i) => {
    if (item.type === "exercise" || item.type === "choice") {
      const answer = item.type === "exercise" ? item.answer : item.options?.[item.correct];
      exercises.push({
        key: `${lesson.id}[${i}]`,
        type: item.type,
        prompt: item.prompt,
        answer: answer || "",
      });
    }
  });

  if (exercises.length === 0) return {};

  const conceptLines = available.map((cid) => {
    const c = concepts.find((x) => x.id === cid);
    if (!c) return null;
    return `${c.id}: ${c.name}`;
  }).filter(Boolean);

  const exerciseLines = exercises.map((e) =>
    `${e.key} | ${e.type} | ${e.prompt.replace(/\n/g, " ").slice(0, 100)} | ${e.answer.slice(0, 80)}`
  );

  const prompt = PROMPT
    .replace("CONCEPTS_LIST", conceptLines.join("\n"))
    .replace("EXERCISES_LIST", exerciseLines.join("\n"));

  const promptFile = path.join(os.tmpdir(), `hayde-tag-${lesson.id}-${Date.now()}.txt`);
  fs.writeFileSync(promptFile, prompt);

  try {
    const { stdout } = await execFileP("bash", [
      "-c", `cat "${promptFile}" | claude -p --tools "" --strict-mcp-config --mcp-config '{"mcpServers":{}}' --setting-sources "" --no-session-persistence`
    ], {
      timeout: 120000,
      env: { ...process.env, ENABLE_CLAUDEAI_MCP_SERVERS: "false" },
    });

    const jsonMatch = stdout.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error(`No JSON in response for ${lesson.id}:`, stdout.slice(0, 300));
      return {};
    }
    return JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error(`Error analyzing ${lesson.id}:`, err.message?.slice(0, 200));
    return {};
  } finally {
    try { fs.unlinkSync(promptFile); } catch {}
  }
}

// Build lesson list with available concepts at each point
const lessonsToProcess = [];
for (const lesson of orderedLessons) {
  if (lesson.id.startsWith("m0")) continue;
  const available = conceptsAvailableByLesson(lesson.id);
  lessonsToProcess.push({ lesson, available });
}

const allTags = {};

for (let i = 0; i < lessonsToProcess.length; i += CONCURRENCY) {
  const batch = lessonsToProcess.slice(i, i + CONCURRENCY);
  console.error(`Processing: ${batch.map((b) => b.lesson.id).join(", ")}`);
  const results = await Promise.all(batch.map((b) => analyzeLesson(b.lesson, b.available)));
  for (const result of results) {
    Object.assign(allTags, result);
  }
}

// Filter out introduces (don't tag as review what's being introduced)
const orderedItems = [];
for (const mod of modules) {
  for (const lesson of mod.lessons) {
    lesson.items.forEach((item, i) => {
      orderedItems.push({ key: `${lesson.id}[${i}]`, item });
    });
  }
}

const itemsByKey = new Map(orderedItems.map((x) => [x.key, x.item]));

for (const [key, reviews] of Object.entries(allTags)) {
  const item = itemsByKey.get(key);
  if (!item) continue;
  const introduces = new Set(item.introduces || []);
  const existing = new Set(item.reviews || []);
  // Filter out concepts that are introduced by this item or already reviewed
  allTags[key] = reviews.filter((cid) =>
    !introduces.has(cid) && !existing.has(cid) && conceptIntroOrder.has(cid)
  );
  if (allTags[key].length === 0) delete allTags[key];
}

// Output the tags
const outputPath = path.join(root, "scripts", "review-tags.json");
fs.writeFileSync(outputPath, JSON.stringify(allTags, null, 2));

let totalTags = 0;
for (const reviews of Object.values(allTags)) totalTags += reviews.length;
console.log(`Generated ${Object.keys(allTags).length} exercise annotations with ${totalTags} total review tags`);
console.log(`Written to ${outputPath}`);

fs.rmSync(outDir, { recursive: true });
