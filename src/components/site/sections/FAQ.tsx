import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Eyebrow } from "../Reveal";

const faqs = [
  {
    q: "Does SD Event & Photography handle corporate events?",
    a: "Yes — end-to-end corporate event planning and photography across Kanpur.",
  },
  {
    q: "Do you offer wedding photography and videography together?",
    a: "Yes, combined photo + video packages with album design are available.",
  },
  {
    q: "Do you provide pre-wedding shoots?",
    a: "Yes, at creative locations in and around Kanpur with quick-turnaround editing.",
  },
  {
    q: "How far in advance should I book your services?",
    a: "For weddings, 2–3 months in advance is ideal; for birthdays and small events, 2–3 weeks is usually enough.",
  },
  {
    q: "Do you provide services outside Kanpur?",
    a: "Yes, on request, with additional travel arrangements.",
  },
  {
    q: "Do you offer combo packages for planning + photography together?",
    a: "Yes, combo packages are available at a discounted rate.",
  },
  {
    q: "Do you provide a written agreement after booking?",
    a: "Yes, a formal agreement is shared once the date is confirmed.",
  },
  {
    q: "Can I customize a package to my budget?",
    a: "Yes, all packages are customizable.",
  },
];

type FaqItem = { q: string; a: string };

type FAQProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  items?: FaqItem[];
  showCta?: boolean;
};

export function FAQ({
  eyebrow = "Questions",
  heading = (
    <>
      Quiet answers to the <span className="italic text-rose-gold">loud</span> ones.
    </>
  ),
  items = faqs,
  showCta = true,
}: FAQProps) {
  return (
    <section className="relative bg-beige/40 py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-5xl">{heading}</h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <Accordion type="single" collapsible className="w-full">
            {items.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-champagne/40 last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left font-display text-xl font-light text-warm-brown hover:no-underline hover:text-rose-gold sm:text-2xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base font-light leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {showCta && (
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
            >
              View All FAQs →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}