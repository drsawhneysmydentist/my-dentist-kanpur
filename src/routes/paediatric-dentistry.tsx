import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-paediatric.webp";
import serviceImg2 from "@/assets/ba-paediatric.webp";

const TITLE = "Pediatric Dentist Kanpur | Children's Dentist Kakadeo | Best Paediatric Dentistry | MY DENTIST";
const DESC =
  "Best paediatric dentist in Kanpur at MY DENTIST, Kakadeo — gentle, child-friendly dental care from the first tooth. Fluoride treatments, cavity fillings, preventive sealants and early orthodontic screening by MDS specialists. Serving Pandu Nagar, Naveen Nagar and all of Kanpur.";

const FAQS = [
  { q: "At what age should my child first visit the dentist?", a: "The Indian Academy of Paediatric Dentistry and the American Academy of Pediatric Dentistry both recommend a child's first dental visit by age 1 or within 6 months of the first tooth erupting — whichever comes first. At MY DENTIST Kanpur, our paediatric specialists make this first visit gentle, informative and positive to build a lifetime of healthy dental habits." },
  { q: "How do you manage anxious children during dental treatment?", a: "Our paediatric specialists at MY DENTIST Kakadeo use proven behaviour management techniques including tell-show-do (explaining, demonstrating then performing), positive reinforcement, distraction and, when necessary, conscious sedation. Our child-friendly environment, gentle approach and patience ensure even the most anxious children feel safe and comfortable during treatment." },
  { q: "Are dental sealants safe and necessary for children?", a: "Yes. Dental sealants are a safe, painless and highly effective preventive treatment recommended by paediatric dental specialists worldwide. A thin protective coating is applied to the chewing surfaces of your child's back teeth (molars), sealing the deep grooves where cavities most commonly develop. At MY DENTIST Kanpur, sealants reduce the risk of childhood molar cavities by up to 80% and last for several years." },
  { q: "What should I do if my child's baby tooth is decaying?", a: "Do not ignore decay in baby teeth. Cavities in primary teeth can cause pain, infection and premature tooth loss — which can lead to alignment problems for the permanent teeth that follow. At MY DENTIST, our paediatric specialists in Kakadeo gently restore decayed baby teeth with tooth-coloured fillings, stainless steel crowns or pulp therapy, depending on the severity, to protect your child's developing smile." },
  { q: "How much does children's dental treatment cost at MY DENTIST?", a: "Paediatric dental treatment costs at MY DENTIST are affordable and family-friendly. Preventive treatments like fluoride application start from approximately ₹500, dental sealants from ₹800 per tooth and tooth-coloured fillings from ₹1,500. You receive a transparent, written estimate after your child's specialist consultation — there are never any hidden charges." },
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
  name: "Paediatric Dentistry",
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

const SIGNS = [
  "Your child has not yet visited a dentist and is over 1 year old or has teeth that have already erupted",
  "Complaints of tooth pain, sensitivity to hot or cold foods, or difficulty chewing that suggests possible cavities",
  "Visible brown, black or white spots on your child's teeth — early signs of tooth decay that need prompt attention",
  "Thumb sucking, finger sucking or mouth breathing habits that persist beyond age 4 and may affect jaw development",
  "Early tooth loss, crowded teeth or irregular eruption patterns that may indicate a need for early orthodontic evaluation",
  "Your child expresses fear or anxiety about dental visits — our specialists at MY DENTIST specialise in converting nervous children into confident patients",
];

const CAUSES = [
  "Frequent consumption of sugary snacks, juices, chocolates and sticky foods that feed cavity-causing bacteria and erode young enamel — the single most common cause of childhood dental decay in Kanpur.",
  "Inadequate brushing — children under 8 typically lack the fine motor skills and discipline to brush effectively without parental supervision, leaving plaque to accumulate and cause cavities.",
  "Bottle feeding at bedtime or prolonged breastfeeding after teeth erupt, which pools milk or formula around the teeth overnight and causes aggressive early childhood caries (nursing bottle caries).",
  "Genetic factors such as deep enamel grooves, thin enamel or naturally weak tooth structure that make some children more cavity-prone regardless of their diet or hygiene.",
  "Lack of preventive care — children who do not receive regular professional fluoride treatments, dental sealants or check-ups miss the early interventions that prevent most childhood dental problems.",
  "Dental trauma from playground falls, sports injuries or accidents that chip, fracture or completely knock out primary teeth, requiring urgent paediatric dental assessment.",
];

const BENEFITS = [
  { title: "Gentle, fear-free visits", desc: "Our paediatric specialists at MY DENTIST Kanpur use behaviour management techniques that transform anxious children into confident young patients who actually look forward to their dental appointments." },
  { title: "Prevention over treatment", desc: "Fluoride therapy, dental sealants and parental guidance at MY DENTIST prevent up to 80% of childhood cavities — keeping your child's teeth healthy without the need for drills or fillings." },
  { title: "Early problem detection", desc: "Regular paediatric check-ups catch cavities, developmental issues and habit-related problems early — when they are simplest and least expensive to treat." },
  { title: "Tooth-coloured, child-friendly materials", desc: "When fillings or crowns are needed, MY DENTIST uses aesthetically pleasing, mercury-free, tooth-coloured materials that look natural and are safe for growing bodies." },
  { title: "Habit counselling for parents", desc: "Our specialists guide parents on nutrition, brushing technique, pacifier use and thumb-sucking cessation — practical advice that protects your child's smile at home between visits." },
  { title: "Foundation for adult teeth", desc: "Healthy baby teeth guide the correct eruption and alignment of permanent teeth. Paediatric care at MY DENTIST Kakadeo protects this natural guidance system and reduces future orthodontic needs." },
];

const PROCESS = [
  { title: "Warm welcome and comfort", desc: "Your child is greeted in our friendly environment, introduced to the clinic and made comfortable. We never rush — building trust comes first, treatment comes second." },
  { title: "Gentle examination", desc: "The paediatric specialist performs a thorough yet gentle examination using child-friendly language, checking each tooth, the gums, bite and overall oral development." },
  { title: "Preventive treatments", desc: "Professional fluoride application, dental sealants on newly erupted molars and a thorough cleaning are performed as needed — all quick, painless and effective." },
  { title: "Parent consultation", desc: "Your specialist explains findings clearly, shows you images, discusses any concerns and provides practical guidance on diet, brushing technique and habits specific to your child." },
  { title: "Treatment (if needed)", desc: "If cavities or other issues are found, treatment is scheduled at a separate visit. Using tell-show-do and gentle techniques, we restore teeth with minimal stress for both child and parent." },
];

const TECHNOLOGY = [
  "Child-sized digital X-ray sensors for minimal radiation exposure",
  "Biocompatible, mercury-free, tooth-coloured filling materials",
  "Fluoride varnish and gel application systems",
  "LED curing lights for fast, comfortable filling placement",
  "Behaviour management and conscious sedation protocols for anxious children",
];

export const Route = createFileRoute("/paediatric-dentistry")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "paediatric dentist Kanpur, kids dentist Kakadeo, children dental care Kanpur, dental sealants Kanpur, child dentist MY DENTIST, fluoride treatment Kanpur" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/paediatric-dentistry` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/paediatric-dentistry` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: PaediatricDentistryPage,
});

function PaediatricDentistryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Paediatric Dentistry · Kakadeo, Kanpur"
        title={<>Paediatric Dentistry in Kanpur — <span className="italic text-aqua-deep">gentle care, healthy habits.</span></>}
        intro="Children's dentistry at MY DENTIST, Kakadeo, Kanpur — from the first tooth through the teenage years. Gentle specialists, preventive treatments and a fun, fear-free environment that builds lifelong healthy dental habits."
      />

      {/* Introduction */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={serviceImg}
                alt="Gentle paediatric dentistry for children at MY DENTIST Kanpur"
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
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Paediatric
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Dentistry designed for <span className="italic text-aqua-deep">little smiles.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Paediatric dentistry focuses on the oral health of infants, children and adolescents. At MY DENTIST in Kakadeo, Kanpur, our paediatric specialists are trained to manage the unique dental needs, behavioural patterns and emotional needs of young patients — making every visit positive, educational and genuinely enjoyable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe that a child's early dental experiences shape their attitude toward oral health for life. That is why MY DENTIST prioritises prevention, uses gentle behaviour management techniques and creates an environment where children feel safe, respected and even excited about taking care of their teeth. From the first tooth to the last baby tooth, we are here for every stage of your child's dental journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Is this for your child?
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Signs your child needs a <span className="italic text-aqua-deep">dental check-up.</span>
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
              What causes dental <span className="italic text-aqua-deep">problems in children.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Childhood dental problems are almost always preventable. Understanding the common causes helps parents take proactive steps — and our paediatric specialists at MY DENTIST Kanpur provide the professional prevention and early intervention that makes the biggest difference.
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
              Why paediatric care at <span className="italic text-aqua-deep">MY DENTIST.</span>
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
              Your child's dental <span className="italic text-aqua-deep">journey.</span>
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
                alt="Paediatric dental technology and child-friendly environment at MY DENTIST Kakadeo"
                className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-contain bg-white"
                loading="lazy"
                decoding="async"
                width={1280}
                height={1080}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Technology
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Paediatric <span className="italic text-aqua-deep">technology.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              MY DENTIST Kakadeo uses child-safe, modern dental technology that minimises radiation, uses biocompatible materials and keeps every procedure as quick and comfortable as possible for young patients.
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
                Why choose MY DENTIST for <span className="italic text-aqua">paediatric dentistry in Kanpur?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                MY DENTIST is one of the few dental clinics in Kanpur with dedicated paediatric dental expertise. Dr. Karuna Singh Sawhny is known for her remarkable, gentle approach with children — building trust, making treatment fun and creating positive associations with dental care that last a lifetime. Combined with our child-friendly environment, mercury-free materials and focus on prevention over treatment, MY DENTIST is the right choice for your child's smile.
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
                <h3 className="font-display text-2xl">Meet your paediatric specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dr. Karuna Singh Sawhny (BDS, MDS) leads paediatric dental care at MY DENTIST, Kanpur — dedicated to gentle, modern dental care that makes children feel safe and comfortable.
                </p>
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
              Paediatric dentistry <span className="italic text-aqua-deep">FAQs.</span>
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
              Your child deserves a <span className="italic text-aqua-deep">healthy smile.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Book a paediatric dental check-up at MY DENTIST, Kakadeo, Kanpur. Our specialists will make it a positive, gentle experience — and give you the guidance to protect your child's smile at home.
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