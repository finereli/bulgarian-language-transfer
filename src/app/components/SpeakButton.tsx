import { useState } from "react";
import { playTTS } from "../audio";

export function SpeakButton({ text, label }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");

  const onClick = async () => {
    if (state === "loading") return;
    setState("loading");
    try {
      await playTTS(text);
      setState("idle");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 2000);
    }
  };

  return (
    <button
      type="button"
      className={`speak-btn ${label ? "speak-chip" : ""}`}
      onClick={() => void onClick()}
      title={`Listen: ${text}`}
      aria-label={`Listen to ${text}`}
    >
      <span aria-hidden>{state === "loading" ? "…" : state === "error" ? "✕" : "🔊"}</span>
      {label ? <span className="speak-label">{label}</span> : null}
    </button>
  );
}
