import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/components/Reveal";

import zeissMicroscope from "@/assets/carousel-zeiss-microscope-closeup.webp";
import implantDiagram from "@/assets/carousel-implant-diagram.webp";
import crownsInOneHour from "@/assets/carousel-crowns-in-1-hour.webp";
import laserDentistry from "@/assets/carousel-laser-dentistry.webp";
import braces from "@/assets/carousel-braces.webp";
import aligners from "@/assets/carousel-aligners.webp";
import cerecScanner from "@/assets/cerec-primescan-scanner.webp";
import rootCanalDiagram from "@/assets/carousel-root-canal-diagram.webp";
import smileDesign from "@/assets/carousel-digital-smile-design.webp";

type Service = { title: string; img: string };

const SERVICES: Service[] = [
  { title: "Carl Zeiss Microscope Assisted Dentistry", img: zeissMicroscope },
  { title: "Dental Implants", img: implantDiagram },
  { title: "Crowns in 1 Hour (CEREC Dentistry)", img: crownsInOneHour },
  { title: "Laser Dentistry", img: laserDentistry },
  { title: "Braces", img: braces },
  { title: "Aligners", img: aligners },
  { title: "CEREC Dentistry", img: cerecScanner },
  { title: "Single Sitting Root Canal Treatment", img: rootCanalDiagram },
  { title: "Digital Smile Design", img: smileDesign },
];

const AUTOPLAY_MS = 3200;

export function AdvancedDentistrySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const [isPaused, setIsPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = isPaused;

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  const onMouseEnter = useCallback(() => setIsPaused(true), []);
  const onMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section className="px-3 py-12 md:px-5 md:py-[4.5rem]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="pill border border-foreground/10 bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Advanced Dental Care
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-[1.65rem] md:text-[2.15rem]">
            Advanced Dental Care
          </h2>
          <p className="mt-2.5 max-w-xl text-[0.8rem] leading-relaxed text-muted-foreground md:text-[0.9rem]">
            Precision-driven dentistry powered by modern technology.
          </p>
        </Reveal>

        <div
          className="group/carousel mt-7 overflow-hidden md:mt-8"
          ref={emblaRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex -ml-2.5 md:-ml-4">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-2.5 sm:basis-[55%] md:basis-1/3 md:pl-4"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-aqua/15 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-aqua-soft/20">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 items-center p-4 md:p-[1.3rem]">
                    <h3 className="font-display text-[0.95rem] font-bold leading-snug text-foreground md:text-[1.1rem]">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
