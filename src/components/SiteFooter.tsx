import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import logoBadge from "@/assets/logo-dark.webp";

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2-2h2V2.2C16.5 2.1 15.4 2 14.2 2 11.7 2 10 3.6 10 6.7V10H7v4h3v8h3z" />
  </svg>
);
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-foreground text-background">
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <Reveal>
          <div className="grid gap-10 border-b border-white/10 pb-20 lg:grid-cols-[1.5fr_auto] lg:items-end">
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[6.5rem]">
              Your smile,
              <br />
              <span className="italic text-aqua">our craft.</span>
            </h2>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                hash="consultation-form"
                className="group inline-flex items-center justify-between gap-6 rounded-full gradient-aqua px-8 py-5 text-base text-white shadow-luxe transition-transform hover:scale-[1.02]"
              >
                Book Appointment
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
                  →
                </span>
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-between gap-6 rounded-full border border-white/15 px-8 py-5 text-base hover:bg-white/5"
              >
                {SITE.phone}
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoBadge}
                alt="Dr Sawhney's My Dentist logo"
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <span className="font-display text-2xl">My Dentist</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              My Dentist — best dental clinic in Kakadeo, Kanpur. MDS-qualified
              specialists providing dental implants, painless root canal,
              braces, teeth whitening, smile makeover and emergency dental care.
              Serving Pandu Nagar, Naveen Nagar, Sharda Nagar, Sarvodaya Nagar
              and all of Kanpur since 2005.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              Mon–Sat: 4 PM – 9 PM
              <br />
              Sun: 11 AM – 2 PM
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs">
              <Star className="h-3.5 w-3.5 fill-aqua text-aqua" />
              <span className="font-medium">{SITE.rating}</span>
              <span className="text-white/50">
                · {SITE.reviews} Google reviews
              </span>
            </div>
          </div>

          <FooterCol
            title="Visit"
            items={[
              { label: "About", to: "/about" },
              { label: "Doctors", to: "/doctors" },
              { label: "Gallery", to: "/gallery" },
              { label: "Blogs", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              { label: "Dental Implants", to: "/dental-implants-kanpur" },
              { label: "Root Canal", to: "/root-canal-treatment-kanpur" },
              { label: "Teeth Whitening", to: "/teeth-whitening-kanpur" },
              { label: "Smile Makeover", to: "/smile-makeover-kanpur" },
              { label: "Braces & Aligners", to: "/orthodontist-kanpur" },
              { label: "Children's Dentist", to: "/paediatric-dentist-kanpur" },
              { label: "Wisdom Teeth", to: "/oral-and-maxillofacial-surgery" },
              { label: "Crowns & Bridges", to: "/prosthodontics" },
            ]}
          />
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span>
                  {SITE.address}
                  <span className="block text-white/40 text-xs mt-0.5">
                    Near Panacea Hospital · Kakadeo, Kanpur
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span className="flex flex-col gap-0.5">
                  {SITE.altPhones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:text-white">
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={SITE.whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 hover:bg-white/5"
              >
                Book Appointment
              </a>
              <a
                href={SITE.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 hover:bg-white/5"
              >
                ⭐ Read Reviews on Google
              </a>
            </div>
            <div className="mt-6 flex gap-2">
              <SocialBtn
                href="#"
                icon={<InstagramIcon className="h-4 w-4" />}
              />
              <SocialBtn href="#" icon={<FacebookIcon className="h-4 w-4" />} />
              <SocialBtn
                href={`https://wa.me/${SITE.phoneDigits}`}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20 4A12 12 0 0 0 3 21l-1 5 5-1A12 12 0 1 0 20 4Zm-8 18a10 10 0 0 1-5-1.3l-.4-.2-3 .8.8-3-.2-.4A10 10 0 1 1 12 22Zm5.5-7.4c-.3-.2-1.8-.9-2-1s-.5 0-.7.2-.8 1-1 1.2-.4.2-.6 0a8 8 0 0 1-4-3.4c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5 0-.8.3a3 3 0 0 0-1 2.3c0 1.4 1 2.7 1.1 2.9.2.2 2 3 4.9 4.2 1.8.8 2.5.8 3.4.7.5 0 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.7-.4Z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Dr Sawhney's My Dentist · Kanpur. All
            rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Made with care</span>
          </div>
        </div>

        <div className="pointer-events-none mt-10 -mb-6 select-none overflow-hidden leading-[0.75]">
          <div className="font-display text-[24vw] leading-none tracking-tighter text-white/[0.04]">
            mydentist
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white hover:text-foreground"
    >
      {icon}
    </a>
  );
}
