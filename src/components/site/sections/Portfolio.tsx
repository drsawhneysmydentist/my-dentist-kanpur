import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import wedding01 from "@/assets/gallery/wedding/wedding-01.webp";
import wedding02 from "@/assets/gallery/wedding/wedding-02.webp";
import wedding03 from "@/assets/gallery/wedding/wedding-03.webp";
import wedding04 from "@/assets/gallery/wedding/wedding-04.webp";
import wedding05 from "@/assets/gallery/wedding/wedding-05.webp";
import wedding06 from "@/assets/gallery/wedding/wedding-06.webp";
import preWedding01 from "@/assets/gallery/pre-wedding/pre-wedding-01.webp";
import preWedding02 from "@/assets/gallery/pre-wedding/pre-wedding-02.webp";
import preWedding03 from "@/assets/gallery/pre-wedding/pre-wedding-03.webp";
import preWedding04 from "@/assets/gallery/pre-wedding/pre-wedding-04.webp";
import corporate01 from "@/assets/gallery/corporate/corporate-01.webp";
import corporate02 from "@/assets/gallery/corporate/corporate-02.webp";
import corporate03 from "@/assets/gallery/corporate/corporate-03.webp";
import haldi01 from "@/assets/gallery/haldi/haldi-01.webp";
import haldi02 from "@/assets/gallery/haldi/haldi-02.webp";
import haldi03 from "@/assets/gallery/haldi/haldi-03.webp";
import haldi04 from "@/assets/gallery/haldi/haldi-04.webp";
import haldi05 from "@/assets/gallery/haldi/haldi-05.webp";
import mehendi01 from "@/assets/gallery/mehendi/mehendi-01.webp";
import mehendi02 from "@/assets/gallery/mehendi/mehendi-02.webp";
import mehendi03 from "@/assets/gallery/mehendi/mehendi-03.webp";
import stageDecor01 from "@/assets/gallery/stage-decor/stage-decor-01.webp";
import stageDecor02 from "@/assets/gallery/stage-decor/stage-decor-02.webp";
import stageDecor03 from "@/assets/gallery/stage-decor/stage-decor-03.webp";
import stageDecor04 from "@/assets/gallery/stage-decor/stage-decor-04.webp";
import stageDecor05 from "@/assets/gallery/stage-decor/stage-decor-05.webp";
import stageDecor06 from "@/assets/gallery/stage-decor/stage-decor-06.webp";
import stageDecor07 from "@/assets/gallery/stage-decor/stage-decor-07.webp";
import homeDecor01 from "@/assets/gallery/home-decor/home-decor-01.webp";
import homeDecor02 from "@/assets/gallery/home-decor/home-decor-02.webp";
import homeDecor03 from "@/assets/gallery/home-decor/home-decor-03.webp";
import homeDecor04 from "@/assets/gallery/home-decor/home-decor-04.webp";
import homeDecor05 from "@/assets/gallery/home-decor/home-decor-05.webp";
import team01 from "@/assets/gallery/team-management/team-01.webp";
import team02 from "@/assets/gallery/team-management/team-02.webp";
import team03 from "@/assets/gallery/team-management/team-03.webp";
import team04 from "@/assets/gallery/team-management/team-04.webp";

type Cat = "All" | "Weddings" | "Events" | "Portraits" | "Décor" | "Haldi" | "Mehendi" | "Stage Decor" | "Home Decor" | "Team & Management";
const cats: Cat[] = ["All", "Weddings", "Events", "Portraits", "Décor", "Haldi", "Mehendi", "Stage Decor", "Home Decor", "Team & Management"];

