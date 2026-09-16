// Shared helpers for in-page section navigation (fixed navbar offset aware).

/** Approx. fixed navbar height so scrolled sections aren't hidden underneath it. */
const NAVBAR_OFFSET = 88;

/** Section ids that live on the Home page and are reachable via hash links. */
export const HOME_SECTION_IDS = [
  "home",
  "services",
  "gallery",
  "packages",
  "about",
  "reviews",
  "contact",
] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];

/**
 * Smoothly scrolls to an element by id, offsetting for the fixed navbar.
 * Returns true if the element was found and scrolled to.
 */
export function scrollToSectionId(id: string): boolean {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  return true;
}

/**
 * Scrolls to the section referenced by the current URL hash (if any).
 * Retries briefly on mount since section layout may still be settling
 * (images/animations) right after a route change.
 */
export function scrollToCurrentHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  let attempts = 0;
  const tryScroll = () => {
    attempts += 1;
    const scrolled = scrollToSectionId(hash);
    if (!scrolled && attempts < 10) {
      window.setTimeout(tryScroll, 60);
    }
  };
  window.requestAnimationFrame(tryScroll);
}
