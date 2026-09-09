import type { Env } from "./types";

const MAX_TTS_CHARS = 300;

async function sha256hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function xmlEscape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function synthesizeAzure(env: Env, text: string): Promise<Response> {
  if (!env.AZURE_SPEECH_KEY || !env.AZURE_SPEECH_REGION) {
    return Response.json(
      { error: "TTS is not configured (AZURE_SPEECH_KEY or AZURE_SPEECH_REGION missing)" },
      { status: 503 }
    );
  }

  const voice = env.TTS_VOICE || "mk-MK-MarijaNeural";
  const ssml = `<speak version="1.0" xml:lang="mk-MK"><voice name="${voice}"><prosody rate="-10%">${xmlEscape(
    text
  )}</prosody></voice></speak>`;

  const upstream = await fetch(
    `https://${env.AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": env.AZURE_SPEECH_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
        "User-Agent": "ajde",
      },
      body: ssml,
    }
  );

  if (!upstream.ok) {
    const detail = await upstream.text();
    return Response.json(
      { error: `TTS upstream error (${upstream.status})`, detail: detail.slice(0, 500) },
      { status: 502 }
    );
  }

  const audio = await upstream.arrayBuffer();
  return new Response(audio, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

async function synthesizeOpenAI(env: Env, text: string): Promise<Response> {
  if (!env.OPENAI_API_KEY) {
    return Response.json({ error: "TTS is not configured (OPENAI_API_KEY missing)" }, { status: 503 });
  }

  const model = env.TTS_MODEL || "gpt-4o-mini-tts";
  const voice = env.TTS_VOICE || "marin";

  const upstream = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      voice,
      input: text,
      instructions:
        "Speak in clear, natural Macedonian (the standard language of North Macedonia) with standard pronunciation. Speak slightly slower than normal, enunciating clearly for a language learner.",
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
  return new Response(audio, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export async function synthesize(env: Env, text: string): Promise<Response> {
  const trimmed = text.trim();
  if (!trimmed) return Response.json({ error: "empty text" }, { status: 400 });
  if (trimmed.length > MAX_TTS_CHARS) {
    return Response.json({ error: "text too long" }, { status: 400 });
  }

  const provider = env.TTS_PROVIDER || "azure";
  const model = env.TTS_MODEL || "gpt-4o-mini-tts";
  const voice = env.TTS_VOICE || (provider === "azure" ? "mk-MK-MarijaNeural" : "marin");

  // Cache synthesized audio by content hash so each phrase costs one API call ever.
  const cache = caches.default;
  const cacheKey = new Request(
    `https://tts-cache.internal/${await sha256hex(
      `${provider}|${provider === "azure" ? voice : model}|${trimmed}`
    )}`
  );
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const response =
    provider === "openai" ? await synthesizeOpenAI(env, trimmed) : await synthesizeAzure(env, trimmed);

  if (response.ok) {
    await cache.put(cacheKey, response.clone());
  }
  return response;
}
