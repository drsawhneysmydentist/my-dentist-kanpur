import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-specialized.webp";

const TITLE = "Specialized Dental Care in Kanpur | MDS Specialist Clinic | My Dentist Kakadeo";
const DESC =
  "Specialized Dental Care in Kanpur at My Dentist, Kakadeo — MDS Endodontist, AAID Implantologist and MDS Orthodontist under one roof. Complex cases, second opinions and full-mouth care.";

const WHO_NEEDS = [
  "Patients referred by a general dentist for specialist opinion or treatment",
  "Patients seeking a second opinion before root canal, implant, or extensive restorative treatment",
  "Patients with complex multi-tooth problems requiring coordinated care",
  "Patients with systemic health conditions affecting dental treatment — diabetes, blood thinners, osteoporosis",
  "Patients requiring orthodontic and restorative treatment simultaneously",
  "Patients who have had previous dental treatment fail and want expert reassessment",
  "Patients planning full mouth rehabilitation",
];

const SERVICES = [
  { title: "Complex Root Canal Treatment", desc: "Calcified canals, retreatment of failed root canals, and multi-rooted teeth with unusual anatomy — managed by Dr. Asheesh Sawhny, Professor and Head of Conservative Dentistry at Rama Dental College." },
  { title: "Advanced Implantology", desc: "Implant-supported bridges, full arch restoration, and cases requiring bone assessment and staged treatment planning — under AAID-certified expertise." },
  { title: "Orthodontic & Restorative Co-management", desc: "Cases needing braces before veneers, or implant space creation through orthodontic movement, are jointly planned by our specialist team at My Dentist." },
  { title: "Second Opinion Consultations", desc: "Honest, evidence-based second opinions before proceeding with major treatment — without commercial bias toward any particular procedure." },
  { title: "Medically Complex Patients", desc: "Patients on anticoagulants, bisphosphonates, or with uncontrolled systemic conditions require modified protocols. My Dentist coordinates with the patient's physician where needed." },
  { title: "Full Mouth Rehabilitation", desc: "Complete restoration of oral health and function for patients with multiple failing, missing, or damaged teeth. A phased plan combining the expertise of our specialist team." },
];

const BENEFITS = [
  "Accurate diagnosis by specialist-qualified dentists — not a generalist assessment",
  "Avoidance of unnecessary treatment through honest specialist evaluation",
  "Complex cases managed in-house — no fragmented care across multiple clinics",
  "Coordinated planning between endodontics, implantology, and orthodontics",
  "Academic-level expertise — Dr. Sawhny teaches postgraduate students at Rama Dental College",
  "Transparent communication — diagnosis, options, and prognosis explained before treatment begins",
];

const PROCESS = [
  { title: "Comprehensive specialist consultation", desc: "Full clinical examination, review of existing records and X-rays, and detailed history. Dr. Sawhny assesses the case in full before forming a recommendation." },
  { title: "Diagnosis and treatment options", desc: "You receive a clear, honest explanation of what is happening, options available, and the outcomes and risks of each. Second opinion patients receive a written summary where requested." },
  { title: "Treatment planning", desc: "A phased plan prioritising pain relief and infection control, then function, then aesthetics. Where orthodontic and restorative coordination is needed, Dr. Karuna Singh Sawhny is involved." },
  { title: "Specialist treatment delivery", desc: "Treatment is carried out directly by the specialist — not delegated to an assistant or junior. Every stage is communicated to the patient as it proceeds." },
  { title: "Long-term review", desc: "Specialist cases require appropriate follow-up. A recall protocol is established at the conclusion of active treatment." },
];

const CREDENTIALS = [
  { label: "MDS Conservative Dentistry & Endodontics", value: "KLE Institute, Belgaum" },
  { label: "AAID Certificate in Dental Implants", value: "2010" },
  { label: "Professor & Principal", value: "Rama Dental College, Kanpur" },
  { label: "MDS Orthodontics", value: "Rama Dental College, Kanpur" },
  { label: "Member, Indian Orthodontic Society", value: "Dr. Karuna Singh Sawhny" },
  { label: "Verified Five-Star Reviews", value: "226+" },
];

const FAQS = [
  { q: "What is the difference between a general dentist and an MDS specialist?", a: "A general dentist holds a BDS degree. An MDS specialist completes an additional three years of postgraduate training in a specific dental discipline. The clinical depth and diagnostic accuracy in that specialty are significantly greater." },
  { q: "When should I seek a second opinion?", a: "Whenever a significant treatment — multiple extractions, full mouth rehabilitation, implants, root canal retreatment — is recommended and you want independent specialist confirmation before proceeding." },
  { q: "Can one clinic really manage both orthodontics and implants?", a: "At My Dentist, yes. Having both an MDS Orthodontist and an MDS Endodontist/Implantologist in-house means cases requiring both specialties are planned and executed in coordination, not across two separate clinics." },
  { q: "I was told my tooth cannot be saved. Is that always true?", a: "Not always. Dr. Sawhny's endodontic expertise means teeth considered unsaveable at a general practice level can sometimes be retained with specialist root canal or restorative treatment. A second opinion is always worthwhile before consenting to extraction." },
  { q: "Are specialist dental treatments more expensive?", a: "Specialist treatment is priced to reflect the qualification and expertise involved. However, the cost of a correctly executed specialist procedure is almost always lower than the long-term cost of managing a poorly treated or misdiagnosed condition." },
  { q: "Can I bring my previous dental records and X-rays?", a: "Yes. Bringing existing X-rays, treatment records, and previous specialist reports helps Dr. Sawhny assess your case more accurately and avoids duplication of investigations." },
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
  "@type": "MedicalClinic",
  name: "MY DENTIST — Super Specialty Dental Clinic",
  description: DESC,
  medicalSpecialty: ["Endodontics", "Orthodontics", "Implantology"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "117/L-1/455-A, Naveen Nagar, Kakadeo",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208025",
    addressCountry: "IN",
  },
};

