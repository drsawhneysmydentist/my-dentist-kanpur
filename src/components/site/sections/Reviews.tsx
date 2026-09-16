import { Star } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";

const reviews = [
  { name: "Priya S.", text: "Absolute perfectionists. Our sangeet stage was a work of art.", rating: 5 },
  { name: "Rohan M.", text: "The film gave me chills. Worth every rupee, ten times over.", rating: 5 },
  { name: "Neha & Arjun", text: "Calm through the chaos. They anticipated every need.", rating: 5 },
  { name: "Divya K.", text: "Our décor trended on Instagram for weeks. Truly editorial.", rating: 5 },
  { name: "Ananya R.", text: "Best decision of our wedding. Cannot recommend enough.", rating: 5 },
  { name: "Karthik V.", text: "Corporate gala for 800 — flawless. Coming back for the next.", rating: 5 },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Google Reviews</Eyebrow>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex text-rose-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="currentColor" />
              ))}
            </div>
            <span className="font-display text-3xl text-warm-brown">4.9</span>
            <span className="text-sm text-muted-foreground">/ 312 reviews</span>
          </div>
          <h2 className="mt-6 font-display text-4xl text-warm-brown sm:text-5xl">
            Loved by families across{" "}
            <span className="italic text-rose-gold">North India.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-champagne/40 bg-card p-7 transition-all hover:border-rose-gold hover:shadow-soft">
                <div className="flex text-rose-gold">
                  {[...Array(r.rating)].map((_, k) => (
                    <Star key={k} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 font-display text-xl font-light leading-snug text-warm-brown">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-luxe font-display text-ivory">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-normal text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Verified · Google</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}