import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

// ── Before & After: Orthodontics ─────────────────────────────────────────────
import baOrtho1          from "@/assets/ba-orthodontics-1.webp";
import baOrtho2          from "@/assets/ba-orthodontics-2.webp";
import baOrtho3          from "@/assets/ba-orthodontics-3.webp";
import baOrtho4          from "@/assets/ba-orthodontics-4.webp";
import baOrthoB          from "@/assets/ba-orthodontics-braces.webp";

// ── Before & After: Smile Makeover ───────────────────────────────────────────
import baSmile           from "@/assets/ba-general-1.webp";
import baProstho         from "@/assets/ba-prosthodontics.webp";
import baRestorative     from "@/assets/ba-restorative.webp";

// ── Before & After: Teeth Whitening ──────────────────────────────────────────
import baWhitening       from "@/assets/ba-teeth-whitening.webp";

// ── Before & After: Gum Treatment ────────────────────────────────────────────
import baGum1            from "@/assets/ba-gum-treatment-1.webp";
import baGum2            from "@/assets/ba-gum-treatment-2.webp";

// ── Before & After: Implants & RCT ───────────────────────────────────────────
import baImplants        from "@/assets/ba-implants.webp";
import baRct1            from "@/assets/ba-rct-1.webp";
import baRct2            from "@/assets/ba-rct-2.webp";

// ── Before & After: General ──────────────────────────────────────────────────
import baGen2            from "@/assets/ba-general-2.webp";
import baGen3            from "@/assets/ba-general-3.webp";

// ── Before & After: Paediatric ───────────────────────────────────────────────
import baPaediatric      from "@/assets/ba-paediatric.webp";

// ── Clinic: Exterior & Interior ──────────────────────────────────────────────
import exteriorSign      from "@/assets/clinic-exterior-sign.webp";
import exterior1         from "@/assets/clinic-exterior-1.webp";
import exterior2         from "@/assets/clinic-exterior-2.webp";
import reception         from "@/assets/clinic-reception.webp";
import waitingArea       from "@/assets/clinic-waiting-area.webp";

// ── Clinic: Treatment Rooms & Technology ─────────────────────────────────────
import treatmentChair    from "@/assets/clinic-interior-new.webp";
import cercecSuite       from "@/assets/treatment-room-cerec-suite.webp";
import cercecMilling     from "@/assets/cerec-speedio-milling.webp";
import cercecScanner     from "@/assets/cerec-primescan-scanner.webp";

// ── Doctors: Portraits ────────────────────────────────────────────────────────
import drAFormal         from "@/assets/dr-asheesh-formal-portrait.webp";
import drKClinical       from "@/assets/dr-karuna-clinical-portrait.webp";
import drKCerec          from "@/assets/dr-karuna-cerec-suite.webp";
import drBothDentsply    from "@/assets/dr-asheesh-karuna-dentsply.webp";
import drKTeam           from "@/assets/dr-karuna-clinic-team.webp";

// ── Doctors: Awards & Academic ────────────────────────────────────────────────
import drKAlign          from "@/assets/dr-karuna-align-certificate.webp";
import drKSciForum       from "@/assets/dr-karuna-scientific-forum.webp";
import drARootCanalDay   from "@/assets/dr-asheesh-root-canal-day.webp";
import drAMdsOrientation from "@/assets/dr-asheesh-mds-orientation.webp";
import drACmYogiConvo    from "@/assets/dr-asheesh-cm-yogi-convocation.webp";

