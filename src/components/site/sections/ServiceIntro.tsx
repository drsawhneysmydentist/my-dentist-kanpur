import { Reveal, Eyebrow } from "../Reveal";

type ServiceIntroProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  paragraphs: string[];
};

// Locally-relevant, unique SEO body copy for a service page.
// Visually matches WhyChooseUs / CTASection spacing & typography exactly —
// no new styles introduced.
export function ServiceIntro({ eyebrow = "About This Service", heading, paragraphs }: ServiceIntroProps) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl text-warm-brown sm:text-5xl">{heading}</h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-base font-light leading-relaxed text-muted-foreground sm:text-center">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
