// Unified concept graph for the Macedonian course. Every learnable thing is
// a node: grammar patterns, function words, and content words alike.
// See docs/macedonian-brief.md for the pedagogy behind the ids.

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
  // === Module 0: Reading Macedonian Cyrillic ===
  { id: "cyrillic-reading", kind: "pattern", name: "Reading Cyrillic letters", requires: [], frequency: 5, complexity: 2 },
  { id: "cyrillic-typing", kind: "pattern", name: "Latin-to-Cyrillic typing", requires: ["cyrillic-reading"], frequency: 5, complexity: 2 },
  { id: "ј-letter", kind: "pattern", name: "The letter ј (y in 'yes'; ја/ју/је)", requires: ["cyrillic-reading"], frequency: 5, complexity: 1 },
  { id: "љ-њ-letters", kind: "pattern", name: "The soft letters љ and њ", requires: ["cyrillic-reading"], frequency: 3, complexity: 1 },
  { id: "ќ-ѓ-letters", kind: "pattern", name: "The soft letters ќ and ѓ", requires: ["cyrillic-reading"], frequency: 4, complexity: 2 },
  { id: "ѕ-џ-letters", kind: "pattern", name: "The letters ѕ (dz) and џ (j)", requires: ["cyrillic-reading"], frequency: 3, complexity: 1 },

  // === Module 1: Cognates, stress, to-be, negation, questions ===
  { id: "cognate-ција", kind: "pattern", name: "-tion → -ција cognate pattern", requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "cognate-ист", kind: "pattern", name: "-ist → -ист cognate pattern", requires: ["cyrillic-typing"], frequency: 3, complexity: 1 },
  { id: "cognate-ор", kind: "pattern", name: "-or → -ор cognate pattern", requires: ["cyrillic-typing"], frequency: 3, complexity: 1 },
  { id: "stress-antepenult", kind: "grammar", name: "Antepenultimate stress rule (third syllable from the end)", requires: ["cyrillic-reading"], frequency: 5, complexity: 2 },
  { id: "сум-present", kind: "grammar", name: "сум - present tense (сум, си, е, сме, сте, се)", requires: ["cyrillic-typing"], frequency: 5, complexity: 3 },
  { id: "pronoun-subject", kind: "grammar", name: "Subject pronouns (јас, ти, тој, таа, тоа, ние, вие, тие)", requires: ["cyrillic-typing"], frequency: 5, complexity: 2 },
  { id: "feminine-ка", kind: "grammar", name: "Feminine profession suffix -ка (студентка)", requires: ["pronoun-subject"], frequency: 3, complexity: 1 },
  { id: "plural-и", kind: "grammar", name: "Basic plural with -и (person words)", requires: ["pronoun-subject"], frequency: 4, complexity: 2 },
  { id: "pronoun-drop", kind: "grammar", name: "Pronoun dropping (verb tells you who)", requires: ["сум-present"], frequency: 5, complexity: 2 },
  { id: "сум-position", kind: "grammar", name: "сум position: after the pronoun (Јас сум студент) or after the description (Студент сум)", requires: ["сум-present"], frequency: 5, complexity: 2 },
  { id: "neg-question", kind: "pattern", name: "Negative question не + verb + ли", requires: ["не-negation", "ли-question"], frequency: 4, complexity: 2 },

  // Function words - Module 1
  { id: "не-negation", kind: "function-word", name: "не - negation before verb", words: ["не"], requires: ["сум-present"], frequency: 5, complexity: 1 },
  { id: "дали-question", kind: "function-word", name: "дали - yes/no question word (sentence-initial)", words: ["дали"], requires: ["сум-present"], frequency: 5, complexity: 1 },
  { id: "ли-question", kind: "function-word", name: "ли - yes/no question particle (after the word asked about)", words: ["ли"], requires: ["сум-present", "дали-question"], frequency: 5, complexity: 2 },
  { id: "нели-tag", kind: "function-word", name: "нели - tag question ('right?')", words: ["нели"], requires: ["сум-present"], frequency: 4, complexity: 1 },
  { id: "и-conjunction", kind: "function-word", name: "и - 'and' conjunction", words: ["и"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "од-from", kind: "function-word", name: "од - 'from'", words: ["од"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },

  // === Module 2: Wanting, having, speaking, working, да ===
  { id: "verb-м-first-person", kind: "pattern", name: "The I-form always ends in -м (сакам, имам, учам)", requires: ["сум-present", "pronoun-subject"], frequency: 5, complexity: 1 },
  { id: "verb-а-group", kind: "grammar", name: "А-group verb conjugation (сакам pattern, they-form -аат)", requires: ["verb-м-first-person", "pronoun-subject"], frequency: 5, complexity: 3 },
  { id: "verb-и-group", kind: "grammar", name: "И-group verb conjugation (учам pattern: учиш, учи)", requires: ["verb-а-group"], frequency: 5, complexity: 3 },
  { id: "definite-neuter", kind: "grammar", name: "Neuter definite article -то (кафето)", requires: ["cyrillic-typing"], frequency: 5, complexity: 2 },
  { id: "definite-fem", kind: "grammar", name: "Feminine definite article -та (водата)", requires: ["definite-neuter"], frequency: 5, complexity: 2 },
  { id: "definite-masc", kind: "grammar", name: "Masculine definite article -от (телефонот), one form only", requires: ["definite-fem"], frequency: 5, complexity: 2 },
  { id: "немам-fused", kind: "grammar", name: "Fused negation немам (not 'не имам')", requires: ["verb-а-group"], frequency: 4, complexity: 2 },
  { id: "има-existential", kind: "grammar", name: "Existential има/нема ('there is/isn't')", requires: ["немам-fused"], frequency: 4, complexity: 2 },

  // Function words - Module 2
  { id: "да-subjunctive", kind: "function-word", name: "да + conjugated verb ('to' / subjunctive)", words: ["да"], requires: ["verb-а-group"], frequency: 5, complexity: 3 },
  { id: "но-but", kind: "function-word", name: "но - 'but' conjunction (colloquial ама)", words: ["но", "ама"], requires: ["и-conjunction"], frequency: 5, complexity: 1 },

  // === Module 3: Can, must, noun gender, adjectives ===
  { id: "verb-е-group", kind: "grammar", name: "Е-group verb conjugation (можам pattern: можеш, може)", requires: ["verb-и-group"], frequency: 4, complexity: 3 },
  { id: "можам-conjugation", kind: "grammar", name: "можам/можеш/може - can", requires: ["verb-е-group"], frequency: 5, complexity: 2 },
  { id: "може-ли-polite", kind: "grammar", name: "Може ли - polite request form", requires: ["можам-conjugation", "ли-question"], frequency: 5, complexity: 1 },
  { id: "треба-да", kind: "grammar", name: "треба да - frozen 'must/should' + conjugated verb", requires: ["да-subjunctive"], frequency: 4, complexity: 2 },
  { id: "noun-gender", kind: "grammar", name: "Noun gender system (м/ж/ср from endings)", requires: ["definite-masc"], frequency: 5, complexity: 3 },
  { id: "adj-agreement", kind: "grammar", name: "Adjective gender agreement (-/а/о/и)", requires: ["noun-gender"], frequency: 5, complexity: 3 },
  { id: "adj-definite", kind: "grammar", name: "Definite article rides the adjective (новиот, новата)", requires: ["adj-agreement", "definite-masc"], frequency: 5, complexity: 3 },

  // === Module 4: Introductions, reflexives, object pronouns, doubling, possessives ===
  { id: "final-devoicing", kind: "pattern", name: "Final devoicing (град said 'grat', леб 'lep')", requires: ["cyrillic-reading"], frequency: 4, complexity: 2 },
  { id: "reflexive-се", kind: "grammar", name: "Reflexive се before the verb (се викам, се чувствувам)", requires: ["verb-а-group"], frequency: 4, complexity: 2 },
  { id: "clitic-proclitic", kind: "grammar", name: "Short pronouns go before the verb, even sentence-initially (Те гледам)", requires: ["verb-а-group"], frequency: 5, complexity: 2 },
  { id: "object-pronoun-sg", kind: "grammar", name: "Object pronouns singular (ме, те, го, ја)", requires: ["clitic-proclitic", "verb-а-group"], frequency: 5, complexity: 3 },
  { id: "object-pronoun-pl", kind: "grammar", name: "Object pronouns plural (нѐ, ве, ги)", requires: ["object-pronoun-sg"], frequency: 4, complexity: 2 },
  { id: "clitic-placement", kind: "grammar", name: "Clitic placement with не (Не те разбирам)", requires: ["object-pronoun-sg", "не-negation"], frequency: 5, complexity: 2 },
  { id: "clitic-doubling", kind: "grammar", name: "Clitic doubling with definite objects (Го чекам Марко)", requires: ["object-pronoun-sg", "definite-masc"], frequency: 5, complexity: 3 },
  { id: "dative-ми", kind: "grammar", name: "Dative ми/ти (to me/to you) + possessive after the definite noun", requires: ["clitic-proclitic"], frequency: 5, complexity: 3 },
  { id: "dative-му-ѝ", kind: "grammar", name: "Dative му/ѝ (his/her possessive)", requires: ["dative-ми"], frequency: 4, complexity: 2 },
  { id: "на-possession", kind: "grammar", name: "на-possession (колата на Марија)", requires: ["definite-masc"], frequency: 4, complexity: 2 },
  { id: "family-article-drop", kind: "grammar", name: "Family article drop (мајка ми, not мајката ми)", requires: ["dative-ми"], frequency: 3, complexity: 2 },

  // Function words - Module 4
  { id: "како-how", kind: "function-word", name: "како - 'how'", words: ["како"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "ова-this", kind: "function-word", name: "ова/тоа - 'this/that' demonstrative", words: ["ова", "тоа"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "во-in", kind: "function-word", name: "во - 'in/to'", words: ["во"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "каде-where", kind: "function-word", name: "каде - 'where'", words: ["каде"], requires: [], frequency: 5, complexity: 1 },
  { id: "со-with", kind: "function-word", name: "со - 'with'", words: ["со"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },

  // === Module 5: Future and past tense ===
  { id: "future-ќе", kind: "grammar", name: "Future tense with ќе + present", requires: ["verb-а-group"], frequency: 5, complexity: 2 },
  { id: "future-neg", kind: "grammar", name: "Negative future нема да + present", requires: ["future-ќе", "немам-fused"], frequency: 4, complexity: 2 },
  { id: "past-бев", kind: "grammar", name: "Past tense of сум (бев, беше, бевме...)", requires: ["сум-present"], frequency: 4, complexity: 3 },
  { id: "past-в", kind: "grammar", name: "Past tense -в pattern (I-form: имав, сакав)", requires: ["verb-а-group"], frequency: 4, complexity: 3 },
  { id: "past-и-е-group", kind: "grammar", name: "Past tense of и/е-group verbs (-ев: работев, учев, можев)", requires: ["past-в", "verb-и-group"], frequency: 4, complexity: 3 },
  { id: "past-вме", kind: "grammar", name: "Past tense -вме/-вте/-а (we/you-all/they forms)", requires: ["past-в"], frequency: 4, complexity: 2 },

  // === Module 6: Question words, connectors, numbers ===
  { id: "што-what", kind: "function-word", name: "што - 'what'", words: ["што"], requires: ["ли-question"], frequency: 5, complexity: 1 },
  { id: "кој-who", kind: "function-word", name: "кој/која/кое/кои - 'who/which' (gender-matched)", words: ["кој", "која", "кое", "кои"], requires: ["што-what", "noun-gender"], frequency: 4, complexity: 2 },
  { id: "кога-when", kind: "function-word", name: "кога - 'when'", words: ["кога"], requires: ["што-what"], frequency: 4, complexity: 1 },
  { id: "зошто-why", kind: "function-word", name: "зошто / затоа што - 'why / because'", words: ["зошто", "затоа што", "затоа"], requires: ["што-what"], frequency: 4, complexity: 1 },
  { id: "дека-that", kind: "function-word", name: "дека - 'that' (conjunction, reports fact)", words: ["дека"], requires: ["да-subjunctive"], frequency: 5, complexity: 2 },
  { id: "а-contrast", kind: "function-word", name: "а - soft contrast ('whereas')", words: ["а"], requires: ["но-but"], frequency: 4, complexity: 1 },
  { id: "или-or", kind: "function-word", name: "или - 'or'", words: ["или"], requires: ["и-conjunction"], frequency: 4, complexity: 1 },
  { id: "можеби", kind: "function-word", name: "можеби - 'maybe' (one word)", words: ["можеби"], requires: ["можам-conjugation"], frequency: 4, complexity: 1 },
  { id: "колку-how-much", kind: "function-word", name: "колку - 'how much/how many'", words: ["колку"], requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "numbers-1-5", kind: "grammar", name: "Numbers 1-5 (with gender on 1 and 2)", requires: ["noun-gender"], frequency: 4, complexity: 2 },
  { id: "noun-plural-basic", kind: "grammar", name: "Noun plurals for ordering (пива, кафиња, градови)", requires: ["noun-gender", "plural-и"], frequency: 4, complexity: 2 },

  // Function words - Module 6
  { id: "за-for", kind: "function-word", name: "за - 'for/about'", words: ["за"], requires: ["cyrillic-typing"], frequency: 5, complexity: 1 },
  { id: "до-next-to", kind: "function-word", name: "до - 'next to/until'", words: ["до"], requires: ["cyrillic-typing"], frequency: 4, complexity: 1 },
  { id: "strong-pronouns", kind: "grammar", name: "Long pronoun forms after prepositions (мене, тебе, него, неа)", requires: ["за-for", "object-pronoun-sg"], frequency: 4, complexity: 2 },
  { id: "article-ов-он", kind: "grammar", name: "The -ов/-он articles (this one here / that one there), supporting only", requires: ["definite-masc", "ова-this"], frequency: 2, complexity: 1 },

  // === Module 7: Polite form, liking, reading ===
  { id: "вие-polite", kind: "grammar", name: "Polite Вие = вие-form for one person", requires: ["сум-present", "verb-а-group"], frequency: 5, complexity: 2 },
  { id: "допаѓа-ми", kind: "grammar", name: "Dative liking: ми се допаѓа / ми се допаѓаат (clitics first)", requires: ["dative-ми", "clitic-proclitic"], frequency: 4, complexity: 3 },

  // === Word concepts ===
  // Forms grouped by the grammar concept that unlocks them.
  // "base" forms are available as soon as the word is introduced (at lesson start).

  // --- m1l1 ---
  { id: "чај", kind: "word", name: "чај - tea", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 4, complexity: 1, forms: {"base":["чај"],"definite-masc":["чајот"],"noun-plural-basic":["чаеви"]} },
  { id: "банка", kind: "word", name: "банка - bank", pos: "noun", gender: "ж", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["банка"],"definite-fem":["банката"],"noun-plural-basic":["банки","банките"]} },
  { id: "кафе", kind: "word", name: "кафе - coffee", pos: "noun", gender: "ср", lesson: "m1l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["кафе"],"definite-neuter":["кафето"],"noun-plural-basic":["кафиња","кафињата"]} },
  { id: "турист", kind: "word", name: "турист - tourist", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["турист"],"definite-masc":["туристот"],"feminine-ка":["туристка"],"noun-plural-basic":["туристи","туристите","туристки"]} },
  { id: "журналист", kind: "word", name: "журналист - journalist", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["журналист"],"definite-masc":["журналистот"],"feminine-ка":["журналистка"],"noun-plural-basic":["журналисти","журналистите","журналистки"]} },
  { id: "доктор", kind: "word", name: "доктор - doctor", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["доктор"],"definite-masc":["докторот"],"feminine-ка":["докторка"],"noun-plural-basic":["доктори","докторите","докторки"]} },
  { id: "студент", kind: "word", name: "студент - student", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 4, complexity: 1, forms: {"base":["студент"],"definite-masc":["студентот"],"feminine-ка":["студентка"],"noun-plural-basic":["студенти","студентите","студентки"]} },
  { id: "телефон", kind: "word", name: "телефон - telephone", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["телефон"],"definite-masc":["телефонот"],"noun-plural-basic":["телефони","телефоните"]} },
  { id: "ресторан", kind: "word", name: "ресторан - restaurant", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["ресторан"],"definite-masc":["ресторанот"],"noun-plural-basic":["ресторани","рестораните"]} },
  { id: "хотел", kind: "word", name: "хотел - hotel", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["хотел"],"definite-masc":["хотелот"],"noun-plural-basic":["хотели","хотелите"]} },
  { id: "проблем", kind: "word", name: "проблем - problem", pos: "noun", gender: "м", lesson: "m1l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["проблем"],"definite-masc":["проблемот"],"noun-plural-basic":["проблеми","проблемите"]} },
  // --- m1l2 ---
  { id: "сум", kind: "word", name: "сум - am/be", pos: "verb", lesson: "m1l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["сум","си","е","сме","сте","се"],"past-бев":["бев","беше","бевме","бевте","беа"],"future-ќе":["бидам","бидеш","биде","бидеме","бидете","бидат"]} },
  // --- m1l3 ---
  { id: "тука", kind: "word", name: "тука - here", pos: "adv", lesson: "m1l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["тука","овде"]} },
  { id: "таму", kind: "word", name: "таму - there", pos: "adv", lesson: "m1l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["таму"]} },
  // --- m2l1 ---
  { id: "сакам", kind: "word", name: "сакам - want/love", pos: "verb", lesson: "m2l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["сакам","сакаш","сака","сакаме","сакате","сакаат"],"past-в":["сакав","сакаше","сакавме","сакавте","сакаа"]} },
  { id: "вода", kind: "word", name: "вода - water", pos: "noun", gender: "ж", lesson: "m2l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["вода"],"definite-fem":["водата"],"noun-plural-basic":["води"]} },
  { id: "сметка", kind: "word", name: "сметка - bill/check", pos: "noun", gender: "ж", lesson: "m2l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["сметка"],"definite-fem":["сметката"],"noun-plural-basic":["сметки"]} },
  { id: "ве молам", kind: "word", name: "ве молам - please", pos: "other", lesson: "m2l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["ве молам","молам"],"object-pronoun-sg":["те молам"]} },
  // --- m2l2 ---
  { id: "имам", kind: "word", name: "имам - have", pos: "verb", lesson: "m2l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["имам","имаш","има","имаме","имате","имаат"],"past-в":["имав","имаше","имавме","имавте","имаа"]} },
  { id: "немам", kind: "word", name: "немам - don't have", pos: "verb", lesson: "m2l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["немам","немаш","нема","немаме","немате","немаат"],"past-в":["немав","немаше","немавме","немавте","немаа"]} },
  { id: "кола", kind: "word", name: "кола - car", pos: "noun", gender: "ж", lesson: "m2l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["кола"],"definite-fem":["колата"],"noun-plural-basic":["коли","колите"]} },
  { id: "вино", kind: "word", name: "вино - wine", pos: "noun", gender: "ср", lesson: "m2l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["вино"],"definite-neuter":["виното"],"noun-plural-basic":["вина","вината"]} },
  // --- m2l3 ---
  { id: "зборувам", kind: "word", name: "зборувам - speak", pos: "verb", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["зборувам","зборуваш","зборува","зборуваме","зборувате","зборуваат"],"past-в":["зборував","зборуваше","зборувавме","зборувавте","зборуваа"]} },
  { id: "разбирам", kind: "word", name: "разбирам - understand", pos: "verb", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["разбирам","разбираш","разбира","разбираме","разбирате","разбираат"],"past-в":["разбирав","разбираше","разбиравме","разбиравте","разбираа"]} },
  { id: "македонски", kind: "word", name: "македонски - Macedonian", pos: "adj", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["македонски"]} },
  { id: "англиски", kind: "word", name: "англиски - English", pos: "adj", lesson: "m2l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["англиски"]} },
  { id: "малку", kind: "word", name: "малку - a little", pos: "adv", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["малку"]} },
  { id: "многу", kind: "word", name: "многу - a lot/very", pos: "adv", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["многу"]} },
  { id: "добро", kind: "word", name: "добро - well", pos: "adv", lesson: "m2l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["добро"]} },
  // --- m2l4 ---
  { id: "учам", kind: "word", name: "учам - learn/study", pos: "verb", lesson: "m2l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["учам","учиш","учи","учиме","учите","учат"],"past-и-е-group":["учев","учеше","учевме","учевте","учеа"]} },
  { id: "работам", kind: "word", name: "работам - work", pos: "verb", lesson: "m2l4", requires: [], frequency: 5, complexity: 1, forms: {"base":["работам","работиш","работи","работиме","работите","работат"],"past-и-е-group":["работев","работеше","работевме","работевте","работеа"]} },
  { id: "денес", kind: "word", name: "денес - today", pos: "adv", lesson: "m2l4", requires: [], frequency: 5, complexity: 1, forms: {"base":["денес"]} },
  // --- m2l5 ---
  { id: "патувам", kind: "word", name: "патувам - travel", pos: "verb", lesson: "m2l5", requires: [], frequency: 3, complexity: 1, forms: {"base":["патувам","патуваш","патува","патуваме","патувате","патуваат"],"past-в":["патував","патуваше","патувавме","патувавте","патуваа"]} },
  { id: "одам", kind: "word", name: "одам - go", pos: "verb", lesson: "m2l5", requires: [], frequency: 5, complexity: 1, forms: {"base":["одам","одиш","оди","одиме","одите","одат"],"past-и-е-group":["одев","одеше","одевме","одевте","одеа"]} },
  // --- m3l1 ---
  { id: "време", kind: "word", name: "време - time/weather", pos: "noun", gender: "ср", lesson: "m3l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["време"],"definite-neuter":["времето"],"noun-plural-basic":["времиња"]} },
  // --- m3l2 ---
  { id: "можам-word", kind: "word", name: "можам - can", pos: "verb", lesson: "m3l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["можам","можеш","може","можеме","можете","можат"],"past-и-е-group":["можев","можеше","можевме","можевте","можеа"]} },
  { id: "треба-word", kind: "word", name: "треба - must/should", pos: "verb", lesson: "m3l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["треба"],"past-в":["требаше"]} },
  { id: "благодарам", kind: "word", name: "благодарам - thank you", pos: "other", lesson: "m3l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["благодарам","фала"]} },
  { id: "град", kind: "word", name: "град - city", pos: "noun", gender: "м", lesson: "m3l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["град"],"definite-masc":["градот"],"noun-plural-basic":["градови","градовите"]} },
  // --- m3l3 ---
  { id: "куќа", kind: "word", name: "куќа - house", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["куќа"],"definite-fem":["куќата"],"noun-plural-basic":["куќи","куќите"]} },
  { id: "море", kind: "word", name: "море - sea", pos: "noun", gender: "ср", lesson: "m3l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["море"],"definite-neuter":["морето"],"noun-plural-basic":["мориња"]} },
  { id: "леб", kind: "word", name: "леб - bread", pos: "noun", gender: "м", lesson: "m3l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["леб"],"definite-masc":["лебот"],"noun-plural-basic":["лебови"]} },
  { id: "маса", kind: "word", name: "маса - table", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["маса"],"definite-fem":["масата"],"noun-plural-basic":["маси","масите"]} },
  { id: "жена", kind: "word", name: "жена - woman", pos: "noun", gender: "ж", lesson: "m3l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["жена"],"definite-fem":["жената"],"noun-plural-basic":["жени","жените"]} },
  { id: "маж", kind: "word", name: "маж - man", pos: "noun", gender: "м", lesson: "m3l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["маж"],"definite-masc":["мажот"],"noun-plural-basic":["мажи","мажите"]} },
  { id: "пиво", kind: "word", name: "пиво - beer", pos: "noun", gender: "ср", lesson: "m3l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["пиво"],"definite-neuter":["пивото"],"noun-plural-basic":["пива","пивата"]} },
  // --- m3l4 ---
  { id: "нов", kind: "word", name: "нов - new", pos: "adj", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["нов"],"adj-agreement":["нова","ново","нови"],"adj-definite":["новиот","новата","новото","новите"]} },
  { id: "добар", kind: "word", name: "добар - good", pos: "adj", lesson: "m3l4", requires: [], frequency: 5, complexity: 1, forms: {"base":["добар"],"adj-agreement":["добра","добро","добри"],"adj-definite":["добриот","добрата","доброто","добрите"]} },
  { id: "голем", kind: "word", name: "голем - big", pos: "adj", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["голем"],"adj-agreement":["голема","големо","големи"],"adj-definite":["големиот","големата","големото","големите"]} },
  { id: "убав", kind: "word", name: "убав - nice/beautiful", pos: "adj", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["убав"],"adj-agreement":["убава","убаво","убави"],"adj-definite":["убавиот","убавата","убавото","убавите"]} },
  { id: "здраво", kind: "word", name: "здраво - hello", pos: "other", lesson: "m3l4", requires: [], frequency: 4, complexity: 1, forms: {"base":["здраво"]} },
  { id: "добро утро", kind: "word", name: "добро утро - good morning", pos: "other", lesson: "m3l4", requires: [], frequency: 3, complexity: 1, forms: {"base":["добро утро","утро"],"definite-neuter":["утрото"]} },
  { id: "добар ден", kind: "word", name: "добар ден - good day", pos: "other", lesson: "m3l4", requires: [], frequency: 3, complexity: 1, forms: {"base":["добар ден","ден"],"definite-masc":["денот"]} },
  // --- m4l1 ---
  { id: "викам", kind: "word", name: "се викам - my name is (I am called)", pos: "verb", lesson: "m4l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["се викам","се викаш","се вика","се викаме","се викате","се викаат"],"past-в":["се викав","се викаше","се викавме","се викавте","се викаа"]} },
  { id: "мило", kind: "word", name: "мило ми е - nice to meet you", pos: "other", lesson: "m4l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["мило ми е","мило","драго ми е","драго"]} },
  // --- m4l2 ---
  { id: "живеам", kind: "word", name: "живеам - live", pos: "verb", lesson: "m4l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["живеам","живееш","живее","живееме","живеете","живеат"],"past-и-е-group":["живеев","живееше","живеевме","живеевте","живееја"]} },
  { id: "чувствувам", kind: "word", name: "се чувствувам - feel", pos: "verb", lesson: "m4l2", requires: [], frequency: 3, complexity: 1, forms: {"base":["се чувствувам","се чувствуваш","се чувствува","се чувствуваме","се чувствувате","се чувствуваат"],"past-в":["се чувствував","се чувствуваше","се чувствувавме","се чувствувавте","се чувствуваа"]} },
  // --- m4l3 ---
  { id: "гледам", kind: "word", name: "гледам - see/watch", pos: "verb", lesson: "m4l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["гледам","гледаш","гледа","гледаме","гледате","гледаат"],"past-в":["гледав","гледаше","гледавме","гледавте","гледаа"]} },
  { id: "чекам", kind: "word", name: "чекам - wait for", pos: "verb", lesson: "m4l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["чекам","чекаш","чека","чекаме","чекате","чекаат"],"past-в":["чекав","чекаше","чекавме","чекавте","чекаа"]} },
  // --- m4l6 ---
  { id: "мајка", kind: "word", name: "мајка - mother", pos: "noun", gender: "ж", lesson: "m4l6", requires: [], frequency: 4, complexity: 1, forms: {"base":["мајка"],"definite-fem":["мајката"],"noun-plural-basic":["мајки"]} },
  { id: "татко", kind: "word", name: "татко - father", pos: "noun", gender: "м", lesson: "m4l6", requires: [], frequency: 4, complexity: 1, forms: {"base":["татко"],"definite-masc":["таткото"],"noun-plural-basic":["татковци"]} },
  { id: "млеко", kind: "word", name: "млеко - milk", pos: "noun", gender: "ср", lesson: "m4l6", requires: [], frequency: 3, complexity: 1, forms: {"base":["млеко"],"definite-neuter":["млекото"]} },
  // --- m5l1 ---
  { id: "утре", kind: "word", name: "утре - tomorrow", pos: "adv", lesson: "m5l1", requires: [], frequency: 5, complexity: 1, forms: {"base":["утре"]} },
  // --- m5l2 ---
  { id: "вчера", kind: "word", name: "вчера - yesterday", pos: "adv", lesson: "m5l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["вчера"]} },
  { id: "сега", kind: "word", name: "сега - now", pos: "adv", lesson: "m5l2", requires: [], frequency: 5, complexity: 1, forms: {"base":["сега"]} },
  // --- m5l3 ---
  { id: "довидување", kind: "word", name: "довидување - goodbye", pos: "other", lesson: "m5l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["довидување"]} },
  { id: "добра вечер", kind: "word", name: "добра вечер - good evening", pos: "other", lesson: "m5l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["добра вечер","вечер"],"definite-fem":["вечерта"]} },
  { id: "добра ноќ", kind: "word", name: "добра ноќ - good night", pos: "other", lesson: "m5l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["добра ноќ","ноќ"],"definite-fem":["ноќта"]} },
  // --- m6l2 ---
  { id: "мислам", kind: "word", name: "мислам - think", pos: "verb", lesson: "m6l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["мислам","мислиш","мисли","мислиме","мислите","мислат"],"past-и-е-group":["мислев","мислеше","мислевме","мислевте","мислеа"]} },
  // --- m6l3 ---
  { id: "знам", kind: "word", name: "знам - know", pos: "verb", lesson: "m6l3", requires: [], frequency: 5, complexity: 1, forms: {"base":["знам","знаеш","знае","знаеме","знаете","знаат"],"past-и-е-group":["знаев","знаеше","знаевме","знаевте","знаеја"]} },
  { id: "сѐ", kind: "word", name: "сѐ - everything", pos: "other", lesson: "m6l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["сѐ"]} },
  // --- m6l4 ---
  { id: "чини", kind: "word", name: "чини - costs", pos: "verb", lesson: "m6l4", requires: [], frequency: 3, complexity: 1, forms: {"base":["чини","чинат"],"past-и-е-group":["чинеше","чинеа"]} },
  // --- m6l5 ---
  { id: "извинете", kind: "word", name: "извинете - excuse me", pos: "other", lesson: "m6l5", requires: [], frequency: 4, complexity: 1, forms: {"base":["извинете","извини"]} },
  { id: "повелете", kind: "word", name: "повелете - here you go / you're welcome", pos: "other", lesson: "m6l5", requires: [], frequency: 3, complexity: 1, forms: {"base":["повелете","повели"]} },
  // --- m7l1 ---
  { id: "наздравје", kind: "word", name: "наздравје - cheers", pos: "other", lesson: "m7l1", requires: [], frequency: 3, complexity: 1, forms: {"base":["наздравје"]} },
  // --- m7l2 ---
  { id: "допаѓа", kind: "word", name: "ми се допаѓа - I like (it pleases me)", pos: "verb", lesson: "m7l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["допаѓа","допаѓаат","допаѓаш"],"past-в":["допаѓаше","допаѓаа"]} },
  { id: "вкусно", kind: "word", name: "вкусно - tasty", pos: "adj", lesson: "m7l2", requires: [], frequency: 3, complexity: 1, forms: {"base":["вкусно","вкусен","вкусна","вкусни"],"adj-definite":["вкусниот","вкусната","вкусното","вкусните"]} },
  { id: "уште", kind: "word", name: "уште - more/still", pos: "adv", lesson: "m7l2", requires: [], frequency: 4, complexity: 1, forms: {"base":["уште"]} },
  // --- m7l3 ---
  { id: "ајде", kind: "word", name: "ајде - come on/let's go", pos: "other", lesson: "m7l3", requires: [], frequency: 3, complexity: 1, forms: {"base":["ајде"]} },
  { id: "секој", kind: "word", name: "секој - every", pos: "other", lesson: "m7l3", requires: [], frequency: 4, complexity: 1, forms: {"base":["секој","секоја","секое","сите"]} },
];

export const conceptsById = new Map(concepts.map((c) => [c.id, c]));
