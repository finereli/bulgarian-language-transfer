export interface VocabEntry {
  word: string;
  gloss: string;
  pos: "noun" | "verb" | "adj" | "adv" | "other";
  gender?: "м" | "ж" | "ср";
  frequency: number;
}

// Vocabulary introduced per lesson. Only open-class content words -
// function words (да, ли, не, на, с...) and pronouns live in concepts.ts.
// Cognates are in cognates.ts and don't need to appear here.
export const vocab: Record<string, VocabEntry[]> = {
  // === Module 0: reading/typing practice only, no vocabulary ===

  // === Module 1 ===
  m1l1: [
    // Cognates are taught here but live in cognates.ts
    { word: "чай", gloss: "tea", pos: "noun", gender: "м", frequency: 4 },
    { word: "банка", gloss: "bank", pos: "noun", gender: "ж", frequency: 3 },
  ],
  m1l2: [
    { word: "съм", gloss: "am/be", pos: "verb", frequency: 5 },
  ],
  m1l3: [
    { word: "тук", gloss: "here", pos: "adv", frequency: 5 },
    { word: "там", gloss: "there", pos: "adv", frequency: 5 },
  ],

  // === Module 2 ===
  m2l1: [
    { word: "искам", gloss: "want", pos: "verb", frequency: 5 },
    { word: "вода", gloss: "water", pos: "noun", gender: "ж", frequency: 5 },
    { word: "моля", gloss: "please", pos: "other", frequency: 5 },
    { word: "сметка", gloss: "bill/check", pos: "noun", gender: "ж", frequency: 3 },
  ],
  m2l2: [
    { word: "имам", gloss: "have", pos: "verb", frequency: 5 },
    { word: "нямам", gloss: "don't have", pos: "verb", frequency: 5 },
    { word: "кола", gloss: "car", pos: "noun", gender: "ж", frequency: 4 },
    { word: "вино", gloss: "wine", pos: "noun", gender: "ср", frequency: 4 },
  ],
  m2l3: [
    { word: "говоря", gloss: "speak", pos: "verb", frequency: 5 },
    { word: "разбирам", gloss: "understand", pos: "verb", frequency: 5 },
    { word: "английски", gloss: "English", pos: "adj", frequency: 4 },
    { word: "български", gloss: "Bulgarian", pos: "adj", frequency: 5 },
    { word: "малко", gloss: "a little", pos: "adv", frequency: 5 },
    { word: "много", gloss: "a lot/very", pos: "adv", frequency: 5 },
    { word: "добре", gloss: "well", pos: "adv", frequency: 5 },
  ],
  m2l4: [
    { word: "уча", gloss: "learn/study", pos: "verb", frequency: 4 },
    { word: "работя", gloss: "work", pos: "verb", frequency: 5 },
    { word: "днес", gloss: "today", pos: "adv", frequency: 5 },
  ],
  m2l5: [
    { word: "обичам", gloss: "love", pos: "verb", frequency: 5 },
    { word: "пътувам", gloss: "travel", pos: "verb", frequency: 3 },
  ],

  // === Module 3 ===
  m3l1: [
    { word: "време", gloss: "time/weather", pos: "noun", gender: "ср", frequency: 5 },
  ],
  m3l2: [
    { word: "мога", gloss: "can", pos: "verb", frequency: 5 },
    { word: "трябва", gloss: "must", pos: "verb", frequency: 5 },
    { word: "благодаря", gloss: "thank you", pos: "other", frequency: 5 },
    { word: "град", gloss: "city", pos: "noun", gender: "м", frequency: 4 },
  ],
  m3l3: [
    { word: "къща", gloss: "house", pos: "noun", gender: "ж", frequency: 4 },
    { word: "море", gloss: "sea", pos: "noun", gender: "ср", frequency: 3 },
    { word: "хляб", gloss: "bread", pos: "noun", gender: "м", frequency: 4 },
    { word: "маса", gloss: "table", pos: "noun", gender: "ж", frequency: 3 },
    { word: "жена", gloss: "woman", pos: "noun", gender: "ж", frequency: 5 },
    { word: "мъж", gloss: "man", pos: "noun", gender: "м", frequency: 5 },
    { word: "бира", gloss: "beer", pos: "noun", gender: "ж", frequency: 3 },
  ],
  m3l4: [
    { word: "нов", gloss: "new", pos: "adj", frequency: 4 },
    { word: "добър", gloss: "good", pos: "adj", frequency: 5 },
    { word: "голям", gloss: "big", pos: "adj", frequency: 4 },
    { word: "хубав", gloss: "nice/beautiful", pos: "adj", frequency: 4 },
    { word: "здравей", gloss: "hello (informal)", pos: "other", frequency: 4 },
    { word: "добро утро", gloss: "good morning", pos: "other", frequency: 3 },
    { word: "добър ден", gloss: "good day", pos: "other", frequency: 3 },
  ],

  // === Module 4 ===
  m4l1: [
    { word: "казвам", gloss: "say/call", pos: "verb", frequency: 5 },
  ],
  m4l2: [
    { word: "живея", gloss: "live", pos: "verb", frequency: 4 },
    { word: "чувствам", gloss: "feel", pos: "verb", frequency: 3 },
  ],
  m4l3: [
    { word: "виждам", gloss: "see", pos: "verb", frequency: 4 },
    { word: "чакам", gloss: "wait for", pos: "verb", frequency: 3 },
  ],
  m4l5: [
    { word: "майка", gloss: "mother", pos: "noun", gender: "ж", frequency: 4 },
    { word: "баща", gloss: "father", pos: "noun", gender: "м", frequency: 4 },
    { word: "мляко", gloss: "milk", pos: "noun", gender: "ср", frequency: 3 },
  ],

  // === Module 5 ===
  m5l1: [
    { word: "утре", gloss: "tomorrow", pos: "adv", frequency: 5 },
  ],
  m5l2: [
    { word: "вчера", gloss: "yesterday", pos: "adv", frequency: 5 },
    { word: "сега", gloss: "now", pos: "adv", frequency: 5 },
  ],
  m5l3: [
    { word: "довиждане", gloss: "goodbye", pos: "other", frequency: 4 },
    { word: "добър вечер", gloss: "good evening", pos: "other", frequency: 3 },
    { word: "лека нощ", gloss: "good night", pos: "other", frequency: 3 },
  ],

  // === Module 6 ===
  m6l2: [
    { word: "мисля", gloss: "think", pos: "verb", frequency: 4 },
  ],
  m6l3: [
    { word: "знам", gloss: "know", pos: "verb", frequency: 5 },
    { word: "всичко", gloss: "everything", pos: "other", frequency: 4 },
  ],
  m6l4: [
    { word: "струвам", gloss: "cost", pos: "verb", frequency: 3 },
  ],
  m6l5: [
    { word: "извинете", gloss: "excuse me", pos: "other", frequency: 4 },
    { word: "заповядайте", gloss: "here you go", pos: "other", frequency: 3 },
  ],

  // === Module 7 ===
  m7l1: [
    { word: "наздраве", gloss: "cheers", pos: "other", frequency: 3 },
  ],
  m7l2: [
    { word: "харесвам", gloss: "like", pos: "verb", frequency: 4 },
    { word: "вкусно", gloss: "tasty", pos: "adj", frequency: 3 },
    { word: "още", gloss: "more/still", pos: "adv", frequency: 4 },
  ],
  m7l3: [
    { word: "хайде", gloss: "come on/let's go", pos: "other", frequency: 3 },
  ],
};
