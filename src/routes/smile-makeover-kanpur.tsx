import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-smile-makeover.webp";
import serviceImg2 from "@/assets/service-smile-makeover-2.webp";

const TITLE = "Smile Makeover in Kanpur | Smile Design | Cosmetic Dentist Kanpur | My Dentist Kakadeo";
const DESC =
  "Smile makeover and smile design in Kanpur by Dr. Asheesh K. Sawhny — specialist cosmetic dentist Kanpur. Veneers, composite bonding, dental crowns, and zirconia crowns at My Dentist, Kakadeo. Trusted by 226+ patients across Kanpur.";

const SIGNS = [
  "Stained or discoloured teeth that whitening alone cannot correct",
  "Chipped, cracked, or worn tooth edges",
  "Uneven tooth shape or size",
  "Gaps between front teeth",
  "Gummy smile or uneven gum line",
  "A smile that looks aged, asymmetric, or not in proportion with your face",
];

const PROCEDURES = [
  { title: "Smile Design", desc: "Your ideal outcome is planned using clinical assessment and photographs — you understand the result before treatment starts." },
  { title: "Porcelain Veneers", desc: "Ultra-thin ceramic shells bonded to teeth to correct colour, shape, size and minor alignment. Durable and stain-resistant." },
  { title: "Composite Veneers", desc: "A conservative, reversible alternative completed in a single visit, with minimal or no tooth reduction." },
  { title: "Dental Bonding", desc: "Reshapes chipped, cracked, or gapped teeth with composite resin — quick and preserves natural tooth structure." },
  { title: "Crowns and Bridges", desc: "Full-coverage restorations for damaged teeth or to replace missing teeth within a broader smile design." },
  { title: "Teeth Whitening", desc: "Integrated where appropriate to establish the correct shade baseline before other restorations are fabricated." },
];

const BENEFITS = [
  "A smile you are confident showing — in photographs, at work, in social settings",
  "Coordinated treatment plan rather than piecemeal procedures done at different times",
  "Functional improvement alongside aesthetic change",
  "Natural-looking, proportionate results planned to suit your face",
  "Long-lasting with proper care and maintenance",
];

const PROCESS = [
  { title: "Smile consultation", desc: "Concerns, teeth, gums and bite are reviewed with clinical photographs. Realistic outcome options are discussed." },
  { title: "Dental health baseline", desc: "Underlying issues — decay, gum problems, bite concerns — are addressed before cosmetic work begins." },
  { title: "Treatment", desc: "Procedures follow a logical sequence — whitening first, restorations matched and placed with precision." },
  { title: "Review", desc: "The completed result is reviewed, with guidance on maintenance and cleaning protocols." },
];

const FAQS = [
  { q: "How many appointments does a smile makeover take?", a: "Simple cases — bonding or composite veneers — may need 1–2 visits. Full smile designs typically require 3–5 appointments." },
  { q: "Are veneers permanent?", a: "Porcelain veneers require minor enamel preparation, making them a permanent commitment. Composite veneers are more conservative and reversible." },
  { q: "Will the results look natural?", a: "Yes, when properly planned. Restorations are designed to complement your facial features, skin tone and lip line." },
  { q: "How long do smile makeover results last?", a: "Porcelain veneers and crowns typically last 10–15 years. Composite veneers and bonding may need touch-ups every 5–7 years." },
  { q: "Can I get a smile makeover if I have crooked teeth?", a: "In some cases veneers and bonding can mask minor irregularities; in others, orthodontic treatment first gives the best result." },
  { q: "What does a smile makeover cost in Kanpur?", a: "Cost depends entirely on procedures selected. Consultation fee is ₹500 for a clear, itemised treatment plan." },
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
  name: "Smile Makeover",
  description: DESC,
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Mouth, Teeth",
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

export const Route = createFileRoute("/smile-makeover-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "smile makeover Kanpur, cosmetic dentist Kanpur, smile design Kanpur, veneers Kanpur, MY DENTIST" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/smile-makeover-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/smile-makeover-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: SmileMakeoverPage,
});

function SmileMakeoverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Smile Makeover · Kakadeo, Kanpur"
        title={<>Smile Makeover in Kanpur — <span className="italic text-aqua-deep">designed by a specialist.</span></>}
        intro="A coordinated cosmetic and restorative plan at MY DENTIST, Kakadeo, led by Dr. Asheesh K. Sawhny — appearance and function improved together, never at each other's expense."
      />

      {/* What is a smile makeover */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is a <span className="italic text-aqua-deep">smile makeover?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A smile makeover is a carefully planned combination of cosmetic and restorative procedures designed to improve the overall appearance of your smile — addressing colour, shape, size, spacing and symmetry, individually or together.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`At MY DENTIST, a smile makeover is not an impulsive cosmetic procedure. Dr. Asheesh K. Sawhny brings endodontic and restorative precision to every cosmetic case.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Signs */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Smile makeover consultation at MY DENTIST Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Is It Right For You?
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              When should you consider a <span className="italic text-aqua-deep">smile makeover?</span>
            </h2>
            <ul className="mt-6 grid gap-3">
              {SIGNS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua-deep" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Procedures */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Procedures
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Smile makeover procedures at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCEDURES.map((p, i) => (
              <motion.div key={p.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={p.desc} /></p>
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
              Benefits of a <span className="italic text-aqua-deep">smile makeover.</span>
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

      {/* Real results */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Smile makeover before and after results at MY DENTIST Kanpur" className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover object-center" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Real Results
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              A real smile makeover, at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
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
              The smile makeover process at <span className="italic text-aqua-deep">MY DENTIST.</span>
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
                Aesthetic decisions grounded in <span className="italic text-aqua">functional dental science.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                <span className="font-bold text-white">21+ years</span> of clinical experience and an <span className="font-bold text-white">MDS in Conservative Dentistry &amp; Endodontics</span> — every cosmetic case is built on a sound functional foundation, never oversold.
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
                <h3 className="font-display text-2xl">Meet your cosmetic specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh K. Sawhny (BDS, MDS) leads smile design at MY DENTIST, Kanpur.`} /></p>
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
              <Link to="/teeth-whitening-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Teeth Whitening</Link>
              <Link to="/cosmetic-dentistry" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Cosmetic Dentistry</Link>
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
              Smile Makeover <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your smile consultation at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A coordinated plan, honest guidance, and a smile designed to suit your face.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Smile Consultation →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
