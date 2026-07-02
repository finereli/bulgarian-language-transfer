// Answer normalization, fuzzy matching, and Latin→Cyrillic transliteration.

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ѝ/g, "и")
    .replace(/[.,!?;:'"„“”«»()\-—–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = new Array<number>(n + 1);
  let curr = new Array<number>(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      curr[j] = Math.min(
        prev[j] + 1,
        curr[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

export type CheckResult = "correct" | "almost" | "wrong";

export function checkAnswer(input: string, answer: string, accept?: string[]): CheckResult {
  const given = normalize(finalizeTranslit(input));
  if (!given) return "wrong";
  const targets = [answer, ...(accept ?? [])].map(normalize);
  if (targets.includes(given)) return "correct";
  let best = Infinity;
  let bestLen = answer.length;
  for (const t of targets) {
    const d = levenshtein(given, t);
    if (d < best) {
      best = d;
      bestLen = t.length;
    }
  }
  const threshold = bestLen <= 6 ? 1 : bestLen <= 14 ? 2 : 3;
  return best <= threshold ? "almost" : "wrong";
}

// --- Transliteration -------------------------------------------------------
//
// Latin runs are converted as you type. A trailing run that could still grow
// into a longer combination (s→sh→sht, y→ya…) is left visible in Latin until
// the next keystroke settles it; finalizeTranslit() settles everything.

const MULTI: [string, string][] = [
  ["sht", "щ"],
  ["zh", "ж"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["yu", "ю"],
  ["ya", "я"],
  ["yo", "ьо"],
];

const SINGLE: Record<string, string> = {
  a: "а", b: "б", v: "в", g: "г", d: "д", e: "е", z: "з", i: "и",
  j: "й", k: "к", l: "л", m: "м", n: "н", o: "о", p: "п", r: "р",
  s: "с", t: "т", u: "у", f: "ф", h: "х", c: "ц", x: "х", y: "ъ",
  w: "в", q: "я",
};

// Latin strings that are strict prefixes of a MULTI pattern.
const PENDING_PREFIXES = new Set<string>();
for (const [pat] of MULTI) {
  for (let i = 1; i < pat.length; i++) PENDING_PREFIXES.add(pat.slice(0, i));
}

function matchCase(out: string, sourceFirstChar: string): string {
  if (sourceFirstChar === sourceFirstChar.toUpperCase() && /[a-z]/i.test(sourceFirstChar)) {
    return out.charAt(0).toUpperCase() + out.slice(1);
  }
  return out;
}

function convertRun(run: string, final: boolean): string {
  let out = "";
  let i = 0;
  while (i < run.length) {
    const lower = run.slice(i).toLowerCase();
    const multi = MULTI.find(([pat]) => lower.startsWith(pat));
    if (multi) {
      out += matchCase(multi[1], run[i]);
      i += multi[0].length;
      continue;
    }
    // Hold back a trailing prefix of a multi-pattern until input settles.
    if (!final && PENDING_PREFIXES.has(lower)) {
      out += run.slice(i);
      break;
    }
    const single = SINGLE[run[i].toLowerCase()];
    out += single ? matchCase(single, run[i]) : run[i];
    i += 1;
  }
  return out;
}

export function translitLive(value: string): string {
  return value.replace(/[a-zA-Z]+/g, (run, offset: number) => {
    const isTail = offset + run.length === value.length;
    return convertRun(run, !isTail);
  });
}

export function finalizeTranslit(value: string): string {
  return value.replace(/[a-zA-Z]+/g, (run) => convertRun(run, true));
}

export function containsCyrillic(s: string): boolean {
  return /[Ѐ-ӿ]/.test(s);
}
