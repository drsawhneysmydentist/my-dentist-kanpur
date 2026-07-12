import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-preventive.webp";
import serviceImg2 from "@/assets/service-preventive-2.webp";

const TITLE = "Preventive Dentistry Kanpur | Scaling Polishing Kanpur | Dental Check-up | My Dentist Kakadeo";
const DESC =
  "Preventive dentistry in Kanpur at My Dentist, Kakadeo. Professional dental check-ups, scaling, polishing, fluoride treatment and oral health assessments by MDS specialists. Affordable dental clinic Kanpur — serving Pandu Nagar, Naveen Nagar, Sharda Nagar and all of Kanpur.";

const SIGNS = [
  "It has been more than six months since your last dental visit",
  "Bleeding gums when brushing or eating",
  "Persistent bad breath that does not resolve with brushing",
  "Sensitivity to hot, cold, or sweet foods",
  "A tooth that feels rough, chipped, or different when you bite",
  "Visible discolouration or dark spots on teeth",
  "Gum recession or teeth appearing longer than before",
];

const SERVICES = [
  { title: "Comprehensive Dental Examination", desc: "A full clinical assessment of teeth, gums, bite, jaw joints and soft tissues — existing restorations evaluated, early decay checked." },
  { title: "Professional Scaling and Cleaning", desc: "Removes plaque and tartar from areas brushing cannot reach — the primary cause of gum disease if left untreated." },
  { title: "Oral Hygiene Instruction", desc: "Personalised guidance on brushing technique, flossing, diet and home care products suited to your oral condition." },
  { title: "Fluoride Treatment", desc: "Professionally applied fluoride varnish that remineralises enamel and significantly reduces cavity risk." },
  { title: "Fissure Sealants", desc: "A thin protective coating applied to deep grooves of back teeth where decay most commonly begins." },
  { title: "Oral Cancer Screening", desc: "A systematic examination of soft tissues, tongue, floor of mouth and throat — included in every comprehensive check-up." },
  { title: "Dental X-rays (RVG)", desc: "Digital radiographs taken when clinically indicated to detect decay and bone conditions not visible clinically." },
];

const BENEFITS = [
  "Early detection of cavities, gum disease, and oral lesions — when treatment is simplest",
  "Avoidance of complex, costly procedures through timely intervention",
  "Fresher breath and visibly cleaner teeth",
  "Maintained gum health and reduced bone loss risk",
  "Reduced overall lifetime dental expenditure",
  "Confidence in the ongoing health of your mouth",
];

const PROCESS = [
  { title: "Clinical examination", desc: "Teeth, gums, bite and soft tissues are thoroughly examined. X-rays are taken where clinically indicated." },
  { title: "Professional cleaning", desc: "Scaling removes deposits; polishing removes surface stains — comfortable, usually a single appointment." },
  { title: "Personalised oral health plan", desc: "Specific home care guidance and a recommended recall interval, usually six months." },
  { title: "Recall appointments", desc: "Six-monthly check-ups maintain your health baseline and catch new developments early." },
];

const FAQS = [
  { q: "How often should I visit the dentist for a check-up?", a: "Every six months is standard for most adults. Active gum disease or high cavity risk may need more frequent visits." },
  { q: "Does professional cleaning hurt?", a: "Most patients find scaling comfortable. Sensitive gums may feel mild discomfort, resolving shortly after." },
  { q: "Can preventive dentistry save me money?", a: "Significantly. An early cavity needs a simple filling; left untreated it may need a root canal, crown, or extraction." },
  { q: "My teeth look fine — do I still need a check-up?", a: "Yes. Most serious conditions are invisible until advanced. A clinical examination detects what a mirror cannot." },
  { q: "Is fluoride treatment safe for adults?", a: "Yes. Professionally applied fluoride at clinical doses is safe and effective for adults and children alike." },
  { q: "What happens during an oral cancer screening?", a: "Lips, cheeks, tongue, floor of mouth, palate and throat are examined for unusual patches or lesions — quick and painless." },
  { q: "How long does a preventive check-up take?", a: "A comprehensive exam with cleaning typically takes 45–60 minutes at My Dentist." },
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
  name: "Preventive Dentistry",
  description: DESC,
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Mouth, Teeth, Gums",
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

export const Route = createFileRoute("/preventive-dentistry-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "preventive dentistry Kanpur, dental check-up Kanpur, teeth cleaning Kanpur, dental clinic Kakadeo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/preventive-dentistry-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/preventive-dentistry-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: PreventiveDentistryPage,
});

function PreventiveDentistryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Preventive Dentistry · Kakadeo, Kanpur"
        title={<>Preventive Dentistry in Kanpur — <span className="italic text-aqua-deep">stop problems before they start.</span></>}
        intro="Structured preventive care at MY DENTIST, Kakadeo, led by MDS-qualified specialists who assess your oral health comprehensively at every visit."
      />

      {/* What is preventive dentistry */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">preventive dentistry?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Preventive dentistry is the foundation of lifelong oral health — maintaining teeth, gums and supporting structures in optimal condition through regular professional care, before decay or damage has a chance to develop.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`At MY DENTIST, preventive care is not a formality. It is a structured clinical process led by MDS-qualified specialists — patients who attend regular check-ups consistently require less complex, less costly treatment over time.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Signs overdue */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning Signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Signs you are overdue for a <span className="italic text-aqua-deep">check-up.</span>
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

      {/* Image + intro to services */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="Preventive dental check-up at MY DENTIST Kanpur"
                className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover object-center"
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
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Specialist-Led
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Examined by a <span className="italic text-aqua-deep">specialist,</span> not a junior associate.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny evaluates existing restorations, checks for early decay, and identifies developing concerns before they progress.`} /></p>
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
              Preventive services at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={s.desc} /></p>
              </motion.div>
            ))}
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
              Benefits of regular <span className="italic text-aqua-deep">preventive care.</span>
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

      {/* Supporting image – preventive care in practice */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg2}
                alt="Dental model held by dentist demonstrating teeth structure at MY DENTIST Kakadeo Kanpur"
                className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={750}
                height={500}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Why it matters
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Prevention is the <span className="italic text-aqua-deep">smartest investment</span> in your smile.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Most serious dental conditions — decay, gum disease, enamel loss — develop silently over months or years. A structured preventive programme at MY DENTIST catches these early, saving you time, discomfort, and cost down the line.
            </p>
          </Reveal>
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
              The preventive care process at <span className="italic text-aqua-deep">MY DENTIST.</span>
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
                Prevention is always the <span className="italic text-aqua">more economical path.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                Digital RVG X-rays, comprehensive oral cancer screening, and unhurried, personalised home care guidance — every check-up, every time.
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
                <h3 className="font-display text-2xl">Meet your preventive care specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny (BDS, MDS) leads preventive care at MY DENTIST, Kanpur.`} /></p>
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
              <Link to="/gum-treatment-periodontics-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Gum Treatment</Link>
              <Link to="/paediatric-dentist-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Children's Preventive Care</Link>
              <Link to="/services" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">All Services</Link>
            </div>
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
              Preventive Dentistry <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your dental check-up at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Specialist examination, honest guidance, and a plan to protect your smile for life.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Dental Check-up →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
