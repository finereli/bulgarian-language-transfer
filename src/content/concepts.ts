export interface Concept {
  id: string;
  name: string;
  kind: "grammar" | "pattern" | "function-word";
  requires: string[];
  frequency: number;
  complexity: number;
}

export const concepts: Concept[] = [
  // === Module 0: Reading Cyrillic ===
  { id: "cyrillic-reading", kind: "pattern", name: "Reading Cyrillic letters", requires: [], frequency: 5, complexity: 2 },
  { id: "cyrillic-typing", kind: "pattern", name: "Latin-to-Cyrillic typing", requires: ["cyrillic-reading"], frequency: 5, complexity: 2 },

  // === Module 1: Cognates, to-be, negation, questions ===
  { id: "cognate-ция", kind: "pattern", name: "-tion → -ция cognate pattern", requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "cognate-ист", kind: "pattern", name: "-ist → -ист cognate pattern", requires: ["cyrillic-typing"], frequency: 3, complexity: 1 },
  { id: "cognate-ор", kind: "pattern", name: "-or → -ор cognate pattern", requires: ["cyrillic-typing"], frequency: 3, complexity: 1 },
  { id: "stress", kind: "grammar", name: "Word stress (ударение)", requires: ["cyrillic-reading"], frequency: 5, complexity: 2 },
  { id: "ъ-sound", kind: "pattern", name: "The ъ vowel sound", requires: ["cyrillic-reading"], frequency: 5, complexity: 2 },
  { id: "щ-sound", kind: "pattern", name: "The щ sound (sht)", requires: ["cyrillic-reading"], frequency: 4, complexity: 1 },
  { id: "съм-present", kind: "grammar", name: "съм - present tense (all 6 forms)", requires: ["cyrillic-typing"], frequency: 5, complexity: 3 },
  { id: "pronoun-subject", kind: "grammar", name: "Subject pronouns (аз, ти, той, тя, ние, вие, те)", requires: ["cyrillic-typing"], frequency: 5, complexity: 2 },
  { id: "feminine-ка", kind: "grammar", name: "Feminine profession suffix -ка", requires: ["pronoun-subject"], frequency: 3, complexity: 1 },
  { id: "plural-и", kind: "grammar", name: "Basic plural with -и (person words)", requires: ["pronoun-subject"], frequency: 4, complexity: 2 },
  { id: "clitic-rule", kind: "grammar", name: "Clitics can't start a sentence", requires: ["съм-present"], frequency: 5, complexity: 3 },
  { id: "pronoun-drop", kind: "grammar", name: "Pronoun dropping (verb tells you who)", requires: ["съм-present", "clitic-rule"], frequency: 5, complexity: 2 },

  // Function words - Module 1
  { id: "не-negation", kind: "function-word", name: "не - negation before verb", requires: ["съм-present"], frequency: 5, complexity: 1 },
  { id: "ли-question", kind: "function-word", name: "ли - yes/no question particle", requires: ["съм-present", "clitic-rule"], frequency: 5, complexity: 2 },
  { id: "нали-tag", kind: "function-word", name: "нали - tag question ('right?')", requires: ["съм-present"], frequency: 4, complexity: 1 },
  { id: "и-conjunction", kind: "function-word", name: "и - 'and' conjunction", requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "от-from", kind: "function-word", name: "от - 'from'", requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },

  // === Module 2: Wanting, having, speaking, working, да ===
  { id: "verb-а-family", kind: "grammar", name: "А-family verb conjugation (искам pattern)", requires: ["съм-present", "pronoun-subject"], frequency: 5, complexity: 3 },
  { id: "verb-и-family", kind: "grammar", name: "И-family verb conjugation (говоря pattern)", requires: ["verb-а-family"], frequency: 5, complexity: 3 },
  { id: "definite-neuter", kind: "grammar", name: "Neuter definite article -то", requires: ["cyrillic-typing"], frequency: 5, complexity: 2 },
  { id: "definite-fem", kind: "grammar", name: "Feminine definite article -та", requires: ["definite-neuter"], frequency: 5, complexity: 2 },
  { id: "definite-masc", kind: "grammar", name: "Masculine definite article -ът/-а", requires: ["definite-fem"], frequency: 5, complexity: 3 },
  { id: "нямам-fused", kind: "grammar", name: "Fused negation нямам (not 'не имам')", requires: ["verb-а-family"], frequency: 4, complexity: 2 },
  { id: "има-existential", kind: "grammar", name: "Existential има/няма ('there is/isn't')", requires: ["нямам-fused"], frequency: 4, complexity: 2 },

  // Function words - Module 2
  { id: "да-subjunctive", kind: "function-word", name: "да + conjugated verb ('to' / subjunctive)", requires: ["verb-а-family"], frequency: 5, complexity: 3 },
  { id: "но-but", kind: "function-word", name: "но - 'but' conjunction", requires: ["и-conjunction"], frequency: 5, complexity: 1 },

  // === Module 3: Can, must, noun gender, adjectives ===
  { id: "verb-е-family", kind: "grammar", name: "Е-family verb conjugation (мога pattern)", requires: ["verb-и-family"], frequency: 4, complexity: 3 },
  { id: "мога-conjugation", kind: "grammar", name: "мога/можеш/може - can", requires: ["verb-е-family"], frequency: 5, complexity: 2 },
  { id: "може-ли-polite", kind: "grammar", name: "Може ли - polite request form", requires: ["мога-conjugation", "ли-question"], frequency: 5, complexity: 1 },
  { id: "трябва-да", kind: "grammar", name: "трябва да - frozen 'must' + conjugated verb", requires: ["да-subjunctive"], frequency: 4, complexity: 2 },
  { id: "noun-gender", kind: "grammar", name: "Noun gender system (м/ж/ср from endings)", requires: ["definite-masc"], frequency: 5, complexity: 3 },
  { id: "adj-agreement", kind: "grammar", name: "Adjective gender agreement (-/а/о)", requires: ["noun-gender"], frequency: 5, complexity: 3 },
  { id: "adj-definite", kind: "grammar", name: "Definite article rides the adjective", requires: ["adj-agreement", "definite-masc"], frequency: 5, complexity: 3 },

  // === Module 4: Introductions, reflexives, object pronouns, possessives ===
  { id: "reflexive-се", kind: "grammar", name: "Reflexive се (казвам се, чувствам се)", requires: ["verb-а-family", "clitic-rule"], frequency: 4, complexity: 2 },
  { id: "object-pronoun-sg", kind: "grammar", name: "Object pronouns singular (ме, те, го, я)", requires: ["clitic-rule", "verb-а-family"], frequency: 5, complexity: 3 },
  { id: "object-pronoun-pl", kind: "grammar", name: "Object pronouns plural (ни, ви, ги)", requires: ["object-pronoun-sg"], frequency: 4, complexity: 2 },
  { id: "clitic-placement", kind: "grammar", name: "Clitic placement with не and subject", requires: ["object-pronoun-sg", "не-negation"], frequency: 5, complexity: 3 },
  { id: "dative-ми", kind: "grammar", name: "Dative ми/ти (to me/to you) + possessive", requires: ["clitic-rule"], frequency: 5, complexity: 3 },

  // Function words - Module 4
  { id: "как-how", kind: "function-word", name: "как - 'how'", requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "в-in", kind: "function-word", name: "в/във - 'in'", requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "къде-where", kind: "function-word", name: "къде - 'where'", requires: ["как-how"], frequency: 5, complexity: 1 },

  // === Module 5: Future and past tense ===
  { id: "future-ще", kind: "grammar", name: "Future tense with ще + present", requires: ["verb-а-family"], frequency: 5, complexity: 2 },
  { id: "future-neg", kind: "grammar", name: "Negative future няма да + present", requires: ["future-ще", "нямам-fused"], frequency: 4, complexity: 2 },
  { id: "past-бях", kind: "grammar", name: "Past tense of съм (бях, беше, бяхме...)", requires: ["съм-present"], frequency: 4, complexity: 3 },
  { id: "past-х", kind: "grammar", name: "Past tense -х pattern (I-form)", requires: ["verb-а-family"], frequency: 4, complexity: 3 },
  { id: "past-и-family", kind: "grammar", name: "Past tense и-family verbs (-их)", requires: ["past-х", "verb-и-family"], frequency: 4, complexity: 3 },
  { id: "past-хме", kind: "grammar", name: "Past tense -хме (we-form)", requires: ["past-х"], frequency: 4, complexity: 2 },

  // === Module 6: Question words, connectors, numbers ===
  { id: "какво-what", kind: "function-word", name: "какво - 'what'", requires: ["ли-question"], frequency: 5, complexity: 1 },
  { id: "кой-who", kind: "function-word", name: "кой/коя - 'who' (gender-matched)", requires: ["какво-what", "noun-gender"], frequency: 4, complexity: 2 },
  { id: "кога-when", kind: "function-word", name: "кога - 'when'", requires: ["какво-what"], frequency: 4, complexity: 1 },
  { id: "защо-why", kind: "function-word", name: "защо/защото - 'why/because'", requires: ["какво-what"], frequency: 4, complexity: 1 },
  { id: "че-that", kind: "function-word", name: "че - 'that' (conjunction, reports fact)", requires: ["да-subjunctive"], frequency: 5, complexity: 2 },
  { id: "а-contrast", kind: "function-word", name: "а - soft contrast ('whereas')", requires: ["но-but"], frequency: 4, complexity: 1 },
  { id: "или-or", kind: "function-word", name: "или - 'or'", requires: ["и-conjunction"], frequency: 4, complexity: 1 },
  { id: "може-би", kind: "grammar", name: "може би - 'maybe'", requires: ["мога-conjugation"], frequency: 4, complexity: 1 },
  { id: "numbers-1-5", kind: "grammar", name: "Numbers 1-5 (with gender on 1 and 2)", requires: ["noun-gender"], frequency: 4, complexity: 2 },
  { id: "noun-plural-basic", kind: "grammar", name: "Noun plurals for ordering (бири, кафета)", requires: ["noun-gender"], frequency: 4, complexity: 2 },

  // Function words - Module 6
  { id: "за-for", kind: "function-word", name: "за - 'for/about'", requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "до-next-to", kind: "function-word", name: "до - 'next to/until'", requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "strong-pronouns", kind: "grammar", name: "Strong pronoun forms after prepositions (мен, теб)", requires: ["за-for", "object-pronoun-sg"], frequency: 4, complexity: 2 },

  // === Module 7: Polite form, liking, reading ===
  { id: "вие-polite", kind: "grammar", name: "Polite Вие = вие-form for one person", requires: ["съм-present", "verb-а-family"], frequency: 5, complexity: 2 },
  { id: "харесва-ми", kind: "grammar", name: "Dative liking: харесва ми ('it pleases me')", requires: ["dative-ми", "verb-а-family"], frequency: 4, complexity: 3 },
  { id: "харесвам-direct", kind: "grammar", name: "Direct харесвам те (for people)", requires: ["object-pronoun-sg", "verb-а-family"], frequency: 3, complexity: 1 },
];

export const conceptsById = new Map(concepts.map((c) => [c.id, c]));
