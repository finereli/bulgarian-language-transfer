export interface UserInfo {
  id: number;
  name: string;
  showRussian: boolean;
  xp: number;
  streak: number;
  bestStreak: number;
  lastActiveDay: string | null;
}

export interface LessonProgress {
  lessonId: string;
  nextItem: number;
  totalItems: number;
  correct: number;
  wrong: number;
  completedAt: string | null;
}

export interface ProgressUpdate {
  lessonId: string;
  nextItem: number;
  totalItems: number;
  correctDelta?: number;
  wrongDelta?: number;
  xpDelta?: number;
  completed?: boolean;
}

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}`), { status: res.status });
  return res.json() as Promise<T>;
}

function post(path: string, body: unknown): Promise<Response> {
  return fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function localDay(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export const api = {
  getMe: async (): Promise<{ user: UserInfo; progress: LessonProgress[] } | null> => {
    const res = await fetch("/api/me");
    if (res.status === 401) return null;
    return json(res);
  },

  postProgress: (update: ProgressUpdate) =>
    post("/api/progress", { ...update, day: localDay() }).then((r) =>
      json<{ xp: number; streak: number; bestStreak: number }>(r)
    ),

  setShowRussian: (showRussian: boolean) => post("/api/settings", { showRussian }),

  logout: () => post("/api/auth/logout", {}),

  feedback: (prompt: string, expected: string, given: string, showRussian: boolean) =>
    post("/api/feedback", { prompt, expected, given, showRussian }).then((r) =>
      json<{ feedback: string }>(r)
    ),
};
