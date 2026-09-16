import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * ImageCarousel — infinite auto-scrolling image carousel
 * ────────────────────────────────────────────────────────────────
 * Ported from the supplied standalone component, restyled to match the
 * SD Event & Photography theme (warm-brown / rose-gold / ivory / shadow-luxe).
 * The scrolling engine itself — rAF-driven constant drift, seamless 3x-copy
 * wrap, drag/flick momentum, hover-pause — is unchanged from the original.
 *
 * Features preserved from the original build:
 *  - Seamless infinite auto-scroll (constant px/sec drift)
 *  - Hover-to-pause
 *  - Pointer/touch drag with 1:1 tracking
 *  - Momentum/flick scrolling after release, decaying back into autoplay
 *  - Seamless looping via a 3x-duplicated track + modulo wrap
 *  - Optional lightbox (click-to-enlarge) with keyboard nav
 */

export interface CarouselImage {
  /** Unique, stable key — used for React keys & infinite-loop cloning */
  id: string;
  src: string;
  alt: string;
  /** Optional CSS object-position override (defaults to "center") */
  objectPosition?: string;
}

export interface ImageCarouselProps {
  /** The images to display. Required. */
  images: CarouselImage[];
  /** Tailwind width classes for each card. */
  cardWidthClassName?: string;
  /** Gap between cards in px. Default 20. */
  gap?: number;
  /** Autoplay speed in px/sec. Default 95. */
  speed?: number;
  /** How many times the image set is duplicated to build the seamless loop. Default 3 (minimum 2). */
  copies?: number;
  /** Show the prev/next arrow controls. Default true. */
  showArrows?: boolean;
  /** Enable click-to-open lightbox. Default true. */
  enableLightbox?: boolean;
  /** Extra className applied to the outer wrapper. */
  className?: string;
  /** Aria-label for the carousel section/viewport. */
  ariaLabel?: string;
}

const DEFAULT_CARD_WIDTH_CLASS = "w-40 sm:w-56 md:w-64 lg:w-72";

