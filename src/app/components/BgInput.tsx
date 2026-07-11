import { useRef, useState, useLayoutEffect, type KeyboardEvent, type ChangeEvent } from "react";
import { translitLive, finalizeTranslit } from "../check";

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
  const cursorRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (cursorRef.current !== null && ref.current) {
      ref.current.setSelectionRange(cursorRef.current, cursorRef.current);
      cursorRef.current = null;
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const pos = e.target.selectionStart;
    if (translit) {
      const result = translitLive(raw);
      onChange(result);
      if (pos !== null) {
        cursorRef.current = pos >= raw.length
          ? result.length
          : finalizeTranslit(raw.slice(0, pos)).length;
      }
    } else {
      onChange(raw);
      cursorRef.current = pos;
    }
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
        onChange={handleChange}
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
