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
            "This course is about learning to think in Bulgarian. Not memorizing phrases - thinking. Every lesson shows you how Bulgarian works, then immediately asks you to build something with it. If you get something wrong, that's the method working: the correction is what makes it stick.\n\nYou already know how to think about language. You know what it means for a verb to change its form, for a word to have gender, for a sentence to have structure. That skill transfers directly.\n\nWhen an exercise asks you to type Bulgarian, you can type in Latin letters and they convert to Cyrillic as you type (**zh**→ж, **ch**→ч, **sh**→ш, **sht**→щ, **c**→ц, **yu**→ю, **ya**→я, **y**→ъ, **j**→й, **h**→х). Or switch to a Bulgarian keyboard - whatever you prefer. Tap the speaker on any Bulgarian phrase to hear it.",
          he: "In Hebrew, verbs carry their subject (הלכתי vs הלכת), words have gender, and roots generate families. Bulgarian works differently, but you already know these concepts from Hebrew.",
        },
        {
          type: "note",
          title: "You already own hundreds of Bulgarian words",
          body:
            "English words ending in **-tion** usually exist in Bulgarian ending in **-ция** (-tsiya):\n\n- information → **информация**\n- situation → **ситуация**\n- station → **станция** (bus/metro stops; a *train* station has its own word, гара)\n\nThe stress sits right before the ending: informA-tion, информА-ция. Same melody.",
          speak: ["информация", "ситуация", "станция"],
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
          title: "People words",
          body:
            "Professions and 'people' words also carry over:\n\n- tourist → **турист**\n- journalist → **журналист**\n- doctor → **доктор**\n- professor → **професор**\n- student → **студент**\n\nNotice ж in журналист - it's the *s* in 'plea**s**ure' (type **zh**).",
          speak: ["турист", "журналист", "доктор", "студент"],
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
          title: "Places and things",
          body:
            "More words you already know:\n\n- **ресторант** (restaurant)\n- **хотел** (hotel)\n- **телефон** (telephone)\n- **банка** (bank)",
          speak: ["ресторант", "хотел", "телефон", "банка"],
        },
        {
          type: "exercise",
          prompt: "Write **restaurant**.",
          answer: "ресторант",
          hint: "р=r, not 'p'. Think 'restorant'.",
          after: "Ресторант - remember Р is R, not P.",
        },
        {
          type: "note",
          title: "Food and drink",
          body:
            "A few more freebies:\n\n- **кафе** (coffee / café)\n- **чай** (tea - same word as English 'chai')\n- **шоколад** (chocolate)\n- **проблем** (problem)",
          speak: ["кафе", "чай", "шоколад", "проблем"],
          he: "**Чай** and תה both came from Chinese - via different trade routes.",
        },
        {
          type: "exercise",
          prompt: "Write **problem**.",
          answer: "проблем",
          hint: "про- + -блем, stress on the end.",
          after: "Stress on the last syllable: проблЕм.",
        },
        {
          type: "exercise",
          prompt: "Write **chocolate** - think 'shokolad'.",
          answer: "шоколад",
          hint: "sh → ш",
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
            "Meet **х**: like Hebrew כ in **חם** (hot) or **מלך** (king) — a soft, gentle throat sound, not the harsher English 'h'. Type **h**.\n\nYou already met it in **хотел** — go back and say it with that soft כ.",
          speak: ["хотел"],
        },
        {
          type: "choice",
          prompt: "Which Bulgarian letter makes that soft throat sound, like Hebrew כ in חם?",
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
        },
        {
          type: "note",
          title: "She is: тя е",
          body:
            "For 'she is', the verb stays **е** - same form as 'he is'. Only the pronoun changes:\n\n**Тя е доктор.** - *She is a doctor.*\n\nFor a woman, profession words often add **-ка** at the end:\n\nтурист → **туристка**, журналист → **журналистка**",
          he: "The -ка feminine ending works like Hebrew's ־ית: סטודנט → סטודנטית, турист → туристка.",
          speak: ["Тя е журналистка."],
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
          title: "The plural forms",
          body:
            "You've got the singular: аз **съм**, ти **си**, той/тя **е**. Now the plural:\n\n- **ние сме** - we are\n- **вие сте** - you are (several people, or polite 'you')\n- **те са** - they are\n\n**Са** is pronounced 'suh' (that ъ sound again, even though it's written with а).",
          speak: ["Ние сме.", "Вие сте.", "Те са."],
        },
        {
          type: "note",
          title: "Making plurals",
          body:
            "To make a person-word plural, the ending usually becomes **-и**:\n\n- турист → **туристи**\n- студент → **студенти**\n\nFull plural story later - for now, **-и** is all you need.",
          speak: ["туристи", "студенти"],
        },
        {
          type: "exercise",
          prompt: "**We are tourists.**",
          answer: "Ние сме туристи",
          hint: "we = ние сме; plural of турист is туристи.",
        },
        {
          type: "exercise",
          prompt: "**They are students.**",
          answer: "Те са студенти",
          hint: "they = те, are = са; plural of студент is студенти.",
        },
        {
          type: "exercise",
          prompt: "**You (plural) are journalists.**",
          answer: "Вие сте журналисти",
          hint: "you-all = вие сте; журналист → журналисти.",
          after: "**Вие сте** is also the polite 'you' for one person - like French *vous*.",
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
            "Since **съм** can only mean 'I am' and **си** can only mean 'you are', Bulgarians usually drop the pronoun. The verb ending tells you who.\n\nOne important rule: **съм and its forms can't be the first word** of a sentence. So when 'аз' disappears, the sentence flips:\n\n- Аз съм студент → **Студент съм.**\n- Ти си от Израел → **От Израел си.** (*от* = from)",
          he: "Same idea as Hebrew past tense: הלכתי needs no אני because the ending tells you. Bulgarian works the same way.",
          speak: ["Студент съм.", "От Израел си."],
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
            "Three handy little words:\n\n- **тук** = here\n- **там** = there\n- **от** = from\n\n**Той е тук.** - *He is here.*\n**Ние сме от Израел.** - *We are from Israel.*",
          speak: ["Той е тук.", "Тя е там.", "Ние сме от Израел."],
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
          prompt: "**We are from Israel.** (with the pronoun is fine)",
          answer: "Ние сме от Израел",
          accept: ["от Израел сме"],
          hint: "ние сме от + Израел (no -ия ending).",
          after: "Israel is **Израел** - no -ия ending, unlike България, Италия, Германия.",
        },
        {
          type: "exercise",
          prompt: "Without the pronoun: **I am from Israel.**",
          answer: "От Израел съм",
          hint: "от Израел goes first, then съм (can't start with съм).",
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
            "**съм, си, е, сме, сте, са** - you now conjugate the most used verb in the language.\n\n- Аз **съм** - ти **си** - той/тя/то **е**\n- Ние **сме** - вие **сте** - те **са**\n\nYou got here one form at a time. Say a few true sentences about yourself before moving on. *Турист съм. От Израел съм.*",
        },
      ],
    },
    {
      id: "m1l4",
      title: "No, and questions",
      subtitle: "не, ли, да, нали",
      items: [
        {
          type: "note",
          title: "Saying no",
          body:
            "Negation is one word, **не**, placed before the verb:\n\n- **Не съм доктор.** - *I'm not a doctor.*\n- **Той не е тук.** - *He is not here.*\n\nNotice не broke the 'never first' rule for съм -не+verb travel together as a unit, and *не* is allowed to lead.",
          speak: ["Не съм доктор.", "Той не е тук."],
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
          prompt: "**We are not from Sofia.** (Sofia = София)",
          answer: "Не сме от София",
          accept: ["ние не сме от София"],
          hint: "Не сме от…; не may lead, съм may not.",
        },
        {
          type: "note",
          title: "The question particle ли",
          body:
            "Bulgarian asks yes/no questions by dropping the little word **ли** right *after* the thing being asked about - usually the verb or the key word:\n\n- Ти си студент. → **Студент ли си?** - *Are you a student?*\n- Той е тук. → **Той тук ли е?** - *Is he here?*\n\nЛи is unstressed and glues to the word before it. Yes = **да**, no = **не**.",
          he: "Hebrew opens questions with האם; Bulgarian uses ли AFTER the word instead. Different position, same job.",
          speak: ["Студент ли си?", "Той тук ли е?", "Да.", "Не."],
          ru: "Russian has ли too, but there it's optional and bookish. In Bulgarian ли is the default, everyday way to ask a yes/no question (intonation-only questions exist, but mostly for surprise/echo).",
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
          prompt: "Ask: **Is she here?**",
          answer: "Тя тук ли е?",
          accept: ["тук ли е", "тук ли е тя"],
          hint: "ли after тук: Тя тук ли е?",
        },
        {
          type: "exercise",
          prompt: "Ask: **Are they from Israel?**",
          answer: "Те от Израел ли са?",
          accept: ["от Израел ли са", "от Израел ли са те"],
          hint: "ли after Израел, are = са.",
        },
        {
          type: "note",
          title: "нали - the tag question",
          body:
            "**Нали** turns a statement into 'right?' / 'isn't it?':\n\n**Ти си от Израел, нали?** - *You're from Israel, right?*\n\nIt's the Bulgarian all-purpose tag question.",
          he: "Like נכון? at the end of a Hebrew sentence.",
          speak: ["Ти си от Израел, нали?"],
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
          prompt: "Negative question: **Aren't you a student?**",
          answer: "Не си ли студент?",
          accept: ["ти не си ли студент"],
          hint: "не + verb, then ли after the verb: Не си ли…",
          after: "In negative questions **ли** follows the verb: Не си ли…? Не е ли…?",
        },
        {
          type: "note",
          title: "A cultural heads-up",
          body:
            "Traditionally Bulgarians *shake* the head for **да** (yes) and *nod* for **не** (no) - the reverse of most of the world. Younger people mix both systems, so when it matters, listen for the word, not the head.\n\nYou can now state, deny, and ask. Next module: verbs - where Bulgarian gets genuinely fun.",
          ru: "One more false friend to bank early: **неделя** is *Sunday* in Bulgarian, not 'week' (week = седмица).",
        },
      ],
    },
  ],
};
