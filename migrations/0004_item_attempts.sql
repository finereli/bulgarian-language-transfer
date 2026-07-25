CREATE TABLE item_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  lesson_id TEXT NOT NULL,
  item_index INTEGER NOT NULL,
  item_type TEXT NOT NULL,
  outcome TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 1,
  hint_used INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_item_attempts_user_lesson ON item_attempts(user_id, lesson_id);
