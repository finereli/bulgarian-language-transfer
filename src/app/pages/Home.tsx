import { Link } from "react-router-dom";
import { allLessons, modules } from "../../content";
import { levelForXp, useApp } from "../store";

export function Home() {
  const { user, progress } = useApp();
  if (!user) return null;
  const level = levelForXp(user.xp);

  const firstUnfinished =
    allLessons.find((l) => !progress.get(l.id)?.completedAt) ?? allLessons[0];
  const resumeProgress = progress.get(firstUnfinished.id);
  const started = (resumeProgress?.nextItem ?? 0) > 0 && !resumeProgress?.completedAt;
  const completedCount = allLessons.filter((l) => progress.get(l.id)?.completedAt).length;

  return (
    <div className="page home">
      <section className="stats-row">
        <div className="stat-chip" title="Day streak">
          <span className="stat-emoji">🔥</span>
          <b>{user.streak}</b>
          <span className="stat-label">day streak</span>
        </div>
        <div className="stat-chip" title="Experience points">
          <span className="stat-emoji">⭐</span>
          <b>{user.xp}</b>
          <span className="stat-label">XP</span>
        </div>
        <div className="stat-chip" title={`Level ${level.index}: ${level.titleEn}`}>
          <span className="stat-emoji">🏅</span>
          <b>{level.titleBg}</b>
          <span className="stat-label">{level.titleEn}</span>
        </div>
      </section>

      {level.ceil !== null && (
        <div className="level-bar" aria-hidden>
          <div
            className="level-bar-fill"
            style={{ width: `${Math.min(100, ((user.xp - level.floor) / (level.ceil - level.floor)) * 100)}%` }}
          />
        </div>
      )}

      <Link to={`/lesson/${firstUnfinished.id}`} className="continue-card">
        <div>
          <div className="continue-kicker">
            {completedCount === allLessons.length
              ? "Course complete — review anything"
              : started
                ? "Continue where you left off"
                : completedCount === 0
                  ? "Start here"
                  : "Up next"}
          </div>
          <div className="continue-title">{firstUnfinished.title}</div>
          {firstUnfinished.subtitle && (
            <div className="continue-sub">{firstUnfinished.subtitle}</div>
          )}
        </div>
        <span className="continue-arrow" aria-hidden>→</span>
      </Link>

      {modules.map((mod) => {
        const done = mod.lessons.filter((l) => progress.get(l.id)?.completedAt).length;
        return (
          <section key={mod.id} className="module">
            <header className="module-header">
              <h2>{mod.title}</h2>
              <span className="module-count">
                {done}/{mod.lessons.length}
              </span>
            </header>
            <p className="module-blurb">{mod.blurb}</p>
            <div className="lesson-list">
              {mod.lessons.map((lesson) => {
                const p = progress.get(lesson.id);
                const completed = Boolean(p?.completedAt);
                const inProgress = !completed && (p?.nextItem ?? 0) > 0;
                return (
                  <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="lesson-row">
                    <span
                      className={`lesson-status ${completed ? "done" : inProgress ? "part" : ""}`}
                      aria-hidden
                    >
                      {completed ? "✓" : inProgress ? "…" : ""}
                    </span>
                    <span className="lesson-titles">
                      <span className="lesson-title">{lesson.title}</span>
                      {lesson.subtitle && <span className="lesson-sub">{lesson.subtitle}</span>}
                    </span>
                    {inProgress && p && (
                      <span className="lesson-pct">
                        {Math.round((p.nextItem / lesson.items.length) * 100)}%
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
