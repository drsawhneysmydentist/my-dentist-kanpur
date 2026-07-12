import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-restorative.webp";
import serviceImg2 from "@/assets/service-restorative-2.webp";

const TITLE = "Restorative Dentistry Kanpur | Dental Crowns | Zirconia Crown Kanpur | My Dentist Kakadeo";
const DESC =
  "Restorative dentistry in Kanpur at My Dentist, Kakadeo — tooth-coloured fillings, dental crowns, zirconia crowns, bridges and full-mouth rehabilitation by MDS specialist Dr. Asheesh Sawhny. Trusted dental clinic in Kakadeo, Kanpur.";

const SIGNS = [
  "A tooth that is cracked, chipped, or broken",
  "Visible cavities or dark spots on teeth",
  "Toothache or sensitivity when biting, chewing, or with hot or cold foods",
  "A filling, crown, or bridge that has cracked, fallen out, or feels loose",
  "Missing one or more teeth",
  "Teeth that are heavily worn from grinding",
  "Difficulty chewing on one side of the mouth",
];

const SERVICES = [
  { title: "Tooth-Coloured Composite Fillings", desc: "Cavities restored with composite resin matched precisely to your natural tooth shade — no dark amalgam." },
  { title: "Inlays and Onlays", desc: "For cavities too large for a direct filling but not requiring a full crown — conservative and highly durable." },
  { title: "Dental Crowns", desc: "A full-coverage ceramic or zirconia crown for a damaged, weakened, or decayed tooth — also placed routinely after root canal treatment. Same-day CEREC crowns are available, designed, milled and fitted in approximately 45 minutes." },
  { title: "Dental Bridges", desc: "A fixed prosthetic replacing missing teeth by anchoring to adjacent teeth or implants — restores function, prevents drifting." },
  { title: "Full Mouth Rehabilitation", desc: "A phased, comprehensive plan combining fillings, crowns, implants and other restorations in a coordinated sequence." },
  { title: "Post and Core Buildup", desc: "Recreates the foundation needed before crown placement when a tooth has insufficient structure remaining." },
];

const BENEFITS = [
  "Restores full chewing and biting function",
  "Eliminates pain and sensitivity caused by damaged or decayed teeth",
  "Prevents further damage, fracture, or tooth loss",
  "Natural-looking results — tooth-coloured materials throughout",
  "Preserves adjacent teeth and jawbone structure",
  "Improves overall oral health baseline",
];

const PROCESS = [
  { title: "Diagnosis & treatment planning", desc: "A thorough clinical and radiographic examination, with findings and options explained before treatment begins." },
  { title: "Tooth preparation", desc: "Decay is removed and the tooth prepared for the chosen restoration, under local anaesthesia for comfort." },
  { title: "Restoration placement", desc: "Fillings are completed the same visit; crowns and bridges receive a temporary while the final piece is fabricated." },
  { title: "Final fit & review", desc: "The final restoration is checked for fit, bite and appearance before permanent placement." },
];

const FAQS = [
  { q: "How long do dental crowns last?", a: "With proper care, ceramic and zirconia crowns typically last 10–15 years or longer, depending on bite forces and hygiene." },
  { q: "Is a filling or a crown better for a damaged tooth?", a: "Small to moderate cavities are best restored with a filling; large cavities, cracks or root-canalled teeth need a crown." },
  { q: "Are tooth-coloured fillings as strong as amalgam?", a: "Modern composite and ceramic materials are highly durable and suitable for most posterior teeth." },
  { q: "Can old silver fillings be replaced?", a: "Yes. Failing, cracked or sensitive amalgam fillings can be replaced with tooth-coloured restorations." },
  { q: "What is full mouth rehabilitation?", a: "A comprehensive, phased plan combining fillings, crowns, implants and root canals to restore complete oral function." },
  { q: "Do I need a crown after every root canal?", a: "In most cases, yes — especially for back teeth, to protect against fracture, the most common cause of tooth loss after RCT." },
  { q: "What does a dental crown cost in Kanpur?", a: "Costs vary by material and clinical complexity. Book a consultation for a transparent, itemised quote." },
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
  name: "Restorative Dentistry",
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

export const Route = createFileRoute("/restorative-dentistry-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "restorative dentistry Kanpur, dental crowns Kanpur, tooth filling Kanpur, dental bridge Kanpur, dental restoration Kakadeo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/restorative-dentistry-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/restorative-dentistry-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: RestorativeDentistryPage,
});

function RestorativeDentistryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Restorative Dentistry · Kakadeo, Kanpur"
        title={<>Restorative Dentistry in Kanpur — <span className="italic text-aqua-deep">rebuild, strengthen, restore.</span></>}
        intro="Fillings, crowns, bridges and full mouth rehabilitation at MY DENTIST, Kakadeo, led by an MDS specialist in Conservative Dentistry and Endodontics."
      />

      {/* What is restorative dentistry */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">restorative dentistry?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Restorative dentistry encompasses all procedures that repair, rebuild, or replace damaged, decayed, or missing teeth — restoring full function, structural integrity and natural appearance to your smile.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`At MY DENTIST, restorative work is led by Dr. Asheesh Sawhny — an MDS specialist in Conservative Dentistry and Endodontics. Every decision prioritises conserving natural tooth structure while achieving a durable, functional, aesthetically sound result.`} /></p>
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
              Signs you may need <span className="italic text-aqua-deep">restorative treatment.</span>
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

      {/* Image + services intro */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Restorative dentistry at MY DENTIST Kanpur" className="aspect-[3/2] w-full object-cover object-center" loading="lazy" width={750} height={500} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Endodontic Expertise
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              From root canal to crown — <span className="italic text-aqua-deep">seamless care.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Crowns after root canal treatment are managed by the <span className="font-semibold text-aqua-deep">same specialist</span> who performed the RCT. See: <Link to="/root-canal-treatment-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Root Canal Treatment</Link>.
            </p>
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
              Restorative services at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const featured = s.title === "Dental Crowns";
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
                      <Star className="h-3 w-3 fill-white" /> Same-Day
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
              Benefits of <span className="italic text-aqua-deep">restorative dentistry.</span>
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

      {/* Precision restorative care */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Precision restorative dental care at MY DENTIST Kakadeo" className="aspect-[1080/674] w-full object-cover object-center" loading="lazy" width={1080} height={674} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Precision Care
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Every restoration starts with a <span className="italic text-aqua-deep">precise diagnosis.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Careful clinical examination guides every restorative decision — ensuring the chosen filling, crown, or bridge is the right fit for your tooth, not a one-size-fits-all default.
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
              The restorative treatment process at <span className="italic text-aqua-deep">MY DENTIST.</span>
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
                <span className="italic text-aqua">21+ years</span> of restorative experience.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                Tooth-coloured materials throughout, full mouth rehabilitation capability, and no need for multiple referrals across Kanpur.
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
                <h3 className="font-display text-2xl">Meet your restorative specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny (BDS, MDS) leads restorative care at MY DENTIST, Kanpur.`} /></p>
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
              <Link to="/root-canal-treatment-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Root Canal Treatment</Link>
              <Link to="/dental-implants-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Dental Implants</Link>
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
              Restorative Dentistry <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your restorative consultation at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A precise diagnosis, conservative options, and a result built to last.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Restorative Consultation →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