const items = [
  { img: wedding01, cat: "Weddings", h: "tall", alt: "Bride and groom grand stage entry under floral ceiling — wedding photography in Kanpur by SD Event & Photography" },
  { img: stageDecor06, cat: "Décor", h: "short", alt: "Pink and white floral wedding stage with candlelit gold stands — premium wedding stage decoration in Kanpur by SD Event & Photography" },
  { img: preWedding04, cat: "Portraits", h: "tall", alt: "Candid bride portrait — wedding photography in Kanpur" },
  { img: homeDecor04, cat: "Events", h: "short", alt: "Event planning and management setup in Kanpur" },
  { img: wedding02, cat: "Weddings", h: "short", alt: "Bride and groom walking through rose petal shower at wedding mandap in Kanpur" },
  { img: preWedding03, cat: "Portraits", h: "tall", alt: "Cinematic wedding portrait by SD Event & Photography, Kanpur" },
  { img: corporate02, cat: "Events", h: "short", alt: "Corporate event photography and planning in Kanpur" },
  { img: corporate01, cat: "Events", h: "tall", alt: "Birthday party decoration and photography in Kanpur" },
  { img: team04, cat: "Décor", h: "short", alt: "Drone aerial wedding coverage in Kanpur" },
  { img: wedding03, cat: "Weddings", h: "tall", alt: "Bride and groom embrace under rose petal shower — Kanpur wedding photography" },
  { img: wedding04, cat: "Weddings", h: "short", alt: "Close-up bridal jewelry and groom portrait — Kanpur wedding photography detail shot" },
  { img: wedding05, cat: "Weddings", h: "short", alt: "Bride and groom hands with mehendi and bangles — Kanpur wedding photography detail" },
  { img: wedding06, cat: "Weddings", h: "short", alt: "Candid moment of bride and groom in floral garlands — Kanpur wedding photography" },
  { img: preWedding01, cat: "Weddings", h: "tall", alt: "Pre-wedding couple photoshoot on a scenic hanging bridge with mountain backdrop — Kanpur pre-wedding photography" },
  { img: preWedding02, cat: "Weddings", h: "short", alt: "Pre-wedding couple photoshoot with decorated horse at scenic outdoor location — Kanpur pre-wedding photography" },
  { img: preWedding03, cat: "Weddings", h: "tall", alt: "Romantic pre-wedding couple moment with decorated horse at golden hour — Kanpur pre-wedding photography" },
  { img: preWedding04, cat: "Weddings", h: "short", alt: "Bridal beauty close-up portrait with traditional jewelry — Kanpur pre-wedding photography" },
  { img: corporate01, cat: "Events", h: "tall", alt: "Corporate award ceremony stage with confetti and trophies — corporate event photography by SD Event & Photography" },
  { img: corporate02, cat: "Events", h: "short", alt: "Corporate business summit stage setup with floral centerpiece — corporate event planning in Kanpur" },
  { img: corporate03, cat: "Events", h: "short", alt: "Corporate gala dinner ballroom with stage lighting — corporate event planning by SD Event & Photography" },
  { img: haldi01, cat: "Haldi", h: "tall", alt: "Yellow floral haldi ceremony backdrop with marigold arch and golden ubtan bowls — Kanpur haldi decoration" },
  { img: haldi02, cat: "Haldi", h: "short", alt: "Yellow drape haldi ceremony canopy with marigold floral arch and pink seating — Kanpur haldi decor by SD Event & Photography" },
  { img: haldi03, cat: "Haldi", h: "tall", alt: "Grand outdoor haldi ceremony canopy with marigold garlands and royal chairs — Kanpur haldi decoration" },
  { img: haldi04, cat: "Haldi", h: "short", alt: "Marigold garland triangle backdrop with sunflowers for haldi ceremony — Kanpur haldi decor" },
  { img: haldi05, cat: "Haldi", h: "short", alt: "Sunflower themed haldi ceremony stage with marigold hangings — Kanpur haldi decoration by SD Event & Photography" },
  { img: mehendi01, cat: "Mehendi", h: "tall", alt: "Green and yellow mehendi ceremony backdrop with floral arch and colourful hangings — Kanpur mehendi decoration" },
  { img: mehendi02, cat: "Mehendi", h: "short", alt: "Elegant floral triangle mehendi backdrop in an outdoor garden setting — Kanpur mehendi decor by SD Event & Photography" },
  { img: mehendi03, cat: "Mehendi", h: "tall", alt: "Colourful Rajasthani umbrella mehendi ceremony backdrop with vibrant drapes — Kanpur mehendi decoration" },
  { img: stageDecor01, cat: "Stage Decor", h: "tall", alt: "Black and gold luxury wedding stage decor with floral arch and chandelier at night — Kanpur stage decoration" },
  { img: stageDecor02, cat: "Stage Decor", h: "short", alt: "Grand golden wedding mandap stage with floral drapes and rose petal aisle — Kanpur stage decoration" },
  { img: stageDecor03, cat: "Stage Decor", h: "tall", alt: "Elegant floral arch wedding stage with golden couple monogram — Kanpur stage decoration by SD Event & Photography" },
  { img: stageDecor04, cat: "Stage Decor", h: "short", alt: "White floral arch wedding stage with golden vintage sofa — Kanpur stage decoration" },
  { img: stageDecor05, cat: "Stage Decor", h: "tall", alt: "Multi-arch floral wedding stage with hanging greenery and chandeliers — Kanpur stage decoration" },
  { img: stageDecor06, cat: "Stage Decor", h: "short", alt: "Pink and white floral wedding stage with candlelit gold stands — Kanpur stage decoration" },
  { img: stageDecor07, cat: "Stage Decor", h: "tall", alt: "Navy blue royal wedding stage with circular floral arch and torch lights — Kanpur stage decoration" },
  { img: homeDecor01, cat: "Home Decor", h: "tall", alt: "Multi-storey house facade decorated with yellow, blue and pink drapes and floral umbrellas — Kanpur home decoration" },
  { img: homeDecor03, cat: "Home Decor", h: "short", alt: "House entrance gate decorated with pink and yellow triangular drapes and marigold garlands — Kanpur home decoration" },
  { img: homeDecor02, cat: "Home Decor", h: "tall", alt: "Blue-tiled house facade with yellow and pink drapes and rose garlands — Kanpur home decoration by SD Event & Photography" },
  { img: homeDecor05, cat: "Home Decor", h: "short", alt: "House balcony decorated with red and white rose garlands and hanging florals — Kanpur home decoration" },
  { img: homeDecor04, cat: "Home Decor", h: "tall", alt: "House rooftop decorated with red, cream and green drapes lit up at night — Kanpur home decoration" },
  { img: team02, cat: "Team & Management", h: "tall", alt: "SD Event & Photography team member at a wedding venue in Kanpur" },
  { img: team01, cat: "Team & Management", h: "short", alt: "Professional photo and video editing workstation with dual cameras — SD Event & Photography post-production setup" },
  { img: team03, cat: "Team & Management", h: "short", alt: "Camera with external flash and editing monitor in the studio — SD Event & Photography equipment" },
  { img: team04, cat: "Team & Management", h: "tall", alt: "Drone operator capturing aerial event coverage — SD Event & Photography drone team" },
] as const;

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const filtered =
    active === "All"
      ? items.filter((item, i) => items.findIndex((it) => it.cat === item.cat) === i)
      : items.filter((i) => i.cat === active);

  // Cap the stagger so large filtered sets never feel sluggish, and
  // shrink the travel distance on mobile for a snappier, less jank-prone entrance.
  const MAX_STAGGER_ITEMS = 8;
  const entranceDistance = prefersReducedMotion ? 0 : isMobile ? 14 : 20;
  const staggerStep = prefersReducedMotion ? 0 : 0.06;

  return (
    <section id="gallery" className="relative bg-beige/40 py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Featured Portfolio</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-6xl">
            Our Recent <span className="italic text-rose-gold">Work</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            From intimate ceremonies to grand celebrations — explore real events shot and styled by
            SD Event &amp; Photography in Kanpur.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-[0.7rem] uppercase tracking-[0.24em] transition-all ${
                active === c
                  ? "bg-warm-brown text-ivory"
                  : "border border-warm-brown/20 text-warm-brown hover:border-rose-gold hover:text-rose-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]"
        >
          {filtered.map((item, i) => (
            <motion.button
              layout
              key={`${item.img}-${i}`}
              onClick={() => setLightbox(item.img)}
              initial={{ opacity: 0, y: entranceDistance, scale: prefersReducedMotion ? 1 : 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: staggerStep * Math.min(i, MAX_STAGGER_ITEMS),
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: "transform, opacity" }}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-warm-brown/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full ${item.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-focus-visible:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/70 via-warm-brown/0 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 px-5 py-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="text-[0.65rem] uppercase tracking-[0.24em] text-ivory">{item.cat}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            View Full Gallery →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-warm-brown/95 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}