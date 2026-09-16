import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import founderImg from "@/assets/founder-sumit-kumar-gupta.webp";

export function Founder() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Meet the Founder</Eyebrow>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-warm-brown/10">
              <img
                src={founderImg}
                alt="Sumit Kumar Gupta — Founder of SD Event & Photography, Kanpur"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-6">
            <div>
              <h2 className="font-display text-4xl text-warm-brown sm:text-6xl">
                Sumit Kumar <span className="italic text-rose-gold">Gupta</span>
              </h2>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                Founder – SD Event &amp; Photography, Kanpur
              </p>
            </div>

            <p className="text-base font-light leading-relaxed text-muted-foreground">
              At <strong className="font-medium text-warm-brown">SD Event &amp; Photography</strong>, every
              celebration is planned with creativity, precision, and a personal touch. Founded by{" "}
              <strong className="font-medium text-warm-brown">Sumit Kumar Gupta</strong>, our mission is to
              deliver premium wedding photography, candid photography, cinematic wedding films, event
              planning, birthday decoration, corporate events, haldi &amp; mehendi decoration, stage
              decoration, and luxury event management in Kanpur.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              With years of experience as a trusted event planner and wedding photographer in Kanpur, we
              focus on creating unforgettable memories through professional planning, creative execution,
              and high-quality photography — making us one of the best event management companies in
              Kanpur.
            </p>

            <div className="space-y-2 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-rose-gold" /> 8887811248
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-rose-gold" /> sdeventkanpur@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-gold" /> Barra 2, Sankat Mochan Mandir, Kanpur Nagar
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-warm-brown px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-ivory transition-colors hover:bg-rose-gold"
              >
                Book Your Event →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
              >
                Contact Now →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
