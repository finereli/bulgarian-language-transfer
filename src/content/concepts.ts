// Unified concept graph. Every learnable thing is a node:
// grammar patterns, function words, and content words alike.

export interface BaseConcept {
  id: string;
  name: string;
  requires: string[];
  frequency: number;
  complexity: number;
}

export interface GrammarConcept extends BaseConcept {
  kind: "grammar" | "pattern";
}

export interface FunctionWordConcept extends BaseConcept {
  kind: "function-word";
  words: string[];
}

export interface WordConcept extends BaseConcept {
  kind: "word";
  pos: "noun" | "verb" | "adj" | "adv" | "other";
  gender?: "м" | "ж" | "ср";
  lesson: string;
  forms: Record<string, string[]>;
}

export type Concept = GrammarConcept | FunctionWordConcept | WordConcept;

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
  { id: "не-negation", kind: "function-word", name: "не - negation before verb", words: ["не"], requires: ["съм-present"], frequency: 5, complexity: 1 },
  { id: "ли-question", kind: "function-word", name: "ли - yes/no question particle", words: ["ли"], requires: ["съм-present", "clitic-rule"], frequency: 5, complexity: 2 },
  { id: "нали-tag", kind: "function-word", name: "нали - tag question ('right?')", words: ["нали"], requires: ["съм-present"], frequency: 4, complexity: 1 },
  { id: "и-conjunction", kind: "function-word", name: "и - 'and' conjunction", words: ["и"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "от-from", kind: "function-word", name: "от - 'from'", words: ["от"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },

  // === Module 2: Wanting, having, speaking, working, да ===
  { id: "verb-а-family", kind: "grammar", name: "А-family verb conjugation (искам pattern)", requires: ["съм-present", "pronoun-subject"], frequency: 5, complexity: 3 },
  { id: "verb-и-family", kind: "grammar", name: "И-family verb conjugation (говоря pattern)", requires: ["verb-а-family"], frequency: 5, complexity: 3 },
  { id: "definite-neuter", kind: "grammar", name: "Neuter definite article -то", requires: ["cyrillic-typing"], frequency: 5, complexity: 2 },
  { id: "definite-fem", kind: "grammar", name: "Feminine definite article -та", requires: ["definite-neuter"], frequency: 5, complexity: 2 },
  { id: "definite-masc", kind: "grammar", name: "Masculine definite article -ът/-а", requires: ["definite-fem"], frequency: 5, complexity: 3 },
  { id: "нямам-fused", kind: "grammar", name: "Fused negation нямам (not 'не имам')", requires: ["verb-а-family"], frequency: 4, complexity: 2 },
  { id: "има-existential", kind: "grammar", name: "Existential има/няма ('there is/isn't')", requires: ["нямам-fused"], frequency: 4, complexity: 2 },

  // Function words - Module 2
  { id: "да-subjunctive", kind: "function-word", name: "да + conjugated verb ('to' / subjunctive)", words: ["да"], requires: ["verb-а-family"], frequency: 5, complexity: 3 },
  { id: "но-but", kind: "function-word", name: "но - 'but' conjunction", words: ["но"], requires: ["и-conjunction"], frequency: 5, complexity: 1 },

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
  { id: "как-how", kind: "function-word", name: "как - 'how'", words: ["как"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "това-this", kind: "function-word", name: "това - 'this/that' demonstrative", words: ["това"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "в-in", kind: "function-word", name: "в/във - 'in'", words: ["в", "във"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "къде-where", kind: "function-word", name: "къде - 'where'", words: ["къде"], requires: ["как-how"], frequency: 5, complexity: 1 },
  { id: "с-with", kind: "function-word", name: "с/със - 'with'", words: ["с", "със"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },

  // === Module 5: Future and past tense ===
  { id: "future-ще", kind: "grammar", name: "Future tense with ще + present", requires: ["verb-а-family"], frequency: 5, complexity: 2 },
  { id: "future-neg", kind: "grammar", name: "Negative future няма да + present", requires: ["future-ще", "нямам-fused"], frequency: 4, complexity: 2 },
  { id: "past-бях", kind: "grammar", name: "Past tense of съм (бях, беше, бяхме...)", requires: ["съм-present"], frequency: 4, complexity: 3 },
  { id: "past-х", kind: "grammar", name: "Past tense -х pattern (I-form)", requires: ["verb-а-family"], frequency: 4, complexity: 3 },
  { id: "past-и-family", kind: "grammar", name: "Past tense и-family verbs (-их)", requires: ["past-х", "verb-и-family"], frequency: 4, complexity: 3 },
  { id: "past-хме", kind: "grammar", name: "Past tense -хме (we-form)", requires: ["past-х"], frequency: 4, complexity: 2 },

  // === Module 6: Question words, connectors, numbers ===
  { id: "какво-what", kind: "function-word", name: "какво - 'what'", words: ["какво"], requires: ["ли-question"], frequency: 5, complexity: 1 },
  { id: "кой-who", kind: "function-word", name: "кой/коя - 'who' (gender-matched)", words: ["кой", "коя"], requires: ["какво-what", "noun-gender"], frequency: 4, complexity: 2 },
  { id: "кога-when", kind: "function-word", name: "кога - 'when'", words: ["кога"], requires: ["какво-what"], frequency: 4, complexity: 1 },
  { id: "защо-why", kind: "function-word", name: "защо/защото - 'why/because'", words: ["защо", "защото"], requires: ["какво-what"], frequency: 4, complexity: 1 },
  { id: "че-that", kind: "function-word", name: "че - 'that' (conjunction, reports fact)", words: ["че"], requires: ["да-subjunctive"], frequency: 5, complexity: 2 },
  { id: "а-contrast", kind: "function-word", name: "а - soft contrast ('whereas')", words: ["а"], requires: ["но-but"], frequency: 4, complexity: 1 },
  { id: "или-or", kind: "function-word", name: "или - 'or'", words: ["или"], requires: ["и-conjunction"], frequency: 4, complexity: 1 },
  { id: "може-би", kind: "grammar", name: "може би - 'maybe'", requires: ["мога-conjugation"], frequency: 4, complexity: 1 },
  { id: "колко-how-much", kind: "function-word", name: "колко - 'how much/how many'", words: ["колко"], requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "numbers-1-5", kind: "grammar", name: "Numbers 1-5 (with gender on 1 and 2)", requires: ["noun-gender"], frequency: 4, complexity: 2 },
  { id: "noun-plural-basic", kind: "grammar", name: "Noun plurals for ordering (бири, кафета)", requires: ["noun-gender"], frequency: 4, complexity: 2 },

  // Function words - Module 6
  { id: "за-for", kind: "function-word", name: "за - 'for/about'", words: ["за"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "до-next-to", kind: "function-word", name: "до - 'next to/until'", words: ["до"], requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "strong-pronouns", kind: "grammar", name: "Strong pronoun forms after prepositions (мен, теб)", requires: ["за-for", "object-pronoun-sg"], frequency: 4, complexity: 2 },

  // === Module 7: Polite form, liking, reading ===
  { id: "вие-polite", kind: "grammar", name: "Polite Вие = вие-form for one person", requires: ["съм-present", "verb-а-family"], frequency: 5, complexity: 2 },
  { id: "харесва-ми", kind: "grammar", name: "Dative liking: харесва ми ('it pleases me')", requires: ["dative-ми", "verb-а-family"], frequency: 4, complexity: 3 },
  { id: "харесвам-direct", kind: "grammar", name: "Direct харесвам те (for people)", requires: ["object-pronoun-sg", "verb-а-family"], frequency: 3, complexity: 1 },

  // === Word concepts ===
  // Forms generated by LLM, grouped by the grammar concept that unlocks them.
  // "base" forms are available as soon as the word is introduced (at lesson start).

  // --- m1l1 ---
  { id: "чай", kind: "word", name: "чай - tea", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 4, complexity: 1, forms: {"base":["чай"],"definite-masc":["чаят","чая"],"noun-plural-basic":["чайове"]} },
  { id: "банка", kind: "word", name: "банка - bank", pos: "noun", gender: "ж", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["банка"],"definite-fem":["банката"],"noun-plural-basic":["банки"]} },
  // --- m1l2 ---
  { id: "съм", kind: "word", name: "съм - am/be", pos: "verb", lesson: "m1l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["съм","си","е","сме","сте","са"],"past-бях":["бях","беше","бе","бяхме","бяхте","бяха"],"future-ще":["бъда","бъдеш","бъде","бъдем","бъдете","бъдат"]} },
  // --- m1l3 ---
  { id: "тук", kind: "word", name: "тук - here", pos: "adv", lesson: "m1l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["тук"]} },
  { id: "там", kind: "word", name: "там - there", pos: "adv", lesson: "m1l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["там"]} },
  // --- m2l1 ---
  { id: "искам", kind: "word", name: "искам - want", pos: "verb", lesson: "m2l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["искам","искаш","иска","искаме","искате","искат"],"past-х":["исках","искаше","искахме","искахте","искаха"]} },
  { id: "вода", kind: "word", name: "вода - water", pos: "noun", gender: "ж", lesson: "m2l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["вода"],"definite-fem":["водата"],"noun-plural-basic":["води"]} },
  { id: "моля", kind: "word", name: "моля - please", pos: "other", lesson: "m2l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["моля"]} },
  { id: "сметка", kind: "word", name: "сметка - bill/check", pos: "noun", gender: "ж", lesson: "m2l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["сметка"],"definite-fem":["сметката"],"noun-plural-basic":["сметки"]} },
  // --- m2l2 ---
  { id: "имам", kind: "word", name: "имам - have", pos: "verb", lesson: "m2l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["имам","имаш","има","имаме","имате","имат"],"past-х":["имах","имаше","имахме","имахте","имаха"]} },
  { id: "нямам", kind: "word", name: "нямам - don't have", pos: "verb", lesson: "m2l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["нямам","нямаш","няма","нямаме","нямате","нямат"],"past-х":["нямах","нямаше","нямахме","нямахте","нямаха"]} },
  { id: "кола", kind: "word", name: "кола - car", pos: "noun", gender: "ж", lesson: "m2l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["кола","коли"],"definite-fem":["колата"]} },
  { id: "вино", kind: "word", name: "вино - wine", pos: "noun", gender: "ср", lesson: "m2l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["вино"],"definite-neuter":["виното"],"noun-plural-basic":["вина"]} },
  // --- m2l3 ---
  { id: "говоря", kind: "word", name: "говоря - speak", pos: "verb", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["говоря","говориш","говори","говорим","говорите","говорят"],"past-и-family":["говорих","говори","говорихме","говорихте","говориха"]} },
  { id: "разбирам", kind: "word", name: "разбирам - understand", pos: "verb", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["разбирам","разбираш","разбира","разбираме","разбирате","разбират"],"past-х":["разбирах","разбираше","разбирахме","разбирахте","разбираха"],"future-ще":["разбера","разбереш","разбере","разберем","разберете","разберат"]} },
  { id: "английски", kind: "word", name: "английски - English", pos: "adj", lesson: "m2l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["английски"],"adj-agreement":["английска","английско"],"adj-definite":["английският","английската","английското","английските"]} },
  { id: "български", kind: "word", name: "български - Bulgarian", pos: "adj", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["български"],"adj-agreement":["българска","българско"],"adj-definite":["българският","българския","българската","българското","българските"]} },
  { id: "малко", kind: "word", name: "малко - a little", pos: "adv", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["малко"]} },
  { id: "много", kind: "word", name: "много - a lot/very", pos: "adv", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["много"]} },
  { id: "добре", kind: "word", name: "добре - well", pos: "adv", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["добре"]} },
  // --- m2l4 ---
  { id: "уча", kind: "word", name: "уча - learn/study", pos: "verb", lesson: "m2l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["уча","учиш","учи","учим","учите","учат"],"past-и-family":["учих","учихме","учихте","учиха"]} },
  { id: "работя", kind: "word", name: "работя - work", pos: "verb", lesson: "m2l4", requires: [], frequency: 5, complexity: 1, forms: {"base":["работя","работиш","работи","работим","работите","работят"],"past-и-family":["работих","работихме","работихте","работиха"]} },
  { id: "днес", kind: "word", name: "днес - today", pos: "adv", lesson: "m2l4", requires: [], frequency: 5, complexity: 1, forms: {"base":["днес"]} },
  // --- m2l5 ---
  { id: "обичам", kind: "word", name: "обичам - love", pos: "verb", lesson: "m2l5", requires: [], frequency: 5, complexity: 1, forms: {"base":["обичам","обичаш","обича","обичаме","обичате","обичат"],"past-х":["обичах","обичаше","обичахме","обичахте","обичаха"]} },
  { id: "пътувам", kind: "word", name: "пътувам - travel", pos: "verb", lesson: "m2l5", requires: [], frequency: 3, complexity: 1, forms: {"base":["пътувам","пътуваш","пътува","пътуваме","пътувате","пътуват"],"past-х":["пътувах","пътуваше","пътувахме","пътувахте","пътуваха"]} },
  // --- m3l1 ---
  { id: "време", kind: "word", name: "време - time/weather", pos: "noun", gender: "ср", lesson: "m3l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["време"],"definite-neuter":["времето"],"noun-plural-basic":["времена"]} },
  // --- m3l2 ---
  { id: "мога-word", kind: "word", name: "мога - can", pos: "verb", lesson: "m3l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["мога","можеш","може","можем","можете","могат"]} },
  { id: "трябва-word", kind: "word", name: "трябва - must", pos: "verb", lesson: "m3l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["трябва"],"past-х":["трябваше"]} },
  { id: "благодаря", kind: "word", name: "благодаря - thank you", pos: "other", lesson: "m3l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["благодаря"]} },
  { id: "град", kind: "word", name: "град - city", pos: "noun", gender: "м", lesson: "m3l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["град"],"definite-masc":["градът","града"],"noun-plural-basic":["градове"]} },
  // --- m3l3 ---
  { id: "къща", kind: "word", name: "къща - house", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["къща","къщи"],"definite-fem":["къщата"]} },
  { id: "море", kind: "word", name: "море - sea", pos: "noun", gender: "ср", lesson: "m3l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["море"],"definite-neuter":["морето"],"noun-plural-basic":["морета"]} },
  { id: "хляб", kind: "word", name: "хляб - bread", pos: "noun", gender: "м", lesson: "m3l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["хляб"],"definite-masc":["хлябът","хляба"],"noun-plural-basic":["хлябове"]} },
  { id: "маса", kind: "word", name: "маса - table", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["маса"],"definite-fem":["масата"],"noun-plural-basic":["маси"]} },
  { id: "жена", kind: "word", name: "жена - woman", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["жена"],"definite-fem":["жената"],"noun-plural-basic":["жени"]} },
  { id: "мъж", kind: "word", name: "мъж - man", pos: "noun", gender: "м", lesson: "m3l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["мъж"],"definite-masc":["мъжът","мъжа"],"noun-plural-basic":["мъже"]} },
  { id: "бира", kind: "word", name: "бира - beer", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["бира","бири"],"definite-fem":["бирата"]} },
  // --- m3l4 ---
  { id: "нов", kind: "word", name: "нов - new", pos: "adj", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["нов"],"adj-agreement":["нова","ново","нови"],"adj-definite":["новият","новия","новата","новото","новите"]} },
  { id: "добър", kind: "word", name: "добър - good", pos: "adj", lesson: "m3l4", requires: [], frequency: 5, complexity: 1, forms: {"base":["добър"],"adj-agreement":["добра","добро","добри"],"adj-definite":["добрият","добрия","добрата","доброто","добрите"]} },
  { id: "голям", kind: "word", name: "голям - big", pos: "adj", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["голям"],"adj-agreement":["голяма","голямо","големи"],"adj-definite":["големият","големия","голямата","голямото","големите"]} },
  { id: "хубав", kind: "word", name: "хубав - nice/beautiful", pos: "adj", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["хубав"],"adj-agreement":["хубава","хубаво","хубави"],"adj-definite":["хубавият","хубавия","хубавата","хубавото","хубавите"]} },
  { id: "здравей", kind: "word", name: "здравей - hello (informal)", pos: "other", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["здравей","здравейте"]} },
  { id: "добро утро", kind: "word", name: "добро утро - good morning", pos: "other", lesson: "m3l4", requires: [], frequency: 3, complexity: 1, forms: {"base":["добро утро","добро","утро"]} },
  { id: "добър ден", kind: "word", name: "добър ден - good day", pos: "other", lesson: "m3l4", requires: [], frequency: 3, complexity: 1, forms: {"base":["добър ден","ден"]} },
  // --- m4l1 ---
  { id: "казвам", kind: "word", name: "казвам - say/call", pos: "verb", lesson: "m4l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["казвам","казваш","казва","казваме","казвате","казват"],"past-х":["казвах","казваше","казвахме","казвахте","казваха","казах","каза","казахме","казахте","казаха"],"future-ще":["кажа","кажеш","каже","кажем","кажете","кажат"]} },
  // --- m4l2 ---
  { id: "живея", kind: "word", name: "живея - live", pos: "verb", lesson: "m4l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["живея","живееш","живее","живеем","живеете","живеят"],"past-х":["живях","живя","живяхме","живяхте","живяха"]} },
  { id: "чувствам", kind: "word", name: "чувствам - feel", pos: "verb", lesson: "m4l2", requires: [], frequency: 3, complexity: 1, forms: {"base":["чувствам","чувстваш","чувства","чувстваме","чувствате","чувстват"],"past-х":["чувствах","чувстваше","чувствахме","чувствахте","чувстваха"]} },
  // --- m4l3 ---
  { id: "виждам", kind: "word", name: "виждам - see", pos: "verb", lesson: "m4l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["виждам","виждаш","вижда","виждаме","виждате","виждат"],"past-х":["виждах","виждаше","виждахме","виждахте","виждаха"],"future-ще":["видя","видиш","види","видим","видите","видят"]} },
  { id: "чакам", kind: "word", name: "чакам - wait for", pos: "verb", lesson: "m4l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["чакам","чакаш","чака","чакаме","чакате","чакат"],"past-х":["чаках","чакаше","чакахме","чакахте","чакаха"]} },
  // --- m4l5 ---
  { id: "майка", kind: "word", name: "майка - mother", pos: "noun", gender: "ж", lesson: "m4l5", requires: [], frequency: 4, complexity: 1, forms: {"base":["майка"],"definite-fem":["майката"],"noun-plural-basic":["майки"]} },
  { id: "баща", kind: "word", name: "баща - father", pos: "noun", gender: "м", lesson: "m4l5", requires: [], frequency: 4, complexity: 1, forms: {"base":["баща"],"definite-masc":["бащата"],"noun-plural-basic":["бащи"]} },
  { id: "мляко", kind: "word", name: "мляко - milk", pos: "noun", gender: "ср", lesson: "m4l5", requires: [], frequency: 3, complexity: 1, forms: {"base":["мляко"],"definite-neuter":["млякото"]} },
  // --- m5l1 ---
  { id: "утре", kind: "word", name: "утре - tomorrow", pos: "adv", lesson: "m5l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["утре"]} },
  // --- m5l2 ---
  { id: "вчера", kind: "word", name: "вчера - yesterday", pos: "adv", lesson: "m5l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["вчера"]} },
  { id: "сега", kind: "word", name: "сега - now", pos: "adv", lesson: "m5l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["сега"]} },
  // --- m5l3 ---
  { id: "довиждане", kind: "word", name: "довиждане - goodbye", pos: "other", lesson: "m5l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["довиждане"]} },
  { id: "добър вечер", kind: "word", name: "добър вечер - good evening", pos: "other", lesson: "m5l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["добър вечер","вечер"]} },
  { id: "лека нощ", kind: "word", name: "лека нощ - good night", pos: "other", lesson: "m5l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["лека нощ","лека","нощ"]} },
  // --- m6l2 ---
  { id: "мисля", kind: "word", name: "мисля - think", pos: "verb", lesson: "m6l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["мисля","мислиш","мисли","мислим","мислите","мислят"],"past-и-family":["мислих","мислихме","мислихте","мислиха"]} },
  // --- m6l3 ---
  { id: "знам", kind: "word", name: "знам - know", pos: "verb", lesson: "m6l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["знам","знаеш","знае","знаем","знаете","знаят"],"past-х":["знаех","знаеше","знаехме","знаехте","знаеха"]} },
  { id: "всичко", kind: "word", name: "всичко - everything", pos: "other", lesson: "m6l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["всичко"]} },
  // --- m6l4 ---
  { id: "струвам", kind: "word", name: "струвам - cost", pos: "verb", lesson: "m6l4", requires: [], frequency: 3, complexity: 1, forms: {"base":["струвам","струваш","струва","струваме","струвате","струват"],"past-х":["струвах","струваше","струвахме","струвахте","струваха"]} },
  // --- m6l5 ---
  { id: "извинете", kind: "word", name: "извинете - excuse me", pos: "other", lesson: "m6l5", requires: [], frequency: 4, complexity: 1, forms: {"base":["извинете"]} },
  { id: "заповядайте", kind: "word", name: "заповядайте - here you go", pos: "other", lesson: "m6l5", requires: [], frequency: 3, complexity: 1, forms: {"base":["заповядайте","заповядай"]} },
  // --- m7l1 ---
  { id: "наздраве", kind: "word", name: "наздраве - cheers", pos: "other", lesson: "m7l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["наздраве"]} },
  // --- m7l2 ---
  { id: "харесвам", kind: "word", name: "харесвам - like", pos: "verb", lesson: "m7l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["харесвам","харесваш","харесва","харесваме","харесвате","харесват"],"past-х":["харесвах","харесваше","харесвахме","харесвахте","харесваха"],"future-ще":["харесам","харесаш","хареса","харесаме","харесате","харесат"]} },
  { id: "вкусно", kind: "word", name: "вкусно - tasty", pos: "adj", lesson: "m7l2", requires: [], frequency: 3, complexity: 1, forms: {"base":["вкусно","вкусен"],"adj-agreement":["вкусна","вкусни"],"adj-definite":["вкусният","вкусния","вкусната","вкусното","вкусните"]} },
  { id: "още", kind: "word", name: "още - more/still", pos: "adv", lesson: "m7l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["още"]} },
  // --- m7l3 ---
  { id: "хайде", kind: "word", name: "хайде - come on/let's go", pos: "other", lesson: "m7l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["хайде"]} },
  { id: "всеки", kind: "word", name: "всеки - every", pos: "other", lesson: "m7l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["всеки","всяка","всяко","всички"]} },
];

export const conceptsById = new Map(concepts.map((c) => [c.id, c]));
