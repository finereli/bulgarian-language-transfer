import type { Module } from "./types";

export const module0: Module = {
  id: "m0",
  title: "1. Reading Bulgarian",
  blurb:
    "Learn to read Cyrillic in four lessons. You already know more letters than you think.",
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
          introduces: ["cyrillic-reading"],
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
          title: "Now type it",
          body:
            "You can read these words. Now let's write them. When you type Latin letters, they convert to Cyrillic automatically:\n\nm → м, a → а, t → т, o → о, e → е, k → к\n\nFor these six letters, typing is trivial - the Latin letter IS the Cyrillic letter.",
          introduces: ["cyrillic-typing"],
        },
        {
          type: "exercise",
          prompt: "Type **мама** (mama).",
          answer: "мама",
          hint: "Type m-a-m-a. Each letter converts as you type.",
          after: "You just wrote your first word in Cyrillic.",
        },
        {
          type: "exercise",
          prompt: "Type **атом** (atom).",
          answer: "атом",
          hint: "a-t-o-m.",
        },
        {
          type: "note",
          title: "Three more easy ones",
          body:
            "These three look slightly different but are easy to remember:\n\n**С** = s (looks like C but sounds like S) - type **s**\n**И** = i (looks like a backwards N) - type **i**\n**У** = u (looks like Y but sounds like 'oo') - type **u**\n\nThat gives you 9 letters - a third of the alphabet.",
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
          options: ["kosmos", "kocmoc", "kosmoc"],
          correct: 0,
          after: "Космос - cosmos. Nine letters and you're reading real words.",
        },
        {
          type: "exercise",
          prompt: "Type **такси** (taxi).",
          answer: "такси",
          hint: "t-a-k-s-i. Remember С is typed as 's'.",
          after: "С looks like C but you type 's'. That's the only twist so far.",
        },
        {
          type: "exercise",
          prompt: "Type **космос** (cosmos).",
          answer: "космос",
          hint: "k-o-s-m-o-s.",
          after: "Six letters, typed as fast as English. Reading and writing - both working.",
        },
        {
          type: "note",
          body:
            "Nine letters down, and you can already read and type маска, такси, космос. A third of the alphabet in five minutes. The next lesson covers the tricky ones - letters that look like Latin letters but have different sounds.",
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
            "Three Cyrillic letters look like Latin letters but make completely different sounds. This is the hardest part of learning to read Cyrillic - you'll misread them for about a week, then it becomes automatic.\n\n**В** = v (looks like B, sounds like V) - type **v** (or **w**)\n**Н** = n (looks like H, sounds like N) - type **n**\n**Р** = r (looks like P, sounds like R) - type **r**\n\nThe typing actually helps here - you type the SOUND, not the SHAPE. Type 'v' even though it looks like B.",
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
          type: "exercise",
          prompt: "Type **вино** (wine).",
          answer: "вино",
          hint: "v-i-n-o. Type 'v' for В (not 'b'!) and 'n' for Н (not 'h'!).",
          after: "Your fingers learn the sound, not the shape. That's why typing helps beat the imposters.",
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
          type: "exercise",
          prompt: "Type **норма** (norm).",
          answer: "норма",
          hint: "n-o-r-m-a. Н='n', Р='r' - type the sounds.",
          after: "Three imposters in one word, and your fingers got them right.",
        },
        {
          type: "note",
          title: "One more: Х",
          body:
            "**Х** = h (a soft sound, like clearing your throat gently) - type **h** (or **x**)\n\nThis one doesn't have a Latin lookalike problem - it's just a new letter for a familiar sound.",
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
        {
          type: "exercise",
          prompt: "Type **сервис** (service).",
          answer: "сервис",
          hint: "s-e-r-v-i-s. Every imposter is here: Р='r', В='v'.",
          after: "All three imposters in one word, typed by sound. The keyboard reinforces what your eyes are still learning.",
        },
      ],
    },
    {
      id: "m0l3",
      title: "New shapes",
      subtitle: "Seven letters with familiar sounds",
      items: [
        {
          type: "note",
          title: "New shapes, familiar sounds",
          body:
            "The next seven letters make sounds you already know from English. The shapes are new, but you'll pick them up fast because the sounds are familiar.\n\nWe'll take them one at a time.",
        },
        {
          type: "note",
          title: "П = p",
          body:
            "**П** looks like a doorframe (or Greek pi). Since Р already took the P-shape for the R sound, Bulgarian uses П for the actual P sound.\n\nП = p, every time.",
        },
        {
          type: "choice",
          prompt: "Read: **ПАРК**",
          options: ["park", "papk", "rark"],
          correct: 0,
          after: "Парк - park. П is P, and remember Р is R (not P).",
        },
        {
          type: "exercise",
          prompt: "Type **парк** (park).",
          answer: "парк",
          hint: "p-a-r-k. П is 'p', Р is 'r'.",
          after: "П='p' and Р='r' - the keyboard helps keep them separate.",
        },
        {
          type: "note",
          title: "Б = b",
          body:
            "**Б** is the real B sound. Remember, В *looks* like B but sounds like V - so Bulgarian needed a different letter for the actual B sound. That's Б.\n\nБ = b.",
        },
        {
          type: "choice",
          prompt: "Read: **БАР**",
          options: ["bar", "var", "bap"],
          correct: 0,
          after: "Бар - bar. Б is the real B (В is V, not B).",
        },
        {
          type: "note",
          title: "Д = d",
          body:
            "**Д** looks like a little tent or triangle. It's simply the D sound.\n\nД = d.",
        },
        {
          type: "choice",
          prompt: "Read: **ДОКТОР**",
          options: ["doktop", "doktor", "roktod"],
          correct: 1,
          after: "Доктор - doctor. Д is D, and both Р letters at the end are R (not P).",
        },
        {
          type: "note",
          title: "Г = g",
          body:
            "**Г** looks like an upside-down L (or Greek gamma). It's always a hard G, as in 'go' - never soft like in 'gem'.\n\nГ = g (hard).",
        },
        {
          type: "choice",
          prompt: "Read: **ГРАД**",
          options: ["grad", "grat", "darg"],
          correct: 0,
          after: "Град - city (cognate of '-grad' in Belgrade, Stalingrad). Г is hard G, Д is D.",
        },
        {
          type: "exercise",
          prompt: "Type **град** (city).",
          answer: "град",
          hint: "g-r-a-d.",
        },
        {
          type: "note",
          title: "Л = l",
          body:
            "**Л** looks like Д's sibling - similar triangular shape (or think of Greek lambda). It's the L sound.\n\nЛ = l.",
        },
        {
          type: "choice",
          prompt: "Read: **ПЛАН**",
          options: ["plan", "plah", "blan"],
          correct: 0,
          after: "План - plan. П is P, Л is L, and Н is N (not H).",
        },
        {
          type: "note",
          title: "Ф = f",
          body:
            "**Ф** is a circle with a vertical line through it (like Greek phi). Simple - it's the F sound.\n\nФ = f.",
        },
        {
          type: "choice",
          prompt: "Read: **ФАКТ**",
          options: ["fakt", "vakt", "fart"],
          correct: 0,
          after: "Факт - fact. Ф is F.",
        },
        {
          type: "note",
          title: "Й = y",
          body:
            "**Й** is just И with a little hat (breve) on top. While И = 'ee' (a vowel), Й = 'y' as in 'yes' or the end of 'boy'. It's called 'И кратко' - short И.\n\nЙ = y (as in yes). Type **j** to get it.",
        },
        {
          type: "choice",
          prompt: "Read: **ЙОГУРТ**",
          options: ["yogurt", "iogurt", "jogurt"],
          correct: 0,
          after: "Йогурт - yogurt. Й at the start makes the Y sound.",
        },
        {
          type: "choice",
          prompt: "Now let's combine them. Read: **ФУТБОЛ**",
          options: ["futbol", "futvol", "putbol"],
          correct: 0,
          after: "Футбол - football/soccer. Ф=f, Т=t, Б=b (not В!), Л=l.",
        },
        {
          type: "choice",
          prompt: "Read: **БЛОГ**",
          options: ["vlog", "blog", "dlog"],
          correct: 1,
          after: "Блог - blog. Б is the real B, Л is L, Г is hard G.",
        },
        {
          type: "exercise",
          prompt: "Type **футбол** (football).",
          answer: "футбол",
          hint: "f-u-t-b-o-l.",
          after: "Every new letter from this lesson in one word: Ф, Б, Л. Typed by sound.",
        },
        {
          type: "note",
          body:
            "Seven new letters down. You now know 20 of 30 - two thirds of the Bulgarian alphabet. Every one of these makes a sound you already knew; only the shapes were new.\n\nNext lesson: letters for sounds that English spells with two letters (sh, ch, zh, ts) - and the uniquely Bulgarian letters.",
        },
      ],
    },
    {
      id: "m0l4",
      title: "New sounds",
      subtitle: "Compound sounds and the Bulgarian specials",
      items: [
        {
          type: "note",
          title: "One letter, two-letter sounds",
          body:
            "English needs two letters to write 'sh', 'ch', 'zh', 'ts'. Bulgarian gives each of these a single letter. More efficient.\n\nTo type these, you'll use the same two-letter combos: type **sh** to get Ш, **zh** for Ж, **ch** for Ч. The keyboard converts them as you type.\n\nWe'll take them one at a time, then meet the uniquely Bulgarian letters.",
        },
        {
          type: "note",
          title: "Ш = sh",
          body:
            "**Ш** looks like a comb with three teeth pointing up. It's the 'sh' in 'ship' - one letter instead of two.\n\nШ = sh.",
        },
        {
          type: "choice",
          prompt: "Read: **ШОКОЛАД**",
          options: ["shokolad", "chokolad", "ssokolad"],
          correct: 0,
          after: "Шоколад - chocolate. Ш is 'sh'. One letter for the whole sound.",
        },
        {
          type: "exercise",
          prompt: "Type **шоколад** (chocolate).",
          answer: "шоколад",
          hint: "sh-o-k-o-l-a-d. Type 'sh' for Ш.",
          after: "Type 'sh' and the keyboard gives you Ш. One keystroke combo, one letter.",
        },
        {
          type: "note",
          title: "Ж = zh",
          body:
            "**Ж** looks like a bug or snowflake. It's the sound in the middle of 'plea**s**ure' or 'vi**s**ion' - the voiced version of 'sh'. French writes it as 'j'.\n\nЖ = zh.",
          he: "Ж is like ז׳ in ז׳קט.",
        },
        {
          type: "choice",
          prompt: "Read: **ЖУРНАЛ**",
          options: ["shurnal", "zhurnal", "zurnal"],
          correct: 1,
          after: "Журнал - journal/magazine. Ж is 'zh' - that buzzing 'sh' sound.",
        },
        {
          type: "note",
          title: "Ч = ch",
          body:
            "**Ч** looks like a reversed 4. It's the 'ch' in 'church' or 'chess'.\n\nЧ = ch.",
        },
        {
          type: "choice",
          prompt: "Read: **ЧАЙ**",
          options: ["chay", "shay", "tsay"],
          correct: 0,
          after: "Чай - tea. Ч is 'ch', Й is 'y'. Чай is 'chai' - the word half the world uses for tea.",
        },
        {
          type: "exercise",
          prompt: "Type **чай** (tea).",
          answer: "чай",
          hint: "ch-a-j. Type 'ch' for Ч and 'j' for Й.",
          after: "Ч='ch', Й='j'. Two new typing combos in one short word.",
        },
        {
          type: "note",
          title: "З = z",
          body:
            "**З** looks like the number 3. Easy mnemonic: 3 → З → z.\n\nЗ = z.",
        },
        {
          type: "choice",
          prompt: "Read: **ЗОНА**",
          options: ["zona", "sona", "tsona"],
          correct: 0,
          after: "Зона - zone. З (looks like 3) is Z.",
        },
        {
          type: "note",
          title: "Ц = ts",
          body:
            "**Ц** looks like a shorter Ш with a little tail hanging off the right side. It's the 'ts' sound - like the end of 'ca**ts**'.\n\nЦ = ts. Type **c** to get it.",
        },
        {
          type: "choice",
          prompt: "Read: **КОНЦЕРТ**",
          options: ["kontsert", "konchert", "konsert"],
          correct: 0,
          after: "Концерт - concert. Ц is 'ts'. The Р near the end is R (not P!).",
        },
        {
          type: "exercise",
          prompt: "Type **концерт** (concert).",
          answer: "концерт",
          hint: "k-o-n-c-e-r-t. Type 'c' for Ц.",
          after: "Ц is just 'c' on the keyboard. One letter for the 'ts' sound.",
        },
        {
          type: "note",
          title: "The Bulgarian specials",
          body:
            "The last four letters are distinctly Bulgarian. Two are compound sounds (like the ones above), and two are vowels you haven't seen yet.",
        },
        {
          type: "note",
          title: "Щ = sht",
          body:
            "**Щ** looks like Ш (sh) with a little tail. And that's roughly what it sounds like: 'sh' + 't' = 'sht'. One letter for a whole cluster.\n\nThis is uniquely Bulgarian - in Russian the same letter says 'shch'.\n\nЩ = sht. Type **sht** to get it.",
          introduces: ["щ-sound"],
          ru: "Careful: Bulgarian Щ is 'sht', NOT Russian 'shch'. This is the biggest pronunciation trap for Russian speakers.",
        },
        {
          type: "choice",
          prompt: "Read: **ПЛОЩАД**",
          options: ["ploshtad", "ploshchad", "ploshad"],
          correct: 0,
          after: "Площад - square (like a town square). Щ = 'sht'. One letter, three sounds.",
        },
        {
          type: "exercise",
          prompt: "Type **площад** (square).",
          answer: "площад",
          hint: "p-l-o-sht-a-d. Type 'sht' for Щ.",
          after: "Type 'sht' and the keyboard recognizes it as one letter: Щ.",
        },
        {
          type: "note",
          title: "Ъ = the vowel in 'sun'",
          body:
            "**Ъ** (called 'ер голям' - big er) is a full vowel in Bulgarian. It sounds like the 'u' in English 'sun' or 'but' - that neutral, unstressed vowel.\n\nUnlike Russian where ъ is a silent separator, in Bulgarian it's a real, stressable vowel. You'll see it everywhere.\n\nЪ = u (as in 'sun'). Type **y** to get it.",
          introduces: ["ъ-sound"],
          ru: "This is NOT a hard sign. In Bulgarian, Ъ is a full vowel - the most common vowel after А. It carries stress and everything.",
        },
        {
          type: "choice",
          prompt: "Read: **ЦЕНТЪР**",
          options: ["tsentup", "tsentur", "tsenter"],
          correct: 1,
          after: "Център - center. Ц is 'ts', Ъ is that 'u-in-sun' vowel, Р at the end is R.",
        },
        {
          type: "exercise",
          prompt: "Type **център** (center).",
          answer: "център",
          hint: "c-y-n-t-y-r. Type 'c' for Ц and 'y' for Ъ.",
          after: "Two Ъ letters in one word, both typed as 'y'. Ц is 'c'. Getting the hang of it.",
        },
        {
          type: "note",
          title: "Ю = yu",
          body:
            "**Ю** = 'yu' as in 'you'. Think of the vertical line as a stick and the circle as a ball - 'you' throw the ball.\n\nЮ = yu. Type **yu** to get it.",
        },
        {
          type: "choice",
          prompt: "Read: **МЕНЮ**",
          options: ["menyu", "menu", "meny"],
          correct: 0,
          after: "Меню - menu. Ю at the end says 'yu'. Same word, spelled to match the sound.",
        },
        {
          type: "note",
          title: "Я = ya",
          body:
            "**Я** = 'ya' as in 'yard'. It looks like a backwards R. You'll see it everywhere - it's extremely common in Bulgarian.\n\nЯ = ya. Type **ya** (or just **q**) to get it.",
        },
        {
          type: "choice",
          prompt: "Read: **БЪЛГАРИЯ**",
          options: ["bulgariya", "bylgariya", "balgariya"],
          correct: 1,
          after: "България - Bulgaria. Ъ makes 'u-as-in-sun': b-ul-GA-ri-ya. Я at the end says 'ya'.",
        },
        {
          type: "choice",
          prompt: "One last word. Read: **ИНФОРМАЦИЯ**",
          options: ["informatsiya", "informashiya", "informakiya"],
          correct: 0,
          after: "Информация - information. Ц is 'ts', Я is 'ya'. You just read a 10-letter Bulgarian word.",
        },
        {
          type: "exercise",
          prompt: "Type **България** (Bulgaria). Remember: Ъ='y', Я='ya'.",
          answer: "България",
          hint: "B-y-l-g-a-r-i-ya. Capital B, then y for Ъ, ya for Я.",
          after: "You just typed the name of the country in its own alphabet. Reading AND writing - both working.",
        },
        {
          type: "note",
          body:
            "That's the full alphabet. You now know all 30 Bulgarian letters.\n\n**Ь** (soft sign) exists but is extremely rare in Bulgarian - you'll almost never encounter it, so don't worry about it.\n\nEvery lesson from here on will reinforce these letters through real words and sentences. The confusing ones (В, Н, Р) will take about a week to feel automatic. Reading gets faster the more you do it.\n\nNext: words you already know.",
        },
      ],
    },
  ],
};
