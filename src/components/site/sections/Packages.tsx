import { Check } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";

const packages = [
  {
    name: "Silver",
    tag: "Intimate",
    price: "35,000",
    unit: "onwards",
    features: [
      "Half-day photography (8 hrs)",
      "2 Photographers + 1 Assistant",
      "150 edited portraits",
      "Highlight reel (60s)",
      "Basic floral décor",
    ],
  },
  {
    name: "Gold",
    tag: "Signature",
    price: "75,000",
    unit: "onwards",
    featured: true,
    features: [
      "Full-day coverage (all events)",
      "3 Photographers + 2 Cinematographers",
      "400 edited portraits",
      "Cinematic film (5 min) + reels",
      "Signature floral stage & mandap",
      "Drone coverage",
      "Candid Photography",
      "Wedding Cinematography",
      "Photo Editing & Album Design",
    ],
  },
  {
    name: "Platinum",
    tag: "Atelier",
    price: "1.25 Lakh",
    unit: "onwards",
    features: [
      "Multi-day, end-to-end planning",
      "5 Cameras",
      "800+ edited portraits",
      "Feature-length wedding film",
      "Bespoke décor & scenography",
      "Guest management & concierge",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Investment</Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-6xl">
            Curated collections, <span className="italic text-rose-gold">bespoke souls.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Three starting points — every wedding is tailored from there. Custom quotes on
            request.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all ${
                  p.featured
                    ? "border-transparent bg-warm-brown text-ivory shadow-luxe lg:scale-[1.03]"
                    : "border-champagne/40 bg-card hover:border-rose-gold hover:shadow-soft"
                }`}
              >
                {p.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-gradient-luxe px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-ivory">
                    Most loved
                  </div>
                )}
                <div className={`eyebrow ${p.featured ? "text-champagne" : "text-rose-gold"}`}>
                  {p.tag}
                </div>
                <h3
                  className={`mt-4 font-display text-5xl ${p.featured ? "text-ivory" : "text-warm-brown"}`}
                >
                  {p.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-6xl font-light ${p.featured ? "text-champagne" : "text-warm-brown"}`}
                  >
                    ₹{p.price}
                  </span>
                  <span
                    className={`text-lg ${p.featured ? "text-ivory/70" : "text-muted-foreground"}`}
                  >
                    {p.unit}
                  </span>
                </div>
                <div
                  className={`my-8 h-px w-full ${p.featured ? "bg-ivory/20" : "bg-champagne/40"}`}
                />
                <ul className="flex-1 space-y-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light">
                      <Check
                        size={16}
                        className={`mt-1 shrink-0 ${p.featured ? "text-champagne" : "text-rose-gold"}`}
                      />
                      <span className={p.featured ? "text-ivory/85" : "text-foreground/80"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.7rem] uppercase tracking-[0.28em] transition-all ${
                    p.featured
                      ? "bg-ivory text-warm-brown hover:bg-champagne"
                      : "border border-warm-brown/30 text-warm-brown hover:bg-warm-brown hover:text-ivory"
                  }`}
                >
                  {p.name === "Gold" ? "Get Wedding Photography & Planning Quote" : "Reserve your date"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}