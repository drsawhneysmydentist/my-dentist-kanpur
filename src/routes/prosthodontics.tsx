import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-prosthodontics.webp";
import serviceImg2 from "@/assets/service-prosthodontics-2.webp";

const TITLE = "Dental Crowns Kanpur | Zirconia Crown Kanpur | Dentures Kanpur | Prosthodontics | MY DENTIST";
const DESC =
  "Expert prosthodontics in Kanpur at MY DENTIST, Kakadeo — dental crowns, zirconia crowns, bridges, dentures, veneers and full-mouth rehabilitation. Precision-crafted restorations by specialist prosthodontists. Serving Kanpur, Kakadeo, Pandu Nagar and Naveen Nagar.";

const FAQS = [
  { q: "How long do dental crowns last at MY DENTIST Kanpur?", a: "With proper care, the all-ceramic and zirconia crowns placed at MY DENTIST typically last 12 to 15 years or longer. We use internationally trusted materials and digital precision milling, which ensures a superior fit and significantly extends the lifespan of every restoration we place." },
  { q: "What is the difference between a crown and a bridge?", a: "A crown is a single-tooth cap that covers a damaged or root-canal-treated tooth to restore its shape, strength and appearance. A bridge uses two or more crowns on adjacent teeth to anchor a false tooth (pontic) in place, replacing one or more missing teeth. Both are crafted at our in-house digital lab at MY DENTIST, Kakadeo, Kanpur." },
  { q: "Are full dentures better than dental implants?", a: "It depends on your bone health, budget and personal preference. Implants are the gold standard because they prevent bone loss and feel like natural teeth. However, modern implant-supported dentures at MY DENTIST combine the affordability of dentures with the stability of implants — our specialists will recommend the best option during your consultation." },
  { q: "Is prosthodontic treatment painful?", a: "No. All prosthodontic procedures at MY DENTIST Kanpur are performed under effective local anaesthesia. Crown and bridge preparation, impression-taking and fitting are comfortable. For full-mouth rehabilitation, we plan treatment in phases to keep every visit short, manageable and pain-free." },
  { q: "How much do crowns and bridges cost in Kanpur?", a: "At MY DENTIST, crown costs in Kanpur start from approximately ₹4,000 depending on the material — metal-free zirconia crowns, E-max all-ceramic crowns and porcelain-fused-to-metal options are all available. You receive a transparent, written cost estimate after your specialist consultation with no hidden charges." },
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
  name: "Prosthodontics",
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

const SIGNS = [
  "One or more missing teeth affecting your smile or chewing ability",
  "Broken, cracked or severely worn-down teeth that need full-coverage restoration",
  "Old fillings that are failing, leaking or causing sensitivity",
  "Ill-fitting dentures that slip, cause soreness or restrict your diet",
  "Difficulty chewing or speaking clearly due to tooth loss or poor bite alignment",
  "Visible metal fillings you want replaced with natural-looking ceramic restorations",
];

const CAUSES = [
  "Tooth decay that has destroyed too much structure for a simple filling, requiring a full crown for strength and protection.",
  "Periodontal (gum) disease, the leading cause of tooth loss in adults, which creates gaps that need bridgework or implants to restore.",
  "Dental trauma from accidents, sports injuries or falls that fracture or completely avulse teeth.",
  "Congenital conditions like amelogenesis imperfecta or dentinogenesis imperfecta that weaken natural tooth structure.",
  "Progressive tooth wear from bruxism (grinding) or acidic erosion that reduces teeth to stubs requiring full rehabilitation.",
  "Age-related changes where natural teeth gradually weaken, shift or are lost, necessitating partial or complete prosthodontic rehabilitation.",
];

const BENEFITS = [
  { title: "Restored function", desc: "Eat, speak and chew with complete confidence — crowns, bridges and implants restore bite force to near-natural levels." },
  { title: "Natural aesthetics", desc: "Our all-ceramic and zirconia restorations are colour-matched to your existing teeth, making them virtually indistinguishable from natural dentition." },
  { title: "Prevents further damage", desc: "Crowns protect weakened teeth from fracture, while bridges and implants prevent adjacent teeth from shifting into empty spaces." },
  { title: "Long-term durability", desc: "Internationally trusted materials combined with digital precision milling deliver restorations that last 12 to 15 years or more with routine care." },
  { title: "Preserves facial structure", desc: "Replacing missing teeth with implants or dentures maintains jawbone volume and prevents the sunken facial appearance caused by tooth loss." },
  { title: "Custom full-mouth plans", desc: "For extensive cases, our specialists design comprehensive rehabilitation plans that rebuild your entire bite in measured, comfortable phases." },
];

const PROCESS = [
  { title: "Specialist consultation", desc: "A prosthodontic specialist examines your mouth with digital X-rays and intra-oral scanning to assess the condition of every tooth, the gums and your bite." },
  { title: "Digital treatment planning", desc: "Using 3D digital impressions and smile-design software, we create a precise blueprint — you see a digital preview of your restored smile before any treatment begins." },
  { title: "Tooth preparation", desc: "Damaged or decayed tooth structure is carefully removed under anaesthesia, shaped to precise dimensions and temporised while the final restoration is crafted." },
  { title: "Precision fabrication", desc: "Your crown, bridge or denture is milled from premium ceramic or zirconia using CAD/CAM technology for a fit accuracy measured in microns." },
  { title: "Fitting and fine-tuning", desc: "The restoration is tried in, adjusted for bite accuracy, polished and permanently cemented or screw-retained — followed by detailed aftercare instructions." },
];

const TECHNOLOGY = [
  "Intra-oral digital scanner (3Shape TRIOS) — eliminates messy impressions",
  "CAD/CAM same-day crown milling for select cases",
  "Zirconia and lithium disilicate (E-max) all-ceramic systems",
  "Face-bow and semi-adjustable articulator for precise bite registration",
  "Digital smile design software for treatment preview",
];

export const Route = createFileRoute("/prosthodontics")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "prosthodontics Kanpur, dental crowns Kanpur, dental bridges Kanpur, dentures Kanpur, full mouth rehabilitation Kanpur, best prosthodontist Kakadeo, MY DENTIST" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/prosthodontics` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/prosthodontics` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: ProsthodonticsPage,
});

function ProsthodonticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prosthodontics · Kakadeo, Kanpur"
        title={<>Prosthodontics in Kanpur — <span className="italic text-aqua-deep">restore, rebuild, smile.</span></>}
        intro="Expert crowns, bridges, veneers, dentures and full-mouth rehabilitation at MY DENTIST, Kakadeo, Kanpur. Every restoration is digitally planned and precision-crafted to match your natural teeth."
      />

      {/* Introduction — image + text split */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Prosthodontic crown and bridge treatment at MY DENTIST Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Prosthodontics
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">prosthodontics?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Prosthodontics is the branch of dentistry focused on designing, manufacturing and fitting artificial replacements for missing or damaged teeth and oral structures. At MY DENTIST in Kakadeo, Kanpur, our prosthodontic specialists restore both the function and aesthetics of your smile using crowns, bridges, veneers, inlays, onlays, dentures and implant-supported prosthetics.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you need a single crown to protect a root-canal-treated tooth or a complete full-mouth rehabilitation to rebuild years of wear and damage, every treatment at MY DENTIST is planned with digital precision and delivered using internationally trusted materials. Our goal is simple — restorations so natural that nobody can tell the difference.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signs You May Need Prosthodontics */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Signs you may need <span className="italic text-aqua-deep">prosthodontic care.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
            {SIGNS.map((s) => (
              <motion.div key={s} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Causes */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Causes
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Why teeth need <span className="italic text-aqua-deep">restoration.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Tooth loss and structural damage are rarely caused by a single factor. At MY DENTIST, our prosthodontic specialists evaluate the full picture — your dental history, lifestyle, bite mechanics and overall health — to identify the root causes and design restorations that address them, not just mask the symptoms.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {CAUSES.map((c, i) => (
                <motion.li key={i} variants={item} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} className="flex items-start gap-4 rounded-2xl border border-foreground/8 bg-card p-5 shadow-soft">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua-soft text-xs font-medium text-aqua-deep">{i + 1}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
                </motion.li>
              ))}
            </ul>
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
              Why prosthodontic treatment at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <motion.div key={b.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <h3 className="font-display text-xl">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={b.desc} /></p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Process
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Your treatment <span className="italic text-aqua-deep">journey.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <motion.div key={p.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <span className="font-display text-3xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={p.desc} /></p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Digital dental technology for prosthodontics at MY DENTIST Kakadeo" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Technology
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Advanced <span className="italic text-aqua-deep">technology.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              MY DENTIST invests in internationally recognised prosthodontic technology to ensure every crown, bridge and denture is planned digitally, milled precisely and fitted to micron-level accuracy.
            </p>
            <ul className="mt-8 grid gap-3">
              {TECHNOLOGY.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl border border-foreground/8 bg-card p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua-deep" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why Choose MY DENTIST */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                Why choose MY DENTIST for <span className="italic text-aqua">prosthodontics in Kanpur?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                MY DENTIST is Kakadeo's only super-specialty dental clinic with dedicated prosthodontic expertise. Our specialists combine decades of clinical experience with digital planning technology, internationally sourced materials and a patient-first philosophy that prioritises honest diagnosis, transparent pricing and long-lasting results.
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

      {/* Meet Your Specialist */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft">
              <div>
                <h3 className="font-display text-2xl">Meet your prosthodontic specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dr. Asheesh K. Sawhny (BDS, MDS) leads prosthodontic care at MY DENTIST, Kanpur — with expertise in crowns, bridges, implants and full-mouth rehabilitation.
                </p>
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
              <Link to="/cosmetic-dentistry" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Cosmetic Dentistry</Link>
              <Link to="/oral-and-maxillofacial-surgery" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Oral & Maxillofacial Surgery</Link>
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
              Prosthodontics <span className="italic text-aqua-deep">FAQs.</span>
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
              Ready to restore <span className="italic text-aqua-deep">your smile?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Book a specialist prosthodontic consultation at MY DENTIST, Kakadeo, Kanpur. We will assess your teeth, explain every option and give you a transparent treatment plan.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Appointment →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}