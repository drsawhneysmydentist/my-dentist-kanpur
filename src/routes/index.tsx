import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { lazy, Suspense, useRef, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Star,
  ArrowRight,
  Shield,
  Sparkles,
  Heart,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";
import heroDesktop from "@/assets/hero-dental-desktop.webp";
import heroMobile from "@/assets/hero-dental-mobile.webp";
import clinic from "@/assets/clinic-interior.webp";
import smile from "@/assets/smile-portrait.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g5 from "@/assets/gallery-5.webp";
import drA from "@/assets/dr-asheesh.webp";
import drK from "@/assets/dr-karuna.webp";
import { AboutVideoCard } from "@/components/AboutVideoCard";
import { DENTAL_ICONS } from "@/components/icons/dental-icons";

// Below-the-fold, homepage-only carousels — code-split so their JS (embla-style
// drag engine + framer-motion usage) isn't in the initial bundle. Same markup,
// same visuals, just loaded on demand once React reaches these sections.
const ImageCarousel = lazy(() =>
  import("@/components/ImageCarousel").then((m) => ({ default: m.ImageCarousel })),
);
const BeforeAfterCarousel = lazy(() =>
  import("@/components/BeforeAfterCarousel").then((m) => ({ default: m.BeforeAfterCarousel })),
);
import iconMicroscope from "@/assets/icon-microscope.webp";
import iconCerec from "@/assets/icon-cerec.webp";
import iconCrown from "@/assets/icon-crown.webp";
import invisalignOfficialLogo from "@/assets/invisalign-official-logo.webp";
import invisalignProviderBadge from "@/assets/invisalign-official-logo.webp";
import iconImplant from "@/assets/icon-implant.webp";
import iconSameDay from "@/assets/icon-sameday.webp";
import iconVeneer from "@/assets/icon-veneer.webp";
import iconZoom from "@/assets/icon-zoom.webp";
import iconSmileDesign from "@/assets/icon-smile-design.webp";

const PAGE_TITLE =
  "Best Dentist in Kanpur | MDS Specialists | My Dentist";
const PAGE_DESC =
  "Best dental clinic in Kanpur - My Dentist, Kakadeo. MDS specialists: painless RCT, implants, braces, teeth whitening & emergency care. Open evenings & Sundays.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  name: "MY DENTIST",
  alternateName: ["My Dentist Kakadeo", "My Dentist Kanpur", "Dr Sawhney's My Dentist"],
  description: PAGE_DESC,
  url: "https://mydentistkanpur.com",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "₹₹",
  image: "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "117/L-1/455-A, Naveen Nagar, Kakadeo",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208025",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Place", name: "Kakadeo, Kanpur" },
    { "@type": "Place", name: "Naveen Nagar, Kanpur" },
    { "@type": "Place", name: "Pandu Nagar, Kanpur" },
    { "@type": "Place", name: "Sharda Nagar, Kanpur" },
    { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
    { "@type": "Place", name: "Sarvodaya Nagar, Kanpur" },
    { "@type": "Place", name: "Kaushalpuri, Kanpur" },
    { "@type": "Place", name: "Lajpat Nagar, Kanpur" },
    { "@type": "Place", name: "RS Puram, Kanpur" },
    { "@type": "Place", name: "Civil Lines, Kanpur" },
  ],
  geo: { "@type": "GeoCoordinates", latitude: 26.4499, longitude: 80.3319 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:00",
      closes: "21:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "14:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: 226,
  },
  medicalSpecialty: [
    "Endodontics",
    "Orthodontics",
    "Prosthodontics",
    "Oral and Maxillofacial Surgery",
    "Periodontics",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Implantology",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services in Kanpur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Root Canal Treatment Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Painless RCT Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Single Visit Root Canal Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dental Implants Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Braces in Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Clear Aligners Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Teeth Whitening Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Smile Design Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dental Crowns Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Zirconia Crown Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Emergency Dentist Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Pediatric Dentist Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Gum Treatment Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Scaling Polishing Kanpur" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Wisdom Tooth Removal Kanpur" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SITE.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "best dentist in Kanpur, dentist in Kakadeo, dental clinic in Kanpur, dentist near me Kanpur, dental implants Kanpur, root canal treatment Kanpur, painless RCT Kanpur, single visit root canal Kanpur, braces in Kanpur, orthodontist Kanpur, teeth whitening Kanpur, smile design Kanpur, cosmetic dentist Kanpur, emergency dentist Kanpur, pediatric dentist Kanpur, gum treatment Kanpur, zirconia crown Kanpur, American certified implantologist Kanpur, MDS dentist Kakadeo, best dental clinic Kakadeo",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <ImageCarousel />
      </Suspense>
      <Highlights />
      <AboutSection />
      <TrustBar />
      <DoctorsPreview />
      <Suspense fallback={null}>
        <BeforeAfterCarousel />
      </Suspense>
      <WhyUs />
      <ServicesPreview />
      <ProcessSection />
      <Testimonials />
      <FaqPreview />
      <LocationCoverage />
      <CtaStrip />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden px-3 pt-24 md:px-5">
      <div className="relative min-h-[640px] h-auto w-full overflow-hidden rounded-[2rem] md:h-[92vh] md:min-h-0 md:rounded-[2.5rem]">
        <motion.img
          src={heroDesktop}
          alt="Best dental clinic in Kakadeo Kanpur — My Dentist, specialist-led care by MDS doctors"
          style={{ y, scale, objectPosition: "center 35%" }}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          fetchPriority="high"
          width={1672}
          height={941}
        />
        <motion.img
          src={heroMobile}
          alt="Best dental clinic in Kakadeo Kanpur — My Dentist, specialist-led care by MDS doctors"
          style={{ y, scale, objectPosition: "center 30%" }}
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          fetchPriority="high"
          width={1024}
          height={1536}
        />
        <motion.div
          style={{ opacity: fade }}
          className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/40"
        />

        <FloatPill className="left-6 top-8 md:left-10 md:top-10" delay={0.6}>
          <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" />
          <span className="font-bold">Super Specialty</span> Dental Clinic
        </FloatPill>

        <FloatPill className="right-6 top-8 hidden md:flex md:right-10 md:top-10" delay={0.7}>
          <Phone className="h-3.5 w-3.5" /> {SITE.phone}
        </FloatPill>

        <FloatPill className="right-6 top-24 hidden md:flex md:right-10 md:top-28" delay={0.9}>
          <Star className="h-3.5 w-3.5 fill-aqua text-aqua" /> <span className="font-bold text-aqua-deep">{SITE.rating} ★</span> Google · <span className="font-bold">{SITE.reviews}</span> reviews
        </FloatPill>

        <div className="relative z-10 flex h-full min-h-[640px] flex-col justify-end p-6 pt-24 md:min-h-0 md:justify-end md:p-10 md:pb-14 lg:p-12 xl:p-14">
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="max-w-[92%] break-words font-display text-[clamp(2.2rem,8.5vw,2.75rem)] leading-[1.05] tracking-tight text-white sm:max-w-[80%] md:max-w-[65%] md:text-[clamp(2.6rem,6vw,3.75rem)] md:leading-[1.05] md:tracking-normal lg:max-w-[58%] lg:text-[clamp(3rem,5vw,4.5rem)] lg:leading-[1.0] xl:max-w-[54%] xl:text-[clamp(3.25rem,4.2vw,5.5rem)] xl:leading-[0.97]"
          >
            Kanpur's Most Trusted <br />
            <span className="italic text-aqua-soft">Dental Specialists</span>
            <br className="md:hidden" /> Since<br className="hidden md:inline" /> 2005
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-4 max-w-[90%] text-sm leading-relaxed text-white/85 sm:max-w-md md:mt-6 md:max-w-lg md:text-base lg:max-w-xl xl:max-w-[600px] xl:text-lg"
          >
            At My Dentist, Kakadeo, you are in the care of <span className="font-semibold text-aqua-soft">a comprehensive team of specialist doctors</span> — 
            <span className="font-semibold">Dr. Asheesh K. Sawhny</span> (Principal & Professor, 21-year veteran endodontist) 
            and <span className="font-semibold">Dr. Karuna Singh Sawhny</span> (Professor of Orthodontics). 
            Every treatment is delivered at the <span className="italic">advanced specialist level.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-10"
          >
            <MagneticButton to="/contact" hash="consultation-form" variant="dark" className="w-full justify-center sm:w-auto">
              Book Your Appointment <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={`tel:${SITE.phone}`} variant="ghost" className="w-full justify-center sm:w-auto">
              <Phone className="h-4 w-4" /> Call Us
            </MagneticButton>
            <MagneticButton href={SITE.whatsappConsultUrl} variant="ghost" className="w-full justify-center sm:w-auto">
              Book Appointment
            </MagneticButton>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-6 right-6 hidden w-[280px] glass rounded-2xl p-3 md:block md:bottom-10 md:right-10"
        >
          <div className="overflow-hidden rounded-xl">
            <img src={g2} alt="" className="h-32 w-full object-cover" loading="lazy" />
          </div>
          <div className="px-1 pt-3 pb-1">
            <div className="flex items-center gap-1 text-xs">
              <Star className="h-3 w-3 fill-aqua text-aqua" />
              <span className="font-medium">{SITE.rating}</span>
              <span className="text-foreground/50">· Google rating</span>
            </div>
            <p className="mt-1.5 text-sm leading-snug text-foreground/85">
              "Easily the best dentist in Kanpur — specialist-level care, every visit."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-6 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60 md:flex md:bottom-10 md:left-14"
        >
          <span className="h-px w-10 bg-white/40" /> Scroll
        </motion.div>
      </div>
    </section>
  );
}

