import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Zap } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";

// Optional: set VITE_GOOGLE_MAPS_API_KEY to use the official Google Maps
// Embed API (https://developers.google.com/maps/documentation/embed/get-started).
// Without a key, we fall back to Google's keyless embed using the clinic's
// precise lat/lng (more reliable than an address-text query, which can
// occasionally fail to geocode or render a blank/broken map).
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
  string | undefined;

const MAP_EMBED_SRC = GOOGLE_MAPS_API_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
      SITE.mapsQuery,
    )}&zoom=16`
  : `https://www.google.com/maps?q=${SITE.mapsCoords.lat},${SITE.mapsCoords.lng}&z=16&output=embed`;

const CONCERN_OPTIONS = [
  "General Consultation",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Smile Makeover",
  "Braces / Orthodontics",
  "Root Canal Treatment",
  "Gum Treatment",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Other",
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Book Dentist Appointment Kanpur | Contact My Dentist Kakadeo | Naveen Nagar Kanpur",
      },
      {
        name: "description",
        content:
          "Book a dentist appointment in Kanpur at My Dentist, Kakadeo — Naveen Nagar, near Panacea Hospital. Same-day emergency appointments available. Open Mon–Sat 4–9 PM, Sun 11 AM–2 PM. Call +91 98385 00100.",
      },
      {
        name: "keywords",
        content:
          "book dentist appointment Kanpur, dentist appointment Kakadeo, same day dentist Kanpur, walk-in dentist Kanpur, online dentist appointment Kanpur, dental clinic near Panacea Hospital Kanpur, dentist near Dwivedi Hospital Kanpur, emergency dentist Kanpur today",
      },
      {
        property: "og:title",
        content: "Book Dentist Appointment Kanpur | My Dentist Kakadeo",
      },
      { property: "og:url", content: `${SITE.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Book an appointment"
        title={
          <>
            Let's plan your{" "}
            <span className="italic text-aqua-deep">next visit.</span>
          </>
        }
        intro="Tell us a little about your reason for visiting. We typically respond within the hour and can usually offer a same-week consultation."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Treatments
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl">
              Treatments available at{" "}
              <span className="italic text-aqua-deep">MY DENTIST.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              All under one roof, without referrals.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Root Canal Treatment",
                d: "by MDS Endodontist Dr. Asheesh Sawhny",
              },
              {
                t: "Dental Implants",
                d: "by AAID-Certified Implantologist Dr. Asheesh Sawhny",
              },
              {
                t: "Braces and Clear Aligners",
                d: "by MDS Orthodontist Dr. Karuna Singh Sawhny",
              },
              { t: "Smile Makeover and Veneers", d: "by Dr. Asheesh Sawhny" },
              { t: "Professional Teeth Whitening", d: "clinically supervised" },
              {
                t: "Paediatric Dentistry",
                d: "children's dental care and early orthodontic screening",
              },
            ].map((tr) => (
              <div
                key={tr.t}
                className="rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft"
              >
                <h3 className="font-display text-lg">{tr.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">{tr.d}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <Reveal>
            <div id="consultation-form" className="scroll-mt-28 rounded-[2rem] border border-foreground/8 bg-card p-8 shadow-soft md:p-10">
              <h2 className="font-display text-3xl md:text-4xl">
                Book Your <span className="italic text-aqua-deep">Consultation</span>
              </h2>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-aqua-deep">
                <Zap className="h-4 w-4 fill-aqua-deep" /> Same-week
                appointments available — confirm yours
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fill in the form and we'll open WhatsApp with your details ready
                to send instantly.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = String(fd.get("name") ?? "").trim();
                  const phone = String(fd.get("phone") ?? "").trim();
                  const treatment = String(fd.get("treatment") ?? "").trim();
                  const date = String(fd.get("date") ?? "").trim();
                  const message = String(fd.get("message") ?? "").trim();
                  // Basic phone pattern: 7–15 digits, optional leading +
                  const phoneOk = /^\+?[\d\s\-()]{7,15}$/.test(phone);
                  if (!name || !phoneOk) return;
                  if (
                    name.length > 100 ||
                    phone.length > 20 ||
                    message.length > 1000
                  )
                    return;

                  setSent(true);

                  const lines = [
                    "Hello My Dentist,",
                    "I would like to book a consultation.",
                    `Name: ${name}`,
                    `Mobile: ${phone}`,
                    `Treatment: ${treatment || "General Consultation"}`,
                    `Preferred Date: ${date || "—"}`,
                    `Message: ${message || "—"}`,
                    "Please let me know the available appointment slots.",
                  ];
                  const url = `https://wa.me/${SITE.phoneDigits}?text=${encodeURIComponent(lines.join("\n"))}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                noValidate
                aria-label="Book consultation form"
                className="mt-8"
              >
                <div className="grid gap-5">
                  <Field
                    label="Full Name *"
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Mobile Number *"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    maxLength={20}
                    pattern="^\+?[\d\s\-()]{7,15}$"
                    placeholder="+91 87265 56219"
                  />
                  <div>
                    <label
                      htmlFor="treatment"
                      className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Your Concern
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-foreground/10 bg-background px-4 py-3.5 text-sm outline-none focus:border-aqua"
                    >
                      <option value="" disabled>
                        Select a treatment
                      </option>
                      {CONCERN_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Field
                    label="Preferred Date"
                    name="date"
                    type="date"
                    autoComplete="off"
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Anything Else?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={1000}
                      className="mt-2 w-full resize-none rounded-2xl border border-foreground/10 bg-background px-4 py-3.5 text-sm outline-none focus:border-aqua"
                      placeholder="Briefly describe your concern (optional)"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by the clinic. Your
                    details stay private.
                  </p>
                  <MagneticButton
                    type="submit"
                    variant="dark"
                    className="w-full justify-center md:w-auto"
                  >
                    {sent ? "Opened in WhatsApp ✓" : "Book Consultation"}
                  </MagneticButton>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-foreground/8 bg-card p-8 shadow-soft">
                <h3 className="font-display text-3xl">Visit the clinic</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <Info
                    icon={<MapPin className="h-4 w-4" />}
                    label="Address"
                    value={SITE.address}
                  />
                  <Info
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={SITE.phone}
                    href={`tel:${SITE.phone}`}
                  />
                  <Info
                    icon={<Phone className="h-4 w-4" />}
                    label="Also reach us on"
                    value={SITE.altPhones.join("  ·  ")}
                  />
                  <Info
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={SITE.email}
                    href={`mailto:${SITE.email}`}
                  />
                  <Info
                    icon={<Clock className="h-4 w-4" />}
                    label="OPD Timings"
                    value="Mon–Sat: 4 PM–9 PM · Sun: 11 AM–2 PM"
                  />
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">
                  Landmarks:{" "}
                  <span className="font-semibold text-foreground">
                    Near Panacea Hospital
                  </span>{" "}
                  · 100 metres from Dwivedi Hospital
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${SITE.phoneDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full gradient-aqua px-5 py-3 text-sm text-white"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={SITE.whatsappConsultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm text-foreground hover:bg-foreground/5"
                  >
                    Book Appointment
                  </a>
                  <a
                    href={SITE.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm text-foreground hover:bg-foreground/5"
                  >
                    ⭐ Read Reviews on Google
                  </a>
                </div>
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                className="relative overflow-hidden rounded-[2rem] border border-foreground/8 shadow-soft"
              >
                <div className="aspect-video w-full">
                  <iframe
                    title="Clinic location — My Dentist Kakadeo Kanpur"
                    src={MAP_EMBED_SRC}
                    className="h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-foreground shadow-soft backdrop-blur transition-colors hover:bg-white"
                >
                  Open in Google Maps ↗
                </a>
              </motion.div>
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-aqua-deep transition-colors hover:text-aqua"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  maxLength,
  pattern,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
  pattern?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-foreground/10 bg-background px-4 py-3.5 text-sm outline-none focus:border-aqua"
      />
    </div>
  );
}

function Info({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aqua-soft text-aqua-deep">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block transition-colors hover:text-aqua-deep">
        {body}
      </a>
    </li>
  ) : (
    <li>{body}</li>
  );
}
