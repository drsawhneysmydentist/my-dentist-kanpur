import { Instagram, Facebook, Mail } from "lucide-react";
import sdLogo from "@/assets/sd-logo-official.jpg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-warm-brown text-ivory">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_-10%,var(--champagne)/0.4,transparent_40%),radial-gradient(circle_at_90%_110%,var(--rose-gold)/0.35,transparent_45%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-luxe shadow-soft">
                <img src={sdLogo} alt="SD Event & Photography" className="h-full w-full object-cover" />
              </span>
              <div>
                <div className="font-display text-xl">SD Event &amp; Photography</div>
                <div className="eyebrow text-champagne">Event Planner · Wedding Photographer &amp; Videographer in Kanpur</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-ivory/70">
              SD Event &amp; Photography — Event Planner, Wedding Photographer &amp; Videographer in Kanpur.
              Crafting cinematic weddings, corporate events, birthdays and bespoke celebrations.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/sd_event_kanpur191?igsh=ZjNjcXMydHhqMDVt", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/share/1EZmeQeVPR/", label: "Facebook" },
                { Icon: Mail, href: "mailto:sdeventkanpur@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 transition-colors hover:border-champagne hover:text-champagne"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Atelier">
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#packages">Packages</FooterLink>
            <FooterLink href="#gallery">Portfolio</FooterLink>
            <FooterLink href="#about">About</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink href="/wedding-planner-kanpur">Wedding Planning</FooterLink>
            <FooterLink href="/wedding-photography-kanpur">Photography</FooterLink>
            <FooterLink href="/corporate-event-management-kanpur">Corporate Events</FooterLink>
            <FooterLink href="/wedding-decoration-kanpur">Décor &amp; Stage</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <FooterLink href="tel:+918887811248">+91 88878 11248</FooterLink>
            <FooterLink href="mailto:sdeventkanpur@gmail.com">sdeventkanpur@gmail.com</FooterLink>
            <span className="text-sm font-light text-ivory/60">
              Barra 2, Kanpur Nagar,
              <br />
              Uttar Pradesh 208027, India
            </span>
          </FooterCol>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-10">
          <div className="eyebrow text-champagne">Service Areas</div>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Kanpur",
              "Kakadev",
              "Civil Lines",
              "Swaroop Nagar",
              "Shyam Nagar",
              "Lajpat Nagar",
              "Kalyanpur",
              "Govind Nagar",
              "Ratan Lal Nagar",
              "Panki",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-ivory/20 px-4 py-2 text-xs font-light text-ivory/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs font-light text-ivory/50 sm:flex-row">
          <span>© {new Date().getFullYear()} SD Event &amp; Photography. All rights reserved.</span>
          <span className="eyebrow text-champagne/60">Made in Kanpur · With devotion</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow text-champagne">{title}</div>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm font-light text-ivory/70 transition-colors hover:text-champagne">
      {children}
    </a>
  );
}