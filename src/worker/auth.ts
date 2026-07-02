import { Hono } from "hono";
import type { AppContext, Env } from "./types";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  readCookie,
  sessionCookie,
  signSession,
} from "./session";

const STATE_COOKIE = "hayde_oauth_state";

function randomHex(bytes: number): string {
  const buf = new Uint8Array(bytes);
  crypto.getRandomValues(buf);
  return [...buf].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function decodeJwtPayload(jwt: string): Record<string, unknown> {
  const body = jwt.split(".")[1];
  const padded = body.replace(/-/g, "+").replace(/_/g, "/");
  const json = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  return JSON.parse(json);
}

async function upsertUser(
  env: Env,
  sub: string,
  email: string,
  name: string,
  picture: string
): Promise<number> {
  const row = await env.DB.prepare(
    `INSERT INTO users (google_sub, email, name, picture)
     VALUES (?1, ?2, ?3, ?4)
     ON CONFLICT(google_sub) DO UPDATE SET email = ?2, name = ?3, picture = ?4
     RETURNING id`
  )
    .bind(sub, email, name, picture)
    .first<{ id: number }>();
  if (!row) throw new Error("failed to upsert user");
  return row.id;
}

async function issueSession(
  c: { env: Env; req: { url: string } },
  uid: number,
  email: string,
  name: string,
  picture: string
): Promise<string> {
  const token = await signSession(
    { uid, email, name, picture, exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS },
    c.env.SESSION_SECRET
  );
  const secure = new URL(c.req.url).protocol === "https:";
  return sessionCookie(token, SESSION_TTL_SECONDS, secure);
}

export const authRoutes = new Hono<AppContext>();

authRoutes.get("/login", (c) => {
  if (!c.env.GOOGLE_CLIENT_ID) {
    return c.text("Google OAuth is not configured (GOOGLE_CLIENT_ID is empty).", 500);
  }
  const origin = new URL(c.req.url).origin;
  const state = randomHex(16);
  const params = new URLSearchParams({
    client_id: c.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${origin}/api/auth/callback`,
    response_type: "code",
    scope: "openid email profile",
    state,
    prompt: "select_account",
  });
  c.header(
    "Set-Cookie",
    `${STATE_COOKIE}=${state}; Path=/api/auth; HttpOnly; SameSite=Lax; Max-Age=600${
      origin.startsWith("https") ? "; Secure" : ""
    }`
  );
  return c.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
});

authRoutes.get("/callback", async (c) => {
  const url = new URL(c.req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = readCookie(c.req.header("Cookie"), STATE_COOKIE);
  if (!code || !state || !expectedState || state !== expectedState) {
    return c.text("OAuth state mismatch. Please try signing in again.", 400);
  }

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: c.env.GOOGLE_CLIENT_ID,
      client_secret: c.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${url.origin}/api/auth/callback`,
      grant_type: "authorization_code",
    }),
  });
  if (!tokenRes.ok) {
    return c.text(`Failed to exchange OAuth code (${tokenRes.status}).`, 502);
  }
  const tokenData = (await tokenRes.json()) as { id_token?: string };
  if (!tokenData.id_token) return c.text("Google did not return an id_token.", 502);

  // The id_token comes directly from Google over TLS in a server-to-server
  // exchange, so decoding without signature verification is safe here.
  const claims = decodeJwtPayload(tokenData.id_token);
  const sub = String(claims.sub ?? "");
  const email = String(claims.email ?? "");
  if (!sub || !email) return c.text("Google token missing sub/email.", 502);
  const name = String(claims.name ?? email);
  const picture = String(claims.picture ?? "");

  const uid = await upsertUser(c.env, sub, email, name, picture);
  const cookie = await issueSession(c, uid, email, name, picture);
  c.header("Set-Cookie", cookie, { append: true });
  c.header(
    "Set-Cookie",
    `${STATE_COOKIE}=; Path=/api/auth; HttpOnly; Max-Age=0`,
    { append: true }
  );
  return c.redirect("/");
});

// Local development helper: sign in without Google. Enabled only when
// DEV_LOGIN=1 (set it in .dev.vars; never set it in production vars).
authRoutes.get("/dev", async (c) => {
  if (c.env.DEV_LOGIN !== "1") return c.text("Not found", 404);
  const uid = await upsertUser(c.env, "dev-user", "dev@example.com", "Dev User", "");
  const cookie = await issueSession(c, uid, "dev@example.com", "Dev User", "");
  c.header("Set-Cookie", cookie);
  return c.redirect("/");
});

authRoutes.post("/logout", (c) => {
  const secure = new URL(c.req.url).protocol === "https:";
  c.header("Set-Cookie", sessionCookie("", 0, secure));
  return c.json({ ok: true });
});
