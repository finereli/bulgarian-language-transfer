import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { api, type LessonProgress, type ProgressUpdate, type UserInfo } from "./api";

export interface Level {
  index: number;
  titleBg: string;
  titleEn: string;
  floor: number;
  ceil: number | null;
}

const LEVELS: { titleBg: string; titleEn: string; floor: number }[] = [
  { titleBg: "Новак", titleEn: "Newcomer", floor: 0 },
  { titleBg: "Ученик", titleEn: "Student", floor: 300 },
  { titleBg: "Приятел", titleEn: "Friend", floor: 700 },
  { titleBg: "Пътешественик", titleEn: "Traveler", floor: 1200 },
  { titleBg: "Разказвач", titleEn: "Storyteller", floor: 2000 },
  { titleBg: "Мъдрец", titleEn: "Sage", floor: 3000 },
];

export function levelForXp(xp: number): Level {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].floor) idx = i;
  }
  return {
    index: idx + 1,
    titleBg: LEVELS[idx].titleBg,
    titleEn: LEVELS[idx].titleEn,
    floor: LEVELS[idx].floor,
    ceil: idx + 1 < LEVELS.length ? LEVELS[idx + 1].floor : null,
  };
}

interface AppState {
  loading: boolean;
  user: UserInfo | null;
  progress: Map<string, LessonProgress>;
  recordProgress: (update: ProgressUpdate) => void;
  setShowRussian: (value: boolean) => void;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [progress, setProgress] = useState<Map<string, LessonProgress>>(new Map());

  const refresh = useCallback(async () => {
    const me = await api.getMe().catch(() => null);
    if (me) {
      setUser(me.user);
      setProgress(new Map(me.progress.map((p) => [p.lessonId, p])));
    } else {
      setUser(null);
      setProgress(new Map());
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const recordProgress = useCallback((update: ProgressUpdate) => {
    setProgress((prev) => {
      const next = new Map(prev);
      const existing = next.get(update.lessonId);
      next.set(update.lessonId, {
        lessonId: update.lessonId,
        nextItem: Math.max(existing?.nextItem ?? 0, update.nextItem),
        totalItems: update.totalItems,
        correct: (existing?.correct ?? 0) + (update.correctDelta ?? 0),
        wrong: (existing?.wrong ?? 0) + (update.wrongDelta ?? 0),
        completedAt:
          existing?.completedAt ?? (update.completed ? new Date().toISOString() : null),
      });
      return next;
    });
    setUser((u) => (u ? { ...u, xp: u.xp + (update.xpDelta ?? 0) } : u));
    api
      .postProgress(update)
      .then((res) =>
        setUser((u) =>
          u ? { ...u, xp: res.xp, streak: res.streak, bestStreak: res.bestStreak } : u
        )
      )
      .catch(() => {});
  }, []);

  const setShowRussian = useCallback((value: boolean) => {
    setUser((u) => (u ? { ...u, showRussian: value } : u));
    void api.setShowRussian(value).catch(() => {});
  }, []);

  const signOut = useCallback(async () => {
    await api.logout().catch(() => {});
    setUser(null);
    setProgress(new Map());
  }, []);

  const value = useMemo(
    () => ({ loading, user, progress, recordProgress, setShowRussian, signOut, refresh }),
    [loading, user, progress, recordProgress, setShowRussian, signOut, refresh]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp outside AppProvider");
  return ctx;
}
