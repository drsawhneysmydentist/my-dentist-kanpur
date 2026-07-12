import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-implants.webp";
import serviceImg2 from "@/assets/service-implants-2.webp";

const TITLE = "Dental Implants in Kanpur | American-Certified Implantologist | Implant Dentist Kanpur | My Dentist";
const DESC =
  "Dental implants in Kanpur by Dr. Asheesh K. Sawhny — American-certified implantologist (AAID) with 21+ years experience. Best implant dentist in Kakadeo, Kanpur. Single tooth, multiple implants & full arch. Know the dental implant cost in Kanpur — book a ₹500 consultation.";

const OPTIONS = [
  { title: "Single Tooth Implant", desc: "Replace one missing tooth with a natural-looking, root-anchored crown — no damage to surrounding healthy teeth." },
  { title: "Multiple Implants", desc: "Restore several missing teeth individually. Each implant functions independently, preserving adjacent teeth and bone." },
  { title: "Implant-Supported Bridge", desc: "Replace consecutive missing teeth with an implant-anchored bridge — stable and durable, without filing healthy teeth." },
  { title: "Full Arch Restoration", desc: "Complete restoration of an entire jaw using implant-supported prosthetics — suited for extensive tooth loss or denture transition." },
];

const SYSTEMS = [
  { title: "Camlog Implants", desc: "Premium German implant system known for reliable osseointegration and long-term stability across single and multi-tooth cases." },
  { title: "Pterygoid Implants", desc: "Anchored into the pterygoid bone at the back of the jaw — an option for patients with severe upper-jaw bone loss, often avoiding the need for grafting." },
  { title: "Zygomatic Implants", desc: "Longer implants anchored in the cheekbone (zygoma) for full-arch restoration in cases of extensive upper-jaw bone loss." },
];

const BENEFITS = [
  "Permanent, stable tooth replacement — no slipping or discomfort",
  "Preserves jawbone and prevents bone loss",
  "Does not affect or damage adjacent healthy teeth",
  "Natural appearance and full chewing function restored",
  "Easy to maintain — clean like natural teeth",
  "Long-lasting: implants can last a lifetime with proper care",
];

const PROCESS = [
  { title: "Comprehensive assessment", desc: "Bone density, gum health and medical history are evaluated with X-rays or a 3D scan. You receive a transparent plan and timeline first." },
  { title: "Implant placement", desc: "The titanium implant is surgically placed under local anaesthesia — precise and typically well-tolerated." },
  { title: "Osseointegration", desc: "Over 8–12 weeks, the implant fuses with the surrounding bone — the foundation of long-term stability." },
  { title: "Crown placement", desc: "Once integrated, an abutment and a custom crown matched to your natural teeth complete the restoration." },
];

const FAQS = [
  { q: "How long do dental implants last?", a: "With proper care and regular check-ups, the implant itself can last a lifetime. The crown on top may need replacement after 10–15 years." },
  { q: "Is implant surgery painful?", a: "Performed under local anaesthesia with minimal discomfort during placement. Mild post-surgery soreness resolves within a few days." },
  { q: "How long does the full implant process take?", a: "From placement to final crown, the process generally takes 3–6 months, depending on bone healing and any preparatory work." },
  { q: "What if I have bone loss — can I still get implants?", a: "Possibly, yes. Bone grafting can rebuild lost volume to support an implant — assessed during your consultation." },
  { q: "Are dental implants better than dentures?", a: "For most patients, yes. Implants are fixed, stable, and preserve bone, unlike removable dentures." },
  { q: "Can implants be done in a single day?", a: "In selected cases with sufficient bone, same-day or immediate-loading implants are possible." },
  { q: "What is the cost of dental implants in Kanpur?", a: "Costs vary by number of implants, restoration type and any preparatory procedures. Consultation fee is ₹500 for a personalised quote." },
  { q: "How do I care for dental implants?", a: "Maintained exactly like natural teeth — twice-daily brushing, flossing and regular dental check-ups." },
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
  name: "Dental Implants",
  description: DESC,
  procedureType: "https://schema.org/SurgicalProcedure",
  bodyLocation: "Mouth, Jaw, Teeth",
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

export const Route = createFileRoute("/dental-implants-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "dental implants Kanpur, implant dentist Kanpur, certified implantologist Kanpur, American certified implantologist Kanpur, dental implant cost Kanpur, AAID implantologist Kanpur, tooth implant Kakadeo, full arch implant Kanpur, single tooth implant Kanpur, My Dentist Kakadeo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/dental-implants-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/dental-implants-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: DentalImplantsPage,
});

function DentalImplantsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dental Implants · Kakadeo, Kanpur"
        title={<>Dental Implants in Kanpur — <span className="italic text-aqua-deep">AAID-certified specialist.</span></>}
        intro="Permanent, natural-looking tooth replacement at MY DENTIST, Kakadeo, by an AAID-Certified Implantologist with 21+ years of clinical experience."
      />

      {/* What are dental implants */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What are <span className="italic text-aqua-deep">dental implants?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`A dental implant is a titanium post surgically placed into the jawbone to replace the root of a missing tooth. Once it integrates with the bone — osseointegration — a custom crown, bridge, or denture is attached on top, recreating a tooth that looks, feels and functions like your natural one.`} /></p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Unlike removable dentures, implants are permanent. Unlike conventional bridges, they do not require grinding down adjacent healthy teeth — for patients in Kanpur seeking the most reliable, long-term solution to tooth loss, implants are the gold standard.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* What makes an implantologist certified */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Dental implant treatment at MY DENTIST Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Certification
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              What makes an implantologist <span className="italic text-aqua-deep">certified?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Dr. Asheesh K. Sawhny earned his Certificate in Dental Implants from the American Academy of Implant Dentistry (AAID) in 2010.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Implant options */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Options
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Implant options at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OPTIONS.map((o, i) => (
              <motion.div key={o.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={o.desc} /></p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Advanced implant systems */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Advanced Systems
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Advanced implant systems for <span className="italic text-aqua-deep">complex cases.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SYSTEMS.map((s, i) => (
              <motion.div key={s.title} variants={item} className="relative rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-7 shadow-soft ring-1 ring-aqua/20">
                <div className="pill absolute -top-3 right-6 border border-aqua-deep/20 bg-aqua-deep text-white">
                  <Star className="h-3 w-3 fill-white" /> Featured
                </div>
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
              Benefits of <span className="italic text-aqua-deep">dental implants.</span>
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
              The implant process at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`The full process from placement to final crown typically spans 3–6 months, depending on bone health and individual healing.`} /></p>
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

      {/* Candidacy */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Dental implant candidacy assessment at MY DENTIST Kakadeo" className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Candidacy
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Am I a candidate for <span className="italic text-aqua-deep">dental implants?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`Most healthy adults with adequate bone support are candidates for implants. A specialist consultation confirms suitability and outlines a transparent treatment plan.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Specialist credential strip */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                <span className="italic text-aqua">AAID-Certified.</span> 21+ years of clinical trust.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                International certification combined with decades of clinical experience — implants at MY DENTIST are planned and placed with specialist precision.
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
                <h3 className="font-display text-2xl">Meet your implant specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh K. Sawhny (BDS, MDS, AAID Certified) leads implant care at MY DENTIST, Kanpur.`} /></p>
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
              <Link to="/gum-treatment-periodontics-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Gum Treatment</Link>
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
              Dental Implant <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your implant consultation at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A specialist assessment, a transparent plan and implants placed with international-certified precision.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Your Implant Consultation →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
