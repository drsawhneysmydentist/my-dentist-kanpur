import type { ReactNode } from "react";

// Minimal, dependency-free markdown renderer for rich blog content.
// Supports: ## / ### headings (with auto slug ids for TOC anchor links),
// **bold**, [links](url), GFM-style pipe tables, "-" bullet lists,
// "1." numbered lists, "---" horizontal rules, and plain paragraphs.
// Intentionally small in scope — this is not a general-purpose markdown
// engine, just enough to render the long-form blog articles in this project
// without adding a new npm dependency.

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Split on **bold** and [text](url) in one pass.
  const pattern = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i++}`} className="font-semibold text-warm-brown">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      nodes.push(
        <a
          key={`${keyPrefix}-a-${i++}`}
          href={match[5]}
          className="text-rose-gold underline underline-offset-2 hover:text-warm-brown"
        >
          {match[4]}
        </a>,
      );
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "hr" }
  | { type: "table"; header: string[]; rows: string[][] }
  | { type: "img"; src: string; alt: string };

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      blocks.push({ type: "h3", text, id: slugify(text) });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      blocks.push({ type: "h2", text, id: slugify(text) });
      i++;
      continue;
    }

    if (line === "---") {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Inline image: ![alt text](src)
    const imgMatch = line.match(/^!\[(.*?)\]\((.+?)\)$/);
    if (imgMatch) {
      blocks.push({ type: "img", alt: imgMatch[1], src: imgMatch[2] });
      i++;
      continue;
    }

    // Table: a header row, a separator row of dashes/pipes, then data rows.
    if (line.startsWith("|") && lines[i + 1]?.trim().match(/^\|?[\s:-]+\|/)) {
      const header = line
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(
          lines[i]
            .trim()
            .split("|")
            .map((c) => c.trim())
            .filter(
              (_, idx, arr) =>
                !(idx === 0 && arr[0] === "") &&
                !(idx === arr.length - 1 && arr[arr.length - 1] === ""),
            ),
        );
        i++;
      }
      blocks.push({ type: "table", header, rows });
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Plain paragraph — gather consecutive non-empty, non-special lines.
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3}\s|---|\||-\s|\d+\.\s)/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", text: paraLines.join(" ") });
  }

  return blocks;
}

export function extractHeadings(markdown: string): { text: string; id: string; level: 2 | 3 }[] {
  return parseBlocks(markdown)
    .filter((b): b is Extract<Block, { type: "h2" | "h3" }> => b.type === "h2" || b.type === "h3")
    .map((b) => ({ text: b.text, id: b.id, level: b.type === "h2" ? 2 : 3 }));
}

export function MarkdownContent({ markdown }: { markdown: string }) {
  const blocks = parseBlocks(markdown);

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const key = `block-${idx}`;
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                id={block.id}
                className="!mt-14 scroll-mt-28 font-display text-2xl leading-tight text-warm-brown sm:text-3xl"
              >
                {renderInline(block.text, key)}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={key}
                id={block.id}
                className="!mt-8 scroll-mt-28 font-display text-xl leading-tight text-warm-brown sm:text-2xl"
              >
                {renderInline(block.text, key)}
              </h3>
            );
          case "p":
            return (
              <p key={key} className="text-base font-light leading-relaxed text-muted-foreground">
                {renderInline(block.text, key)}
              </p>
            );
          case "ul":
            return (
              <ul
                key={key}
                className="list-disc space-y-2 pl-5 text-base font-light leading-relaxed text-muted-foreground marker:text-rose-gold"
              >
                {block.items.map((item, i) => (
                  <li key={`${key}-${i}`}>{renderInline(item, `${key}-${i}`)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={key}
                className="list-decimal space-y-2 pl-5 text-base font-light leading-relaxed text-muted-foreground marker:text-rose-gold marker:font-semibold"
              >
                {block.items.map((item, i) => (
                  <li key={`${key}-${i}`}>{renderInline(item, `${key}-${i}`)}</li>
                ))}
              </ol>
            );
          case "hr":
            return <hr key={key} className="!my-12 border-warm-brown/15" />;
          case "img":
            return (
              <figure key={key} className="!my-8 overflow-hidden rounded-2xl bg-warm-brown/10">
                <img
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </figure>
            );
          case "table":
            return (
              <div
                key={key}
                className="!my-8 overflow-x-auto rounded-xl border border-warm-brown/15"
              >
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-beige">
                      {block.header.map((h, i) => (
                        <th
                          key={i}
                          className="border-b border-warm-brown/15 px-4 py-3 text-left font-display text-warm-brown"
                        >
                          {renderInline(h, `${key}-h-${i}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-card" : "bg-beige/40"}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="border-b border-warm-brown/10 px-4 py-3 align-top text-muted-foreground"
                          >
                            {renderInline(cell, `${key}-${ri}-${ci}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
