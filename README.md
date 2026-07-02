# Хайде! — Learn Bulgarian

**https://bulgarian.finereli.com**

A web app that teaches Bulgarian from scratch using the
[Language Transfer](https://www.languagetransfer.org) *thinking method* -
adapted for reading and writing. Teaching notes play the teacher's role, you
type your answers, and every Bulgarian phrase has audio.

## What's in the course

7 modules, 22 lessons, ~300 exercises that build from international words to
reading a full passage. Written for English speakers with Hebrew parallels
inline and optional Russian parallels (toggle in Settings).

You type in Latin letters and they convert to Cyrillic live
(`zh→ж, ch→ч, sh→ш, sht→щ, y→ъ, j→й…`). An on-screen strip shows the
tricky letters. Get an answer wrong and "Explain my mistake" calls an AI
tutor to break down what happened.

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
  optional `speak` audio chips and an optional `ru` note for Russian speakers.
- **exercise** - English prompt, canonical `answer`, optional `accept`
  alternatives, `hint`, `after` commentary. Grading is case/punctuation
  insensitive with typo tolerance ("almost right").
- **choice** - multiple choice.

Run `npm test` after editing to validate structure, IDs, and answer sanity.

## Costs

Runs on Cloudflare's free tier. TTS phrases are cached permanently after
first synthesis (~$0.30 one-time for the whole course at gpt-4o-mini-tts
pricing). AI feedback uses Haiku with ~100-token prompts - pennies per month.

## Credits

Method inspired by Language Transfer by Mihalis Eleftheriou
([languagetransfer.org](https://www.languagetransfer.org) - support it!).
This is an independent hobby project, not affiliated with Language Transfer.
