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
            "Bulgarian future is wonderfully simple. Put **ще** before the present tense verb and you're done:\n\n- **Ще говоря.** - I will speak.\n- **Ще работя.** - I will work.\n- **Ще имам.** - I will have.\n\nЩе never changes. It doesn't care who's speaking, how many people, anything. One word, one job.",
          speak: ["Ще говоря.", "Ще работя.", "Ще имам."],
          he: "Hebrew builds the future from scratch with new verb forms - אדבר, תדבר, ידבר. Bulgarian just sticks ще in front of the present tense you already know. No new conjugation to learn.",
        },
        {
          type: "note",
          title: "утре - tomorrow",
          body:
            "New word: **утре** = tomorrow. You'll use it constantly with ще.",
          speak: ["Утре."],
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
          type: "exercise",
          prompt: "**I will wait for you tomorrow.**",
          answer: "Ще те чакам утре",
          hint: "ще + те (you, clitic) + чакам (I wait) + утре (tomorrow).",
          after: "Clitics slip between ще and the verb.",
        },
        {
          type: "exercise",
          prompt: "**She won't be able to work tomorrow.**",
          answer: "Тя няма да може да работи утре",
          accept: ["няма да може да работи утре"],
          hint: "няма да (won't) + може да работи (be able to work).",
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
          title: "I was: бях",
          body:
            "Your first past tense word: аз **бях** - I was.\n\nNew word: **вчера** = yesterday. You'll need it to talk about the past.",
          speak: ["Бях там вчера."],
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
          type: "note",
          title: "You/he/she was: беше",
          body:
            "For you, he, or she, 'was' is **беше**:\n\n- ти **беше** - you were\n- той **беше** - he was\n- тя **беше** - she was\n\nOne form covers all three.",
          speak: ["Тя беше тук."],
        },
        {
          type: "exercise",
          prompt: "**She was here.**",
          answer: "Тя беше тук",
          hint: "she was = тя беше.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Were you there?**",
          answer: "Беше ли там?",
          accept: ["ти беше ли там"],
          hint: "беше + ли (after the verb) + там.",
        },
        {
          type: "exercise",
          prompt: "**My mother was here yesterday.**",
          answer: "Майка ми беше тук вчера",
          hint: "майка ми (my mother) + беше (was) + тук вчера.",
        },
        {
          type: "note",
          title: "The -х pattern: имах",
          body:
            "For most verbs, add **-х** to mark 'I' in the past. Your first one: имам → **имах** (I had).\n\nHear the **х**? That's the past tense signature. You'll hear it in every past form from now on.",
          speak: ["Имах."],
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
          type: "note",
          title: "Another -х verb: исках",
          body:
            "Same pattern: искам → **исках** (I wanted). Just add -х.",
          speak: ["Исках."],
        },
        {
          type: "exercise",
          prompt: "**I wanted coffee.**",
          answer: "Исках кафе",
          hint: "wanted (I) = исках.",
        },
        {
          type: "note",
          title: "И-family verbs: говорих",
          body:
            "For и-family verbs the vowel changes slightly: говоря → **говорих** (I spoke). The -х is still there - just with an и before it.",
          speak: ["Говорих."],
        },
        {
          type: "exercise",
          prompt: "**I spoke Bulgarian yesterday.**",
          answer: "Вчера говорих български",
          accept: ["говорих български вчера"],
          hint: "spoke (I) = говорих; вчера = yesterday.",
        },
        {
          type: "note",
          title: "And работих",
          body:
            "Same pattern: работя → **работих** (I worked).",
          speak: ["Работих."],
        },
        {
          type: "exercise",
          prompt: "**I worked a lot yesterday.**",
          answer: "Вчера работих много",
          accept: ["работих много вчера"],
          hint: "worked (I) = работих; много = a lot.",
        },
        {
          type: "note",
          title: "We in the past: -хме",
          body:
            "For 'we', the ending is **-хме**: работихме, нямахме. Same х, just longer.",
          speak: ["Работихме.", "Нямахме."],
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
          prompt: "**We didn't have time.**",
          answer: "Нямахме време",
          hint: "didn't have (we) = нямахме (-хме for 'we').",
        },
        {
          type: "note",
          title: "сега - now",
          body:
            "One more time word: **сега** = now. Useful for contrasting past and present.",
          speak: ["Сега съм тук."],
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
          title: "Saying goodbye: довиждане",
          body:
            "**Довиждане** - goodbye. It comes from до + виждане - 'until seeing' - connecting back to **виждам** (I see), which you already know. Same logic as French *au revoir*.",
          speak: ["Довиждане."],
        },
        {
          type: "note",
          title: "I said: казах",
          body:
            "New past form: **казах** = I said (past of казвам). Same -х pattern as имах, исках, работих.",
          speak: ["Казах."],
        },
        {
          type: "exercise",
          prompt: "**Yesterday I said goodbye.**",
          answer: "Вчера казах довиждане",
          accept: ["казах довиждане вчера"],
          hint: "I said = казах (past of казвам). Goodbye = довиждане.",
          after:
            "**Казах** - past of казвам. Predictable as always.",
        },
        {
          type: "note",
          title: "Good night: лека нощ",
          body:
            "**Лека нощ** - good night. Literally 'light night'.",
          speak: ["Лека нощ."],
        },
        {
          type: "exercise",
          prompt: "**I said good night.**",
          answer: "Казах лека нощ",
          hint: "казах + the phrase as a chunk.",
        },
        {
          type: "note",
          title: "Good evening: добър вечер",
          body:
            "**Добър вечер** - good evening. You already know добър from добър ден.",
          speak: ["Добър вечер."],
        },
        {
          type: "exercise",
          prompt: "**I will say good evening.**",
          answer: "Ще кажа добър вечер",
          accept: ["ще кажа добър вечер"],
          hint: "will say = ще кажа (future of казвам).",
          after:
            "**Ще кажа** - future of казвам. Кажа is its present-base form used after ще.",
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
