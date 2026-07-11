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
          after: "Утре swapped in for вчера, and ще flipped the tense. Same sentence, different day.",
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
          after: "Какво just walked up to искаш, the verb you already had, and the question wrote itself.",
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
          after: "Кой took какво's old spot up front. Same slot, new question word.",
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
          after: "какво stays put at the front, and any verb you know can follow it.",
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
          after: "Кога slid into the same front-of-sentence seat какво and кой already broke in for you.",
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
          after: "Защо, then the plain sentence you'd have said anyway. No twist required.",
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
          title: "мисля - I think",
          body:
            "New verb: **мисля** = I think. It's an и-family verb: мисля, мислиш, мисли...\n\n**Мисля, че тя е тук** will come shortly - but first, let's just get мисля under your fingers.\n\n**Не мисля.** - I don't think so.",
          speak: ["Не мисля."],
        },
        {
          type: "exercise",
          prompt: "**I don't think so.**",
          answer: "Не мисля",
          hint: "не + мисля.",
          after: "мисля settled. Now let's give it something to think about.",
        },
        {
          type: "note",
          title: "че - that (the conjunction)",
          body:
            "**Че** = that (the conjunction, not the pointing word). A comma always sits before it.\n\n**Мисля, че говориш добре.** - I think that you speak well.\n\nEnglish drops 'that' half the time. Bulgarian keeps **че** every time.",
          speak: ["Мисля, че говориш добре."],
        },
        {
          type: "exercise",
          prompt: "**I think that you speak well.**",
          answer: "Мисля, че говориш добре",
          hint: "Мисля, че + говориш + добре. Don't forget the comma.",
          after: "Мисля opens it, че links it, and the rest is a sentence you already knew cold.",
        },
        {
          type: "exercise",
          prompt: "**I think that she is here.**",
          answer: "Мисля, че тя е тук",
          accept: ["мисля, че е тук"],
          hint: "Мисля, че + тя е тук.",
          after: "Same че doing the same job - reporting a fact, not wishing for one.",
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
          after: "Two people, two places, one а sitting between them showing the contrast.",
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
          after: "или between two nouns you already own. That's the entire lesson.",
        },
        {
          type: "exercise",
          prompt: "**Today or tomorrow?**",
          answer: "Днес или утре?",
          hint: "Днес + или + утре.",
          after: "Same или, different pair of words. The construction doesn't care what you plug in.",
        },
        {
          type: "note",
          title: "знам - I know",
          body:
            "New verb: **знам** = I know. It's an а-family verb with a small twist - **е** sneaks into the middle: знам, зна**е**ш, зна**е**, зна**е**м, зна**е**те, зна**я**т.\n\n**Не знам.** - I don't know. Second most useful sentence in any language.",
          speak: ["Не знам."],
        },
        {
          type: "exercise",
          prompt: "**I don't know.**",
          answer: "Не знам",
          hint: "не + знам.",
          after:
            "Не знам - you'll use it daily, and now you own it.",
        },
        {
          type: "exercise",
          prompt: "**She knows.** (she-form of знам)",
          answer: "Тя знае",
          accept: ["знае"],
          hint: "знам → знаеш → знае (he/she).",
          after: "знае - that е sneaking in, just like the note warned you.",
        },
        {
          type: "note",
          title: "че reports, да wishes",
          body:
            "You now have two small words that link verbs. Here's how they divide the work:\n\n- **че** reports a fact: Знам, **че** тя е тук. (I know that she is here.)\n- **да** drives a wish: Искам **да** е тук. (I want her to be here.)\n\nAfter thinking and knowing - **че**. After wanting and trying - **да**. You've been using да since Module 2. Now you can see why че needed its own entrance.",
          speak: ["Знам, че тя е тук.", "Искам да е тук."],
        },
        {
          type: "exercise",
          prompt: "**I know that she is here.**",
          answer: "Знам, че тя е тук",
          accept: ["знам, че е тук"],
          hint: "Знам, че + тя е тук. Comma before че.",
          after: "знам instead of мисля, but че still does the same linking work.",
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
          after: "може би plus a time word - the shortest hedge in the language.",
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
          title: "едно and две - one and two",
          body:
            "Your first two numbers:\n\n**едно** - one\n**две** - two\n\n**Едно кафе, моля.** - One coffee, please.\n**Две бири, моля.** - Two beers, please.",
          speak: ["Едно кафе, моля.", "Две бири, моля."],
        },
        {
          type: "exercise",
          prompt: "**One coffee, please.**",
          answer: "Едно кафе, моля",
          accept: ["едно кафе моля"],
          hint: "Едно + кафе, + моля.",
          after: "едно кафе - you just ordered your first coffee in Bulgarian.",
        },
        {
          type: "exercise",
          prompt: "**Two beers, please.**",
          answer: "Две бири, моля",
          accept: ["две бири моля"],
          hint: "Две + бири, + моля.",
          after: "две бири - your second order, still effortless.",
        },
        {
          type: "note",
          title: "три, четири, пет - three, four, five",
          body:
            "Three more numbers finish the set:\n\n**три** - three\n**четири** - four\n**пет** - five\n\nThese never change for gender. They just sit in front of the noun.",
          speak: ["три, четири, пет"],
        },
        {
          type: "exercise",
          prompt: "**Three coffees, please.** (plural of кафе: кафета)",
          answer: "Три кафета, моля",
          accept: ["три кафета моля"],
          hint: "Три + кафета, + моля.",
          after: "три doesn't change - it sits unchanged in front of whatever noun you need.",
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
          after: "Five numbers under your belt. Now let's look at how the first two dress for gender.",
        },
        {
          type: "note",
          title: "един, една, едно - one dresses for gender",
          body:
            "Like adjectives, 'one' matches the noun's gender:\n\n- **един** чай (m) - one tea\n- **една** бира (f) - one beer\n- **едно** кафе (n) - one coffee\n\nYou already know кафе and вино are neuter (едно), бира is feminine (една), чай is masculine (един).",
          speak: ["един чай", "една бира", "едно кафе"],
          he: "Same idea as אחד/אחת - the low numbers carry gender.",
        },
        {
          type: "exercise",
          prompt: "**one tea** (чай is masculine)",
          answer: "един чай",
          hint: "Masculine = един.",
          after: "един for masculine - same pattern as нов/нова/ново, just applied to a number.",
        },
        {
          type: "exercise",
          prompt: "**one beer** (бира is feminine)",
          answer: "една бира",
          hint: "Feminine = една.",
          after: "една бира - feminine form, matching бира's -а ending. Gender keeps being predictable.",
        },
        {
          type: "note",
          title: "два and две - two dresses for gender",
          body:
            "Two also changes: **два** (masculine) / **две** (feminine and neuter).\n\n- **два** чая (m) - two teas\n- **две** бири (f) - two beers\n- **две** кафета (n) - two coffees\n\nFor most cafe orders you'll use **две** - кафе and бира both take it.",
          speak: ["два чая", "две бири", "две кафета"],
        },
        {
          type: "exercise",
          prompt: "**two coffees**",
          answer: "две кафета",
          hint: "кафе is neuter, so две. Plural: кафе → кафета.",
          after: "две matched кафе's neuter gender, and кафета carried its own plural along for the ride.",
        },
        {
          type: "exercise",
          prompt: "**three beers**",
          answer: "три бири",
          hint: "бира → бири (feminine plural -и).",
          after: "три doesn't care about gender, so it sits unchanged in front of бири, кафета, anything.",
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
          title: "за and мен - for me",
          body:
            "**За** = for (and sometimes 'about'). After prepositions, pronouns change to their strong forms. First up:\n\n- **мен** - me (the strong form of аз)\n\n**За мен кафе, моля.** - Coffee for me, please.",
          speak: ["За мен кафе, моля."],
          he: "Strong pronouns after prepositions - like Hebrew בשבילי, where the preposition takes the full form.",
        },
        {
          type: "exercise",
          prompt: "**Coffee for me, please.**",
          answer: "За мен кафе, моля",
          accept: ["кафе за мен, моля", "за мен кафе моля"],
          hint: "За мен + кафе, + моля.",
          after: "за мен up front, кафе and моля doing what they always do.",
        },
        {
          type: "note",
          title: "теб - you (strong form)",
          body:
            "The strong form of ти (you) is **теб**. Same job as мен, for the other person.\n\n**Това е за теб.** - This is for you.",
          speak: ["Това е за теб."],
        },
        {
          type: "exercise",
          prompt: "**This is for you.**",
          answer: "Това е за теб",
          accept: ["това е за тебе"],
          hint: "Това е за + strong form of 'you' (теб).",
          after: "Това е за теб - за pulled теб into its strong form, just like it did with мен.",
        },
        {
          type: "exercise",
          prompt: "**A beer for me and a coffee for you, please.**",
          answer: "Една бира за мен и едно кафе за теб, моля",
          accept: [
            "бира за мен и кафе за теб, моля",
            "една бира за мен и едно кафе за теб моля",
          ],
          hint: "Една бира за мен + и + едно кафе за теб, + моля.",
          after: "Both strong pronouns in one sentence - за мен, за теб. Same slot, different person.",
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
          after: "до + мен, the same strong pronoun за just taught you, now behind a different preposition.",
        },
        {
          type: "note",
          title: "извинете - excuse me",
          body:
            "**Извинете** = excuse me (polite). The word that opens every interaction with a stranger.\n\nIt's the polite form - use it as-is. You don't need to conjugate it.",
          speak: ["Извинете!"],
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
          type: "note",
          title: "заповядайте - here you go",
          body:
            "**Заповядайте** = here you go. The server says it when bringing your order. It can also mean 'come in,' 'go ahead,' or 'please sit down' - a Swiss Army knife of Bulgarian hospitality.\n\nYou won't say it much yourself - but you'll hear it dozens of times a day.",
          speak: ["Заповядайте."],
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
