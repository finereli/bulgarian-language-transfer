import type { Module } from "./types";

export const module5: Module = {
  id: "m5",
  title: "Time travel: future and past",
  blurb: "One little word for the future, one little sound for the past.",
  lessons: [
    {
      id: "m5l1",
      title: "The future: ще",
      subtitle: "Ще говоря. Няма да работя.",
      items: [
        {
          type: "note",
          title: "The easiest future in Europe",
          body:
            "Future = **ще** + present tense. Ще never changes — it's 'will', pure and simple:\n\n- **Ще говоря.** — I will speak.\n- **Ще говориш.** — You will speak.\n\nBonus word: **утре** = tomorrow.",
          speak: ["Ще говоря.", "Ще работя утре."],
          ru: "One future for everything — no буду + imperfective vs. perfective future split to agonize over. Ще + present, done.",
        },
        {
          type: "exercise",
          prompt: "**I will work tomorrow.**",
          answer: "Ще работя утре",
          accept: ["утре ще работя"],
        },
        {
          type: "exercise",
          prompt: "**She will be here tomorrow.**",
          answer: "Тя ще е тук утре",
          accept: ["тя ще бъде тук утре", "утре тя ще е тук"],
          after: "Future of съм: **ще е** (or the fuller **ще бъде** — both fine).",
        },
        {
          type: "note",
          title: "The negative future: няма да",
          body:
            "'Won't' is **няма да** + present — our old friend няма moonlighting again:\n\n**Няма да работя утре.** — I won't work tomorrow.\n\n(Never 'не ще' in normal speech.)",
          speak: ["Няма да работя утре."],
        },
        {
          type: "exercise",
          prompt: "**I won't work tomorrow.**",
          answer: "Няма да работя утре",
          accept: ["утре няма да работя"],
        },
        {
          type: "exercise",
          prompt: "**We will learn Bulgarian.**",
          answer: "Ще учим български",
          accept: ["ние ще учим български"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Will you work tomorrow?**",
          answer: "Ще работиш ли утре?",
          hint: "ще + verb, then ли right after the verb.",
        },
        {
          type: "exercise",
          prompt: "**They won't be here.**",
          answer: "Те няма да са тук",
          accept: ["няма да са тук", "те няма да бъдат тук"],
          hint: "won't = няма да + present of съм (…да са).",
        },
        {
          type: "exercise",
          prompt: "**I will have time.**",
          answer: "Ще имам време",
        },
        {
          type: "note",
          title: "време means weather too",
          body:
            "**Време** = time *and* weather (context decides — like Hebrew where עונה-adjacent words double up, or English 'time/tide' once did):\n\n**Времето е хубаво.** — The weather is nice.",
          speak: ["Времето е хубаво."],
        },
        {
          type: "exercise",
          prompt: "**The weather will be nice.**",
          answer: "Времето ще е хубаво",
          accept: ["времето ще бъде хубаво"],
        },
        {
          type: "note",
          title: "That's the entire future tense",
          body:
            "**ще** for will, **няма да** for won't, ли after the verb for questions. Ten minutes, one tense, forever.",
        },
      ],
    },
    {
      id: "m5l2",
      title: "The past: бях, имах, говорих",
      subtitle: "The -х family",
      items: [
        {
          type: "note",
          title: "Was and were",
          body:
            "Past of съм:\n\n- аз **бях** — I was\n- ти **беше** — you were\n- той/тя **беше** — he/she was\n- ние **бяхме** — we were\n- вие **бяхте** — you were\n- те **бяха** — they were\n\nBonus word: **вчера** = yesterday.",
          speak: ["Бях там вчера.", "Тя беше тук."],
        },
        {
          type: "exercise",
          prompt: "**I was there yesterday.**",
          answer: "Бях там вчера",
          accept: ["вчера бях там", "аз бях там вчера"],
        },
        {
          type: "exercise",
          prompt: "**She was here.**",
          answer: "Тя беше тук",
        },
        {
          type: "exercise",
          prompt: "**They were students.**",
          answer: "Те бяха студенти",
        },
        {
          type: "note",
          title: "The -х family",
          body:
            "Hear the pattern in бя**х**, бя**хме**, бя**хте**, бя**ха**? That **х** is the past-tense signature. Same endings on имам:\n\n**имах, имаше, имаше, имахме, имахте, имаха** — had\n**нямах…** — didn't have\n\n- I: **-х** · we: **-хме** · you all: **-хте** · they: **-ха**\n- you/he/she: **-ше**",
          speak: ["Имах проблем.", "Нямахме време."],
        },
        {
          type: "exercise",
          prompt: "**I had a problem.**",
          answer: "Имах проблем",
        },
        {
          type: "exercise",
          prompt: "**We didn't have time.**",
          answer: "Нямахме време",
        },
        {
          type: "note",
          title: "Any verb, same signature",
          body:
            "- **исках** — I wanted (искаше, искахме…)\n- **говорих** — I spoke (говорихме, говориха…)\n- **работих** — I worked\n\nSmall quirk: for и-verbs, 'he spoke' is **говори** — looks like the present; context (or вчера) makes it clear.",
          speak: ["Исках кафе.", "Вчера говорих български."],
        },
        {
          type: "exercise",
          prompt: "**I wanted coffee.**",
          answer: "Исках кафе",
        },
        {
          type: "exercise",
          prompt: "**I spoke Bulgarian yesterday.**",
          answer: "Вчера говорих български",
          accept: ["говорих български вчера"],
        },
        {
          type: "exercise",
          prompt: "**We worked a lot.**",
          answer: "Работихме много",
          accept: ["ние работихме много", "много работихме"],
        },
        {
          type: "note",
          title: "No and ? in the past",
          body:
            "Nothing new to learn:\n\n- **Не бях там.** — I wasn't there.\n- **Беше ли там?** — Were you there?",
          speak: ["Не бях там.", "Беше ли там?"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Were you there?**",
          answer: "Беше ли там?",
          accept: ["ти беше ли там"],
        },
        {
          type: "exercise",
          prompt: "**He wasn't here yesterday.**",
          answer: "Той не беше тук вчера",
          accept: ["вчера той не беше тук", "той вчера не беше тук"],
        },
        {
          type: "note",
          title: "You now travel in time",
          body:
            "Present, future (ще), past (-х). There are more past tenses lurking in Bulgarian's attic — famously many — but this one (the aorist) is the workhorse for 'what happened', and it will carry you for months.",
          ru: "False friend checkpoint: **живот** = *life* in Bulgarian (Russian живот = belly). 'Животът е хубав' is a compliment, not a diagnosis.",
        },
      ],
    },
  ],
};
