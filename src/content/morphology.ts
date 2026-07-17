import type { VocabEntry } from "./vocab";

// Given a lemma + POS + gender + the set of introduced concepts,
// produce all surface forms the learner could be expected to produce.
// Concept-aware: only expands morphological operations that have been taught.

const irregularVerbs: Record<string, Record<string, string[]>> = {
  "съм": {
    present: ["съм", "си", "е", "сме", "сте", "са"],
    past: ["бях", "беше", "беше", "бяхме", "бяхте", "бяха"],
  },
  "имам": {
    present: ["имам", "имаш", "има", "имаме", "имате", "имат"],
    past: ["имах", "имаше", "имаше", "имахме", "имахте", "имаха"],
  },
  "нямам": {
    present: ["нямам", "нямаш", "няма", "нямаме", "нямате", "нямат"],
    past: ["нямах", "нямаше", "нямаше", "нямахме", "нямахте", "нямаха"],
  },
  "мога": {
    present: ["мога", "можеш", "може", "можем", "можете", "могат"],
  },
  "знам": {
    present: ["знам", "знаеш", "знае", "знаем", "знаете", "знаят"],
  },
};

function conjugateAFamily(stem: string): string[] {
  return [
    stem + "м",
    stem + "ш",
    stem,
    stem + "ме",
    stem + "те",
    stem + "т",
  ];
}

function pastAFamily(stem: string): string[] {
  return [
    stem + "х",
    stem + "ше",
    stem + "ше",
    stem + "хме",
    stem + "хте",
    stem + "ха",
  ];
}

function conjugateIFamily(stem: string): string[] {
  // говоря -> говор + я/иш/и/им/ите/ят
  return [
    stem + "я",
    stem + "иш",
    stem + "и",
    stem + "им",
    stem + "ите",
    stem + "ят",
  ];
}

function pastIFamily(stem: string): string[] {
  return [
    stem + "их",
    stem + "и",
    stem + "и",
    stem + "ихме",
    stem + "ихте",
    stem + "иха",
  ];
}

function conjugateEFamily(stem: string): string[] {
  return [
    stem + "я",
    stem + "еш",
    stem + "е",
    stem + "ем",
    stem + "ете",
    stem + "ят",
  ];
}

function getVerbStem(lemma: string): string {
  if (lemma.endsWith("ам")) return lemma.slice(0, -1); // искам -> иска
  if (lemma.endsWith("я")) return lemma.slice(0, -1);  // говоря -> говор
  if (lemma.endsWith("ея")) return lemma.slice(0, -2); // живея -> жив + ея
  return lemma;
}

function getVerbFamily(lemma: string): "а" | "и" | "е" | null {
  // Known и-family verbs (I-form ends in -я but conjugate with и)
  const iFamilyVerbs = [
    "говоря", "уча", "работя", "мисля",
  ];
  if (iFamilyVerbs.includes(lemma)) return "и";

  // Known е-family verbs
  const eFamilyVerbs = ["живея", "чувствам"]; // чувствам is actually а-family
  if (lemma === "живея") return "е";

  if (lemma.endsWith("ам")) return "а";
  if (lemma.endsWith("я")) return "и";
  return null;
}

function definiteNoun(word: string, gender?: "м" | "ж" | "ср"): string[] {
  if (gender === "ср") {
    // -о/-е -> -то
    return [word + "то"];
  }
  if (gender === "ж") {
    // -а/-я -> -та
    if (word.endsWith("а")) return [word + "та"];
    if (word.endsWith("я")) return [word + "та"];
    return [word + "та"];
  }
  if (gender === "м") {
    // consonant -> -ът/-а (full/short forms)
    return [word + "ът", word + "а"];
  }
  return [];
}

function pluralNoun(word: string, gender?: "м" | "ж" | "ср"): string[] {
  // Basic plurals taught in the course
  const irregularPlurals: Record<string, string[]> = {
    "мъж": ["мъже"],
    "ден": ["дни"],
    "кафе": ["кафета"],
    "чай": ["чая"],  // два чая
    "бира": ["бири"],
  };
  if (irregularPlurals[word]) return irregularPlurals[word];

  if (gender === "м") {
    // Most masculine: add -и or -ове
    if (word.endsWith("ист")) return [word + "и"];
    if (word.endsWith("ор")) return [word + "и"];
    if (word.endsWith("нт")) return [word + "и"];
    return [word + "и", word + "ове"];
  }
  if (gender === "ж") {
    if (word.endsWith("а")) return [word.slice(0, -1) + "и"];
    if (word.endsWith("я")) return [word.slice(0, -1) + "и"];
    return [word + "и"];
  }
  if (gender === "ср") {
    if (word.endsWith("е")) return [word + "та"];
    if (word.endsWith("о")) return [word.slice(0, -1) + "а"];
    return [];
  }
  return [];
}

