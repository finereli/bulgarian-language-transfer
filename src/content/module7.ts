import type { Module } from "./types";

export const module7: Module = {
  id: "m7",
  title: "Everyday Bulgarian",
  blurb: "Names, likes, politeness — and a story that proves you can actually read Bulgarian now.",
  lessons: [
    {
      id: "m7l1",
      title: "What's your name?",
      subtitle: "казвам се, чувствам се",
      items: [
        {
          type: "note",
          title: "I call myself…",
          body:
            "**Казвам** = I say / I call. Add **се** ('oneself') and you get the Bulgarian way of naming:\n\n- **Как се казваш?** — What's your name? (*how do you call yourself?*)\n- **Казвам се Мария.** — My name is Maria.\n\n**се** is a clitic like ме/те — never first, always near the verb.",
          speak: ["Как се казваш?", "Казвам се Мария."],
          ru: "се is the detached cousin of the Russian -ся: called себя-style, but written separately and movable — называюсь → казвам се, but как се казваш (се jumps ahead of the verb).",
        },
        {
          type: "exercise",
          prompt: "Ask: **What's your name?**",
          answer: "Как се казваш?",
        },
        {
          type: "exercise",
          prompt: "Say: **My name is Maria.**",
          answer: "Казвам се Мария",
        },
        {
          type: "exercise",
          prompt: "Ask: **What's his name?**",
          answer: "Как се казва той?",
          accept: ["как се казва", "той как се казва"],
        },
        {
          type: "note",
          title: "чувствам се — I feel",
          body: "**Чувствам се добре.** — I feel well. Same се, same placement dance.",
          speak: ["Чувствам се добре."],
        },
        {
          type: "exercise",
          prompt: "**I feel well.**",
          answer: "Чувствам се добре",
          accept: ["добре се чувствам"],
        },
        {
          type: "note",
          title: "The learner's power question",
          body:
            "**Как се казва това на български?** — How do you say this in Bulgarian? (*how does this call itself…*)\n\nDeploy it constantly. It converts every Bulgarian within earshot into your private tutor.",
          speak: ["Как се казва това на български?"],
        },
        {
          type: "exercise",
          prompt: "Ask: **How do you say this in Bulgarian?**",
          answer: "Как се казва това на български?",
        },
        {
          type: "note",
          title: "Приятно ми е",
          body:
            "When you're introduced, say **Приятно ми е** — 'it is pleasant to me' = *pleased to meet you*. There's that dative **ми** again, carrying a feeling. Hold that thought for the next lesson.",
          speak: ["Приятно ми е."],
        },
        {
          type: "choice",
          prompt: "You've just been introduced to someone. You say…",
          options: ["Приятно ми е.", "Няма проблем.", "Може ли?"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Тя се казва Ана.** means…",
          options: ["Her name is Ana.", "She knows Ana.", "She is calling Ana."],
          correct: 0,
        },
        {
          type: "note",
          title: "се, collected",
          body:
            "казвам се, чувствам се, and hundreds more verbs wear се. It follows the same clitic rhythm you've been practicing since съм — which is why it already feels familiar.",
        },
      ],
    },
    {
      id: "m7l2",
      title: "Liking things",
      subtitle: "харесва ми",
      items: [
        {
          type: "note",
          title: "It pleases me",
          body:
            "Bulgarian usually doesn't say 'I like X'; it says '**X pleases me**':\n\n- **Харесва ми.** — I like it.\n- **Харесва ли ти?** — Do you like it?\n\nThe little words are the dative set you know from possession: **ми, ти, му, ѝ, ни, ви, им**.",
          speak: ["Харесва ми.", "Харесва ли ти?"],
          ru: "This is exactly мне нравится — same construction, same dative logic. You already think this way.",
        },
        {
          type: "exercise",
          prompt: "**I like it.**",
          answer: "Харесва ми",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you like it?**",
          answer: "Харесва ли ти?",
        },
        {
          type: "note",
          title: "Naming the thing you like",
          body:
            "The liked thing is the grammatical subject:\n\n**България ми харесва.** — I like Bulgaria. (Bulgaria pleases me)\n\nWord order is flexible: Харесва ми България / България ми харесва — both fine.",
          speak: ["България ми харесва."],
        },
        {
          type: "exercise",
          prompt: "**I like Bulgaria.**",
          answer: "България ми харесва",
          accept: ["харесва ми България"],
        },
        {
          type: "exercise",
          prompt: "**He likes the city.**",
          answer: "Градът му харесва",
          accept: ["харесва му градът", "харесва му града"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you like the music?**",
          answer: "Харесва ли ти музиката?",
          accept: ["музиката харесва ли ти", "музиката ли ти харесва"],
        },
        {
          type: "note",
          title: "The direct version",
          body:
            "**Харесвам** also works as a plain verb, mostly for people:\n\n**Харесвам те.** — I like you.\n\nScale of affection: харесвам те → обичам те. Use responsibly.",
          speak: ["Харесвам те."],
        },
        {
          type: "exercise",
          prompt: "**I like you.**",
          answer: "Харесвам те",
        },
        {
          type: "note",
          title: "Table talk",
          body:
            "- **вкусно** — tasty: **Много е вкусно!** — It's delicious!\n- **още** — more: **Искаш ли още кафе?** — Want more coffee?",
          speak: ["Много е вкусно!", "Искаш ли още кафе?"],
        },
        {
          type: "exercise",
          prompt: "**It's very tasty!**",
          answer: "Много е вкусно!",
          hint: "е can't be first — lead with много.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want more coffee?**",
          answer: "Искаш ли още кафе?",
        },
        {
          type: "note",
          title: "You now have opinions",
          body:
            "Харесва ми, не ми харесва, много е вкусно, обичам, не обичам — the full spectrum from polite approval to love. Bulgaria runs on exactly these sentences, usually about food.",
        },
      ],
    },
    {
      id: "m7l3",
      title: "Being polite",
      subtitle: "моля, благодаря, заповядайте",
      items: [
        {
          type: "note",
          title: "The greeting clock",
          body:
            "- **Добро утро** — good morning\n- **Добър ден** — good day (the daytime default)\n- **Добър вечер** — good evening\n- **Лека нощ** — good night (going to sleep)\n- **Здравей / Здравейте** — hi (one person / several or polite)\n- **Довиждане** — goodbye · **Чао** — bye",
          speak: ["Добро утро", "Добър ден", "Добър вечер", "Лека нощ", "Довиждане"],
        },
        {
          type: "exercise",
          prompt: "**Good morning!**",
          answer: "Добро утро!",
        },
        {
          type: "exercise",
          prompt: "**Good evening!**",
          answer: "Добър вечер!",
        },
        {
          type: "note",
          title: "The polite 'you': Вие",
          body:
            "To a stranger, an official, or anyone older, use **вие** — the plural forms, applied to one person (capitalized **Вие** in writing):\n\n- **Как сте?** — How are you? (polite)\n- **Говорите ли английски?** — Do you speak English? (polite)\n\nHebrew has no such gear — but you know it from French vous.",
          speak: ["Как сте?", "Говорите ли английски?"],
          ru: "Exactly the Russian вы, same instincts, same situations. Zero relearning.",
        },
        {
          type: "exercise",
          prompt: "Ask a stranger: **Do you speak English?**",
          answer: "Говорите ли английски?",
        },
        {
          type: "exercise",
          prompt: "Ask politely: **How are you?**",
          answer: "Как сте?",
        },
        {
          type: "note",
          title: "please, thanks, sorry",
          body:
            "- **моля** — please, *and* 'you're welcome', *and* 'come again?'\n- **благодаря** — thank you (**мерси** is completely standard too — Bulgarians borrowed it and never gave it back)\n- **извинете** — excuse me / sorry (polite); **извинявай** to a friend",
          speak: ["Моля", "Благодаря", "Извинете"],
        },
        {
          type: "exercise",
          prompt: "**Thank you!**",
          answer: "Благодаря!",
          accept: ["мерси"],
        },
        {
          type: "exercise",
          prompt: "**Excuse me, where is the hotel?**",
          answer: "Извинете, къде е хотелът?",
          accept: ["извинете, къде е хотела"],
        },
        {
          type: "note",
          title: "заповядайте — the hospitality word",
          body:
            "**Заповядайте** covers 'here you go', 'please come in', 'help yourself', 'after you' — the all-purpose gesture of offering, like בבקשה at its widest. You'll hear it every time anything is handed to you.",
          speak: ["Заповядайте!"],
        },
        {
          type: "choice",
          prompt: "The waiter sets down your coffee and says **Заповядайте**. You reply…",
          options: ["Благодаря.", "Заповядайте.", "Няма."],
          correct: 0,
        },
        {
          type: "exercise",
          prompt: "**One coffee, please.**",
          answer: "Едно кафе, моля",
          hint: "кафе is neuter → едно.",
        },
        {
          type: "exercise",
          prompt: "**Good night!**",
          answer: "Лека нощ!",
        },
        {
          type: "note",
          title: "Наздраве!",
          body:
            "**Наздраве** — 'to health' — is both *cheers!* with a raised glass and *bless you!* after a sneeze. With this, your Bulgarian social toolkit is complete.",
          speak: ["Наздраве!"],
        },
      ],
    },
    {
      id: "m7l4",
      title: "Putting it all together",
      subtitle: "Your first Bulgarian story",
      items: [
        {
          type: "note",
          title: "Read this",
          body:
            "Everything below uses only what you've learned (new: **сега** = now). Read it slowly, out loud if you can. Then answer the questions.\n\n**Казвам се Дана. От Израел съм, но сега живея в София. Градът е голям и много хубав. Уча български, защото мъжът ми е от България. Говоря малко, но разбирам много. Утре ще говорим с майка му на кафе. Тя не говори английски, но няма проблем — аз говоря български!**",
          speak: [
            "Казвам се Дана. От Израел съм, но сега живея в София.",
            "Уча български, защото мъжът ми е от България.",
            "Утре ще говорим с майка му на кафе.",
          ],
        },
        {
          type: "choice",
          prompt: "**Дана е от…**",
          options: ["Израел", "България", "София"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Къде живее Дана сега?**",
          options: ["в София", "в Тел Авив", "в Пловдив"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Защо Дана учи български?**",
          options: [
            "Защото мъжът ѝ е от България.",
            "Защото е студентка.",
            "Защото работи в България.",
          ],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Какво ще прави Дана утре?** (прави = does)",
          options: [
            "Ще говори с майка му на кафе.",
            "Ще работи в Израел.",
            "Ще учи английски.",
          ],
          correct: 0,
        },
        {
          type: "exercise",
          prompt: "Now you. Say: **I speak a little, but I understand a lot.**",
          answer: "Говоря малко, но разбирам много",
        },
        {
          type: "exercise",
          prompt: "**Her husband is from Bulgaria.**",
          answer: "Мъжът ѝ е от България",
          accept: ["мъжът и е от България"],
        },
        {
          type: "exercise",
          prompt: "**She doesn't speak English.**",
          answer: "Тя не говори английски",
          accept: ["не говори английски"],
        },
        {
          type: "exercise",
          prompt: "**Tomorrow we will speak Bulgarian.**",
          answer: "Утре ще говорим български",
          accept: ["ще говорим български утре"],
        },
        {
          type: "note",
          title: "Look what you can do",
          body:
            "You can introduce yourself, want, have, ask, refuse, describe, own, like, time-travel between yesterday and tomorrow, be polite in two registers, and *read a story in Bulgarian*.\n\nWhere to next: keep replaying lessons until answers come without thinking; read children's books; put Bulgarian music on; and speak — badly, happily, daily. **Не е нужно да е перфектно** — it doesn't have to be perfect.",
        },
        {
          type: "exercise",
          prompt: "One last sentence, and mean it: **I want to speak Bulgarian every day.** (every day = всеки ден)",
          answer: "Искам да говоря български всеки ден",
        },
        {
          type: "note",
          title: "Хайде!",
          body:
            "**Хайде** — 'come on, let's go!' — Bulgarian's favorite word of motion, the Balkan cousin of יאללה. It's also this app's name.\n\n**Хайде — да говорим български!** Успех! (Good luck!)",
          speak: ["Хайде — да говорим български!", "Успех!"],
        },
      ],
    },
  ],
};
