# Хайде! — Learn Bulgarian

A progressive web app that teaches Bulgarian from scratch in the spirit of the
[Language Transfer](https://www.languagetransfer.org) *thinking method*, adapted
for **reading and writing**: teaching notes play the teacher's role, you type
your answers, and every Bulgarian phrase has TTS audio.

- **Course**: 7 modules · 22 lessons · ~300 items authored in Language Transfer
  style, building from international words to a full reading passage.
- **Parallels**: written for an English speaker; Hebrew parallels inline,
  **Russian parallels optional** (per-user toggle in Settings — off by default).
- **Input**: type in Latin letters and they convert to Cyrillic live
  (`zh→ж, ch→ч, sh→ш, sht→щ, y→ъ, j→й…`), plus an on-screen strip for the
  tricky letters. Assumes you can *read* Cyrillic.
- **Audio**: OpenAI TTS proxied through the Worker, cached on Cloudflare's edge
  *and* in the browser's IndexedDB — each phrase is synthesized once, ever.
- **AI tutor**: on a wrong answer, "Explain my mistake" asks a lightweight model
  via OpenRouter (default `anthropic/claude-haiku-4.5`) to explain the difference.
- **Progress**: Google sign-in; per-user progress, XP, and streaks in Cloudflare D1.
  Gamification is deliberately light: XP, a daily streak, and six level titles.
- **PWA**: installable, offline app shell, offline replay of already-heard audio.

## Stack

| Piece | Tech |
|---|---|
| Frontend | React 18 + Vite + TypeScript (`src/app`), single-page app |
| Course content | Typed TS data (`src/content`) — no CMS, PRs are the editor |
| API | Cloudflare Worker + Hono (`src/worker`) |
| DB | Cloudflare D1 (users, per-lesson progress) |
| Auth | Google OAuth 2.0 (code flow) + HMAC-signed session cookie |
| TTS | OpenAI `gpt-4o-mini-tts` (voice `marin`), Cache API + IndexedDB |
| Feedback | OpenRouter chat completions (model configurable) |

## Deploying to Cloudflare

Prereqs: a Cloudflare account, `npm`, and API keys for OpenAI + OpenRouter.

### 1. Install and create the database

```sh
npm install
npx wrangler login
npx wrangler d1 create hayde-db
```

Copy the printed `database_id` into `wrangler.jsonc` (replace
`REPLACE_WITH_YOUR_D1_DATABASE_ID`), then apply the schema:

```sh
npm run db:migrate
```

### 2. Create the Google OAuth client

1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials),
   create an **OAuth client ID** of type **Web application**.
2. Authorized redirect URI: `https://<your-worker-domain>/api/auth/callback`
   (you'll know the domain after the first deploy — `https://hayde-bulgarian.<account>.workers.dev`,
   or your custom domain; you can come back and add it).
3. Put the **client ID** in `wrangler.jsonc` under `vars.GOOGLE_CLIENT_ID`.
4. On the OAuth consent screen, add yourself and your wife as test users (or
   publish the app).

### 3. Set secrets

```sh
npx wrangler secret put GOOGLE_CLIENT_SECRET   # from the OAuth client
npx wrangler secret put OPENAI_API_KEY         # for TTS
npx wrangler secret put OPENROUTER_API_KEY     # for AI feedback
npx wrangler secret put SESSION_SECRET         # any long random string, e.g. `openssl rand -hex 32`
```

The app degrades gracefully: without `OPENAI_API_KEY` there's no audio, without
`OPENROUTER_API_KEY` there's no AI explainer — everything else works.

### 4. Deploy

```sh
npm run deploy
```

Then add the real workers.dev URL to the Google OAuth client's redirect URIs
(step 2.2) if you hadn't yet.

## Local development

```sh
cp .dev.vars.example .dev.vars   # enables password-less dev login
npm run db:migrate:local
npm run dev                      # builds the app, then wrangler dev on :8787
```

With `DEV_LOGIN=1` in `.dev.vars`, the login screen shows a **Dev login** button
so you can develop without Google credentials. Never set `DEV_LOGIN` in
production vars.

Other scripts:

```sh
npm run check   # typecheck app + worker
npm test        # structural validation of the course content
npm run icons   # regenerate PWA icons (committed, rarely needed)
```

## Editing the course

Lessons live in `src/content/module*.ts` as plain typed data — three item kinds:

- `note` — teaching text (mini-markdown: `**bold**`, `*italic*`, `- ` bullets),
  optional `speak` audio chips and an optional `ru` note for Russian speakers.
- `exercise` — English prompt, canonical `answer`, optional `accept`
  alternatives, `hint`, `after` commentary. Checking is case/punctuation
  insensitive with a typo tolerance ("almost right").
- `choice` — multiple choice.

Run `npm test` after editing; it validates structure, IDs, and answer sanity.

## Costs

Designed to run in Cloudflare's free tier for a couple of users. TTS phrases are
cached permanently after the first synthesis (a few hundred short phrases in the
whole course, ~$0.30 one-time at gpt-4o-mini-tts pricing). AI feedback calls
Haiku with ~100-token prompts — pennies per month of heavy use.

## Credits

Method inspired by Language Transfer by Mihalis Eleftheriou
([languagetransfer.org](https://www.languagetransfer.org) — support it!).
This is an independent hobby project, not affiliated with Language Transfer.
