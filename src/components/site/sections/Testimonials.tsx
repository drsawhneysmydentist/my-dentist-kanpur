import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";

const items = [
  {
    quote:
      "SD turned our wedding into a film. Every detail — from the mandap petals to the last frame of the highlight reel — felt held with love.",
    name: "Aarav & Isha",
    place: "Kanpur, 2025",
  },
  {
    quote:
      "Twelve years of asking for luxury and we finally found it. The team is calm, the eye is exquisite, the film made our parents cry.",
    name: "Rhea & Kabir",
    place: "Lucknow, 2025",
  },
  {
    quote:
      "They planned a three-day celebration for 600 guests and it felt like an intimate dinner party. That's the magic.",
    name: "The Malhotra Family",
    place: "Delhi, 2024",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section id="about" className="relative bg-beige/40 py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow>What Our Clients Say</Eyebrow>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Trusted by 270+ couples and businesses across Kanpur for weddings, corporate events,
            and birthdays.
          </p>
          <p className="mt-4 text-sm font-light tracking-wide text-rose-gold">
            ⭐⭐⭐⭐⭐ 4.9 on Google | 150+ Reviews
          </p>
          <Quote className="mx-auto mt-8 text-rose-gold/50" size={40} />
        </Reveal>

        <div className="relative mt-8 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl font-light leading-[1.35] text-warm-brown sm:text-4xl"
            >
              "{t.quote}"
              <footer className="mt-10">
                <div className="eyebrow text-rose-gold">{t.name}</div>
                <div className="mt-1 text-sm font-light text-muted-foreground">{t.place}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous"
            className="grid h-12 w-12 place-items-center rounded-full border border-warm-brown/20 text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-rose-gold" : "w-1.5 bg-warm-brown/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="grid h-12 w-12 place-items-center rounded-full border border-warm-brown/20 text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-12">
          <a
            href="https://www.google.com/search?q=SD+Event+%26+Photography+Kanpur+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            Read All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}