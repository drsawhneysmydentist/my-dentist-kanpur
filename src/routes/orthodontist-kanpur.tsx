import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-orthodontics.webp";
import serviceImg2 from "@/assets/service-orthodontics-2.webp";

const TITLE = "Orthodontist in Kanpur | Braces & Clear Aligners | Best Braces Kanpur | Dr. Karuna Singh Sawhny | My Dentist";
const DESC =
  "Best orthodontist in Kanpur — Dr. Karuna Singh Sawhny, MDS Orthodontics, IOS Member. Metal braces, ceramic braces and clear aligners at My Dentist, Kakadeo, Kanpur. Know the cost of braces in Kanpur — book a ₹300 consultation.";

const SIGNS = [
  "Crowded, overlapping, or crooked teeth",
  "Gaps between teeth",
  "An overbite, underbite, crossbite, or open bite",
  "Difficulty chewing or biting properly",
  "Mouth breathing or speech concerns related to jaw alignment",
  "Early or late loss of milk teeth",
  "Protruding front teeth",
];

const OPTIONS = [
  { title: "Traditional Metal Braces", desc: "The most effective and economical option for a wide range of cases. Modern braces are smaller, more comfortable and faster than earlier generations." },
  { title: "Ceramic Braces", desc: "Tooth-coloured brackets that blend with your natural teeth — a discreet option without compromising clinical effectiveness." },
  { title: "Self-Ligating Braces", desc: "Braces with a built-in clip mechanism instead of elastic ties — reduced friction, often fewer adjustment visits, and added comfort." },
  { title: "Clear / Invisible Aligners", desc: "Custom-fitted, removable transparent aligners, including Invisalign, that progressively move teeth. No dietary restrictions, virtually invisible." },
  { title: "Dentofacial Orthopaedics", desc: "For growing children — guides jaw development early, reducing future treatment complexity and often avoiding extractions." },
];

const BENEFITS = [
  "Straighter teeth that are easier to clean and maintain",
  "Corrected bite reduces wear, jaw strain, and long-term joint problems",
  "Improved chewing efficiency and speech",
  "Reduced risk of cavities and gum disease from crowded teeth",
  "Enhanced facial balance and profile",
  "Long-lasting confidence in your smile",
];

const PROCESS = [
  { title: "Comprehensive assessment", desc: "Teeth, jaw, bite and facial structure are evaluated. Photographs, X-rays and study models are taken where required." },
  { title: "Treatment", desc: "Braces are placed or aligners issued. Progress is monitored at regular appointments with adjustments as treatment advances." },
  { title: "Retention", desc: "Once teeth reach final position, a retainer is prescribed — a non-negotiable step that prevents relapse." },
];

const FAQS = [
  { q: "How long does orthodontic treatment take?", a: "Straightforward cases typically complete in 12–18 months. Complex bite and jaw corrections may take longer." },
  { q: "At what age can my child get braces?", a: "Most children are ready between ages 10–14. An orthodontic screening at age 7 can identify issues for earlier intervention." },
  { q: "Are clear aligners as effective as metal braces?", a: "For mild to moderate cases, yes. For complex bite corrections, braces may be more appropriate." },
  { q: "Can adults get orthodontic treatment?", a: "Absolutely. Adults frequently choose ceramic braces or clear aligners for a discreet experience." },
  { q: "Will braces affect eating or speaking?", a: "An adjustment period of 1–2 weeks is normal. Most patients adapt quickly." },
  { q: "Is orthodontic treatment painful?", a: "Mild soreness after adjustments is normal and resolves within 1–2 days — the sensation of teeth moving." },
  { q: "What is the cost of braces in Kanpur?", a: "Costs vary by braces type and duration. Consultation fee is ₹300 for a personalised, transparent quote." },
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
  name: "Orthodontic Treatment",
  description: DESC,
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Mouth, Teeth, Jaw",
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

export const Route = createFileRoute("/orthodontist-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "orthodontist Kanpur, braces in Kanpur, clear aligners Kanpur, best braces Kanpur, cost of braces Kanpur, ceramic braces Kanpur, MDS orthodontist Kakadeo, recommended orthodontist Kanpur, invisible aligners Kanpur, My Dentist Kakadeo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/orthodontist-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/orthodontist-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: OrthodontistPage,
});

