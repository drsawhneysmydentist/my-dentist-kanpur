import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, GraduationCap, ShieldCheck, Award, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, item } from "@/components/Reveal";
import drS from "@/assets/dr-sirjon-mukherji.webp";

const DOC = SITE.doctors[2];
const TITLE = `Dr. Sirjon Mukherji — Oral & Maxillofacial Surgeon & Implantologist | MY DENTIST Kakadeo Kanpur`;
const DESC = `Dr. Sirjon Mukherji is an internationally trained Oral & Maxillofacial Surgeon and Implantologist with 23+ years of experience in advanced implant surgery, facial trauma, reconstructive and craniofacial procedures. Consulting at MY DENTIST, Kakadeo, Kanpur.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: DOC.name,
  medicalSpecialty: ["Oral and Maxillofacial Surgery", "Implantology"],
  jobTitle: "Oral & Maxillofacial Surgeon & Implantologist",
  worksFor: { "@type": "Dentist", name: "MY DENTIST", url: SITE.url },
  alumniOf: ["Calcutta University", "Royal College of Surgeons of Edinburgh"],
  url: `${SITE.url}/dr-sirjon-mukherji`,
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
        <span className="font-semibold text-foreground">Calcutta University</span>
        <span className="text-foreground/50">, 1997</span> —{" "}
        <span className="font-semibold text-foreground">Dr. R. Ahmed Memorial Gold Medal</span>
      </>
    ),
  },
  {
    label: "FDS RCS",
    detail: (
      <>
        <span className="font-semibold text-foreground">Royal College of Surgeons, England</span>
        <span className="text-foreground/50">, 2000</span>
      </>
    ),
  },
  {
    label: "FIBOMS",
    detail: (
      <>
        Fellow, <span className="font-semibold text-foreground">Indian Board of Oral & Maxillofacial Surgery</span> — practicing <span className="font-semibold text-foreground">Oral & Maxillofacial Surgery in Kakadeo, Kanpur</span>
        <span className="text-foreground/50">, 2010</span>
      </>
    ),
  },
  {
    label: "FDS RCS",
    detail: (
      <>
        <span className="font-semibold text-foreground">Royal College of Surgeons, Edinburgh</span>
        <span className="text-foreground/50">, 2018</span>
      </>
    ),
  },
  {
    label: "Experience",
    achievements: ["23+ Years Experience"],
  },
  {
    label: "Professional Positions",
    featured: true,
    detail: (
      <>
        <span className="font-semibold text-aqua-deep">Former Chairman & Director</span> — see full list of positions in the section below
      </>
    ),
  },
];

const POSITIONS = [
  "Former Chairman, Indian Board of Oral & Maxillofacial Surgery",
  "Director, Calcutta Institute of Maxillofacial Surgery & Research",
  "Examining Faculty, Royal College of Surgeons of Edinburgh",
  "Honorary Consultant Maxillofacial Surgeon, Calcutta Medical College",
  "Professor, Oral & Maxillofacial Surgery, Rama University, Kanpur",
  "Consultant Maxillofacial Surgeon, Fortis Hospitals, Kolkata",
];

const TREATMENTS = [
  { title: "Dental Implants", desc: "Advanced implant surgery — from simple to complex cases — planned with surgical precision." },
  { title: "Bone Grafting", desc: "Advanced bone grafting and ridge augmentation to prepare for successful, long-term implant placement." },
  { title: "Facial Trauma Surgery", desc: "Comprehensive management of facial injuries and trauma with a focus on function and aesthetics." },
  { title: "Wisdom Tooth Surgery", desc: "Surgical extraction of impacted and complex wisdom teeth with minimal discomfort." },
  { title: "Oral Pathology", desc: "Diagnosis and surgical management of oral lesions and pathological conditions." },
  { title: "Craniofacial Surgery", desc: "Complex craniofacial procedures drawing on international surgical training and experience." },
  { title: "Head & Neck Surgery", desc: "Surgical management of head and neck conditions requiring specialist maxillofacial expertise." },
  { title: "Oral Cancer Surgery", desc: "Surgical management of oral pathology and oral cancer with a reconstructive, patient-first approach." },
  { title: "Reconstructive & Aesthetic Surgery", desc: "Reconstructive and facial aesthetic surgery restoring both form and function." },
];

export const Route = createFileRoute("/dr-sirjon-mukherji")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/dr-sirjon-mukherji` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/dr-sirjon-mukherji` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Oral & Maxillofacial Surgeon · Implantologist · Internationally Trained"
        title={<>Dr. Sirjon <span className="italic text-aqua-deep">Mukherji.</span></>}
        intro={
          <>
            <span className="font-semibold">Dr. Sirjon Mukherji</span> is an{" "}
            <span className="font-semibold text-aqua-deep">internationally trained Oral & Maxillofacial Surgeon</span> and{" "}
            Implantologist with <span className="font-bold">23+ years</span> of experience in advanced implant surgery,
            facial trauma and complex oral surgical procedures. He is the <span className="font-semibold">former Chairman of the Indian Board of Oral & Maxillofacial Surgery</span>.
          </>
        }
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] shadow-luxe">
              <img src={drS} alt={DOC.name} className="h-[360px] sm:h-[520px] md:h-[640px] w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <Card icon={<GraduationCap className="h-5 w-5" />} title="Academic Excellence">
                <p className="text-sm leading-7">
                  <span className="font-semibold">BDS</span> from Calcutta University (1997), Dr. R. Ahmed Memorial Gold Medal · <span className="font-semibold">FDS RCS England</span> (2000) · <span className="font-semibold">FDS RCS Edinburgh</span> (2018) · <span className="font-semibold">FIBOMS</span> (2010)
                </p>
              </Card>
              <Card icon={<Award className="h-5 w-5" />} title="Leadership">
                <p className="text-sm leading-7">
                  Held senior academic and institutional leadership roles across India's oral & maxillofacial surgery community — see full list of positions below.
                </p>
              </Card>
              <Card icon={<ShieldCheck className="h-5 w-5" />} title="Clinical Approach">
                <p className="text-sm leading-7">
                  <span className="font-semibold">Surgical precision</span> combined with a{" "}
                  <span className="font-semibold">reconstructive, patient-first approach</span> to complex implant and maxillofacial cases.
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
                About <span className="italic text-aqua-deep">Dr. Sirjon Mukherji</span>
              </h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-foreground/75">
                <p>
                  Dr. Sirjon Mukherji brings decades of surgical expertise as a leading <span className="font-semibold">Maxillofacial Surgeon in Kanpur</span>, known for advanced oral surgery, facial trauma care, reconstructive surgery and complex implantology.
                </p>
                <p>
                  His approach blends rigorous international surgical training with a <span className="font-semibold">reconstructive, patient-first philosophy</span> — treating every case, from routine <span className="font-semibold">Oral & Maxillofacial Surgery in Kakadeo, Kanpur</span> to complex craniofacial reconstruction, with the same meticulous care.
                </p>
                <p>
                  Beyond his clinical practice, Dr. Mukherji has held several respected academic and institutional leadership positions across India and internationally — see the full list of <span className="font-semibold">Professional Positions</span> below.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
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

                <h3 className="font-display text-2xl font-semibold text-foreground mb-6 mt-10">Professional Positions</h3>
                <ul className="space-y-3">
                  {POSITIONS.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-aqua-soft mt-2 flex-shrink-0" />
                      <span className="text-sm leading-7 text-foreground/75">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Credentials & Memberships</h3>
                <div className="space-y-4">
                  {CREDENTIALS.map((cred, i) => {
                    const featured = cred.featured ?? false;
                    return (
                      <div
                        key={`${cred.label}-${i}`}
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
            <div className="flex flex-col gap-8 rounded-3xl bg-foreground p-8 md:p-10 text-background md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-3xl">Consult Dr. Sirjon Mukherji</h3>
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

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">{icon}</span>
        <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="mt-4 text-sm leading-7 text-foreground/75">{children}</div>
    </div>
  );
}
