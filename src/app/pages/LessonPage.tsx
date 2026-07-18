import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  lessonsById,
  nextLessonAfter,
  type ChoiceItem,
  type ExerciseItem,
  type NoteItem,
} from "../../content";
import { IconArrowRight, IconChevronLeft, IconLightbulb, IconSparkles, IconX } from "../components/Icons";
import { checkAnswer, containsCyrillic, finalizeTranslit, type CheckResult } from "../check";
import { BgInput, useTranslitPref } from "../components/BgInput";
import { Rich } from "../components/Rich";
import { SpeakButton } from "../components/SpeakButton";
import { useApp } from "../store";

const XP_FIRST_TRY = 10;
const XP_ALMOST = 7;
const XP_RETRY = 4;
const XP_CHOICE = 5;
const XP_LESSON_COMPLETE = 20;

interface ItemOutcome {
  xp: number;
  correct: number;
  wrong: number;
}

export function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = id ? lessonsById.get(id) : undefined;
  const { user, progress, recordProgress, resetLesson } = useApp();

  const [index, setIndex] = useState(0);
  const [session, setSession] = useState({ correct: 0, wrong: 0, xp: 0 });
  const [finished, setFinished] = useState(false);
  const [pendingReset, setPendingReset] = useState(false);

  useEffect(() => {
    if (!lesson) return;
    const saved = progress.get(lesson.id);
    const canResume =
      saved && !saved.completedAt && saved.nextItem > 0 && saved.nextItem < lesson.items.length;
    setIndex(canResume ? saved.nextItem : 0);
    setSession({ correct: 0, wrong: 0, xp: 0 });
    setFinished(false);
    setPendingReset(!!(saved && saved.completedAt));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id]);

  if (!lesson || !user) {
    return (
      <div className="page">
        <p>Lesson not found.</p>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><IconChevronLeft size={16} /> Back home</Link>
      </div>
    );
  }

  const total = lesson.items.length;
  const item = lesson.items[Math.min(index, total - 1)];
  const isPracticeAgain = pendingReset && index === 0;

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
      window.scrollTo({ top: 0 });
    }
  };

  const advance = (outcome: ItemOutcome) => {
    if (isPracticeAgain) {
      resetLesson(lesson.id);
      setPendingReset(false);
    }
    const nextIndex = index + 1;
    const isLast = nextIndex >= total;
    const xpDelta = outcome.xp + (isLast ? XP_LESSON_COMPLETE : 0);
    recordProgress({
      lessonId: lesson.id,
      nextItem: nextIndex,
      totalItems: total,
      correctDelta: outcome.correct,
      wrongDelta: outcome.wrong,
      xpDelta,
      completed: isLast,
    });
    setSession((s) => ({
      correct: s.correct + outcome.correct,
      wrong: s.wrong + outcome.wrong,
      xp: s.xp + xpDelta,
    }));
    if (isLast) setFinished(true);
    else setIndex(nextIndex);
    window.scrollTo({ top: 0 });
  };

  if (finished) {
    const next = nextLessonAfter(lesson.id);
    return (
      <div className="page lesson-done">
        <div className="done-card">
          <div className="done-icon" aria-hidden><IconSparkles size={48} /></div>
          <h1>Браво! Lesson complete</h1>
          <p className="done-stats">
            {session.correct} right · {session.wrong} slips · <b>+{session.xp} XP</b>
          </p>
          <div className="done-actions">
            {next ? (
              <Link className="btn btn-primary" to={`/lesson/${next.id}`}>
                Next: {next.title} <IconArrowRight size={16} />
              </Link>
            ) : (
              <p>You've reached the end of the course. Невероятно!</p>
            )}
            <Link className="btn btn-ghost" to="/">
              Back home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lesson">
      <header className="lesson-header">
        <Link to="/" className="lesson-back" aria-label="Back to lessons"><IconX size={18} /></Link>
        <div className="progress-track" role="progressbar" aria-valuenow={index} aria-valuemax={total}>
          <div className="progress-fill" style={{ width: `${(index / total) * 100}%` }} />
        </div>
        <button
          className="step-back-btn"
          onClick={goBack}
          disabled={index === 0}
          aria-label="Previous step"
        >
          <IconChevronLeft size={18} />
        </button>
        <span className="lesson-counter">
          {index + 1}/{total}
        </span>
      </header>

      <h1 className="lesson-name">{lesson.title}</h1>

      {item.type === "note" && (
        <NoteView
          key={`${lesson.id}-${index}`}
          item={item}
          onContinue={() => advance({ xp: 0, correct: 0, wrong: 0 })}
          continueLabel={isPracticeAgain ? "Practice again" : undefined}
        />
      )}
      {item.type === "exercise" && (
        <ExerciseView
          key={`${lesson.id}-${index}`}
          item={item}
          onComplete={advance}
          continueLabel={isPracticeAgain ? "Practice again" : undefined}
        />
      )}
      {item.type === "choice" && (
        <ChoiceView
          key={`${lesson.id}-${index}`}
          item={item}
          onComplete={advance}
          continueLabel={isPracticeAgain ? "Practice again" : undefined}
        />
      )}
    </div>
  );
}

