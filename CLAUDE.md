# Хайде! - Bulgarian Learning PWA

Language Transfer-style Bulgarian course for reading/writing. React + Vite frontend served by a Cloudflare Worker (Hono), D1 for user progress, Google OAuth.

## Stack

- **Frontend**: React 18, React Router, Vite, TypeScript
- **Backend**: Cloudflare Worker with Hono
- **Database**: Cloudflare D1 (SQLite) - `hayde-db` (id: `bd98ff79-9514-48cb-be1a-7fbe95b4f7a4`)
- **Auth**: Google OAuth (client ID in wrangler.jsonc, secret via `wrangler secret`)
- **TTS**: OpenAI `gpt-4o-mini-tts` (voice: marin), proxied through worker
- **AI feedback**: OpenRouter (`anthropic/claude-haiku-4.5`), explains mistakes

## Commands

- `npm run dev` - local dev server (reads `.dev.vars` for secrets)
- `npm run check` - TypeScript type check (both client and worker tsconfigs)
- `npm test` - validate course content (scripts/validate-content.mjs)
- `./deploy.sh` - build and deploy to bulgarian.finereli.com
- `npm run db:migrate` - apply D1 migrations to remote
- `npm run db:migrate:local` - apply D1 migrations locally

## Project structure

- `src/app/` - React frontend (pages, components, store, API client)
- `src/worker/` - Hono worker (auth, TTS proxy, feedback, progress API)
- `src/content/` - course content (7 modules, 22 lessons, 303 items)
- `migrations/` - D1 SQL migrations
- `public/` - PWA manifest, icons, service worker

## Secrets (production)

Set via `wrangler secret put <NAME>`:
- `SESSION_SECRET` - HMAC key for session JWTs
- `GOOGLE_CLIENT_SECRET` - Google OAuth
- `OPENAI_API_KEY` - TTS
- `OPENROUTER_API_KEY` - AI feedback

`GOOGLE_CLIENT_ID` is a public env var in wrangler.jsonc (not a secret).

## Local dev

`.dev.vars` has all secrets for local dev. `DEV_LOGIN=1` enables a password-less login button at `/api/auth/dev`. Google OAuth also works locally (localhost:8787 is in the allowed redirect URIs).
