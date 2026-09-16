import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";

type CTASectionProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  eyebrow = "Ready When You Are",
  heading = (
    <>
      Ready to Plan Your <span className="italic text-rose-gold">Dream Wedding?</span>
    </>
  ),
  subtext = "Call +91 88878 11248 or WhatsApp Us Today.",
  primaryCta = { label: "Get Free Quote", href: "#contact" },
  secondaryCta = { label: "WhatsApp Us", href: "https://wa.me/918887811248" },
}: CTASectionProps) {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-6xl">{heading}</h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            {subtext}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-luxe px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-ivory shadow-luxe transition-transform hover:scale-[1.04]"
          >
            {primaryCta.label}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            {secondaryCta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
