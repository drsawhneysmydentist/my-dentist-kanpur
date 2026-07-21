import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocEntry {
  id: string;
  label: string;
}

export function StickyToc({ items }: { items: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 104;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  }

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft"
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <List className="h-3.5 w-3.5" />
        On This Page
      </div>
      <ul className="max-h-[60vh] space-y-1 overflow-y-auto pr-1 text-sm hide-scrollbar">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={(e) => handleClick(e, it.id)}
              className={`block rounded-lg px-3 py-1.5 leading-snug transition-colors ${
                activeId === it.id
                  ? "bg-aqua-soft font-medium text-aqua-deep"
                  : "text-muted-foreground hover:bg-bone hover:text-foreground"
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
