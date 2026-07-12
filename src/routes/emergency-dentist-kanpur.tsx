import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-emergency.webp";

const TITLE = "Emergency Dentist Kanpur | Same-Day Dental Care | Emergency Tooth Pain Treatment | My Dentist Kakadeo";
const DESC =
  "Emergency dentist in Kanpur — My Dentist, Kakadeo. Same-day urgent care for emergency tooth pain, broken teeth, dental abscess, swelling and lost restorations. Open evenings Mon–Sat & Sundays. MDS specialists available. Call +91 98385 00100 now.";

const EMERGENCIES = [
  "Severe or escalating toothache",
  "Dental abscess — swelling of face, jaw, or gum",
  "Cracked, fractured, or broken tooth",
  "Tooth knocked out (avulsed) from trauma",
  "Lost or broken crown, bridge, or filling causing pain",
  "Broken denture or orthodontic appliance causing injury",
  "Soft tissue injury — cut or laceration to gums or cheek",
  "Post-extraction bleeding that is not resolving",
  "Orthodontic wire causing injury to cheek or gum",
];

const FIRST_AID = [
  {
    title: "Severe toothache or abscess",
    desc: "Call My Dentist immediately. Do not take antibiotics without a dental assessment — they treat infection but do not resolve its cause. The tooth requires professional treatment.",
  },
  {
    title: "Knocked-out tooth",
    desc: "Handle the tooth by the crown, not the root. Rinse gently with clean water — do not scrub. Store in milk or saliva and reach a dentist within 30–60 minutes. Speed determines success.",
  },
  {
    title: "Broken tooth",
    desc: "Rinse your mouth with warm water. Apply a cold compress to the cheek if swelling is present. Avoid biting on that side and see a dentist the same day.",
  },
  {
    title: "Lost crown or filling",
    desc: "Avoid chewing on the affected tooth. A small amount of sugar-free chewing gum or pharmacy dental cement can temporarily cover it. Book at My Dentist as soon as possible.",
  },
];

const BENEFITS = [
  "Accurate diagnosis prevents mistreatment of acute conditions",
  "Definitive treatment at first appointment — no referral delays",
  "Root canal specialist on-site for infected or abscessed teeth",
  "Restorative capability for fractured and broken teeth",
  "Avoidance of unnecessary extractions through specialist conservative management",
  "Reduced risk of complications from delayed or incomplete treatment",
];

const PROCESS = [
  { title: "Immediate assessment", desc: "Dr. Sawhny examines the affected tooth. An RVG X-ray is taken to assess root, bone, and pulp status accurately." },
  { title: "Pain relief", desc: "Local anaesthesia is administered immediately where needed. Pain relief is the first clinical priority." },
  { title: "Definitive or interim treatment", desc: "Where possible, the problem is resolved definitively — abscess drainage, root canal initiation, tooth stabilisation, or recementation of a restoration." },
  { title: "Follow-up", desc: "Post-emergency follow-up is scheduled to complete treatment and ensure full resolution." },
];

