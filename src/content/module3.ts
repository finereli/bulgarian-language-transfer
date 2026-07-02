import type { Module } from "./types";

export const module3: Module = {
  id: "m3",
  title: "Things: gender and 'the'",
  blurb:
    "Every noun has a gender, 'the' glues itself to the end of the word, and adjectives dress to match.",
  lessons: [
    {
      id: "m3l1",
      title: "Gender",
      subtitle: "той, тя, то for things",
      items: [
        {
          type: "note",
          title: "Three genders, one glance",
          body:
            "Like Hebrew, every Bulgarian noun has a gender — but Bulgarian tells you which one right on the surface:\n\n- ends in a **consonant** → masculine: **град** (city), **хляб** (bread), **стол** (chair)\n- ends in **-а/-я** → feminine: **къща** (house), **вода** (water), **кола** (car)\n- ends in **-о/-е** → neuter: **море** (sea), **вино** (wine), **кафе**\n\nThat one glance decides 'the', adjectives, and which pronoun stands in for the noun.",
          speak: ["град", "къща", "море"],
        },
        {
          type: "choice",
          prompt: "**вода** (water) is…",
          options: ["feminine", "masculine", "neuter"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**град** (city) is…",
          options: ["masculine", "feminine", "neuter"],
          correct: 0,
        },
        {
          type: "choice",
          prompt: "**море** (sea) is…",
          options: ["neuter", "masculine", "feminine"],
          correct: 0,
        },
        {
          type: "note",
          title: "Things are 'he' and 'she'",
          body:
            "Pronouns follow the noun's gender, exactly as in Hebrew (where a table, שולחן, is 'he'):\n\n- Where's the bread? — **Той** е тук. (bread = he)\n- The car? — **Тя** е там. (car = she)\n- The wine? — **То** е добро.",
          speak: ["Той е тук.", "Тя е там."],
        },
        {
          type: "choice",
          prompt: "You're talking about a **кола** (car). Which pronoun replaces it?",
          options: ["тя", "той", "то"],
          correct: 0,
        },
        {
          type: "note",
          title: "Two famous exceptions",
          body:
            "- **дете** (child) is neuter — **то**, whatever the child's actual gender.\n- **баща** (father) ends in -а but is of course masculine — the same kind of exception as Hebrew לילה: looks feminine, isn't.\n\nAlso masculine despite the -а: **дядо** (grandpa), **чичо** (uncle).",
          speak: ["дете", "баща"],
        },
        {
          type: "choice",
          prompt: "**дете** (child) takes which pronoun?",
          options: ["то", "той", "тя"],
          correct: 0,
        },
        {
          type: "note",
          title: "A pantry of nouns",
          body:
            "Useful things, sorted by gender:\n\n- masculine: **хляб** (bread), **стол** (chair), **град** (city), **мъж** (man)\n- feminine: **вода**, **кола**, **къща**, **маса** (table), **жена** (woman), **бира** (beer)\n- neuter: **вино**, **мляко** (milk), **сирене** (white cheese — a national treasure), **кафе**, **дете**\n\n**и** = and.",
          speak: ["хляб и вода", "вино и сирене"],
          ru: "Two furniture traps: Bulgarian **стол** is a *chair* (Russian стул), and *table* is **маса** (not стол!). Misremember these and you'll be sitting on the table.",
        },
        {
          type: "exercise",
          prompt: "**I want bread and water.**",
          answer: "Искам хляб и вода",
        },
        {
          type: "exercise",
          prompt: "**We have wine and cheese.**",
          answer: "Имаме вино и сирене",
          accept: ["ние имаме вино и сирене", "имаме сирене и вино"],
        },
        {
          type: "note",
          title: "Why gender pays rent",
          body:
            "Gender isn't trivia — it powers the next three lessons: 'the', plurals, and adjectives all take their cue from it. The good news: unlike Hebrew, Bulgarian almost always *shows* you the gender in the ending.",
        },
      ],
    },
    {
      id: "m3l2",
      title: "The article that sticks to the end",
      subtitle: "къщата, морето, градът",
      items: [
        {
          type: "note",
          title: "ha- at the other end",
          body:
            "Hebrew puts 'the' in front: **ה**בית. Bulgarian glues it to the **end** of the word:\n\n- feminine: къща → **къщата** (the house), вода → **водата**\n- neuter: море → **морето**, вино → **виното**\n\nSame idea as ה, opposite door.",
          speak: ["къщата", "морето"],
          ru: "Russian has no articles at all, so this is a genuinely new muscle. Rule of thumb: if you'd point at it, or you've already mentioned it, add the suffix.",
        },
        {
          type: "exercise",
          prompt: "Say **the water**.",
          answer: "водата",
        },
        {
          type: "exercise",
          prompt: "**the wine**",
          answer: "виното",
        },
        {
          type: "note",
          title: "Masculine: -ът (and its quiet twin -а)",
          body:
            "Masculine takes **-ът**: град → **градът**, хляб → **хлябът**.\n\nA writing-only detail: when the noun is the *subject*, write **-ът** (градът); anywhere else, write **-а** (града). In speech both sound like 'ъ', and Bulgarians themselves can't hear the difference — so relax, this rule only matters on paper.",
          speak: ["градът", "хлябът"],
        },
        {
          type: "exercise",
          prompt: "**The bread is here.**",
          answer: "Хлябът е тук",
          hint: "Subject → -ът.",
        },
        {
          type: "exercise",
          prompt: "**I want the bread.**",
          answer: "Искам хляба",
          hint: "Not the subject → written -а.",
          after: "Object of искам → written **хляба**, pronounced exactly like хлябът.",
        },
        {
          type: "exercise",
          prompt: "**The car is there.**",
          answer: "Колата е там",
        },
        {
          type: "exercise",
          prompt: "**The child is here.**",
          answer: "Детето е тук",
        },
        {
          type: "choice",
          prompt: "Which one is **the sea**?",
          options: ["морето", "мореът", "мората"],
          correct: 0,
        },
        {
          type: "exercise",
          prompt: "**The coffee is here, right?**",
          answer: "Кафето е тук, нали?",
        },
        {
          type: "note",
          title: "When to use it",
          body:
            "Use the article roughly where English would use 'the'. Hebrew speakers: it's the same instinct as ה — you already know *when*, you're just learning *where* to put it.\n\n- **Искам кафе.** — I want (some) coffee.\n- **Кафето е добро.** — The coffee is good.",
          speak: ["Искам кафе.", "Кафето е добро."],
        },
        {
          type: "exercise",
          prompt: "**The coffee is good.**",
          answer: "Кафето е добро",
          after: "добро — the adjective matched the neuter noun. Full story two lessons from now.",
        },
        {
          type: "note",
          title: "Collect the set",
          body:
            "**-ът/-а** (m) · **-та** (f) · **-то** (n) — and for plurals, **-те/-та**, coming next.\n\nградът · къщата · морето. Suffix, not prefix. That's the whole trick.",
        },
      ],
    },
    {
      id: "m3l3",
      title: "Plurals",
      subtitle: "къщи, градове, деца",
      items: [
        {
          type: "note",
          title: "Feminine: swap -а for -и",
          body:
            "As regular as Hebrew ־ות:\n\n- жена → **жени** (women)\n- къща → **къщи**\n- кола → **коли**",
          speak: ["жени", "къщи", "коли"],
        },
        {
          type: "exercise",
          prompt: "**houses**",
          answer: "къщи",
        },
        {
          type: "note",
          title: "Masculine: -и, unless the word is short",
          body:
            "Longer masculine nouns add **-и**: студент → **студенти**, журналист → **журналисти**.\n\nOne-syllable masculine nouns puff up with **-ове**: град → **градове**, стол → **столове**.",
          speak: ["студенти", "градове", "столове"],
        },
        {
          type: "exercise",
          prompt: "**cities**",
          answer: "градове",
        },
        {
          type: "exercise",
          prompt: "**students**",
          answer: "студенти",
        },
        {
          type: "note",
          title: "Neuter: -а / -ета",
          body:
            "- вино → **вина**, място (place) → **места**\n- -е words take -ета: море → **морета**, кафе → **кафета**\n- and the essential irregular: дете → **деца** (children)",
          speak: ["морета", "кафета", "деца"],
        },
        {
          type: "exercise",
          prompt: "**children**",
          answer: "деца",
          after: "Irregular, unavoidable, everywhere. **Децата** = the children.",
        },
        {
          type: "note",
          title: "Count to five, order anything",
          body:
            "**едно, две, три, четири, пет** — 1 to 5.\n\n'One' and 'two' agree with gender: **един** мъж / **една** жена / **едно** дете; **два** (m) / **две** (f and n).\n\n**Две кафета, моля!** — two coffees, please (моля = please).",
          speak: ["едно, две, три, четири, пет", "Две кафета, моля!"],
          ru: "After два/три/четири, masculine object nouns take a special -а form: два стол**а**, три град**а**. It looks like the Russian genitive singular after numerals — it's actually the old dual, but your Russian instinct gives the right answer for free.",
        },
        {
          type: "exercise",
          prompt: "**two coffees**",
          answer: "две кафета",
        },
        {
          type: "exercise",
          prompt: "**three beers**",
          answer: "три бири",
        },
        {
          type: "exercise",
          prompt: "**I want two coffees and bread.**",
          answer: "Искам две кафета и хляб",
        },
        {
          type: "note",
          title: "The plural 'the'",
          body:
            "Plural + article: **-те** after -и plurals, **-та** after -а plurals:\n\n- студенти → **студентите**, коли → **колите**\n- деца → **децата**, кафета → **кафетата**",
          speak: ["студентите", "децата"],
        },
        {
          type: "exercise",
          prompt: "**the children**",
          answer: "децата",
        },
        {
          type: "exercise",
          prompt: "**The students are here.**",
          answer: "Студентите са тук",
        },
        {
          type: "note",
          title: "Good enough beats perfect",
          body:
            "**-и** covers most plurals, **-ове** the short masculine ones, **-а/-ета** the neuter ones. Get these right and the exceptions will fix themselves through exposure.",
        },
      ],
    },
    {
      id: "m3l4",
      title: "Describing things",
      subtitle: "нов, нова, ново, нови",
      items: [
        {
          type: "note",
          title: "Adjectives dress to match",
          body:
            "Exactly like Hebrew (בית גדול, בתים גדולים), Bulgarian adjectives agree with their noun:\n\n- **нов** град (new city) — masculine, bare\n- **нова** кола — feminine -а\n- **ново** кафе — neuter -о\n- **нови** къщи — plural -и (one plural form for all genders — easier than Hebrew!)",
          speak: ["нов град", "нова кола", "ново кафе", "нови къщи"],
        },
        {
          type: "exercise",
          prompt: "**a new car**",
          answer: "нова кола",
        },
        {
          type: "exercise",
          prompt: "**a new city**",
          answer: "нов град",
        },
        {
          type: "note",
          title: "The starter set",
          body:
            "- **хубав** — nice, beautiful\n- **добър** (f **добра**, n **добро**) — good\n- **голям** — big\n- **малък** (f **малка**) — small\n\n**Виното е добро.** — The wine is good.",
          speak: ["хубав", "добра", "Виното е добро."],
        },
        {
          type: "exercise",
          prompt: "**The wine is good.**",
          answer: "Виното е добро",
        },
        {
          type: "note",
          title: "Two shape-shifters",
          body:
            "- **голям** swaps я for е in the plural: голям, голяма, голямо, **големи**\n- **малък** drops its ъ: малък, **малка, малко, малки**\n\n(This я↔е swap and vanishing ъ show up all over Bulgarian — meet them once, recognize them forever.)",
          speak: ["голяма къща", "големи къщи", "малки деца"],
        },
        {
          type: "exercise",
          prompt: "**a big house**",
          answer: "голяма къща",
        },
        {
          type: "exercise",
          prompt: "**small children**",
          answer: "малки деца",
        },
        {
          type: "exercise",
          prompt: "**The city is big.**",
          answer: "Градът е голям",
        },
        {
          type: "note",
          title: "'The' jumps onto the adjective",
          body:
            "With an adjective, the article rides on the *first* word:\n\n- **новата** кола — the new car\n- **голямото** море — the big sea\n- **новият** хотел — the new hotel (masculine adds **-ият**)\n\nHebrew doubles the ה (הבית הגדול); Bulgarian marks once, up front.",
          speak: ["новата кола", "голямото море", "новият хотел"],
        },
        {
          type: "exercise",
          prompt: "**the new car**",
          answer: "новата кола",
        },
        {
          type: "exercise",
          prompt: "**the big sea**",
          answer: "голямото море",
        },
        {
          type: "exercise",
          prompt: "**The new hotel is there.**",
          answer: "Новият хотел е там",
          hint: "Masculine 'the' on an adjective: -ият.",
        },
        {
          type: "note",
          title: "много — very",
          body: "**Много** + adjective = very: **много хубав** — very beautiful. (Yes, the same много that means 'a lot'.)",
          speak: ["много хубав"],
        },
        {
          type: "exercise",
          prompt: "**The house is very beautiful.**",
          answer: "Къщата е много хубава",
        },
        {
          type: "note",
          title: "Checkpoint",
          body:
            "You can now name things, count them, point at *the* one you mean, and describe it. Say something true: *Кафето е много добро. Градът е голям.*",
          ru: "False friend of the module: **гора** is a *forest* in Bulgarian, not a mountain. Mountain = **планина**. Hikers, beware.",
        },
      ],
    },
  ],
};
