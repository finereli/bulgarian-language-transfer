import type { Module } from "./types";

export const module6: Module = {
  id: "m6",
  title: "Asking and connecting",
  blurb: "Question words, the six little prepositions, and the glue between thoughts.",
  lessons: [
    {
      id: "m6l1",
      title: "Question words",
      subtitle: "какво, кой, къде, кога, защо, как, колко",
      items: [
        {
          type: "note",
          title: "какво — what",
          body:
            "- **Какво искаш?** — What do you want?\n- **Какво е това?** — What is this? (**това** = this)\n\nNo ли needed — the question word *is* the question.",
          speak: ["Какво искаш?", "Какво е това?"],
          ru: "The family resemblance helps: какво≈что, кой≈кто, къде≈где, кога≈когда, как≈как, колко≈сколько. The odd one out: **защо** = почему.",
        },
        {
          type: "exercise",
          prompt: "**What do you want?**",
          answer: "Какво искаш?",
          hint: "Какво + the you-form of искам. No ли needed.",
        },
        {
          type: "exercise",
          prompt: "**What is this?**",
          answer: "Какво е това?",
          hint: "Какво е + това.",
        },
        {
          type: "note",
          title: "кой, къде, кога",
          body:
            "- **кой** — who: **Кой е той?** (agrees like an adjective: кой/коя/кое/кои — Коя е тя?)\n- **къде** — where: **Къде си?**\n- **кога** — when: **Кога работиш?**",
          speak: ["Кой е той?", "Къде си?", "Кога работиш?"],
        },
        {
          type: "exercise",
          prompt: "**Who is he?**",
          answer: "Кой е той?",
          hint: "Кой е + той.",
        },
        {
          type: "exercise",
          prompt: "**Where are you?**",
          answer: "Къде си?",
          hint: "Къде + the short you-form of съм.",
        },
        {
          type: "exercise",
          prompt: "**Where is the hotel?**",
          answer: "Къде е хотелът?",
          accept: ["къде е хотела"],
          hint: "Къде е хотел...? Masculine 'the' = -ът.",
        },
        {
          type: "note",
          title: "как and колко",
          body:
            "- **как** — how: **Как си?** — How are you? (the everyday greeting)\n- **колко** — how much / how many: **Колко струва?** — How much does it cost? (**струва** = it costs)\n\nStandard answer to Как си?: **Добре съм.** — I'm fine.",
          speak: ["Как си?", "Добре съм.", "Колко струва?"],
        },
        {
          type: "exercise",
          prompt: "**How are you?**",
          answer: "Как си?",
          hint: "Как + the you-form of съм.",
        },
        {
          type: "exercise",
          prompt: "Answer it: **I'm fine.**",
          answer: "Добре съм",
          hint: "съм can't be first.",
        },
        {
          type: "exercise",
          prompt: "**How much does it cost?**",
          answer: "Колко струва?",
          hint: "Колко + струва.",
        },
        {
          type: "note",
          title: "защо and защото",
          body:
            "**Защо** = why; its echo **защото** = because. A matched pair, like למה/כי — but in Bulgarian they rhyme, so you can't forget one without the other.",
          speak: ["Защо учиш български?", "Защото обичам България."],
        },
        {
          type: "exercise",
          prompt: "**Why are you learning Bulgarian?**",
          answer: "Защо учиш български?",
          hint: "Защо + учиш + български?",
        },
        {
          type: "exercise",
          prompt: "**Because I love Bulgaria.**",
          answer: "Защото обичам България",
          hint: "Защото + обичам + България.",
        },
        {
          type: "note",
          title: "The full kit",
          body:
            "**какво** what · **кой** who · **къде** where · **кога** when · **защо** why · **как** how · **колко** how much\n\nWith these, every statement you can build becomes seven questions.",
        },
      ],
    },
    {
      id: "m6l2",
      title: "The little words",
      subtitle: "в, на, с, от, за, до",
      items: [
        {
          type: "note",
          title: "в — in",
          body:
            "**Живея в София.** — I live in Sofia. (**живея** = I live: живея, живееш, живее, живеем, живеете, живеят — е-family)\n\nSpelling nicety: **във** before words starting with в or ф (във Варна).",
          speak: ["Живея в София."],
          ru: "The luxury continues: no cases after prepositions. В София, not в Софии. С мляко, not с молоком. The preposition does all the work; the noun never changes.",
        },
        {
          type: "exercise",
          prompt: "**I live in Sofia.**",
          answer: "Живея в София",
          hint: "живея + в + София. No case change.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you live in Israel?**",
          answer: "Живееш ли в Израел?",
          hint: "you-form: живееш.",
        },
        {
          type: "note",
          title: "на — the busiest word in Bulgarian",
          body:
            "You know на as 'of/'s'. It also means **on**, and **at/to** for activities and destinations:\n\n- **на работа** — at work / to work\n- **на море** — at the seaside (the great Bulgarian summer institution)\n- **на кафе** — out for coffee",
          speak: ["На работа съм.", "Те са на море."],
        },
        {
          type: "exercise",
          prompt: "**I'm at work.**",
          answer: "На работа съм",
          accept: ["аз съм на работа"],
          hint: "На работа + съм (съм can't lead).",
        },
        {
          type: "exercise",
          prompt: "**They are at the seaside.**",
          answer: "Те са на море",
          hint: "Те + са + на море.",
        },
        {
          type: "note",
          title: "с — with, от — from, до — next to",
          body:
            "- **кафе с мляко** — coffee with milk (**със** before с/з words: **със сирене**)\n- **от Израел** — from Israel\n- **до хотела** — next to the hotel (also 'until')",
          speak: ["кафе с мляко", "хляб със сирене"],
        },
        {
          type: "exercise",
          prompt: "**coffee with milk**",
          answer: "кафе с мляко",
          hint: "кафе + с + мляко.",
        },
        {
          type: "exercise",
          prompt: "**bread with cheese**",
          answer: "хляб със сирене",
          hint: "с doubles to със before another с.",
        },
        {
          type: "exercise",
          prompt: "**The bank is next to the hotel.**",
          answer: "Банката е до хотела",
          hint: "Банката е до хотел... After до, use -а.",
          after: "After a preposition, masculine 'the' is written **-а**: до хотел**а**.",
        },
        {
          type: "note",
          title: "за — for / about, and the strong pronouns",
          body:
            "**за** = for / about. After prepositions, pronouns use their full forms:\n\n**мен** me · **теб** you · **него** him · **нея** her · **нас** us · **вас** you all · **тях** them\n\n- **Това е за теб.** — This is for you.\n- **с мен** — with me",
          speak: ["Това е за теб.", "Искаш ли да говориш с мен?"],
        },
        {
          type: "exercise",
          prompt: "**This is for you.**",
          answer: "Това е за теб",
          accept: ["това е за тебе"],
          hint: "Това е за + strong you-form (теб).",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want to speak with me?**",
          answer: "Искаш ли да говориш с мен?",
          hint: "Искаш ли да говориш с + strong 'me' (мен)?",
        },
        {
          type: "note",
          title: "Six words, no cases",
          body:
            "**в, на, с, от, за, до** — that's the daily set. Nouns never change after them.\n\nDirections bonus: **наляво** left, **надясно** right, **направо** straight ahead.",
          ru: "**Направо** is the direction trap of a lifetime: in Bulgarian it means *straight ahead*, not 'to the right' (right = надясно). Asking for directions, this one matters.",
        },
      ],
    },
    {
      id: "m6l3",
      title: "Connecting thoughts",
      subtitle: "и, а, но, или, че",
      items: [
        {
          type: "note",
          title: "and, or, but — and 'а'",
          body:
            "- **и** — and · **или** — or · **но** — but\n- **а** — 'and/whereas', for contrast between two halves:\n\n**Аз съм от Израел, а тя е от България.** — I'm from Israel, and (whereas) she's from Bulgaria.",
          speak: ["Чай или кафе?", "Аз съм от Израел, а тя е от България."],
          ru: "**а** works exactly like the Russian а — you get this one for free.",
        },
        {
          type: "exercise",
          prompt: "**Tea or coffee?**",
          answer: "Чай или кафе?",
          hint: "Чай + или + кафе?",
        },
        {
          type: "exercise",
          prompt: "**I'm from Israel, and she's from Bulgaria.** (contrast — use а)",
          answer: "Аз съм от Израел, а тя е от България",
          hint: "...от Израел, а тя е от България.",
        },
        {
          type: "note",
          title: "че — that",
          body:
            "**Мисля, че…** — I think that… (**мисля** = I think, и-family). A comma always sits before че.\n\n**Знам** = I know: знам, знаеш, знае, знаем, знаете, знаят.\n\n**Знам, че говориш български.** — I know (that) you speak Bulgarian. English drops 'that'; Bulgarian never does.",
          speak: ["Мисля, че говориш добре.", "Знам, че тя е тук."],
        },
        {
          type: "exercise",
          prompt: "**I think that you speak well.**",
          answer: "Мисля, че говориш добре",
          hint: "Мисля, че + говориш + добре. Comma before че.",
        },
        {
          type: "exercise",
          prompt: "**I know that she is here.**",
          answer: "Знам, че тя е тук",
          accept: ["знам, че е тук"],
          hint: "Знам, че + тя е тук.",
        },
        {
          type: "exercise",
          prompt: "**I think that the wine is good.**",
          answer: "Мисля, че виното е добро",
          hint: "Мисля, че виното е... (neuter: добро).",
        },
        {
          type: "note",
          title: "че states, да wishes",
          body:
            "**че** reports a fact; **да** carries a wish — and here's the payoff: the да-verb can have a *different* subject:\n\n**Искам да си тук.** — I want *you* to be here. (искам + да **си**)\n**Тя иска да работя.** — She wants *me* to work.\n\nThe verb ending alone says who. English needs 'you to be'; Bulgarian just conjugates.",
          speak: ["Искам да си тук.", "Тя иска да работя."],
        },
        {
          type: "exercise",
          prompt: "**I want you to be here.**",
          answer: "Искам да си тук",
          hint: "искам + да + the you-form of съм.",
        },
        {
          type: "exercise",
          prompt: "**She wants me to work.**",
          answer: "Тя иска да работя",
          accept: ["иска да работя"],
          hint: "Тя иска да + the -я ending shows it's me.",
          after: "Only the ending -я reveals it's *me* who must work. Elegant, no?",
        },
        {
          type: "note",
          title: "може би — maybe",
          body: "**Може би** = maybe (literally 'it may be').\n\n**Може би утре.** — Maybe tomorrow. The most Balkan of answers.",
          speak: ["Може би утре."],
        },
        {
          type: "exercise",
          prompt: "**Maybe tomorrow.**",
          answer: "Може би утре",
          hint: "Може би + утре.",
        },
        {
          type: "note",
          title: "Full sentences unlocked",
          body:
            "и, а, но, или, че, защото, може би — you can now chain thoughts like a person, not a phrasebook. **Мисля, че разбираш. Знам, че можеш.**",
        },
      ],
    },
  ],
};
