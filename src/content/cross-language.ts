// Cross-language concept mapping.
// Maps Bulgarian concept IDs to parallels in other languages.
// Separate from the concept graph itself - this is the first layer
// of a higher-order graph connecting languages to each other.

export type Relation =
  | "shared"       // works the same way
  | "false-friend" // looks similar but traps you
  | "divergent"    // exists but works differently
  | "absent";      // doesn't exist in the other language

export interface LangParallel {
  relation: Relation;
  note: string;
}

export type CrossLanguageMap = Record<string, {
  he?: LangParallel;
  ru?: LangParallel;
}>;

export const crossLanguage: CrossLanguageMap = {

  // ============================================================
  // Cyrillic and phonology
  // ============================================================

  "cyrillic-reading": {
    ru: { relation: "shared", note: "You already read Cyrillic - just watch for ъ and щ which work differently in Bulgarian." },
    he: { relation: "absent", note: "A new alphabet, but only 30 letters and most map to sounds you already know." },
  },

  "cognate-ция": {
    ru: { relation: "shared", note: "Same pattern as Russian -ция: революция, ситуация, информация." },
  },

  "cognate-ист": {
    ru: { relation: "shared", note: "Same as Russian -ист: турист, журналист, оптимист." },
  },

  "cognate-ор": {
    ru: { relation: "shared", note: "Same as Russian -ор: доктор, професор, актьор." },
  },

  "stress": {
    ru: { relation: "shared", note: "Free stress like Russian - it can land on any syllable and changes vowel quality." },
    he: { relation: "divergent", note: "Hebrew stress is mostly on the last syllable; Bulgarian stress is unpredictable and must be learned per word." },
  },

  "ъ-sound": {
    ru: { relation: "false-friend", note: "Russian ъ is a silent hard sign; Bulgarian ъ is a full vowel like the 'u' in English 'but'." },
  },

  "щ-sound": {
    ru: { relation: "false-friend", note: "Russian щ = 'shch'; Bulgarian щ = 'sht' - completely different sound." },
  },

  "final-devoicing": {
    ru: { relation: "shared", note: "Same as Russian: д sounds like т, б like п, г like к at word end (град sounds like [грат])." },
  },

  "vowel-reduction": {
    ru: { relation: "shared", note: "Like Russian, unstressed vowels shift - but less aggressively than Moscow Russian." },
  },

  // ============================================================
  // Module 1: Core grammar
  // ============================================================

  "съм-present": {
    ru: { relation: "divergent", note: "Russian drops the copula (он врач); Bulgarian keeps it (той е лекар) - don't skip it." },
    he: { relation: "divergent", note: "Hebrew also drops the copula in present tense; Bulgarian keeps it, so you need съм/си/е even where Hebrew uses nothing." },
  },

  "pronoun-subject": {
    ru: { relation: "shared", note: "Nearly identical: я/аз, ты/ти, он/той, она/тя, мы/ние, вы/вие, они/те." },
  },

  "feminine-ка": {
    ru: { relation: "shared", note: "Same suffix: студент to студентка, журналист to журналистка in both languages." },
  },

  "plural-и": {
    ru: { relation: "shared", note: "Same plural marker -и for many nouns, just like Russian студенты becomes студенти." },
  },

  "clitic-rule": {
    ru: { relation: "absent", note: "Russian has no clitic system like this - clitics and their placement rules are entirely new." },
  },

  "pronoun-drop": {
    ru: { relation: "divergent", note: "Bulgarian drops pronouns more freely than Russian; if the verb ending is clear, the pronoun goes." },
    he: { relation: "divergent", note: "Hebrew drops pronouns in past/future but keeps them in present tense; Bulgarian drops them everywhere the verb is unambiguous." },
  },

  "neg-question": {
    ru: { relation: "shared", note: "Similar to Russian negative questions with не ... ли." },
  },

  "не-negation": {
    ru: { relation: "shared", note: "Identical: не before the verb, same as Russian." },
  },

  "ли-question": {
    ru: { relation: "divergent", note: "Russian ли floats to the focused word; Bulgarian ли always goes right after the verb." },
  },

  "нали-tag": {
    ru: { relation: "absent", note: "No single-word equivalent in Russian; нали does the work of right?, isn't it?, and don't you think?" },
  },

  "и-conjunction": {
    ru: { relation: "shared", note: "Identical: и means 'and' in both languages." },
  },

  "от-from": {
    ru: { relation: "shared", note: "Same word, same meaning: от means 'from' in both languages." },
  },

  // ============================================================
  // Module 2: Verbs, articles, да
  // ============================================================

  "verb-а-family": {
    ru: { relation: "divergent", note: "Similar to Russian 1st conjugation (-ать) but the endings differ - don't trust your Russian instincts on the forms." },
  },

  "verb-и-family": {
    ru: { relation: "divergent", note: "Echoes Russian 2nd conjugation (-ить) but with different endings - close enough to mislead you." },
  },

  "definite-neuter": {
    ru: { relation: "absent", note: "Russian has no articles at all - the suffix -то marking 'the' is entirely new." },
    he: { relation: "divergent", note: "Hebrew uses the prefix ה- for 'the'; Bulgarian uses the suffix -то on neuter nouns - same concept, opposite side of the word." },
  },

  "definite-fem": {
    ru: { relation: "absent", note: "Another article Russian doesn't have - feminine nouns get -та for 'the'." },
    he: { relation: "divergent", note: "Same ה- prefix in Hebrew vs -та suffix in Bulgarian; the definiteness idea is familiar, but it attaches at the end." },
  },

  "definite-masc": {
    ru: { relation: "absent", note: "Masculine articles -ът/-а are the trickiest since articles simply don't exist in Russian." },
    he: { relation: "divergent", note: "Hebrew ה- prefix vs Bulgarian -ът/-а suffix; masculine also has two forms depending on sentence role." },
  },

  "нямам-fused": {
    ru: { relation: "absent", note: "Russian separates negation (не имею, у меня нет); Bulgarian fuses it into a single verb нямам." },
  },

  "има-existential": {
    ru: { relation: "divergent", note: "Russian есть is often dropped and нет takes genitive; Bulgarian има/няма for 'there is/isn't' is always stated." },
  },

  "да-subjunctive": {
    ru: { relation: "absent", note: "Russian uses the infinitive (хочу работать); Bulgarian uses да + conjugated verb (искам да работя) - there is no infinitive in everyday Bulgarian." },
    he: { relation: "divergent", note: "Hebrew uses the infinitive with ל- (רוצה לעבוד); Bulgarian uses да + a verb that still conjugates for person." },
  },

  "но-but": {
    ru: { relation: "shared", note: "Identical: но means 'but' in both languages." },
  },

  // ============================================================
  // Module 3: Can, must, gender, adjectives
  // ============================================================

  "мога-conjugation": {
    ru: { relation: "shared", note: "Same root as Russian мочь/могу - мога/можеш/може will feel familiar." },
  },

  "трябва-да": {
    ru: { relation: "divergent", note: "Russian uses надо/нужно + infinitive; Bulgarian uses трябва да + conjugated verb." },
    he: { relation: "divergent", note: "Hebrew uses צריך + infinitive; Bulgarian трябва да requires a fully conjugated verb after да." },
  },

  "noun-gender": {
    ru: { relation: "shared", note: "Three genders assigned by ending the same way: consonant is masculine, -а/-я feminine, -о/-е neuter." },
    he: { relation: "divergent", note: "Hebrew has two genders; Bulgarian adds a third (neuter, for -о/-е nouns) that you'll need to learn from scratch." },
  },

  "adj-agreement": {
    ru: { relation: "shared", note: "Same principle: adjectives change endings to match noun gender, like Russian." },
    he: { relation: "shared", note: "Hebrew adjectives also agree in gender and number - same concept, just with three genders instead of two." },
  },

  "adj-definite": {
    ru: { relation: "absent", note: "The article hops onto the adjective (хубавият град, not хубав градът) - nothing like this exists in Russian." },
    he: { relation: "divergent", note: "Hebrew puts ה- on both noun and adjective (הבית הגדול); Bulgarian puts the article only on the first word, usually the adjective." },
  },

  // ============================================================
  // Module 4: Reflexives, pronouns, possessives
  // ============================================================

  "reflexive-се": {
    ru: { relation: "shared", note: "Like Russian -ся/-сь but written as a separate word се: казвам се works like меня зовут." },
    he: { relation: "divergent", note: "Hebrew uses the hitpa'el binyan for reflexive meaning; Bulgarian uses a separate particle се after the verb." },
  },

  "object-pronoun-sg": {
    ru: { relation: "divergent", note: "Russian uses full forms (меня, тебя, его); Bulgarian uses short clitics (ме, те, го) with strict placement rules." },
  },

  "clitic-placement": {
    ru: { relation: "absent", note: "The ordering rules for не, ме, го and friends have no parallel in Russian - this takes practice." },
  },

  "dative-ми": {
    ru: { relation: "divergent", note: "Russian мне/тебе are standalone words; Bulgarian ми/ти are clitics that also serve as possessives (книгата ми = my book)." },
  },

  "на-possession": {
    ru: { relation: "divergent", note: "Russian uses genitive case (книга Марии); Bulgarian uses на + name (книгата на Мария) since it has no case system." },
  },

  "family-article-drop": {
    ru: { relation: "absent", note: "No parallel in Russian; Bulgarian drops the article on family nouns before possessive clitics (майка ми, not майката ми)." },
  },

  "как-how": {
    ru: { relation: "shared", note: "Identical: как means 'how' in both languages." },
  },

  "това-this": {
    ru: { relation: "shared", note: "Like Russian это: invariant demonstrative for 'this/that' regardless of gender." },
  },

  "в-in": {
    ru: { relation: "shared", note: "Same preposition with the same buffer vowel trick: в/във like Russian в/во." },
  },

  "къде-where": {
    ru: { relation: "shared", note: "Same root as Russian где; къде = 'where'." },
  },

  "с-with": {
    ru: { relation: "shared", note: "Same preposition with the same buffer vowel: с/със like Russian с/со." },
  },

  // ============================================================
  // Module 5: Future and past
  // ============================================================

  "future-ще": {
    ru: { relation: "divergent", note: "Russian uses буду + infinitive; Bulgarian uses the particle ще + present tense form - no infinitive involved." },
    he: { relation: "divergent", note: "Hebrew conjugates a separate future form; Bulgarian just adds ще before the present tense verb." },
  },

  "future-neg": {
    ru: { relation: "divergent", note: "Russian не буду + infinitive; Bulgarian няма да + present tense - a completely different negative construction." },
  },

  "past-бях": {
    ru: { relation: "divergent", note: "Russian past of 'be' marks gender (был/была/было); Bulgarian past marks person (бях/беше/бяхме)." },
  },

  "past-х": {
    ru: { relation: "divergent", note: "Russian past tense uses -л/-ла/-ло by gender; Bulgarian uses -х/-ше/-хме by person - different system entirely." },
  },

  // ============================================================
  // Module 6: Question words, connectors, numbers
  // ============================================================

  "какво-what": {
    ru: { relation: "shared", note: "Same root as Russian какой/каков; какво means 'what' and какъв means 'what kind of'." },
  },

  "кой-who": {
    ru: { relation: "shared", note: "Same Slavic root as Russian кто; кой/коя adds gender agreement that Russian кто lacks." },
  },

  "кога-when": {
    ru: { relation: "shared", note: "Same root as Russian когда, shortened to кога." },
  },

  "защо-why": {
    ru: { relation: "divergent", note: "Russian uses почему; Bulgarian защо comes from 'за що' (for what) - different construction, easy to learn." },
  },

  "че-that": {
    ru: { relation: "shared", note: "Works like Russian что as a conjunction: знам, че е тук is like знаю, что он здесь." },
  },

  "а-contrast": {
    ru: { relation: "shared", note: "Identical: а for soft contrast ('whereas'), same usage as Russian." },
  },

  "или-or": {
    ru: { relation: "shared", note: "Identical: или means 'or' in both languages." },
  },

  "може-би": {
    ru: { relation: "shared", note: "Literal match of Russian может быть; може би means 'maybe'." },
  },

  "колко-how-much": {
    ru: { relation: "shared", note: "Same root as Russian сколько minus the с-; колко means 'how much/how many'." },
  },

  "numbers-1-5": {
    ru: { relation: "shared", note: "Cognate numbers (едно/один, две/два, три, четири/четыре, пет/пять) with gender on 1 and 2 like Russian." },
    he: { relation: "divergent", note: "Hebrew numbers also have gender, but Bulgarian gender on numbers follows the noun naturally - no reversed-gender rule." },
  },

  "за-for": {
    ru: { relation: "shared", note: "Same preposition: за means 'for/about' in both languages." },
  },

  "до-next-to": {
    ru: { relation: "false-friend", note: "Russian до means 'until/up to'; Bulgarian до also means 'next to' - до парка can mean 'near the park', not only 'up to' it." },
  },

  "strong-pronouns": {
    ru: { relation: "divergent", note: "Russian always uses full pronoun forms; Bulgarian separates short clitics (ме) from strong forms (мен) used after prepositions." },
  },

  // ============================================================
  // Module 7: Polite form, liking
  // ============================================================

  "вие-polite": {
    ru: { relation: "shared", note: "Same as Russian вы-form: Вие + plural verb to address one person politely." },
    he: { relation: "absent", note: "Modern Hebrew has no formal 'you' - everyone is אתה/את regardless of social distance." },
  },

  "харесва-ми": {
    ru: { relation: "divergent", note: "Same dative-experiencer pattern as Russian нравится мне, but the verb харесва has no Russian cognate." },
    he: { relation: "shared", note: "Hebrew has dative-experiencer verbs like בא לי (I feel like) - the pattern of 'it Xs to-me' will feel familiar." },
  },

  // ============================================================
  // Word concepts
  // ============================================================

  "чай": {
    ru: { relation: "shared", note: "Same word: чай means tea in both languages." },
  },

  "банка": {
    ru: { relation: "false-friend", note: "Russian банка = jar; Bulgarian банка = bank (the financial institution is банк in Russian)." },
  },

  "кафе": {
    ru: { relation: "shared", note: "Close cognate: Bulgarian кафе, Russian кофе - note the vowel shift а/о." },
    he: { relation: "shared", note: "Same word as Hebrew קפה (kafe) - both from Arabic/Turkish." },
  },

  "турист": {
    ru: { relation: "shared", note: "Identical international word in both languages." },
  },

  "доктор": {
    ru: { relation: "shared", note: "Identical: доктор in both languages." },
  },

  "студент": {
    ru: { relation: "shared", note: "Identical: студент in both languages." },
  },

  "ресторант": {
    ru: { relation: "shared", note: "Almost identical: Bulgarian adds a т at the end (ресторант vs Russian ресторан)." },
  },

  "хотел": {
    ru: { relation: "false-friend", note: "Russian хотел = 'he wanted' (past tense of хотеть); Bulgarian хотел = hotel." },
  },

  "проблем": {
    ru: { relation: "shared", note: "Same root but gender flips: Bulgarian проблем is masculine, Russian проблема is feminine." },
  },

  "тук": {
    ru: { relation: "shared", note: "Cognate of informal Russian тут; тук means 'here'." },
  },

  "там": {
    ru: { relation: "shared", note: "Identical: там means 'there' in both languages." },
  },

  "искам": {
    ru: { relation: "false-friend", note: "Russian искать = to search; Bulgarian искам = to want - same root, completely different meanings." },
  },

  "вода": {
    ru: { relation: "shared", note: "Identical: вода means water in both languages." },
  },

  "моля": {
    ru: { relation: "divergent", note: "Russian молить = to beg/implore; Bulgarian моля is the everyday 'please' - same root, much lighter tone." },
  },

  "имам": {
    ru: { relation: "divergent", note: "Russian prefers у меня есть for 'I have'; Bulgarian uses имам directly, closer to the bookish Russian иметь." },
  },

  "кола": {
    ru: { relation: "false-friend", note: "Russian кола suggests Coca-Cola; Bulgarian кола = car." },
  },

  "вино": {
    ru: { relation: "shared", note: "Identical: вино means wine in both languages." },
  },

  "говоря": {
    ru: { relation: "shared", note: "Same root as Russian говорить; говоря = I speak." },
  },

  "разбирам": {
    ru: { relation: "false-friend", note: "Russian разбирать = to disassemble; Bulgarian разбирам = to understand (closer to Russian разбираться в чём-то)." },
  },

  "английски": {
    ru: { relation: "shared", note: "Same root: английски matches Russian английский." },
  },

  "български": {
    ru: { relation: "shared", note: "Same root: български matches Russian болгарский, with typical BG/RU sound shifts." },
  },

  "малко": {
    ru: { relation: "shared", note: "Cognate of Russian мало; малко = a little." },
  },

  "много": {
    ru: { relation: "shared", note: "Identical: много = a lot/very in both languages." },
  },

  "добре": {
    ru: { relation: "divergent", note: "Russian добро = goodness (noun); Bulgarian добре = well/fine (adverb) - same root, different part of speech." },
  },

  "уча": {
    ru: { relation: "shared", note: "Same root as Russian учить/учиться; уча = I study." },
  },

  "работя": {
    ru: { relation: "shared", note: "Same root as Russian работать; работя = I work." },
  },

  "днес": {
    ru: { relation: "divergent", note: "Russian uses сегодня; Bulgarian днес comes from the same root as ден/день - think 'this day'." },
  },

  "обичам": {
    ru: { relation: "false-friend", note: "Russian обычно = usually, обычай = custom; Bulgarian обичам = I love - same root, very different meaning." },
  },

  "пътувам": {
    ru: { relation: "shared", note: "Same root as Russian путь (path) and путешествовать; пътувам = I travel." },
  },

  "време": {
    ru: { relation: "shared", note: "Near-identical to Russian время; време = time (and also weather in Bulgarian)." },
  },

  "благодаря": {
    ru: { relation: "shared", note: "Same root as Russian благодарить; благодаря = thank you." },
  },

  "град": {
    ru: { relation: "false-friend", note: "Russian град = hail (weather); Bulgarian град = city (think Волгоград, Ленинград - the -град root)." },
  },

  "море": {
    ru: { relation: "shared", note: "Identical: море means sea in both languages." },
  },

  "хляб": {
    ru: { relation: "shared", note: "Same root as Russian хлеб; хляб = bread." },
  },

  "маса": {
    ru: { relation: "false-friend", note: "Russian масса = mass/bulk; Bulgarian маса = table." },
  },

  "жена": {
    ru: { relation: "shared", note: "Same word: жена means woman (and wife) in Bulgarian, specifically wife in Russian." },
  },

  "мъж": {
    ru: { relation: "shared", note: "Same root as Russian муж; мъж = man/husband." },
  },

  "нов": {
    ru: { relation: "shared", note: "Same root as Russian новый; нов = new." },
  },

  "добър": {
    ru: { relation: "shared", note: "Same root as Russian добрый; добър = good/kind." },
  },

  "здравей": {
    ru: { relation: "shared", note: "Same root as Russian здравствуй(те); здравей = hello, from здрав meaning healthy." },
  },

  "добро утро": {
    ru: { relation: "shared", note: "Nearly identical to Russian доброе утро; добро утро = good morning." },
  },

  "добър ден": {
    ru: { relation: "shared", note: "Nearly identical to Russian добрый день; добър ден = good day." },
  },

  "приятно": {
    ru: { relation: "shared", note: "Identical: приятно = pleasant/nice to meet you in both languages." },
  },

  "казвам": {
    ru: { relation: "shared", note: "Same root as Russian сказать/казать; казвам = I say, казвам се = my name is." },
  },

  "живея": {
    ru: { relation: "shared", note: "Same root as Russian жить/живу; живея = I live." },
  },

  "чувствам": {
    ru: { relation: "shared", note: "Same root as Russian чувствовать; чувствам = I feel." },
  },

  "виждам": {
    ru: { relation: "shared", note: "Same root as Russian видеть; виждам = I see (note the ж from the same вид-/вижд- root)." },
  },

  "майка": {
    ru: { relation: "false-friend", note: "Russian майка = tank top/undershirt; Bulgarian майка = mother - a classic trap." },
  },

  "мляко": {
    ru: { relation: "shared", note: "Same root as Russian молоко; мляко = milk." },
  },

  "утре": {
    ru: { relation: "false-friend", note: "Russian утро = morning; Bulgarian утре = tomorrow - same root, different meaning." },
  },

  "вчера": {
    ru: { relation: "shared", note: "Identical: вчера = yesterday in both languages." },
  },

  "сега": {
    ru: { relation: "shared", note: "Same root as Russian сейчас; сега = now." },
  },

  "довиждане": {
    ru: { relation: "shared", note: "Same construction as Russian до свидания (until seeing again); довиждане = goodbye." },
  },

  "добър вечер": {
    ru: { relation: "shared", note: "Nearly identical to Russian добрый вечер; добър вечер = good evening." },
  },

  "лека нощ": {
    ru: { relation: "divergent", note: "Russian says спокойной ночи (peaceful night); Bulgarian says лека нощ (light night) - same idea, different adjective." },
  },

  "мисля": {
    ru: { relation: "shared", note: "Same root as Russian мыслить; мисля = I think." },
  },

  "знам": {
    ru: { relation: "shared", note: "Same root as Russian знать; знам = I know." },
  },

  "всичко": {
    ru: { relation: "shared", note: "Same root as Russian всё; всичко = everything." },
  },

  "извинете": {
    ru: { relation: "shared", note: "Same root as Russian извините; извинете = excuse me." },
  },

  "наздраве": {
    ru: { relation: "shared", note: "Same construction as Russian на здоровье; наздраве = cheers." },
  },

  "вкусно": {
    ru: { relation: "shared", note: "Identical: вкусно = tasty/delicious in both languages." },
  },

  "още": {
    ru: { relation: "shared", note: "Same root as Russian ещё; още = still/more." },
  },

  "всеки": {
    ru: { relation: "shared", note: "Same root as Russian всякий; всеки = every/each." },
  },

};
