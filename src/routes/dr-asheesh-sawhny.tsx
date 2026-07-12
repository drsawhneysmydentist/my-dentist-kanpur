import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, GraduationCap, ShieldCheck, Stethoscope, Award, Heart, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, item } from "@/components/Reveal";
import drA from "@/assets/dr-asheesh.webp";
import awardClinicalExcellence from "@/assets/award-clinical-excellence.webp";
import awardIdaHonor from "@/assets/award-ida-honor.webp";

const DOC = SITE.doctors[0];
const TITLE = `Dr. Asheesh K. Sawhny — MDS Endodontist & American-Certified Implantologist | Kanpur`;
const DESC = `Dr. Asheesh K. Sawhny is Kanpur's leading MDS Endodontist and American-certified implantologist (AAID) with 21+ years of specialist experience. Principal & Professor at Rama Dental College, Kanpur. Best implant dentist and root canal specialist in Kakadeo, Kanpur.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: DOC.name,
  medicalSpecialty: ["Dentistry", "Endodontics", "Implantology"],
  jobTitle: "Principal & Professor, Rama Dental College",
  worksFor: { "@type": "Dentist", name: "MY DENTIST", url: SITE.url },
  alumniOf: ["Dharwad University", "KLE Belgaum"],
  url: `${SITE.url}/dr-asheesh-sawhny`,
  image: "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

const CREDENTIALS: {
  label: string;
  detail?: React.ReactNode;
  achievements?: string[];
  featured?: boolean;
}[] = [
  {
    label: "BDS",
    detail: (
      <>
        <span className="font-semibold text-foreground">Dharwad University</span>
        <span className="text-foreground/50">, 1999</span>
      </>
    ),
  },
  {
    label: "MDS",
    detail: (
      <>
        <span className="font-semibold text-foreground">MDS in Conservative Dentistry & Endodontics</span>,{" "}
        <span className="font-semibold text-foreground">KLE Institute of Dental Sciences, Belgaum</span>
        <span className="text-foreground/50">, 2003</span>
      </>
    ),
  },
  {
    label: "Implantology",
    detail: (
      <>
        Certificate in Dental Implants,{" "}
        <span className="font-semibold text-foreground">American Academy of Implant Dentistry (AAID)</span>
        <span className="text-foreground/50">, 2010</span>
      </>
    ),
  },
  {
    label: "Leadership",
    detail: (
      <>
        <span className="font-semibold text-foreground">Principal & Professor</span>, HOD Conservative Dentistry &
        Endodontics, Rama Dental College, Kanpur
      </>
    ),
  },
  {
    label: "Experience",
    achievements: ["21+ Years Experience", "5000+ Root Canals", "AAID Certified Implantologist"],
  },
  {
    label: "Memberships",
    detail: (
      <>
        <span className="font-semibold text-foreground">Indian Dental Association (IDA)</span>,{" "}
        <span className="font-semibold text-foreground">American Academy of Implant Dentistry (AAID)</span>
      </>
    ),
  },
  {
    label: "Microscope Dentistry",
    featured: true,
    detail: (
      <>
        Certified in Microscope-Assisted Dentistry (<span className="font-semibold text-aqua-deep">Carl Zeiss</span>)
        for <span className="font-semibold text-aqua-deep">high-precision Root Canal treatment in Kakadeo, Kanpur</span>
      </>
    ),
  },
];

const TREATMENTS = [
  { title: "Dental Implants", desc: "Single, multiple and full-mouth implant rehabilitation with internationally trusted implant systems." },
  { title: "Root Canal Treatment & Endodontics", desc: "Painless, single & multi-sitting root canal treatment in Kakadeo, Kanpur, using rotary endodontics, apex-locator precision, and Carl Zeiss microscope-assisted dentistry for high-precision care." },
  { title: "Ceramic Veneers & Smile Design", desc: "Digital cosmetic dentistry and ceramic veneers planned for a natural, confident smile." },
  { title: "Prosthodontics, Crowns & Bridges", desc: "All-ceramic and zirconia crowns, bridges and fixed prosthetics crafted for strength and natural aesthetics." },
  { title: "Full Mouth Rehabilitation", desc: "Comprehensive restoration of bite, function and smile aesthetics — planned in millimetres." },
  { title: "Conservative Dentistry", desc: "Minimally invasive, tooth-preserving restorative treatments for long-term oral health." },
  { title: "Wisdom Tooth Extraction & Oral Surgery", desc: "Safe, precise extraction and minor oral surgery for complex cases, performed with specialist-level care." },
];

const AWARDS = [
  {
    image: awardClinicalExcellence,
    alt: "Clinical Excellence Award presented to Dr. Asheesh Sawhny at the Rama Group Illuminati Conclave",
    title: "Clinical Excellence Award",
    desc: "Awarded in recognition of outstanding clinical excellence and commitment to advanced patient care.",
  },
  {
    image: awardIdaHonor,
    alt: "Indian Dental Association Kanpur Branch honor plaque presented to Dr. Asheesh Sawhny",
    title: "Indian Dental Association Honor",
    desc: "Honoured by the Indian Dental Association, Kanpur Branch, for academic excellence and contributions to modern dentistry.",
  },
];

export const Route = createFileRoute("/dr-asheesh-sawhny")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/dr-asheesh-sawhny` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/dr-asheesh-sawhny` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Endodontist & Implantologist • Principal"
        title={<>Dr. Asheesh K. <span className="italic text-aqua-deep">Sawhny.</span></>}
        intro={
          <>
            <span className="font-semibold">Dr. Asheesh K. Sawhny</span> is a veteran endodontist and{" "}
            <span className="font-semibold text-aqua-deep">AAID-certified implantologist</span> with{" "}
            <span className="font-bold">21+ years</span> of specialist experience. He serves as the{" "}
            <span className="font-semibold">Principal & Professor</span> at Rama Dental College, Kanpur.
          </>
        }
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] shadow-luxe">
              <img
                src={drA}
                alt={DOC.name}
                style={{ objectPosition: "center 20%" }}
                className="h-[360px] sm:h-[520px] md:h-[640px] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <Card icon={<GraduationCap className="h-5 w-5" />} title="Academic Excellence">
                <p className="text-sm leading-7">
                  <span className="font-semibold">BDS</span> from Dharwad University (1999) · <span className="font-semibold">MDS in Endodontics</span> from KLE Belgaum (2003)
                </p>
              </Card>
              <Card icon={<Award className="h-5 w-5" />} title="Leadership">
                <p className="text-sm leading-7">
                  Leading one of North India's most respected dental institutions — shaping curriculum, clinical training, and academic standards for Kanpur's next generation of dentists.
                </p>
              </Card>
              <Card icon={<ShieldCheck className="h-5 w-5" />} title="Clinical Approach">
                <p className="text-sm leading-7">
                  <span className="font-semibold">Technical precision</span>, <span className="font-semibold">honest diagnosis</span>, and <span className="font-semibold">compassionate concern</span> — built on 21 years of specialist-level patient care.
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 bg-foreground/2.5">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl md:text-5xl">
                About <span className="italic text-aqua-deep">Dr. Asheesh K. Sawhny</span>
              </h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-foreground/75">
                <p>
                  Dr. Asheesh K. Sawhny is one of Kanpur's most accomplished dental specialists — a <span className="font-semibold text-foreground">21-year clinician and academic leader</span>, widely regarded as a leading <span className="font-semibold text-foreground">Endodontist in Kanpur</span>.
                </p>
                <p>
                  His clinical philosophy rests on three pillars: <span className="font-semibold">technical precision</span> honed over two decades of specialist practice, <span className="font-semibold">honest diagnosis</span> that respects every patient's time and trust, and <span className="font-semibold">compassionate concern</span> that puts comfort first — whether it's a routine check-up or a complex Root Canal in Kakadeo, Kanpur.
                </p>
                <p>
                  Dr. Sawhny combines microscope-assisted precision with a teaching mindset — the same academic rigour he instills in dental students at Rama Dental College flows directly into every treatment he delivers at My Dentist, Kanpur.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-3xl border border-aqua-soft/30 bg-gradient-to-r from-aqua-soft/5 to-aqua-deep/5 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-aqua-soft" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 6a3 3 0 013-3h10a1 1 0 0 1 .8 1.6L14.25 8l2.55 2.4a1 1 0 0 1-.8 1.6H6a3 3 0 0 1-3-3v-2zm14 4a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3H6a1 1 0 0 0-.8 1.6l2.55 2.4-2.55 2.4a1 1 0 0 0 .8 1.6h10a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
                <div>
                  <p className="italic text-foreground">
                    "Thank you for the excellent dental care. Your professional expertise, integrity, and compassionate concern for the person on the other end of the drill are most appreciated."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-aqua-soft">— Rekha Dheer, Verified Patient</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 bg-foreground/2.5">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl md:text-5xl">
              Treatments & <span className="italic text-aqua-deep">Expertise</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Clinical Expertise</h3>
                <Stagger className="grid gap-5">
                  {TREATMENTS.map((t) => (
                    <motion.div
                      key={t.title}
                      variants={item}
                      className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft hover:shadow-luxe transition-shadow"
                    >
                      <h4 className="font-display text-xl font-semibold text-foreground">{t.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-foreground/70">{t.desc}</p>
                    </motion.div>
                  ))}
                </Stagger>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Credentials & Memberships</h3>
                <div className="space-y-4">
                  {CREDENTIALS.map((cred) => {
                    const featured = cred.featured ?? cred.label === "Microscope Dentistry";
                    return (
                      <div
                        key={cred.label}
                        className={
                          featured
                            ? "relative rounded-2xl border border-aqua-deep/30 bg-aqua-soft/25 p-4 ring-1 ring-aqua/20"
                            : "rounded-2xl border border-foreground/8 bg-card p-4"
                        }
                      >
                        {featured && (
                          <div className="pill absolute -top-3 right-4 border border-aqua-deep/20 bg-aqua-deep text-white">
                            <Star className="h-3 w-3 fill-white" /> Featured
                          </div>
                        )}
                        <p className="font-bold text-aqua-soft text-sm uppercase tracking-[0.1em]">{cred.label}</p>
                        {cred.achievements ? (
                          <div className="mt-2 divide-y divide-foreground/10">
                            {cred.achievements.map((a) => {
                              const match = a.match(/^([\d,]+K?\+?)\s(.*)$/);
                              return (
                                <div key={a} className="flex items-baseline gap-2 py-2 first:pt-0 last:pb-0">
                                  {match ? (
                                    <>
                                      <span className="font-display text-lg font-bold text-aqua-deep">{match[1]}</span>
                                      <span className="text-sm font-semibold text-foreground">{match[2]}</span>
                                    </>
                                  ) : (
                                    <span className="text-sm font-semibold text-foreground">{a}</span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <p className={featured ? "mt-1 text-base font-medium leading-7 text-foreground" : "mt-1 text-sm leading-7 text-foreground/75"}>
                            {cred.detail}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Recognition
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Awards & <span className="italic text-aqua-deep">Professional Recognition</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Recognized for clinical excellence, academic leadership, advanced endodontic care, and contributions to modern dentistry.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {AWARDS.map((award) => (
              <motion.div
                key={award.title}
                variants={item}
                className="flex h-full flex-col rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft transition-all duration-300 md:hover:-translate-y-1 md:hover:border-aqua/30 md:hover:shadow-luxe"
              >
                <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
                  <img
                    src={award.image}
                    alt={award.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-aqua-deep">{award.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">{award.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-3xl bg-foreground p-8 md:p-10 text-background md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-3xl">Consult Dr. Asheesh K. Sawhny</h3>
                <p className="mt-2 text-sm text-background/70">
                  Book a specialist consultation at MY DENTIST, Kanpur.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                hash="consultation-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90 transition-colors"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/dr-karuna-sawhny"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-background hover:bg-white/10 transition-colors"
                >
                  Meet Dr. Karuna <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">{icon}</span>
        <h3 className="min-w-0 flex-1 font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <div className="mt-4 text-sm leading-7 text-foreground/75">{children}</div>
    </div>
  );
}
