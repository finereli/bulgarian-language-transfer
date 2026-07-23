// Cross-language concept graph review.
// Reports which concepts have cross-language annotations and which don't,
// grouped by relation type. This reviews the GRAPH, not item-level notes.
import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "hayde-xling-"));

await build({
  root,
  logLevel: "error",
  configFile: false,
  build: {
    lib: { entry: path.join(root, "src/content/pedagogy-bundle.ts"), formats: ["es"], fileName: "pedagogy" },
    outDir,
    emptyOutDir: true,
    minify: false,
  },
});

const { concepts, crossLanguage } = await import(path.join(outDir, "pedagogy.js"));

const LANGS = ["ru", "he"];
const LANG_LABELS = { ru: "Russian", he: "Hebrew" };
const RELATION_ORDER = ["false-friend", "divergent", "shared", "absent"];
const RELATION_LABELS = {
  "false-friend": "FALSE FRIENDS",
  divergent: "DIVERGENT",
  shared: "SHARED",
  absent: "ABSENT",
};

for (const lang of LANGS) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  ${LANG_LABELS[lang]} parallels`);
  console.log(`${"=".repeat(60)}`);

  const byRelation = {};
  for (const rel of RELATION_ORDER) byRelation[rel] = [];
  const unannotated = [];

  for (const c of concepts) {
    const entry = crossLanguage[c.id];
    const parallel = entry?.[lang];
    if (parallel) {
      byRelation[parallel.relation].push({ concept: c, parallel });
    } else {
      unannotated.push(c);
    }
  }

  for (const rel of RELATION_ORDER) {
    const entries = byRelation[rel];
    if (!entries.length) continue;
    console.log(`\n--- ${RELATION_LABELS[rel]} (${entries.length}) ---\n`);
    for (const e of entries) {
      console.log(`  ${e.concept.id}: ${e.parallel.note}`);
    }
  }

  const annotated = RELATION_ORDER.reduce((n, r) => n + byRelation[r].length, 0);
  console.log(`\n--- Summary ---`);
  console.log(`  ${annotated}/${concepts.length} concepts annotated for ${LANG_LABELS[lang]}`);
  for (const rel of RELATION_ORDER) {
    if (byRelation[rel].length) console.log(`    ${RELATION_LABELS[rel]}: ${byRelation[rel].length}`);
  }
  console.log(`  ${unannotated.length} unannotated`);
}

console.log("");
fs.rmSync(outDir, { recursive: true });
