import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Eyebrow } from "../Reveal";
import { trackContactFormSubmit } from "@/lib/analytics";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      trackContactFormSubmit();
      toast.success("Thank you — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Ready When You Are</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-6xl">
            Ready to Create Your <span className="italic text-rose-gold">Perfect Event?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Let SD Event &amp; Photography bring your vision to life — from planning to picture-perfect memories.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Info + Map */}
          <Reveal className="space-y-8">
            <ContactRow icon={<MapPin size={18} />} label="Atelier">
              Barra 2, Kanpur Nagar, Uttar Pradesh 208027, India
              <br />
              Proudly serving Barra, Barra 2, Govind Nagar, Kidwai Nagar, Kakadeo, Swaroop Nagar, Arya Nagar, Civil Lines, Kalyanpur, Panki, Juhi, Naubasta, Tilak Nagar, Shyam Nagar, Lal Bangla, Saket Nagar, and Kanpur Cantt.
            </ContactRow>
            <ContactRow icon={<Phone size={18} />} label="Call">
              <a href="tel:+918887811248" className="hover:text-rose-gold">
                +91 88878 11248
              </a>
            </ContactRow>
            <ContactRow icon={<Mail size={18} />} label="Write">
              <a href="mailto:sdeventkanpur@gmail.com" className="hover:text-rose-gold">
                sdeventkanpur@gmail.com
              </a>
            </ContactRow>

            <div className="overflow-hidden rounded-2xl border border-champagne/40">
              <iframe
                title="SD Event & Photography — Kanpur"
                src="https://www.google.com/maps?q=Barra+2+Kanpur+Nagar+Uttar+Pradesh+208027&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-champagne/40 bg-card p-8 sm:p-10 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Event date" name="date" type="date" />
                <div className="sm:col-span-2">
                  <Field label="Event type" name="type" placeholder="Wedding · Birthday · Corporate..." />
                </div>
                <div className="sm:col-span-2">
                  <label className="eyebrow text-warm-brown">Tell us about your celebration</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-warm-brown/20 bg-transparent py-3 font-light text-warm-brown outline-none placeholder:text-muted-foreground focus:border-rose-gold"
                    placeholder="Share the vision, guest count, venue if known…"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-luxe px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-ivory shadow-luxe transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {sending ? "Sending…" : "Book Free Consultation"}
                <Send size={14} />
              </button>
              <a
                href="https://wa.me/918887811248"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
              >
                WhatsApp Now
              </a>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne/30 text-warm-brown">
        {icon}
      </div>
      <div>
        <div className="eyebrow text-rose-gold">{label}</div>
        <div className="mt-1 font-display text-xl text-warm-brown">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-warm-brown">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-warm-brown/20 bg-transparent py-3 font-light text-warm-brown outline-none placeholder:text-muted-foreground focus:border-rose-gold"
      />
    </div>
  );
}