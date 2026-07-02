import { Fragment, type ReactNode } from "react";

// Renders the mini-markdown used in course content:
// paragraphs (blank line), bullet lists ("- "), **bold**, *italic*.

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}b${i}`}>{match[1]}</strong>);
    } else {
      nodes.push(<em key={`${keyPrefix}i${i}`}>{match[2]}</em>);
    }
    last = match.index + match[0].length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderLines(block: string, keyPrefix: string): ReactNode {
  const lines = block.split("\n");
  const out: ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = (key: string) => {
    if (!bullets.length) return;
    out.push(
      <ul key={key}>
        {bullets.map((b, j) => (
          <li key={j}>{renderInline(b, `${key}l${j}`)}</li>
        ))}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((line, i) => {
    if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
    } else {
      flushBullets(`${keyPrefix}u${i}`);
      if (line.trim()) {
        out.push(
          <Fragment key={`${keyPrefix}t${i}`}>
            {i > 0 && out.length > 0 ? <br /> : null}
            {renderInline(line, `${keyPrefix}t${i}`)}
          </Fragment>
        );
      }
    }
  });
  flushBullets(`${keyPrefix}uend`);
  return out;
}

export function Rich({ text, className }: { text: string; className?: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className={className}>
      {blocks.map((block, i) =>
        block.trim().startsWith("- ") || block.includes("\n- ") ? (
          <div key={i} className="rich-block">
            {renderLines(block, `b${i}`)}
          </div>
        ) : (
          <p key={i}>{renderLines(block, `b${i}`)}</p>
        )
      )}
    </div>
  );
}
