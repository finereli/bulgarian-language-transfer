import type { Module } from "./types";

export const module2: Module = {
  id: "m2",
  title: "Wanting and having",
  blurb:
    "Your first action verbs, a 'the' that sticks to the end of the word, and the most Bulgarian thing about Bulgarian: да.",
  lessons: [
    {
      id: "m2l1",
      title: "I want",
      subtitle: "искам, моля, and the article -то",
      items: [
        {
          type: "note",
          title: "The verb tells you who",
          body: "Bulgarian verb endings carry the person. **Искам** = I want. Change the ending, change the person:\n\n- аз **искам** (-м = I)\n- ти **искаш** (-ш = you)\n- той/тя **иска** (bare stem = he/she)\n\nThe ending does the work, so pronouns are optional - just like with съм.",
          he: "Like Hebrew past tense - הלכתי, הלכת, הלך - the ending tells you who.",
          speak: ["искам", "искаш", "иска"],
          introduces: ["verb-а-family"],
        },
        {
          type: "exercise",
          prompt: "**I want coffee.**",
          answer: "Искам кафе",
          accept: ["аз искам кафе"],
          hint: "искам = I want. кафе = coffee (same word as café).",
          reviews: ["pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want tea?**",
          answer: "Искаш ли чай?",
          hint: "ли goes right after the verb: Искаш ли...",
          after: "Same ли you used with 'to be' - it works with every verb.",
          reviews: ["ли-question", "чай", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want water?** (вода)",
          answer: "Искаш ли вода?",
          hint: "искаш + ли + вода?",
          reviews: ["ли-question", "вода", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**You don't want tea.**",
          answer: "Не искаш чай",
          accept: ["ти не искаш чай"],
          hint: "не + искаш.",
          reviews: ["не-negation", "чай", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**He wants tea.**",
          answer: "Той иска чай",
          accept: ["иска чай"],
          hint: "He/she form: иска - bare stem, no ending.",
          reviews: ["pronoun-subject", "чай"]
        },
        {
          type: "exercise",
          prompt: "**She wants water.**",
          answer: "Тя иска вода",
          accept: ["иска вода"],
          hint: "She-form = bare stem: иска.",
          reviews: ["pronoun-subject", "вода"]
        },
        {
          type: "note",
          title: "We want",
          body: "Now the plural. First up: **искаме** = we want. The ending -ме means 'we' - same marker as сме (we are).",
          speak: ["искаме"],
        },
        {
          type: "exercise",
          prompt: "**We want water.** (вода = water)",
          answer: "Искаме вода",
          accept: ["ние искаме вода"],
          hint: "We-form ends in -ме: искаме.",
          reviews: ["вода", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**We don't want tea.**",
          answer: "Не искаме чай",
          accept: ["ние не искаме чай"],
          hint: "не + искаме.",
          reviews: ["не-negation", "чай", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Do we want water?**",
          answer: "Искаме ли вода?",
          accept: ["ние искаме ли вода"],
          hint: "искаме + ли + вода?",
          reviews: ["ли-question", "вода", "pronoun-drop"]
        },
        {
          type: "note",
          title: "You-all want",
          body: "**Искате** = you all want. The ending -те means 'you all' - same marker as сте (you all are).",
          speak: ["искате"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you all want coffee?**",
          answer: "Искате ли кафе?",
          accept: ["вие искате ли кафе"],
          hint: "You-all form ends in -те: искате. Then ли.",
          reviews: ["ли-question", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**You all want tea.**",
          answer: "Искате чай",
          accept: ["вие искате чай"],
          hint: "You-all form: искате.",
          reviews: ["чай", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**You all don't want water.**",
          answer: "Не искате вода",
          accept: ["вие не искате вода"],
          hint: "не + искате.",
          reviews: ["не-negation", "вода", "pronoun-drop"]
        },
        {
          type: "note",
          title: "They want",
          body: "**Искат** = they want. The ending -ат means 'they'.",
          speak: ["искат"],
        },
        {
          type: "exercise",
          prompt: "**They want coffee.**",
          answer: "Те искат кафе",
          accept: ["искат кафе"],
          hint: "They-form ends in -ат: искат.",
          reviews: ["pronoun-subject"]
        },
        {
          type: "exercise",
          prompt: "**He wants coffee and they want tea.**",
          answer: "Той иска кафе и те искат чай",
          hint: "иска (he) vs искат (they). и = and.",
          reviews: ["pronoun-subject", "и-conjunction", "чай"]
        },
        {
          type: "exercise",
          prompt: "**We want coffee and you all want tea.**",
          answer: "Искаме кафе и искате чай",
          accept: ["ние искаме кафе и вие искате чай"],
          hint: "искаме (we) vs искате (you all).",
          reviews: ["и-conjunction", "чай", "pronoun-drop"]
        },
        {
          type: "note",
          title: "Please",
          body: "One word to file away: **моля** = please. At a cafe:\n\n**Кафе, моля.** - Coffee, please.\n**Вода, моля.** - Water, please.\n\nThat's a complete, polite order. No verb needed.",
          speak: ["Кафе, моля.", "Вода, моля."],
        },
        {
          type: "exercise",
          prompt: "**Water, please.**",
          answer: "Вода, моля",
          hint: "вода = water, моля = please.",
          reviews: ["вода", "моля"]
        },
        {
          type: "exercise",
          prompt: "**Tea, please.**",
          answer: "Чай, моля",
          hint: "чай = tea, моля = please.",
          reviews: ["чай", "моля"]
        },
        {
          type: "exercise",
          prompt: "**I want water, please.**",
          answer: "Искам вода, моля",
          accept: ["аз искам вода, моля"],
          hint: "искам + вода, then моля.",
          reviews: ["вода", "моля", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**I don't want tea.**",
          answer: "Не искам чай",
          accept: ["аз не искам чай"],
          hint: "не before the verb: не искам.",
          after: "Не works the same way it did with съм - put it before the verb and you're done.",
          reviews: ["не-negation", "чай", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**Don't you want coffee?**",
          answer: "Не искаш ли кафе?",
          hint: "не + искаш + ли - same negative-question pattern from module 1.",
          reviews: ["не-negation", "ли-question", "pronoun-drop"]
        },
        {
          type: "note",
          title: "'The' lives at the end",
          body: "Bulgarian marks 'the' by adding to the end of the word. No separate word - just a suffix:\n\nкафе + -то = **кафето** (the coffee)",
          he: "Like Hebrew's ה, but at the end instead of the beginning. הקפה becomes кафе**то**.",
          speak: ["кафето"],
          introduces: ["definite-neuter"],
        },
        {
          type: "exercise",
          prompt: "**The coffee is here.**",
          answer: "Кафето е тук",
          hint: "кафе + -то = кафето.",
          after: "Кафето е тук. You just used your first Bulgarian article.",
          reviews: ["definite-neuter", "съм-present", "тук"]
        },
        {
          type: "exercise",
          prompt: "**I want the coffee.**",
          answer: "Искам кафето",
          hint: "искам + кафето (the coffee).",
          reviews: ["definite-neuter", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**Is the coffee here?**",
          answer: "Кафето тук ли е?",
          accept: ["тук ли е кафето"],
          hint: "ли after the word being asked about: тук ли е?",
          reviews: ["definite-neuter", "тук", "ли-question", "съм-present"]
        },
        {
          type: "note",
          title: "At the cafe",
          body: "You can already survive a Bulgarian cafe. Order: **Кафе, моля.** Ask a question: **Искаш ли чай?** When you're done: **Сметка, моля.** (сметка = the bill)\n\nThat's not a toy sentence - that's what people actually say.",
          speak: ["Кафе, моля.", "Сметка, моля."],
        },
        {
          type: "exercise",
          prompt: "Ask for the bill at a cafe.",
          answer: "Сметка, моля",
          hint: "сметка = bill, моля = please.",
          after: "Сметка, моля. You just ordered and paid at a Bulgarian cafe using real sentences.",
          reviews: ["сметка", "моля"]
        },
      ],
    },
    {
      id: "m2l2",
      title: "Having and not having",
      subtitle: "имам, нямам, and more articles",
      items: [
        {
          type: "note",
          title: "To have - a real verb",
          body: "**Имам** = I have. It's an а-family verb like искам, so the same endings apply: -м for I, -ш for you, bare stem for he/she. You already know the pattern.",
          he: "Hebrew has no verb 'to have' - you say יש לי ('there is to me'). Bulgarian went the English way: a real verb, имам.",
          ru: "Same relief for Russian speakers: no у меня есть construction. Bulgarian just says имам - subject, verb, done.",
          speak: ["имам", "имаш", "има"],
        },
        {
          type: "exercise",
          prompt: "**I have a problem.**",
          answer: "Имам проблем",
          accept: ["аз имам проблем"],
          hint: "имам = I have, same family as искам.",
          reviews: ["verb-а-family", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you have a phone?**",
          answer: "Имаш ли телефон?",
          hint: "имаш + ли + телефон?",
          reviews: ["verb-а-family", "ли-question", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She has a phone.**",
          answer: "Тя има телефон",
          accept: ["има телефон"],
          hint: "She-form of имам: има (bare stem, like иска).",
          reviews: ["verb-а-family", "pronoun-subject"]
        },
        {
          type: "exercise",
          prompt: "**Do you want the wine?** (вино = wine)",
          answer: "Искаш ли виното?",
          hint: "искаш (you want) + ли + виното (the wine - neuter, so -то).",
          reviews: ["искам", "verb-а-family", "ли-question", "definite-neuter", "вино", "pronoun-drop"]
        },
        {
          type: "note",
          title: "нямам - the fused 'don't have'",
          body: "'Not have' fused into its own verb: **нямам** (never 'не имам'). Same endings - just swap им- for ням-.\n\n**Нямам кола.** - I don't have a car. (**кола** = car)",
          speak: ["Нямам кола.", "Тя няма кола."],
          introduces: ["нямам-fused"],
        },
        {
          type: "exercise",
          prompt: "**I don't have a car.**",
          answer: "Нямам кола",
          hint: "Use the fused нямам, not 'не имам'.",
          reviews: ["verb-а-family", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She doesn't have a car.**",
          answer: "Тя няма кола",
          accept: ["няма кола"],
          hint: "She-form: няма (bare stem, no ending).",
          reviews: ["verb-а-family", "pronoun-subject"]
        },
        {
          type: "exercise",
          prompt: "**The car is there.**",
          answer: "Колата е там",
          hint: "Add 'the' to кола. This time the ending is -та: колата.",
          after: "Кола**та** - a different article ending from кафе**то**. Just notice it for now.",
          reviews: ["съм", "там"],
          introduces: ["definite-fem"],
        },
        {
          type: "note",
          title: "There is / there isn't",
          body: "Bare **има** also means 'there is'; **няма** - 'there isn't':\n\n- **Има кафе.** - There's coffee.\n- **Има вино.** - There's wine. (**вино** = wine)\n- **Няма проблем!** - No problem! (You'll hear this ten times a day.)",
          speak: ["Има кафе.", "Има вино.", "Няма проблем!"],
          introduces: ["има-existential"],
        },
        {
          type: "exercise",
          prompt: "**There is no coffee.**",
          answer: "Няма кафе",
          hint: "Bare няма = 'there isn't'.",
        },
        {
          type: "exercise",
          prompt: "**There is coffee. Do you all want coffee?**",
          answer: "Има кафе. Искате ли кафе?",
          hint: "има = there is. искате ли = do you all want?",
          reviews: ["искам", "verb-а-family", "ли-question", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Is there water?**",
          answer: "Има ли вода?",
          hint: "има (there is) + ли.",
          reviews: ["ли-question", "вода"]
        },
        {
          type: "exercise",
          prompt: "**I want the water.**",
          answer: "Искам водата",
          hint: "вода + -та = водата.",
          after: "Вода**та** - same -та ending as кола**та**.",
          reviews: ["искам", "verb-а-family", "вода", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "How would you say **the wine**?",
          answer: "виното",
          hint: "вино is like кафе...",
          after: "Same ending as кафето. You already see the pattern.",
          reviews: ["definite-neuter", "вино"]
        },
        {
          type: "exercise",
          prompt: "**I want the wine.**",
          answer: "Искам виното",
          hint: "вино + -то = виното.",
          after: "Three articles and counting: кафе**то**, кола**та**, вино**то**. The pattern is building itself.",
          reviews: ["искам", "verb-а-family", "definite-neuter", "вино", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**We want water, please.**",
          answer: "Искаме вода, моля",
          accept: ["ние искаме вода, моля"],
          hint: "искаме = we want. моля = please.",
          reviews: ["искам", "verb-а-family", "вода", "моля", "pronoun-drop"]
        },
      ],
    },
    {
      id: "m2l3",
      title: "Speaking and understanding",
      subtitle: "говоря, разбирам, малко, добре",
      items: [
        {
          type: "note",
          title: "The и-family: говоря",
          body: "Second verb family. Same idea - endings carry the person - but with a different linking vowel. It's called the и-family because и appears in most forms (говор**иш**, говор**и**, говор**им**...). The I-form is the odd one out - it ends in -я instead:\n\n**Говоря** = I speak.\n\nLanguages need no preposition: **Говоря английски** = I speak English.",
          speak: ["Говоря английски."],
          introduces: ["verb-и-family"],
        },
        {
          type: "exercise",
          prompt: "**I speak English.** (английски)",
          answer: "Говоря английски",
          hint: "говоря + английски, no preposition needed.",
          reviews: ["pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**I speak Bulgarian.** (български)",
          answer: "Говоря български",
          hint: "говоря + български.",
          reviews: ["говоря", "verb-и-family", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**I speak a little.** (малко = a little)",
          answer: "Говоря малко",
          hint: "говоря + малко.",
          reviews: ["говоря", "verb-и-family", "pronoun-drop"]
        },
        {
          type: "note",
          title: "You speak",
          body: "**Говориш** = you speak. The -ш is still 'you' - just a different vowel gluing it to the stem: -иш instead of -аш.",
          speak: ["говориш"],
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you speak Bulgarian?** (български)",
          answer: "Говориш ли български?",
          hint: "говориш + ли + български?",
          reviews: ["говоря", "verb-и-family", "ли-question", "pronoun-drop", "български"]
        },
        {
          type: "exercise",
          prompt: "**You speak very well!** (много добре = very well)",
          answer: "Говориш много добре!",
          accept: ["говориш много добре"],
          hint: "говориш + много + добре.",
          reviews: ["говоря", "verb-и-family", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**You don't speak Bulgarian.**",
          answer: "Не говориш български",
          accept: ["ти не говориш български"],
          hint: "не + говориш + български.",
          reviews: ["говоря", "verb-и-family", "не-negation", "pronoun-drop", "български"]
        },
        {
          type: "note",
          title: "She speaks",
          body: "**Говори** = he/she speaks. Bare stem, no extra ending - same logic as иска.",
          speak: ["говори"],
        },
        {
          type: "exercise",
          prompt: "**She speaks English.**",
          answer: "Тя говори английски",
          accept: ["говори английски"],
          hint: "She-form: говори (bare stem).",
          reviews: ["pronoun-subject", "говоря", "verb-и-family", "английски"]
        },
        {
          type: "exercise",
          prompt: "**He speaks Bulgarian.**",
          answer: "Той говори български",
          accept: ["говори български"],
          hint: "He-form is the same as she-form: говори.",
          reviews: ["pronoun-subject", "говоря", "verb-и-family", "български"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Does she speak English?**",
          answer: "Тя говори ли английски?",
          accept: ["говори ли английски"],
          hint: "говори + ли + английски?",
          reviews: ["pronoun-subject", "говоря", "verb-и-family", "ли-question", "английски"]
        },
        {
          type: "note",
          title: "The most useful sentence",
          body: "**Разбирам** = I understand - an а-family verb, so you already know all its forms from искам.\n\nStress alert: разбИ́рам - stress on the second syllable, not the last. Listen for it.\n\n**Не разбирам** may be the most useful sentence in this whole course. Say it without shame.",
          speak: ["Разбирам.", "Не разбирам."],
        },
        {
          type: "exercise",
          prompt: "**I don't understand.**",
          answer: "Не разбирам",
          hint: "не + разбирам.",
          reviews: ["не-negation", "pronoun-drop", "verb-а-family"]
        },
        {
          type: "exercise",
          prompt: "**I understand Bulgarian.**",
          answer: "Разбирам български",
          hint: "разбирам + български. Same pattern as говоря.",
          reviews: ["разбирам", "verb-а-family", "pronoun-drop", "български"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you understand?**",
          answer: "Разбираш ли?",
          hint: "разбираш + ли? Same -аш as искаш, имаш.",
          reviews: ["разбирам", "verb-а-family", "ли-question", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**You don't understand.**",
          answer: "Не разбираш",
          accept: ["ти не разбираш"],
          hint: "не + разбираш.",
          reviews: ["разбирам", "verb-а-family", "не-negation", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She understands Bulgarian.**",
          answer: "Тя разбира български",
          accept: ["разбира български"],
          hint: "She-form: разбира (bare stem, like иска).",
          reviews: ["pronoun-subject", "разбирам", "verb-а-family", "български"]
        },
        {
          type: "exercise",
          prompt: "**They don't understand.**",
          answer: "Те не разбират",
          accept: ["не разбират"],
          hint: "Same -ат ending as искат.",
          reviews: ["pronoun-subject", "разбирам", "verb-а-family", "не-negation"]
        },
        {
          type: "note",
          title: "A little",
          body: "**Малко** = a little. The honest sentence of every language learner:\n\n**Говоря малко български.** - I speak a little Bulgarian.",
          speak: ["Говоря малко български."],
        },
        {
          type: "exercise",
          prompt: "**I speak a little Bulgarian.**",
          answer: "Говоря малко български",
          hint: "говоря + малко + български.",
          after: "This one sentence will earn you so much goodwill in Bulgaria.",
          reviews: ["говоря", "verb-и-family", "малко", "български", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**I understand a little.**",
          answer: "Разбирам малко",
          hint: "разбирам + малко. Same pattern.",
          reviews: ["разбирам", "verb-а-family", "малко", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She understands a little Bulgarian.**",
          answer: "Тя разбира малко български",
          accept: ["разбира малко български"],
          hint: "разбира (she-form) + малко + български.",
          reviews: ["pronoun-subject", "разбирам", "verb-а-family", "малко", "български"]
        },
        {
          type: "note",
          title: "A lot",
          body: "**Много** = a lot, very. It works as both 'a lot' and 'very':\n\n**Говоря много.** - I speak a lot.\n**Много добър.** - Very good.",
          speak: ["много"],
        },
        {
          type: "exercise",
          prompt: "**She speaks a lot.**",
          answer: "Тя говори много",
          accept: ["говори много"],
          hint: "говори (she-form) + много.",
          reviews: ["pronoun-subject", "говоря", "verb-и-family", "много"]
        },
        {
          type: "exercise",
          prompt: "**I understand a lot.**",
          answer: "Разбирам много",
          hint: "разбирам + много.",
          reviews: ["разбирам", "verb-а-family", "много", "pronoun-drop"]
        },
        {
          type: "note",
          title: "Well",
          body: "**Добре** = well.\n\n**Говоря добре.** - I speak well.",
          speak: ["Говоря добре."],
        },
        {
          type: "exercise",
          prompt: "**He speaks well.**",
          answer: "Той говори добре",
          accept: ["говори добре"],
          hint: "говори (he-form) + добре.",
          reviews: ["pronoun-subject", "говоря", "verb-и-family", "добре"]
        },
        {
          type: "exercise",
          prompt: "**She understands very well.**",
          answer: "Тя разбира много добре",
          accept: ["разбира много добре"],
          hint: "разбира + много + добре.",
          reviews: ["pronoun-subject", "разбирам", "verb-а-family", "много", "добре"]
        },
        {
          type: "exercise",
          prompt: "**She speaks a little English.**",
          answer: "Тя говори малко английски",
          accept: ["говори малко английски"],
          hint: "She-form: говори. Then малко + the language.",
          after: "малко + много + добре - three words that dress up any verb you know.",
          reviews: ["pronoun-subject", "говоря", "verb-и-family", "малко", "английски"]
        },
        {
          type: "note",
          body:
            "You can describe how anyone speaks, understands, and how well. Next: two more verbs and a conjunction to connect your thoughts.",
        },
      ],
    },
    {
      id: "m2l4",
      title: "Learning and working",
      subtitle: "уча, работя, но, днес",
      items: [
        {
          type: "note",
          title: "уча - I learn",
          body: "**Уча** = I learn / I study. Another и-family verb - the и shows up in the other forms: уч**иш** (you learn), уч**и** (he/she learns).",
          speak: ["Уча български."],
        },
        {
          type: "exercise",
          prompt: "**I'm learning Bulgarian.**",
          answer: "Уча български",
          hint: "Bulgarian present tense covers '-ing' too.",
          reviews: ["pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Are you studying Bulgarian?**",
          answer: "Учиш ли български?",
          hint: "учиш (you-form) + ли + български?",
          after: "Same ли from Module 1. It works with every verb.",
          reviews: ["ли-question", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She is studying English.**",
          answer: "Тя учи английски",
          accept: ["учи английски"],
          hint: "She-form of уча: учи (bare stem).",
          after: "Same и-family pattern as говоря → говори. Stem stays, ending tells you who.",
          reviews: ["pronoun-subject"]
        },
        {
          type: "note",
          title: "но - but",
          body: "**Но** = but. Put a comma before it:\n\n**Разбирам, но не говоря.** - I understand, but I don't speak.",
          speak: ["Разбирам, но не говоря."],
          introduces: ["но-but"],
        },
        {
          type: "exercise",
          prompt: "**I understand, but I don't speak.**",
          answer: "Разбирам, но не говоря",
          hint: "..., но не говоря. Comma before но.",
          reviews: ["не-negation", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She studies, but she doesn't understand.**",
          answer: "Тя учи, но не разбира",
          accept: ["учи, но не разбира"],
          hint: "учи (she-form), но не разбира (she-form of разбирам).",
          after: "Two verbs you already know, connected by но. That's how real sentences grow.",
          reviews: ["pronoun-subject", "не-negation"]
        },
        {
          type: "exercise",
          prompt: "**She wants coffee, but there is no coffee.**",
          answer: "Тя иска кафе, но няма кафе",
          accept: ["иска кафе, но няма кафе"],
          hint: "иска (she wants) + но (but) + няма (there isn't).",
          reviews: ["pronoun-subject", "искам", "verb-а-family", "има-existential"]
        },
        {
          type: "note",
          title: "работя - I work",
          body: "**Работя** = I work. Same и-family (I-form ends in -я, but the и is in работ**иш**, работ**и**).",
          speak: ["работя"],
        },
        {
          type: "exercise",
          prompt: "**I work, but I don't speak Bulgarian.**",
          answer: "Работя, но не говоря български",
          hint: "работя + , но + не говоря български.",
          reviews: ["не-negation", "pronoun-drop", "български"]
        },
        {
          type: "exercise",
          prompt: "**We work here.**",
          answer: "Работим тук",
          accept: ["ние работим тук"],
          hint: "We-form of работя: работим (-им for 'we' in и-family verbs).",
          after: "работим - same ending pattern as говорим. The и-family 'we' form.",
          reviews: ["pronoun-drop", "тук"]
        },
        {
          type: "exercise",
          prompt: "**She works here.**",
          answer: "Тя работи тук",
          accept: ["работи тук"],
          hint: "She-form: работи (same pattern as учи).",
          reviews: ["pronoun-subject", "тук"]
        },
        {
          type: "note",
          title: "днес - today",
          body: "**Днес** = today.\n\n**Работя днес.** - I'm working today.",
          speak: ["Работя днес."],
        },
        {
          type: "exercise",
          prompt: "**I'm working today.**",
          answer: "Работя днес",
          hint: "работя + днес.",
          after: "Present tense does double duty for 'I work' and 'I'm working'. One form, both jobs.",
          reviews: ["pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**He is not working today.**",
          answer: "Той не работи днес",
          accept: ["не работи днес"],
          hint: "не + работи (he-form) + днес.",
          after: "Не works the same with every verb. You'll never need a new negation rule.",
          reviews: ["pronoun-subject", "не-negation"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Are you working today?**",
          answer: "Работиш ли днес?",
          hint: "работиш (you-form) + ли + днес.",
          reviews: ["ли-question", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**Where is the hotel?** (where = къде)",
          answer: "Къде е хотелът?",
          hint: "къде = where. хотел + -ът = хотелът.",
          after: "Хотел**ът** - a third article ending, alongside кафе**то** and кола**та**. No need to sort them out yet. Just notice them.",
          reviews: ["съм"],
          introduces: ["definite-masc"],
        },
        {
          type: "exercise",
          prompt: "**The restaurant is there.**",
          answer: "Ресторантът е там",
          hint: "ресторант + -ът = ресторантът.",
          after: "Same -ът as хотелът. These endings are choosing themselves.",
          reviews: ["definite-masc", "съм", "там"]
        },
        {
          type: "note",
          title: "Two verb families",
          body: "- **а-family**: искам, имам, разбирам - stem + -ам, -аш, -а...\n- **и-family**: говоря, уча, работя - stem + -я, -иш, -и...\n\nAnd three article shapes: кафе**то**, кола**та**, хотел**ът**. You haven't been told why each word gets a different one. But you're starting to feel it.",
        },
      ],
    },
    {
      id: "m2l5",
      title: "The missing 'to'",
      subtitle: "искам да говоря",
      items: [
        {
          type: "note",
          title: "Bulgarian threw away the infinitive",
          body: "There's no word for 'to' before a verb. Where English says 'I want **to speak**', Bulgarian says 'I want **that I-speak**':\n\n**Искам да говоря.**\n\n**Да** + a conjugated verb replaces every English 'to ___'. And both verbs agree with the subject - watch:\n\n- Иск**ам** да говор**я** (I want to speak)\n- Иска**ш** да говори**ш** (you want to speak)\n- Иска да говори (she wants to speak)\n\nThe verbs rhyme with each other. Let that rhythm guide you.",
          he: "Hebrew doesn't have infinitives either - אני רוצה לדבר uses a different approach (ל + verb). The idea of 'I want that-I-speak' should feel familiar.",
          ru: "Russian хочу говорить uses an infinitive - Bulgarian lost it entirely (a Balkan family trait shared with Greek and Romanian). Every инфинитив becomes да + conjugated verb.",
          speak: [
            "Искам да говоря.",
            "Искаш да говориш.",
            "Тя иска да говори.",
          ],
          introduces: ["да-subjunctive"],
        },
        {
          type: "exercise",
          prompt: "**I want to speak Bulgarian.**",
          answer: "Искам да говоря български",
          hint: "искам + да + говоря.",
          after: "Both verbs in the I-form: иск**ам**, говор**я**. They have to match.",
          reviews: ["искам", "verb-а-family", "говоря", "verb-и-family", "български", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you want to speak English?**",
          answer: "Искаш ли да говориш английски?",
          hint: "Искаш ли + да + говориш...",
          reviews: ["искам", "verb-а-family", "ли-question", "говоря", "verb-и-family", "английски", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She wants to learn Bulgarian.**",
          answer: "Тя иска да учи български",
          accept: ["иска да учи български"],
          hint: "Both verbs in the she-form: иска, учи.",
          reviews: ["pronoun-subject", "искам", "verb-а-family", "уча", "verb-и-family", "български"]
        },
        {
          type: "choice",
          prompt: "**Искам да говоря** literally means...",
          options: [
            "I want that I-speak",
            "I want to speaking",
            "I want the speech",
          ],
          correct: 0,
          after:
            "Literally 'I want that I-speak'. The second verb is always conjugated, never frozen.",
        },
        {
          type: "note",
          title: "обичам and пътувам",
          body: "**Обичам** = I love - а-family, works for things, activities, and people.\n**Пътувам** = I travel - also а-family.\n\n- **Обичам кафе.**\n- **Обичам да пътувам.** - I love to travel.",
          speak: ["Обичам кафе.", "Обичам да пътувам."],
        },
        {
          type: "exercise",
          prompt: "**I love coffee.**",
          answer: "Обичам кафе",
          hint: "обичам + кафе - no да for a noun.",
          reviews: ["обичам", "verb-а-family", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**I love to travel.**",
          answer: "Обичам да пътувам",
          hint: "обичам + да + пътувам.",
          reviews: ["обичам", "verb-а-family", "пътувам", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**She loves to travel.**",
          answer: "Тя обича да пътува",
          accept: ["обича да пътува"],
          hint: "She-forms: обича, пътува.",
          reviews: ["pronoun-subject", "обичам", "verb-а-family", "пътувам"]
        },
        {
          type: "exercise",
          prompt: "**I want to understand.**",
          answer: "Искам да разбирам",
          hint: "искам + да + разбирам.",
          after: "Every а-family verb works the same way with да. And every и-family verb too.",
          reviews: ["искам", "verb-а-family", "разбирам", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**They want to work today.**",
          answer: "Те искат да работят днес",
          accept: ["искат да работят днес"],
          hint: "They-forms: искат, работят.",
          reviews: ["pronoun-subject", "искам", "verb-а-family", "работя", "verb-и-family", "днес"]
        },
        {
          type: "exercise",
          prompt: "**We want to learn Bulgarian.**",
          answer: "Искаме да учим български",
          accept: ["ние искаме да учим български"],
          hint: "искаме (we want) + да + учим (we learn).",
          reviews: ["искам", "verb-а-family", "уча", "verb-и-family", "български", "pronoun-drop"]
        },
        {
          type: "exercise",
          prompt: "**I don't want the water.**",
          answer: "Не искам водата",
          accept: ["аз не искам водата"],
          hint: "вода + -та = водата.",
          after: "The articles keep showing up. You're handling them without thinking about it now.",
          reviews: ["не-negation", "искам", "verb-а-family", "вода", "definite-fem", "pronoun-drop"]
        },
        {
          type: "note",
          title: "Да is the glue",
          body: "From now on, whenever English hands you a 'to ___', your brain should output **да** + the verb, conjugated to match the subject. Искам **да** говоря. Обичам **да** пътувам.\n\nTwo verb families, three article shapes, and the да-construction. You're thinking in Bulgarian.",
        },
      ],
    },
  ],
};
