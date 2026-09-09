# Ајде! — Learn Macedonian

**https://macedonian.finereli.com**

A web app that teaches Macedonian from scratch using the
[Language Transfer](https://www.languagetransfer.org) *thinking method* -
adapted for reading and writing. Teaching notes play the teacher's role, you
type your answers, and every Macedonian phrase has audio.

This is a fork of [finereli/bulgarian-language-transfer](https://github.com/finereli/bulgarian-language-transfer),
retargeted at Macedonian rather than Bulgarian - a different, closely related
but distinct South Slavic language. See
[docs/macedonian-brief.md](docs/macedonian-brief.md) for what differs from
the Bulgarian source course and why.

## What's in the course

8 modules, 36 lessons of exercises that build from international words to
reading a full passage. Written for English speakers with Hebrew parallels
inline and optional Russian and Bulgarian parallels (toggle each in
Settings - Bulgarian parallels are for learners who already know Bulgarian
and want to see what carries over and what doesn't).

You type in Latin letters and they convert to Cyrillic live
(`gj→ѓ, kj→ќ, dz→ѕ, dzh→џ, lj→љ, nj→њ, j→ј, zh→ж, ch→ч, sh→ш…`). An
on-screen strip shows the tricky letters. Get an answer wrong and "Explain
my mistake" calls an AI tutor to break down what happened.

Progress, XP, and streaks sync across devices via Google sign-in.
Installable as a PWA with offline support for already-heard audio.

## The thinking method

The course follows the Language Transfer approach: guide the student to
*think through* the language rather than memorize phrases. See
[docs/thinking-method-guidebook.pdf](docs/thinking-method-guidebook.pdf)
for the full methodology (free guidebook by Mihalis Eleftheriou).

## Editing the course

Lessons live in `src/content/module*.ts` as plain typed data - three item kinds:

- **note** - teaching text (mini-markdown: `**bold**`, `*italic*`, `- ` bullets),
  optional `speak` audio chips and optional `he`/`ru`/`bg` notes for Hebrew,
  Russian, and Bulgarian speakers.
- **exercise** - English prompt, canonical `answer`, optional `accept`
  alternatives, `hint`, `after` commentary. Grading is case/punctuation
  insensitive with typo tolerance ("almost right").
- **choice** - multiple choice.

Run `npm test` after editing to validate structure, IDs, and answer sanity.

## Costs

Runs on Cloudflare's free tier. TTS phrases are cached permanently after
first synthesis, using Azure Neural TTS (`mk-MK`) by default, with OpenAI's
`gpt-4o-mini-tts` available as a fallback provider. AI feedback uses Haiku
with ~100-token prompts - pennies per month.

## Credits

Method inspired by Language Transfer by Mihalis Eleftheriou
([languagetransfer.org](https://www.languagetransfer.org) - support it!).
This is an independent hobby project, not affiliated with Language Transfer.
