import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, ImageIcon, Zap, ScanLine, Layers, Microscope, Sparkles, Globe2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import clinic from "@/assets/clinic-interior-new.webp";
import smile from "@/assets/clinic-signage-mydentist.webp";
import cerecScanner from "@/assets/clinic-equipment-room.webp";
import primescanPhoto from "@/assets/primescan-intraoral-scanner.webp";
import primemillPhoto from "@/assets/cerec-primemill-machine.webp";
import speedfirePhoto from "@/assets/cerec-speedfire-furnace.webp";
import zeissFullSetup from "@/assets/zeiss-microscope-full-setup.webp";
import zeissCloseup from "@/assets/zeiss-microscope-closeup-optics.webp";
import zoomControlPanel from "@/assets/zoom-control-panel-branding.webp";
import zoomCompleteSystem from "@/assets/zoom-complete-system-clinic.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About My Dentist Kakadeo Kanpur | Best Dental Clinic Kanpur | MDS Specialists Since 2005" },
      {
        name: "description",
        content:
          "About My Dentist — best dental clinic in Kakadeo, Kanpur since 2005. Led by MDS-qualified specialists Dr. Asheesh Sawhny (Endodontist & AAID-Certified Implantologist) and Dr. Karuna Sawhny (Orthodontist). 226+ five-star reviews. Serving Pandu Nagar, Naveen Nagar, Sharda Nagar, and all of Kanpur.",
      },
      { name: "keywords", content: "best dental clinic Kanpur, dentist Kakadeo Kanpur, dental hospital Kanpur, MDS dentist Kakadeo, affordable dental clinic Kanpur, most trusted dental clinic Naveen Nagar Kanpur" },
      { property: "og:title", content: "About My Dentist Kakadeo Kanpur | Best Dental Clinic" },
      { property: "og:url", content: `${SITE.url}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { t: "Precision first", d: "Every restoration is measured, scanned, and refined to the micron." },
    { t: "Calm by design", d: "Atmosphere, materials, and protocols engineered to dissolve anxiety." },
    { t: "Family at heart", d: "The same dentist for grandparents, parents, and curious little ones." },
    { t: "Transparent care", d: "Honest diagnosis, clear pricing, no upsells — ever." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About the clinic"
        title={
          <>
            Twenty years of <span className="italic text-aqua-deep">precise, gentle</span> dentistry in Kanpur.
          </>
        }
        intro={
          <>
            Dr Sawhney's My Dentist is a <span className="font-semibold">modern, family-led super specialty practice</span> in Kakadeo. We blend international clinical standards with the warmth of a neighbourhood clinic — so every visit feels <span className="italic">measured, calm and considered.</span>
          </>
        }
      />

      {/* Image diptych */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={clinic} alt="Modern dental treatment suite with professional dental chair and equipment at MY DENTIST Kakadeo Kanpur" className="h-[460px] w-full object-cover object-center md:h-[560px]" loading="eager" decoding="async" fetchPriority="high" width={940} height={1174} />
              <div className="absolute bottom-6 left-6 glass rounded-2xl p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Established</div>
                <div className="mt-1 font-display text-3xl">2005</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={smile} alt="MY DENTIST Kakadeo clinic exterior signage" className="h-[460px] w-full object-cover object-center md:h-[560px]" loading="eager" decoding="async" width={1054} height={1171} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-4">
          {[
            { v: 21, s: "+", l: "Years of practice" },
            { v: 14, s: "", l: "Treatment specialties" },
            { v: 100, s: "k+", l: "Smiles transformed" },
            { v: 98, s: "%", l: "Satisfaction rate" },
          ].map((s) => (
            <motion.div key={s.l} variants={item} className="bg-background p-8 md:p-10">
              <div className="font-display text-5xl md:text-6xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-3xl font-display text-5xl md:text-6xl">
              A philosophy of <span className="italic text-aqua-deep">measured, lasting</span> care.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <motion.div
                key={v.t}
                variants={item}
                className="rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft transition-shadow hover:shadow-luxe"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-aqua text-white">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-aqua-deep">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold">{v.d}</span></p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Feature section — Technology */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Technology
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              Advanced technology, <span className="italic text-aqua-deep">precise care.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              From same-day digital crowns to microscope-assisted root canals
              — every procedure is backed by internationally trusted
              equipment for accuracy, comfort and lasting results.
            </p>
            <Stagger className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                "Carl Zeiss dental operating microscope — for microscope-assisted root canal treatment",
                "CEREC digital scanning & CAD/CAM dentistry — for Crown in One Hour",
                "Primescan intra-oral scanner — for precise digital impressions",
                "Primemill in-house milling unit — for same-day ceramic crowns",
                "CEREC SpeedFire ceramic furnace — for durable, natural-looking restorations",
                "Same-day dentistry for crowns & restorations",
              ].map((r) => (
                <motion.div key={r} variants={item} className="flex items-center gap-2 rounded-2xl border border-aqua-deep/30 bg-aqua-soft/25 p-5 ring-1 ring-aqua/20">
                  <Star className="h-4 w-4 shrink-0 text-aqua-deep fill-aqua-deep/20" />
                  <div className="font-display text-lg leading-snug">{r}</div>
                </motion.div>
              ))}
            </Stagger>
            <div className="mt-10">
              <MagneticButton to="/contact" hash="consultation-form">
                Visit the clinic <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] p-1.5 shadow-luxe bg-background">
              <img
                src={cerecScanner}
                alt="Advanced digital dentistry equipment at MY DENTIST Kanpur"
                className="h-full w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advanced Technology showcase — placeholder images, real photos to be added later */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="pill border border-foreground/10 bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Advanced Technology
            </div>
            <h2 className="mt-6 max-w-4xl font-display text-5xl md:text-6xl">
              Experience dentistry powered by <span className="italic text-aqua-deep">world-class technology.</span>
            </h2>
            <p className="mt-4 font-display text-xl italic text-aqua-deep">
              Exclusive digital dentistry in Kanpur.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Our clinic is equipped with <span className="font-semibold text-foreground">internationally trusted dental technology</span> that
              enables faster diagnosis, highly precise treatment planning, same-day digital
              restorations, painless procedures, and exceptional clinical accuracy. We
              continuously invest in advanced equipment so our patients receive treatment
              comparable to <span className="font-semibold text-foreground">leading international dental centers</span>.
            </p>
          </Reveal>

          {/* Exclusive technology highlight card */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-amber-300/40 bg-amber-50/40 p-8 shadow-soft sm:flex-row sm:items-start md:p-10">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-600 ring-1 ring-amber-300/50">
                <Star className="h-5 w-5 fill-amber-500/30" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                  Exclusive technology available in Kanpur
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Several of the advanced digital systems showcased below are available at My
                  Dentist Kakadeo, making us among the few clinics in Kanpur offering a
                  complete digital dentistry workflow under one roof.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Alternating equipment showcase blocks */}
          <div className="mt-16 space-y-16 md:mt-20 md:space-y-28">
            {[
              {
                label: "Primescan Scanner",
                name: "Primescan digital intraoral scanner",
                desc: "Captures highly accurate 3D digital impressions within minutes, eliminating traditional impression materials while providing exceptional comfort and precision for crowns, veneers, implants and smile design.",
                features: [
                  "Powder-free digital scanning",
                  "Ultra high accuracy",
                  "Comfortable impression-free experience",
                ],
                image: primescanPhoto as string | undefined,
                alt: "Dentsply Sirona Primescan handheld digital intraoral scanner used for 3D dental impressions at My Dentist Kakadeo Kanpur",
                images: undefined as { src: string; alt: string }[] | undefined,
              },
              {
                label: "CEREC Primemill",
                name: "CEREC Primemill",
                desc: "Advanced in-house CAD/CAM milling unit that fabricates highly precise ceramic crowns, veneers, inlays, onlays, and restorations within a single visit, enabling true same-day digital dentistry.",
                features: [
                  "Same-Day Crown Fabrication",
                  "High-Precision CAD/CAM Milling",
                  "Digital Workflow Integration",
                  "Premium Ceramic Restorations",
                  "Fast & Accurate Results",
                ],
                image: primemillPhoto as string | undefined,
                alt: "Dentsply Sirona CEREC Primemill chairside CAD/CAM milling unit for same-day ceramic dental restorations at My Dentist Kakadeo Kanpur",
                images: undefined as { src: string; alt: string }[] | undefined,
              },
              {
                label: "CEREC SpeedFire",
                name: "CEREC SpeedFire",
                desc: "A compact high-performance ceramic sintering and glazing furnace designed to complete digital ceramic restorations rapidly while maintaining outstanding strength and esthetics.",
                features: [
                  "Fast ceramic sintering",
                  "Premium ceramic finish",
                  "Natural esthetics",
                ],
                image: speedfirePhoto as string | undefined,
                alt: "CEREC SpeedFire ceramic sintering and glazing furnace for rapid dental restorations at My Dentist Kakadeo Kanpur",
                images: undefined as { src: string; alt: string }[] | undefined,
              },
              {
                label: "Philips Zoom",
                name: "Philips Zoom whitening",
                desc: "Professional in-clinic teeth whitening technology that safely delivers noticeably brighter teeth with minimal sensitivity under expert supervision.",
                features: [
                  "Professional whitening",
                  "Fast results",
                  "Safe & comfortable",
                ],
                image: undefined as string | undefined,
                alt: "Philips Zoom professional in-clinic teeth whitening system at My Dentist Kakadeo Kanpur",
                images: [
                  {
                    src: zoomControlPanel,
                    alt: "Philips Zoom whitening system control panel showing start, pause, stop and intensity settings at My Dentist Kakadeo Kanpur",
                  },
                  {
                    src: zoomCompleteSystem,
                    alt: "Complete Philips Zoom professional teeth whitening system on its mobile stand in the treatment room at My Dentist Kakadeo Kanpur",
                  },
                ] as { src: string; alt: string }[] | undefined,
              },
              {
                label: "Carl Zeiss Dental Microscope",
                name: "Carl Zeiss dental microscope",
                desc: "Magnification-assisted dentistry enables superior precision during root canal treatment, restorative procedures and complex dental work by allowing clinicians to visualize details invisible to the naked eye.",
                features: [
                  "Enhanced precision",
                  "Better clinical outcomes",
                  "Microscope-assisted dentistry",
                ],
                image: undefined as string | undefined,
                alt: "Carl Zeiss dental operating microscope used for microscope-assisted root canal treatment at My Dentist Kakadeo Kanpur",
                images: [
                  {
                    src: zeissFullSetup,
                    alt: "Carl Zeiss dental operating microscope — complete mobile setup on wheeled stand at My Dentist Kakadeo Kanpur",
                  },
                  {
                    src: zeissCloseup,
                    alt: "Close-up of the Carl Zeiss dental microscope's optical eyepieces mounted chairside in clinical working position at My Dentist Kakadeo Kanpur",
                  },
                ] as { src: string; alt: string }[] | undefined,
              },
            ].map((eq, i) => (
              <div
                key={eq.name}
                className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
              >
                <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                  {eq.images ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                      {eq.images.map((im) => (
                        <div
                          key={im.src}
                          className="group flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-bone/50 p-1.5 shadow-luxe"
                        >
                          <img
                            src={im.src}
                            alt={im.alt}
                            className="h-full w-full rounded-[1.5rem] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>
                  ) : eq.image ? (
                    <div className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-bone/50 p-1.5 shadow-luxe">
                      <img
                        src={eq.image}
                        alt={eq.alt}
                        className="h-full w-full rounded-[1.5rem] object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-[2rem] border border-dashed border-foreground/15 bg-bone/60 shadow-soft">
                      <ImageIcon className="h-10 w-10 text-foreground/25" />
                      <span className="px-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Image placeholder · {eq.label}
                      </span>
                    </div>
                  )}
                </Reveal>
                <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="font-display text-2xl text-aqua-deep tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{eq.name}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{eq.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {eq.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm md:text-base">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-aqua-deep" />
                        <span className="font-semibold">{f}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>

          {/* Feature grid */}
          <Stagger className="mt-24 grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, t: "Digital Workflow" },
              { icon: ScanLine, t: "3D Digital Impressions" },
              { icon: Layers, t: "CAD/CAM Restorations" },
              { icon: Microscope, t: "Microscope Dentistry" },
              { icon: Sparkles, t: "Professional Whitening" },
              { icon: Globe2, t: "International Standard Equipment" },
            ].map(({ icon: Icon, t }) => (
              <motion.div
                key={t}
                variants={item}
                className="rounded-2xl border border-foreground/8 bg-card p-4 shadow-soft transition-shadow hover:shadow-luxe md:rounded-3xl md:p-7"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full gradient-aqua text-white md:h-10 md:w-10">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="mt-3 font-display text-sm font-bold leading-tight text-aqua-deep md:mt-6 md:text-lg">{t}</h4>
              </motion.div>
            ))}
          </Stagger>

          {/* Statistics */}
          <Stagger className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-4">
            {[
              { v: 98, s: "%", l: "Treatment accuracy", custom: undefined as string | undefined },
              { v: 100, s: "%", l: "Digital workflow", custom: undefined as string | undefined },
              { v: undefined as number | undefined, s: "", l: "Selected ceramic restorations", custom: "Same-Day" },
              { v: undefined as number | undefined, s: "", l: "Premium technology brands", custom: "Global" },
            ].map((s) => (
              <motion.div key={s.l} variants={item} className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl">
                  {s.v !== undefined ? <Counter to={s.v} suffix={s.s} /> : s.custom}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </Stagger>

          {/* CTA */}
          <Reveal>
            <div className="mt-20 rounded-[2rem] border border-foreground/8 bg-card p-12 text-center shadow-soft md:p-16">
              <h3 className="font-display text-4xl md:text-5xl">
                Experience modern dentistry with <span className="italic text-aqua-deep">technology you can trust.</span>
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Discover why patients across Kanpur choose My Dentist Kakadeo for advanced
                digital dental care powered by internationally recognized equipment.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton to="/contact" hash="consultation-form">
                  Book appointment <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton to="/services" variant="outline">
                  View treatments
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-foreground/8 bg-card p-12 text-center shadow-soft md:p-16">
            <div className="font-display text-6xl text-aqua-deep">"</div>
            <p className="mt-2 font-display text-2xl leading-snug italic md:text-3xl">
              "If you are looking for high-quality, precise dental work — Dr Sawhney's clinic is the place. My smile feels completely my own again."
            </p>
            <div className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              — Verified patient · Google review
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