function adjectiveForms(lemma: string): string[] {
  // Masculine form is the lemma. Generate f/n/pl + definite forms.
  const forms: string[] = [lemma];

  let stem = lemma;
  // Adjectives ending in -ъв/-ър lose the ъ in other forms
  if (lemma.endsWith("ъв")) {
    stem = lemma.slice(0, -2) + "в"; // хубав -> хубав (stays for m), хубава, хубаво
    // Actually: хубав -> хубава, хубаво
    forms.push(stem + "а");  // feminine
    forms.push(stem + "о");  // neuter
    forms.push(stem + "и");  // plural
  } else if (lemma.endsWith("ър")) {
    stem = lemma.slice(0, -2) + "р";
    forms.push(stem + "а");  // добра
    forms.push(stem + "о");  // добро
    forms.push(stem + "и");  // добри
  } else if (lemma === "голям") {
    forms.push("голяма", "голямо", "големи");
  } else if (lemma === "нов") {
    forms.push("нова", "ново", "нови");
  } else {
    // Regular: add -а, -о, -и
    forms.push(lemma + "а", lemma + "о", lemma + "и");
  }

  return forms;
}

function adjectiveDefiniteForms(lemma: string): string[] {
  // Definite adjective forms (article rides the adjective)
  const forms: string[] = [];

  if (lemma === "голям") {
    forms.push("големият", "голямата", "голямото", "големите");
  } else if (lemma === "нов") {
    forms.push("новият", "новата", "новото", "новите");
  } else if (lemma.endsWith("ъв")) {
    const stem = lemma.slice(0, -2) + "в";
    forms.push(stem + "ият", stem + "ата", stem + "ото", stem + "ите");
  } else if (lemma.endsWith("ър")) {
    const stem = lemma.slice(0, -2) + "р";
    forms.push(stem + "ият", stem + "ата", stem + "ото", stem + "ите");
  } else {
    forms.push(lemma + "ият", lemma + "ата", lemma + "ото", lemma + "ите");
  }

  return forms;
}

export function expand(entry: VocabEntry, knownConcepts: Set<string>): string[] {
  const forms = new Set<string>();
  forms.add(entry.word);

  if (entry.pos === "verb") {
    // Check for irregular verbs first
    if (irregularVerbs[entry.word]) {
      const irr = irregularVerbs[entry.word];
      if (irr.present) irr.present.forEach((f) => forms.add(f));
      if (knownConcepts.has("past-бях") || knownConcepts.has("past-х")) {
        if (irr.past) irr.past.forEach((f) => forms.add(f));
      }
    } else {
      const family = getVerbFamily(entry.word);
      if (family === "а" && knownConcepts.has("verb-а-family")) {
        const stem = entry.word.slice(0, -1); // искам -> иска
        conjugateAFamily(stem).forEach((f) => forms.add(f));
        if (knownConcepts.has("past-х")) {
          pastAFamily(stem).forEach((f) => forms.add(f));
        }
      }
      if (family === "и" && knownConcepts.has("verb-и-family")) {
        const stem = entry.word.slice(0, -1); // говоря -> говор
        conjugateIFamily(stem).forEach((f) => forms.add(f));
        if (knownConcepts.has("past-и-family")) {
          pastIFamily(stem).forEach((f) => forms.add(f));
        }
      }
      if (family === "е" && knownConcepts.has("verb-е-family")) {
        const stem = entry.word.slice(0, -2); // живея -> жив (need better stem)
        conjugateEFamily(stem + "е").forEach((f) => forms.add(f));
      }
    }
  }

  if (entry.pos === "noun") {
    if (knownConcepts.has("definite-neuter") && entry.gender === "ср") {
      definiteNoun(entry.word, entry.gender).forEach((f) => forms.add(f));
    }
    if (knownConcepts.has("definite-fem") && entry.gender === "ж") {
      definiteNoun(entry.word, entry.gender).forEach((f) => forms.add(f));
    }
    if (knownConcepts.has("definite-masc") && entry.gender === "м") {
      definiteNoun(entry.word, entry.gender).forEach((f) => forms.add(f));
    }
    if (knownConcepts.has("plural-и") || knownConcepts.has("noun-plural-basic")) {
      pluralNoun(entry.word, entry.gender).forEach((f) => forms.add(f));
    }
  }

  if (entry.pos === "adj") {
    if (knownConcepts.has("adj-agreement")) {
      adjectiveForms(entry.word).forEach((f) => forms.add(f));
    }
    if (knownConcepts.has("adj-definite")) {
      adjectiveDefiniteForms(entry.word).forEach((f) => forms.add(f));
    }
  }

  return [...forms];
}
