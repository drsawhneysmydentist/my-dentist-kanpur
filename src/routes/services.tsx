import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import g1 from "@/assets/service-implants.webp";
import g5 from "@/assets/service-teeth-whitening.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Dental Treatments in Kanpur · My Dentist" },
      {
        name: "description",
        content:
          "Implants, root canal, smile makeovers, braces, whitening, paediatric, gum care and full mouth rehabilitation at Dr Sawhney's My Dentist, Kakadeo.",
      },
      { property: "og:title", content: "Dental Services in Kanpur · My Dentist" },
      { property: "og:url", content: `${SITE.url}/services` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments & specialties"
        title={
          <>
            A complete spectrum of <span className="italic text-aqua-deep">premium dental care.</span>
          </>
        }
        intro="From routine hygiene to full mouth rehabilitation — every treatment is delivered with international protocols, modern equipment and a measured, calm pace."
      />

      <nav
        aria-label="Jump to treatment"
        className="px-6"
      >
        <div className="mx-auto max-w-7xl -mt-6 mb-10 flex gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SITE.services.map((s) => (
            <a
              key={s.title}
              href={`#${slugify(s.title)}`}
              className="pill shrink-0 border border-foreground/10 bg-white text-foreground/70 normal-case tracking-normal hover:border-aqua-deep hover:text-aqua-deep transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="px-6 pb-24">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.services.map((s, i) => {
            const slug = "slug" in s ? s.slug : undefined;
            const card = (
              <>
                <div className="flex items-start justify-between">
                  <span className="font-display text-2xl text-aqua-deep tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-foreground/40 opacity-60 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-100 group-hover:text-aqua-deep" />
                </div>
                <h3 className="mt-12 font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-aqua-deep">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </>
            );
            const cardEl = slug ? (
              <Link to={slug} id={s.title === "Orthodontics" ? "invisalign-provider" : undefined} className="block h-full cursor-pointer active:scale-[0.99]">
                <motion.article
                  variants={item}
                  whileHover={{ backgroundColor: "var(--color-bone)", y: -4, boxShadow: "0 12px 32px -12px rgba(0,0,0,0.14)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex h-full flex-col border border-transparent bg-background p-8 transition-[border-color] duration-300 hover:border-aqua-deep/25 md:p-10"
                >
                  {card}
                </motion.article>
              </Link>
            ) : (
              <motion.article
                variants={item}
                whileHover={{ backgroundColor: "var(--color-bone)" }}
                className="group relative flex flex-col bg-background p-8 md:p-10"
              >
                {card}
              </motion.article>
            );
            return (
              <div key={s.title} id={slugify(s.title)} className="contents">
                {cardEl}
              </div>
            );
          })}
        </Stagger>
      </section>

      {/* feature service split */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={g1} alt="Dental implant procedure close-up" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Signature
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              Dental Implants — <span className="italic text-aqua-deep">permanent, natural, refined.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Replace missing teeth with implants that look, feel and function
              like your own. We use globally trusted implant systems with full
              digital planning for a lifetime of confident smiles.
            </p>
            <ul className="mt-8 grid gap-3 text-sm md:grid-cols-2">
              {[
                "3D guided implant planning",
                "Single tooth · full arch · all-on-4",
                "Bone grafting, pterygoid & zygomatic implants for complex cases",
                "Same-day temporaries available",
              ].map((p) => (
                <li key={p} className="rounded-2xl border border-foreground/8 bg-card p-4">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MagneticButton to="/contact" hash="consultation-form">Plan a consultation →</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Cosmetic
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              Smile makeovers crafted in <span className="italic text-aqua-deep">millimetres.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Ceramic veneers, CEREC crowns, ZOOM tooth whitening and smile
              design — a bespoke combination tailored to your face, your
              story, and your smile line.
            </p>
            <Stagger className="mt-8 grid gap-3 md:grid-cols-2">
              {SITE.reasons.slice(0, 4).map((r) => (
                <motion.div key={r} variants={item} className="rounded-2xl border border-foreground/8 bg-card p-5">
                  <div className="font-display text-lg leading-snug">{r}</div>
                </motion.div>
              ))}
            </Stagger>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={g5} alt="Cosmetic teeth whitening close-up" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

