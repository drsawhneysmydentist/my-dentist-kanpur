import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-root-canal.webp";
import serviceImg2 from "@/assets/service-root-canal-2.webp";

const TITLE = "Root Canal Treatment in Kanpur | Painless RCT | Single Visit | MDS Endodontist | My Dentist Kakadeo";
const DESC =
  "Painless root canal treatment in Kanpur by Dr. Asheesh K. Sawhny — MDS Endodontist & AAID-Certified Implantologist with 21+ years experience. Single-sitting RCT available at My Dentist, Kakadeo, Kanpur. Serving patients from Pandu Nagar, Naveen Nagar, Sharda Nagar & all of Kanpur.";

const SIGNS = [
  "Persistent toothache, especially when biting or applying pressure",
  "Prolonged sensitivity to hot or cold that does not resolve quickly",
  "Swollen, tender, or darkened gums near a tooth",
  "Darkening or discolouration of a tooth",
  "A pimple-like bump (abscess) on the gum",
  "Deep decay, a cracked tooth, or repeated procedures on the same tooth",
];

const BENEFITS = [
  "Saves your natural tooth — avoids extraction",
  "Eliminates infection and relieves pain",
  "Restores normal chewing and biting function",
  "Prevents infection from spreading to adjacent teeth or bone",
  "Long-lasting result when followed by an appropriate crown",
  "Preserves your natural smile and facial structure",
  "Microscope-assisted precision (Carl Zeiss) for complex or narrow canals",
];

const PROCESS = [
  { title: "Diagnosis & assessment", desc: "X-rays and clinical examination assess the tooth, bone and pulp. You receive a clear explanation of sittings and care before anything begins." },
  { title: "Local anaesthesia", desc: "The area is numbed with effective local anaesthesia — most patients feel far less discomfort than expected." },
  { title: "Canal cleaning & shaping", desc: "Infected pulp is removed; canals are cleaned, shaped and disinfected using specialist rotary endodontic instruments." },
  { title: "Filling & sealing", desc: "Canals are filled with biocompatible gutta-percha and sealed to prevent future bacterial entry." },
  { title: "Crown placement", desc: "For most posterior teeth, a crown restores strength and protects the tooth from fracture long-term." },
];

const FAQS = [
  { q: "Does a root canal hurt?", a: "With specialist technique and appropriate local anaesthesia, modern root canal treatment is comfortable. Most patients report far less discomfort than expected." },
  { q: "How many sittings does RCT take?", a: "Single-sitting RCT is possible for straightforward cases. Complex anatomy or severe infection may need two or more sittings." },
  { q: "Do I need a crown after root canal treatment?", a: "In most cases, yes — particularly for molars and premolars, which bear chewing load. A crown protects the tooth from fracture." },
  { q: "Is root canal better than extraction?", a: "In almost all cases, saving your natural tooth is preferable to extraction, which leads to bone loss and shifting teeth." },
  { q: "How long does a treated tooth last after RCT?", a: "A properly treated and crowned tooth can last many years — often a lifetime — with regular dental care." },
  { q: "What is the cost of root canal treatment in Kanpur?", a: "RCT fees vary by tooth type and case complexity. Consultation fee is ₹500 — book for an accurate, personalised quote." },
  { q: "Can a root canal fail?", a: "Success rates are high when performed by a specialist. Early diagnosis and specialist execution significantly reduce this risk." },
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
  name: "Root Canal Treatment",
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

export const Route = createFileRoute("/root-canal-treatment-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "root canal treatment Kanpur, painless RCT Kanpur, single visit root canal Kanpur, single sitting RCT Kanpur, endodontist Kanpur, root canal treatment cost Kanpur, MDS endodontist Kakadeo, best dentist for root canal Kanpur, My Dentist Kakadeo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/root-canal-treatment-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/root-canal-treatment-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: RootCanalPage,
});

function RootCanalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Root Canal Treatment · Kakadeo, Kanpur"
        title={<>Root Canal Treatment in Kanpur — <span className="italic text-aqua-deep">by a specialist endodontist.</span></>}
        intro="Pain-free RCT at MY DENTIST, Kakadeo, performed by an MDS-qualified endodontist with 21+ years of clinical experience."
      />

      {/* What is RCT */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">root canal treatment?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Root Canal Treatment (RCT) saves a severely infected or damaged tooth by removing the infected pulp — the soft tissue inside the tooth containing nerves and blood vessels — cleaning and disinfecting the canals, and sealing the tooth to prevent reinfection.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Despite its reputation, a root canal performed by a specialist is a routine, comfortable procedure. It relieves the pain caused by infection — it does not cause it. At My Dentist, RCT is performed by a qualified MDS Endodontist, not a general practitioner offering it as a side service.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Why qualification matters */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Root canal treatment at MY DENTIST Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Why It Matters
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Why the doctor's qualification matters for <span className="italic text-aqua-deep">your root canal.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`When you need a root canal, the most important question is not where — it is who.`} /></p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Dr. Asheesh K. Sawhny holds an MDS in Conservative Dentistry & Endodontics from KLE Institute of Dental Sciences, Belgaum. He is Principal & Professor at Rama Dental College, Kanpur and Head of the Department of Conservative Dentistry & Endodontics.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* When you need RCT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning Signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              When do you need <span className="italic text-aqua-deep">root canal treatment?</span>
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

      {/* Benefits */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Benefits
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Benefits of <span className="italic text-aqua-deep">root canal treatment.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const featured = b.startsWith("Microscope-assisted precision");
              return (
                <motion.div
                  key={b}
                  variants={item}
                  className={
                    featured
                      ? "relative flex items-start gap-4 rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-6 shadow-soft ring-1 ring-aqua/20"
                      : "flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft"
                  }
                >
                  {featured && (
                    <div className="pill absolute -top-3 right-5 border border-aqua-deep/20 bg-aqua-deep text-white">
                      <Star className="h-3 w-3 fill-white" /> Featured
                    </div>
                  )}
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{b}</p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Inside the tooth */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Inside the Tooth
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              What happens <span className="italic text-aqua-deep">inside an infected tooth.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Infection reaches the pulp chamber and nerve at the tooth's core. RCT removes this infected tissue, cleans the canals, and seals the tooth — relieving pain at its source.
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Tooth anatomy and root canal cross-section diagram" className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Process
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              What to expect at MY DENTIST for <span className="italic text-aqua-deep">RCT.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Comprehensive diagnosis, treatment planning, specialist care and post-treatment guidance — every step is explained before it happens.
            </p>
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

      {/* Specialist credential strip */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                A <span className="italic text-aqua">specialist endodontist,</span> not a general practitioner.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                <span className="font-bold text-white">21+ years</span> of clinical experience, an <span className="font-bold text-white">MDS in Conservative Dentistry &amp; Endodontics</span>, and AAID Implant Certification — root canal treatment at MY DENTIST is led by genuine specialist expertise.
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
                <h3 className="font-display text-2xl">Meet your root canal specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh K. Sawhny (BDS, MDS) leads endodontic care at MY DENTIST, Kanpur.`} /></p>
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
              <Link to="/restorative-dentistry-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Crowns &amp; Restorations</Link>
              <Link to="/prosthodontics" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Crowns &amp; Bridges</Link>
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
              Root Canal <span className="italic text-aqua-deep">FAQs.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4">
            {FAQS.map((f) => {
              const featured = f.q === "How many sittings does RCT take?";
              return (
                <motion.details
                  key={f.q}
                  variants={item}
                  className={
                    featured
                      ? "group rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-7 shadow-soft ring-1 ring-aqua/20"
                      : "group rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
                  }
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl leading-snug marker:hidden">
                    <span className="inline-flex items-center gap-2">
                      {featured && <Star className="h-4 w-4 shrink-0 text-aqua-deep fill-aqua-deep/20" />}
                      {f.q}
                    </span>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-foreground/40 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={f.a} /></p>
                </motion.details>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              Book your root canal consultation at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Specialist diagnosis, transparent pricing and pain-free treatment — every time.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Root Canal Consultation →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
