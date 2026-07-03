import type { Module } from "./types";

export const module5: Module = {
  id: "m5",
  title: "Time travel: future and past",
  blurb:
    "One little word for the future, one little sound for the past - and suddenly you can talk about yesterday and tomorrow.",
  lessons: [
    {
      id: "m5l1",
      title: "The future: ще",
      subtitle: "Put ще in front and you're done",
      items: [
        {
          type: "note",
          title: "The easiest future tense in Europe",
          body:
            "Bulgarian future is wonderfully simple. Put **ще** before the present tense verb and you're done:\n\n- **Ще говоря.** - I will speak.\n- **Ще работя.** - I will work.\n- **Ще имам.** - I will have.\n\nЩе never changes. It doesn't care who's speaking, how many people, anything. One word, one job.\n\nNew word: **утре** = tomorrow.",
          speak: ["Ще говоря.", "Ще работя.", "Ще имам."],
          he: "Hebrew builds the future from scratch with new verb forms - אדבר, תדבר, ידבר. Bulgarian just sticks ще in front of the present tense you already know. No new conjugation to learn.",
        },
        {
          type: "exercise",
          prompt: "**I will work tomorrow.**",
          answer: "Ще работя утре",
          accept: ["утре ще работя"],
          hint: "ще + present verb + утре (tomorrow).",
          after: "**Ще работя утре.** Same verb form as present - just ще in front.",
        },
        {
          type: "exercise",
          prompt: "**You will speak Bulgarian.**",
          answer: "Ще говориш български",
          accept: ["ти ще говориш български"],
          hint: "ще + говориш (you speak).",
        },
        {
          type: "exercise",
          prompt: "**She will be here tomorrow.**",
          answer: "Тя ще е тук утре",
          accept: [
            "тя ще бъде тук утре",
            "утре тя ще е тук",
            "ще е тук утре",
          ],
          hint: "Future of 'is': ще е.",
          after:
            "Future of е is **ще е**. You can also say **ще бъде** - both work fine.",
        },
        {
          type: "note",
          title: "The negative future: няма да",
          body:
            "'Won't' is **няма да** + present tense verb. Not 'ще не' - forget that combination exists.\n\n**Няма да говоря.** - I won't speak.\n**Няма да работя утре.** - I won't work tomorrow.\n\nНяма already means 'don't have'. Here it also means 'won't'.",
          speak: ["Няма да говоря.", "Няма да работя утре."],
        },
        {
          type: "exercise",
          prompt: "**I won't work tomorrow.**",
          answer: "Няма да работя утре",
          accept: ["утре няма да работя"],
          hint: "won't = няма да + present verb.",
        },
        {
          type: "exercise",
          prompt: "**We will learn Bulgarian.**",
          answer: "Ще учим български",
          accept: ["ние ще учим български"],
          hint: "ще + учим (we learn).",
        },
        {
          type: "exercise",
          prompt: "Ask: **Will you work tomorrow?**",
          answer: "Ще работиш ли утре?",
          hint: "ще + verb, then ли right after the verb.",
          after:
            "Questions work the same way as always - ли after the verb: Ще работиш **ли** утре?",
        },
        {
          type: "exercise",
          prompt: "**They won't be here.**",
          answer: "Те няма да са тук",
          accept: ["няма да са тук", "те няма да бъдат тук"],
          hint: "won't be (they) = няма да + са.",
        },
        {
          type: "note",
          title: "време - time and weather",
          body:
            "**Време** does double duty - it means both *time* and *weather*. Context makes it obvious:\n\n- **Ще имам време.** - I will have time.\n- **Времето ще е хубаво.** - The weather will be nice.\n\n(French has the same deal with *temps*.)",
          speak: ["Ще имам време.", "Времето ще е хубаво."],
        },
        {
          type: "exercise",
          prompt: "**I will have time.**",
          answer: "Ще имам време",
          hint: "ще + имам + време (time).",
          after:
            "That's the entire future tense. Ще for 'will', няма да for 'won't', ли after the verb for questions.",
        },
      ],
    },
    {
      id: "m5l2",
      title: "The past: -х",
      subtitle: "бях, имах, говорих",
      items: [
        {
          type: "note",
          title: "Was and were",
          body:
            "Two forms of 'was' cover most of what you need:\n\n- аз **бях** - I was\n- ти/той/тя **беше** - you were / he was / she was\n\nTwo new words: **вчера** = yesterday, **сега** = now.",
          speak: ["Бях там вчера.", "Тя беше тук.", "Сега съм тук."],
        },
        {
          type: "exercise",
          prompt: "**I was there yesterday.**",
          answer: "Бях там вчера",
          accept: ["вчера бях там", "аз бях там вчера"],
          hint: "I was = бях; there = там; yesterday = вчера.",
          after:
            "**Бях там вчера.** The pronoun аз is optional - бях can only mean 'I was'.",
        },
        {
          type: "exercise",
          prompt: "**She was here.**",
          answer: "Тя беше тук",
          hint: "she was = тя беше.",
        },
        {
          type: "note",
          title: "The -х family",
          body:
            "For most verbs, add **-х** to mark 'I' in the past: имам → **имах** (I had), искам → **исках** (I wanted).\n\nFor и-family verbs the vowel changes too: говоря → **говорих** (I spoke), работя → **работих** (I worked).\n\nFor 'we', the ending is **-хме**: работихме, нямахме.\n\nHear the **х** running through every form? That's the past tense signature.",
          speak: ["Имах.", "Исках.", "Говорих.", "Работих."],
          ru: "Russian past tense uses -л/-ла: говорил, говорила. Bulgarian uses -х for first person: говорих. Different ending, same idea - one sound marks the past.",
        },
        {
          type: "exercise",
          prompt: "**I had a problem.**",
          answer: "Имах проблем",
          hint: "had (I) = имах.",
          after:
            "**Имах** - you already knew имам. The -х just pushes it into the past.",
        },
        {
          type: "exercise",
          prompt: "**We didn't have time.**",
          answer: "Нямахме време",
          hint: "didn't have (we) = нямахме (-хме for 'we').",
        },
        {
          type: "exercise",
          prompt: "**I wanted coffee.**",
          answer: "Исках кафе",
          hint: "wanted (I) = исках.",
        },
        {
          type: "exercise",
          prompt: "**I spoke Bulgarian yesterday.**",
          answer: "Вчера говорих български",
          accept: ["говорих български вчера"],
          hint: "spoke (I) = говорих; вчера = yesterday.",
        },
        {
          type: "exercise",
          prompt: "**We worked a lot.**",
          answer: "Работихме много",
          accept: ["ние работихме много", "много работихме"],
          hint: "worked (we) = работихме; много = a lot.",
        },
        {
          type: "exercise",
          prompt: "**Now he is here. Yesterday he was there.**",
          answer: "Сега той е тук. Вчера той беше там.",
          accept: [
            "сега той е тук, вчера беше там",
            "сега той е тук, вчера той беше там",
          ],
          hint: "сега = now (present tense), вчера = yesterday (past tense).",
          after:
            "Present and past side by side - сега... е, вчера... беше. You're already travelling in time.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Were you there?**",
          answer: "Беше ли там?",
          accept: ["ти беше ли там"],
          hint: "беше + ли (after the verb) + там.",
        },
        {
          type: "note",
          title: "You now travel in time",
          body:
            "Present, future (ще), past (-х). Every new verb you learn from now on comes with a free past tense - just add -х. That's compounding knowledge, and it's why this gets easier, not harder.",
        },
      ],
    },
    {
      id: "m5l3",
      title: "Time mixing",
      subtitle: "Past, present, future - choosing the right one",
      items: [
        {
          type: "note",
          title: "No new words",
          body:
            "This lesson starts with nothing new. Every word, every verb form - you know it all already. The challenge is picking the right tense when all three are on the table at once.\n\nThis is deliberately harder than the previous two lessons. When you only had one tense to practice, you couldn't pick the wrong one. Now you can. That's the point.",
        },
        {
          type: "exercise",
          prompt: "**I speak Bulgarian.**",
          answer: "Говоря български",
          accept: ["аз говоря български"],
          hint: "Plain present tense - no ще, no -х.",
        },
        {
          type: "exercise",
          prompt: "**I spoke Bulgarian yesterday.**",
          answer: "Вчера говорих български",
          accept: ["говорих български вчера"],
          hint: "Past - говорих (not говоря).",
        },
        {
          type: "exercise",
          prompt: "**I will speak Bulgarian tomorrow.**",
          answer: "Утре ще говоря български",
          accept: ["ще говоря български утре"],
          hint: "Future - ще + present verb.",
          after:
            "Three sentences, three tenses, same verb. You didn't hesitate on the verb itself - only on the time frame. That's the whole game now.",
        },
        {
          type: "choice",
          prompt: "**Тя беше тук** means...",
          options: [
            "She was here.",
            "She is here.",
            "She will be here.",
          ],
          correct: 0,
          after:
            "**Беше** is past - 'was'. Present would be **е**, future would be **ще е**.",
        },
        {
          type: "exercise",
          prompt: "**She is here now.**",
          answer: "Тя е тук сега",
          accept: ["сега тя е тук"],
          hint: "Present tense. сега = now.",
        },
        {
          type: "exercise",
          prompt: "**She will be here tomorrow.**",
          answer: "Тя ще е тук утре",
          accept: ["утре тя ще е тук", "тя ще бъде тук утре"],
          hint: "Future - ще е.",
        },
        {
          type: "note",
          title: "Saying goodbye and good night",
          body:
            "Three greetings you're ready for:\n\n- **Довиждане** - goodbye\n- **Лека нощ** - good night\n- **Добър вечер** - good evening\n\nAnd one new past form: **казах** = I said (past of казвам). Follows the -х pattern - predictable as always.",
          speak: ["Довиждане.", "Лека нощ.", "Добър вечер."],
        },
        {
          type: "exercise",
          prompt: "**Yesterday I said goodbye.**",
          answer: "Вчера казах довиждане",
          accept: ["казах довиждане вчера"],
          hint: "I said = казах (past of казвам). Goodbye = довиждане.",
          after:
            "**Казах** - past of казвам. Same -х pattern as имах, исках, работих.",
        },
        {
          type: "exercise",
          prompt: "**I said good night.**",
          answer: "Казах лека нощ",
          hint: "казах + the phrase as a chunk.",
        },
        {
          type: "exercise",
          prompt:
            "**Yesterday I worked, now I am learning, and tomorrow I will speak Bulgarian.**",
          answer:
            "Вчера работих, сега уча и утре ще говоря български",
          accept: [
            "вчера работих, сега уча, и утре ще говоря български",
          ],
          hint: "Three clauses: вчера + past, сега + present, утре + future.",
          after:
            "That sentence used three tenses. Read it again - you built that.",
        },
      ],
    },
  ],
};
