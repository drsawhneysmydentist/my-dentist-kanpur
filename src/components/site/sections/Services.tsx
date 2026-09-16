import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import wedding from "@/assets/gallery/wedding/wedding-01.webp";
import candid from "@/assets/gallery/haldi/haldi-01.webp";
import cinema from "@/assets/gallery/wedding/wedding-03.webp";
import birthday from "@/assets/gallery/stage-decor/stage-decor-06.webp";
import corporate from "@/assets/gallery/corporate/corporate-01.webp";
import entryConcepts from "@/assets/entry-concepts-stage.png";

const services = [
  {
    title: "Wedding Planning & Photography",
    tag: "Full wedding planning with candid photography, cinematic videography, and album design.",
    img: wedding,
    href: "/weddings",
  },
  {
    title: "Corporate Event Photography",
    tag: "Professional coverage for conferences, launches, and business events.",
    img: corporate,
    href: "/events",
  },
  {
    title: "Birthday Party Planner & Photographer in Kanpur",
    tag: "From First Birthdays to Milestone Celebrations — Planned, Styled & Captured. · Photobooth · Candid Photography · Cake-Cutting Coverage · Same-Day Highlights",
    img: birthday,
  },
  {
    title: "Haldi & Mehndi Photography",
    tag: "Vibrant coverage of every pre-wedding ritual. · Candid photography coverage · Same-day edited highlights",
    img: candid,
  },
  {
    title: "Entry Concepts",
    tag: "Fog Entry · Rose Petal Shower · Mirror Arch · Balloon Rain · Drone Entry · Ganga Aarti Theme",
    img: entryConcepts,
  },
  {
    title: "Cinematic Wedding Films",
    tag: "Storytelling-style edits with drone shots and same-day highlight reels.",
    img: cinema,
  },
];

type ServiceItem = { title: string; tag: string; img: string; href?: string; alt?: string };

type ServicesProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  subtext?: string;
  items?: ServiceItem[];
};

export function Services({
  eyebrow = "Our Services",
  heading = (
    <>
      Six signature ways we bring your celebration{" "}
      <span className="italic text-rose-gold">to life.</span>
    </>
  ),
  subtext = "From full-scale wedding planning to cinematic films — one atelier, every detail, held with couture-level care.",
  items = services,
}: ServicesProps) {
  return (
    <section id="services" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-warm-brown sm:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            {subtext}
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  tag,
  img,
  index,
  href = "#contact",
  alt,
}: {
  title: string;
  tag: string;
  img: string;
  index: number;
  href?: string;
  alt?: string;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block h-[460px] overflow-hidden rounded-2xl bg-warm-brown/10"
    >
      <img
        src={img}
        alt={alt || title}
        width={1200}
        height={1600}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/95 via-warm-brown/40 to-transparent" />

      <div className="absolute right-4 top-4 rounded-full bg-ivory/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-ivory backdrop-blur-md">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne">{tag}</p>
        <h3 className="mt-3 font-display text-3xl font-light text-ivory">{title}</h3>
        <div className="mt-5 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-ivory/90 transition-all group-hover:gap-3 group-hover:text-champagne">
          Explore
          <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.a>
  );
}