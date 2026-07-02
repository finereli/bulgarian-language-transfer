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
            "This course adapts the *Language Transfer* thinking method to reading and writing. The rule of the method: **don't memorize — think**. Every lesson shows you how Bulgarian works, then immediately asks you to build something with it. If you get something wrong, that's the method working: the correction is what makes it stick.\n\nWhen an exercise asks you to type Bulgarian, you can type in Latin letters and they convert to Cyrillic as you type (**zh**→ж, **ch**→ч, **sh**→ш, **sht**→щ, **c**→ц, **yu**→ю, **ya**→я, **y**→ъ, **j**→й, **h**→х). Or switch to a Bulgarian keyboard — whatever you prefer. Tap the speaker on any Bulgarian phrase to hear it.",
        },
        {
          type: "note",
          title: "You already own hundreds of Bulgarian words",
          body:
            "English words ending in **-tion** usually exist in Bulgarian ending in **-ция** (-tsiya):\n\n- information → **информация**\n- situation → **ситуация**\n- station → **станция** (bus/metro stops; a *train* station has its own word, гара)\n\nThe stress sits right before the ending: informA-tion, информА-ция. Same melody.",
          speak: ["информация", "ситуация", "станция"],
          ru: "These are the same words as Russian информация, ситуация, станция — Bulgarian and Russian share a huge amount of vocabulary, and the -ция words are nearly identical.",
        },
        {
          type: "exercise",
          prompt: "Turn **organization** into Bulgarian.",
          answer: "организация",
          hint: "-tion becomes -ция. Start from 'organiza-'.",
          after: "**Организация.** You didn't learn this word — you converted it. That's the whole trick.",
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
            "Professions and 'people' words also carry over:\n\n- tourist → **турист**\n- journalist → **журналист**\n- doctor → **доктор**\n- professor → **професор**\n- student → **студент**\n\nNotice ж in журналист — it's the *s* in 'plea**s**ure' (type **zh**).",
          speak: ["турист", "журналист", "доктор", "студент"],
        },
        {
          type: "exercise",
          prompt: "Write **tourist** in Bulgarian.",
          answer: "турист",
        },
        {
          type: "exercise",
          prompt: "Write **journalist**.",
          answer: "журналист",
          hint: "The first sound is ж — type zh.",
        },
        {
          type: "note",
          title: "Everyday freebies",
          body:
            "More words you already know:\n\n- **проблем** (problem), **идея** (idea), **музика** (music)\n- **телефон** (telephone), **ресторант** (restaurant), **хотел** (hotel)\n- **банка** (bank), **кафе** (coffee / café), **чай** (tea), **шоколад** (chocolate)\n\n**Чай** should feel familiar — it's תה's cousin from the other trade route, and English 'chai'.",
          speak: ["проблем", "идея", "ресторант", "кафе", "чай"],
        },
        {
          type: "exercise",
          prompt: "Write **problem**.",
          answer: "проблем",
          after: "Stress on the last syllable: проблЕм.",
        },
        {
          type: "exercise",
          prompt: "Write **chocolate** — think 'shokolad'.",
          answer: "шоколад",
          hint: "sh → ш",
        },
        {
          type: "note",
          title: "Two sounds English doesn't write",
          body:
            "Bulgarian has two letters worth befriending early:\n\n- **ъ** — the vowel in English 's**u**n' or 'ab**ou**t'. Bulgarian is full of it. Type **y**.\n- **х** — like Hebrew כ in 'ba**ch**' (a soft throat sound). Type **h**.\n\nAnd one famous letter: **щ**, which is simply **sht** — one letter, two sounds. **Щастие** (happiness) starts with 'shtas-'.",
          speak: ["България", "щастие"],
          ru: "Careful: Bulgarian **щ** is *sht*, not Russian *shch*. And Bulgarian **ъ** is a full, stressable vowel — not a silent hard sign. These two are the biggest pronunciation traps for Russian speakers.",
        },
        {
          type: "choice",
          prompt: "The letter **щ** in Bulgarian sounds like…",
          options: ["sht", "shch", "sh"],
          correct: 0,
          after: "Always **sht**: щастие is 'SHTAS-tie'.",
          ru: "In Russian щ is 'shch' — in Bulgarian it is always 'sht'. Same letter, different sound.",
        },
        {
          type: "exercise",
          prompt: "Type the country: **България** (Bulgaria). In Latin that's roughly 'Bylgariya'.",
          answer: "България",
          hint: "B-y-l-g-a-r-i-ya → the y gives you ъ, the ya gives you я. Capitalize the first letter.",
          after: "**България** — with that ъ in the first syllable: bul-GAR-ia, where 'bul' rhymes with 'dull'.",
        },
        {
          type: "note",
          title: "What just happened",
          body:
            "In one lesson you collected a few hundred words (every -tion, -ist, -or word you know is now suspect — try it in Bulgarian first, you'll usually be right), and met the only genuinely new sounds.\n\nNext: your first real sentences.",
        },
      ],
    },
    {
      id: "m1l2",
      title: "To be: съм",
      subtitle: "Аз съм, ти си, той е…",
      items: [
        {
          type: "note",
          title: "The verb Hebrew made you drop",
          body:
            "In Hebrew you say **אני דוקטור** — 'I doctor', no 'is'. Bulgarian, like English, insists on the little verb:\n\n**Аз съм доктор.** — *I am a doctor.*\n\n- **аз** = I\n- **съм** = am\n\nNo word for 'a', by the way. Just 'I am doctor'.",
          speak: ["Аз съм доктор."],
          ru: "Russian drops 'to be' in the present too (я доктор). Bulgarian kept it alive: аз **съм** доктор. This is the first big habit to change.",
        },
        {
          type: "note",
          title: "You and he/she",
          body:
            "- **аз съм** — I am\n- **ти си** — you are (one person)\n- **той е** — he is\n- **тя е** — she is\n- **то е** — it is\n\n**Ти си студент.** — *You are a student.* **Тя е журналистка** — *she is a journalist*: for a woman, add **-ка**, just like Hebrew adds ־ית (סטודנט → סטודנטית).",
          speak: ["Ти си студент.", "Той е доктор.", "Тя е журналистка."],
        },
        {
          type: "exercise",
          prompt: "How would you say: **I am a tourist**?",
          answer: "Аз съм турист",
          accept: ["аз съм туристка"],
          after: "A woman would usually say **туристка**.",
        },
        {
          type: "exercise",
          prompt: "**You are a student.**",
          answer: "Ти си студент",
          accept: ["ти си студентка"],
        },
        {
          type: "exercise",
          prompt: "**She is a journalist.**",
          answer: "Тя е журналистка",
          accept: ["тя е журналист"],
          hint: "she = тя, is = е, and remember the feminine -ка.",
        },
        {
          type: "note",
          title: "We, you all, they",
          body:
            "- **ние сме** — we are\n- **вие сте** — you are (several people, or polite)\n- **те са** — they are\n\n**Са** is pronounced 'suh' (that ъ sound again, even though it's written with а).\n\nTo make a person-word plural, its ending usually becomes **-и**: турист → **туристи**, студент → **студенти**. Full plural story later.",
          speak: ["Ние сме туристи.", "Те са студенти."],
        },
        {
          type: "exercise",
          prompt: "**We are tourists.**",
          answer: "Ние сме туристи",
        },
        {
          type: "exercise",
          prompt: "**They are students.**",
          answer: "Те са студенти",
        },
        {
          type: "note",
          title: "Now drop the pronoun",
          body:
            "Since **съм** can only mean 'I am' and **си** can only mean 'you are', Bulgarians usually drop the pronoun — like Hebrew past tense (הלכתי needs no אני).\n\nOne golden rule comes with this: **съм and its family refuse to be the first word** of a sentence. So when 'аз' disappears, the sentence flips:\n\n- Аз съм студент → **Студент съм.**\n- Ти си от Израел → **От Израел си.** (*от* = from)",
          speak: ["Студент съм.", "От Израел си."],
          ru: "This 'never first' rule applies to all Bulgarian clitics (съм, се, ми, го…). Russian word order won't help you here — it's a new rhythm to acquire.",
        },
        {
          type: "exercise",
          prompt: "Say **I am a doctor** without the pronoun.",
          answer: "Доктор съм",
          hint: "съм can't come first — lead with доктор.",
        },
        {
          type: "exercise",
          prompt: "**We are from Israel.** (with the pronoun is fine)",
          answer: "Ние сме от Израел",
          accept: ["от Израел сме"],
          after: "Israel is **Израел** — no -ия ending, unlike България, Италия, Германия.",
        },
        {
          type: "note",
          title: "Here and there",
          body: "- **тук** = here\n- **там** = there\n\n**Той е тук.** — *He is here.*",
          speak: ["Той е тук.", "Тя е там."],
        },
        {
          type: "exercise",
          prompt: "**She is here.**",
          answer: "Тя е тук",
        },
        {
          type: "exercise",
          prompt: "**They are there.**",
          answer: "Те са там",
        },
        {
          type: "note",
          title: "The whole family",
          body:
            "**съм, си, е, сме, сте, са** — you now conjugate the most used verb in the language.\n\n- Аз **съм** — ти **си** — той/тя/то **е**\n- Ние **сме** — вие **сте** — те **са**\n\nSay a few true sentences about yourself before moving on. *Турист съм. От Израел съм.*",
        },
      ],
    },
    {
      id: "m1l3",
      title: "No, and questions",
      subtitle: "не, ли, да, нали",
      items: [
        {
          type: "note",
          title: "Saying no",
          body:
            "Negation is one word, **не**, placed before the verb:\n\n- **Не съм доктор.** — *I'm not a doctor.*\n- **Той не е тук.** — *He is not here.*\n\nNotice не broke the 'never first' rule for съм — не+verb travel together as a unit, and *не* is allowed to lead.",
          speak: ["Не съм доктор.", "Той не е тук."],
        },
        {
          type: "exercise",
          prompt: "**I am not a journalist.**",
          answer: "Не съм журналист",
          accept: ["аз не съм журналист", "не съм журналистка", "аз не съм журналистка"],
        },
        {
          type: "exercise",
          prompt: "**He is not here.**",
          answer: "Той не е тук",
          after: "**Не е** flows together as 'ne-E'.",
        },
        {
          type: "exercise",
          prompt: "**We are not from Sofia.** (Sofia = София)",
          answer: "Не сме от София",
          accept: ["ние не сме от София"],
        },
        {
          type: "note",
          title: "The question particle ли",
          body:
            "Hebrew can open a question with **האם**; Bulgarian instead drops the little word **ли** right *after* the thing being asked about — usually the verb or the key word:\n\n- Ти си студент. → **Студент ли си?** — *Are you a student?*\n- Той е тук. → **Той тук ли е?** — *Is he here?*\n\nЛи is unstressed and glues to the word before it. Yes = **да**, no = **не**.",
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
        },
        {
          type: "exercise",
          prompt: "Ask: **Are they from Israel?**",
          answer: "Те от Израел ли са?",
          accept: ["от Израел ли са", "от Израел ли са те"],
        },
        {
          type: "note",
          title: "нали — the tag question",
          body:
            "**Нали** turns a statement into 'right?' / 'isn't it?':\n\n**Ти си от Израел, нали?** — *You're from Israel, right?*\n\nIt's the Bulgarian all-purpose tag, like Hebrew נכון? at the end of a sentence.",
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
            "Traditionally Bulgarians *shake* the head for **да** (yes) and *nod* for **не** (no) — the reverse of most of the world. Younger people mix both systems, so when it matters, listen for the word, not the head.\n\nYou can now state, deny, and ask. Next module: verbs — where Bulgarian gets genuinely fun.",
          ru: "One more false friend to bank early: **неделя** is *Sunday* in Bulgarian, not 'week' (week = седмица).",
        },
      ],
    },
  ],
};
