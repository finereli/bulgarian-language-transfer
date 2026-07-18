import { execSync } from "node:child_process";
import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-review-"));

await build({
  root, logLevel: "error", configFile: false,
  build: { lib: { entry: path.join(root, "src/content/index.ts"), formats: ["es"], fileName: "content" }, outDir, emptyOutDir: true, minify: false },
});

const { modules } = await import(path.join(outDir, "content.js"));

// Get the diff to find new exercises
const diff = execSync("git diff HEAD~1 -- src/content/", { cwd: root, encoding: "utf8" });

// Extract new exercise blocks from the diff
const newExercises = [];
const diffLines = diff.split("\n");
let currentFile = null;

for (let i = 0; i < diffLines.length; i++) {
  if (diffLines[i].startsWith("diff --git")) {
    currentFile = diffLines[i].match(/b\/(src\/content\/\S+)/)?.[1];
  }
  if (diffLines[i].startsWith("+") && diffLines[i].includes('type: "exercise"') && !diffLines[i].startsWith("+++")) {
    // Collect the full exercise block
    let block = [];
    let j = i;
    let braceDepth = 0;
    let started = false;
    // Walk back to find the opening brace
    while (j > 0 && !diffLines[j].includes("{")) j--;
    for (let k = j; k < diffLines.length; k++) {
      const line = diffLines[k];
      if (!line.startsWith("+") && !line.startsWith(" ")) continue;
      const content = line.startsWith("+") ? line.slice(1) : line;
      if (content.includes("{")) { braceDepth++; started = true; }
      if (started) block.push(content);
      if (content.includes("}")) { braceDepth--; if (braceDepth <= 0 && started) break; }
    }
    const blockText = block.join("\n").trim();
    if (blockText.includes("prompt") && blockText.includes("answer")) {
      newExercises.push({ file: currentFile, text: blockText });
    }
  }
}

// Deduplicate by prompt
const seen = new Set();
const unique = newExercises.filter(e => {
  const prompt = e.text.match(/prompt:\s*"([^"]+)"/)?.[1];
  if (!prompt || seen.has(prompt)) return false;
  seen.add(prompt);
  return true;
});

console.log(`Found ${unique.length} new exercises to review.\n`);

// Build the full lesson sequence for context
const lessonSequence = [];
for (const mod of modules) {
  for (const lesson of mod.lessons) {
    const items = lesson.items.map((item, idx) => {
      if (item.type === "exercise") {
        return `  [exercise] "${item.prompt}" → "${item.answer}"${item.reviews ? ` reviews:[${item.reviews.join(",")}]` : ""}`;
      } else if (item.type === "choice") {
        return `  [choice] "${item.prompt}"`;
      } else if (item.type === "note") {
        return `  [note] ${item.title || "(untitled)"}${item.introduces ? ` introduces:[${item.introduces.join(",")}]` : ""}`;
      }
      return null;
    }).filter(Boolean);
    lessonSequence.push({ id: lesson.id, title: lesson.title, items });
  }
}

const courseOutline = lessonSequence.map(l =>
  `=== ${l.id}: ${l.title} ===\n${l.items.join("\n")}`
).join("\n\n");

