import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, GraduationCap, ShieldCheck, Stethoscope, Award, Smile, Star, Check, ZoomIn, X, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, item } from "@/components/Reveal";
import drK from "@/assets/dr-karuna.webp";
import karunaAlignCertificate from "@/assets/dr-karuna-align-certificate.webp";
import iconInvisalign from "@/assets/invisalign-official-logo.webp";

const DOC = SITE.doctors[1];
const TITLE = `Dr. Karuna Singh Sawhny — MDS Orthodontist Kanpur | Best Braces Specialist | MY DENTIST Kakadeo`;
const DESC = `Dr. Karuna Singh Sawhny is Kanpur's top MDS Orthodontist, Professor at Rama Dental College, and Indian Orthodontic Society (IOS) member with 14+ years of specialist practice. Best orthodontist in Kanpur for braces, clear aligners and dentofacial orthopaedics at MY DENTIST, Kakadeo.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: DOC.name,
  medicalSpecialty: ["Dentistry", "Orthodontics", "Dentofacial Orthopaedics"],
  jobTitle: "Professor, Rama Dental College",
  worksFor: { "@type": "Dentist", name: "MY DENTIST", url: SITE.url },
  alumniOf: ["Rama Dental College"],
  url: `${SITE.url}/dr-karuna-sawhny`,
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
}[] = [
  {
    label: "BDS",
    detail: (
      <>
        <span className="font-semibold text-foreground">Rama Dental College</span>
        <span className="text-foreground/50">, 2008</span>
      </>
    ),
  },
  {
    label: "MDS",
    detail: (
      <>
        <span className="font-semibold text-foreground">Orthodontics & Dentofacial Orthopaedics</span>,{" "}
        <span className="font-semibold text-foreground">Rama Dental College</span>
        <span className="text-foreground/50">, 2012</span>
      </>
    ),
  },
  {
    label: "Professor",
    detail: (
      <>
        Department of Orthodontics, <span className="font-semibold text-foreground">Rama Dental College</span>,
        Hospital & Research Centre, Kanpur
      </>
    ),
  },
  {
    label: "Experience",
    achievements: ["14+ Years Experience", "20K+ Patients Treated", "Invisalign Certified"],
  },
  {
    label: "Memberships",
    detail: (
      <>
        <span className="font-semibold text-foreground">Indian Dental Association (IDA)</span>,{" "}
        <span className="font-semibold text-foreground">Indian Orthodontic Society (IOS)</span>
      </>
    ),
  },
];

const TREATMENTS = [
  { title: "Orthodontics & Braces", desc: "Metal, ceramic and self-ligating braces with cutting-edge techniques for precise, comfortable tooth movement." },
  { title: "Invisalign & Clear Aligners", desc: "Discreet, effective clear aligner treatment — including Invisalign — for children, teenagers and adults." },
  { title: "Dentofacial Orthopaedics", desc: "Myofunctional appliances and growth modification for children and teenagers — shaping healthier bites from the start." },
  { title: "TMJ & Bite Care", desc: "TMJ pain management and space maintainers to protect developing bites and relieve jaw discomfort." },
  { title: "Smile Design", desc: "Personalized smile planning that balances facial aesthetics, bite function, and long-term stability." },
  { title: "Early & Interceptive Orthodontics", desc: "Early diagnosis and interceptive treatment for children, including space maintainers for early tooth loss." },
  { title: "Bite Correction & Retention Care", desc: "Precise jaw alignment and bite correction, supported by structured retention and post-treatment care for lasting results." },
];

export const Route = createFileRoute("/dr-karuna-sawhny")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/dr-karuna-sawhny` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/dr-karuna-sawhny` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Orthodontist & Invisalign Provider • Dentofacial Specialist • Professor"
        title={<>Dr. Karuna Singh <span className="italic text-aqua-deep">Sawhny.</span></>}
        intro={
          <>
            <span className="font-semibold">Dr. Karuna Singh Sawhny</span> is a{" "}
            <span className="font-semibold text-aqua-deep">specialist orthodontist</span> with{" "}
            <span className="font-bold">14+ years</span> of clinical practice. She is a{" "}
            <span className="font-semibold">Professor at Rama Dental College</span>, Kanpur.
          </>
        }
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe">
              <img
                src={drK}
                alt={DOC.name}
                style={{ objectPosition: "center 20%" }}
                className="h-[360px] sm:h-[520px] md:h-[640px] w-full object-cover"
              />
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-soft sm:px-3.5 sm:py-2 sm:text-xs">
                  <img src={iconInvisalign} alt="Invisalign" className="h-4 w-4 shrink-0 object-contain sm:h-[18px] sm:w-[18px]" />
                  Invisalign Provider
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <Card icon={<GraduationCap className="h-5 w-5" />} title="Academic Excellence">
                <p className="text-sm leading-7">
                  <span className="font-semibold">BDS</span> from Rama Dental College (2008) · <span className="font-semibold">MDS in Orthodontics & Dentofacial Orthopaedics</span> from Rama Dental College (2012)
                </p>
              </Card>
              <Card icon={<Award className="h-5 w-5" />} title="Leadership">
                <p className="text-sm leading-7">
                  Shaping the next generation of orthodontists through academic teaching and clinical mentorship in Kanpur.
                </p>
              </Card>
              <Card
                icon={<img src={iconInvisalign} alt="Invisalign" className="h-8 w-8 object-contain" />}
                title="Invisalign Provider Since 10 Years"
                featured
              >
                <p className="text-sm leading-7">
                  Trusted <span className="font-semibold">Invisalign Provider</span> with over <span className="font-semibold">10 years of experience</span> in clear aligner treatment for children, teenagers, and adults in Kanpur. Full training and certification details below.
                </p>
              </Card>
              <Card icon={<ShieldCheck className="h-5 w-5" />} title="Clinical Approach">
                <p className="text-sm leading-7">
                  <span className="font-semibold">Personalized smile design</span>, <span className="font-semibold">gentle technique</span>, and <span className="font-semibold">patient-centered care</span> — especially skilled with children and nervous patients.
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
                About <span className="italic text-aqua-deep">Dr. Karuna Singh Sawhny</span>
              </h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-foreground/75">
                <p>
                  Dr. Karuna Singh Sawhny is a <span className="font-semibold text-foreground">specialist-qualified orthodontist</span>, widely regarded as a trusted <span className="font-semibold text-foreground">Orthodontist in Kanpur</span> for braces, clear aligners and dentofacial orthopaedics.
                </p>
                <p>
                  Her dual role as a clinical practitioner and academic faculty member reflects a depth of expertise that goes far beyond routine orthodontic practice — from traditional braces to <span className="font-semibold">Invisalign in Kakadeo, Kanpur</span>.
                </p>
                <p>
                  With <span className="font-semibold">14+ years of clinical experience</span>, Dr. Karuna brings a nuanced understanding of <span className="font-semibold">facial aesthetics</span> to every case — helping children, teenagers, and adults in Kanpur achieve healthier bites and more confident smiles. She is particularly known for her gentle approach with young patients and her skill in early interceptive orthodontics.
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
                    "Earlier my teeth were out of alignment but now they are perfect — the doctor was very caring and told me all the precautions to take."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-aqua-soft">— Verified Patient (Practo)</p>
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
                  {CREDENTIALS.map((cred) => (
                    <div key={cred.label} className="rounded-2xl border border-foreground/8 bg-card p-4">
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
                        <p className="mt-1 text-sm leading-7 text-foreground/75">{cred.detail}</p>
                      )}
                    </div>
                  ))}
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
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Official Invisalign Training & Certification
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Certified <span className="italic text-aqua-deep">Invisalign Provider</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-aqua-deep/25 bg-gradient-to-br from-aqua-soft/15 to-white p-7 shadow-soft ring-1 ring-aqua/15 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">Official Invisalign Training</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/75">
                  Dr. Karuna Singh Sawhny completed her <span className="font-semibold text-foreground">Invisalign Training Course in Kochi, India</span>, reinforcing her expertise in clear aligner treatment and smile correction — and supporting her <span className="font-semibold text-foreground">10+ years of Invisalign experience</span> as a trusted provider at MY DENTIST.
                </p>
                <ul className="mt-5 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-deep" />
                    <span className="text-sm text-foreground/80">Official Invisalign Training Completed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-deep" />
                    <span className="text-sm text-foreground/80">Certified Invisalign Provider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-deep" />
                    <span className="text-sm text-foreground/80">Clear Aligner Expertise</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <CertificateCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-3xl bg-foreground p-8 md:p-10 text-background md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-3xl">Ready for your smile transformation?</h3>
                <p className="mt-2 text-sm text-background/70">
                  Book a consultation with Dr. Karuna Singh Sawhny at MY DENTIST, Kanpur.
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
                  to="/dr-asheesh-sawhny"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-background hover:bg-white/10 transition-colors"
                >
                  Meet Dr. Asheesh <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CertificateCard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="rounded-3xl border border-aqua-deep/20 bg-gradient-to-b from-white to-aqua-soft/10 p-5 shadow-soft ring-1 ring-aqua/10 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-aqua-soft/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-aqua-deep">
            <BadgeCheck className="h-3.5 w-3.5" /> Official Invisalign Certificate
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Kochi, India · 2016
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View Invisalign certificate in full size"
          className="group relative mt-4 block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-foreground/10 bg-bone"
        >
          <img
            src={karunaAlignCertificate}
            alt="Invisalign Certificate of Attendance — Dr. Karuna Singh Sawhny, Invisalign Training Course, Kochi, India"
            loading="lazy"
            width={911}
            height={656}
            className="h-64 w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:h-72 md:h-80"
          />
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
          <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
            <ZoomIn className="h-4 w-4" />
          </span>
        </button>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-foreground/8 pt-4">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Invisalign Training Course · Kochi, India
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-aqua-deep/20 bg-white px-3 py-1 text-[11px] font-semibold text-aqua-deep">
            <Star className="h-3 w-3 fill-aqua-deep" /> Official Invisalign Training Completed
          </span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Invisalign certificate — Dr. Karuna Singh Sawhny"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 md:p-10"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close certificate view"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={karunaAlignCertificate}
              alt="Invisalign Certificate of Attendance — Dr. Karuna Singh Sawhny"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Card({
  icon,
  title,
  children,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "rounded-3xl border border-aqua-deep/25 bg-gradient-to-br from-aqua-soft/15 to-white p-7 shadow-soft ring-1 ring-aqua/15"
          : "rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
      }
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">{icon}</span>
        <h3 className="min-w-0 flex-1 font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <div className="mt-4 text-sm leading-7 text-foreground/75">{children}</div>
    </div>
  );
}
