import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-periodontics.webp";
import serviceImg2 from "@/assets/service-periodontics-2.webp";

const TITLE = "Gum Treatment Kanpur | Scaling Polishing Kanpur | Periodontics Specialist | My Dentist Kakadeo";
const DESC =
  "Gum treatment and periodontics in Kanpur at My Dentist, Kakadeo. Specialist diagnosis and treatment of gum disease, scaling, polishing, and periodontitis by Dr. Asheesh Sawhny. Most trusted dental clinic serving Naveen Nagar, Pandu Nagar, and Kanpur.";

const SIGNS = [
  "Bleeding gums when brushing, flossing, or eating",
  "Red, swollen, or tender gums",
  "Persistent bad breath (halitosis) that does not resolve with brushing",
  "Gums that appear to be pulling away from teeth",
  "Teeth that look longer than they used to",
  "Loose or shifting teeth",
  "Gaps developing between teeth",
  "Pus between teeth and gums",
];

const STAGES = [
  { title: "Gingivitis", desc: "The earliest stage. Gums are inflamed and may bleed but no bone loss has occurred — fully reversible with professional cleaning and improved home care." },
  { title: "Early Periodontitis", desc: "Infection has begun to affect the bone supporting teeth. Pockets form between teeth and gums — reversible with timely treatment." },
  { title: "Moderate to Advanced Periodontitis", desc: "Significant bone loss, deep pockets, and potential tooth mobility. Requires more intensive treatment; tooth loss risk is real at this stage." },
];

const SERVICES = [
  { title: "Scaling and Root Planing", desc: "The primary non-surgical treatment — tartar, bacteria and infected tissue removed above and below the gum line, under local anaesthesia." },
  { title: "Subgingival Debridement", desc: "Thorough cleaning of deep periodontal pockets where standard scaling cannot reach — essential for moderate to advanced disease." },
  { title: "Supportive Periodontal Therapy", desc: "Regular maintenance appointments, typically every three to four months, maintain stability and prevent recurrence." },
  { title: "Gummy Smile Correction", desc: "Excess gum tissue covering teeth can be conservatively reduced to improve the proportion of your smile." },
];

const BENEFITS = [
  "Stops progressive bone and tooth loss",
  "Eliminates bleeding, swelling, and gum discomfort",
  "Resolves persistent bad breath caused by periodontal infection",
  "Protects the longevity of existing restorations and implants",
  "Reduces systemic health risks — linked to cardiovascular disease and diabetes",
  "Creates a stable foundation for any future dental treatment",
];

const PROCESS = [
  { title: "Periodontal assessment", desc: "Pocket depths, gum recession and bone levels are measured. A clear diagnosis is explained before treatment begins." },
  { title: "Scaling & root planing", desc: "Deep cleaning performed in sections under local anaesthesia — typically two to four appointments depending on severity." },
  { title: "Review & re-assessment", desc: "Six to eight weeks after treatment, gum health is re-evaluated and pocket depths re-measured." },
  { title: "Maintenance", desc: "A personalised schedule, usually three to four monthly visits, to maintain stability long-term." },
];

const FAQS = [
  { q: "Is bleeding from gums normal?", a: "No. Healthy gums do not bleed with normal brushing or flossing — it is the earliest sign of gum inflammation." },
  { q: "Can gum disease be cured?", a: "Gingivitis is fully reversible. Periodontitis cannot be fully reversed once bone is lost, but it can be arrested and stabilised." },
  { q: "Does gum treatment hurt?", a: "Scaling and root planing is performed under local anaesthesia. Mild post-treatment soreness resolves within a few days." },
  { q: "How long does gum treatment take?", a: "Moderate periodontitis typically requires two to four appointments over four to six weeks, followed by a review." },
  { q: "Can gum disease affect my overall health?", a: "Yes. It is linked to cardiovascular disease, poorly controlled diabetes, respiratory conditions and adverse pregnancy outcomes." },
  { q: "Can I get dental implants if I have gum disease?", a: "Not until the gum disease is treated and stabilised — active infection is a contraindication to implant placement." },
  { q: "How can I prevent gum disease?", a: "Twice-daily brushing, daily interdental cleaning, a low-sugar diet, not smoking, and six-monthly professional check-ups." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Periodontal Treatment",
  description: DESC,
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Gums, Mouth",
  provider: {
    "@type": "Dentist",
    name: "MY DENTIST",
    address: {
      "@type": "PostalAddress",
      streetAddress: "117/L-1/455-A, Naveen Nagar, Kakadeo",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208025",
      addressCountry: "IN",
    },
  },
};

export const Route = createFileRoute("/gum-treatment-periodontics-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "gum treatment Kanpur, periodontics Kanpur, gum disease Kanpur, bleeding gums Kanpur, periodontist Kakadeo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/gum-treatment-periodontics-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/gum-treatment-periodontics-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: GumTreatmentPage,
});

function GumTreatmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Periodontics · Kakadeo, Kanpur"
        title={<>Gum Treatment in Kanpur — <span className="italic text-aqua-deep">specialist periodontal care.</span></>}
        intro="Gum health assessed at every check-up at MY DENTIST, Kakadeo, with the same clinical rigour applied to teeth themselves."
      />

      {/* What is periodontics */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">periodontics?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Periodontics is the dental specialty focused on the health of the gums, bone and supporting structures that hold your teeth in place. Gum disease is the leading cause of tooth loss in adults worldwide, and the most frequently underdiagnosed dental condition.`} /></p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny's endodontic and restorative background gives him a comprehensive understanding of how gum and bone health affects the longevity of every other dental treatment — from fillings to implants.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Signs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning Signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Signs and symptoms of <span className="italic text-aqua-deep">gum disease.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNS.map((s) => (
              <motion.div key={s} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stages + image */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="Periodontal gum treatment at MY DENTIST Kanpur"
                className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1280}
                height={853}
                style={{ imageRendering: "auto" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Stages
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Stages of <span className="italic text-aqua-deep">gum disease.</span>
            </h2>
            <div className="mt-6 space-y-5">
              {STAGES.map((s) => (
                <div key={s.title}>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={s.desc} /></p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Services
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Gum treatment services at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => {
              const featured = s.title === "Subgingival Debridement";
              return (
                <motion.div
                  key={s.title}
                  variants={item}
                  className={
                    featured
                      ? "relative rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-7 shadow-soft ring-1 ring-aqua/20"
                      : "rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
                  }
                >
                  {featured && (
                    <div className="pill absolute -top-3 right-6 border border-aqua-deep/20 bg-aqua-deep text-white">
                      <Star className="h-3 w-3 fill-white" /> Advanced
                    </div>
                  )}
                  <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={s.desc} /></p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Benefits
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Benefits of treating <span className="italic text-aqua-deep">gum disease.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <motion.div key={b} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                <p className="text-sm leading-relaxed text-muted-foreground">{b}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Process
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              The gum treatment process at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <motion.div key={p.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={p.desc} /></p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Credential strip */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                <span className="italic text-aqua">Implant-aware</span> gum care.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                Digital RVG X-rays for precise bone level assessment, and honest, non-alarmist communication — at every periodontal review.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {SITE.reasons.map((r) => (
                  <span key={r} className="rounded-full border border-white/15 px-5 py-2.5 text-sm">{r}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meet specialist */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft">
              <div>
                <h3 className="font-display text-2xl">Meet your gum care specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny (BDS, MDS) leads periodontal care at MY DENTIST, Kanpur.`} /></p>
              </div>
              <div className="flex gap-3">
                <Link to="/dr-asheesh-sawhny" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
                  View profile <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium">
                  All doctors <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="text-muted-foreground">Related services:</span>
              <Link to="/dental-implants-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Dental Implants</Link>
              <Link to="/preventive-dentistry-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Preventive Dentistry</Link>
              <Link to="/services" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">All Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Before & After – Gum Treatment */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-bone shadow-luxe">
              <img
                src={serviceImg2}
                alt="Gum treatment before and after results at MY DENTIST Kakadeo Kanpur"
                className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-contain object-center"
                loading="lazy"
                decoding="async"
                width={1280}
                height={640}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Before & After
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Visible gum health <span className="italic text-aqua-deep">restored.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> FAQ
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Gum Treatment <span className="italic text-aqua-deep">FAQs.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4">
            {FAQS.map((f) => (
              <motion.details key={f.q} variants={item} className="group rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl leading-snug marker:hidden">
                  {f.q}
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-foreground/40 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={f.a} /></p>
              </motion.details>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              Book your gum health assessment at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Early diagnosis preserves more bone and more teeth — the sooner you start, the better the outcome.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Gum Health Assessment →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
