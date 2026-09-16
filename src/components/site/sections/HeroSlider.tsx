import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow?: string;
  headline: string;
};

// Content per gallery category — reused for every image found in that folder.
const categoryContent: Record<string, { eyebrow: string; headline: string; alt: string }> = {
  wedding: {
    eyebrow: "Weddings",
    headline: "Timeless Wedding Celebrations",
    alt: "Luxury Kanpur wedding moment",
  },
  "stage-decor": {
    eyebrow: "Stage & Decor",
    headline: "Décor That Sets The Scene",
    alt: "Cinematic stage decor for a grand event",
  },
  mehendi: {
    eyebrow: "Mehendi & Rituals",
    headline: "Colours, Rituals & Joy",
    alt: "Vibrant mehendi ceremony moment",
  },
  corporate: {
    eyebrow: "Corporate Events",
    headline: "Polished Corporate Experiences",
    alt: "Elegant corporate event setup",
  },
  haldi: {
    eyebrow: "Haldi Ceremony",
    headline: "Golden Haldi Traditions",
    alt: "Joyful haldi ceremony moment",
  },
  "home-decor": {
    eyebrow: "Home Decor",
    headline: "Intimate Home Celebrations",
    alt: "Elegant home decor setup for an event",
  },
  "pre-wedding": {
    eyebrow: "Pre-Wedding",
    headline: "Love Stories, Beautifully Told",
    alt: "Romantic pre-wedding photography moment",
  },
  "team-management": {
    eyebrow: "Our Team",
    headline: "The Team Behind Every Event",
    alt: "SD Event & Photography team at work",
  },
};

// Pulls in every image from every gallery subfolder, so all uploaded photos
// automatically appear in the slider (add/remove files in src/assets/gallery
// and this list updates itself — no code changes needed).
const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*/*.{webp,jpg,jpeg,png}",
  { eager: true },
);

// Images excluded from the homepage hero slider only (still used elsewhere,
// e.g. Gallery/Portfolio/Services sections, so the files themselves stay).
const heroSliderExcludedImages = ["gallery/haldi/haldi-01.webp"];

const defaultSlides: HeroSlide[] = Object.keys(galleryModules)
  .filter((path) => !heroSliderExcludedImages.some((excluded) => path.endsWith(excluded)))
  .sort()
  .map((path) => {
    const category = path.split("/gallery/")[1]?.split("/")[0] ?? "";
    const content = categoryContent[category] ?? {
      eyebrow: undefined,
      headline: "SD Event & Photography",
      alt: "SD Event & Photography portfolio image",
    };
    return {
      image: galleryModules[path].default,
      alt: content.alt,
      eyebrow: content.eyebrow,
      headline: content.headline,
    };
  });

/**
 * HeroSlider
 * A premium, auto-rotating slide section that sits directly below the
 * homepage Hero. Built with Swiper.js so it stays independent of the
 * Hero's own framer-motion entrance animation while reusing the same
 * design tokens (ivory / champagne / gradient-luxe / font-display).
 */
export function HeroSlider({ slides = defaultSlides }: { slides?: HeroSlide[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);
  const goTo = useCallback((i: number) => swiperRef.current?.slideToLoop(i), []);

  return (
    <section
      aria-label="Featured event highlights"
      className="group/slider relative h-[70svh] min-h-[420px] w-full overflow-hidden sm:h-[80svh] sm:min-h-[520px]"
    >
      <Swiper
        modules={[Autoplay, Keyboard, A11y, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop={hasMultipleSlides}
        autoplay={
          hasMultipleSlides
            ? { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }
            : false
        }
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.image + i}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 text-center sm:px-10 sm:pb-16">
                {slide.eyebrow && <p className="eyebrow text-champagne">{slide.eyebrow}</p>}
                <h2 className="mt-3 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-light leading-tight text-ivory">
                  {slide.headline}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMultipleSlides && (
        <>
          {/* Prev / Next controls */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-ivory/40 bg-ink/30 p-2.5 text-ivory backdrop-blur-sm opacity-0 transition-all duration-300 hover:border-champagne hover:text-champagne focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne group-hover/slider:opacity-100 sm:left-6 sm:p-3"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-ivory/40 bg-ink/30 p-2.5 text-ivory backdrop-blur-sm opacity-0 transition-all duration-300 hover:border-champagne hover:text-champagne focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne group-hover/slider:opacity-100 sm:right-6 sm:p-3"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots / indicators */}
          <div
            className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5"
            role="tablist"
            aria-label="Slide navigation"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.image + i}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to slide ${i + 1}: ${slide.headline}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                  activeIndex === i ? "w-6 bg-champagne" : "w-2 bg-ivory/50 hover:bg-ivory/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
