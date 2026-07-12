import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AutoHighlight } from "@/components/AutoHighlight";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import serviceImg from "@/assets/service-cosmetic.webp";
import serviceImg2 from "@/assets/service-cosmetic-2.webp";

const TITLE = "Cosmetic Dentist Kanpur | Smile Design | Veneers | Teeth Whitening Kanpur | MY DENTIST Kakadeo";
const DESC =
  "Best cosmetic dentist in Kanpur at MY DENTIST, Kakadeo — smile makeovers, smile design, porcelain veneers, teeth whitening Kanpur, dental crowns, zirconia crowns and dental bonding. Transform your smile with specialist cosmetic dentistry in Kanpur.";

const FAQS = [
  { q: "How much does a smile makeover cost at MY DENTIST Kanpur?", a: "Smile makeover costs at MY DENTIST vary depending on the combination of treatments required. A basic whitening or bonding session starts from approximately ₹5,000, while a full smile makeover with veneers may range from ₹40,000 to ₹1,50,000 or more depending on the number of teeth and materials chosen. Every patient receives a detailed, written treatment plan with transparent pricing after the cosmetic consultation." },
  { q: "Is teeth whitening safe and how long does it last?", a: "Clinical teeth whitening at MY DENTIST is completely safe when performed under specialist supervision. We use professionally formulated whitening gels that do not damage enamel. Results typically last 1 to 2 years depending on your diet, oral hygiene and habits like smoking or excessive tea and coffee consumption. Touch-up sessions are quick and affordable to maintain your brightness." },
  { q: "What is the difference between veneers and bonding?", a: "Veneers are thin, custom-crafted porcelain shells that are permanently bonded to the front surface of your teeth, offering superior durability, stain resistance and aesthetic control. Dental bonding uses a tooth-coloured composite resin applied directly and shaped by hand — it is faster and more affordable but less durable and more prone to staining over time. At MY DENTIST Kanpur, our specialists help you choose the option that best fits your goals and budget." },
  { q: "Can cosmetic dentistry fix crooked teeth without braces?", a: "Yes. For mild to moderate alignment issues, porcelain veneers or composite bonding at MY DENTIST can create the appearance of straight, even teeth without orthodontic treatment. However, for significant crowding or bite problems, we may recommend Invisalign clear aligners or braces first, followed by cosmetic refinement. Every case is evaluated individually by our specialists in Kakadeo, Kanpur." },
  { q: "How many visits does a smile makeover take?", a: "Most cosmetic smile makeovers at MY DENTIST are completed in 2 to 4 visits over 2 to 3 weeks. The process begins with a digital smile design consultation where you see a preview of your new smile. Veneers typically require two visits — one for preparation and one for final placement. Whitening and bonding can often be completed in a single appointment." },
  { q: "Do you offer tooth jewellery?", a: "Yes. Tooth jewellery — a small, dentist-applied crystal or gem bonded to the tooth surface — is available at MY DENTIST as a quick, reversible cosmetic accent, usually completed in a single short visit." },
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
  name: "Cosmetic Dentistry",
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
  "Discoloured, stained or yellowed teeth that make you self-conscious about smiling openly in photos or social situations",
  "Chipped, cracked or worn teeth that catch your tongue or make you hide your smile when meeting new people",
  "Gaps between your teeth (diastema) or uneven tooth sizes that draw attention away from your eyes and face",
  "Gummy smile where excess gum tissue makes teeth appear short — a condition easily corrected with gum contouring at MY DENTIST",
  "Old, visible metal fillings or discoloured dental work that contrasts sharply with your natural teeth",
  "A smile that simply does not match the person you are — and you want a specialist to design the smile you have always wanted",
];

const CAUSES = [
  "Dietary staining from tea, coffee, red wine, turmeric-rich Indian cuisine, colas and berries that gradually penetrate enamel and cause discolouration over years.",
  "Tobacco use — smoking or chewing gutkha and paan causes deep, stubborn brown and black stains that cannot be removed by brushing or over-the-counter whitening products.",
  "Dental trauma from accidents, falls or sports injuries that chip, crack or fracture the front teeth, creating aesthetic concerns that affect your confidence.",
  "Ageing naturally thins enamel and darkens the underlying dentin, making teeth appear yellower and more translucent over time even with good oral hygiene.",
  "Genetic factors that affect tooth shape, size, colour and alignment — some people are simply born with teeth that are inherently discoloured, irregularly shaped or poorly positioned.",
  "Developmental conditions like fluorosis (excessive fluoride during tooth development) or tetracycline staining that cause intrinsic discolouration resistant to standard whitening.",
];

