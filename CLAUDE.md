# Ајде! - Macedonian Learning PWA

Language Transfer-style Macedonian course for reading/writing. React + Vite frontend served by a Cloudflare Worker (Hono), D1 for user progress, Google OAuth.

## Stack

- **Frontend**: React 18, React Router, Vite, TypeScript
- **Backend**: Cloudflare Worker with Hono
- **Database**: Cloudflare D1 (SQLite) - `ajde-db` (id: `f112c0a8-0079-47f9-ab67-85f342aa503a`)
- **Auth**: Google OAuth (client ID in wrangler.jsonc, secret via `wrangler secret`)
- **TTS**: Azure Neural TTS `mk-MK-MarijaNeural` via `TTS_PROVIDER=azure` (default), proxied through worker. OpenAI `gpt-4o-mini-tts` is available as a fallback provider (`TTS_PROVIDER=openai`).

## Commands

- `npm run dev` - local dev server (reads `.dev.vars` for secrets)
- `npm run check` - TypeScript type check (both client and worker tsconfigs)
- `npm test` - validate course content (scripts/validate-content.mjs)
- `./deploy.sh` - build and deploy to macedonian.finereli.com
- `npm run db:migrate` - apply D1 migrations to remote
- `npm run db:migrate:local` - apply D1 migrations locally

## Project structure

- `src/app/` - React frontend (pages, components, store, API client)
- `src/worker/` - Hono worker (auth, TTS proxy, progress API)
- `src/content/` - course content (8 modules, 36 lessons)
- `migrations/` - D1 SQL migrations
- `public/` - PWA manifest, icons, service worker
- `docs/macedonian-brief.md` - language design doc: what differs from the Bulgarian source course and what that does to the syllabus. Read this before editing course content.

## Secrets (production)

Set via `wrangler secret put <NAME>`:
- `SESSION_SECRET` - HMAC key for session JWTs
- `GOOGLE_CLIENT_SECRET` - Google OAuth
- `AZURE_SPEECH_KEY` - TTS (Azure Neural, default provider)
- `OPENAI_API_KEY` - TTS (OpenAI fallback provider)

`GOOGLE_CLIENT_ID` is a public env var in wrangler.jsonc (not a secret).

## Local dev

`.dev.vars` has all secrets for local dev. `DEV_LOGIN=1` enables a password-less login button at `/api/auth/dev`. Google OAuth also works locally (localhost:8787 is in the allowed redirect URIs).