export function ImageCarousel({
  images,
  cardWidthClassName = DEFAULT_CARD_WIDTH_CLASS,
  gap = 20,
  speed = 95,
  copies = 3,
  showArrows = true,
  enableLightbox = true,
  className = "",
  ariaLabel = "Image carousel",
}: ImageCarouselProps) {
  const n = images.length;
  const COPIES = Math.max(2, copies);
  const GAP = gap;
  const BASE_SPEED = speed;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const xRef = useRef(0); // current translateX, always <= 0
  const setWidthRef = useRef(0); // width in px of ONE full set (n cards + gaps)
  const speedRef = useRef(BASE_SPEED);
  const hoveredRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTranslateRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTRef = useRef(0);
  const velocityRef = useRef(0); // px/sec, momentum after release
  const arrowNudgeRef = useRef(0); // px remaining to ease through on arrow click

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    speedRef.current = BASE_SPEED;
  }, [BASE_SPEED]);

  // Looped data: COPIES back-to-back sets so the visual loop never runs out
  // of cards in either scroll direction.
  const loopedImages = useMemo(() => {
    const out: Array<CarouselImage & { _key: string; _origIndex: number }> = [];
    for (let copy = 0; copy < COPIES; copy++) {
      images.forEach((img, i) => {
        out.push({ ...img, _key: `${img.id}-copy${copy}`, _origIndex: i });
      });
    }
    return out;
  }, [images, COPIES]);

  // Measure the pixel width of exactly one set (n cards) including gaps.
  const measure = useCallback(() => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (el) total += el.offsetWidth + GAP;
    }
    setWidthRef.current = total;
  }, [n, GAP]);

  function applyTransform() {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${xRef.current}px,0,0)`;
    }
  }

  function wrap() {
    const sw = setWidthRef.current;
    if (sw <= 0) return;
    // Keep x within one "set" of the middle copy so we never run dry on
    // either side, however far the user drags or however long autoplay runs.
    while (xRef.current <= -sw * 2) xRef.current += sw;
    while (xRef.current > -sw * 0) xRef.current -= sw;
  }

  useLayoutEffect(() => {
    measure();
    // Start in the middle copy so dragging either direction has slack
    // before the wrap-around recompute kicks in.
    xRef.current = -setWidthRef.current;
    applyTransform();
    setReady(true);

    const ro = new ResizeObserver(() => {
      const prevSetWidth = setWidthRef.current;
      measure();
      // Keep visual position stable if widths change (e.g. font load, resize)
      if (prevSetWidth > 0) {
        const ratio = setWidthRef.current / prevSetWidth;
        xRef.current *= ratio;
      } else {
        xRef.current = -setWidthRef.current;
      }
      applyTransform();
    });
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure]);

  // Main animation loop: autoplay drift, arrow-nudge easing, and momentum
  // settle after a drag release — all in one rAF tick for buttery 60fps.
  useEffect(() => {
    let raf = 0;
    let lastT = performance.now();

    const tick = (t: number) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;

      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 1) {
          // Momentum after a flick — decays toward 0, then autoplay resumes.
          xRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.94, dt * 60);
        } else if (Math.abs(arrowNudgeRef.current) > 0.5) {
          // Ease the remaining arrow-click distance.
          const step = arrowNudgeRef.current * Math.min(1, dt * 8);
          xRef.current += step;
          arrowNudgeRef.current -= step;
        } else if (!hoveredRef.current) {
          xRef.current -= speedRef.current * dt;
        }
        wrap();
        applyTransform();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── Pointer / drag / touch handling ──────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    velocityRef.current = 0;
    arrowNudgeRef.current = 0;
    dragStartXRef.current = e.clientX;
    dragStartTranslateRef.current = xRef.current;
    lastPointerXRef.current = e.clientX;
    lastPointerTRef.current = performance.now();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    xRef.current = dragStartTranslateRef.current + delta;
    wrap();
    applyTransform();

    const now = performance.now();
    const dt = now - lastPointerTRef.current;
    if (dt > 0) {
      velocityRef.current = ((e.clientX - lastPointerXRef.current) / dt) * 1000;
    }
    lastPointerXRef.current = e.clientX;
    lastPointerTRef.current = now;
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    // Clamp momentum so a fast flick still feels controlled, not chaotic.
    velocityRef.current = Math.max(-1400, Math.min(1400, velocityRef.current));
  };

  // ── Arrow controls ───────────────────────────────────────────────────
  const nudge = (dir: 1 | -1) => {
    velocityRef.current = 0;
    const cardWidth = cardRefs.current[0]?.offsetWidth ?? 280;
    const step = (cardWidth + GAP) * dir * -1;
    arrowNudgeRef.current += step;
  };

  // ── Hover pause ──────────────────────────────────────────────────────
  const onMouseEnter = () => (hoveredRef.current = true);
  const onMouseLeave = () => (hoveredRef.current = false);

  // ── Lightbox ─────────────────────────────────────────────────────────
  const openLightbox = (origIndex: number) => {
    if (enableLightbox) setLightboxIndex(origIndex);
  };
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + n) % n)),
    [n],
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % n)),
    [n],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, showPrev, showNext]);

  return (
    <div className={className}>
      {showArrows && (
        <div className="mb-6 flex items-center justify-end gap-3 px-4 sm:px-8">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous images"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-brown/15 bg-ivory text-warm-brown shadow-md transition-transform duration-300 hover:scale-105 hover:bg-warm-brown hover:text-ivory active:scale-95"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next images"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-brown/15 bg-ivory text-warm-brown shadow-md transition-transform duration-300 hover:scale-105 hover:bg-warm-brown hover:text-ivory active:scale-95"
          >
            <ArrowRightIcon />
          </button>
        </div>
      )}

      <div
        ref={viewportRef}
        aria-label={ariaLabel}
        className={`relative w-full select-none overflow-hidden ${ready ? "" : "opacity-0"}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        style={{ cursor: "grab", touchAction: "pan-y" }}
      >
        <div ref={trackRef} className="flex will-change-transform" style={{ gap: `${GAP}px` }}>
          {loopedImages.map((img, i) => {
            const isFirstCopy = i < n;
            return (
              <div
                key={img._key}
                ref={
                  isFirstCopy
                    ? (el) => {
                        cardRefs.current[img._origIndex] = el;
                      }
                    : undefined
                }
                className={`group relative h-32 shrink-0 overflow-hidden rounded-2xl bg-warm-brown/5 shadow-[0_18px_40px_-20px_oklch(0.32_0.045_55_/_0.35)] transition-shadow duration-500 hover:shadow-luxe sm:h-44 md:h-52 lg:h-56 ${cardWidthClassName}`}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(img._origIndex)}
                  aria-label={`Open image: ${img.alt}`}
                  className={`absolute inset-0 h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-rose-gold ${enableLightbox ? "cursor-pointer" : "cursor-default"}`}
                  draggable={false}
                  tabIndex={enableLightbox ? 0 : -1}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full select-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ objectPosition: img.objectPosition ?? "center" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warm-brown/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {enableLightbox && lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: CarouselImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-warm-brown/95 p-4 backdrop-blur-xl animate-[fadeIn_0.3s_ease] md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10"
      >
        <CloseIcon />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 sm:left-6"
      >
        <ArrowLeftIcon size={20} />
      </button>

      <img
        key={img.id}
        src={img.src}
        alt={img.alt}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-luxe"
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 sm:right-6"
      >
        <ArrowRightIcon size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-ivory/60">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

// ── Inline icons (no external icon library required) ────────────────────
function ArrowLeftIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ArrowRightIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function CloseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
