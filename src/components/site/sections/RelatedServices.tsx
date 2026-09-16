import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "../Reveal";

type RelatedServicesProps = {
  items: { label: string; href: string }[];
};

// Internal-linking block for topical-cluster SEO between service pages.
// Reuses the same pill classnames already used in Footer's "Service Areas"
// block — no new visual styles introduced.
export function RelatedServices({ items }: RelatedServicesProps) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow>Explore Related Services</Eyebrow>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full border border-warm-brown/20 px-5 py-2.5 text-xs font-light uppercase tracking-[0.14em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
