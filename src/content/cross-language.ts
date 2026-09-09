// Cross-language concept mapping.
// Maps Macedonian concept IDs to parallels in other languages.
// Separate from the concept graph itself - this is the first layer
// of a higher-order graph connecting languages to each other.
//
// he = for an English speaker who knows Hebrew.
// ru = for someone who knows Russian: shared Slavic roots and false friends.
// bg = for someone who studied some Bulgarian: contrast first. Bulgarian
//      spellings (ъ щ ь ю я й) belong only in bg notes.

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
  bg?: LangParallel;
}>;

export const crossLanguage: CrossLanguageMap = {

  // ============================================================
  // Module 0: Cyrillic and phonology
  // ============================================================

  "cyrillic-reading": {
    ru: { relation: "shared", note: "You already read Cyrillic. Macedonian drops the Russian letters й, ь, щ, ю, я (and the hard sign) and adds seven of its own: ј, љ, њ, ќ, ѓ, ѕ, џ. Everything else reads as in Russian." },
    he: { relation: "absent", note: "A new alphabet, but 31 letters that each stand for exactly one sound, and every vowel is written - no niqqud to guess." },
    bg: { relation: "divergent", note: "Bulgarian has 30 letters, Macedonian 31: ъ, щ, ь, ю, я and й are gone, and ј, љ, њ, ќ, ѓ, ѕ, џ are new. Everything else reads the same." },
  },

  "cyrillic-typing": {
    ru: { relation: "shared", note: "Typing works letter for letter as in Russian; only the seven Macedonian letters (ј, љ, њ, ќ, ѓ, ѕ, џ) need new keys." },
    bg: { relation: "divergent", note: "Where you typed й, ю, я in Bulgarian, type ј, ју, ја here (Юли → Јули, Япония → Јапонија); ъ becomes а or о (път → пат, сън → сон)." },
  },

  "ј-letter": {
    ru: { relation: "divergent", note: "Russian writes this sound as й at the end of a syllable and hides it inside ю, я, е; Macedonian spells it out as ј every time: ја, ју, је (јас, Јули, Јапонија)." },
    he: { relation: "shared", note: "Same job as a consonantal י (yod): ја is the ya of יפן, so Japan is Јапонија." },
    bg: { relation: "false-friend", note: "Bulgarian й, ю, я → ј, ју, ја: чай → чај, Юли → Јули, Япония → Јапонија. A Bulgarian hand wants to write я, but Macedonian has no я at all." },
  },

  "љ-њ-letters": {
    ru: { relation: "divergent", note: "Russian shows a soft л or н through the next vowel or a soft sign (Любляна, баня, конь); Macedonian gives the soft sound its own letter: Љубљана, бања, коњ." },
    he: { relation: "absent", note: "Hebrew has no palatal l or n; think of the Spanish ll and ñ: Љубљана, бања, коњ." },
    bg: { relation: "divergent", note: "Bulgarian softens with ь, ю or я (Любляна, баня, коня); here the softness lives in the letter itself: љубов, бања, коњ." },
  },

  "ќ-ѓ-letters": {
    ru: { relation: "divergent", note: "Where Russian has ч or щ, Macedonian often has ќ (ночь → ноќ, свеча → свеќа), and Russian жд corresponds to ѓ (между → меѓу). The sounds are soft k and g, which Russian has no letters for." },
    he: { relation: "absent", note: "No Hebrew equivalent: ќ is the k of 'cute' and ѓ the g of 'argue', said quickly (ќе, куќа, ноќ, Ѓорѓи)." },
    bg: { relation: "divergent", note: "Bulgarian щ → ќ (нощ → ноќ, къща → куќа, свещ → свеќа, ще → ќе) and жд → ѓ (между → меѓу). The sound is a soft k or g, not sht or zhd." },
  },

  "ѕ-џ-letters": {
    ru: { relation: "divergent", note: "Russian needs two letters for these sounds (дж in джаз, джем; дз in дзюдо); Macedonian has one letter each: џез, џем, ѕвезда." },
    he: { relation: "shared", note: "џ is the ג׳ of ג׳ינס and ג׳יפ (џип); ѕ is a voiced צ, the dz in 'adds' (ѕвезда)." },
    bg: { relation: "absent", note: "Bulgarian has neither letter and writes дж/дз (джаз, джем, бюджет); Macedonian writes џез, џем, буџет, ѕвезда." },
  },

  "final-devoicing": {
    ru: { relation: "shared", note: "Same as Russian: д sounds like т, б like п, г like к at the end of a word (град sounds like [грат], леб like [леп])." },
    he: { relation: "divergent", note: "Hebrew keeps final consonants voiced (כלב ends in a v sound); Macedonian devoices them: град is said 'grat', леб 'lep'." },
    bg: { relation: "shared", note: "Same as Bulgarian: град ends in a т sound and леб, like хляб, ends in a п sound." },
  },

  // ============================================================
  // Module 1: Cognates, stress, сум, negation, questions
  // ============================================================

  "cognate-ција": {
    ru: { relation: "shared", note: "Same pattern as Russian -ция, with a ј: революција, ситуација, информација." },
    he: { relation: "shared", note: "Same pattern as Hebrew -ציה: אינפורמציה = информација, סיטואציה = ситуација." },
    bg: { relation: "divergent", note: "Bulgarian -ция → -ција with a ј (информация → информација, ситуација), but 'station' is станица here, not станция." },
  },

  "cognate-ист": {
    ru: { relation: "shared", note: "Same as Russian -ист: турист, журналист, оптимист." },
    he: { relation: "shared", note: "Same as Hebrew -יסט: טוריסט = турист, ז׳ורנליסט = журналист." },
    bg: { relation: "shared", note: "Identical to Bulgarian: турист, журналист; the feminine is -ка in both (туристка)." },
  },

  "cognate-ор": {
    ru: { relation: "shared", note: "Same as Russian -ор: доктор, професор (one ф, one с); Russian актёр is актер here." },
    he: { relation: "shared", note: "Same as Hebrew -ור: דוקטור = доктор, פרופסור = професор." },
    bg: { relation: "shared", note: "Same as Bulgarian (доктор, професор); only 'actor' differs: актьор → актер." },
  },

  "stress-antepenult": {
    ru: { relation: "divergent", note: "Russian stress is free and memorised word by word; Macedonian stress is a rule: third syllable from the end (МакеДОнија, ЗБОрувам), and there is no vowel reduction, so an unstressed о is never said as а." },
    he: { relation: "divergent", note: "Hebrew stress is mostly on the last syllable; Macedonian stress is fixed on the third syllable from the end (ЗБОрувам, МакеДОнија), so you never have to guess." },
    bg: { relation: "divergent", note: "Bulgarian stress is free and unstressed vowels reduce (о toward у, а toward ъ); Macedonian stress sits on the third syllable from the end and every vowel is said as written: студЕнт → СТУдент, водА → ВОда, говорЯ → ЗБОрувам." },
  },

  "сум-present": {
    ru: { relation: "divergent", note: "Russian drops the copula in the present (он врач); Macedonian keeps it (тој е доктор) - never skip сум/си/е/сме/сте/се." },
    he: { relation: "divergent", note: "Hebrew drops 'to be' in the present (הוא רופא); Macedonian keeps it, so you need сум/си/е even where Hebrew has nothing." },
    bg: { relation: "divergent", note: "Bulgarian съм, си, е, сме, сте, са → сум, си, е, сме, сте, се. Two traps: the I-form is сум (not съм), and the they-form is се, which looks like the reflexive but here means 'are' (Тие се студенти)." },
  },

  "pronoun-subject": {
    ru: { relation: "shared", note: "Nearly identical: я/јас, ты/ти, он/тој, она/таа, оно/тоа, мы/ние, вы/вие, они/тие." },
    he: { relation: "divergent", note: "Hebrew has separate masculine and feminine 'you' and 'they' (אתה/את, הם/הן); Macedonian ти, вие, тие are genderless - only тој/таа/тоа mark gender." },
    bg: { relation: "divergent", note: "Bulgarian аз, тя, то, те → јас, таа, тоа, тие. Watch те: in Bulgarian it is 'they', in Macedonian it is only the object clitic 'you' (Те сакам); 'they' is тие." },
  },

  "feminine-ка": {
    ru: { relation: "shared", note: "Same suffix: студент to студентка, журналист to журналистка in both languages." },
    he: { relation: "shared", note: "Hebrew adds -ית (סטודנט → סטודנטית); Macedonian adds -ка (студент → студентка) - same idea." },
    bg: { relation: "shared", note: "Identical to Bulgarian: студентка, туристка, докторка." },
  },

  "plural-и": {
    ru: { relation: "shared", note: "Same plural marker -и for many nouns, just like Russian студенты becomes студенти." },
    he: { relation: "shared", note: "Like Hebrew -ים, one plural ending you add to the noun: студент → студенти, турист → туристи." },
    bg: { relation: "shared", note: "Same -и plural as Bulgarian: студенти, туристи, доктори." },
  },

  "pronoun-drop": {
    ru: { relation: "divergent", note: "Macedonian drops pronouns more freely than Russian; if the verb ending is clear, the pronoun goes: Студент сум, Сакам кафе." },
    he: { relation: "divergent", note: "Hebrew drops pronouns in past and future but keeps them in the present; Macedonian drops them everywhere the verb ending is unambiguous." },
    bg: { relation: "shared", note: "Works exactly as in Bulgarian: Студент съм → Студент сум; the ending carries the person." },
  },

  "сум-position": {
    ru: { relation: "absent", note: "Russian has no present-tense copula to place; the Macedonian habit is pronoun + сум (Јас сум студент) or description + сум (Студент сум)." },
    he: { relation: "absent", note: "Hebrew has nothing to place in the present; here the copula follows the pronoun (Јас сум студент) or the description (Студент сум)." },
    bg: { relation: "shared", note: "Same two orders as Bulgarian (Аз съм студент / Студент съм); Bulgarian treats 'съм can never come first' as a law, Macedonian just prefers these orders." },
  },

  "neg-question": {
    ru: { relation: "shared", note: "Like Russian не ... ли: Не си ли студент? is Не студент ли ты? Colloquial зар matches разве." },
    he: { relation: "absent", note: "Hebrew asks a negative question with לא and intonation (?אתה לא סטודנט); Macedonian adds ли after the verb: Не си ли студент?" },
    bg: { relation: "shared", note: "Same as Bulgarian: Не си ли студент? The colloquial opener зар matches Bulgarian нима." },
  },

  "не-negation": {
    ru: { relation: "shared", note: "Identical: не before the verb, same as Russian." },
    he: { relation: "shared", note: "Like לא, не goes right before the verb: не сум, не сакам." },
    bg: { relation: "shared", note: "Identical to Bulgarian: не + verb. Only the fused form is spelled differently: нямам → немам." },
  },

  "дали-question": {
    ru: { relation: "absent", note: "Russian has no sentence-opening question word - it relies on intonation or ли. Дали is the Macedonian default: Дали си студент? Дали имаш кафе?" },
    he: { relation: "shared", note: "Works like האם at the start of a question: ?האם אתה סטודנט = Дали си студент?" },
    bg: { relation: "divergent", note: "Bulgarian uses дали mainly for indirect or wondering questions (Не знам дали...); Macedonian uses it as the plain yes/no opener: Дали имаш кафе? = Имаш ли кафе?" },
  },

  "ли-question": {
    ru: { relation: "shared", note: "Same as Russian ли: it follows the word being asked about (Студент ли си? Имаш ли кафе?)." },
    he: { relation: "absent", note: "No Hebrew particle does this; ли is an alternative to дали that sits right after the word in question: Студент ли си?" },
    bg: { relation: "divergent", note: "Same particle in the same place (Студент ли си? Имаш ли кафе?), but in Macedonian it is the second choice; the everyday question starts with дали." },
  },

  "нели-tag": {
    ru: { relation: "absent", note: "No single-word equivalent in Russian; нели does the work of right?, isn't it?, and не так ли?" },
    he: { relation: "shared", note: "Like ?נכון tacked onto a statement: Ти си студент, нели?" },
    bg: { relation: "divergent", note: "Bulgarian нали → нели, one vowel apart, same use: Ти си студент, нели?" },
  },

  "и-conjunction": {
    ru: { relation: "shared", note: "Identical: и means 'and' in both languages." },
    he: { relation: "divergent", note: "Hebrew glues ו- to the next word; и is a separate word: кафе и вода." },
    bg: { relation: "shared", note: "Identical to Bulgarian и." },
  },

  "од-from": {
    ru: { relation: "shared", note: "Cognate of Russian от with a voiced д; unlike Russian, од covers both из and от: од Скопје, од Марија." },
    he: { relation: "divergent", note: "Hebrew prefixes מ- to the noun (מסקופיה); од is a separate word: од Скопје." },
    bg: { relation: "false-friend", note: "Bulgarian от → од, and a Bulgarian speaker keeps saying от. The meaning is identical: от София → од Скопје." },
  },

  // ============================================================
  // Module 2: Verbs, articles, да
  // ============================================================

  "verb-м-first-person": {
    ru: { relation: "divergent", note: "Russian I-forms end in -у/-ю (хочу, говорю, могу); every Macedonian I-form ends in -м: сакам, зборувам, можам." },
    he: { relation: "divergent", note: "Hebrew present forms don't mark person (רוצה is I, you or he); Macedonian -м always means 'I': сакам, имам, учам." },
    bg: { relation: "divergent", note: "Bulgarian I-forms end in -а, -я or -м (говоря, мога, уча, искам); in Macedonian every one ends in -м: зборувам, можам, учам, сакам." },
  },

  "verb-а-group": {
    ru: { relation: "divergent", note: "Roughly Russian 1st conjugation (-ать), but the endings differ: сакаш, сака, сакаме, and the they-form сакаат has a double а." },
    he: { relation: "divergent", note: "Hebrew conjugates by binyan and root pattern; Macedonian by the vowel before -ш: сакам, сакаш, сака, сакаме, сакате, сакаат." },
    bg: { relation: "divergent", note: "Same as the Bulgarian а-family (искам, искаш, иска, искаме, искате, искат) except the they-form: сакаат with a double а, not сакат." },
  },

  "verb-и-group": {
    ru: { relation: "divergent", note: "Echoes Russian 2nd conjugation (учишь, учит) but the I-form is учам and the we-form учиме - close enough to mislead you." },
    bg: { relation: "divergent", note: "Bulgarian уча, учиш, учи, учим, учите, учат → учам, учиш, учи, учиме, учите, учат: the I-form takes -м and the we-form is always -ме (учиме, работиме), never -м." },
  },

  "definite-neuter": {
    ru: { relation: "absent", note: "Russian has no articles at all - the suffix -то marking 'the' is entirely new (кафе → кафето)." },
    he: { relation: "divergent", note: "Hebrew uses the prefix ה- for 'the'; Macedonian uses the suffix -то on neuter nouns - same concept, opposite side of the word (הקפה = кафето)." },
    bg: { relation: "shared", note: "Same as Bulgarian: кафе → кафето, вино → виното." },
  },

  "definite-fem": {
    ru: { relation: "absent", note: "Another article Russian doesn't have - feminine nouns get -та for 'the' (вода → водата)." },
    he: { relation: "divergent", note: "Same ה- prefix in Hebrew vs -та suffix in Macedonian; the definiteness idea is familiar, but it attaches at the end (המים = водата)." },
    bg: { relation: "shared", note: "Same as Bulgarian: вода → водата, сметка → сметката." },
  },

  "definite-masc": {
    ru: { relation: "absent", note: "Articles don't exist in Russian; here every masculine noun gets -от: телефонот, хотелот, градот." },
    he: { relation: "divergent", note: "Hebrew ה- prefix vs Macedonian -от suffix: הטלפון = телефонот. One form, no exceptions." },
    bg: { relation: "divergent", note: "Bulgarian has a long and a short masculine article (телефонът / телефона) chosen by sentence role; Macedonian has one form, -от, everywhere: телефонот, градот. Never -ът." },
  },

  "немам-fused": {
    ru: { relation: "absent", note: "Russian separates negation (не имею, у меня нет); Macedonian fuses it into a single verb немам." },
    he: { relation: "shared", note: "Like אין לי, one negative word for 'I don't have': немам кафе = אין לי קפה." },
    bg: { relation: "shared", note: "Bulgarian нямам → немам (я → е); same fusion, same forms: немаш, нема, немаме, немаат." },
  },

  "има-existential": {
    ru: { relation: "divergent", note: "Russian есть is often dropped and нет takes the genitive; Macedonian има/нема for 'there is/isn't' is always stated." },
    he: { relation: "shared", note: "Exactly יש / אין: има вода = יש מים, нема вода = אין מים." },
    bg: { relation: "shared", note: "Same as Bulgarian има / няма: има кафе, нема вино." },
  },

  "да-subjunctive": {
    ru: { relation: "absent", note: "Russian uses the infinitive (хочу работать); Macedonian uses да + conjugated verb (сакам да работам) - there is no infinitive in Macedonian." },
    he: { relation: "divergent", note: "Hebrew uses the ל- infinitive (רוצה לעבוד) or ש + a conjugated verb (רוצה שתבוא); Macedonian always uses да + a verb that still conjugates for person: сакам да работам." },
    bg: { relation: "shared", note: "Identical to Bulgarian: искам да работя → сакам да работам." },
  },

  "но-but": {
    ru: { relation: "shared", note: "Identical: но means 'but' in both languages." },
    bg: { relation: "shared", note: "Same as Bulgarian: но, with colloquial ама." },
  },

  // ============================================================
  // Module 3: Can, must, gender, adjectives
  // ============================================================

  "verb-е-group": {
    ru: { relation: "divergent", note: "Closest to Russian 1st-conjugation -е- forms (можешь, может = можеш, може), but with -м and -ме in the I- and we-forms: можам, можеме." },
    bg: { relation: "divergent", note: "Bulgarian мога, можеш, може, можем, можете, могат → можам, можеш, може, можеме, можете, можат; живея → живеам, живееме; знам keeps its shape but the they-form is знаат, not знаят." },
  },

  "можам-conjugation": {
    ru: { relation: "shared", note: "Same root as Russian мочь/могу - можам/можеш/може will feel familiar." },
    bg: { relation: "divergent", note: "Bulgarian мога → можам, and the they-form is можат, not могат." },
  },

  "може-ли-polite": {
    ru: { relation: "divergent", note: "Russian можно + infinitive; Macedonian frozen Може ли + a noun or a да-clause: Може ли сметката?" },
    he: { relation: "shared", note: "Like ?...אפשר - a frozen 'is it possible' request: Може ли сметката?" },
    bg: { relation: "shared", note: "Identical to Bulgarian Може ли...? (Може ли сметката?)." },
  },

  "треба-да": {
    ru: { relation: "divergent", note: "Russian uses надо/нужно + infinitive; Macedonian uses треба да + conjugated verb (треба да одам)." },
    he: { relation: "divergent", note: "Hebrew uses צריך + infinitive; Macedonian треба да requires a fully conjugated verb after да." },
    bg: { relation: "shared", note: "Bulgarian трябва да → треба да (я → е, and no в); frozen form + conjugated verb, as in Bulgarian: треба да одам." },
  },

  "noun-gender": {
    ru: { relation: "shared", note: "Three genders assigned by ending the same way: consonant is masculine, -а feminine, -о/-е neuter." },
    he: { relation: "divergent", note: "Hebrew has two genders; Macedonian adds a third (neuter, for -о/-е nouns) that you'll need to learn from scratch." },
    bg: { relation: "divergent", note: "Same three genders by ending, but a few words switch: вечер is feminine here (добра вечер, not добър вечер), and neuter пиво replaces feminine бира." },
  },

  "adj-agreement": {
    ru: { relation: "shared", note: "Same principle: adjectives change endings to match noun gender, like Russian." },
    he: { relation: "shared", note: "Hebrew adjectives also agree in gender and number - same concept, just with three genders instead of two." },
    bg: { relation: "shared", note: "Same endings as Bulgarian (-/-а/-о/-и); convert the stem: добър → добар, голям → голем, хубав → убав." },
  },

  "adj-definite": {
    ru: { relation: "absent", note: "The article hops onto the adjective (новиот град, not нов градот) - nothing like this exists in Russian." },
    he: { relation: "divergent", note: "Hebrew puts ה- on both noun and adjective (הבית הגדול); Macedonian puts the article only on the first word, usually the adjective: големата куќа." },
    bg: { relation: "divergent", note: "Bulgarian хубавият / хубавия град → one form, убавиот град, with -иот. Feminine and neuter match Bulgarian: новата, новото." },
  },

  // ============================================================
  // Module 4: Reflexives, object pronouns, doubling, possessives
  // ============================================================

  "reflexive-се": {
    ru: { relation: "shared", note: "Like Russian -ся, but a separate word that goes before the verb: се викам works like меня зовут." },
    he: { relation: "divergent", note: "Hebrew uses a binyan (hitpa'el) or 'they call me' (קוראים לי); Macedonian puts the particle се before the verb: се викам." },
    bg: { relation: "false-friend", note: "Bulgarian казвам се → се викам, with се first. Bulgarian викам means 'shout / call someone'; here се викам is the ordinary 'my name is'." },
  },

  "clitic-proclitic": {
    ru: { relation: "absent", note: "Russian has no short object pronouns; the Macedonian ones (ме, те, го, ја) are unstressed words that go right before the verb: Те гледам." },
    he: { relation: "divergent", note: "Hebrew puts the object after the verb as a separate word (אני רואה אותך); Macedonian puts the short pronoun before the verb, even at the start: Те гледам." },
    bg: { relation: "false-friend", note: "The single biggest difference: Bulgarian Виждам те, Обичам те, Чакам го; Macedonian Те гледам, Те сакам, Го чекам. The clitic goes BEFORE the verb and may open the sentence." },
  },

  "object-pronoun-sg": {
    ru: { relation: "divergent", note: "Russian uses full forms (меня, тебя, его, её); Macedonian uses short clitics (ме, те, го, ја) before the verb." },
    he: { relation: "divergent", note: "Hebrew אותי/אותך/אותו/אותה stand after the verb; ме/те/го/ја stand before it." },
    bg: { relation: "divergent", note: "Same forms as Bulgarian for me/you/him (ме, те, го); 'her' is ја (Bulgarian я), and all of them go before the verb: Чакам я → Ја чекам." },
  },

  "object-pronoun-pl": {
    ru: { relation: "divergent", note: "Russian нас/вас/их are full words; here нѐ, ве, ги are clitics before the verb (Нѐ гледаат)." },
    he: { relation: "divergent", note: "אותנו/אתכם/אותם follow the verb; нѐ/ве/ги precede it: Нѐ чекаат." },
    bg: { relation: "divergent", note: "Bulgarian ни, ви, ги → нѐ, ве, ги: 'us' and 'you all' get their own direct-object forms, and нѐ carries an accent to keep it apart from не (not)." },
  },

  "clitic-placement": {
    ru: { relation: "absent", note: "The fixed order не + clitic + verb (Не те разбирам) has no parallel in Russian - this takes practice." },
    he: { relation: "divergent", note: "Hebrew לא מבין אותך puts the object last; Macedonian keeps the clitic between не and the verb: Не те разбирам." },
    bg: { relation: "shared", note: "Same order as Bulgarian after не: Не те разбирам. The difference shows only without не: Те разбирам here, Разбирам те in Bulgarian." },
  },

  "clitic-doubling": {
    ru: { relation: "absent", note: "Nothing like it in Russian: Го чекам Марко says 'him' twice by Russian standards, and that is correct Macedonian." },
    he: { relation: "divergent", note: "Hebrew marks a definite direct object with את (ראיתי את מריה); Macedonian marks it by adding the short pronoun: Ја гледам Марија. Same trigger (definiteness), different marker." },
    bg: { relation: "absent", note: "Bulgarian doubles only for emphasis or topic (Мене ме боли); Macedonian doubles every definite object: Го чекам Марко, Ја сакам Марија, Го сакам кафето. Leaving it out sounds Bulgarian." },
  },

  "dative-ми": {
    ru: { relation: "divergent", note: "Russian мне/тебе are standalone words; ми/ти are clitics that also mark possession after a definite noun (колата ми = my car)." },
    he: { relation: "divergent", note: "לי/לך are the same 'to me / to you'; for possession Hebrew uses שלי or a suffix (ספרי), Macedonian the dative clitic after the definite noun: колата ми." },
    bg: { relation: "shared", note: "Same as Bulgarian: колата ми, телефонът ти → колата ми, телефонот ти; the clitics ми/ти/му/ѝ/ни/ви/им are identical." },
  },

  "dative-му-ѝ": {
    ru: { relation: "divergent", note: "Russian ему/ей are full words; му/ѝ are clitics, and ѝ carries an accent to distinguish it from и (and)." },
    he: { relation: "shared", note: "Like לו/לה: му = to him, ѝ = to her; after a definite noun they mean his/her (кафето му, колата ѝ)." },
    bg: { relation: "shared", note: "Identical to Bulgarian му and ѝ, accent mark included: кафето му, колата ѝ." },
  },

  "на-possession": {
    ru: { relation: "divergent", note: "Russian uses the genitive (машина Марии); Macedonian uses на + name (колата на Марија) since it has no case system." },
    he: { relation: "shared", note: "Like של: колата на Марија = המכונית של מריה, no case endings." },
    bg: { relation: "shared", note: "Same as Bulgarian: колата на Мария → колата на Марија." },
  },

  "family-article-drop": {
    ru: { relation: "absent", note: "No parallel in Russian; Macedonian drops the article on family nouns before possessive clitics (мајка ми, not мајката ми)." },
    he: { relation: "shared", note: "Like the Hebrew suffix forms אמי, אבי (my mother, my father), which take no ה-: мајка ми, татко ми." },
    bg: { relation: "shared", note: "Same as Bulgarian майка ми, баща ми → мајка ми, татко ми." },
  },

  "како-how": {
    ru: { relation: "shared", note: "Russian как plus a vowel: како. Како си? = Как ты?" },
    he: { relation: "shared", note: "איך = како: Како си? = ?איך אתה" },
    bg: { relation: "divergent", note: "Bulgarian как → како, with a final о: Как си? → Како си?" },
  },

  "ова-this": {
    ru: { relation: "shared", note: "Like Russian это / то: ова = this, тоа = that; both invariant." },
    he: { relation: "shared", note: "Like זה and ההוא: ова (this) and тоа (that), one form each." },
    bg: { relation: "divergent", note: "Bulgarian това (this) and онова (that) → ова (this) and тоа (that). Тоа is the ordinary 'that', not the Bulgarian far-away 'that one'." },
  },

  "во-in": {
    ru: { relation: "shared", note: "Same as Russian в/во, but always the full во: во Скопје, во хотелот." },
    he: { relation: "divergent", note: "Hebrew prefixes ב- (בסקופיה); во is a separate word: во Скопје." },
    bg: { relation: "false-friend", note: "Bulgarian в / във → во, always: в София → во Скопје, във влака → во возот. A Bulgarian speaker keeps saying в." },
  },

  "каде-where": {
    ru: { relation: "shared", note: "Same root as Russian где; каде = 'where'." },
    he: { relation: "shared", note: "איפה = каде: Каде живееш? = ?איפה אתה גר" },
    bg: { relation: "divergent", note: "Bulgarian къде → каде (ъ → а)." },
  },

  "со-with": {
    ru: { relation: "shared", note: "Same as Russian с/со, but always the full со: со Марија, со тебе." },
    he: { relation: "shared", note: "Like עם, a separate word: со тебе = איתך." },
    bg: { relation: "false-friend", note: "Bulgarian с / със → со, always: с мляко → со млеко, със захар → со шеќер. A Bulgarian speaker keeps saying с." },
  },

  // ============================================================
  // Module 5: Future and past
  // ============================================================

  "future-ќе": {
    ru: { relation: "divergent", note: "Russian uses буду + infinitive; Macedonian uses the particle ќе + present (Ќе одам). Ќе and Russian хочу share an ancestor, the way English 'will' once meant 'want'." },
    he: { relation: "divergent", note: "Hebrew has a full future conjugation (אלך); Macedonian just puts ќе before the present form: ќе одам." },
    bg: { relation: "shared", note: "Bulgarian ще → ќе (щ → ќ), same construction: ще отида → ќе одам, ще говорим → ќе зборуваме." },
  },

  "future-neg": {
    ru: { relation: "divergent", note: "Russian не буду + infinitive; Macedonian нема да + present (Нема да одам) - a completely different construction." },
    he: { relation: "divergent", note: "Hebrew is לא + future (לא אלך); Macedonian is нема да + present: Нема да одам." },
    bg: { relation: "shared", note: "Bulgarian няма да → нема да: няма да отида → нема да одам." },
  },

  "past-бев": {
    ru: { relation: "divergent", note: "Russian past of 'be' marks gender (был/была/было); Macedonian marks person (бев/беше/бевме)." },
    he: { relation: "shared", note: "Like הייתי, היית, היינו, the past of 'be' marks person: бев, беше, бевме." },
    bg: { relation: "divergent", note: "Bulgarian бях, беше, беше, бяхме, бяхте, бяха → бев, беше, беше, бевме, бевте, беа: я → е, and в where Bulgarian has х." },
  },

  "past-в": {
    ru: { relation: "divergent", note: "Russian past uses -л/-ла/-ло by gender; Macedonian uses -в/-ше/-вме by person - a different system entirely." },
    he: { relation: "shared", note: "As in Hebrew (-תי, -ת, -נו), the past ending tells you the person: имав, имаше, имавме." },
    bg: { relation: "divergent", note: "Bulgarian -х → -в: имах → имав, исках → сакав, говорех → зборував; the he/she-form -ше is the same in both." },
  },

  "past-и-е-group": {
    ru: { relation: "divergent", note: "Russian учил / работал by gender; Macedonian учев, работев, можев by person, all with -ев." },
    bg: { relation: "divergent", note: "Bulgarian splits учих / учех and работих / работех (aorist vs imperfect); Macedonian teaches one past: учев, работев, можев, знаев, all with -ев." },
  },

  "past-вме": {
    ru: { relation: "divergent", note: "Russian has one plural past (-ли) for all persons; Macedonian separates -вме (we), -вте (you all), -а (they): имавме, имавте, имаа." },
    he: { relation: "shared", note: "Like Hebrew -נו / -תם / -ו: -вме, -вте, -а mark we, you all, they." },
    bg: { relation: "divergent", note: "Bulgarian -хме, -хте, -ха → -вме, -вте, -а: имахме → имавме, имаха → имаа." },
  },

  // ============================================================
  // Module 6: Question words, connectors, numbers
  // ============================================================

  "што-what": {
    ru: { relation: "shared", note: "Same as Russian что, spelled the way it sounds: што." },
    he: { relation: "shared", note: "מה = што: Што сакаш? = ?מה אתה רוצה" },
    bg: { relation: "false-friend", note: "Bulgarian какво → што. Macedonian какво exists but means 'what kind' (какво време = what kind of weather), so Какво сакаш? asks the wrong question; say Што сакаш?" },
  },

  "кој-who": {
    ru: { relation: "shared", note: "Same Slavic root as Russian кто; кој/која/кое adds gender agreement that Russian кто lacks." },
    he: { relation: "divergent", note: "מי has one form; кој/која/кое/кои change with the gender and number of what you ask about." },
    bg: { relation: "shared", note: "Same as Bulgarian кой/коя/кое/кои with й → ј: кој, која, кое, кои." },
  },

  "кога-when": {
    ru: { relation: "shared", note: "Same root as Russian когда, shortened to кога." },
    he: { relation: "shared", note: "מתי = кога." },
    bg: { relation: "shared", note: "Identical to Bulgarian кога." },
  },

  "зошто-why": {
    ru: { relation: "divergent", note: "Russian uses почему; Macedonian зошто is 'за што' (for what), and затоа што is 'for that which' - different construction, easy to learn." },
    he: { relation: "shared", note: "למה / כי = зошто / затоа што; 'because' is two words, like בגלל ש." },
    bg: { relation: "divergent", note: "Bulgarian защо / защото → зошто / затоа што: щ → шт, and 'because' becomes two words." },
  },

  "дека-that": {
    ru: { relation: "divergent", note: "Russian что is both the question word and the conjunction; Macedonian splits them: што asks, дека reports (мислам дека е тука = думаю, что он здесь)." },
    he: { relation: "divergent", note: "Hebrew prefixes ש- (חושב שהוא כאן); дека is a separate word: мислам дека е тука." },
    bg: { relation: "false-friend", note: "Bulgarian че → дека: мисля, че е тук → мислам дека е тука. Че is not a Macedonian word, and a Bulgarian speaker reaches for it every time." },
  },

  "а-contrast": {
    ru: { relation: "shared", note: "Identical: а for soft contrast ('whereas'), same usage as Russian." },
    bg: { relation: "shared", note: "Identical to Bulgarian а." },
  },

  "или-or": {
    ru: { relation: "shared", note: "Identical: или means 'or' in both languages." },
    he: { relation: "shared", note: "או = или." },
    bg: { relation: "shared", note: "Identical to Bulgarian или." },
  },

  "можеби": {
    ru: { relation: "shared", note: "Literal match of Russian может быть, fused into one word: можеби." },
    he: { relation: "shared", note: "אולי = можеби." },
    bg: { relation: "divergent", note: "Bulgarian може би (two words) → можеби, one word." },
  },

  "колку-how-much": {
    ru: { relation: "shared", note: "Same root as Russian сколько minus the с-; колку means 'how much / how many'." },
    he: { relation: "shared", note: "כמה = колку: Колку чини? = ?כמה זה עולה" },
    bg: { relation: "divergent", note: "Bulgarian колко → колку (final у, as in много → многу)." },
  },

  "numbers-1-5": {
    ru: { relation: "shared", note: "Cognate numbers (еден/один, два, три, четири/четыре, пет/пять) with gender on 1 and 2 like Russian." },
    he: { relation: "divergent", note: "Hebrew numbers also have gender, but Macedonian gender on numbers follows the noun naturally - no reversed-gender rule." },
    bg: { relation: "divergent", note: "Bulgarian един → еден; the rest match. But the Bulgarian count form after numbers (пет хотела, двама студенти) is not used here: пет хотели, два студенти." },
  },

  "noun-plural-basic": {
    ru: { relation: "divergent", note: "Russian plurals change with case; Macedonian has one plural per noun: градови (like Russian города), пива, кафиња." },
    he: { relation: "divergent", note: "Hebrew has -ים/-ות; Macedonian has -и, -ови, -а and -иња depending on the noun: студенти, градови, пива, кафиња." },
    bg: { relation: "divergent", note: "Bulgarian градове → градови, кафета → кафиња, морета → мориња; and after numbers the ordinary plural is used (пет хотели), not the count form (пет хотела)." },
  },

  "за-for": {
    ru: { relation: "shared", note: "Same preposition: за means 'for / about' in both languages." },
    he: { relation: "shared", note: "בשביל / על = за: за мене = בשבילי." },
    bg: { relation: "shared", note: "Identical to Bulgarian за." },
  },

  "до-next-to": {
    ru: { relation: "false-friend", note: "Russian до means 'until / up to'; Macedonian до also means 'next to' - до хотелот can mean 'by the hotel', not only 'up to' it." },
    he: { relation: "shared", note: "до covers both ליד (next to) and עד (until)." },
    bg: { relation: "shared", note: "Same as Bulgarian до: next to, or until." },
  },

  "strong-pronouns": {
    ru: { relation: "divergent", note: "Russian always uses full pronoun forms; Macedonian separates short clitics (ме) from long forms (мене) used after prepositions and for emphasis." },
    he: { relation: "divergent", note: "Hebrew fuses preposition and pronoun (בשבילי, איתך); Macedonian keeps them apart: за мене, со тебе." },
    bg: { relation: "divergent", note: "Bulgarian мен, теб, него, нея, нас, вас, тях → мене, тебе, него, неа, нас, вас, нив: неа and нив are the ones to relearn." },
  },

  "article-ов-он": {
    ru: { relation: "absent", note: "Russian has no articles; Macedonian has three sets: -от (the), -ов (this one here), -он (that one there)." },
    he: { relation: "absent", note: "Hebrew has one ה-; Macedonian adds -ов (this one here) and -он (that one there) beside -от." },
    bg: { relation: "absent", note: "Bulgarian has only -ът/-та/-то; Macedonian also has -ов/-ва/-во (this one here) and -он/-на/-но (that one there): човеков, човекон." },
  },

  // ============================================================
  // Module 7: Polite form, liking
  // ============================================================

  "вие-polite": {
    ru: { relation: "shared", note: "Same as the Russian вы-form: Вие + plural verb to address one person politely." },
    he: { relation: "absent", note: "Modern Hebrew has no formal 'you' - everyone is אתה/את regardless of social distance." },
    bg: { relation: "shared", note: "Same as Bulgarian Вие + plural verb: Как сте? → Како сте?" },
  },

  "допаѓа-ми": {
    ru: { relation: "divergent", note: "Same dative-experiencer pattern as Russian мне нравится, but with се and the clitics first: ми се допаѓа." },
    he: { relation: "shared", note: "Hebrew has dative-experiencer phrases like בא לי and מוצא חן בעיני; ми се допаѓа is 'it pleases to-me' - the pattern will feel familiar." },
    bg: { relation: "divergent", note: "Bulgarian харесва ми → ми се допаѓа: a different verb, a се, and the clitics go first (Ми се допаѓа кафето, not Харесва ми кафето)." },
  },

  // ============================================================
  // Word concepts: only the traps worth flagging
  // ============================================================

  "чај": {
    ru: { relation: "shared", note: "Same word: чај means tea in both languages, spelled with ј." },
  },

  "банка": {
    ru: { relation: "false-friend", note: "Russian банка = jar; Macedonian банка = bank (the financial institution is банк in Russian)." },
  },

  "кафе": {
    ru: { relation: "shared", note: "Close cognate: Macedonian кафе, Russian кофе - note the vowel shift а/о." },
    he: { relation: "shared", note: "Same word as Hebrew קפה (kafe) - both from Arabic/Turkish." },
  },

  "хотел": {
    ru: { relation: "false-friend", note: "Russian хотел = 'he wanted' (past tense of хотеть); Macedonian хотел = hotel." },
  },

  "ресторан": {
    ru: { relation: "shared", note: "Identical to Russian ресторан." },
    bg: { relation: "divergent", note: "Bulgarian ресторант → ресторан, no final т." },
  },

  "проблем": {
    ru: { relation: "shared", note: "Same root but gender flips: Macedonian проблем is masculine, Russian проблема is feminine." },
  },

  "тука": {
    ru: { relation: "shared", note: "Cognate of informal Russian тут; тука (or овде) means 'here'." },
    bg: { relation: "divergent", note: "Bulgarian тук → тука (also овде)." },
  },

  "таму": {
    ru: { relation: "shared", note: "Russian там plus a vowel: таму means 'there'." },
    bg: { relation: "divergent", note: "Bulgarian там → таму." },
  },

  "сакам": {
    ru: { relation: "absent", note: "No Russian cognate; сакам covers both хочу and люблю: сакам кафе, те сакам." },
    bg: { relation: "false-friend", note: "Bulgarian искам and обичам → one verb, сакам: искам кафе → сакам кафе, обичам те → те сакам. Neither искам nor обичам exists here." },
  },

  "ве молам": {
    ru: { relation: "divergent", note: "Russian молить = to beg/implore; Macedonian Ве молам is the everyday 'please' - same root, much lighter tone." },
    bg: { relation: "divergent", note: "Bulgarian моля → Ве молам / те молам, with the object pronoun spelled out." },
  },

  "имам": {
    ru: { relation: "divergent", note: "Russian prefers у меня есть for 'I have'; Macedonian uses имам directly, closer to the bookish Russian иметь." },
  },

  "кола": {
    ru: { relation: "false-friend", note: "Russian кола suggests Coca-Cola; Macedonian кола = car." },
  },

  "зборувам": {
    ru: { relation: "divergent", note: "No twin of говорить: зборувам comes from збор (word), the same root as Russian сбор (a gathering) - words gathered together." },
    bg: { relation: "false-friend", note: "Bulgarian говоря → зборувам: Говориш ли английски? → Зборуваш ли англиски? Говоря is not the everyday verb here." },
  },

  "разбирам": {
    ru: { relation: "false-friend", note: "Russian разбирать = to take apart; Macedonian разбирам = to understand (closer to Russian разбираться в чём-то)." },
  },

  "многу": {
    ru: { relation: "shared", note: "Russian много with a final у: многу = a lot / very." },
    bg: { relation: "false-friend", note: "Bulgarian много → многу, always with у: много добре → многу добро." },
  },

  "добро": {
    ru: { relation: "divergent", note: "Russian добро = goodness (noun); Macedonian добро = well / fine (adverb) - same root, different part of speech." },
    bg: { relation: "false-friend", note: "Bulgarian добре (well) → добро: Добре съм → Добро сум. Добре is not Macedonian." },
  },

  "денес": {
    ru: { relation: "divergent", note: "Russian uses сегодня; Macedonian денес comes from the same root as ден/день - think 'this day'." },
    bg: { relation: "divergent", note: "Bulgarian днес → денес." },
  },

  "патувам": {
    ru: { relation: "shared", note: "Same root as Russian путь (path) and путешествовать; патувам = I travel." },
    bg: { relation: "divergent", note: "Bulgarian пътувам → патувам (ъ → а)." },
  },

  "одам": {
    ru: { relation: "divergent", note: "Russian идти / ходить; одам is ходить without the х: одам = I go." },
    bg: { relation: "divergent", note: "Bulgarian отивам → одам (Bulgarian ходя is only the habitual 'go')." },
  },

  "благодарам": {
    ru: { relation: "shared", note: "Same root as Russian благодарить; благодарам = thank you. Colloquial фала is the хвала of Serbian." },
    bg: { relation: "divergent", note: "Bulgarian благодаря → благодарам (the I-form takes -м); casual фала replaces мерси." },
  },

  "град": {
    ru: { relation: "false-friend", note: "Russian град = hail (weather); Macedonian град = city (think Волгоград, Ленинград - the -град root)." },
    bg: { relation: "divergent", note: "Identical to Bulgarian град, but the plural is градови, not градове." },
  },

  "куќа": {
    ru: { relation: "false-friend", note: "Russian куча = a heap; Macedonian куќа = house." },
    bg: { relation: "divergent", note: "Bulgarian къща → куќа (щ → ќ, and here ъ → у)." },
  },

  "леб": {
    ru: { relation: "shared", note: "Russian хлеб minus the х: леб = bread." },
    bg: { relation: "divergent", note: "Bulgarian хляб → леб: the х is dropped and я → е." },
  },

  "маса": {
    ru: { relation: "false-friend", note: "Russian масса = mass/bulk; Macedonian маса = table." },
  },

  "жена": {
    ru: { relation: "shared", note: "Same word: жена means woman (and wife) in Macedonian, specifically wife in Russian." },
  },

  "маж": {
    ru: { relation: "shared", note: "Same root as Russian муж; маж = man / husband." },
    bg: { relation: "divergent", note: "Bulgarian мъж → маж (ъ → а)." },
  },

  "пиво": {
    ru: { relation: "shared", note: "Identical: пиво means beer in both languages." },
    bg: { relation: "divergent", note: "Bulgarian бира (feminine) → пиво (neuter): пивото, две пива." },
  },

  "добар": {
    ru: { relation: "shared", note: "Same root as Russian добрый; добар = good." },
    bg: { relation: "divergent", note: "Bulgarian добър → добар (ъ → а); добра, добро, добри match." },
  },

  "голем": {
    ru: { relation: "absent", note: "No Russian cognate (большой); голем = big. Russian голый (naked) only looks like it." },
    bg: { relation: "divergent", note: "Bulgarian голям → голем (я → е)." },
  },

  "убав": {
    ru: { relation: "absent", note: "No Russian cognate (красивый); убав = nice, beautiful." },
    bg: { relation: "divergent", note: "Bulgarian хубав → убав, without the х." },
  },

  "здраво": {
    ru: { relation: "shared", note: "From здрав (healthy), like Russian здравствуй; здраво = hello." },
    bg: { relation: "false-friend", note: "Bulgarian здравей → здраво. In Bulgarian здраво means 'firmly / soundly'; here it is the everyday hello." },
  },

  "викам": {
    ru: { relation: "divergent", note: "Where Russian says меня зовут (they call me), Macedonian says се викам, literally 'I am called'." },
    bg: { relation: "false-friend", note: "Bulgarian казвам се → се викам. Bulgarian викам means 'shout / call someone'; here се викам is the ordinary 'my name is', with се first." },
  },

  "мило": {
    ru: { relation: "shared", note: "Russian мило = nice, sweet; мило ми е = 'it is nice to me', nice to meet you." },
    bg: { relation: "divergent", note: "Bulgarian приятно ми е → мило ми е (or драго ми е)." },
  },

  "живеам": {
    ru: { relation: "shared", note: "Same root as Russian жить / живу; живеам = I live." },
    bg: { relation: "divergent", note: "Bulgarian живея → живеам, with -м." },
  },

  "гледам": {
    ru: { relation: "shared", note: "Same root as Russian глядеть (to look); гледам = I see / I watch." },
    bg: { relation: "false-friend", note: "Bulgarian виждам → гледам: Виждам те → Те гледам. In Bulgarian гледам is only 'look / watch'; here it is also 'see'." },
  },

  "чекам": {
    ru: { relation: "absent", note: "No Russian cognate (ждать); чекам = I wait for." },
    bg: { relation: "divergent", note: "Bulgarian чакам → чекам (а → е)." },
  },

  "мајка": {
    ru: { relation: "false-friend", note: "Russian майка = tank top / undershirt; Macedonian мајка = mother - a classic trap." },
  },

  "татко": {
    ru: { relation: "divergent", note: "Russian папа / отец; татко matches Ukrainian тато." },
    bg: { relation: "divergent", note: "Bulgarian баща → татко (in Bulgarian татко is 'daddy'; here it is the neutral word for father)." },
  },

  "млеко": {
    ru: { relation: "shared", note: "Same root as Russian молоко; млеко = milk." },
    bg: { relation: "divergent", note: "Bulgarian мляко → млеко (я → е)." },
  },

  "утре": {
    ru: { relation: "false-friend", note: "Russian утро = morning; Macedonian утре = tomorrow - same root, different meaning." },
  },

  "вчера": {
    ru: { relation: "shared", note: "Identical: вчера = yesterday in both languages." },
  },

  "сега": {
    ru: { relation: "divergent", note: "Russian сейчас; сега shares the 'this (hour)' root but is a different word - don't say сейчас." },
    bg: { relation: "shared", note: "Identical to Bulgarian сега." },
  },

  "довидување": {
    ru: { relation: "shared", note: "Same construction as Russian до свидания (until seeing again); довидување = goodbye." },
    bg: { relation: "divergent", note: "Bulgarian довиждане → довидување." },
  },

  "добра вечер": {
    ru: { relation: "divergent", note: "Russian добрый вечер, but вечер is feminine in Macedonian, so добра вечер." },
    bg: { relation: "false-friend", note: "Bulgarian добър вечер → добра вечер: вечер is feminine in Macedonian (вечерта)." },
  },

  "добра ноќ": {
    ru: { relation: "divergent", note: "Russian says спокойной ночи (peaceful night); Macedonian says добра ноќ (good night)." },
    bg: { relation: "divergent", note: "Bulgarian лека нощ → добра ноќ: щ → ќ, and 'good' rather than 'light'." },
  },

  "мислам": {
    ru: { relation: "shared", note: "Same root as Russian мыслить; мислам = I think." },
    bg: { relation: "divergent", note: "Bulgarian мисля → мислам, with -м; мисля, че → мислам дека." },
  },

  "знам": {
    ru: { relation: "shared", note: "Same root as Russian знать; знам = I know." },
  },

  "сѐ": {
    ru: { relation: "shared", note: "Russian всё without the в-: сѐ = everything, accented to keep it apart from се." },
    bg: { relation: "divergent", note: "Bulgarian всичко → сѐ, with an accent to distinguish it from reflexive се." },
  },

  "чини": {
    ru: { relation: "false-friend", note: "Russian чинить = to repair; Macedonian чини = it costs (Колку чини?)." },
    bg: { relation: "divergent", note: "Bulgarian струва → чини: Колко струва? → Колку чини?" },
  },

  "извинете": {
    ru: { relation: "shared", note: "Same root as Russian извините; извинете = excuse me." },
  },

  "повелете": {
    ru: { relation: "divergent", note: "Russian пожалуйста covers this; повелете is from the root of повелевать (to command) - 'be so kind as to'." },
    bg: { relation: "divergent", note: "Bulgarian заповядайте → повелете." },
  },

  "наздравје": {
    ru: { relation: "shared", note: "Same construction as Russian на здоровье; наздравје = cheers." },
    bg: { relation: "divergent", note: "Bulgarian наздраве → наздравје, with ј." },
  },

  "вкусно": {
    ru: { relation: "shared", note: "Identical: вкусно = tasty / delicious in both languages." },
  },

  "уште": {
    ru: { relation: "shared", note: "Same root as Russian ещё; уште = still / more." },
    bg: { relation: "divergent", note: "Bulgarian още → уште (щ → шт, plus an initial у)." },
  },

  "ајде": {
    ru: { relation: "shared", note: "Russian айда! is the same Turkish loan; ајде = come on, let's go." },
    bg: { relation: "divergent", note: "Bulgarian хайде → ајде: no х, and й → ј." },
  },

  "секој": {
    ru: { relation: "shared", note: "Same root as Russian всякий without the в-; секој = every / each." },
    bg: { relation: "divergent", note: "Bulgarian всеки → секој (the в is dropped, й → ј)." },
  },

};
