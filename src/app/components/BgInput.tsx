import { useRef, useState, type KeyboardEvent } from "react";
import { translitLive } from "../check";

const HELPER_CHARS = ["ъ", "ж", "ч", "ш", "щ", "ю", "я", "й", "ь"];

export function useTranslitPref(): [boolean, (v: boolean) => void] {
  const [on, setOn] = useState(() => localStorage.getItem("hayde-translit") !== "0");
  const set = (v: boolean) => {
    localStorage.setItem("hayde-translit", v ? "1" : "0");
    setOn(v);
  };
  return [on, set];
}

export function BgInput({
  value,
  onChange,
  onSubmit,
  translit,
  disabled,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  translit: boolean;
  disabled?: boolean;
  placeholder?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (raw: string) => {
    onChange(translit ? translitLive(raw) : raw);
  };

  const insertChar = (ch: string) => {
    const input = ref.current;
    if (!input) return onChange(value + ch);
    const start = input.selectionStart ?? value.length;
    const end = input.selectionEnd ?? value.length;
    const next = value.slice(0, start) + ch + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + ch.length, start + ch.length);
    });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="bg-input">
      <input
        ref={ref}
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder ?? "Type your answer…"}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={onKeyDown}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        lang="bg"
      />
      {!disabled && (
        <div className="char-strip" aria-label="Bulgarian characters">
          {HELPER_CHARS.map((ch) => (
            <button
              key={ch}
              type="button"
              tabIndex={-1}
              className="char-key"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => insertChar(ch)}
            >
              {ch}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
