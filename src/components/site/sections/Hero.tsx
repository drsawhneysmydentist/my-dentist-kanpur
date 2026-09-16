import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/seo-schema";

type HeroProps = {
  eyebrow?: string;
  headline?: React.ReactNode;
  /** Optional override for the h1 sizing/line-height, merged over the default. */
  headlineClassName?: string;
  subline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageAlt?: string;
};

export function Hero({
  eyebrow = "✦ Wedding Planning · Corporate Events · Birthdays · Photography · Cinematic Videography",
  headline = (
    <>
      Kanpur's Premier Event Planner &amp;
      <span className="mt-2 block italic text-gold-gradient">Photography Studio.</span>
    </>
  ),
  headlineClassName,
  subline = "We Don't Plan Events. We Craft Memories.",
  primaryCta = { label: "Plan Your Event", href: "#contact" },
  secondaryCta = { label: "WhatsApp Us →", href: WHATSAPP_URL },
  imageAlt = "Luxury wedding mandap with cascading florals and champagne light",
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt={imageAlt}
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-overlay-cinema" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.15_0.02_60/0.55)_100%)]" />
      </div>

      {/* Ornamental corners */}
      <Corner className="left-6 top-24 sm:left-10 sm:top-28" />
      <Corner className="right-6 top-24 rotate-90 sm:right-10 sm:top-28" />
      <Corner className="bottom-16 left-6 -rotate-90 sm:left-10" />
      <Corner className="bottom-16 right-6 rotate-180 sm:right-10" />

      <div className="relative z-20 mx-auto max-w-4xl px-6 pt-28 pb-28 text-center sm:px-8 sm:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="eyebrow text-champagne"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight text-ivory",
            headlineClassName,
          )}
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/85 sm:text-lg"
        >
          {subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative z-20 mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row"
        >
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-luxe px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-ivory shadow-luxe transition-transform hover:scale-[1.04]"
          >
            {primaryCta.label}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ivory/50 bg-ivory/5 px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-ivory backdrop-blur-sm transition-colors hover:border-champagne hover:text-champagne"
          >
            {secondaryCta.label}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 sm:bottom-8"
      >
        <span className="eyebrow text-[0.6rem] text-ivory/60">Scroll</span>
        <div className="animate-float-y">
          <ChevronDown size={18} />
        </div>
      </motion.a>
    </section>
  );
}

function Corner({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute z-10 h-12 w-12 ${className ?? ""}`}>
      <div className="absolute left-0 top-0 h-px w-full bg-champagne/50" />
      <div className="absolute left-0 top-0 h-full w-px bg-champagne/50" />
    </div>
  );
}