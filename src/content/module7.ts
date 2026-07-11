import type { Module } from "./types";

export const module7: Module = {
  id: "m7",
  title: "Being Bulgarian",
  blurb:
    "The polite 'you', the art of liking things, and a story that proves you can read Bulgarian.",
  lessons: [
    {
      id: "m7l1",
      title: "The polite you",
      subtitle: "Вие, Здравейте, Как сте",
      items: [
        {
          type: "note",
          title: "You already know this form",
          body:
            "Remember **Вие сте** - 'you all are'? It doubles as the polite form for one person. A stranger, a boss, anyone older - you use the same вие-forms you already know.\n\nFrench has *vous*. Bulgarian has **Вие**. Same idea, and you've already practiced every verb form you need.",
          he: "Hebrew doesn't have a polite 'you' - everyone is אתה/את regardless of status. Bulgarian has two levels: ти for friends, Вие for respect.",
          ru: "This is exactly Russian вы - same situations, same verb forms. Zero relearning.",
        },
        {
          type: "note",
          title: "Polite in practice",
          body:
            "Every verb you know has a вие-form you've been using for 'you all'. Now deploy those same forms for 'you, sir/madam':\n\n- **Говорите ли английски?** - Do you speak English?\n- **Как се казвате?** - What's your name?\n- **Къде живеете?** - Where do you live?\n- **Как сте?** - How are you?",
          speak: ["Говорите ли английски?", "Как се казвате?", "Къде живеете?", "Как сте?"],
        },
        {
          type: "exercise",
          prompt: "Ask a stranger politely: **Do you speak English?**",
          answer: "Говорите ли английски?",
          hint: "Polite = вие-form: говорите + ли + английски.",
          after: "The single most useful sentence in Bulgaria. You'll say this one a lot.",
        },
        {
          type: "exercise",
          prompt: "Ask politely: **What's your name?**",
          answer: "Как се казвате?",
          hint: "Как се + the вие-form of казвам (казвате).",
          after: "Notice се still lands before the verb - same dance as always.",
        },
        {
          type: "exercise",
          prompt: "Ask politely: **How are you?**",
          answer: "Как сте?",
          hint: "Как + the вие-form of съм (сте).",
          after: "**Как сте?** is the default greeting to anyone you'd address with Вие.",
        },
        {
          type: "note",
          title: "Your greetings, collected",
          body:
            "You've already met all of these. Here they are in one place:\n\n- **Добро утро** - good morning\n- **Добър ден** - good day\n- **Добър вечер** - good evening\n- **Лека нощ** - good night\n- **Довиждане** - goodbye\n- **Здравей** - hi (to a friend)\n\nWith Вие, two greetings shift:\n\n- **Здравейте** - hi (polite or plural)\n- **Как сте?** - how are you? (polite)",
          speak: ["Здравейте, как сте?"],
        },
        {
          type: "choice",
          prompt: "You meet your friend's grandmother for the first time. You say...",
          options: ["Здравейте, как сте?", "Здравей, как си?", "Добро утро, как си?"],
          correct: 0,
          after: "Grandmother = polite. Здравейте + Как сте. Always safe.",
        },
        {
          type: "exercise",
          prompt: "Ask politely: **Do you want coffee?**",
          answer: "Искате ли кафе?",
          hint: "Polite = вие-form of искам: искате + ли + кафе.",
          after: "You're not learning new verbs - just shifting to the вие-form you already own. That's masked repetition at work.",
        },
        {
          type: "exercise",
          prompt: "Ask politely: **Where do you live?**",
          answer: "Къде живеете?",
          hint: "Къде + the вие-form of живея (живеете).",
        },
        {
          type: "note",
          title: "Наздраве!",
          body:
            "**Наздраве** - literally 'to health' - is both *cheers!* with a raised glass and *bless you!* after a sneeze. With this and Вие, your social Bulgarian is complete.",
          speak: ["Наздраве!"],
        },
      ],
    },
    {
      id: "m7l2",
      title: "Liking things",
      subtitle: "харесва ми, вкусно, още",
      items: [
        {
          type: "note",
          title: "It pleases me",
          body:
            "Bulgarian doesn't say 'I like it'. It says 'it pleases me':\n\n**Харесва ми.** - I like it. (literally: it-pleases to-me)\n\nThat **ми** is the same dative ми from **Приятно ми е** - 'pleasant to me'. Same word, same job.",
          speak: ["Харесва ми.", "Не ми харесва."],
          ru: "This is exactly мне нравится - same construction, same dative logic. You already think this way.",
        },
        {
          type: "exercise",
          prompt: "**I like it.**",
          answer: "Харесва ми",
          hint: "It pleases me: харесва + ми.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you like it?**",
          answer: "Харесва ли ти?",
          hint: "Drop ли after харесва, then ти (dative 'to you').",
          after: "The ли slips in between харесва and ти - same clitic dance you've been doing since Module 1.",
        },
        {
          type: "note",
          title: "Naming the thing you like",
          body:
            "The liked thing is the grammatical subject - it's doing the pleasing:\n\n**България ми харесва.** - I like Bulgaria. (Bulgaria pleases me)\n\nWord order is flexible: Харесва ми България / България ми харесва - both fine.",
          speak: ["България ми харесва."],
        },
        {
          type: "exercise",
          prompt: "**I like Bulgaria.**",
          answer: "България ми харесва",
          accept: ["харесва ми България"],
          hint: "The liked thing is subject: България + ми + харесва.",
        },
        {
          type: "exercise",
          prompt: "**I like the coffee.**",
          answer: "Кафето ми харесва",
          accept: ["харесва ми кафето"],
          hint: "Кафето + ми + харесва.",
          after: "Same pattern, different subject. The coffee does the pleasing, you receive it.",
        },
        {
          type: "note",
          title: "The direct version - for people",
          body:
            "**Харесвам** also works as a plain transitive verb, mostly for people:\n\n**Харесвам те.** - I like you.\n\nScale of affection: харесвам те → **обичам те**. Use responsibly.",
          speak: ["Харесвам те.", "Обичам те."],
        },
        {
          type: "exercise",
          prompt: "**I like you.**",
          answer: "Харесвам те",
          hint: "Direct verb for people: харесвам + те.",
        },
        {
          type: "note",
          title: "Table talk",
          body:
            "Two words that belong at every Bulgarian table:\n\n- **вкусно** - tasty, delicious\n- **още** - more, still\n\n**Много е вкусно!** - It's delicious!\n**Искаш ли още кафе?** - Want more coffee?",
          speak: ["Много е вкусно!", "Искаш ли още кафе?"],
        },
        {
          type: "exercise",
          prompt: "**It's very tasty!**",
          answer: "Много е вкусно!",
          hint: "е can't be first - lead with много.",
          after: "The clitic rule saves you again: много е вкусно, never е много вкусно.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want more coffee?**",
          answer: "Искаш ли още кафе?",
          hint: "Искаш + ли + още + кафе.",
        },
        {
          type: "exercise",
          prompt: "**I think that the coffee is very tasty.**",
          answer: "Мисля, че кафето е много вкусно",
          hint: "мисля (I think) + че (that) + много вкусно (very tasty).",
        },
        {
          type: "exercise",
          prompt: "**It's tasty, right?**",
          answer: "Вкусно е, нали?",
          hint: "вкусно (tasty) + е + нали (right?).",
        },
        {
          type: "note",
          title: "ми - three encounters, one principle",
          body:
            "You've seen **ми** in three different disguises now:\n\n- **Приятно ми е** - pleasant TO ME\n- **колата ми** - MY car\n- **харесва ми** - it pleases ME\n\nSame small word, same job every time: pointing at you. Whether it means 'to me' or 'my' depends on context, but the underlying logic is one thing - *this concerns me*.",
          he: "Hebrew's ל- does a similar triple duty: נעים **ל**י (pleasant to me), **של**י (my), and the dative **ל**י in general. Same one-word-many-jobs logic.",
        },
        {
          type: "choice",
          prompt: "**Кафето ми харесва** means...",
          options: ["I like the coffee.", "My coffee is good.", "The coffee is mine."],
          correct: 0,
          after: "Харесва ми = 'it pleases me' = I like it. The coffee is doing the pleasing - you're just receiving.",
        },
      ],
    },
    {
      id: "m7l3",
      title: "Your first Bulgarian story",
      subtitle: "Reading, understanding, celebrating",
      items: [
        {
          type: "note",
          title: "Read this",
          body:
            "Everything below uses only what you've learned. Read it slowly - out loud if you can. Then answer the questions.\n\n**Здравейте! Казвам се Ана. Аз съм от Канада. Вчера пътувах до София. Градът е голям и много хубав! Уча български, защото обичам България. Говоря малко, но разбирам много. Извинете, колко струва кафето? Едно кафе с мляко, моля. Много е вкусно! Утре ще уча още български. България ми харесва!**",
          speak: [
            "Здравейте! Казвам се Ана. Аз съм от Канада. Вчера пътувах до София.",
            "Градът е голям и много хубав! Уча български, защото обичам България.",
            "Говоря малко, но разбирам много. Извинете, колко струва кафето?",
            "Едно кафе с мляко, моля. Много е вкусно! Утре ще уча още български. България ми харесва!",
          ],
        },
        {
          type: "choice",
          prompt: "**Ана е от...**",
          options: ["Канада", "България", "София"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Какво иска Ана?**",
          options: ["Кафе с мляко", "Чай", "Бира"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Защо Ана учи български?**",
          options: [
            "Защото обича България.",
            "Защото работи в София.",
            "Защото е студентка.",
          ],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**Кафето е...**",
          options: ["много вкусно", "малко", "голямо"],
          correct: 0,
        },
        {
          type: "exercise",
          prompt: "Now you. Say: **Yesterday I traveled to Sofia.**",
          answer: "Вчера пътувах до София",
          hint: "Вчера + past of пътувам (пътувах) + до + София.",
          after: "Past tense -х doing its job. Вчера пътувах - yesterday I traveled.",
        },
        {
          type: "exercise",
          prompt: "**I speak a little, but I understand a lot.**",
          answer: "Говоря малко, но разбирам много",
          hint: "Говоря малко, но разбирам много.",
          after: "This is the most honest sentence in language learning. And the most hopeful.",
        },
        {
          type: "exercise",
          prompt: "**I like Bulgaria.**",
          answer: "България ми харесва",
          accept: ["харесва ми България"],
          hint: "България + ми + харесва.",
        },
        {
          type: "exercise",
          prompt:
            "One last sentence, and mean it: **I want to speak Bulgarian every day.** (every day = всеки ден)",
          answer: "Искам да говоря български всеки ден",
          hint: "Искам + да говоря + български + всеки ден.",
          after:
            "**Всеки ден.** You just said something real in Bulgarian. That's not a drill - that's a decision.",
        },
        {
          type: "exercise",
          prompt: "**We want to speak Bulgarian!**",
          answer: "Искаме да говорим български!",
          accept: ["ние искаме да говорим български"],
          hint: "искаме (we want) + да говорим (to speak).",
        },
        {
          type: "note",
          title: "Хайде - да говорим български!",
          body:
            "**Хайде** - 'come on, let's go!' - Bulgarian's favorite word of motion.\n\nYou can introduce yourself, want, have, ask, refuse, describe, like, time-travel between yesterday and tomorrow, be polite in two registers, and read a story in Bulgarian. Seven modules ago you didn't know a single Cyrillic letter.\n\n**Хайде - да говорим български!** Успех!",
          speak: ["Хайде - да говорим български!", "Успех!"],
          he: "Хайде is the Balkan equivalent of יאללה - same word, same usage.",
        },
      ],
    },
  ],
};
