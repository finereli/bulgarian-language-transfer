import type { Module } from "./types";

export const module1: Module = {
  id: "m1",
  title: "You already speak some Bulgarian",
  blurb:
    "Steal hundreds of words you already own, meet the sounds of Bulgarian, and build your first real sentences with 'to be'.",
  lessons: [
    {
      id: "m1l1",
      title: "Instant Bulgarian",
      subtitle: "International words and the sounds behind them",
      items: [
        {
          type: "note",
          title: "How this course works",
          body:
            "This course is about learning to think in Bulgarian. Not memorizing phrases - thinking. Every lesson shows you how Bulgarian works, then immediately asks you to build something with it. If you get something wrong, that's the method working: the correction is what makes it stick.\n\nYou already know how to think about language. You know what it means for a verb to change its form, for a word to have gender, for a sentence to have structure. That skill transfers directly.\n\nYou've been typing with the Latin-to-Cyrillic keyboard since Module 0 - same thing from here on. Tap the speaker on any Bulgarian phrase to hear it.",
          he: "In Hebrew, verbs carry their subject (הלכתי vs הלכת), words have gender, and roots generate families. Bulgarian works differently, but you already know these concepts from Hebrew.",
        },
        {
          type: "note",
          title: "Stress matters",
          body:
            "Bulgarian words have a stressed syllable, and it can land anywhere - there's no rule to predict it, and unlike Russian textbooks, Bulgarian text doesn't mark it. The only way to learn it is by hearing the word.\n\nThat's what the audio buttons are for. When you tap one, listen for *which* syllable is louder and longer - that's the stress. A few examples you already know:\n\n- ресторА́нт (on the last syllable)\n- хО́тел (on the first - unlike English hoTEL!)\n- кА́фе (on the first)\n\nWhen stress lands somewhere unexpected, we'll point it out. For the rest, trust the audio.",
          speak: ["ресторант", "хотел", "кафе"],
          introduces: ["stress"],
        },
        {
          type: "note",
          title: "You already own hundreds of Bulgarian words",
          body:
            "English words ending in **-tion** usually exist in Bulgarian ending in **-ция** (-tsiya):\n\n- information → **информация**\n- situation → **ситуация**\n- station → **станция** (bus/metro stops; a *train* station has its own word, гара)\n\nThe stress sits right before the ending: informA-tion, информA-ция. Same melody.",
          speak: ["информация", "ситуация", "станция"],
          introduces: ["cognate-ция"],
          ru: "These are the same words as Russian информация, ситуация, станция - Bulgarian and Russian share a huge amount of vocabulary, and the -ция words are nearly identical.",
        },
        {
          type: "exercise",
          prompt: "Turn **organization** into Bulgarian.",
          answer: "организация",
          hint: "-tion becomes -ция. Start from 'organiza-'.",
          after: "**Организация.** You didn't learn this word - you converted it. The same thing works for hundreds of other words.",
        },
        {
          type: "exercise",
          prompt: "And **constitution**?",
          answer: "конституция",
          hint: "constitu- + -ция",
        },
        {
          type: "note",
          title: "People words: турист and журналист",
          body:
            "Professions and 'people' words carry over too. Let's start with two:\n\n- tourist → **турист**\n- journalist → **журналист**\n\nNotice ж in журналист - it's the *s* in 'plea**s**ure' (type **zh**).",
          speak: ["турист", "журналист"],
          introduces: ["cognate-ист"],
        },
        {
          type: "exercise",
          prompt: "Write **tourist** in Bulgarian.",
          answer: "турист",
          hint: "Same word, new letters: т-у-р-и-с-т.",
        },
        {
          type: "exercise",
          prompt: "Write **journalist**.",
          answer: "журналист",
          hint: "The first sound is ж - type zh.",
        },
        {
          type: "note",
          title: "More people: доктор and професор",
          body:
            "Two more that come straight across:\n\n- doctor → **доктор**\n- professor → **професор** (one 's' in Bulgarian)",
          speak: ["доктор", "професор"],
          introduces: ["cognate-ор"],
        },
        {
          type: "exercise",
          prompt: "Write **doctor**.",
          answer: "доктор",
          hint: "д-о-к-т-о-р. Remember р is R.",
        },
        {
          type: "exercise",
          prompt: "Write **professor**.",
          answer: "професор",
          hint: "Only one с in Bulgarian: професор.",
        },
        {
          type: "note",
          title: "One more: студент",
          body:
            "And one more people word:\n\n- student → **студент**",
          speak: ["студент"],
        },
        {
          type: "exercise",
          prompt: "Write **student**.",
          answer: "студент",
          hint: "с-т-у-д-е-н-т.",
          after: "Five profession words banked: турист, журналист, доктор, професор, студент.",
        },
        {
          type: "note",
          title: "Places: ресторант and хотел",
          body:
            "More words you already know:\n\n- restaurant → **ресторант**\n- hotel → **хотел**",
          speak: ["ресторант", "хотел"],
        },
        {
          type: "exercise",
          prompt: "Write **restaurant**.",
          answer: "ресторант",
          hint: "р=r, not 'п'. Think 'restorant'.",
          after: "Ресторант - remember Р is R, not P.",
        },
        {
          type: "exercise",
          prompt: "Write **hotel**.",
          answer: "хотел",
          hint: "х-о-т-е-л. The х is that soft throat sound.",
        },
        {
          type: "note",
          title: "Things: телефон and банка",
          body:
            "Two more everyday words:\n\n- telephone → **телефон**\n- bank → **банка**",
          speak: ["телефон", "банка"],
        },
        {
          type: "exercise",
          prompt: "Write **telephone**.",
          answer: "телефон",
          hint: "т-е-л-е-ф-о-н.",
        },
        {
          type: "exercise",
          prompt: "Write **bank**.",
          answer: "банка",
          hint: "банка - note the -а ending.",
          after: "The -а at the end? That's a grammatical ending (feminine gender). You'll learn more about that soon.",
        },
        {
          type: "note",
          title: "Food: кафе and чай",
          body:
            "A couple of freebies:\n\n- coffee / café → **кафе**\n- tea → **чай** (same word as English 'chai')",
          speak: ["кафе", "чай"],
          he: "**Чай** and תה both came from Chinese - via different trade routes.",
        },
        {
          type: "exercise",
          prompt: "Write **coffee** (or café).",
          answer: "кафе",
          hint: "к-а-ф-е.",
        },
        {
          type: "exercise",
          prompt: "Write **tea** - think 'chai'.",
          answer: "чай",
          hint: "ч (ch) + а + й (j).",
        },
        {
          type: "note",
          title: "More freebies: шоколад and проблем",
          body:
            "Two more:\n\n- chocolate → **шоколад** (think 'shokolad')\n- problem → **проблем**",
          speak: ["шоколад", "проблем"],
        },
        {
          type: "exercise",
          prompt: "Write **chocolate** - think 'shokolad'.",
          answer: "шоколад",
          hint: "sh → ш",
        },
        {
          type: "exercise",
          prompt: "Write **problem**.",
          answer: "проблем",
          hint: "про- + -блем, stress on the end.",
          after: "Stress on the last syllable: проблЕм.",
        },
        {
          type: "note",
          title: "ъ — a vowel English doesn't write",
          body:
            "Meet **ъ**: the vowel in English 's**u**n' or 'ab**ou**t' — a short, neutral 'uh'. Bulgarian is full of it. Type **y**.",
          ru: "Bulgarian **ъ** is a full, stressable vowel — not the silent hard sign it is in Russian. This is one of the biggest pronunciation traps for Russian speakers.",
        },
        {
          type: "choice",
          prompt: "The letter **ъ** sounds like the vowel in…",
          options: ["'sun'", "'see'", "'boat'"],
          correct: 0,
          after: "**ъ** is that short 'uh' — you'll see it constantly.",
        },
        {
          type: "note",
          title: "х — a sound from the throat",
          body:
            "Meet **х**: a soft, gentle throat sound - not the harsher English 'h'. Like the 'ch' in Scottish 'loch' or German 'Bach'. Type **h**.\n\nYou already met it in **хотел** - go back and say it with that soft throat sound.",
          speak: ["хотел"],
        },
        {
          type: "choice",
          prompt: "Which Bulgarian letter makes that soft throat sound, like 'ch' in Scottish 'loch'?",
          options: ["х", "ъ", "щ"],
          correct: 0,
        },
        {
          type: "note",
          title: "щ — one letter, two sounds",
          body:
            "One more: **щ** is simply **sht** — one letter, two sounds. **Щастие** (happiness) starts with 'shtas-'.",
          speak: ["щастие"],
          ru: "In Russian щ is 'shch' — in Bulgarian it is always 'sht'. Same letter, different sound.",
        },
        {
          type: "choice",
          prompt: "The letter **щ** in Bulgarian sounds like…",
          options: ["sht", "shch", "sh"],
          correct: 0,
          after: "Always **sht**: щастие is 'SHTAS-tie'.",
        },
        {
          type: "exercise",
          prompt: "Type the country: **България** (Bulgaria). In Latin that's roughly 'Bylgariya'.",
          answer: "България",
          hint: "B-y-l-g-a-r-i-ya → the y gives you ъ, the ya gives you я. Capitalize the first letter.",
          after: "**България** - with that ъ in the first syllable: bul-GAR-ia, where 'bul' rhymes with 'dull'.",
        },
        {
          type: "note",
          title: "What just happened",
          body:
            "In one lesson you collected a few hundred words (every -tion, -ist, -or word you know is now suspect - try it in Bulgarian first, you'll usually be right), and met the only genuinely new sounds.\n\nNext: your first real sentences.",
        },
      ],
    },
    {
      id: "m1l2",
      title: "I am: аз съм",
      subtitle: "Your first verb form",
      items: [
        {
          type: "note",
          title: "Your first verb: 'to be'",
          body:
            "Bulgarian, like English, insists on the little verb 'to be':\n\n**Аз съм доктор.** - *I am a doctor.*\n\n- **аз** = I\n- **съм** = am\n\nNo word for 'a', by the way. Just 'I am doctor'.",
          speak: ["Аз съм доктор."],
          introduces: ["съм-present", "pronoun-subject"],
          he: "Hebrew drops 'to be' in the present (אני דוקטור). Bulgarian kept it: аз **съм** доктор. You'll need to add it back.",
          ru: "Russian drops 'to be' in the present too (я доктор). Bulgarian kept it alive: аз **съм** доктор. This is the first big habit to change.",
        },
        {
          type: "exercise",
          prompt: "How would you say: **I am a tourist**?",
          answer: "Аз съм турист",
          accept: ["аз съм туристка"],
          hint: "аз съм + the word you learned for 'tourist'.",
          after: "**Аз съм турист.** A woman would usually say **туристка** - but more on that soon.",
        },
        {
          type: "exercise",
          prompt: "**I am a student.**",
          answer: "Аз съм студент",
          accept: ["аз съм студентка"],
          hint: "Same pattern: аз съм + студент.",
        },
        {
          type: "exercise",
          prompt: "And how about: **I am a journalist**?",
          answer: "Аз съм журналист",
          accept: ["аз съм журналистка"],
          hint: "аз съм + журналист (remember ж = zh).",
        },
        {
          type: "note",
          title: "You are: ти си",
          body:
            "Now for 'you are' - talking to one person informally:\n\n**Ти си студент.** - *You are a student.*\n\n- **ти** = you\n- **си** = are\n\nNotice that 'to be' changes form: аз **съм**, but ти **си**. Each person gets its own form, like English 'am' vs. 'are'.",
          speak: ["Ти си студент."],
        },
        {
          type: "exercise",
          prompt: "**You are a doctor.**",
          answer: "Ти си доктор",
          hint: "ти си + доктор.",
        },
        {
          type: "exercise",
          prompt: "**You are a tourist.**",
          answer: "Ти си турист",
          accept: ["ти си туристка"],
          hint: "ти си + турист.",
          after: "You're using the same words in new combinations. That's the whole game.",
        },
        {
          type: "exercise",
          prompt: "Now switch it: **I am a doctor.**",
          answer: "Аз съм доктор",
          hint: "Back to 'I' - аз съм.",
          after: "аз **съм**, ти **си** - two forms down.",
        },
        {
          type: "note",
          title: "He is: той е",
          body:
            "Now for 'he is'. The verb form is **е** - just one letter, pronounced like the 'e' in 'bed':\n\n**Той е доктор.** - *He is a doctor.*\n\n- **той** = he\n- **е** = is",
          speak: ["Той е доктор."],
        },
        {
          type: "exercise",
          prompt: "**He is a student.**",
          answer: "Той е студент",
          hint: "he = той, is = е.",
        },
        {
          type: "exercise",
          prompt: "**He is a journalist.**",
          answer: "Той е журналист",
          hint: "той е + журналист.",
        },
        {
          type: "exercise",
          prompt: "Now mix: **I am a tourist and he is a doctor.**",
          answer: "Аз съм турист и той е доктор",
          accept: ["аз съм туристка и той е доктор"],
          hint: "'and' is **и**. Two clauses, each with its own verb form.",
          after: "**И** is 'and'. You just used three verb forms in one sentence: съм, си (from earlier), and now е.",
          introduces: ["и-conjunction"],
        },
        {
          type: "note",
          title: "She is: тя е",
          body:
            "For 'she is', the verb stays **е** - same form as 'he is'. Only the pronoun changes:\n\n**Тя е доктор.** - *She is a doctor.*\n\nFor a woman, profession words often add **-ка** at the end:\n\nтурист → **туристка**, журналист → **журналистка**",
          he: "The -ка feminine ending works like Hebrew's ־ית: סטודנט → סטודנטית, турист → туристка.",
          speak: ["Тя е журналистка."],
          introduces: ["feminine-ка"],
        },
        {
          type: "exercise",
          prompt: "**She is a journalist.**",
          answer: "Тя е журналистка",
          accept: ["тя е журналист"],
          hint: "she = тя, is = е, and add -ка for the feminine.",
        },
        {
          type: "exercise",
          prompt: "**She is a tourist.**",
          answer: "Тя е туристка",
          accept: ["тя е турист"],
          hint: "тя е + туристка (feminine -ка).",
        },
        {
          type: "exercise",
          prompt: "**He is a student and she is a doctor.**",
          answer: "Той е студент и тя е доктор",
          accept: ["той е студент, а тя е доктор"],
          hint: "той е ... и тя е ...",
        },
        {
          type: "choice",
          prompt: "Which form of 'to be' goes with both **той** and **тя**?",
          options: ["е", "съм", "си"],
          correct: 0,
          after: "**Е** works for he, she, and it - all three use the same form. One less thing to remember.",
        },
      ],
    },
    {
      id: "m1l3",
      title: "We, you all, they",
      subtitle: "Plural forms and dropping the pronoun",
      items: [
        {
          type: "note",
          title: "We are: ние сме",
          body:
            "You've got the singular: аз **съм**, ти **си**, той/тя **е**. Now let's add the plural forms one at a time.\n\nFirst up - 'we are':\n\n- **ние** = we\n- **сме** = are (for 'we')\n\n**Ние сме тук.** - *We are here.*",
          speak: ["Ние сме тук."],
        },
        {
          type: "note",
          title: "Making plurals with -и",
          body:
            "To make a person-word plural, the ending usually becomes **-и**:\n\n- турист → **туристи**\n\nFull plural story later - for now, **-и** is all you need.",
          speak: ["туристи"],
          introduces: ["plural-и"],
        },
        {
          type: "exercise",
          prompt: "**We are tourists.**",
          answer: "Ние сме туристи",
          hint: "we = ние сме; plural of турист is туристи.",
        },
        {
          type: "exercise",
          prompt: "**We are students.** (студент + -и)",
          answer: "Ние сме студенти",
          hint: "ние сме + студенти.",
          after: "студент → студент**и**. The -и plural works for most person-words.",
        },
        {
          type: "note",
          title: "You all are: вие сте",
          body:
            "Now 'you' for several people (or one person, formally):\n\n- **вие** = you (plural/formal)\n- **сте** = are (for 'you all')\n\n**Вие сте** is also the polite 'you' for one person - like French *vous*.",
          speak: ["Вие сте тук."],
        },
        {
          type: "exercise",
          prompt: "**You (plural) are journalists.** (журналист + -и)",
          answer: "Вие сте журналисти",
          hint: "you-all = вие сте; журналист → журналисти.",
        },
        {
          type: "exercise",
          prompt: "**You (plural) are doctors.**",
          answer: "Вие сте доктори",
          hint: "вие сте + доктори.",
          after: "доктор → доктор**и**. Same pattern.",
        },
        {
          type: "note",
          title: "They are: те са",
          body:
            "Last one - 'they are':\n\n- **те** = they\n- **са** = are (for 'they')\n\n**Са** is pronounced 'suh' (that ъ sound again, even though it's written with а).",
          speak: ["Те са тук."],
        },
        {
          type: "exercise",
          prompt: "**They are students.**",
          answer: "Те са студенти",
          hint: "they = те, are = са; plural of студент is студенти.",
        },
        {
          type: "exercise",
          prompt: "**They are tourists.**",
          answer: "Те са туристи",
          hint: "те са + туристи.",
        },
        {
          type: "exercise",
          prompt: "Back to singular: **She is a student.**",
          answer: "Тя е студентка",
          accept: ["тя е студент"],
          hint: "she = тя е; feminine adds -ка.",
          after: "Weaving the singular back in. You're choosing between six forms of 'to be' now.",
        },
        {
          type: "note",
          title: "Now drop the pronoun",
          body:
            "Since **съм** can only mean 'I am' and **си** can only mean 'you are', Bulgarians usually drop the pronoun. The verb ending tells you who.\n\nOne important rule: **съм and its forms can't be the first word** of a sentence. So when 'аз' disappears, the sentence flips:\n\n- Аз съм студент → **Студент съм.**\n- Ти си от Канада → **От Канада си.** (*от* = from)",
          he: "Same idea as Hebrew past tense: הלכתי needs no אני because the ending tells you. Bulgarian works the same way.",
          speak: ["Студент съм.", "От Канада си."],
          introduces: ["clitic-rule", "pronoun-drop", "от-from"],
          ru: "This 'never first' rule applies to all Bulgarian clitics (съм, се, ми, го…). Russian word order won't help you here - it's a new rhythm to acquire.",
        },
        {
          type: "exercise",
          prompt: "Say **I am a doctor** without the pronoun.",
          answer: "Доктор съм",
          hint: "съм can't come first - lead with доктор.",
        },
        {
          type: "exercise",
          prompt: "**I am a journalist** - no pronoun.",
          answer: "Журналист съм",
          accept: ["журналистка съм"],
          hint: "Flip: noun first, then съм.",
        },
        {
          type: "note",
          title: "Here, there, and from",
          body:
            "Three handy little words:\n\n- **тук** = here\n- **там** = there\n- **от** = from\n\n**Той е тук.** - *He is here.*\n**Ние сме от Канада.** - *We are from Canada.*",
          speak: ["Той е тук.", "Тя е там.", "Ние сме от Канада."],
        },
        {
          type: "exercise",
          prompt: "**She is here.**",
          answer: "Тя е тук",
          hint: "тя + е + тук.",
        },
        {
          type: "exercise",
          prompt: "**They are there.**",
          answer: "Те са там",
          hint: "те + са + там.",
        },
        {
          type: "exercise",
          prompt: "**We are from Canada.** (with the pronoun is fine)",
          answer: "Ние сме от Канада",
          accept: ["от Канада сме"],
          hint: "ние сме от + Канада.",
          after: "Some countries end in -ия (България, Италия, Германия), others don't (Канада).",
        },
        {
          type: "exercise",
          prompt: "Without the pronoun: **I am from Canada.**",
          answer: "От Канада съм",
          hint: "от Канада goes first, then съм (can't start with съм).",
        },
        {
          type: "exercise",
          prompt: "Back to singular: **I am a tourist** (no pronoun).",
          answer: "Турист съм",
          accept: ["туристка съм", "аз съм турист"],
          hint: "съм can't be first - lead with турист.",
          after: "Switching between plural and singular keeps the whole system active.",
        },
        {
          type: "exercise",
          prompt: "**He is here and she is there.**",
          answer: "Той е тук и тя е там",
          hint: "той е тук, и (and), тя е там.",
        },
        {
          type: "exercise",
          prompt: "**She is not a student, she is a journalist.**",
          answer: "Тя не е студентка, тя е журналистка",
          accept: ["тя не е студентка, тя е журналист", "тя не е студент, тя е журналист", "не е студентка, журналистка е"],
          hint: "не е for 'is not', then тя е for the correction.",
        },
        {
          type: "note",
          title: "The whole family",
          body:
            "**съм, си, е, сме, сте, са** - you now conjugate the most used verb in the language.\n\n- Аз **съм** - ти **си** - той/тя/то **е**\n- Ние **сме** - вие **сте** - те **са**\n\nYou got here one form at a time. Say a few true sentences about yourself before moving on. *Турист съм. От Канада съм.*",
        },
      ],
    },
    {
      id: "m1l4",
      title: "Saying no",
      subtitle: "не",
      items: [
        {
          type: "note",
          title: "Saying no",
          body:
            "Negation is one word, **не**, placed before the verb:\n\n- **Не съм доктор.** - *I'm not a doctor.*\n- **Той не е тук.** - *He is not here.*\n\nNotice не broke the 'never first' rule for съм - не+verb travel together as a unit, and *не* is allowed to lead.",
          speak: ["Не съм доктор.", "Той не е тук."],
          introduces: ["не-negation"],
        },
        {
          type: "exercise",
          prompt: "**I am not a journalist.**",
          answer: "Не съм журналист",
          accept: ["аз не съм журналист", "не съм журналистка", "аз не съм журналистка"],
          hint: "не goes before the verb: Не съм…",
        },
        {
          type: "exercise",
          prompt: "**He is not here.**",
          answer: "Той не е тук",
          hint: "той + не е + тук.",
          after: "**Не е** flows together as 'ne-E'.",
        },
        {
          type: "exercise",
          prompt: "**She is not a tourist.**",
          answer: "Тя не е туристка",
          accept: ["тя не е турист"],
          hint: "тя + не е + туристка.",
          after: "Same pattern: не sits right before the verb.",
        },
        {
          type: "exercise",
          prompt: "**We are not from Sofia.** (Sofia = София)",
          answer: "Не сме от София",
          accept: ["ние не сме от София"],
          hint: "Не сме от…; не may lead, сме may not.",
        },
        {
          type: "exercise",
          prompt: "**They are not students.**",
          answer: "Те не са студенти",
          accept: ["не са студенти"],
          hint: "те + не са + студенти.",
          after: "Same не, different verb form. Не works with every form of 'to be'.",
        },
        {
          type: "exercise",
          prompt: "**She is not a student, she is a journalist.**",
          answer: "Тя не е студентка, тя е журналистка",
          accept: ["тя не е студентка, тя е журналист", "тя не е студент, тя е журналист", "не е студентка, журналистка е"],
          hint: "не е for 'is not', then тя е for the correction.",
          after: "You can deny and correct in one breath. That's how conversations work.",
        },
        {
          type: "note",
          title: "A cultural heads-up",
          body:
            "Traditionally Bulgarians *shake* the head for **да** (yes) and *nod* for **не** (no) - the reverse of most of the world. Younger people mix both systems, so when it matters, listen for the word, not the head.",
        },
        {
          type: "note",
          body:
            "Не before any form of 'to be' and you've said no. Six verb forms, one rule. Next: asking questions.",
        },
      ],
    },
    {
      id: "m1l5",
      title: "Asking questions",
      subtitle: "ли, нали",
      items: [
        {
          type: "note",
          title: "The question particle ли",
          body:
            "Bulgarian asks yes/no questions by dropping the little word **ли** right *after* the thing being asked about - usually the verb or the key word:\n\n- Ти си студент. → **Студент ли си?** - *Are you a student?*\n\nЛи is unstressed and glues to the word before it.",
          he: "Hebrew opens questions with האם; Bulgarian uses ли AFTER the word instead. Different position, same job.",
          speak: ["Студент ли си?"],
          introduces: ["ли-question"],
          ru: "Russian has ли too, but there it's optional and bookish. In Bulgarian ли is the default, everyday way to ask a yes/no question.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Are you a student?**",
          answer: "Студент ли си?",
          accept: ["ти студент ли си"],
          hint: "Put ли right after студент.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Are you a doctor?**",
          answer: "Доктор ли си?",
          accept: ["ти доктор ли си"],
          hint: "Same pattern: key word, then ли, then the verb.",
          after: "See the rhythm? Word-ли-verb. Same slot every time.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Is she here?**",
          answer: "Тя тук ли е?",
          accept: ["тук ли е", "тук ли е тя"],
          hint: "ли after тук: Тя тук ли е?",
        },
        {
          type: "exercise",
          prompt: "Ask: **Is he a journalist?**",
          answer: "Той журналист ли е?",
          accept: ["журналист ли е", "журналист ли е той"],
          hint: "журналист ли е? Same word-ли-verb pattern.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Are they from Canada?**",
          answer: "Те от Канада ли са?",
          accept: ["от Канада ли са", "от Канада ли са те"],
          hint: "ли after Канада, are = са.",
        },
        {
          type: "note",
          title: "Answering: да and не",
          body:
            "The answers:\n\n- **Да** = yes\n- **Не** = no\n\n— Студент ли си?\n— **Да, студент съм.**\n\nOr just **Да.** / **Не.**",
          speak: ["Да.", "Не."],
        },
        {
          type: "exercise",
          prompt: "Ask: **Are you (plural) tourists?**",
          answer: "Туристи ли сте?",
          accept: ["вие туристи ли сте"],
          hint: "plural 'you' = вие сте. Put ли after туристи.",
          after: "Same ли, different verb form. The question particle doesn't care who's speaking.",
        },
        {
          type: "note",
          title: "нали - the tag question",
          body:
            "**Нали** turns a statement into 'right?' / 'isn't it?':\n\n**Ти си от Канада, нали?** - *You're from Canada, right?*\n\nJust stick it at the end of any statement.",
          he: "Like נכון? at the end of a Hebrew sentence.",
          speak: ["Ти си от Канада, нали?"],
          introduces: ["нали-tag"],
        },
        {
          type: "choice",
          prompt: "**Тя е доктор, нали?** means…",
          options: [
            "She's a doctor, right?",
            "Is she really a doctor?",
            "She is not a doctor.",
          ],
          correct: 0,
        },
        {
          type: "exercise",
          prompt: "Ask with a tag: **He is here, right?**",
          answer: "Той е тук, нали?",
          hint: "Statement + , нали?",
        },
        {
          type: "exercise",
          prompt: "**We are from Canada, right?**",
          answer: "Ние сме от Канада, нали?",
          accept: ["от Канада сме, нали", "сме от Канада, нали"],
          hint: "Statement + , нали?",
          after: "нали sits at the end and turns any statement into a question. No moving parts.",
        },
        {
          type: "note",
          title: "Negative questions",
          body:
            "To ask a negative question ('Aren't you...?'), combine не with ли. The order: **не** + verb + **ли**:\n\n**Не си ли студент?** - *Aren't you a student?*",
          speak: ["Не си ли студент?"],
        },
        {
          type: "exercise",
          prompt: "**Aren't you a student?**",
          answer: "Не си ли студент?",
          accept: ["ти не си ли студент"],
          hint: "не + verb, then ли after the verb: Не си ли…",
        },
        {
          type: "exercise",
          prompt: "**Isn't she here?**",
          answer: "Не е ли тук?",
          accept: ["тя не е ли тук"],
          hint: "не + е + ли + тук.",
          after: "In negative questions ли follows the verb: Не си ли…? Не е ли…?",
        },
        {
          type: "exercise",
          prompt: "**Isn't he a journalist?**",
          answer: "Не е ли журналист?",
          accept: ["той не е ли журналист"],
          hint: "не + е + ли + журналист.",
        },
        {
          type: "exercise",
          prompt: "**Aren't they students?**",
          answer: "Не са ли студенти?",
          accept: ["те не са ли студенти"],
          hint: "не + са + ли + студенти.",
        },
        {
          type: "note",
          body:
            "You can now state, deny, and ask. That's a complete conversational toolkit.\n\nNext module: verbs - where Bulgarian gets genuinely fun.",
          ru: "One more false friend to bank early: **неделя** is *Sunday* in Bulgarian, not 'week' (week = седмица).",
        },
      ],
    },
  ],
};
