import type { Module } from "./types";

export const module6: Module = {
  id: "m6",
  title: "Asking and connecting",
  blurb:
    "Question words crack open conversations. Numbers get you fed. And a handful of small words turn your sentences into actual thought.",
  lessons: [
    {
      id: "m6l1",
      title: "What and who",
      subtitle: "какво, кой, коя - and a warm-up",
      items: [
        {
          type: "exercise",
          prompt: "Warm-up - no new words. **Yesterday I worked.**",
          answer: "Вчера работих",
          accept: ["работих вчера"],
          hint: "Past of работя: работих. Вчера = yesterday.",
          after: "Still here. The -х past is yours now.",
        },
        {
          type: "exercise",
          prompt: "**Tomorrow I will speak Bulgarian.**",
          answer: "Утре ще говоря български",
          accept: ["ще говоря български утре"],
          hint: "Future = ще + present.",
        },
        {
          type: "exercise",
          prompt: "**She was here, right?**",
          answer: "Тя беше тук, нали?",
          hint: "беше = was (he/she), нали = right?",
          after:
            "Past, future, tag questions - all still in your pocket. Now let's put them to work.",
        },
        {
          type: "note",
          title: "какво - what",
          body:
            "Your first question word: **какво** = what.\n\n- **Какво искаш?** - What do you want?\n- **Какво е това?** - What is this?\n\n**Това** = this (or 'that' - one word handles both). No ли needed - the question word does the asking all by itself.",
          speak: ["Какво искаш?", "Какво е това?"],
          he: "Like מה - it sits at the front and the sentence follows.",
          ru: "Какво and что share the same Slavic root.",
        },
        {
          type: "exercise",
          prompt: "**What do you want?**",
          answer: "Какво искаш?",
          hint: "Какво + the you-form of искам.",
        },
        {
          type: "exercise",
          prompt: "**What is this?**",
          answer: "Какво е това?",
          hint: "Какво е + това.",
          after:
            "**Това** will become one of your most-used words. It points at everything.",
        },
        {
          type: "note",
          title: "кой and коя - who",
          body:
            "**Кой** = who (masculine). Like adjectives, it dresses for gender:\n\n- **Кой е той?** - Who is he?\n- **Коя е тя?** - Who is she?\n\nIn everyday talk кой handles most 'who' questions regardless of gender. Коя shows up when you're specifically asking about a woman.",
          speak: ["Кой е той?", "Коя е тя?"],
        },
        {
          type: "exercise",
          prompt: "**Who is he?**",
          answer: "Кой е той?",
          hint: "Кой + е + той.",
        },
        {
          type: "exercise",
          prompt: "**Who is she?**",
          answer: "Коя е тя?",
          hint: "Feminine form: коя.",
          after: "кой/коя - same masculine/feminine pattern as нов/нова.",
        },
        {
          type: "exercise",
          prompt: "Mix it up: **What do you have?**",
          answer: "Какво имаш?",
          hint: "Какво + the you-form of имам.",
        },
      ],
    },
    {
      id: "m6l2",
      title: "Why and because",
      subtitle: "кога, защо, защото, мисля, че",
      items: [
        {
          type: "note",
          title: "кога - when",
          body:
            "**Кога** = when. Same pattern as какво - question word up front, normal sentence after:\n\n**Кога работиш?** - When do you work?",
          speak: ["Кога работиш?"],
          ru: "Кога = когда minus the -да. The cognate parade continues: какво≈что, кой≈кто, кога≈когда.",
        },
        {
          type: "exercise",
          prompt: "**When do you work?**",
          answer: "Кога работиш?",
          hint: "Кога + the you-form of работя.",
        },
        {
          type: "exercise",
          prompt: "**When will she be here?**",
          answer: "Кога ще е тук?",
          accept: [
            "кога тя ще е тук",
            "кога ще бъде тук",
            "кога тя ще бъде тук",
          ],
          hint: "Кога + future of съм (ще е).",
          after:
            "You just combined a question word with the future tense. Everything you know keeps multiplying.",
        },
        {
          type: "note",
          title: "защо and защото - a matched pair",
          body:
            "**Защо** = why. **Защото** = because. They rhyme on purpose - the question carries its own answer inside it:\n\n- **Защо учиш български?** - Why are you learning Bulgarian?\n- **Защото обичам България.** - Because I love Bulgaria.",
          speak: ["Защо учиш български?", "Защото обичам България."],
          he: "защо/защото works like למה/כי - the question and its answer are a natural pair. But in Bulgarian they rhyme, so you can't forget one without losing the other.",
        },
        {
          type: "exercise",
          prompt: "**Why are you learning Bulgarian?**",
          answer: "Защо учиш български?",
          hint: "Защо + учиш + български.",
        },
        {
          type: "exercise",
          prompt: "Answer: **Because I love Bulgaria.**",
          answer: "Защото обичам България",
          hint: "Защото + обичам + България.",
          after: "Probably true for most people taking this course.",
        },
        {
          type: "note",
          title: "че - that (the conjunction)",
          body:
            "**Че** = that (the conjunction, not the pointing word). A comma always sits before it.\n\nNew verb: **мисля** = I think (и-family: мисля, мислиш, мисли...).\n\n**Мисля, че говориш добре.** - I think that you speak well.\n\nEnglish drops 'that' half the time. Bulgarian keeps **че** every time.",
          speak: ["Мисля, че говориш добре."],
        },
        {
          type: "exercise",
          prompt: "**I think that you speak well.**",
          answer: "Мисля, че говориш добре",
          hint: "Мисля, че + говориш + добре. Don't forget the comma.",
        },
        {
          type: "exercise",
          prompt: "**I think that she is here.**",
          answer: "Мисля, че тя е тук",
          accept: ["мисля, че е тук"],
          hint: "Мисля, че + тя е тук.",
        },
        {
          type: "exercise",
          prompt: "**Why does he want to work here?**",
          answer: "Защо той иска да работи тук?",
          accept: ["защо иска да работи тук"],
          hint: "Защо + той иска да работи + тук.",
          after:
            "You combined a question word with the да-construction. These pieces snap together beautifully.",
        },
      ],
    },
    {
      id: "m6l3",
      title: "Connecting thoughts",
      subtitle: "а, или, знам, може би",
      items: [
        {
          type: "note",
          title: "а - the other 'but'",
          body:
            "You know **но** ('but'). Bulgarian has a softer contrast word: **а** - more like 'whereas' or 'and on the other hand':\n\n**Аз говоря български, а тя говори английски.** - I speak Bulgarian, and she speaks English.\n\n**Но** is for surprises ('I tried, but it didn't work'). **А** just shows two sides of the same picture.",
          speak: ["Аз говоря български, а тя говори английски."],
          ru: "This is exactly Russian а - same feel, same position, same comma. Free of charge.",
        },
        {
          type: "exercise",
          prompt:
            "**I live here, and she lives there.** (contrast - use а)",
          answer: "Аз живея тук, а тя живее там",
          accept: ["живея тук, а тя живее там"],
          hint: "...тук, а тя живее там.",
        },
        {
          type: "note",
          title: "или - or",
          body:
            "**Или** = or. Simple, essential:\n\n**Чай или кафе?** - Tea or coffee?",
          speak: ["Чай или кафе?"],
        },
        {
          type: "exercise",
          prompt: "**Tea or coffee?**",
          answer: "Чай или кафе?",
          hint: "Чай + или + кафе.",
        },
        {
          type: "exercise",
          prompt: "**Today or tomorrow?**",
          answer: "Днес или утре?",
          hint: "Днес + или + утре.",
        },
        {
          type: "note",
          title: "че reports, да wishes",
          body:
            "You now have two small words that link verbs. Here's how they divide the work:\n\n- **че** reports a fact: Знам, **че** тя е тук. (I know that she is here.)\n- **да** drives a wish: Искам **да** е тук. (I want her to be here.)\n\nAfter thinking and knowing - **че**. After wanting and trying - **да**. You've been using да since Module 2. Now you can see why че needed its own entrance.",
          speak: ["Знам, че тя е тук.", "Искам да е тук."],
        },
        {
          type: "note",
          title: "знам - I know",
          body:
            "New verb: **знам** = I know. It's an а-family verb with a small twist - **е** sneaks into the middle: знам, зна**е**ш, зна**е**, зна**е**м, зна**е**те, зна**я**т.\n\n**Знам, че говориш български.** - I know that you speak Bulgarian.",
          speak: ["Знам, че говориш български.", "Не знам."],
        },
        {
          type: "exercise",
          prompt: "**I know that she is here.**",
          answer: "Знам, че тя е тук",
          accept: ["знам, че е тук"],
          hint: "Знам, че + тя е тук. Comma before че.",
        },
        {
          type: "exercise",
          prompt: "**I don't know.**",
          answer: "Не знам",
          hint: "не + знам.",
          after:
            "Second most useful sentence in any language, right after 'I don't understand.'",
        },
        {
          type: "exercise",
          prompt:
            "**I think that you speak well, but I don't understand everything.** (everything = всичко)",
          answer: "Мисля, че говориш добре, но не разбирам всичко",
          hint: "Мисля, че ..., но не разбирам + всичко.",
          after:
            "Six words of glue - че, но, не - holding together things you already knew. That's how real speech starts to form.",
        },
        {
          type: "note",
          title: "може би - maybe",
          body:
            "**Може би** = maybe (literally 'it-can be'). The most Balkan of answers.\n\n**Може би утре.** - Maybe tomorrow.",
          speak: ["Може би утре."],
        },
        {
          type: "exercise",
          prompt: "**Maybe tomorrow.**",
          answer: "Може би утре",
          hint: "Може би + утре.",
        },
        {
          type: "exercise",
          prompt: "**I think maybe she knows.**",
          answer: "Мисля, че може би тя знае",
          accept: ["мисля, че може би знае"],
          hint: "Мисля, че може би + тя знае.",
          after:
            "Four layers of meaning - мисля + че + може би + знае - all in one sentence. You're chaining thoughts like a real speaker.",
        },
      ],
    },
    {
      id: "m6l4",
      title: "Numbers and counting",
      subtitle: "колко, един-пет, две кафета",
      items: [
        {
          type: "note",
          title: "колко - how much / how many",
          body:
            "**Колко** = how much / how many. One word does both jobs.\n\nNew verb: **струва** = it costs. You'll mostly hear just this one form.\n\n**Колко струва?** - How much does it cost? The survival question.",
          speak: ["Колко струва?"],
          ru: "Колко = сколько (same root). Струва = стоит (same root).",
        },
        {
          type: "exercise",
          prompt: "**How much does it cost?**",
          answer: "Колко струва?",
          hint: "Колко + струва.",
          after:
            "You'll use this one constantly. Bulgarians appreciate hearing it in Bulgarian instead of watching you point and look helpless.",
        },
        {
          type: "note",
          title: "Counting to five",
          body:
            "Five numbers, and you can order anything:\n\n**едно** - one\n**две** - two\n**три** - three\n**четири** - four\n**пет** - five",
          speak: ["едно, две, три, четири, пет"],
        },
        {
          type: "exercise",
          prompt: "Count from one to five.",
          answer: "едно, две, три, четири, пет",
          accept: [
            "един две три четири пет",
            "едно две три четири пет",
            "един, две, три, четири, пет",
          ],
          hint: "едно, две, три, четири, пет.",
        },
        {
          type: "note",
          title: "One and two dress for gender",
          body:
            "Like adjectives, 'one' and 'two' match the noun:\n\n- **един** чай (m) - **една** бира (f) - **едно** кафе (n)\n- **два** (m) / **две** (f and n): две кафета, две бири\n\nThree, four, five don't change. For ordering, **едно** and **две** cover most of what you need - кафе and вино are neuter, бира is feminine.",
          speak: ["един чай", "една бира", "едно кафе", "две кафета"],
          he: "Same idea as אחד/אחת and שניים/שתיים - the low numbers carry gender, the higher ones stop caring.",
        },
        {
          type: "exercise",
          prompt: "**two coffees**",
          answer: "две кафета",
          hint: "кафе is neuter, so две. Plural: кафе → кафета.",
        },
        {
          type: "exercise",
          prompt: "**three beers**",
          answer: "три бири",
          hint: "бира → бири (feminine plural -и).",
        },
        {
          type: "exercise",
          prompt:
            "Order at a cafe: **Can I get two coffees and one tea, please?**",
          answer: "Може ли две кафета и един чай, моля?",
          accept: [
            "може ли две кафета и един чай моля",
            "две кафета и един чай, моля",
          ],
          hint: "Може ли + две кафета + и + един чай, + моля.",
          after:
            "That sentence works exactly as written in any cafe in Bulgaria. Not textbook Bulgarian - real Bulgarian.",
        },
        {
          type: "exercise",
          prompt:
            "**How much do three coffees cost?** (plural of струва: струват)",
          answer: "Колко струват три кафета?",
          accept: ["колко струват трите кафета"],
          hint: "Колко + струват (plural) + три кафета.",
          after:
            "Plural of струва is **струват** - same -ат ending you know from other verbs.",
        },
        {
          type: "note",
          title: "Five numbers, infinite orders",
          body:
            "**Колко**, numbers one through five, and the plural endings you've been absorbing all course - that's your ordering toolkit. The cashier does the hard part: understanding the answer.",
        },
      ],
    },
    {
      id: "m6l5",
      title: "At the cafe",
      subtitle: "за, до, извинете, заповядайте",
      items: [
        {
          type: "note",
          title: "за - for",
          body:
            "**За** = for (and sometimes 'about'). After prepositions, pronouns change to their strong forms:\n\n- **мен** - me\n- **теб** - you\n\n**Това е за теб.** - This is for you.\n**За мен кафе, моля.** - Coffee for me, please.",
          speak: ["Това е за теб.", "За мен кафе, моля."],
          he: "Strong pronouns after prepositions - like Hebrew בשבילי, where the preposition takes the full form.",
        },
        {
          type: "exercise",
          prompt: "**This is for you.**",
          answer: "Това е за теб",
          accept: ["това е за тебе"],
          hint: "Това е за + strong form of 'you' (теб).",
        },
        {
          type: "exercise",
          prompt: "**Coffee for me, please.**",
          answer: "За мен кафе, моля",
          accept: ["кафе за мен, моля", "за мен кафе моля"],
          hint: "За мен + кафе, + моля.",
        },
        {
          type: "note",
          title: "до - next to",
          body:
            "**До** = next to (also 'until' - but 'next to' comes up first).\n\n**Тя е до мен.** - She is next to me.",
          speak: ["Тя е до мен."],
        },
        {
          type: "exercise",
          prompt: "**She is next to me.**",
          answer: "Тя е до мен",
          hint: "Тя е до + мен (strong form).",
        },
        {
          type: "note",
          title: "Two cafe essentials",
          body:
            "**Извинете** = excuse me (polite). The word that opens every interaction with a stranger.\n\n**Заповядайте** = here you go. The server says it when bringing your order. It can also mean 'come in,' 'go ahead,' or 'please sit down' - a Swiss Army knife of Bulgarian hospitality.\n\nBoth are polite forms. Use them as-is.",
          speak: ["Извинете!", "Заповядайте."],
        },
        {
          type: "exercise",
          prompt:
            "Get a server's attention: **Excuse me, can I get two coffees, please?**",
          answer: "Извинете, може ли две кафета, моля?",
          accept: ["извинете може ли две кафета моля"],
          hint: "Извинете, + може ли + две кафета, + моля.",
          after:
            "Извинете opens the door, може ли asks politely, моля closes with warmth. Three words of courtesy in one sentence.",
        },
        {
          type: "choice",
          prompt:
            "The server brings your coffee and says **Заповядайте.** This means:",
          options: ["Here you go.", "What would you like?", "How much is it?"],
          correct: 0,
          after:
            "**Заповядайте** - you'll hear it dozens of times a day in Bulgaria. It always means something generous.",
        },
        {
          type: "exercise",
          prompt:
            "Complete the scene. The server brought your order. You ask the price, they answer, you thank them.\n\nWrite your two lines: **How much does it cost?** and **Thank you!**",
          answer: "Колко струва? Благодаря!",
          accept: [
            "колко струва? благодаря",
            "колко струва благодаря",
          ],
          hint: "Колко струва? + Благодаря!",
          after:
            "You just lived a complete cafe scene in Bulgarian. Извинете, може ли, моля, заповядайте, колко струва, благодаря - six moves, one real interaction. You're ready for Sofia.",
        },
      ],
    },
  ],
};
