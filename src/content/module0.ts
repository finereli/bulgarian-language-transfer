import type { Module } from "./types";

export const module0: Module = {
  id: "m0",
  title: "Reading Bulgarian",
  blurb:
    "Learn to read Cyrillic in three lessons. You already know more letters than you think.",
  lessons: [
    {
      id: "m0l1",
      title: "The letters you recognize",
      subtitle: "Nine letters in ten minutes",
      items: [
        {
          type: "note",
          title: "You've done this before",
          body:
            "Half of Cyrillic looks like Latin letters. The other half you can learn in an evening. Three short lessons and you'll be reading Bulgarian.\n\nThis module is optional if you already read Cyrillic (Russian speakers, for example).",
          he: "You already read one non-Latin script fluently. Cyrillic will come quickly.",
        },
        {
          type: "note",
          title: "Six letters you already know",
          body:
            "These six Cyrillic letters look and sound exactly like their English counterparts:\n\n**А** = a, **Е** = e, **К** = k, **М** = m, **О** = o, **Т** = t\n\nThat's enough to read real words.",
        },
        {
          type: "choice",
          prompt: "What does **МАМА** say?",
          options: ["mama", "nana", "tama"],
          correct: 0,
          after: "Мама - same word, same letters. You already read Cyrillic.",
        },
        {
          type: "choice",
          prompt: "Read this word: **АТОМ**",
          options: ["atom", "aton", "atok"],
          correct: 0,
          after: "Атом - four letters, all ones you know.",
        },
        {
          type: "choice",
          prompt: "And **ТЕМА**?",
          options: ["tema", "teka", "mota"],
          correct: 0,
          after: "Тема - theme/topic. Four letters, all ones you know.",
        },
        {
          type: "note",
          title: "Three more easy ones",
          body:
            "These three look slightly different but are easy to remember:\n\n**С** = s (looks like C but sounds like S)\n**И** = i (looks like a backwards N)\n**У** = u (looks like Y but sounds like 'oo')\n\nThat gives you 9 letters - a third of the alphabet.",
        },
        {
          type: "choice",
          prompt: "Read this: **ТАКСИ**",
          options: ["takni", "taksi", "takci"],
          correct: 1,
          after: "Такси - taxi. С sounds like S (even though it looks like C), and И sounds like I (even though it looks like N).",
        },
        {
          type: "choice",
          prompt: "Read: **МАСКА**",
          options: ["macka", "maska", "naska"],
          correct: 1,
          after: "Маска - mask. С is S not C, and И is I not N.",
        },
        {
          type: "choice",
          prompt: "A harder one: **КОСМОС**",
          options: ["kosmos", "kostos", "kosnos"],
          correct: 0,
          after: "Космос - cosmos. Nine letters and you're reading real words.",
        },
        {
          type: "note",
          body:
            "Nine letters down, and you can already read маска, такси, космос. A third of the alphabet in five minutes. The next lesson covers the tricky ones - letters that look like Latin letters but have different sounds.",
        },
      ],
    },
    {
      id: "m0l2",
      title: "The imposters",
      subtitle: "Letters that look familiar but aren't",
      items: [
        {
          type: "note",
          title: "The hard part",
          body:
            "Three Cyrillic letters look like Latin letters but make completely different sounds. This is the hardest part of learning to read Cyrillic - you'll misread them for about a week, then it becomes automatic.\n\n**В** = v (looks like B, sounds like V)\n**Н** = n (looks like H, sounds like N)\n**Р** = r (looks like P, sounds like R)\n\nExpect to misread these at first. That's normal.",
          ru: "For Russian speakers these are obvious - this is the main lesson you can skip.",
        },
        {
          type: "choice",
          prompt: "The letter **В** in Cyrillic sounds like...",
          options: ["b", "v", "w"],
          correct: 1,
          after: "В = v. It looks like B but it's V. This is the biggest imposter.",
        },
        {
          type: "choice",
          prompt: "Read **ВИНО**. What does it say?",
          options: ["bino", "vino", "biho"],
          correct: 1,
          after: "Вино - wine. В is V, not B. Н is N, not H.",
        },
        {
          type: "choice",
          prompt: "The letter **Н** sounds like...",
          options: ["h", "n", "m"],
          correct: 1,
          after: "Н = n. It looks like H but it's N.",
        },
        {
          type: "choice",
          prompt: "Read **НОРМА**.",
          options: ["horma", "norma", "hopma"],
          correct: 1,
          after: "Норма - norm. Н is N (not H), Р is R (not P).",
        },
        {
          type: "choice",
          prompt: "The letter **Р** sounds like...",
          options: ["p", "r", "d"],
          correct: 1,
          after: "Р = r. Looks like P, sounds like R.",
        },
        {
          type: "choice",
          prompt: "Now all three at once. Read **РЕСТОРАНТ**.",
          options: ["pestorant", "restorant", "restopant"],
          correct: 1,
          after: "Ресторант - restaurant. Every Р in there is R, not P.",
        },
        {
          type: "note",
          title: "One more: Х",
          body:
            "**Х** = h (a soft sound, like clearing your throat gently)\n\nThis one doesn't have a Latin lookalike problem - it's just a new letter for a familiar sound.",
          he: "Х sounds like כ in כל. Same gentle throat sound.",
        },
        {
          type: "choice",
          prompt: "Read: **ХОТЕЛ**",
          options: ["hotel", "kotel", "hoter"],
          correct: 0,
          after: "Хотел - hotel. Х is H.",
        },
        {
          type: "choice",
          prompt: "Putting it all together: read **СЕРВИС**.",
          options: ["sepvis", "sepbic", "servis"],
          correct: 2,
          after: "Сервис - service. С=s, Е=e, Р=r (not P!), В=v (not B!), И=i, С=s.",
        },
        {
          type: "choice",
          prompt: "Read: **НАВИГАТОР**",
          options: ["havigator", "navigator", "havigatop"],
          correct: 1,
          after: "Навигатор - navigator. Н is N (not H), Р is R (not P). Getting easier.",
        },
      ],
    },
    {
      id: "m0l3",
      title: "The rest of the alphabet",
      subtitle: "New shapes and the special Bulgarian letters",
      items: [
        {
          type: "note",
          title: "New shapes, familiar sounds",
          body:
            "These letters make sounds you already know - some look new, some almost familiar:\n\n**П** = p (looks like a lowercase p with a flat top)\n**Б** = b (since В already took V, Bulgarian needed a new letter for B)\n**Г** = g, **Д** = d, **Л** = l, **Ф** = f, **Й** = y (as in 'yes')",
        },
        {
          type: "choice",
          prompt: "Read: **БАР**",
          options: ["bar", "var", "bap"],
          correct: 0,
          after: "Бар - bar. Б is the real B.",
        },
        {
          type: "choice",
          prompt: "Read: **ПЛАН**",
          options: ["plah", "plan", "blah"],
          correct: 1,
          after: "План - plan. П is the real P (since Р took the R sound), and Н is N not H.",
        },
        {
          type: "note",
          title: "Letters with new sounds",
          body:
            "These letters pair new shapes with sounds English spells with two letters:\n\n**Ш** = sh, **Ч** = ch, **Ж** = zh (the 's' in 'plea**s**ure'), **З** = z, **Ц** = ts\n\nOne letter per sound - more efficient than English.",
        },
        {
          type: "choice",
          prompt: "Read: **ШОКОЛАД**",
          options: ["chokolad", "shokolad", "zhokolad"],
          correct: 1,
          after: "Шоколад - chocolate. Ш = sh.",
        },
        {
          type: "choice",
          prompt: "Read: **ЖУРНАЛ**",
          options: ["zurnal", "shurnal", "zhurnal"],
          correct: 2,
          after: "Журнал - journal/magazine. Ж = zh, like the 's' in 'pleasure'.",
        },
        {
          type: "note",
          title: "The Bulgarian specials",
          body:
            "Four letters unique to Bulgarian (and close relatives):\n\n**Щ** = sht (one letter, says 'sht')\n**Ъ** = the vowel in English 's**u**n' - a full, stressable vowel\n**Ю** = yu, **Я** = ya\n\n**Ь** (soft sign) is rare in Bulgarian - you'll almost never see it.",
          ru: "Careful: Bulgarian **щ** is 'sht', not Russian 'shch'. And **ъ** is a full vowel here, not a hard sign. These are the two biggest traps.",
        },
        {
          type: "choice",
          prompt: "Read: **БЪЛГАРИЯ**",
          options: ["bulgariya", "bylgariya", "balgariya"],
          correct: 1,
          after: "България. The ъ makes the 'u' in 'sun' sound: b-ul-GA-ri-ya. Я at the end says 'ya'.",
        },
        {
          type: "choice",
          prompt: "Read: **ИНФОРМАЦИЯ**",
          options: ["informatsiya", "informashiya", "informakiya"],
          correct: 0,
          after: "Информация - information. Ц = ts. You just read a long Bulgarian word.",
        },
        {
          type: "note",
          body:
            "You can now read Bulgarian. Every lesson from here on will reinforce these letters through real words and sentences - reading gets faster the more you do it. The confusing letters (В, Н, Р) will take about a week to feel automatic.\n\nNext: words you already know.",
        },
      ],
    },
  ],
};