const BENEFITS = [
  { title: "Confidence that transforms", desc: "A well-designed smile changes how you speak, laugh, eat and interact with the world. Patients at MY DENTIST consistently report a dramatic boost in social and professional confidence after cosmetic treatment." },
  { title: "Natural-looking results", desc: "Our specialists use digital smile design to match veneers, crowns and bonding to your face shape, lip line, skin tone and personality — never a generic, cookie-cutter look." },
  { title: "Minimally invasive options", desc: "Modern cosmetic dentistry at MY DENTIST Kanpur prioritises tooth conservation. No-prep and minimal-prep veneers, enamel-safe whitening and composite bonding preserve maximum natural tooth structure." },
  { title: "Long-lasting transformation", desc: "Porcelain veneers placed at MY DENTIST last 10 to 15 years or more. Professional whitening results persist for 1 to 2 years with simple maintenance. These are investments that deliver years of daily satisfaction." },
  { title: "Digital preview before treatment", desc: "Our digital smile design software lets you see a preview of your new smile before any tooth is touched. You participate in the design process and approve the result before treatment begins." },
  { title: "Quick treatment timelines", desc: "Many cosmetic procedures at MY DENTIST are completed in just 1 to 2 visits. Professional whitening takes under an hour. Veneers require only a preparation visit and a placement visit, typically within 7 to 10 days." },
];

const PROCESS = [
  { title: "Cosmetic consultation", desc: "Your specialist examines your teeth, gums, bite and facial proportions, then discusses your smile goals, lifestyle and budget to recommend the most effective treatment combination." },
  { title: "Digital smile design", desc: "Digital photographs and intra-oral scans are used to create a computer-generated preview of your proposed new smile — colour, shape, length, alignment and gum line are all customised." },
  { title: "Treatment planning", desc: "Based on your approved design, a detailed plan is created with exact materials, visit schedule, timeline and a fully transparent cost breakdown — no surprises." },
  { title: "Precise treatment delivery", desc: "Whether whitening, veneers, bonding or a combination, each procedure is performed with meticulous attention to detail by our cosmetic specialist in our calm, premium environment." },
  { title: "Final review and aftercare", desc: "Your new smile is assessed under different lighting angles, bite is verified and detailed maintenance instructions are provided to protect your investment for years to come." },
];

const TECHNOLOGY = [
  "Digital smile design (DSD) software for treatment preview",
  "Intra-oral digital scanner for precise 3D tooth mapping",
  "LED-accelerated clinical whitening systems, including Philips Zoom",
  "Porcelain veneer CAD/CAM fabrication",
  "High-magnification loupes and intra-oral cameras for precision",
];

export const Route = createFileRoute("/cosmetic-dentistry")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "cosmetic dentist Kanpur, smile makeover Kanpur, teeth whitening Kanpur, veneers Kanpur, dental bonding Kakadeo, best cosmetic dentistry MY DENTIST" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/cosmetic-dentistry` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/cosmetic-dentistry` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: CosmeticDentistryPage,
});

function CosmeticDentistryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cosmetic Dentistry · Kakadeo, Kanpur"
        title={<>Cosmetic Dentistry in Kanpur — <span className="italic text-aqua-deep">your best smile, designed.</span></>}
        intro="Smile makeovers, porcelain veneers, teeth whitening, gum contouring and dental bonding at MY DENTIST, Kakadeo, Kanpur. Specialist cosmetic dentistry designed around your face, your story and your confidence."
      />

      {/* Introduction */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Cosmetic
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              A smile crafted in <span className="italic text-aqua-deep">millimetres.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Cosmetic dentistry at MY DENTIST is not about generic templates — it is about designing a smile that belongs to you. Our cosmetic specialists in Kakadeo, Kanpur combine digital smile design technology with artistic judgement to plan veneers, whitening, bonding and gum contouring that harmonise with your face shape, skin tone, lip line and personality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you want a complete smile transformation or a simple refinement, every cosmetic treatment at MY DENTIST begins with a digital preview. You see the proposed result before any tooth is touched, participate in the design decisions and approve every detail before treatment begins. This patient-first approach ensures results that feel genuinely yours — natural, confident and lasting.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg} alt="Cosmetic teeth whitening and smile design at MY DENTIST Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Is this for you?
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Signs cosmetic dentistry can <span className="italic text-aqua-deep">help you.</span>
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={serviceImg2} alt="Smile makeover result at MY DENTIST cosmetic dentistry Kanpur" className="h-[320px] sm:h-[440px] md:h-[540px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Causes
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              What affects your <span className="italic text-aqua-deep">smile.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Understanding what has affected your smile helps our cosmetic specialists at MY DENTIST Kakadeo recommend the most effective and efficient treatment. Every smile concern has a specific cause — and the right procedure to address it.
            </p>
            <ul className="mt-8 space-y-4">
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
              What cosmetic treatment at <span className="italic text-aqua-deep">MY DENTIST delivers.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const featured = b.title === "Long-lasting transformation";
              return (
                <motion.div
                  key={b.title}
                  variants={item}
                  className={
                    featured
                      ? "relative rounded-3xl border border-aqua-deep/30 bg-aqua-soft/25 p-7 shadow-soft ring-1 ring-aqua/20"
                      : "rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
                  }
                >
                  {featured && (
                    <div className="pill absolute -top-3 right-6 border border-aqua-deep/20 bg-aqua-deep text-white">
                      <Star className="h-3 w-3 fill-white" /> Featured
                    </div>
                  )}
                  <h3 className="font-display text-xl">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={b.desc} /></p>
                </motion.div>
              );
            })}
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
              Your smile <span className="italic text-aqua-deep">transformation.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => {
              const featured = p.title === "Digital smile design";
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
                      <Star className="h-3 w-3 fill-white" /> Featured
                    </div>
                  )}
                  <span className="font-display text-3xl text-aqua-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><AutoHighlight text={p.desc} /></p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Technology
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Cosmetic <span className="italic text-aqua-deep">technology.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              MY DENTIST Kakadeo uses internationally recognised cosmetic dental technology to design, preview and deliver smile transformations with pixel-level precision.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {TECHNOLOGY.map((t) => {
                const featured = t.includes("Philips Zoom");
                return (
                  <li
                    key={t}
                    className={
                      featured
                        ? "flex items-start gap-3 rounded-2xl border border-aqua-deep/30 bg-aqua-soft/25 p-4 text-sm ring-1 ring-aqua/20"
                        : "flex items-start gap-3 rounded-2xl border border-foreground/8 bg-card p-4 text-sm"
                    }
                  >
                    {featured ? (
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-aqua-deep fill-aqua-deep/20" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua-deep" />
                    )}
                    {t}
                  </li>
                );
              })}
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
                Why choose MY DENTIST for <span className="italic text-aqua">cosmetic dentistry in Kanpur?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
                MY DENTIST is Kakadeo's leading cosmetic dentistry destination. Our specialists combine digital smile design expertise, internationally sourced materials and a deeply patient-centred approach to deliver results that are natural, lasting and authentically yours. Every smile makeover is a collaboration — not a production line.
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
                <h3 className="font-display text-2xl">Meet your cosmetic dentistry specialist</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dr. Asheesh K. Sawhny (BDS, MDS) and Dr. Karuna Singh Sawhny (BDS, MDS) design and deliver cosmetic treatments at MY DENTIST, Kanpur — from whitening and bonding to full smile makeovers.
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
              <Link to="/smile-makeover-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Smile Makeover</Link>
              <Link to="/teeth-whitening-kanpur" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Teeth Whitening</Link>
              <Link to="/prosthodontics" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Prosthodontics</Link>
              <Link to="/paediatric-dentistry" className="text-aqua-deep underline underline-offset-4 hover:text-aqua">Paediatric Dentistry</Link>
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
              Cosmetic dentistry <span className="italic text-aqua-deep">FAQs.</span>
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
              Ready for your <span className="italic text-aqua-deep">smile transformation?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Book a cosmetic consultation at MY DENTIST, Kakadeo, Kanpur. See a digital preview of your new smile and choose the treatment that is right for you.
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