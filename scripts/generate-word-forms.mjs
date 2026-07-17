// Generate word concept entries with all surface forms via LLM.
// Reads vocab.ts entries, sends each to claude -p for form generation,
// outputs TypeScript ready to paste into concepts.ts.

import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileP = promisify(execFile);

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-gen-"));

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
    emptyOutDir: true,
    minify: false,
  },
});

const { vocab } = await import(path.join(outDir, "pedagogy.js"));
const { concepts } = await import(path.join(outDir, "pedagogy.js"));

const grammarConcepts = concepts
  .filter((c) => c.kind === "grammar" || c.kind === "pattern")
  .map((c) => c.id);

const PROMPT_TEMPLATE = `You are a Bulgarian language expert. Given a Bulgarian word, generate ALL its surface forms grouped by the grammar concept that unlocks them.

The grammar concepts in our system are:
GRAMMAR_CONCEPTS

For the word below, return a JSON object with:
- "base": array of forms available immediately (the lemma + any forms that don't require additional grammar)
- For each grammar concept that unlocks additional forms, a key matching the concept ID with an array of those forms

For verbs:
- "base" = all present tense conjugations (6 persons: аз/ти/той-тя/ние/вие/те)
- "past-х" or "past-и-family" = all past tense forms (6 persons) - use past-х for а-family, past-и-family for и-family
- "future-ще" = any perfective forms if the verb has them (e.g. кажа from казвам)
- Include the negative present forms with не as separate entries if they're irregular (like нямам)
- Do NOT include ще+verb forms (those are compositional, not word forms)

For nouns:
- "base" = just the lemma
- "definite-masc" / "definite-fem" / "definite-neuter" = the definite form(s), pick the right one by gender
- "noun-plural-basic" = plural form(s)

For adjectives:
- "base" = masculine form (the lemma)
- "adj-agreement" = feminine (-а), neuter (-о), plural (-и) forms
- "adj-definite" = all definite forms (masculine -ият, feminine -ата, neuter -ото, plural -ите)

For adverbs and "other" (greetings etc):
- "base" = just the word itself (and any alternate spellings)

IMPORTANT: Only include forms that are REAL Bulgarian words. Don't fabricate forms.
Return ONLY valid JSON, no explanation.

Word: WORD
Part of speech: POS
Gender: GENDER`;

const CONCURRENCY = 6;

async function generateForms(entry) {
  const prompt = PROMPT_TEMPLATE
    .replace("GRAMMAR_CONCEPTS", grammarConcepts.join(", "))
    .replace("WORD", entry.word)
    .replace("POS", entry.pos)
    .replace("GENDER", entry.gender || "n/a");

  const promptFile = path.join(os.tmpdir(), `hayde-prompt-${process.pid}-${Date.now()}.txt`);
  fs.writeFileSync(promptFile, prompt);

  try {
    const { stdout } = await execFileP("bash", [
      "-c", `cat "${promptFile}" | claude -p --tools "" --strict-mcp-config --mcp-config '{"mcpServers":{}}' --setting-sources "" --no-session-persistence`
    ], {
      timeout: 60000,
      env: { ...process.env, ENABLE_CLAUDEAI_MCP_SERVERS: "false" },
    });

    const jsonMatch = stdout.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error(`No JSON in response for ${entry.word}:`, stdout.slice(0, 200));
      return null;
    }
    return JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error(`Error generating forms for ${entry.word}:`, err.message);
    return null;
  } finally {
    try { fs.unlinkSync(promptFile); } catch {}
  }
}

async function processInBatches(entries, batchSize) {
  const results = [];
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    console.error(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(entries.length / batchSize)}: ${batch.map(([, e]) => e.word).join(", ")}`);
    const batchResults = await Promise.all(
      batch.map(async ([lesson, entry]) => {
        const forms = await generateForms(entry);
        return { lesson, entry, forms };
      })
    );
    results.push(...batchResults);
  }
  return results;
}

// Flatten vocab into (lesson, entry) pairs
const allEntries = [];
for (const [lesson, entries] of Object.entries(vocab)) {
  for (const entry of entries) {
    allEntries.push([lesson, entry]);
  }
}

console.error(`Generating forms for ${allEntries.length} vocab entries...`);
const results = await processInBatches(allEntries, CONCURRENCY);

// Group by lesson for readable output
const byLesson = new Map();
for (const { lesson, entry, forms } of results) {
  if (!forms) continue;
  if (!byLesson.has(lesson)) byLesson.set(lesson, []);
  byLesson.get(lesson).push({ entry, forms });
}

// Output TypeScript
const lines = [];
for (const [lesson, items] of byLesson) {
  lines.push(`  // --- ${lesson} ---`);
  for (const { entry, forms } of items) {
    const id = entry.word;
    const genderStr = entry.gender ? `, gender: "${entry.gender}"` : "";
    const formsStr = JSON.stringify(forms);
    lines.push(
      `  { id: "${id}", kind: "word", name: "${entry.word} - ${entry.gloss}", pos: "${entry.pos}"${genderStr}, lesson: "${lesson}", requires: [], frequency: ${entry.frequency}, complexity: 1, forms: ${formsStr} },`
    );
  }
}

console.log(lines.join("\n"));

// Clean up
fs.rmSync(outDir, { recursive: true });
