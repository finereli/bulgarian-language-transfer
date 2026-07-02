import { Hono } from "hono";
import type { AppContext, Env } from "./types";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  readCookie,
  sessionCookie,
  signSession,
} from "./session";

const SINGLE_USER_SLUG = "eli";
const SINGLE_USER_NAME = "Eli";

async function ensureUser(env: Env): Promise<number> {
  const row = await env.DB.prepare(
    `INSERT INTO users (slug, name)
     VALUES (?1, ?2)
     ON CONFLICT(slug) DO UPDATE SET name = ?2
     RETURNING id`
  )
    .bind(SINGLE_USER_SLUG, SINGLE_USER_NAME)
    .first<{ id: number }>();
  if (!row) throw new Error("failed to upsert user");
  return row.id;
}

async function issueSession(
  c: { env: Env; req: { url: string } },
  uid: number
): Promise<string> {
  const token = await signSession(
    { uid, exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS },
    c.env.SESSION_SECRET
  );
  const secure = new URL(c.req.url).protocol === "https:";
  return sessionCookie(token, SESSION_TTL_SECONDS, secure);
}

export const authRoutes = new Hono<AppContext>();

authRoutes.get("/enter", async (c) => {
  const uid = await ensureUser(c.env);
  const cookie = await issueSession(c, uid);
  c.header("Set-Cookie", cookie);
  return c.redirect("/");
});

authRoutes.post("/logout", (c) => {
  const secure = new URL(c.req.url).protocol === "https:";
  c.header("Set-Cookie", sessionCookie("", 0, secure));
  return c.json({ ok: true });
});
