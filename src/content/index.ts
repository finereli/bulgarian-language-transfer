import type { Lesson, Module } from "./types";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { module5 } from "./module5";
import { module6 } from "./module6";
import { module7 } from "./module7";

export * from "./types";

export const modules: Module[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
];

export const lessonsById = new Map<string, Lesson>();
export const moduleByLessonId = new Map<string, Module>();
const orderedLessons: Lesson[] = [];

for (const mod of modules) {
  for (const lesson of mod.lessons) {
    lessonsById.set(lesson.id, lesson);
    moduleByLessonId.set(lesson.id, mod);
    orderedLessons.push(lesson);
  }
}

export const allLessons = orderedLessons;

export function nextLessonAfter(lessonId: string): Lesson | null {
  const idx = orderedLessons.findIndex((l) => l.id === lessonId);
  if (idx === -1 || idx === orderedLessons.length - 1) return null;
  return orderedLessons[idx + 1];
}
