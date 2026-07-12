import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-oral-surgery.webp";
import serviceImg2 from "@/assets/service-oral-surgery-2.webp";

const TITLE = "Wisdom Tooth Removal Kanpur | Oral Surgery | Tooth Extraction Kanpur | MY DENTIST Kakadeo";
const DESC =
  "Wisdom tooth removal and oral surgery in Kanpur at MY DENTIST, Kakadeo — surgical extractions, wisdom tooth extraction, jaw surgery, cyst removal and facial trauma treatment. Painless, safe and sterile oral and maxillofacial surgery in Kanpur.";

const FAQS = [
  { q: "Is wisdom tooth removal painful at MY DENTIST Kanpur?", a: "No. Wisdom tooth extraction at MY DENTIST is performed under local anaesthesia with optional sedation for anxious patients. Most patients report feeling only mild pressure during the procedure and manage post-operative discomfort with standard over-the-counter pain relief. Our oral surgeons in Kakadeo use minimally invasive techniques that speed up healing and reduce swelling." },
  { q: "How long does it take to recover from wisdom tooth surgery?", a: "Recovery from a straightforward wisdom tooth extraction at MY DENTIST typically takes 3 to 5 days for routine cases. Surgical extractions involving impacted teeth may require 7 to 10 days. We provide detailed post-operative instructions and a follow-up appointment to ensure smooth, complication-free healing." },
  { q: "Do you handle impacted wisdom teeth at MY DENTIST?", a: "Yes. Impacted wisdom teeth — including mesio-angular, horizontal and disto-angular impactions — are routinely treated by our oral surgery specialists at MY DENTIST, Kakadeo, Kanpur. We use digital OPG X-rays and CBCT imaging to precisely plan every case before surgery." },
  { q: "What types of oral surgery does MY DENTIST perform?", a: "MY DENTIST provides a full range of oral and maxillofacial surgical procedures: wisdom tooth extractions, surgical removal of impacted teeth, cyst and tumour removal, jaw fracture repair, pre-prosthetic surgery, bone grafting, sinus lift procedures and dental implant placement. All surgeries are performed in our fully equipped, sterile surgical suite in Kakadeo, Kanpur." },
  { q: "How much does wisdom tooth removal cost in Kanpur?", a: "At MY DENTIST, wisdom tooth extraction costs in Kanpur start from approximately ₹5,000 for a simple extraction and vary based on the impaction level, surgical complexity and anaesthesia requirements. Surgical extractions for impacted teeth are quoted individually after a digital X-ray assessment. All pricing is transparent and provided in writing before treatment." },
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
  name: "Oral and Maxillofacial Surgery",
  description: DESC,
  procedureType: "https://schema.org/SurgicalProcedure",
  bodyLocation: "Mouth, Jaw, Face",
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
  "Persistent pain or swelling at the back of your mouth, often indicating an impacted or partially erupted wisdom tooth",
  "Frequent infections, pericoronitis or gum flaps around wisdom teeth that keep flaring up",
  "A tooth that has broken at or below the gum line and cannot be saved with a standard extraction",
  "Jaw pain, clicking, locking or difficulty opening your mouth fully — potential TMJ or jaw joint issues",
  "Swelling, numbness or a growing lump in the jaw, cheek or mouth that needs specialist evaluation",
  "Facial injury or trauma resulting in fractured teeth, jawbone or soft-tissue damage requiring surgical repair",
];

const CAUSES = [
  "Impaction — when wisdom teeth lack sufficient space to erupt properly, becoming trapped (mesial, horizontal, vertical or distal impaction) against adjacent teeth or bone.",
  "Severe tooth decay that has destroyed the tooth below the gum line, making a standard extraction impossible and requiring a surgical approach.",
  "Periodontal disease that has caused extensive bone loss around a tooth, necessitating surgical removal to protect surrounding healthy teeth.",
  "Facial trauma from road accidents, sports injuries or falls that fracture the jaw, dislocate the TMJ or damage the alveolar bone.",
  "Pathological lesions such as radicular cysts, dentigerous cysts or odontogenic tumours that develop around impacted teeth and require surgical enucleation.",
  "Orthodontic requirements where teeth are surgically exposed (exposure and bonding) to facilitate brace-guided eruption, or pre-prosthetic surgery to prepare the ridge for dentures or implants.",
];

const BENEFITS = [
  { title: "Pain-free extractions", desc: "Modern anaesthesia and minimally invasive surgical techniques ensure comfortable procedures with minimal post-operative discomfort at MY DENTIST Kanpur." },
  { title: "Prevents future complications", desc: "Removing impacted wisdom teeth proactively prevents cysts, infections, crowding and damage to adjacent molars — problems that become more complex and expensive over time." },
  { title: "Faster recovery", desc: "Our oral surgeons use flap designs and bone-removal techniques that minimise tissue trauma, reducing swelling and cutting recovery time by days compared to conventional methods." },
  { title: "Digital surgical planning", desc: "CBCT 3D imaging and digital OPG X-rays allow our surgeons to map nerve proximity, root anatomy and bone density before making a single incision." },
  { title: "Sterile surgical environment", desc: "Every procedure is performed in our fully equipped surgical suite following international sterilisation protocols — class-B autoclaves, single-use disposables and laminar airflow." },
  { title: "Comprehensive aftercare", desc: "Detailed written post-operative instructions, prescribed medications and a scheduled follow-up appointment ensure your healing is monitored and any concerns addressed promptly." },
];