function ItemFooter({
  item,
  onContinue,
  continueLabel,
}: {
  item: { after?: string; he?: string; ru?: string };
  onContinue: () => void;
  continueLabel?: string;
}) {
  const { user } = useApp();
  return (
    <>
      {item.after && <Rich text={item.after} className="after-note" />}
      {user?.showHebrew && item.he && <LangNote badge="HE" text={item.he} />}
      {user?.showRussian && item.ru && <LangNote badge="RU" text={item.ru} />}
      <button className="btn btn-primary btn-continue" onClick={onContinue}>
        {continueLabel ?? "Continue"}
      </button>
    </>
  );
}

function LangNote({ badge, text }: { badge: string; text: string }) {
  return (
    <div className="lang-note">
      <span className={`lang-badge lang-badge-${badge.toLowerCase()}`}>{badge}</span>
      <Rich text={text} />
    </div>
  );
}

function NoteView({
  item,
  onContinue,
  continueLabel,
}: {
  item: NoteItem;
  onContinue: () => void;
  continueLabel?: string;
}) {
  useEnterKey(onContinue);
  return (
    <div className="card item-card">
      {item.title && <h2 className="note-title">{item.title}</h2>}
      <Rich text={item.body} className="note-body" />
      {item.speak && item.speak.length > 0 && (
        <div className="speak-row">
          {item.speak.map((s) => (
            <SpeakButton key={s} text={s} label={s} />
          ))}
        </div>
      )}
      <ItemFooter item={item} onContinue={onContinue} continueLabel={continueLabel} />
    </div>
  );
}

