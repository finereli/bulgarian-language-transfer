// Structural sanity checks for the course content.
// Runs against the built content via a lightweight TS strip (esbuild through vite
// is heavier than needed) — instead we import the TS sources with tsx-like
// transpilation using node's --experimental-strip-types when available, or
// fall back to a regex-free structural check on the built bundle.
//
// Simplest robust approach: use vite's dependency (esbuild) to bundle content.
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

const { modules } = await import(path.join(outDir, "content.js"));

const errors = [];
const lessonIds = new Set();
const cyrillic = /[Ѐ-ӿ]/;

let lessonCount = 0;
let itemCount = 0;
let exerciseCount = 0;

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

console.log(
  `content: ${modules.length} modules, ${lessonCount} lessons, ${itemCount} items (${exerciseCount} exercises/choices)`
);

if (errors.length) {
  console.error("\nContent validation FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log("Content validation passed.");