export const Route = createFileRoute("/specialized-dental-care-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "specialized dental care Kanpur, dental specialist Kanpur, MDS dentist Kanpur, super specialty dental clinic Kakadeo, complex dental treatment Kanpur" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/specialized-dental-care-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/specialized-dental-care-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: SpecializedCarePage,
});

function SpecializedCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Super Specialty · Kakadeo, Kanpur"
        title={<>Specialized Dental Care in Kanpur — <span className="italic text-aqua-deep">MDS specialists under one roof.</span></>}
        intro="Complex cases, second opinions, and coordinated multi-specialty care. Endodontics, Implantology, and Orthodontics — at MY DENTIST, Kakadeo."
      />

      {/* What is specialized care */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is <span className="italic text-aqua-deep">specialized dental care?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Specialized dental care refers to treatment that goes beyond general dentistry — complex cases, conditions requiring advanced specialist expertise, second opinions on proposed treatments, or coordinated multi-specialty management.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`My Dentist, Kakadeo is a super specialty dental clinic — not a marketing term, a clinical reality. Dr. Asheesh Sawhny holds an MDS in Conservative Dentistry and Endodontics and is an AAID-Certified Implantologist. Dr. Karuna Singh Sawhny holds an MDS in Orthodontics and Dentofacial Orthopaedics. Between them, they cover the full spectrum of specialist dental care at a single clinic in Kanpur.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Who needs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Who Needs It
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Who needs <span className="italic text-aqua-deep">specialized care?</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_NEEDS.map((s) => (
              <motion.div key={s} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services + image */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Services
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Specialized services at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
            <div className="mt-6 space-y-5">
              {SERVICES.map((s) => {
                const featured = s.title === "Complex Root Canal Treatment";
                return (
                  <div
                    key={s.title}
                    className={featured ? "border-l-2 border-aqua-deep/60 pl-4" : undefined}
                  >
                    <h3 className="font-display text-lg font-bold text-foreground inline-flex items-center gap-2">
                      {featured && <Star className="h-4 w-4 shrink-0 text-aqua-deep fill-aqua-deep/20" />}
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={s.desc} /></p>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="Specialist dental care at MY DENTIST Kanpur"
                className="h-[360px] sm:h-[520px] md:h-[640px] w-full object-cover object-top"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1280}
                height={1280}
                style={{ imageRendering: "auto" }}
              />
            </div>
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
              Benefits of seeking <span className="italic text-aqua-deep">specialist care.</span>
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
              The specialist care process at <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p, i) => (
              <motion.div key={p.title} variants={item} className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
                <span className="font-display text-4xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={p.desc} /></p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-foreground p-8 text-background md:p-14">
              <h2 className="font-display text-4xl md:text-5xl">
                Kanpur's <span className="italic text-aqua">verifiable</span> specialist dental clinic.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/70">
                For patients in Kanpur who want specialist care without travelling to Lucknow or Delhi — My Dentist, Naveen Nagar, Kakadeo is the answer.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CREDENTIALS.map((c) => (
                  <div key={c.label} className="rounded-2xl border border-white/10 p-5">
                    <p className="text-xs uppercase tracking-widest text-background/50">{c.label}</p>
                    <p className="mt-1 font-display text-lg text-background">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meet specialists */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft">
              <div>
                <h3 className="font-display text-2xl">Meet your specialists</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny (MDS · AAID) and Dr. Karuna Singh Sawhny (MDS Orthodontics) — both in-house at MY DENTIST, Kanpur.`} /></p>
              </div>
              <div className="flex gap-3">
                <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
                  Meet the team <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium">
                  About us <ArrowRight className="h-4 w-4" />
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
              <Link to="/orthodontist-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Orthodontics</Link>
              <Link to="/restorative-dentistry-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Restorative Dentistry</Link>
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
              Specialized Care <span className="italic text-aqua-deep">FAQs.</span>
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
              Book your specialist consultation at <span className="italic text-aqua-deep">MY DENTIST, Kakadeo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Call or WhatsApp to schedule · OPD: Mon–Sat 4–9 PM | Sun 11 AM–2 PM
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">Book Specialist Consultation →</MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} variant="outline">Call {SITE.phone}</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
