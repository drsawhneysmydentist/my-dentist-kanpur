import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { carouselImages, type CarouselImage } from "@/data/carouselImages";

// Fixed 5:4 card size per breakpoint. Every card uses the SAME width at a
// given viewport, so with aspect-ratio: 5/4 the height is identical across
// every card too — desktop, tablet, and mobile each get one consistent
// card height. Mobile gets a larger width so the photos read clearly
// without forcing extra vertical scroll.
const CARD_WIDTH_CLASS = "w-[78vw] sm:w-[55vw] md:w-[320px] lg:w-[300px] xl:w-[280px]";
const GAP = 20; // px, must match the gap used on the track
const BASE_SPEED = 95; // px/sec — ~30-35% faster than a typical 70px/s baseline
const COPIES = 3; // number of times the image set is duplicated for the loop

export function ImageCarousel() {
  const images = carouselImages;
  const n = images.length;

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
  }, [images]);

  // Measure the pixel width of exactly one set (n cards) including gaps.
  const measure = useCallback(() => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (el) total += el.offsetWidth + GAP;
    }
    setWidthRef.current = total;
  }, [n]);

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
  const openLightbox = (origIndex: number) => setLightboxIndex(origIndex);
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
    <section className="overflow-hidden px-3 py-20 md:px-5 md:py-28" aria-label="Clinic photo gallery">
      <Reveal>
        <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-end justify-between gap-6 px-3 md:mb-12">
          <div>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Inside Our Clinic
            </div>
            <h2 className="mt-6 max-w-xl font-display text-4xl md:text-5xl">
              A Glimpse of <span className="italic text-aqua-deep">Life at My Dentist</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous images"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-white text-foreground shadow-soft transition-transform duration-300 hover:scale-105 hover:bg-aqua hover:text-white active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Next images"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-white text-foreground shadow-soft transition-transform duration-300 hover:scale-105 hover:bg-aqua hover:text-white active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Reveal>

      <div
        ref={viewportRef}
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
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${GAP}px` }}
        >
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
                className={`group relative shrink-0 overflow-hidden rounded-[1.75rem] bg-bone shadow-soft md:rounded-[2rem] ${CARD_WIDTH_CLASS}`}
                style={{ aspectRatio: "5 / 4" }}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(img._origIndex)}
                  aria-label={`Open image: ${img.alt}`}
                  className="absolute inset-0 h-full w-full cursor-pointer"
                  draggable={false}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ objectPosition: img.objectPosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={showPrev}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </section>
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
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={img.id}
          src={img.src}
          alt={img.alt}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        />
      </AnimatePresence>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-white/60">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  );
}
