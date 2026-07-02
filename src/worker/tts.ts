import type { Env } from "./types";

const MAX_TTS_CHARS = 300;

async function sha256hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function synthesize(env: Env, text: string): Promise<Response> {
  const trimmed = text.trim();
  if (!trimmed) return Response.json({ error: "empty text" }, { status: 400 });
  if (trimmed.length > MAX_TTS_CHARS) {
    return Response.json({ error: "text too long" }, { status: 400 });
  }
  if (!env.OPENAI_API_KEY) {
    return Response.json({ error: "TTS is not configured (OPENAI_API_KEY missing)" }, { status: 503 });
  }

  const model = env.TTS_MODEL || "gpt-4o-mini-tts";
  const voice = env.TTS_VOICE || "marin";

  // Cache synthesized audio by content hash so each phrase costs one API call ever.
  const cache = caches.default;
  const cacheKey = new Request(
    `https://tts-cache.internal/${await sha256hex(`${model}|${voice}|${trimmed}`)}`
  );
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const upstream = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      voice,
      input: trimmed,
      instructions:
        "Speak in clear, natural Bulgarian with standard pronunciation. Speak slightly slower than normal, enunciating clearly for a language learner.",
      response_format: "mp3",
    }),
  });

  if (!upstream.ok) {
    const detail = await upstream.text();
    return Response.json(
      { error: `TTS upstream error (${upstream.status})`, detail: detail.slice(0, 500) },
      { status: 502 }
    );
  }

  const audio = await upstream.arrayBuffer();
  const response = new Response(audio, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
  await cache.put(cacheKey, response.clone());
  return response;
}
