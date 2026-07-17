// Course content model.
//
// Note bodies and exercise prompts support a small markdown subset:
// **bold**, *italic*, `- ` bullet lines, and blank-line paragraph breaks.
// Bulgarian in **bold** inside notes is what the learner should focus on.
//
// All notes and after-text are written in English (primary language).
// The `he` and `ru` fields hold optional parallels for Hebrew and Russian
// speakers; each is shown only when the user enables it in settings.

export interface NoteItem {
  type: "note";
  title?: string;
  body: string;
  /** Bulgarian phrases to render as tappable audio chips under the note. */
  speak?: string[];
  introduces?: string[];
  requires?: string[];
  reviews?: string[];
  he?: string;
  ru?: string;
}

export interface ExerciseItem {
  type: "exercise";
  /** e.g. "How would you say: **I want to speak Bulgarian**?" */
  prompt: string;
  /** Canonical answer, shown after checking. */
  answer: string;
  /** Alternative answers accepted as fully correct. */
  accept?: string[];
  /** Shown on demand before answering. */
  hint?: string;
  /** Teaching comment shown after the reveal. */
  after?: string;
  /** Text to speak; defaults to `answer` when it contains Cyrillic. */
  speak?: string;
  introduces?: string[];
  requires?: string[];
  reviews?: string[];
  he?: string;
  ru?: string;
}

export interface ChoiceItem {
  type: "choice";
  prompt: string;
  options: string[];
  correct: number;
  after?: string;
  speak?: string;
  introduces?: string[];
  requires?: string[];
  reviews?: string[];
  he?: string;
  ru?: string;
}

export type Item = NoteItem | ExerciseItem | ChoiceItem;

export interface Lesson {
  id: string;
  title: string;
  subtitle?: string;
  items: Item[];
}

export interface Module {
  id: string;
  title: string;
  blurb: string;
  lessons: Lesson[];
}