function OrthodontistPage() {
  return (
    <>
      <PageHeader
        eyebrow="Orthodontics · Kakadeo, Kanpur"
        title={<>Orthodontist in Kanpur — <span className="italic text-aqua-deep">MDS-qualified, IOS Member.</span></>}
        intro="Braces and aligners at MY DENTIST, Kakadeo, led exclusively by Dr. Karuna Singh Sawhny — every case managed directly by her, start to finish."
      />

      {/* What is orthodontic treatment */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">orthodontic treatment?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Orthodontics is the dental specialty focused on diagnosing and correcting misaligned teeth, improper bites, and jaw development issues. Using braces, aligners, or orthopaedic appliances, an orthodontist moves teeth into their correct positions over a planned treatment period.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`At MY DENTIST, orthodontic treatment is led exclusively by Dr. Karuna Singh Sawhny — an MDS-qualified orthodontist and member of the Indian Orthodontic Society (IOS). Every case, from first assessment to final retention, is managed directly by her.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* When you need an orthodontist */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning Signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              When do you need an <span className="italic text-aqua-deep">orthodontist?</span>
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

      {/* Specialist credential intro with image */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Orthodontic treatment at MY DENTIST Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Specialist Care
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Specialist orthodontic care in <span className="italic text-aqua-deep">Kakadeo, Kanpur.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Orthodontic treatment done right requires deep knowledge of jaw growth, facial development, and bite mechanics — the domain of a specialist-trained orthodontist, not a general dentist offering braces as an add-on.`} /></p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Dr. Karuna Singh Sawhny holds an MDS in Orthodontics and Dentofacial Orthopaedics and is a member of the Indian Orthodontic Society.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Options */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Options
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Orthodontic options at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OPTIONS.map((o, i) => {
              const featured = o.title === "Self-Ligating Braces" || o.title === "Clear / Invisible Aligners";
              return (
                <motion.div
                  key={o.title}
                  variants={item}
                  className={
                    featured
                      ? "relative rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-7 shadow-soft ring-1 ring-aqua/20"
                      : "rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
                  }
                >
                  {featured && (
                    <div className="pill absolute -top-3 right-6 border border-aqua-deep/20 bg-aqua-deep text-white">
                      <Star className="h-3 w-3 fill-white" /> Popular
                    </div>
                  )}
                  <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={o.desc} /></p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Real results */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Orthodontic treatment before and after results at MY DENTIST Kanpur" className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover object-center" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Real Results
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Real cases, treated at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
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
              Benefits of <span className="italic text-aqua-deep">orthodontic treatment.</span>
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
              The orthodontic process at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
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

      {/* Children screening callout */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                When should children see an <span className="italic text-aqua">orthodontist?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                The Indian Orthodontic Society recommends an orthodontic screening by age <span className="font-display text-2xl text-white tabular-nums">7</span>. Early treatment is almost always simpler and less costly than correction in adulthood.
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
                <h3 className="font-display text-2xl">Meet your orthodontic specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Karuna Singh Sawhny (BDS, MDS, IOS Member) leads orthodontic care at MY DENTIST, Kanpur.`} /></p>
              </div>
              <div className="flex gap-3">
                <Link to="/dr-karuna-sawhny" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
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
              <Link to="/paediatric-dentistry" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Paediatric Dentistry</Link>
              <Link to="/smile-makeover-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Smile Makeover</Link>
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
              Orthodontics <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your orthodontic assessment at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Specialist diagnosis, transparent pricing and the full spectrum of braces and aligner options — every time.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Orthodontic Assessment →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
