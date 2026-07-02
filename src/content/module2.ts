import type { Module } from "./types";

export const module2: Module = {
  id: "m2",
  title: "Verbs: the present",
  blurb:
    "Want, have, speak, understand — and the little word да that replaces every English 'to'.",
  lessons: [
    {
      id: "m2l1",
      title: "Wanting and having",
      subtitle: "искам, имам, нямам",
      items: [
        {
          type: "note",
          title: "The verb tells you who",
          body:
            "Bulgarian verb endings carry the person, the way Hebrew past-tense endings do (הלכ**תי**, הלכ**ת**…). So pronouns are optional decoration.\n\n**Искам** = *I want*. Change the ending, change the person:\n\n- аз **искам** — I want\n- ти **искаш** — you want\n- той/тя **иска** — he/she wants\n\nThe **-м** is 'me', the **-ш** is 'you', the bare stem is 'he/she'.",
          speak: ["искам", "искаш", "иска"],
        },
        {
          type: "exercise",
          prompt: "**I want coffee.**",
          answer: "Искам кафе",
          accept: ["аз искам кафе"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want tea?**",
          answer: "Искаш ли чай?",
          hint: "ли goes right after the verb.",
        },
        {
          type: "note",
          title: "The plural half",
          body:
            "- ние **искаме** — we want\n- вие **искате** — you (all) want\n- те **искат** — they want\n\nSame markers as съм's family: **-ме** for we, **-те** for you-all.",
          speak: ["искаме", "искате", "искат"],
        },
        {
          type: "exercise",
          prompt: "**We want water.** (water = вода)",
          answer: "Искаме вода",
          accept: ["ние искаме вода"],
        },
        {
          type: "note",
          title: "To have — like English, not like Hebrew",
          body:
            "Hebrew has no verb 'to have' — you say **יש לי** ('there is to me'). Bulgarian went the English way: a real verb, **имам** (*I have*), conjugated exactly like искам:\n\n**имам, имаш, има, имаме, имате, имат**",
          speak: ["Имам проблем.", "Имаш ли телефон?"],
          ru: "Same relief for Russian: no 'у меня есть' construction. Bulgarian just says имам — subject, verb, done.",
        },
        {
          type: "exercise",
          prompt: "**I have a problem.**",
          answer: "Имам проблем",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you have a phone?**",
          answer: "Имаш ли телефон?",
        },
        {
          type: "note",
          title: "нямам — the fused 'don't have'",
          body:
            "'Not have' fused into its own verb: **нямам** (never 'не имам'):\n\n**нямам, нямаш, няма, нямаме, нямате, нямат**\n\n**Нямам време.** — *I don't have time.* (време = time)",
          speak: ["Нямам време.", "Тя няма кола."],
        },
        {
          type: "exercise",
          prompt: "**I don't have time.**",
          answer: "Нямам време",
        },
        {
          type: "exercise",
          prompt: "**She doesn't have a car.** (car = кола)",
          answer: "Тя няма кола",
          accept: ["няма кола"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Does he have an idea?**",
          answer: "Той има ли идея?",
          accept: ["има ли идея", "има ли той идея"],
        },
        {
          type: "note",
          title: "There is / there isn't",
          body:
            "Bare **има** also means *there is*; **няма** — *there isn't*:\n\n- **Има кафе.** — There's coffee.\n- **Няма кафе.** — There's no coffee.\n- **Няма проблем!** — No problem! (you'll hear this ten times a day)\n\nJust like Hebrew יש / אין doing double duty.",
          speak: ["Има кафе.", "Няма проблем!"],
        },
        {
          type: "exercise",
          prompt: "**There is no coffee.**",
          answer: "Няма кафе",
        },
        {
          type: "note",
          title: "Your first verb family",
          body:
            "The **а-family**: stem + **-ам, -аш, -а, -аме, -ате, -ат**. Most verbs you'll meet early live here: искам, имам, **разбирам** (understand), **обичам** (love), **гледам** (watch). Learn one, you've learned them all.",
        },
      ],
    },
    {
      id: "m2l2",
      title: "Speaking and understanding",
      subtitle: "говоря, разбирам, уча",
      items: [
        {
          type: "note",
          title: "The learner's best friend",
          body:
            "**Разбирам** = *I understand* — an а-family verb, so you already know all its forms.\n\n**Не разбирам** may be the most useful sentence in this course. Say it without shame.",
          speak: ["Разбирам.", "Не разбирам."],
        },
        {
          type: "exercise",
          prompt: "**I don't understand.**",
          answer: "Не разбирам",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you understand?**",
          answer: "Разбираш ли?",
        },
        {
          type: "note",
          title: "The и-family: говоря",
          body:
            "**Говоря** = *I speak*. Second verb family — same person markers, but the linking vowel is **и**:\n\n**говоря, говориш, говори, говорим, говорите, говорят**\n\nLanguages: **български** (Bulgarian), **английски** (English), **иврит** (Hebrew), **руски** (Russian). No 'in' needed: говоря български.",
          speak: ["Говоря български.", "говориш", "говорим"],
        },
        {
          type: "exercise",
          prompt: "**I speak English.**",
          answer: "Говоря английски",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you speak Bulgarian?**",
          answer: "Говориш ли български?",
        },
        {
          type: "exercise",
          prompt: "**She speaks Hebrew.**",
          answer: "Тя говори иврит",
          accept: ["говори иврит"],
        },
        {
          type: "note",
          title: "Three small measuring words",
          body:
            "- **малко** — a little\n- **много** — a lot / very\n- **добре** — well\n\n**Говоря малко български.** — the honest sentence of every learner.",
          speak: ["Говоря малко български.", "Говориш много добре!"],
        },
        {
          type: "exercise",
          prompt: "**I speak a little Bulgarian.**",
          answer: "Говоря малко български",
        },
        {
          type: "exercise",
          prompt: "**They speak Russian.**",
          answer: "Те говорят руски",
          accept: ["говорят руски"],
          hint: "they-form of говоря ends in -ят.",
        },
        {
          type: "note",
          title: "уча — to learn",
          body:
            "**Уча** = *I learn / I study* — и-family (the а after ч is just a spelling habit):\n\n**уча, учиш, учи, учим, учите, учат**\n\nBulgarian present covers English '-ing' too: **Уча български** = *I learn* and *I am learning* Bulgarian.",
          speak: ["Уча български."],
        },
        {
          type: "exercise",
          prompt: "**I'm learning Bulgarian.**",
          answer: "Уча български",
        },
        {
          type: "exercise",
          prompt: "**We understand a little.**",
          answer: "Разбираме малко",
          accept: ["ние разбираме малко", "малко разбираме"],
        },
        {
          type: "note",
          title: "но — but",
          body: "**но** = but, with a comma before it, always.\n\n**Разбирам, но не говоря.**",
          speak: ["Разбирам, но не говоря."],
        },
        {
          type: "exercise",
          prompt: "**I understand, but I don't speak.**",
          answer: "Разбирам, но не говоря",
        },
        {
          type: "note",
          title: "Two families down",
          body:
            "- **а-family**: разбир**ам**, разбир**аш**… (искам, имам, обичам)\n- **и-family**: говор**я**, говор**иш**… (уча, работя, мисля)\n\nThe third and last family arrives with 'can'. First, the most Bulgarian thing about Bulgarian.",
        },
      ],
    },
    {
      id: "m2l3",
      title: "The missing 'to'",
      subtitle: "искам да говоря",
      items: [
        {
          type: "note",
          title: "Bulgarian threw away the infinitive",
          body:
            "English says *I want **to speak***. Hebrew says רוצה **לדבר**. Both use a frozen 'to'-form.\n\nBulgarian has none. Instead you say 'I want **that I speak**':\n\n**Искам да говоря.**\n\n**да** + a *conjugated* verb replaces every English 'to ___'.",
          speak: ["Искам да говоря български."],
          ru: "Russian хочу говорить uses an infinitive — Bulgarian lost it entirely (a Balkan family trait it shares with Greek, Albanian and Romanian). Every инфинитив becomes да + conjugated verb.",
        },
        {
          type: "exercise",
          prompt: "**I want to speak Bulgarian.**",
          answer: "Искам да говоря български",
        },
        {
          type: "note",
          title: "Both verbs change",
          body:
            "Because да takes a conjugated verb, *both* verbs agree with the person:\n\n- Искам да говор**я** — I want to speak\n- Иска**ш** да говори**ш** — you want to speak\n- Иска да говор**и** — she wants to speak\n\nThe verbs rhyme with each other. Let that rhythm guide you.",
          speak: ["Искаш да говориш.", "Тя иска да говори."],
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want to speak English?**",
          answer: "Искаш ли да говориш английски?",
          hint: "Искаш ли + да + говориш…",
        },
        {
          type: "exercise",
          prompt: "**She wants to learn Bulgarian.**",
          answer: "Тя иска да учи български",
          accept: ["иска да учи български"],
        },
        {
          type: "exercise",
          prompt: "**I don't want to have a problem.**",
          answer: "Не искам да имам проблем",
          accept: ["не искам да имам проблеми"],
        },
        {
          type: "exercise",
          prompt: "**They want to learn Hebrew.**",
          answer: "Те искат да учат иврит",
          accept: ["искат да учат иврит"],
          hint: "they-forms: искат … учат.",
        },
        {
          type: "note",
          title: "обичам — to love",
          body:
            "**Обичам** = *I love* — works for things, activities and people:\n\n- **Обичам кафе.**\n- **Обичам да пътувам.** — I love to travel. (пътувам = I travel)",
          speak: ["Обичам кафе.", "Обичам да пътувам."],
        },
        {
          type: "exercise",
          prompt: "**I love to travel.**",
          answer: "Обичам да пътувам",
        },
        {
          type: "exercise",
          prompt: "**I love coffee.**",
          answer: "Обичам кафе",
          after: "And for a person: **Обичам те** — *I love you*. (That little те is coming in a later lesson.)",
        },
        {
          type: "exercise",
          prompt: "**We want to speak Bulgarian well.**",
          answer: "Искаме да говорим български добре",
          accept: ["искаме да говорим добре български", "искаме да говорим български добре"],
        },
        {
          type: "note",
          title: "да is the glue",
          body:
            "From now on, whenever English hands you a 'to ___', your brain should output **да + verb, conjugated to match**. This is the single biggest structural difference from English, Hebrew *and* Russian — and you now own it.",
        },
      ],
    },
    {
      id: "m2l4",
      title: "Can and must",
      subtitle: "мога, може ли, трябва да",
      items: [
        {
          type: "note",
          title: "The third family: мога",
          body:
            "**Мога** = *I can*. The е-family — same person markers, linking vowel **е**:\n\n**мога, можеш, може, можем, можете, могат**\n\n(The г softens to ж in the middle forms.) When another action follows, да does its job: **Мога да говоря.**",
          speak: ["мога", "можеш", "Мога да говоря български."],
        },
        {
          type: "exercise",
          prompt: "**I can speak Bulgarian.**",
          answer: "Мога да говоря български",
        },
        {
          type: "exercise",
          prompt: "Ask: **Can you speak English?**",
          answer: "Можеш ли да говориш английски?",
        },
        {
          type: "note",
          title: "може ли — the magic opener",
          body:
            "**Може ли…?** literally 'is it possible?' — the universal polite request:\n\n- **Може ли кафе?** — Could I get a coffee?\n- **Може ли?** — May I? (entering, passing, taking a chair…)\n\nAnswer you'll hear: **Може!** — sure, go ahead.",
          speak: ["Може ли кафе?", "Може!"],
        },
        {
          type: "exercise",
          prompt: "Ask for tea politely, the може ли way.",
          answer: "Може ли чай?",
        },
        {
          type: "exercise",
          prompt: "**He can't speak Hebrew.**",
          answer: "Той не може да говори иврит",
          accept: ["не може да говори иврит"],
        },
        {
          type: "note",
          title: "трябва да — must",
          body:
            "**Трябва да** = *must / have to / need to*. Trick: **трябва itself never changes** — the person lives in the second verb:\n\n- **Трябва да работя.** — I have to work. (работя = I work, и-family)\n- **Трябва да работиш.** — You have to work.\n\nBonus word: **днес** = today.",
          speak: ["Трябва да работя.", "Трябва да работиш днес."],
          ru: "Трябва behaves like Russian надо/нужно — frozen, impersonal. But no dative: not 'мне надо', just трябва да + verb.",
        },
        {
          type: "exercise",
          prompt: "**I have to work.**",
          answer: "Трябва да работя",
        },
        {
          type: "exercise",
          prompt: "**We have to speak Bulgarian.**",
          answer: "Трябва да говорим български",
        },
        {
          type: "exercise",
          prompt: "**She has to learn Bulgarian.**",
          answer: "Тя трябва да учи български",
          accept: ["трябва да учи български"],
        },
        {
          type: "exercise",
          prompt: "**I can't work today.**",
          answer: "Не мога да работя днес",
          accept: ["днес не мога да работя"],
        },
        {
          type: "choice",
          prompt: "At a café you want the bill (сметка). The polite ask is…",
          options: ["Може ли сметката?", "Трябва сметката?", "Искаш сметката?"],
          correct: 0,
          after:
            "**Може ли сметката?** That -та on the end means 'the' — the star of the next module.",
        },
        {
          type: "note",
          title: "The power trio",
          body:
            "**искам да / мога да / трябва да** + any verb you know = want / can / must do anything. Three families, one glue word, and you're building real sentences. Next: nouns, gender, and the article that sticks to the *end* of the word.",
        },
      ],
    },
  ],
};
