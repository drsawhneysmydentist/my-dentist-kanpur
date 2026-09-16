import { Check } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";

type WhyChooseUsProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  points?: string[];
};

const defaultPoints = [
  "Single accountable team for planning + photography",
  "1000+ events delivered across Kanpur",
  "Transparent package pricing",
  "Same-day highlight reels",
];

export function WhyChooseUs({
  eyebrow = "Why Choose Us",
  heading = (
    <>
      One team, <span className="italic text-rose-gold">zero stress.</span>
    </>
  ),
  points = defaultPoints,
}: WhyChooseUsProps) {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-6xl">{heading}</h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 grid gap-8 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne/30 text-warm-brown">
                <Check size={18} />
              </div>
              <div className="mt-1 font-display text-xl font-light text-warm-brown">{point}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
