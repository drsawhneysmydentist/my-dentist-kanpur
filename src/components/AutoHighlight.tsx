import { Fragment, useMemo } from "react";
import {
  HIGHLIGHT_STYLES,
  HIGHLIGHT_TERMS,
  MAX_HIGHLIGHTS_PER_BLOCK,
  type HighlightCategory,
} from "@/lib/highlight-config";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Build one combined, longest-match-first regex from the centralized config.
// Built once per module load — every page reuses the same compiled pattern.
const ALL_TERMS: { term: string; category: HighlightCategory }[] = (
  Object.entries(HIGHLIGHT_TERMS) as [HighlightCategory, string[]][]
).flatMap(([category, terms]) => terms.map((term) => ({ term, category })));

// Longest phrases first so "single tooth implant" wins over "implant".
ALL_TERMS.sort((a, b) => b.term.length - a.term.length);

const COMBINED_PATTERN = new RegExp(
  `(${ALL_TERMS.map((t) => escapeRegExp(t.term)).join("|")})`,
  "gi"
);

function categoryFor(match: string): HighlightCategory {
  const lower = match.toLowerCase();
  const found = ALL_TERMS.find((t) => t.term.toLowerCase() === lower);
  return found?.category ?? "treatment";
}

/**
 * AutoHighlight
 *
 * Renders plain text with 1–3 highlighted terms, resolved automatically
 * from the centralized highlight-config.ts. Never edit this component
 * per-page — add/remove terms in the config instead.
 *
 * Usage: <AutoHighlight text={someString} />
 */
export function AutoHighlight({
  text,
  max = MAX_HIGHLIGHTS_PER_BLOCK,
}: {
  text: string;
  max?: number;
}) {
  const parts = useMemo(() => {
    const result: { text: string; highlight: boolean; category?: HighlightCategory }[] = [];
    let lastIndex = 0;
    let highlightCount = 0;
    const seen = new Set<string>();

    COMBINED_PATTERN.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = COMBINED_PATTERN.exec(text)) !== null) {
      const matched = match[0];
      const key = matched.toLowerCase();

      // Respect the max-highlights-per-block cap and avoid re-highlighting
      // the same phrase twice within one block.
      if (highlightCount >= max || seen.has(key)) {
        continue;
      }

      if (match.index > lastIndex) {
        result.push({ text: text.slice(lastIndex, match.index), highlight: false });
      }
      result.push({ text: matched, highlight: true, category: categoryFor(matched) });
      seen.add(key);
      highlightCount += 1;
      lastIndex = match.index + matched.length;
    }

    if (lastIndex < text.length) {
      result.push({ text: text.slice(lastIndex), highlight: false });
    }

    return result;
  }, [text, max]);

  return (
    <>
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i} className={HIGHLIGHT_STYLES[part.category!]}>
            {part.text}
          </span>
        ) : (
          <Fragment key={i}>{part.text}</Fragment>
        )
      )}
    </>
  );
}