const PROCESS = [
  { title: "Imaging and diagnosis", desc: "Digital OPG and CBCT scans capture a complete picture of your jaws, teeth, nerve pathways and sinus proximity — the foundation for safe surgical planning." },
  { title: "Surgical consultation", desc: "Your oral surgeon explains the findings, the recommended procedure, anaesthesia options and a transparent cost estimate. All questions are answered before you consent." },
  { title: "Anaesthesia and preparation", desc: "Local anaesthesia is administered with precision; optional conscious sedation is available for anxious patients. The surgical field is prepped under sterile protocol." },
  { title: "Surgical procedure", desc: "Using minimally invasive techniques, the surgeon accesses, section (if needed) and removes the tooth or lesion. Bone edges are smoothed and the site is thoroughly irrigated." },
  { title: "Suturing and recovery", desc: "Dissolvable or removable sutures close the surgical site. You receive detailed aftercare instructions, a prescription and a follow-up appointment within 5 to 7 days." },
];

const TECHNOLOGY = [
  "Digital OPG (orthopantomogram) for full jaw imaging",
  "CBCT (cone-beam computed tomography) for 3D surgical mapping",
  "Piezosurgical ultrasonic bone cutting — preserves soft tissue",
  "Class-B autoclave sterilisation and single-use instrument kits",
  "Advanced local anaesthesia delivery systems for painless procedures",
];

export const Route = createFileRoute("/oral-and-maxillofacial-surgery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "oral surgery Kanpur, wisdom tooth removal Kanpur, maxillofacial surgery Kanpur, tooth extraction Kakadeo, jaw surgery Kanpur, dental surgery MY DENTIST" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/oral-and-maxillofacial-surgery` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/oral-and-maxillofacial-surgery` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: OralSurgeryPage,
});

function OralSurgeryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Oral & Maxillofacial Surgery · Kakadeo, Kanpur"
        title={<>Oral & Maxillofacial Surgery in Kanpur — <span className="italic text-aqua-deep">precise, safe, expert.</span></>}
        intro="Wisdom tooth removal, surgical extractions, jaw surgery and facial trauma treatment at MY DENTIST, Kakadeo, Kanpur. Performed by experienced oral surgeons using CBCT 3D imaging and minimally invasive techniques."
      />

      {/* Introduction */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="3D illustration of oral and maxillofacial jaw surgery with braces at MY DENTIST Kanpur"
                className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1280}
                height={853}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Oral Surgery
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Expert surgical <span className="italic text-aqua-deep">oral care.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Oral and maxillofacial surgery is the dental specialty that diagnoses and treats conditions affecting the mouth, jaws, face and neck. At MY DENTIST in Kakadeo, Kanpur, our oral surgeons handle everything from straightforward wisdom tooth extractions to complex surgical procedures including cyst removal, bone grafting and pre-prosthetic jaw preparation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every surgical procedure at MY DENTIST is planned using advanced digital imaging — OPG X-rays and CBCT 3D scans — that map your anatomy in three dimensions. This allows our surgeons to identify nerve pathways, assess bone density and plan the safest, least invasive approach before making a single incision. The result is precise surgery, faster healing and significantly reduced post-operative discomfort.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Signs you may need <span className="italic text-aqua-deep">oral surgery.</span>
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
              Conditions that require <span className="italic text-aqua-deep">surgical treatment.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Oral surgery becomes necessary when conditions cannot be resolved with conservative dental treatment alone. At MY DENTIST Kanpur, our oral surgeons evaluate each case thoroughly, ensuring surgery is recommended only when it is the most effective and predictable path to resolution.
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
              Why surgical treatment at <span className="italic text-aqua-deep">MY DENTIST.</span>
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

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Process
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Your surgical <span className="italic text-aqua-deep">journey.</span>
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
              <img
                src={serviceImg2}
                alt="Sterile surgical suite and technology at MY DENTIST Kakadeo Kanpur"
                className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Technology
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Surgical <span className="italic text-aqua-deep">technology.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              MY DENTIST's surgical suite in Kakadeo, Kanpur is equipped with advanced imaging and instrumentation that makes oral surgery safer, more precise and significantly less invasive than conventional methods.
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

      {/* Why Choose */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                Why choose MY DENTIST for <span className="italic text-aqua">oral surgery in Kanpur?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                MY DENTIST is one of the few dental clinics in Kanpur with a fully equipped surgical suite, CBCT 3D imaging and experienced oral surgeons capable of handling both routine and complex surgical cases. From impacted wisdom teeth to bone grafting and cyst removal, every procedure is planned digitally, performed under strict sterile protocol and followed up with personalised aftercare.
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
                <h3 className="font-display text-2xl">Meet your oral surgery specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dr. Asheesh K. Sawhny (BDS, MDS) and Dr. Karuna Singh Sawhny (BDS, MDS) manage surgical cases at MY DENTIST, Kanpur — from routine extractions to complex implant and pre-prosthetic surgery.
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
              <Link to="/prosthodontics" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Prosthodontics</Link>
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
              Oral surgery <span className="italic text-aqua-deep">FAQs.</span>
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
              Need an oral surgery <span className="italic text-aqua-deep">consultation?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Book a surgical consultation at MY DENTIST, Kakadeo, Kanpur. We will assess your condition with digital imaging and explain every option clearly before proceeding.
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