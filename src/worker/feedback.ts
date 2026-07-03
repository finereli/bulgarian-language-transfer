import type { Env } from "./types";

export interface FeedbackRequest {
  prompt: string;
  expected: string;
  given: string;
  showHebrew: boolean;
  showRussian: boolean;
}

const SYSTEM_PROMPT = `You are a concise, encouraging Bulgarian teacher inside a language-learning app based on the Language Transfer method. The learner typed an answer to a translation exercise and got it wrong (or nearly right).

Explain in at most 3 short sentences what the difference between their answer and the expected answer is, and whether their version is also acceptable Bulgarian (learners sometimes produce valid alternatives, e.g. including or dropping the subject pronoun, or different word order). Focus on the single most important point. Use simple grammatical terms. Never invent Bulgarian words. If their answer is actually fully correct and equivalent, say so plainly.`;

export async function explainMistake(env: Env, req: FeedbackRequest): Promise<Response> {
  if (!env.OPENROUTER_API_KEY) {
    return Response.json(
      { error: "AI feedback is not configured (OPENROUTER_API_KEY missing)" },
      { status: 503 }
    );
  }
  const prompt = req.prompt.slice(0, 500);
  const expected = req.expected.slice(0, 300);
  const given = req.given.slice(0, 300);
  if (!prompt || !expected || !given) {
    return Response.json({ error: "missing fields" }, { status: 400 });
  }

  let system = SYSTEM_PROMPT;
  const langs: string[] = [];
  if (req.showHebrew) langs.push("Hebrew");
  if (req.showRussian) langs.push("Russian");
  if (langs.length > 0) {
    system += ` The learner also knows ${langs.join(" and ")}, so you may reference ${langs.length === 1 ? "it" : "them"} if it clarifies the point.`;
  }

  const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: env.OPENROUTER_MODEL || "anthropic/claude-haiku-4.5",
      max_tokens: 300,
      messages: [
        { role: "system", content: system },
        {
          role: "user",
          content: `Exercise: "${prompt}"\nExpected answer: "${expected}"\nLearner's answer: "${given}"`,
        },
      ],
    }),
  });

  if (!upstream.ok) {
    const detail = await upstream.text();
    return Response.json(
      { error: `Feedback upstream error (${upstream.status})`, detail: detail.slice(0, 500) },
      { status: 502 }
    );
  }

  const data = (await upstream.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const feedback = data.choices?.[0]?.message?.content?.trim();
  if (!feedback) return Response.json({ error: "empty feedback" }, { status: 502 });
  return Response.json({ feedback });
}
