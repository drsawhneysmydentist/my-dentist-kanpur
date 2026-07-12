import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, XCircle, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-teeth-whitening.webp";
import serviceImg2 from "@/assets/service-teeth-whitening-2.webp";

const TITLE = "Teeth Whitening in Kanpur | Professional Smile Whitening | Cosmetic Dentist Kanpur | My Dentist Kakadeo";
const DESC =
  "Professional teeth whitening in Kanpur at My Dentist, Kakadeo. Clinically supervised, customised whitening by Dr. Asheesh K. Sawhny — cosmetic dentist Kanpur. Safe, effective and long-lasting results for a brighter smile.";

const REASONS = [
  "Yellowing of teeth from age, tea, coffee, or cola",
  "Tobacco staining",
  "General dullness or discolouration of natural teeth",
  "Pre-event brightening — weddings, photography, job interviews",
  "As a starting point within a broader smile makeover",
];

const BENEFITS = [
  "Faster, more consistent results than over-the-counter products",
  "Customised to your enamel type and shade goal",
  "Clinically safe — assessed and supervised by a dentist",
  "Minimal sensitivity when managed correctly",
  "Immediate confidence boost with a noticeably brighter smile",
  "Can be combined with veneers, bonding, or a full smile makeover",
];

const PROCESS = [
  { title: "Suitability assessment", desc: "Teeth and gums are examined. Active cavities, gum issues or sensitivity concerns are identified and addressed first." },
  { title: "Shade assessment", desc: "Your current tooth shade is recorded as a baseline to measure the whitening outcome against." },
  { title: "Whitening procedure", desc: "A professional Philips Zoom whitening system or custom take-home trays are used under controlled conditions, as suited to your case." },
  { title: "Post-whitening guidance", desc: "Specific instructions on foods, drinks and habits to protect and maintain your results." },
];

const NOT_CANDIDATES = [
  "Patients with active tooth decay or untreated gum disease",
  "Patients with severe enamel erosion or exposed dentine",
  "Pregnant or breastfeeding patients",
  "Patients whose front teeth have extensive crowns, veneers, or composite restorations",
  "Children under 16",
];

const FAQS = [
  { q: "How many shades lighter will my teeth get?", a: "Results vary by original shade and stain type. Most patients achieve a noticeable improvement, with a realistic expectation set at consultation." },
  { q: "Is teeth whitening safe?", a: "Yes, when performed or supervised by a dentist. Unsupervised use of strong whitening products carries greater risk." },
  { q: "How long do whitening results last?", a: "With reasonable dietary care, results can last 1–2 years. Top-up whitening is simple and cost-effective when needed." },
  { q: "Will whitening work on my crowns or veneers?", a: "No. Whitening agents work only on natural tooth enamel — existing restorations remain at their current shade." },
  { q: "Does whitening cause sensitivity?", a: "Some temporary sensitivity is common and resolves within 24–48 hours. Supervised whitening significantly reduces this risk." },
  { q: "What is the cost of teeth whitening in Kanpur?", a: "Costs depend on the protocol selected. Consultation fee is ₹500 for a personalised assessment and clear pricing." },
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
  name: "Teeth Whitening",
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

export const Route = createFileRoute("/teeth-whitening-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "teeth whitening Kanpur, dental whitening Kakadeo, professional teeth whitening Kanpur, MY DENTIST" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/teeth-whitening-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/teeth-whitening-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: TeethWhiteningPage,
});

function TeethWhiteningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Teeth Whitening · Kakadeo, Kanpur"
        title={<>Teeth Whitening in Kanpur — <span className="italic text-aqua-deep">clinically supervised, safe results.</span></>}
        intro="Professional whitening at MY DENTIST, Kakadeo — including the premium Philips Zoom system — prescription-strength, customised to your teeth, under the direct supervision of Dr. Asheesh K. Sawhny."
      />

      {/* What is professional whitening */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is professional <span className="italic text-aqua-deep">teeth whitening?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Professional teeth whitening is a clinically supervised procedure that lightens tooth colour by safely removing stains and discolouration from the enamel and dentine. Unlike over-the-counter strips or kits, it uses prescription-strength agents, customised to your teeth.`} /></p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The result is consistent, controlled lightening — without the sensitivity spikes or uneven patches that self-administered products frequently cause.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why different + image */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="Professional teeth whitening at MY DENTIST Kanpur"
                className="aspect-[1400/934] w-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1400}
                height={934}
                style={{ imageRendering: "auto" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Why It's Different
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Why professional whitening is <span className="italic text-aqua-deep">different.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`At MY DENTIST, whitening is not a retail transaction. Dr. Sawhny assesses enamel health, existing restorations, sensitivity and staining type first — then customises the protocol accordingly.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* When to consider */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Is It Right For You?
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              When should you consider <span className="italic text-aqua-deep">teeth whitening?</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <motion.div key={r} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                <p className="text-sm leading-relaxed text-muted-foreground">{r}</p>
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
              Benefits of professional <span className="italic text-aqua-deep">whitening.</span>
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
              The whitening process at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const featured = p.title === "Whitening procedure";
              return (
                <motion.div
                  key={p.title}
                  variants={item}
                  className={
                    featured
                      ? "relative rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-7 shadow-soft ring-1 ring-aqua/20"
                      : "rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
                  }
                >
                  {featured && (
                    <div className="pill absolute -top-3 right-6 border border-aqua-deep/20 bg-aqua-deep text-white">
                      <Star className="h-3 w-3 fill-white" /> Premium
                    </div>
                  )}
                  <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={p.desc} /></p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Not a candidate */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Honest Guidance
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Who is <span className="italic text-aqua-deep">not</span> a good candidate?
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NOT_CANDIDATES.map((n) => (
              <motion.div key={n} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground/40" />
                <p className="text-sm leading-relaxed text-muted-foreground">{n}</p>
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
                <span className="italic text-aqua">Clinically supervised,</span> not a retail transaction.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                No whitening proceeds at MY DENTIST without a dental examination first — honest guidance, every time.
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
                <h3 className="font-display text-2xl">Meet your whitening specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh K. Sawhny (BDS, MDS) supervises whitening care at MY DENTIST, Kanpur.`} /></p>
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
              <Link to="/smile-makeover-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Smile Makeover</Link>
              <Link to="/cosmetic-dentistry" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Cosmetic Dentistry</Link>
              <Link to="/services" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">All Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Before & After supporting image */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-bone shadow-luxe">
              <img
                src={serviceImg2}
                alt="Teeth whitening before and after results at MY DENTIST Kakadeo Kanpur"
                className="aspect-[1280/1000] w-full object-contain object-center"
                loading="lazy"
                decoding="async"
                width={1280}
                height={1000}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Before & After
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Real results, <span className="italic text-aqua-deep">real patients.</span>
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
              Teeth Whitening <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your whitening consultation at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Safe, customised, clinically supervised whitening — with honest guidance every step of the way.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Whitening Consultation →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
