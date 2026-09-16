import { ImageCarousel, type CarouselImage } from "./ImageCarousel";

// Content per gallery category — used to build a meaningful alt tag for
// every image found in that folder.
const categoryAlt: Record<string, string> = {
  wedding: "Wedding photography by SD Event & Photography, Kanpur",
  "pre-wedding": "Pre-wedding photoshoot by SD Event & Photography, Kanpur",
  corporate: "Corporate event by SD Event & Photography, Kanpur",
  haldi: "Haldi ceremony decor by SD Event & Photography, Kanpur",
  mehendi: "Mehendi ceremony decor by SD Event & Photography, Kanpur",
  "stage-decor": "Wedding stage decor by SD Event & Photography, Kanpur",
  "home-decor": "Home decoration by SD Event & Photography, Kanpur",
  "team-management": "SD Event & Photography team in action, Kanpur",
};

// Pulls in every image from every gallery subfolder directly — this is the
// single source of truth (src/assets/gallery). No hardcoded/sample/demo
// images are used; add or remove a file there and this list updates itself.
const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*/*.{webp,jpg,jpeg,png}",
  { eager: true },
);

const rawGalleryImages: (CarouselImage & { category: string })[] = Object.keys(galleryModules)
  .sort()
  .map((path, i) => {
    const category = path.split("/gallery/")[1]?.split("/")[0] ?? "";
    return {
      id: `${category}-${i}`,
      src: galleryModules[path].default,
      alt: categoryAlt[category] ?? "SD Event & Photography portfolio image, Kanpur",
      category,
    };
  });

// Deterministic shuffle (mulberry32) so order is stable but mixed. Only
// display ORDER changes — ids, src, alt all stay exactly as above, so no
// filenames/URLs/alt tags/SEO structure are touched.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Round-robin across categories (with light in-category shuffle) so
 * consecutive images alternate event types instead of grouping by
 * category, and no two consecutive images share a category when possible. */
function buildMixedOrder(images: (CarouselImage & { category: string })[]) {
  const rand = mulberry32(20240607);
  const byCategory = new Map<string, (CarouselImage & { category: string })[]>();
  for (const img of images) {
    const list = byCategory.get(img.category) ?? [];
    list.push(img);
    byCategory.set(img.category, list);
  }
  for (const list of byCategory.values()) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  const buckets = Array.from(byCategory.values());
  const result: (CarouselImage & { category: string })[] = [];
  let lastCategory: string | null = null;
  while (buckets.some((b) => b.length > 0)) {
    const candidates = buckets.filter((b) => b.length > 0);
    const nonRepeat = candidates.filter((b) => b[0]?.category !== lastCategory);
    const pool = nonRepeat.length > 0 ? nonRepeat : candidates;
    const pick = pool.reduce((max, b) => (b.length > max.length ? b : max), pool[0]);
    const img = pick.shift()!;
    result.push(img);
    lastCategory = img.category;
  }
  return result;
}

const galleryImages: CarouselImage[] = buildMixedOrder(rawGalleryImages);

/**
 * ImageScroll
 * A luxury, infinitely auto-scrolling showcase strip built directly from
 * every real image in src/assets/gallery (no static/sample array).
 *
 * The auto-scroll engine itself lives in ImageCarousel.tsx — a requestAnimationFrame
 * driven, seamless 3x-copy loop with drag/flick momentum and hover-pause, ported
 * from the supplied standalone carousel component.
 */
export function ImageScroll() {
  if (galleryImages.length === 0) return null;

  return (
    <section
      aria-label="Photo showcase"
      className="relative w-full overflow-hidden bg-beige/40 py-10 sm:py-14"
    >
      <div className="mx-auto mb-8 max-w-6xl px-4 text-center sm:mb-10 sm:px-8">
        <div className="eyebrow text-rose-gold">Moments We've Captured</div>
        <h2 className="mt-2 font-display text-3xl font-light text-warm-brown sm:text-4xl">
          A Glimpse Into Our Work
        </h2>
      </div>

      <div className="relative">
        {/* Edge fade masks for a premium, seamless framing */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-beige/40 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-beige/40 to-transparent sm:w-24" />

        <ImageCarousel
          images={galleryImages}
          ariaLabel="Photo showcase carousel"
          cardWidthClassName="w-40 sm:w-56 md:w-64 lg:w-72"
          gap={16}
          speed={70}
          showArrows={false}
          enableLightbox
        />
      </div>
    </section>
  );
}