function Highlights() {
  const signature: {
    img: string;
    title: string;
    desc: string;
    tag: string;
  }[] = [
    { img: iconMicroscope, title: "Advanced Root Canal", desc: "Advanced root canal treatment powered by Carl Zeiss microscopy for superior precision and accuracy.", tag: "Carl Zeiss Microscopy" },
    { img: iconCerec, title: "CEREC Dentistry", desc: "Digital CAD/CAM dentistry with same-visit precision.", tag: "Advanced CAD/CAM Technology" },
    { img: iconCrown, title: "Crown in One Hour", desc: "Get your permanent crown in a single visit.", tag: "Same-Visit Precision" },
    { img: invisalignOfficialLogo, title: "Invisalign Provider", desc: "Official Invisalign Provider with 10+ years experience.", tag: "10+ Years Invisalign Expertise" },
    { img: iconImplant, title: "Dental Implants", desc: "Simple to complex • bone graft • pterygoid • zygomatic.", tag: "AAID-Certified Implantology" },
  ];

  const additional: { img: string; title: string; desc: string }[] = [
    { img: iconSameDay, title: "Same Day Dentistry", desc: "Same-day crowns & digital restorations." },
    { img: iconVeneer, title: "Ceramic Veneer", desc: "Natural-looking smile enhancement." },
    { img: iconZoom, title: "ZOOM Tooth Whitening", desc: "Professional whitening in one appointment." },
    { img: iconSmileDesign, title: "Smile Design", desc: "Digital smile planning customized for you." },
  ];

  return (
    <section className="px-3 py-14 md:px-5 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="pill border border-foreground/10 bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Why Choose Us
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            Our <span className="italic text-aqua-deep">Specialties</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Advanced dental treatments powered by world-class technology and specialist care.
          </p>
        </Reveal>

        <p className="mt-12 font-display text-xs font-semibold uppercase tracking-[0.2em] text-aqua-deep md:mt-16">
          Signature Specialties
        </p>

        <Stagger className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {signature.map((h) => (
              <motion.div
                key={h.title}
                variants={item}
                className="group relative flex h-full flex-col rounded-2xl border border-aqua/15 bg-gradient-to-b from-aqua-soft/25 via-white to-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-aqua/35 hover:shadow-luxe md:rounded-[28px] md:p-7"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1 ring-1 ring-aqua/15 shadow-soft md:h-14 md:w-14 md:rounded-2xl md:p-1.5">
                  <img
                    src={h.img}
                    alt={h.title === "Invisalign Provider" ? "Invisalign" : h.title}
                    width={112}
                    height={112}
                    loading="lazy"
                    decoding="async"
                    className={
                      h.title === "Invisalign Provider"
                        ? "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                        : "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    }
                  />
                </div>
                <h3 className="mt-3 flex flex-wrap items-center gap-2 font-display text-lg font-bold leading-tight text-foreground md:mt-6 md:text-xl lg:text-[22px]">
                  {h.title}
                  {h.title === "Invisalign Provider" ? (
                    <img
                      src={invisalignProviderBadge}
                      alt="Official Invisalign Provider"
                      width={96}
                      height={26}
                      loading="lazy"
                      decoding="async"
                      className="h-5 w-auto shrink-0 object-contain drop-shadow-sm md:h-6"
                    />
                  ) : null}
                </h3>
                <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-snug text-muted-foreground md:mt-3 md:line-clamp-none md:leading-relaxed">
                  {h.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 border-aqua/10 pt-0 md:mt-6 md:border-t md:pt-4">
                  <span className="hidden h-1 w-1 shrink-0 rounded-full bg-aqua-deep md:inline-block" />
                  <span className="inline-flex items-center rounded-full bg-aqua-soft/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-aqua-deep/80 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:text-[10px] md:tracking-[0.12em]">
                    {h.tag}
                  </span>
                </div>
              </motion.div>
          ))}
        </Stagger>

        <p className="mt-12 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:mt-14">
          Additional Expertise
        </p>

        <Stagger className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {additional.map((h) => (
              <motion.div
                key={h.title}
                variants={item}
                className="group flex items-center gap-5 rounded-2xl border border-[#EAF5FB] bg-card p-5 transition-all duration-300 hover:border-aqua/30 hover:shadow-soft"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-aqua/20 shadow-soft">
                  <img
                    src={h.img}
                    alt={h.title}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold leading-tight text-foreground">
                    {h.title}
                  </h3>
                  <p className="mt-1 truncate text-sm leading-relaxed text-muted-foreground">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={0.1}>
          <MagneticButton to="/contact" hash="consultation-form" variant="dark">
            Book Appointment <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton to="/services" variant="outline">
            View All Treatments <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

function FloatPill({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-none absolute z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-foreground shadow-soft backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}

function TrustBar() {
  const items = [
    "CEREC Dentistry",
    "Crown in One Hour",
    "Invisalign Provider",
    "Dental Implants",
    "Same Day Dentistry",
    "Ceramic Veneer",
    "ZOOM Tooth Whitening",
    "Smile Design",
  ];
  return (
    <section className="overflow-hidden border-y border-foreground/5 bg-bone py-7">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((w, i) => (
          <span key={i} className="font-display text-2xl text-foreground/55">
            {w} <span className="mx-6 text-aqua">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const stats: { label: string; value: number; suffix: string; decimals?: number }[] = [
    { label: "Years of Practice", value: 21, suffix: "+" },
    { label: "Treatment Specialties", value: 14, suffix: "" },
    { label: "Smiles Transformed", value: 100, suffix: "k+" },
    { label: "Satisfaction Rate", value: 98, suffix: "%" },
  ];
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> About the Clinic
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-5xl md:text-6xl">
              About My Dentist — Kanpur's <span className="italic text-aqua-deep">Super Specialty</span> Dental Clinic
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-md space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                There are dental clinics, and then there is <span className="font-semibold text-aqua-deep">My Dentist.</span>
              </p>
              <p>
                Located in the heart of Kakadeo, My Dentist was built on one belief: <span className="font-semibold">every patient deserves specialist-level care</span> — not a referral, not a compromise. Our clinic houses <span className="font-semibold">a comprehensive team of specialist dental doctors</span> providing advanced, expert-led dental care under one roof.
              </p>
              <p className="font-medium text-foreground">
                <span className="font-bold text-aqua-deep">226 verified patient reviews.</span> The people of Kanpur have already made their verdict.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <AboutVideoCard />
        </Reveal>
      </div>

      <Stagger className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:mt-14 sm:rounded-3xl md:mt-20 md:grid-cols-4">
        {stats.map((s) => (
          <motion.div key={s.label} variants={item} className="bg-background p-4 sm:p-8 md:p-10">
            <div className="font-display text-3xl tracking-tight sm:text-5xl md:text-6xl">
              <Counter to={s.value} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
            </div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mt-3 sm:text-xs">
              {s.label}
            </div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

function ServicesPreview() {
  const featured = SITE.services.slice(0, 6);
  const icons = DENTAL_ICONS;

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Services
            </div>
          <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl">
            Treatments & <span className="italic text-aqua-deep">Specialties</span> at My Dentist
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            <span className="font-semibold text-aqua-deep">43 procedures. Team of Specialists Under One Roof in Kakadeo, Kanpur.</span> Every service is led by a qualified specialist.
          </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              View all {SITE.services.length} services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Root Canal Treatment (RCT)", desc: "Single and multi-sitting root canal treatment performed by a specialist in endodontics, delivered with precision and minimal discomfort.", expert: "Dr. Asheesh K. Sawhny, MDS Endodontist", to: "/root-canal-treatment-kanpur" },
            { title: "Dental Implants", desc: "Permanent, natural-looking dental implants planned and placed by Dr. Asheesh K. Sawhny, one of the few AAID-certified implantologists in Uttar Pradesh.", expert: "Dr. Asheesh K. Sawhny, AAID-Certified Implantologist", to: "/dental-implants-kanpur" },
            { title: "Braces & Orthodontics", desc: "Braces, Invisalign® clear aligners, and advanced orthodontic treatments delivered by Dr. Karuna Singh Sawhny, MDS Orthodontist and IOS member.", expert: "Dr. Karuna Singh Sawhny, MDS Orthodontist", to: "/orthodontist-kanpur" },
            { title: "Smile Makeover", desc: "Veneers, composite bonding, and complete smile design, planned with endodontic precision and refined aesthetic judgement.", expert: "Dr. Asheesh K. Sawhny", to: "/smile-makeover-kanpur" },
            { title: "Teeth Whitening", desc: "Clinically supervised, customised whitening for a brighter, natural-looking smile with lasting results.", expert: "Dr. Asheesh K. Sawhny", to: "/teeth-whitening-kanpur" },
            { title: "Paediatric Dentistry", desc: "Routine check-ups, milk tooth care, and early orthodontic screening for children, in a calm and welcoming environment.", expert: "Our Specialist Team", to: "/paediatric-dentist-kanpur" },
          ].map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Link key={s.title} to={s.to}>
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft transition-all hover:shadow-luxe h-full flex flex-col"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-aqua-soft opacity-0 blur-3xl transition-opacity group-hover:opacity-80" />
                  <div className="relative flex-1">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-bold text-aqua-deep">{s.title}</h3>
                    <p className="mt-2 lg:mt-3 text-[10px] uppercase tracking-wider text-aqua-deep font-semibold">{s.expert}</p>
                    <p className="mt-3 lg:mt-4 text-sm leading-relaxed lg:leading-[1.85] lg:tracking-[0.01em] text-muted-foreground">{s.desc}</p>
                  </div>
                  <div className="relative mt-6 inline-flex items-center gap-2 text-xs font-medium text-foreground/60 transition-colors group-hover:text-aqua-deep">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="pill border border-foreground/10 bg-white">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Why Choose Us
              </div>
              <h2 className="mt-6 font-display text-5xl md:text-7xl">
                Our Core <br />
                <span className="italic text-aqua-deep">Principles.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                We are a <span className="font-semibold text-aqua-deep">Super Specialty Dental Clinic</span> — a distinction earned through advanced degrees and international certifications.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 overflow-hidden rounded-3xl gradient-aqua p-7 text-white shadow-luxe">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-[0.18em] text-white/80">
                    Same-day emergency
                  </span>
                </div>
                <p className="mt-5 max-w-xs text-lg leading-snug">
                  Severe pain, swelling or broken tooth? Call MY DENTIST — we
                  prioritise same-day emergency dental care in Kanpur.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[smile, g2, g3].map((src, i) => (
                      <img key={i} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-white/80 object-cover" />
                    ))}
                  </div>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground"
                  >
                    Call →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger className="space-y-4">
            {SITE.reasons.map((r, i) => (
              <motion.div
                key={r}
                variants={item}
                className="group flex items-start gap-6 rounded-3xl border border-foreground/8 bg-card p-7 transition-all hover:border-aqua/40 hover:shadow-luxe"
              >
                <div className="font-display text-3xl text-aqua-deep tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-aqua-deep">{r}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {i === 0 && "Our specialist doctors hold MDS degrees and provide specialist-led treatment for every case."}
                    {i === 1 && "Dr. Asheesh Sawhny holds AAID certification in Dental Implants — an international benchmark."}
                    {i === 2 && "Our 5.0 rating comes from verified patient reviews across Google and Practo."}
                    {i === 3 && "Endodontics, implants, braces and orthodontics — all under one roof, by specialists."}
                    {i === 4 && "We recommend only what you need. In Dr. Sawhny's words: \"Being ethical is a strongly observed value.\""}
                    {i === 5 && "Mon–Sat: 4 PM–9 PM | Sun: 11 AM–2 PM — appointments that fit your schedule."}
                    {i === 6 && "Dr. Asheesh K. Sawhny is Principal & Professor at Rama Dental College, Kanpur."}
                  </p>
                </div>
                <ArrowUpRight className="mt-2 h-5 w-5 text-foreground/30 transition-all group-hover:rotate-45 group-hover:text-aqua-deep" />
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function DoctorsPreview() {
  const docs = [
    { 
      ...SITE.doctors[0], 
      img: drA, 
      imgPosition: "center 20%",
      tags: ["BDS, MDS", "AAID Certified", "Principal", "21+ Yrs"],
      quote: "Thank you for the excellent dental care. Your professional expertise, integrity, and compassionate concern are most appreciated.",
      author: "Rekha Dheer",
      bio: "Dr. Asheesh K. Sawhny is one of Kanpur's most accomplished dental specialists — a 21-year clinician, academic leader, and the Principal & Professor at Rama Dental College."
    },
    { 
      ...SITE.doctors[1], 
      img: drK, 
      imgPosition: "center 20%",
      tags: ["BDS, MDS", "Professor", "IOS Member", "14+ Yrs"],
      quote: "Earlier my teeth were out of alignment but now they are perfect — the doctor was very caring and told me all the precautions.",
      author: "Verified Patient (Practo)",
      bio: "Dr. Karuna Singh Sawhny is a specialist-qualified orthodontist and Professor at Rama Dental College with a nuanced understanding of facial aesthetics."
    },
  ];
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="pill border border-foreground/10 bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Meet Your Specialists
          </div>
          <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl">
            Meet your <span className="italic text-aqua-deep">specialists.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
          {docs.map((d) => (
            <motion.article
              key={d.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] bg-card shadow-soft transition-shadow hover:shadow-luxe flex flex-col"
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  style={{ objectPosition: d.imgPosition ?? "center" }}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {d.tags.map(t => (
                    <span key={t} className="glass rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <div className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-2">
                  {d.slug === SITE.doctors[1].slug && (
                    <div className="glass inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-foreground shadow-luxe ring-1 ring-white/60">
                      <img src={invisalignOfficialLogo} alt="Invisalign" className="h-5 w-5 shrink-0 object-contain" />
                      Official Invisalign Provider
                    </div>
                  )}
                  <div className="flex w-full items-center justify-between">
                    <div className="glass rounded-full px-4 py-2 text-xs font-bold text-aqua-deep">★ 4.9 · Verified</div>
                    <Link
                      to={`/${d.slug}`}
                      className="grid h-12 w-12 place-items-center rounded-full gradient-aqua text-white"
                      aria-label={`View profile of ${d.name}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-3xl font-bold">
                  {d.name} <span className="text-base text-muted-foreground font-normal">— {d.qualifications}</span>
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-aqua-deep font-semibold">{d.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">{d.bio}</p>
                
                <div className="mt-6 rounded-2xl bg-foreground/5 p-5 border-l-4 border-aqua">
                  <p className="text-sm italic leading-relaxed text-foreground/80">"{d.quote}"</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">— {d.author}</p>
                </div>

                <Link
                  to={`/${d.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-aqua-deep"
                >
                  View Full Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="pill border border-foreground/10 bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> The Process
          </div>
          <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-6xl">
            Your visit, <span className="italic text-aqua-deep">simplified.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {SITE.process.map((p, i) => (
            <motion.div
              key={p.title}
              variants={item}
              className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
            >
              <div className="font-display text-4xl text-aqua-deep tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-display text-xl leading-snug">{p.title}</h3>
              <p className="mt-3 lg:mt-4 text-sm leading-relaxed lg:leading-[1.85] lg:tracking-[0.01em] text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = SITE.testimonials;
  const total = testimonials.length;
  const visibleCount = 3;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Get visible testimonials (wrapping around)
  const visible = Array.from({ length: visibleCount }, (_, i) => testimonials[(current + i) % total]);

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Patient Stories
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              What patients say about <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
            <div className="mt-8 flex items-center gap-6">
              <div className="font-display text-6xl">
                <Counter to={5.0} decimals={1} />
              </div>
              <div>
                <div className="flex gap-0.5 text-aqua">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Google · {SITE.reviews} reviews
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=MY+DENTIST+Kanpur+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Read reviews on Google <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Carousel controls */}
            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-foreground/10 bg-white shadow-soft transition-all hover:border-aqua hover:shadow-luxe hover:text-aqua-deep"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-aqua-deep" : "w-1.5 bg-foreground/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-foreground/10 bg-white shadow-soft transition-all hover:border-aqua hover:shadow-luxe hover:text-aqua-deep"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>

          <div className="space-y-4 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((t, idx) => (
                <motion.figure
                  key={`${t.name}-${(current + idx) % total}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
                >
                  <div className="font-display text-5xl leading-none text-aqua-deep">"</div>
                  <blockquote className="mt-2 text-lg leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-5 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="flex gap-0.5 text-aqua">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Frequently Asked
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-5xl md:text-6xl">
              Quick answers, <span className="italic text-aqua-deep">straight from the specialists.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              View all FAQs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4">
          {SITE.faqs.map((f) => (
            <motion.details
              key={f.q}
              variants={item}
              className="group rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl leading-snug marker:hidden">
                {f.q}
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-foreground/40 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </motion.details>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function LocationCoverage() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Coverage
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              Proudly serving patients across <span className="italic text-aqua-deep">Kanpur.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              MY DENTIST is conveniently located in Kakadeo and welcomes patients from Pandu Nagar,
              Naveen Nagar, Sharda Nagar, Sarvodaya Nagar, and across Kanpur — including patients
              near Panacea Hospital and Dwivedi Hospital. Specialist dental care, close to home.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-aqua-deep" />
              {SITE.address}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SITE.locations.map((l) => (
                <motion.div
                  key={l}
                  variants={item}
                  className="rounded-2xl border border-foreground/8 bg-card px-5 py-4 text-sm font-medium shadow-soft"
                >
                  {l}
                </motion.div>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="px-6 pt-12">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-foreground p-10 text-background md:p-16">
          <div className="grain absolute inset-0" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <div className="pill border border-white/15 bg-white/5 text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Same-day appointments
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-5xl md:text-6xl">
                Book your appointment at <span className="italic text-aqua">MY DENTIST</span> today.
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-white/65">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {SITE.shortAddress}</span>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {SITE.phone}</span>
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {SITE.email}</span>
                <span>★ {SITE.rating} · Google</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <MagneticButton to="/contact" hash="consultation-form" variant="dark">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href={`https://wa.me/${SITE.phoneDigits}`} variant="ghost">
                WhatsApp us
              </MagneticButton>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-16 -right-10 select-none font-display text-[14rem] leading-none tracking-tighter text-white/[0.04]">
            smile
          </div>
        </div>
      </Reveal>
      <img src={g5} alt="" className="hidden" />
    </section>
  );
}