// Review each exercise
const PROMPT_TEMPLATE = `You are reviewing exercises for a Language Transfer-style Bulgarian course (Хайде!).

TMG PRINCIPLES:
1. MASKED REPETITION: Every exercise should feel like natural language use, not a drill. The review concept is woven into a sentence the learner constructs for meaning, not to practice the concept.
2. BUILDING ON KNOWN: The exercise can only use grammar and vocabulary introduced in earlier lessons. Nothing new should appear in the answer without a parenthetical hint.
3. NATURAL BULGARIAN: The Bulgarian must be correct, natural, and something a native speaker would actually say.
4. PROGRESSIVE DIFFICULTY: The exercise should match the difficulty level of surrounding exercises in its lesson.
5. HINTS GUIDE, DON'T GIVE AWAY: The hint should help the learner construct the answer, not hand them the full answer.
6. REVIEW TAGS ACCURATE: The reviews array should list exactly the concepts being practiced.

COURSE CONTEXT (all lessons in order, showing what's been taught before this exercise):
${courseOutline}

EXERCISE TO REVIEW (from FILE):
EXERCISE_TEXT

Evaluate this exercise against the 6 principles above. For each:
- PASS if it meets the principle
- FAIL with a specific explanation if it doesn't

Then give an overall verdict: GOOD, NEEDS_FIX (with specific fix), or BAD (should be removed).

Be strict about Bulgarian correctness. Be strict about whether all words in the answer have been taught by that lesson. Be lenient about masked repetition - a review exercise doesn't need to be perfectly disguised, just natural.

Format your response as JSON:
{"principles":{"masked_repetition":"PASS or FAIL: reason","building_on_known":"PASS or FAIL: reason","natural_bulgarian":"PASS or FAIL: reason","progressive_difficulty":"PASS or FAIL: reason","hints":"PASS or FAIL: reason","review_tags":"PASS or FAIL: reason"},"verdict":"GOOD or NEEDS_FIX or BAD","fix":"specific fix if NEEDS_FIX, null otherwise"}`;

const results = [];
const CONCURRENCY = 4;

async function reviewExercise(ex, index) {
  const prompt = PROMPT_TEMPLATE
    .replace("EXERCISE_TEXT", ex.text)
    .replace("FILE", ex.file);

  try {
    const result = execSync(
      `claude -p --tools "" --strict-mcp-config --mcp-config '{"mcpServers":{}}' --setting-sources "" --no-session-persistence`,
      {
        input: prompt,
        encoding: "utf8",
        timeout: 120000,
        env: { ...process.env, ENABLE_CLAUDEAI_MCP_SERVERS: "false" },
        maxBuffer: 1024 * 1024,
      }
    );

    // Extract JSON from response
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return { index, file: ex.file, exercise: ex.text, ...parsed };
    }
    return { index, file: ex.file, exercise: ex.text, raw: result, verdict: "PARSE_ERROR" };
  } catch (err) {
    return { index, file: ex.file, exercise: ex.text, verdict: "ERROR", error: err.message };
  }
}

// Run in batches
for (let i = 0; i < unique.length; i += CONCURRENCY) {
  const batch = unique.slice(i, i + CONCURRENCY);
  const batchResults = await Promise.all(
    batch.map((ex, j) => reviewExercise(ex, i + j))
  );
  results.push(...batchResults);
  console.log(`Reviewed ${Math.min(i + CONCURRENCY, unique.length)}/${unique.length}`);
}

// Output summary
console.log("\n=== REVIEW RESULTS ===\n");

const issues = results.filter(r => r.verdict !== "GOOD");
const good = results.filter(r => r.verdict === "GOOD");

console.log(`${good.length} GOOD, ${issues.length} need attention\n`);

for (const r of results) {
  const promptMatch = r.exercise.match(/prompt:\s*"([^"]+)"/);
  const label = promptMatch ? promptMatch[1].slice(0, 60) : "(unknown)";
  const icon = r.verdict === "GOOD" ? "✓" : r.verdict === "NEEDS_FIX" ? "!" : "✗";
  console.log(`${icon} [${r.file}] ${label}`);
  if (r.verdict !== "GOOD") {
    if (r.principles) {
      const fails = Object.entries(r.principles).filter(([,v]) => v.startsWith("FAIL"));
      for (const [k, v] of fails) console.log(`    ${k}: ${v}`);
    }
    if (r.fix) console.log(`    FIX: ${r.fix}`);
    if (r.error) console.log(`    ERROR: ${r.error.slice(0, 200)}`);
  }
}

// Save full results
const outputPath = path.join(root, "scripts", "exercise-review.json");
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
console.log(`\nFull results: ${outputPath}`);

fs.rmSync(outDir, { recursive: true });
