# Concept Graph Design

A data structure that gates content authoring and generates the practice that builds fluency.

## Problem

The app teaches Bulgarian through linear lessons with notes and exercises. Two problems:

1. **Concepts sometimes appear before they're introduced.** When AI models edit content, they have no way to know whether a word or grammar rule has been taught yet. The only validation is structural (no empty fields, no duplicate IDs).

2. **Exercises rehearse but don't build usable language.** Every exercise recombines things the learner just saw. Pattern-matching within a lesson isn't the same as retrieving under load.

Both problems are solved by the same data structure: a concept graph that describes what the learner knows at any point in the course.

## Two jobs from one graph

**Linter (build time):** every concept and word is introduced before it's used. Concept density per lesson stays sane. Reinforcement gaps are flagged. A simpler model editing content gets instant, specific feedback on violations.

**Generator (runtime):** given the learner's known concepts and vocabulary, generate exercises that recombine them in ways the course never showed. Mixed retrieval across the whole known set, not just the current lesson. This builds usable language.

## Three kinds of knowledge

### Concepts (~80-120 nodes)

Grammar rules, patterns, and morphological operations. Each has prerequisite edges (a directed acyclic graph). Defined in `src/content/concepts.ts`.

```ts
interface Concept {
  id: string;
  name: string;
  kind: "grammar" | "pattern" | "function-word";
  requires: string[];   // concept ids that must come first
  frequency: number;    // 1-5, how common in real Bulgarian
  complexity: number;   // 1-5, how hard to internalize
}
```

**Grammar** concepts: noun gender, verb conjugation groups, definite article, past tense, etc.

**Pattern** concepts: -tion to -ция, -ist to -ист, and other transfer patterns from English.

**Function words** are concepts, not vocabulary. Each one (да, ли, не, на, с, за...) is really a syntax rule. ли isn't "a word meaning question" - it's a rule about second position. They live in the concept graph with prerequisites.

### Vocabulary (ordered ledger)

Open-class content words. No prerequisite edges - just a cumulative ordered list per lesson. Defined in `src/content/vocab.ts`.

```ts
interface VocabEntry {
  word: string;         // lemma form
  gloss: string;
  pos: "noun" | "verb" | "adj" | "adv" | "other";
  gender?: "м" | "ж" | "ср";
  frequency: number;    // 1-5
}

// Keyed by lesson id
const vocab: Record<string, VocabEntry[]> = { ... };
```

### Cognates (closed curated list)

Words that transfer from English without explicit teaching. A separate curated file (`src/content/cognates.ts`), not a per-entry flag. This prevents models from marking everything cognate to silence the validator.

## Morphological expander

The vocabulary ledger stores lemmas (кафе, искам) but exercises use surface forms (кафето, искаш). The morphological expander (`src/content/morphology.ts`) bridges this gap.

It's concept-aware: it only generates surface forms for morphological operations the learner has been taught. If definite articles haven't been introduced yet, кафето isn't in the expected vocabulary.

```ts
function expand(entry: VocabEntry, knownConcepts: Set<string>): string[]
```

Given a lemma + POS + gender + the set of introduced concepts, produces all surface forms the learner could be expected to recognize or produce. Irregular forms are handled via an exceptions map.

## Content item tags

Three optional fields on NoteItem, ExerciseItem, and ChoiceItem:

- `introduces?: string[]` - concept ids this item teaches for the first time
- `requires?: string[]` - concept ids needed beyond what's obvious from vocab
- `reviews?: string[]` - concept ids this item reinforces (for coverage tracking)

Most items need zero or one tag. Only items that teach something new get `introduces`. Only items that combine concepts in non-obvious ways need explicit `requires`. The `reviews` tag tracks reinforcement without blocking re-introduction (recaps are good pedagogy).

## Validator checks

All run in `npm test` via the extended `validate-content.mjs`:

- **Prerequisite ordering:** every `requires` concept must have an `introduces` on a prior item. The graph's own edges are also enforced - if concept A requires B, A's introduction must come after B's.
- **No orphan concepts:** every concept defined in the graph is introduced somewhere.
- **Vocabulary gating:** Cyrillic words in exercise answers, prompts, hints, accept alternatives, and speak chips are checked against the expanded vocabulary set (lemmas + morphological forms for known concepts at that point) plus the cognate list.
- **Concept density:** warn if a lesson's total introduced complexity (sum of complexity scores) exceeds a threshold.
- **Reinforcement spacing:** concepts with complexity >= 3 must have at least K reviews after introduction, and the max gap between uses must not exceed G lessons.
- **Dead vocabulary:** words taught but never used in exercises afterward.
- **Function word gating:** function words in exercises are checked against introduced concepts, not the vocabulary ledger.

Example output:

```
content: 8 modules, 34 lessons, 555 items (448 exercises/choices)
concepts: 94 defined, 94 introduced, 0 orphaned

ERRORS:
  m3l2[7]: exercise requires "съм-past" but it hasn't been introduced yet
  m4l1[3]: word "кафето" requires concept "definite-article" (introduced in m4l3)

WARNINGS:
  m1l3: high concept density (complexity sum: 14, threshold: 10)
  concept "adj-agreement": max gap between uses is 8 lessons (threshold: 5)
```

## Exercise generation (phase 2)

The graph describes the learner's known set at any point. The generator combines those pieces into sentences they've never seen:

1. **Compute known set:** all introduced concepts + all vocabulary expanded via morphology
2. **Select combination:** pick 2-3 concepts weighted by review priority (high complexity + error rate + gap = high priority)
3. **Generate via LLM:** prompt with selected concepts, available vocabulary, morphology rules. The LLM produces a translate-this-sentence exercise.
4. **Validate output:** run the same vocab/concept gating checks. Reject and regenerate if anything falls outside the known set. The graph is the constraint, the LLM is the creativity.

## Spaced repetition (phase 3)

- Track per concept: `{ lastSeen, timesSeen, errorRate, firstSeen }` in D1
- Use FSRS (or SM-2) for scheduling - don't invent a custom scheduler
- Blame assignment: when an exercise is wrong, blame the most recently introduced concept in the tag set
- Floor rule: concept isn't "settled" until seen correctly across N separate sessions with gaps
- Weaving limits: cap injections per session, never inject mid-explanation

## Migration

The linter is build-time only - existing user data is untouched. The generator derives the known set from existing lesson progress. The SRS initializes past concepts as "seen once, long ago, unknown error rate" - the scheduler surfaces them for review and self-corrects on first contact.

## Phasing

**Phase 1 - The linter:** concept graph, cognate list, vocabulary ledger, morphological expander, content tags, extended validator.

**Phase 2 - The generator:** runtime exercise generation from the known set, validation layer, UI for generated exercises, concept tracking in D1.

**Phase 3 - Adaptive scheduling:** FSRS-based scheduling, blame assignment, floor rule, weaving into lesson flow.

## Risks

- **Tag quality:** wrong tags + green checkmark is worse than no checkmark. Tags should be reviewed by a stronger model than the one editing content.
- **Morphology completeness:** start with common irregulars, grow the exceptions map. False negatives (flagging valid forms) are annoying but safe; false positives (missing untaught forms) are the real bug.
- **Graph versioning:** splitting/merging concepts orphans user tracking rows. Version the graph, write migrations.
- **Generated exercise quality:** the constraint system ensures correctness; naturalness needs few-shot examples or a quality check.