// ── Distinguished Patients & Notable Visitors ─────────────────────────────────
import ptPadmesh         from "@/assets/patient-padmesh-dubey.webp";
import ptShivBeria       from "@/assets/patient-shiv-kumar-beria.webp";
import ptIpsAtul         from "@/assets/patient-ips-atul-srivastav.webp";
import ptMpCerec         from "@/assets/patient-mp-ramesh-awasthi-cerec.webp";
import ptMpChair         from "@/assets/patient-mp-ramesh-awasthi-chair.webp";
import ptJudgeMishra     from "@/assets/patient-judge-suraj-mishra.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery · My Dentist Kanpur" },
      {
        name: "description",
        content:
          "Before and after results for orthodontics, smile makeover, teeth whitening, dental implants, root canal, and gum treatment at My Dentist Kakadeo Kanpur — Dr Asheesh Sawhny and Dr Karuna Singh Sawhny.",
      },
      { property: "og:title", content: "Before & After Gallery · My Dentist Kanpur" },
      { property: "og:url", content: `${SITE.url}/gallery` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/gallery` }],
  }),
  component: GalleryPage,
});

type Tile = { src: string; alt: string; tag: string; span?: string; objectPosition?: string };

// ── Section A: Our Specialists ────────────────────────────────────────────────
const SPECIALIST_TILES: Tile[] = [
  {
    src: drAFormal,
    alt: "Dr. Asheesh K. Sawhny — MDS Endodontist and AAID-Certified Implantologist, My Dentist Kanpur",
    tag: "Our Specialist",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "center 15%",
  },
  {
    src: drKClinical,
    alt: "Dr. Karuna Singh Sawhny — MDS Orthodontist at My Dentist Kanpur with Zeiss dental operating microscope",
    tag: "Our Specialist",
    objectPosition: "center 20%",
  },
  {
    src: drKCerec,
    alt: "Dr. Karuna Singh Sawhny in the CEREC digital dentistry suite at My Dentist Kakadeo",
    tag: "Our Specialist",
    objectPosition: "center 20%",
  },
  {
    src: drBothDentsply,
    alt: "Dr. Asheesh Sawhny and Dr. Karuna Singh Sawhny with Dentsply Sirona CEREC system at My Dentist Kanpur",
    tag: "Our Team",
    span: "md:col-span-2",
    objectPosition: "center 10%",
  },
  {
    src: drKTeam,
    alt: "Dr. Karuna Singh Sawhny with visiting colleagues inside My Dentist clinic, Kakadeo Kanpur",
    tag: "Our Team",
    objectPosition: "center 20%",
  },
];

// ── Section B: Awards & Academic ─────────────────────────────────────────────
const AWARD_TILES: Tile[] = [
  {
    src: drARootCanalDay,
    alt: "Dr. Asheesh K. Sawhny presenting certificate at Root Canal Appreciation Day, Rama University Kanpur",
    tag: "Academic",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "center 15%",
  },
  {
    src: drAMdsOrientation,
    alt: "Dr. Asheesh K. Sawhny delivering keynote at MDS Orientation Program, Rama Dental College Kanpur",
    tag: "Academic",
  },
  {
    src: drKAlign,
    alt: "Dr. Karuna Singh Sawhny receiving Invisalign Certificate of Attendance at Align Technology conference",
    tag: "Recognition",
  },
  {
    src: drKSciForum,
    alt: "Dr. Karuna Singh Sawhny receiving Scientific Forum certificate of excellence",
    tag: "Recognition",
  },
  {
    src: drACmYogiConvo,
    alt: "Dr. Asheesh K. Sawhny with Uttar Pradesh Chief Minister Yogi Adityanath at Rama University convocation ceremony, Kanpur",
    tag: "Academic",
    span: "md:col-span-2",
    objectPosition: "center 30%",
  },
];

// ── Section C: Distinguished Patients ────────────────────────────────────────
const PATIENT_TILES: Tile[] = [
  {
    src: ptMpCerec,
    alt: "Dr. Asheesh K. Sawhny demonstrating CEREC digital scanner to MP Ramesh Awasthi at My Dentist Kanpur",
    tag: "Ramesh Awasthi · MP, Kanpur",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "center 20%",
  },
  {
    src: ptMpChair,
    alt: "MP Ramesh Awasthi with Dr. Asheesh Sawhny at My Dentist Kanpur — Zeiss microscope treatment room",
    tag: "Ramesh Awasthi · MP, Kanpur",
  },
  {
    src: ptShivBeria,
    alt: "Former Cabinet Minister Shiv Kumar Beria with Dr. Asheesh Sawhny at My Dentist Kanpur",
    tag: "Shiv Kumar Beria · Former UP Cabinet Minister",
  },
  {
    src: ptPadmesh,
    alt: "Renowned astrologer Padmesh Dubey with Dr. Asheesh Sawhny at My Dentist Kakadeo Kanpur",
    tag: "Pt. K. A. Dubey \"Padmesh\" · Astrologer",
    objectPosition: "center 20%",
  },
  {
    src: ptIpsAtul,
    alt: "IPS Atul Kumar Srivastava, DCP Kanpur, with Dr. Asheesh Sawhny at My Dentist Kakadeo",
    tag: "Atul Kumar Srivastava, IPS · DCP, Kanpur",
    span: "md:col-span-2",
    objectPosition: "center 10%",
  },
  {
    src: ptJudgeMishra,
    alt: "Chief Judicial Magistrate Judge Suraj Mishra with the team at My Dentist Kakadeo Kanpur",
    tag: "CHIEF JUDICIAL MAGISTRATE JUDGE SURAJ MISHRA",
    objectPosition: "center 15%",
  },
];

// ── Section D: Clinic & Technology ───────────────────────────────────────────
const CLINIC_TILES: Tile[] = [
  {
    src: cercecSuite,
    alt: "CEREC digital dentistry suite with intraoral scanner, milling unit and treatment chair at My Dentist Kanpur",
    tag: "Digital Dentistry",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: treatmentChair,
    alt: "Modern dental treatment room with advanced dental unit at My Dentist Kanpur",
    tag: "Treatment Room",
  },
  {
    src: cercecScanner,
    alt: "CEREC Primescan intraoral scanner and milling unit for same-day ceramic restorations at My Dentist Kanpur",
    tag: "CEREC Technology",
  },
  {
    src: cercecMilling,
    alt: "CEREC Speedio milling unit for precision same-day crowns at My Dentist Kanpur",
    tag: "CEREC Technology",
  },
  {
    src: exteriorSign,
    alt: "My Dentist — Multi Superspeciality Dental Clinic landmark signage at Kakadeo Kanpur",
    tag: "Clinic Exterior",
    span: "md:col-span-2",
  },
  {
    src: reception,
    alt: "My Dentist reception desk and patient waiting lounge, Kakadeo Kanpur",
    tag: "Reception",
  },
  {
    src: waitingArea,
    alt: "Comfortable patient waiting area at My Dentist dental clinic, Kakadeo Kanpur",
    tag: "Waiting Area",
  },
  {
    src: exterior1,
    alt: "My Dentist clinic entrance with Dr. Asheesh Sawhny and Dr. Karuna Singh Sawhny nameboards, Kakadeo Kanpur",
    tag: "Clinic Entrance",
  },
  {
    src: exterior2,
    alt: "My Dentist dental clinic exterior street view, Kakadeo Kanpur",
    tag: "Clinic Entrance",
  },
];

// ── Section E: Before & After — Orthodontics & Braces ────────────────────────
const BA_ORTHO_TILES: Tile[] = [
  {
    src: baOrtho1,
    alt: "Before and after braces treatment — severely crowded teeth corrected by Dr. Karuna Singh Sawhny, Orthodontist, My Dentist Kanpur",
    tag: "Orthodontics",
    span: "md:col-span-2",
  },
  {
    src: baOrtho2,
    alt: "Orthodontic before and after — crooked teeth aligned with braces by Dr. Karuna Singh Sawhny at My Dentist Kakadeo",
    tag: "Orthodontics",
  },
  {
    src: baOrtho3,
    alt: "Before and after smile transformation — braces treatment result by Dr. Karuna Singh Sawhny, My Dentist Kanpur",
    tag: "Orthodontics",
  },
  {
    src: baOrtho4,
    alt: "Orthodontic case before and after — teeth alignment result by Dr. Karuna Singh Sawhny at My Dentist Kakadeo Kanpur",
    tag: "Orthodontics",
    span: "md:col-span-2",
  },
  {
    src: baOrthoB,
    alt: "Metal braces close-up — orthodontic treatment with ceramic and metal brackets at My Dentist Kanpur",
    tag: "Braces",
    span: "md:col-span-2",
  },
];

// ── Section F: Before & After — Smile Makeover & Prosthodontics ──────────────
const BA_SMILE_TILES: Tile[] = [
  {
    src: baSmile,
    alt: "Complete smile makeover before and after — veneers and crowns by Dr. Karuna Singh Sawhny at My Dentist Kanpur",
    tag: "Smile Makeover",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: baProstho,
    alt: "Prosthodontic smile restoration before and after — crowns and bridges at My Dentist Kakadeo Kanpur",
    tag: "Prosthodontics",
    span: "md:col-span-2",
  },
  {
    src: baRestorative,
    alt: "Restorative dentistry before and after — missing tooth replaced with bridge at My Dentist Kanpur",
    tag: "Restorative",
  },
  {
    src: baRct2,
    alt: "Smile close-up before and after cosmetic treatment — My Dentist Kakadeo Kanpur",
    tag: "Smile Makeover",
  },
];

// ── Section G: Before & After — Teeth Whitening & Gum Treatment ──────────────
const BA_HYGIENE_TILES: Tile[] = [
  {
    src: baWhitening,
    alt: "Teeth whitening before and after — professional in-office whitening result at My Dentist Kanpur",
    tag: "Teeth Whitening",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: baGen2,
    alt: "Teeth whitening before and after result — brighter smile at My Dentist Kakadeo Kanpur",
    tag: "Teeth Whitening",
  },
  {
    src: baGen3,
    alt: "Professional teeth whitening before and after — My Dentist Kakadeo Kanpur",
    tag: "Teeth Whitening",
  },
  {
    src: baGum1,
    alt: "Gum treatment before and after — bleeding inflamed gums treated at My Dentist Kakadeo Kanpur",
    tag: "Gum Treatment",
  },
  {
    src: baGum2,
    alt: "Periodontics before and after — healthy gums restored after scaling and root planing at My Dentist Kanpur",
    tag: "Periodontics",
  },
];

// ── Section H: Before & After — Implants, RCT & Paediatric ──────────────────
const BA_ADVANCED_TILES: Tile[] = [
  {
    src: baImplants,
    alt: "Dental implant before and after — missing teeth replaced with titanium implants at My Dentist Naveen Nagar Kanpur",
    tag: "Dental Implants",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: baRct1,
    alt: "Root canal treatment before and after — pain-free RCT at My Dentist Kakadeo Kanpur",
    tag: "Root Canal",
  },
  {
    src: baPaediatric,
    alt: "Paediatric dentistry case — neonatal natal teeth management at My Dentist Kanpur by Dr. Karuna Singh Sawhny",
    tag: "Paediatric",
  },
];

const SECTIONS = [
  { id: "specialists", label: "Our Specialists",                            tiles: SPECIALIST_TILES  },
  { id: "recognition", label: "Awards & Academic",                         tiles: AWARD_TILES       },
  { id: "patients",    label: "Distinguished Patients",                     tiles: PATIENT_TILES     },
  { id: "clinic",      label: "Clinic & Technology",                       tiles: CLINIC_TILES      },
  { id: "ba-ortho",    label: "Before & After: Orthodontics",              tiles: BA_ORTHO_TILES    },
  { id: "ba-smile",    label: "Before & After: Smile Makeover",            tiles: BA_SMILE_TILES    },
  { id: "ba-hygiene",  label: "Before & After: Whitening & Gum Treatment", tiles: BA_HYGIENE_TILES  },
  { id: "ba-advanced", label: "Before & After: Implants & RCT",            tiles: BA_ADVANCED_TILES },
];

function GalleryPage() {
  const [open,      setOpen]      = useState<Tile | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Inside the clinic"
        title={
          <>
            Real results, <span className="italic text-aqua-deep">real smiles.</span>
          </>
        }
        intro="Before & after transformations, our specialists, clinic spaces, technology, and the patients who trust My Dentist Kakadeo."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          {/* ── Filter tabs ──────────────────────────────────────────────── */}
          <div className="mb-10 flex flex-wrap gap-3">
            {[{ id: "all", label: "All" }, ...SECTIONS].map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === s.id
                    ? "border-aqua-deep bg-aqua-deep text-white shadow-soft"
                    : "border-foreground/10 bg-white text-foreground/70 hover:border-aqua hover:text-aqua-deep"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* ── Tile grid ─────────────────────────────────────────────────── */}
          {activeTab === "all" ? (
            <div className="space-y-16">
              {SECTIONS.map((sec) => (
                <div key={sec.id}>
                  <h2 className="mb-6 font-display text-2xl font-semibold text-foreground/80">
                    {sec.label}
                  </h2>
                  <TileGrid tiles={sec.tiles} onOpen={setOpen} />
                </div>
              ))}
            </div>
          ) : (
            <TileGrid
              tiles={SECTIONS.find((s) => s.id === activeTab)?.tiles ?? []}
              onOpen={setOpen}
            />
          )}
        </div>
      </section>

      {/* ── Before & After Cases — single source of truth, shared with homepage ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Before &amp; After Cases
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-4xl md:text-5xl">
              Every case, <span className="italic text-aqua-deep">one gallery.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-6 backdrop-blur-xl"
          >
            <button
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white text-foreground"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={open.src}
              alt={open.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-luxe"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Reusable tile grid ──────────────────────────────────────────────────────── */
function TileGrid({
  tiles,
  onOpen,
}: {
  tiles: Tile[];
  onOpen: (t: Tile) => void;
}) {
  return (
    <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {tiles.map((t, i) => (
        <Reveal key={`${t.src}-${i}`} delay={(i % 4) * 0.05}>
          <motion.button
            whileHover={{ scale: 1.01 }}
            onClick={() => onOpen(t)}
            className={`group relative h-full w-full overflow-hidden rounded-2xl bg-foreground/5 shadow-soft transition-shadow hover:shadow-luxe ${t.span ?? ""}`}
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              style={{ objectPosition: t.objectPosition ?? "center" }}
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            {t.tag === "CEREC Technology" ? (
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-aqua-deep px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white shadow-soft">
                <Star className="h-3 w-3 fill-white" /> {t.tag}
              </span>
            ) : (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
                {t.tag}
              </span>
            )}
          </motion.button>
        </Reveal>
      ))}
    </div>
  );
}
