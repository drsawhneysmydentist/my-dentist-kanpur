import { Reveal } from "../Reveal";

const stats = [
  { value: "1000+", label: "Events Delivered" },
  { value: "270+", label: "Weddings Captured" },
  { value: "8+", label: "Years of Experience" },
  { value: "4.9★", label: "Google Rating" },
];

export function Stats() {
  return (
    <section id="stats" className="relative -mt-16 sm:-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal className="rounded-3xl bg-ivory/95 p-8 shadow-luxe backdrop-blur-xl sm:p-12 border border-champagne/30">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center ${i > 0 ? "sm:border-l sm:border-champagne/30" : ""}`}
              >
                <div className="font-display text-5xl font-light text-warm-brown sm:text-6xl">
                  {s.value}
                </div>
                <div className="eyebrow mt-3 text-rose-gold">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}