const FAQS = [
  { q: "What counts as a dental emergency?", a: "Any condition causing severe pain, facial swelling, active infection, trauma to teeth, or sudden inability to function normally. If unsure, call — it is always better to be assessed." },
  { q: "Can a dental abscess be dangerous?", a: "Yes. An untreated abscess can spread infection to the jaw, neck, and in severe cases the airway — a life-threatening condition. Any facial swelling with dental pain requires same-day attention." },
  { q: "Will I definitely lose the tooth in an emergency?", a: "Not necessarily. Dr. Sawhny's specialist background means extraction is a last resort. Even severely infected or fractured teeth can often be saved with root canal treatment and a crown." },
  { q: "Can a knocked-out tooth be reimplanted?", a: "Yes — if treated within 30–60 minutes of the injury. Store the tooth correctly (in milk or saliva, never dry) and reach My Dentist as quickly as possible. Prognosis drops significantly with time." },
  { q: "What if my emergency happens outside OPD hours?", a: "Call the clinic number and follow the recorded instructions. If you are experiencing facial swelling or airway compromise, go to your nearest hospital emergency department immediately." },
  { q: "Is emergency dental treatment more expensive?", a: "Emergency appointments may carry an urgent appointment fee. However, early emergency treatment costs far less than managing a condition that has been allowed to deteriorate further." },
  { q: "I have had a toothache for weeks — is that an emergency?", a: "Yes. A persistent toothache indicates active infection or pulpal damage. It will not resolve on its own and will worsen. Book an urgent appointment at My Dentist for assessment before it escalates." },
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
  name: "Emergency Dental Treatment",
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

export const Route = createFileRoute("/emergency-dentist-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "emergency dentist Kanpur, urgent dental care Kanpur, toothache Kanpur, dental emergency Kakadeo, emergency dental clinic Kanpur" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/emergency-dentist-kanpur` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/emergency-dentist-kanpur` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: EmergencyDentistPage,
});

function EmergencyDentistPage() {
  return (
    <>
      <PageHeader
        eyebrow="Emergency Care · Kakadeo, Kanpur"
        title={<>Emergency Dentist in Kanpur — <span className="italic text-aqua-deep">urgent care, same appointment.</span></>}
        intro="Dental emergencies prioritised at MY DENTIST, Kakadeo. MDS Endodontist on-site for definitive treatment — no referrals, no delays."
      />

      {/* What is dental emergency */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">
              What is a <span className="italic text-aqua-deep">dental emergency?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`A dental emergency is any condition causing acute pain, active infection, trauma to teeth or gums, or sudden loss of function that requires prompt professional attention. Delayed treatment almost always results in more complex, more painful, and more costly management.`} /></p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground"><AutoHighlight text={`At My Dentist, Kakadeo, Dr. Asheesh Sawhny's specialist endodontic and restorative background means the most common emergencies — infected teeth, fractured teeth, abscesses — are managed definitively at the same clinic, without referral.`} /></p>
          </Reveal>
        </div>
      </section>

      {/* Emergencies we treat */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Warning Signs
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Dental emergencies <span className="italic text-aqua-deep">we treat.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EMERGENCIES.map((s) => (
              <motion.div key={s} variants={item} className="flex items-start gap-4 rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* First Aid + image */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="Emergency dental care at MY DENTIST Kanpur"
                className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover object-center"
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
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> First Aid
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              What to do in a <span className="italic text-aqua-deep">dental emergency.</span>
            </h2>
            <div className="mt-6 space-y-5">
              {FIRST_AID.map((s) => (
                <div key={s.title}>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={s.desc} /></p>
                </div>
              ))}
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
              Benefits of choosing a <span className="italic text-aqua-deep">specialist for emergencies.</span>
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
              The emergency dental process at <span className="italic text-aqua-deep">MY DENTIST.</span>
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
                <span className="italic text-aqua">Definitive</span> emergency care — not a temporary patch.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                Digital RVG X-rays for immediate radiographic diagnosis. MDS Endodontist on-site. Most emergencies resolved in a single appointment — no unnecessary referrals.
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
                <h3 className="font-display text-2xl">Meet your emergency dental specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground"><AutoHighlight text={`Dr. Asheesh Sawhny (BDS, MDS · AAID Certified Implantologist) leads emergency and endodontic care at MY DENTIST.`} /></p>
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
              Emergency Dentistry <span className="italic text-aqua-deep">FAQs.</span>
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
              Call My Dentist for <span className="italic text-aqua-deep">emergency dental care.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              OPD: Mon–Sat 4–9 PM | Sun 11 AM–2 PM · Kakadeo, Kanpur
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href={`tel:${SITE.phone}`} variant="dark">Call — Emergency Line →</MagneticButton>
              <MagneticButton to="/contact" hash="consultation-form" variant="outline">Book Urgent Appointment</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
