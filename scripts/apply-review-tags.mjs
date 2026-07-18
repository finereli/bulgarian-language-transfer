// Apply review tags from review-tags.json to the source module files.
// Reads the JSON, finds each exercise by lessonId[index] in the source,
// and adds or merges the reviews array.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const tagsPath = path.join(root, "scripts", "review-tags.json");

if (!fs.existsSync(tagsPath)) {
  console.error("No review-tags.json found. Run auto-tag-reviews.mjs first.");
  process.exit(1);
}

const tags = JSON.parse(fs.readFileSync(tagsPath, "utf-8"));

// Parse tags into per-module groups
// Key format: "m2l3[5]" -> module "m2", lesson "m2l3", item index 5
const byModule = new Map();
for (const [key, reviews] of Object.entries(tags)) {
  if (!reviews || reviews.length === 0) continue;
  const modMatch = key.match(/^(m\d+)/);
  if (!modMatch) continue;
  const modId = modMatch[1];
  if (!byModule.has(modId)) byModule.set(modId, []);
  byModule.get(modId).push({ key, reviews });
}

let totalAdded = 0;
let filesModified = 0;

for (const [modId, entries] of byModule) {
  const filePath = path.join(root, "src", "content", `module${modId.slice(1)}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  let source = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // For each tagged exercise, find it in source and add reviews
  for (const { key, reviews } of entries) {
    const [lessonId, idxStr] = key.match(/^(.+)\[(\d+)\]$/).slice(1);
    const idx = parseInt(idxStr);

    // Strategy: find the exercise by counting items in the lesson.
    // We look for the lesson's items array, then find the Nth exercise/choice/note.
    // We'll use a simpler approach: search for patterns near the item.

    // Build a regex to find the item. Items are objects in an items array.
    // We need to find the (idx+1)th item opening brace after the lesson id.

    // Find the lesson in source
    const lessonPattern = new RegExp(`id:\\s*"${lessonId}"`);
    const lessonMatch = lessonPattern.exec(source);
    if (!lessonMatch) {
      console.error(`Lesson ${lessonId} not found in ${filePath}`);
      continue;
    }

    // Find the items array
    const afterLesson = source.slice(lessonMatch.index);
    const itemsMatch = afterLesson.match(/items:\s*\[/);
    if (!itemsMatch) continue;

    const itemsStart = lessonMatch.index + itemsMatch.index + itemsMatch[0].length;

    // Count items by tracking brace depth
    let pos = itemsStart;
    let itemCount = 0;
    let itemStart = -1;
    let itemEnd = -1;

    while (pos < source.length && itemCount <= idx) {
      // Skip whitespace
      while (pos < source.length && /\s/.test(source[pos])) pos++;

      if (source[pos] === "]") break; // end of items array

      if (source[pos] === "{") {
        if (itemCount === idx) {
          itemStart = pos;
        }

        // Find matching closing brace
        let depth = 1;
        pos++;
        while (pos < source.length && depth > 0) {
          if (source[pos] === "{") depth++;
          if (source[pos] === "}") depth--;
          pos++;
        }

        if (itemCount === idx) {
          itemEnd = pos;
        }

        itemCount++;

        // Skip comma
        while (pos < source.length && /[\s,]/.test(source[pos])) pos++;
      } else {
        pos++;
      }
    }

    if (itemStart === -1 || itemEnd === -1) {
      console.error(`Could not find item ${idx} in lesson ${lessonId}`);
      continue;
    }

    const itemSource = source.slice(itemStart, itemEnd);

    // Check if it already has reviews
    const existingReviews = itemSource.match(/reviews:\s*\[([^\]]*)\]/);
    if (existingReviews) {
      // Parse existing reviews and merge
      const existing = existingReviews[1]
        .split(",")
        .map((s) => s.trim().replace(/"/g, ""))
        .filter(Boolean);
      const merged = [...new Set([...existing, ...reviews])];
      const newReviewsStr = `reviews: [${merged.map((r) => `"${r}"`).join(", ")}]`;
      const newItemSource = itemSource.replace(/reviews:\s*\[[^\]]*\]/, newReviewsStr);
      source = source.slice(0, itemStart) + newItemSource + source.slice(itemEnd);
      const added = merged.length - existing.length;
      if (added > 0) {
        totalAdded += added;
        modified = true;
      }
    } else {
      // Add reviews before the closing brace of the item
      // Find a good insertion point - after the last property
      const reviewsStr = `reviews: [${reviews.map((r) => `"${r}"`).join(", ")}]`;

      // Insert before the closing brace. Find the last content before }
      // Look for common fields to insert after
      let insertAfter = -1;
      for (const field of ["speak", "after", "hint", "accept", "answer", "prompt", "body", "correct", "options"]) {
        const fieldRegex = new RegExp(`${field}:\\s*`);
        const fieldMatch = fieldRegex.exec(itemSource);
        if (fieldMatch) {
          // Find the end of this field's value
          let fPos = fieldMatch.index + fieldMatch[0].length;
          if (itemSource[fPos] === '"') {
            // String value - find closing quote (handling escapes)
            fPos++;
            while (fPos < itemSource.length) {
              if (itemSource[fPos] === "\\" ) { fPos += 2; continue; }
              if (itemSource[fPos] === '"') { fPos++; break; }
              fPos++;
            }
          } else if (itemSource[fPos] === "[") {
            // Array value - find matching ]
            let d = 1;
            fPos++;
            while (fPos < itemSource.length && d > 0) {
              if (itemSource[fPos] === "[") d++;
              if (itemSource[fPos] === "]") d--;
              fPos++;
            }
          } else if (itemSource[fPos] === "`") {
            // Template literal
            fPos++;
            while (fPos < itemSource.length) {
              if (itemSource[fPos] === "\\" ) { fPos += 2; continue; }
              if (itemSource[fPos] === "`") { fPos++; break; }
              fPos++;
            }
          } else {
            // Other value (number, etc) - go to next comma or brace
            while (fPos < itemSource.length && itemSource[fPos] !== "," && itemSource[fPos] !== "}") fPos++;
          }
          if (fPos > insertAfter) insertAfter = fPos;
        }
      }

      if (insertAfter === -1) {
        console.error(`Could not find insertion point in ${key}`);
        continue;
      }

      // Skip trailing comma if present
      let insertPos = insertAfter;
      while (insertPos < itemSource.length && /[\s]/.test(itemSource[insertPos])) insertPos++;
      if (itemSource[insertPos] === ",") insertPos++;

      // Detect indentation from the item
      const lineStart = source.lastIndexOf("\n", itemStart) + 1;
      const lineContent = source.slice(lineStart, itemStart);
      const baseIndent = lineContent.match(/^\s*/)?.[0] || "";
      const propIndent = baseIndent + "  ";

      const newItemSource =
        itemSource.slice(0, insertAfter) +
        ",\n" + propIndent + reviewsStr +
        itemSource.slice(insertPos);

      source = source.slice(0, itemStart) + newItemSource + source.slice(itemEnd);
      totalAdded += reviews.length;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, source);
    filesModified++;
    console.log(`${filePath}: ${entries.length} exercises tagged`);
  }
}

console.log(`\nDone: ${totalAdded} review tags added across ${filesModified} files`);
