const defaults = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function I({ size, children, ...props }: { size?: number; children: React.ReactNode } & React.SVGProps<SVGSVGElement>) {
  const s = size ?? 20;
  return <svg {...defaults} width={s} height={s} viewBox="0 0 24 24" aria-hidden {...props}>{children}</svg>;
}

export function IconFlame({ size }: { size?: number }) {
  return (
    <I size={size}>
      <path d="M12 2c1 4-2 6-2 10a4 4 0 0 0 8 0c0-4-3-6-3-8" />
      <path d="M12 22a4 4 0 0 1-4-4c0-2 1-3 2-4 1 1 2 2 2 4a4 4 0 0 0 4-4" />
    </I>
  );
}

export function IconStar({ size }: { size?: number }) {
  return (
    <I size={size}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
    </I>
  );
}

export function IconTrophy({ size }: { size?: number }) {
  return (
    <I size={size}>
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
      <path d="M9 21h6" />
      <path d="M12 16v5" />
    </I>
  );
}

export function IconChevronRight({ size }: { size?: number }) {
  return (
    <I size={size}>
      <polyline points="9 18 15 12 9 6" />
    </I>
  );
}

export function IconChevronLeft({ size }: { size?: number }) {
  return (
    <I size={size}>
      <polyline points="15 18 9 12 15 6" />
    </I>
  );
}

export function IconArrowRight({ size }: { size?: number }) {
  return (
    <I size={size}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </I>
  );
}

export function IconCheck({ size }: { size?: number }) {
  return (
    <I size={size}>
      <polyline points="6 12 10 16 18 8" />
    </I>
  );
}

export function IconX({ size }: { size?: number }) {
  return (
    <I size={size}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </I>
  );
}

export function IconSparkles({ size }: { size?: number }) {
  return (
    <I size={size}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" fill="currentColor" stroke="none" />
      <path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z" fill="currentColor" stroke="none" />
      <path d="M6 17l.5 1.5L8 19l-1.5.5L6 21l-.5-1.5L4 19l1.5-.5L6 17z" fill="currentColor" stroke="none" />
    </I>
  );
}

export function IconLightbulb({ size }: { size?: number }) {
  return (
    <I size={size}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </I>
  );
}

export function IconVolume({ size }: { size?: number }) {
  return (
    <I size={size}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </I>
  );
}

export function IconGear({ size }: { size?: number }) {
  return (
    <I size={size}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </I>
  );
}
