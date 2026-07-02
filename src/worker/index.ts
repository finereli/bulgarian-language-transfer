import { Hono } from "hono";
import type { AppContext } from "./types";
import { authRoutes } from "./auth";
import { SESSION_COOKIE, readCookie, verifySession } from "./session";
import { synthesize } from "./tts";
import { explainMistake, type FeedbackRequest } from "./feedback";

const app = new Hono<AppContext>();

app.route("/api/auth", authRoutes);

app.use("/api/*", async (c, next) => {
  const token = readCookie(c.req.header("Cookie"), SESSION_COOKIE);
  const session = token ? await verifySession(token, c.env.SESSION_SECRET) : null;
  if (!session) return c.json({ error: "unauthorized" }, 401);
  c.set("session", session);
  await next();
});

app.get("/api/me", async (c) => {
  const { uid } = c.get("session");
  const user = await c.env.DB.prepare(
    "SELECT id, name, show_russian, xp, streak, best_streak, last_active_day FROM users WHERE id = ?1"
  )
    .bind(uid)
    .first<{
      id: number;
      name: string;
      show_russian: number;
      xp: number;
      streak: number;
      best_streak: number;
      last_active_day: string | null;
    }>();
  if (!user) return c.json({ error: "user not found" }, 401);

  const progress = await c.env.DB.prepare(
    "SELECT lesson_id, next_item, total_items, correct, wrong, completed_at FROM lesson_progress WHERE user_id = ?1"
  )
    .bind(uid)
    .all<{
      lesson_id: string;
      next_item: number;
      total_items: number;
      correct: number;
      wrong: number;
      completed_at: string | null;
    }>();

  return c.json({
    user: {
      id: user.id,
      name: user.name,
      showRussian: user.show_russian === 1,
      xp: user.xp,
      streak: user.streak,
      bestStreak: user.best_streak,
      lastActiveDay: user.last_active_day,
    },
    progress: progress.results.map((p) => ({
      lessonId: p.lesson_id,
      nextItem: p.next_item,
      totalItems: p.total_items,
      correct: p.correct,
      wrong: p.wrong,
      completedAt: p.completed_at,
    })),
  });
});

function previousDay(isoDay: string): string {
  const d = new Date(`${isoDay}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

app.post("/api/progress", async (c) => {
  const { uid } = c.get("session");
  const body = await c.req.json<{
    lessonId?: string;
    nextItem?: number;
    totalItems?: number;
    correctDelta?: number;
    wrongDelta?: number;
    xpDelta?: number;
    completed?: boolean;
    day?: string;
  }>();

  const lessonId = String(body.lessonId ?? "");
  if (!lessonId) return c.json({ error: "lessonId required" }, 400);
  const nextItem = Math.max(0, Math.floor(Number(body.nextItem ?? 0)));
  const totalItems = Math.max(0, Math.floor(Number(body.totalItems ?? 0)));
  const correctDelta = Math.min(50, Math.max(0, Math.floor(Number(body.correctDelta ?? 0))));
  const wrongDelta = Math.min(50, Math.max(0, Math.floor(Number(body.wrongDelta ?? 0))));
  const xpDelta = Math.min(200, Math.max(0, Math.floor(Number(body.xpDelta ?? 0))));
  const day = /^\d{4}-\d{2}-\d{2}$/.test(String(body.day))
    ? String(body.day)
    : new Date().toISOString().slice(0, 10);

  await c.env.DB.prepare(
    `INSERT INTO lesson_progress (user_id, lesson_id, next_item, total_items, correct, wrong, completed_at, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, CASE WHEN ?7 THEN datetime('now') ELSE NULL END, datetime('now'))
     ON CONFLICT(user_id, lesson_id) DO UPDATE SET
       next_item = MAX(lesson_progress.next_item, ?3),
       total_items = ?4,
       correct = lesson_progress.correct + ?5,
       wrong = lesson_progress.wrong + ?6,
       completed_at = COALESCE(lesson_progress.completed_at, CASE WHEN ?7 THEN datetime('now') ELSE NULL END),
       updated_at = datetime('now')`
  )
    .bind(uid, lessonId, nextItem, totalItems, correctDelta, wrongDelta, body.completed ? 1 : 0)
    .run();

  const user = await c.env.DB.prepare(
    "SELECT xp, streak, best_streak, last_active_day FROM users WHERE id = ?1"
  )
    .bind(uid)
    .first<{ xp: number; streak: number; best_streak: number; last_active_day: string | null }>();
  if (!user) return c.json({ error: "user not found" }, 401);

  let streak = user.streak;
  if (user.last_active_day !== day) {
    streak = user.last_active_day === previousDay(day) ? user.streak + 1 : 1;
  } else if (streak === 0) {
    streak = 1;
  }
  const bestStreak = Math.max(user.best_streak, streak);
  const xp = user.xp + xpDelta;

  await c.env.DB.prepare(
    "UPDATE users SET xp = ?2, streak = ?3, best_streak = ?4, last_active_day = ?5 WHERE id = ?1"
  )
    .bind(uid, xp, streak, bestStreak, day)
    .run();

  return c.json({ xp, streak, bestStreak });
});

app.post("/api/settings", async (c) => {
  const { uid } = c.get("session");
  const body = await c.req.json<{ showRussian?: boolean }>();
  await c.env.DB.prepare("UPDATE users SET show_russian = ?2 WHERE id = ?1")
    .bind(uid, body.showRussian ? 1 : 0)
    .run();
  return c.json({ ok: true });
});

app.post("/api/tts", async (c) => {
  const body = await c.req.json<{ text?: string }>();
  return synthesize(c.env, String(body.text ?? ""));
});

app.post("/api/feedback", async (c) => {
  const body = await c.req.json<Partial<FeedbackRequest>>();
  return explainMistake(c.env, {
    prompt: String(body.prompt ?? ""),
    expected: String(body.expected ?? ""),
    given: String(body.given ?? ""),
    showRussian: Boolean(body.showRussian),
  });
});

app.all("/api/*", (c) => c.json({ error: "not found" }, 404));

export default app;