function useEnterKey(handler: () => void) {
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Enter") return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      handler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}

type ExercisePhase =
  | { kind: "answering"; attempted: boolean }
  | { kind: "solved"; result: CheckResult; attempted: boolean }
  | { kind: "revealed" };

function ExerciseView({
  item,
  onComplete,
  continueLabel,
}: {
  item: ExerciseItem;
  onComplete: (outcome: ItemOutcome) => void;
  continueLabel?: string;
}) {
  const [translit] = useTranslitPref();
  const [value, setValue] = useState("");
  const [phase, setPhase] = useState<ExercisePhase>({ kind: "answering", attempted: false });
  const [showHint, setShowHint] = useState(false);

  const speakText = item.speak ?? (containsCyrillic(item.answer) ? item.answer : undefined);
  const settled = phase.kind === "solved" ? phase.result === "correct" : phase.kind === "revealed";

  const attempted = phase.kind !== "revealed" && phase.attempted;

  const check = () => {
    if (settled) return;
    const cleaned = finalizeTranslit(value);
    setValue(cleaned);
    if (!cleaned.trim()) return;
    const result = checkAnswer(cleaned, item.answer, item.accept);
    if (result === "wrong") {
      if (!attempted) {
        setPhase({ kind: "answering", attempted: true });
        setShowHint(true);
      } else {
        setPhase({ kind: "revealed" });
      }
    } else {
      setPhase({ kind: "solved", result, attempted });
    }
  };

  const outcome = (): ItemOutcome => {
    if (phase.kind === "solved") {
      const xp = phase.attempted ? XP_RETRY : phase.result === "correct" ? XP_FIRST_TRY : XP_ALMOST;
      return { xp, correct: 1, wrong: phase.attempted ? 1 : 0 };
    }
    return { xp: 0, correct: 0, wrong: 1 };
  };

  useEnterKey(() => {
    if (settled) onComplete(outcome());
  });

  return (
    <div className="card item-card">
      <Rich text={item.prompt} className="exercise-prompt" />

      <BgInput
        value={value}
        onChange={(v) => setValue(v)}
        onSubmit={settled ? () => onComplete(outcome()) : check}
        translit={translit}
        disabled={settled}
      />

      {!settled && (
        <div className="exercise-actions">
          <button className="btn btn-primary" onClick={check} disabled={!value.trim()}>
            Check
          </button>
          {item.hint && !showHint && phase.kind === "answering" && (
            <button className="btn btn-ghost" onClick={() => setShowHint(true)}>
              Hint
            </button>
          )}
          {phase.kind === "answering" && phase.attempted && (
            <button className="btn btn-ghost" onClick={() => setPhase({ kind: "revealed" })}>
              Show answer
            </button>
          )}
        </div>
      )}

      {item.hint && showHint && phase.kind === "answering" && (
        <div className="hint-box"><IconLightbulb size={16} /> {item.hint}</div>
      )}
      {phase.kind === "answering" && phase.attempted && (
        <div className="verdict verdict-wrong">Not quite — try once more.</div>
      )}

      {phase.kind === "solved" && (
        <div className={`verdict ${phase.result === "correct" ? "verdict-correct" : "verdict-almost"}`}>
          <div className="verdict-line">
            {phase.result === "correct" ? "Правилно! Correct." : "Almost — compare:"}
          </div>
          <div className="answer-reveal">
            <span className="answer-bg">{item.answer}</span>
            {speakText && <SpeakButton text={speakText} />}
          </div>
        </div>
      )}

      {phase.kind === "revealed" && (
        <div className="verdict verdict-wrong">
          <div className="verdict-line">The answer is:</div>
          <div className="answer-reveal">
            <span className="answer-bg">{item.answer}</span>
            {speakText && <SpeakButton text={speakText} />}
          </div>
        </div>
      )}

      {settled && (
        <ItemFooter item={item} onContinue={() => onComplete(outcome())} continueLabel={continueLabel} />
      )}
    </div>
  );
}

function ChoiceView({
  item,
  onComplete,
  continueLabel,
}: {
  item: ChoiceItem;
  onComplete: (outcome: ItemOutcome) => void;
  continueLabel?: string;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const settled = picked !== null;
  const gotIt = picked === item.correct;

  useEnterKey(() => {
    if (settled) {
      onComplete(gotIt ? { xp: XP_CHOICE, correct: 1, wrong: 0 } : { xp: 0, correct: 0, wrong: 1 });
    }
  });

  return (
    <div className="card item-card">
      <Rich text={item.prompt} className="exercise-prompt" />
      <div className="choices">
        {item.options.map((opt, i) => {
          let cls = "choice-btn";
          if (settled && i === item.correct) cls += " choice-correct";
          else if (settled && i === picked) cls += " choice-wrong";
          return (
            <button key={i} className={cls} disabled={settled} onClick={() => setPicked(i)}>
              {opt}
            </button>
          );
        })}
      </div>
      {settled && (
        <div className={`verdict ${gotIt ? "verdict-correct" : "verdict-wrong"}`}>
          {gotIt ? "Правилно!" : `Right answer: ${item.options[item.correct]}`}
          {item.speak && <SpeakButton text={item.speak} />}
        </div>
      )}
      {settled && (
        <ItemFooter
          item={item}
          onContinue={() => onComplete(gotIt ? { xp: XP_CHOICE, correct: 1, wrong: 0 } : { xp: 0, correct: 0, wrong: 1 })}
          continueLabel={continueLabel}
        />
      )}
    </div>
  );
}
