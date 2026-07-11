import type { Module } from "./types";

export const module3: Module = {
  id: "m3",
  title: "Shapes and descriptions",
  blurb:
    "Can, must, please, thank you - and the aha moment when you see the pattern hiding in every noun ending.",
  lessons: [
    {
      id: "m3l1",
      title: "What you can already say",
      subtitle: "No new words",
      items: [
        {
          type: "note",
          title: "Breathe",
          body:
            "No new words in this lesson. Zero. Everything here is built from what you already know - you're just going to see how many sentences you can make by recombining it.\n\nThis should feel easy. If it does, that's because you actually know things.",
        },
        {
          type: "exercise",
          prompt: "**I want to learn Bulgarian.**",
          answer: "Искам да уча български",
          hint: "искам + да + уча + български - all words you know.",
          after: "Two verbs stitched with да. You didn't even hesitate, did you?",
        },
        {
          type: "exercise",
          prompt: "**She doesn't have a car.**",
          answer: "Тя няма кола",
          accept: ["няма кола"],
          hint: "The fused 'don't have' verb - нямам. She-form?",
          after: "Тя няма кола. Three words, and you reached for няма without thinking about it.",
        },
        {
          type: "exercise",
          prompt: "**He works here.**",
          answer: "Той работи тук",
          accept: ["работи тук"],
          hint: "работя is и-family - he-form is the bare stem: работи.",
          after: "работи - the и-family he/she form. The pattern is automatic now.",
        },
        {
          type: "exercise",
          prompt: "**The water is here.**",
          answer: "Водата е тук",
          hint: "Remember how сметката got that -та? Same thing: вода → водата.",
          after: "Водата - you added 'the' to a noun like you've been doing it for years.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you understand Bulgarian?**",
          answer: "Разбираш ли български?",
          hint: "разбираш + ли + български?",
          after: "A real question you could ask someone on the street right now.",
        },
        {
          type: "exercise",
          prompt: "**I want to speak Bulgarian well.**",
          answer: "Искам да говоря български добре",
          hint: "искам да говоря... добре goes at the end.",
          after: "Five words, all familiar. That's a real aspiration, not a textbook sentence.",
        },
        {
          type: "exercise",
          prompt: "**I don't have time today.**",
          answer: "Нямам време днес",
          accept: ["днес нямам време"],
          hint: "нямам + време (time) + днес (today).",
          after: "The most useful excuse in any language.",
        },
        {
          type: "exercise",
          prompt: "**They don't understand, but I speak a little.**",
          answer: "Те не разбират, но говоря малко",
          accept: [
            "те не разбират, но аз говоря малко",
            "не разбират, но говоря малко",
          ],
          hint: "they-form: разбират. Then но + I-form: говоря малко.",
          after:
            "That sentence has a subject switch, a negation, a conjunction, and an adverb. You built it from scratch.",
        },
        {
          type: "note",
          title: "What just happened",
          body:
            "You just built eight sentences from pieces you own. No new vocabulary, no new rules - just recombination. That's not memorizing. That's thinking in Bulgarian.\n\nNow that you know how much you can already do, let's add three more tools to the kit.",
        },
      ],
    },
    {
      id: "m3l2",
      title: "Can and must",
      subtitle: "мога, може ли, трябва да",
      items: [
        {
          type: "note",
          title: "I can: мога",
          body:
            "**Мога** = *I can*. This is a new verb family - the е-family. For now, just one form: **мога** (I can). When another action follows, да does its job, same as always: **Мога да говоря.** - I can speak.",
          speak: ["мога", "Мога да говоря."],
        },
        {
          type: "exercise",
          prompt: "**I can speak Bulgarian.**",
          answer: "Мога да говоря български",
          hint: "мога + да + говоря + български.",
          after:
            "Two verb families in one sentence - мога (е-family) and говоря (и-family), stitched with да.",
        },
        {
          type: "exercise",
          prompt: "**I can work.**",
          answer: "Мога да работя",
          hint: "мога + да + работя.",
          after: "Same pattern. Мога да + any verb you know.",
        },
        {
          type: "note",
          title: "You can: можеш",
          body:
            "The you-form is **можеш**. Notice the г softened to ж - that's this family's quirk. The person ending -еш should look familiar from а-family verbs like имаш.\n\nWhen you use можеш with another verb, that second verb also shifts to you-form: **Можеш да говориш.**",
          speak: ["можеш", "Можеш да говориш."],
        },
        {
          type: "exercise",
          prompt: "Ask: **Can you speak English?**",
          answer: "Можеш ли да говориш английски?",
          hint: "можеш + ли + да + говориш...",
          after: "Both verbs changed to match 'you': можеш, говориш.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Can you understand Bulgarian?**",
          answer: "Можеш ли да разбираш български?",
          accept: ["можеш ли да разбираш български"],
          hint: "можеш + ли + да + разбираш + български.",
          after: "Same structure - можеш ли да + you-form verb.",
        },
        {
          type: "note",
          title: "He/she can: може",
          body:
            "The he/she form is **може** - one letter shorter than можеш, same ж. Simple.\n\nPlural forms exist too (можем, можете, могат) but you'll pick those up naturally later. For now: мога, можеш, може.",
          speak: ["може"],
        },
        {
          type: "exercise",
          prompt: "**She can't speak Hebrew.**",
          answer: "Тя не може да говори иврит",
          accept: ["не може да говори иврит"],
          hint: "не може да говори + иврит (Hebrew). Both verbs in she-form.",
          after: "не може - negation works the same as always. Just put не before the verb.",
        },
        {
          type: "exercise",
          prompt: "**He can work here.**",
          answer: "Той може да работи тук",
          accept: ["може да работи тук"],
          hint: "може + да + работи (he-form) + тук.",
          after: "може да работи - both verbs in he/she form. The pattern is solid.",
        },
        {
          type: "note",
          title: "може ли - polite requests",
          body:
            "**Може ли...?** - literally 'is it possible?' This is your universal polite request:\n\n- **Може ли кафе?** - Could I get a coffee?\n- **Може ли?** - May I? (entering, passing, taking a seat...)\n\nAnswer you'll hear: **Може!** - sure, go ahead.\n\nRemember **моля** (please)? Add it to sound even more polite: **Може ли кафе, моля?**",
          speak: [
            "Може ли кафе?",
            "Може!",
            "Може ли кафе, моля?",
          ],
        },
        {
          type: "exercise",
          prompt: "Ask for tea politely.",
          answer: "Може ли чай?",
          accept: ["може ли чай, моля"],
          hint: "Може ли + what you want.",
          after: "Three words and you just ordered tea in a Bulgarian cafe.",
        },
        {
          type: "exercise",
          prompt: "Ask for **the bill, please**.",
          answer: "Може ли сметката, моля?",
          accept: [
            "може ли сметката, моля",
            "може ли сметката",
            "може ли сметката?",
          ],
          hint: "сметка → сметката (the bill), add моля for 'please'.",
          after: "Може ли сметката, моля? You'll use this one a lot.",
          speak: "Може ли сметката, моля?",
        },
        {
          type: "note",
          title: "Thank you: благодаря",
          body:
            "When they bring your order, you need one word: **Благодаря!** (thank you). Stress falls on the last syllable: бла-го-да-РЯ.\n\nМоля to ask, благодаря to receive - your full cafe toolkit.",
          speak: ["Благодаря!"],
        },
        {
          type: "exercise",
          prompt: "Say **thank you**.",
          answer: "Благодаря",
          accept: ["благодаря!"],
          hint: "бла-го-да-РЯ - stress on the last syllable.",
          after:
            "Благодаря! You now have please and thank you. That's half of politeness right there.",
          speak: "Благодаря!",
        },
        {
          type: "exercise",
          prompt: "Order a coffee politely, then say thank you. (Two sentences.)",
          answer: "Може ли кафе, моля? Благодаря!",
          accept: [
            "може ли кафе, моля? благодаря",
            "може ли кафе? благодаря",
          ],
          hint: "Може ли кафе, моля? Then: Благодаря!",
          after: "A complete cafe interaction in two sentences. You're ready.",
        },
        {
          type: "note",
          title: "трябва да - must",
          body:
            "**Трябва да** = *must / have to / need to*. Important: **трябва itself never changes form**. The person is expressed entirely in the second verb:\n\n- **Трябва да работя.** - I have to work.\n- **Трябва да работиш.** - You have to work.\n- **Трябва да работи.** - She has to work.\n\nSame трябва every time. Only the verb after да moves.",
          speak: ["Трябва да работя.", "Трябва да работиш."],
          ru: "Трябва behaves like Russian надо/нужно - frozen, impersonal. But no dative: not 'мне надо', just трябва да + verb.",
        },
        {
          type: "exercise",
          prompt: "**I have to work.**",
          answer: "Трябва да работя",
          hint: "трябва (frozen) + да + работя.",
        },
        {
          type: "exercise",
          prompt: "**We have to speak Bulgarian.**",
          answer: "Трябва да говорим български",
          hint: "трябва да + we-form: говорим.",
          after:
            "The person lives in говорим, not in трябва. Трябва just sits there, unchanging.",
        },
        {
          type: "exercise",
          prompt: "**I can't work today.**",
          answer: "Не мога да работя днес",
          accept: ["днес не мога да работя"],
          hint: "не мога да работя + днес.",
          after:
            "You just combined negation with мога - which you learned ten minutes ago. The system compounds.",
        },
        {
          type: "exercise",
          prompt: "**The city is here.** (city = град)",
          answer: "Градът е тук",
          hint: "град ends in a consonant - same pattern as хотел → хотелът.",
          after:
            "Градът - you've now seen three masculine nouns with the article: хотелът, ресторантът, градът. All consonant endings, all taking -ът. File that away.",
          speak: "Градът е тук.",
        },
        {
          type: "note",
          title: "Three ways to combine verbs",
          body:
            "**искам да / мога да / трябва да** + any verb you know = want to / can / must do anything. Three structures, one glue word, and може ли + моля + благодаря handle all the politeness you need.\n\nNext: you'll notice a pattern you've actually been using all along.",
        },
      ],
    },
    {
      id: "m3l3",
      title: "The discovery",
      subtitle: "Why noun endings matter",
      items: [
        {
          type: "note",
          title: "A little test",
          body:
            "You've been adding 'the' to nouns for a while now. Кафето, колата, хотелът... but I haven't told you any rules. Let's see if you've already figured it out.\n\nI'll give you a new noun. You tell me what 'the' version looks like.",
        },
        {
          type: "exercise",
          prompt:
            "**къща** means *house*. How would you say **the house**?",
          answer: "къщата",
          hint: "Look at the ending of къща. You've seen колата and водата - what do кола and вода have in common with къща?",
          after:
            "къща ends in **-а**, just like кола and вода. They all take **-та**. You saw the pattern before I said it.",
          speak: "къщата",
        },
        {
          type: "exercise",
          prompt:
            "**море** means *sea*. How would you say **the sea**?",
          answer: "морето",
          hint: "Remember кафето and виното? Look at how море ends.",
          after:
            "море ends in **-е**, like кафе and вино. They all take **-то**.",
          speak: "морето",
        },
        {
          type: "exercise",
          prompt:
            "And **хляб** means *bread*. **The bread**?",
          answer: "хлябът",
          hint: "Remember хотелът and градът? What kind of ending does хляб have?",
          after:
            "хляб ends in a **consonant**, like хотел and град. They all take **-ът**.",
          speak: "хлябът",
        },
        {
          type: "note",
          title: "You already knew this",
          body:
            "You've been doing this all along. The ending tells you everything:\n\n- **Consonant** → masculine → **-ът** (хотелът, градът, хлябът)\n- **-а / -я** → feminine → **-та** (колата, водата, къщата)\n- **-о / -е** → neuter → **-то** (кафето, виното, морето)\n\nThree genders. Three article endings. And the noun itself announces which one it wants.",
          he: "Hebrew has the same idea - endings hint at gender - but Bulgarian is more consistent. In Hebrew you still get עין-type surprises. In Bulgarian, the ending really is the rule.",
        },
        {
          type: "note",
          title: "A new noun: маса",
          body:
            "**Маса** means *table*. It ends in -а, so it's feminine - article will be -та.",
          speak: ["маса"],
          ru: "Bulgarian **стол** means *chair*, not table. Table is **маса**. This trips up every Russian speaker.",
        },
        {
          type: "exercise",
          prompt: "**the table**",
          answer: "масата",
          hint: "маса ends in -а → feminine → add -та.",
          after: "масата - the pattern holds. Feminine noun, -та article.",
          speak: "масата",
        },
        {
          type: "note",
          title: "A new noun: жена",
          body:
            "**Жена** means *woman*. Ends in -а - feminine again. You already know what the article will look like.",
          speak: ["жена"],
        },
        {
          type: "exercise",
          prompt: "**the woman**",
          answer: "жената",
          hint: "жена ends in -а → feminine → -та.",
          after: "жената - same rule, new word. The pattern is automatic now.",
          speak: "жената",
        },
        {
          type: "note",
          title: "A new noun: мъж",
          body:
            "**Мъж** means *man*. Ends in a consonant - so it's masculine. You know the drill.",
          speak: ["мъж"],
        },
        {
          type: "exercise",
          prompt: "**the man**",
          answer: "мъжът",
          hint: "мъж ends in a consonant → masculine → -ът.",
          after: "мъжът - consonants take -ът. Three new nouns, three correct articles.",
          speak: "мъжът",
        },
        {
          type: "choice",
          prompt:
            "You learn a new word: **бира** (beer). What gender is it?",
          options: [
            "Feminine - it ends in -а",
            "Neuter - it ends in -а",
            "Masculine",
          ],
          correct: 0,
          after:
            "Feminine. And 'the beer' would be **бирата**. You can do this for any noun now.",
          speak: "бирата",
        },
        {
          type: "exercise",
          prompt: "**The man is here and the woman is there.**",
          answer: "Мъжът е тук и жената е там",
          hint: "мъж → мъжът, жена → жената; use тук and там.",
          after: "Two articles, two genders, one sentence. The system works.",
        },
        {
          type: "note",
          title: "The rule for everything",
          body:
            "From now on, every new noun you see tells you its gender through its ending. No memorizing lists - just look at the last letter.\n\nEvery noun from here on is easier because of what you figured out in this lesson.",
        },
      ],
    },
    {
      id: "m3l4",
      title: "Describing things",
      subtitle: "нов, нова, ново",
      items: [
        {
          type: "note",
          title: "Adjectives match the noun",
          body:
            "In Bulgarian, adjectives change form to match the noun they describe. Let's start with **нов** (new).\n\nWith a masculine noun, the adjective stays bare - no ending: **нов град** (a new city).",
          speak: ["нов", "нов град"],
        },
        {
          type: "exercise",
          prompt: "**a new hotel**",
          answer: "нов хотел",
          hint: "хотел is masculine (consonant ending) → adjective stays bare: нов.",
          after: "нов хотел - masculine noun, bare adjective. That's the simplest case.",
        },
        {
          type: "exercise",
          prompt: "**a new city**",
          answer: "нов град",
          hint: "град is masculine → adjective stays bare.",
          after: "Masculine: the adjective stays stripped down, no ending.",
        },
        {
          type: "note",
          title: "Feminine: нова",
          body:
            "With a feminine noun, the adjective adds **-а** to match: **нова кола** (a new car). The adjective rhymes with the noun - both end in -а.",
          speak: ["нова кола"],
        },
        {
          type: "exercise",
          prompt: "**a new car**",
          answer: "нова кола",
          hint: "кола is feminine → adjective takes -а.",
          after: "Feminine noun, feminine adjective. They rhyme.",
        },
        {
          type: "exercise",
          prompt: "**The table is new.**",
          answer: "Масата е нова",
          hint: "маса is feminine → нова; 'the table' = масата.",
          after:
            "The adjective agrees even when it comes after е. It always matches the noun.",
        },
        {
          type: "note",
          title: "Neuter: ново",
          body:
            "With a neuter noun, the adjective adds **-о**: **ново кафе** (a new coffee). Neuter nouns end in -о or -е, and the adjective picks up -о.",
          speak: ["ново кафе"],
        },
        {
          type: "exercise",
          prompt: "**a new coffee** (as in: a new kind/brand)",
          answer: "ново кафе",
          hint: "кафе is neuter → adjective takes -о.",
          after: "ново кафе - neuter noun, -о adjective. Three genders, three shapes.",
        },
        {
          type: "exercise",
          prompt: "**The sea is new.** (as in: unfamiliar to you)",
          answer: "Морето е ново",
          hint: "море is neuter → ново; 'the sea' = морето.",
          after: "Морето е ново. Three singular forms down: нов, нова, ново.",
        },
        {
          type: "note",
          title: "Plural: нови",
          body:
            "For plural nouns, all three genders collapse into ONE adjective form: **нови**. Doesn't matter if the nouns were masculine, feminine, or neuter - plural is always -и.\n\n**нови коли** (new cars), **нови хотели** (new hotels).",
          speak: ["нови коли"],
          he: "Like Hebrew adjective agreement - חדש/חדשה/חדשים - but simpler: Bulgarian has just ONE plural form (нови) instead of separate masculine and feminine plurals.",
        },
        {
          type: "exercise",
          prompt: "**new cars**",
          answer: "нови коли",
          hint: "Plural → one form for all genders: нови.",
          after: "нови - the plural adjective. Three singular shapes, one plural. That's the whole system.",
        },
        {
          type: "note",
          title: "'The' jumps to the adjective",
          body:
            "When a noun has both an adjective and an article, 'the' rides on the adjective instead:\n\n- кола → **колата** (the car)\n- нова кола → **новата** кола (the new car)\n\nThe article moved from the noun to the adjective. Bulgarian marks 'the' once, on the first word of the noun phrase.",
          speak: ["новата кола"],
        },
        {
          type: "exercise",
          prompt: "**the new car**",
          answer: "новата кола",
          hint: "'The' rides on the adjective: нов + -ата → новата.",
          after:
            "новата кола - the article jumped onto the adjective. The noun stays bare.",
        },
        {
          type: "note",
          title: "Greetings you can now explain",
          body:
            "Here's something fun. **Добър** means *good* - and like нов, it changes to match the noun's gender.\n\n**утро** (morning) is neuter. **ден** (day) is masculine. Can you predict the greetings?",
          speak: ["добър"],
        },
        {
          type: "exercise",
          prompt: "Say **good morning**.",
          answer: "Добро утро",
          accept: ["добро утро!"],
          hint: "утро is neuter - what ending does the adjective take for neuter? Think of how нов becomes ново.",
          after:
            "утро is neuter - the adjective took **-о**. You didn't memorize this greeting. You derived it.",
          speak: "Добро утро!",
        },
        {
          type: "exercise",
          prompt: "Say **good day**.",
          answer: "Добър ден",
          accept: ["добър ден!"],
          hint: "ден is masculine - and masculine adjectives stay bare.",
          after: "ден is masculine - добър stays. Two greetings, zero memorization.",
          speak: "Добър ден!",
        },
        {
          type: "note",
          title: "Hello",
          body:
            "Two more greetings, no grammar required:\n\n- **Здравей!** - hello (informal, to one person you'd call ти)\n- **Здравейте!** - hello (formal, or to a group - the вие form)\n\nWith добро утро, добър ден, здравей, and здравейте, you can greet anyone in Bulgaria. You know what things are, you can ask for what you want, you can describe what you see. The scaffolding is up.",
          speak: ["Здравей!", "Здравейте!"],
        },
      ],
    },
  ],
};
