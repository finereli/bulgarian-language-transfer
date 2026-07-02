import type { Module } from "./types";

export const module4: Module = {
  id: "m4",
  title: "People: me, you, mine, yours",
  blurb: "The little words that stand for people — and the Bulgarian way of owning things.",
  lessons: [
    {
      id: "m4l1",
      title: "Me, you, him, her",
      subtitle: "Виждам те. Не те разбирам.",
      items: [
        {
          type: "note",
          title: "The short pronouns",
          body:
            "**Виждам** = *I see* (а-family). Now, who do you see?\n\n- **ме** — me\n- **те** — you\n- **го** — him / it (m, n)\n- **я** — her / it (f)\n- **ни** — us\n- **ви** — you all\n- **ги** — them\n\n**Виждам го.** — I see him.",
          speak: ["Виждам го.", "Виждам я."],
          ru: "Watch the impostor: Bulgarian **я** means *her* — it is not 'I' (I = аз). Your Russian reflex will fight you on this one for a week.",
        },
        {
          type: "exercise",
          prompt: "**I see her.**",
          answer: "Виждам я",
          hint: "Verb comes first, so the pronoun follows: Виждам + her (я).",
        },
        {
          type: "exercise",
          prompt: "**I see them.**",
          answer: "Виждам ги",
          hint: "them = ги, tucked right after the verb.",
        },
        {
          type: "note",
          title: "Same dance as съм",
          body:
            "These little words are clitics — they obey the rule you met with съм: **never first in the sentence**, and they hug the verb.\n\n- Verb first → pronoun after: **Виждам те.**\n- Anything before the verb (не, a subject) → pronoun slides in front: **Не те виждам.** / **Аз те виждам.**",
          speak: ["Виждам те.", "Не те виждам."],
        },
        {
          type: "exercise",
          prompt: "**I don't see him.**",
          answer: "Не го виждам",
          hint: "Не leads, so го slides in before the verb.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you see me?**",
          answer: "Виждаш ли ме?",
          hint: "Виждаш ли … then me (ме) at the end.",
        },
        {
          type: "note",
          title: "Understanding people",
          body:
            "**Разбираш ли ме?** — Do you understand me?\n**Не те разбирам.** — I don't understand you. (Say it kindly; Bulgarians will slow down and love you for trying.)",
          speak: ["Разбираш ли ме?", "Не те разбирам."],
        },
        {
          type: "exercise",
          prompt: "**I don't understand you.**",
          answer: "Не те разбирам",
          hint: "Не goes first, so те comes before разбирам.",
        },
        {
          type: "exercise",
          prompt: "**She understands me.**",
          answer: "Тя ме разбира",
          accept: ["разбира ме"],
          hint: "With тя up front, ме slips in before the verb.",
        },
        {
          type: "note",
          title: "The famous ones",
          body:
            "- **Обичам те.** — I love you.\n- **Чакам те.** — I'm waiting *for* you. (**чакам** = I wait — and no 'for' needed!)",
          speak: ["Обичам те.", "Чакам те."],
        },
        {
          type: "exercise",
          prompt: "**I love you.**",
          answer: "Обичам те",
          hint: "Verb first: Обичам + you (те).",
        },
        {
          type: "exercise",
          prompt: "**I'm waiting for you.**",
          answer: "Чакам те",
          after: "чакам swallows the 'for' — you wait *someone*, directly.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Do you love me?**",
          answer: "Обичаш ли ме?",
          hint: "Обичаш ли … then me (ме).",
        },
        {
          type: "note",
          title: "Small words, strict habits",
          body:
            "ме, те, го, я, ни, ви, ги — seven small words that never lead the sentence and always stay near the verb. Their placement will start to *feel* right long before you can explain it. That's normal — it's how natives run it too.",
        },
      ],
    },
    {
      id: "m4l2",
      title: "Mine and yours",
      subtitle: "колата ми, майка ми, колата на Мария",
      items: [
        {
          type: "note",
          title: "'s and 'of' — both are на",
          body:
            "Ownership between nouns uses **на**, exactly like Hebrew של:\n\n**колата на Мария** — Maria's car (*the car of Maria* — האוטו של מריה)\n\nNo apostrophe-s, no cases. One little word.",
          speak: ["колата на Мария"],
          ru: "This is what replaced the entire Russian genitive case: машина Марии → колата на Мария. Preposition + unchanged noun. Enjoy the refund.",
        },
        {
          type: "exercise",
          prompt: "**Peter's car** (Peter = Петър)",
          answer: "колата на Петър",
          hint: "the-car + на + the name.",
        },
        {
          type: "exercise",
          prompt: "**the child's father**",
          answer: "бащата на детето",
          hint: "баща is masculine but ends in -а, so 'the father' = бащата.",
        },
        {
          type: "note",
          title: "My, your, his, her — the short way",
          body:
            "Everyday possession is: **definite noun + a little word after it**:\n\n- **колата ми** — my car ('the-car of-me')\n- **колата ти** — your car\n- **колата му** — his · **колата ѝ** — her\n- **колата ни** — our · **колата ви** — your (pl.) · **колата им** — their\n\nSame order as Hebrew: האוטו **שלי** — noun first, owner after.",
          speak: ["колата ми", "къщата му"],
        },
        {
          type: "exercise",
          prompt: "**my car**",
          answer: "колата ми",
          hint: "Definite noun + ми: колата + ми.",
        },
        {
          type: "exercise",
          prompt: "**his house**",
          answer: "къщата му",
          hint: "the-house (къщата) + his (му).",
        },
        {
          type: "exercise",
          prompt: "**her child** (her = ѝ — typing plain и is fine)",
          answer: "детето ѝ",
          accept: ["детето и"],
          after: "That accent mark on **ѝ** just distinguishes it from и ('and') in writing.",
        },
        {
          type: "exercise",
          prompt: "**our city**",
          answer: "градът ни",
          accept: ["града ни"],
        },
        {
          type: "note",
          title: "Family skips 'the'",
          body:
            "With close family in the singular, the article is dropped:\n\n- **майка ми** — my mother (not майката ми)\n- **баща ми**, **брат ми**, **сестра ми** — my father / brother / sister\n- **мъжът ми** — my husband and **жена ми** — my wife keep their own habits (мъж takes the article, жена doesn't need one — don't overthink, copy the phrases)",
          speak: ["майка ми", "брат ми", "мъжът ми"],
          ru: "**Майка** = *mother* in Bulgarian. In Russian, майка is an undershirt. Possibly the most important false friend in the language — treat the word with respect.",
        },
        {
          type: "exercise",
          prompt: "**my mother**",
          answer: "майка ми",
          hint: "Close family drops 'the' — just майка + ми.",
        },
        {
          type: "exercise",
          prompt: "**My brother is here.**",
          answer: "Брат ми е тук",
          hint: "брат ми (no article), then е тук.",
        },
        {
          type: "note",
          title: "The long possessives (recognition only)",
          body:
            "Full forms exist — **мой/моя/мое/мои** (my), **твой** (your), **негов** (his), **неин** (her), **наш, ваш, техен** — used mostly for emphasis:\n\n**Моята кола!** — MY car (not yours!)\n\nRecognize them now; the short forms (ми, ти, му…) do 90% of daily work.",
          speak: ["Моята кола"],
        },
        {
          type: "exercise",
          prompt: "**Their house is big.**",
          answer: "Къщата им е голяма",
          hint: "the-house + им, then е голяма.",
        },
        {
          type: "exercise",
          prompt: "Ask: **Is your car new?**",
          answer: "Колата ти нова ли е?",
          accept: ["нова ли е колата ти"],
          hint: "ли goes after the word in question — нова.",
        },
        {
          type: "note",
          title: "Ownership, solved",
          body:
            "**на** between nouns, **ми/ти/му/ѝ/ни/ви/им** after the (definite) noun, family words without 'the'. Three patterns, all of possession.",
        },
      ],
    },
  ],
};
