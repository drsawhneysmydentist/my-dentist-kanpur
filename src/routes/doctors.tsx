import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, item } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import drA from "@/assets/dr-asheesh.webp";
import drK from "@/assets/dr-karuna.webp";
import drS from "@/assets/dr-sirjon-mukherji.webp";
import invisalignBadge from "@/assets/invisalign-official-logo.webp";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Meet Our Doctors | My Dentist Kakadeo Kanpur | MDS Specialists" },
      {
        name: "description",
        content:
          "Dr. Asheesh Sawhny (MDS Endodontics, AAID Implantologist) and Dr. Karuna Singh Sawhny (MDS Orthodontics, IOS Member) — meet the specialist team at My Dentist, Kakadeo, Kanpur.",
      },
      { property: "og:title", content: "Meet Our Doctors | My Dentist Kakadeo" },
      { property: "og:url", content: `${SITE.url}/doctors` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/doctors` }],
  }),
  component: DoctorsPage,
});

type DoctorCard = {
  slug: string;
  name: string;
  qualifications: string;
  role: string;
  bio: string;
  tags: string[];
  badge: string;
  showRating?: boolean;
  img?: string;
  imgPosition?: string;
  credentialBadge?: string;
};

function DoctorsPage() {
  const docs: DoctorCard[] = [
    {
      ...SITE.doctors[1],
      img: drK,
      imgPosition: "center 20%",
      tags: ["Cosmetic", "Paediatric", "Family Dentistry"],
      badge: "14+ Years Experience",
      showRating: true,
      credentialBadge: "Official Invisalign Provider",
    },
    {
      ...SITE.doctors[0],
      img: drA,
      imgPosition: "center 20%",
      tags: ["Endodontist", "Implantologist", "Prosthodontist", "Full Mouth Rehabilitation"],
      badge: "21+ Years Experience",
      showRating: true,
    },
    {
      slug: "dr-sirjon-mukherji",
      name: "Dr. Sirjon Mukherji",
      qualifications: "BDS (Cal) • FDSRCS (Eng) • FDSRCS (Ed) • FIBOMS",
      role: "Oral & Maxillofacial Surgeon | Implantologist",
      bio: "Dr. Sirjon Mukherji is an internationally trained Oral & Maxillofacial Surgeon and Implantologist, specializing in advanced implant surgery, facial trauma and complex oral surgical procedures.",
      tags: ["Oral & Maxillofacial Surgeon", "Implantologist", "Internationally Trained"],
      img: drS,
      badge: "🌍 Internationally Trained",
      showRating: false,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Meet the doctors"
        title={
          <>
            Three specialists. One <span className="italic text-aqua-deep">uncompromising standard.</span>
          </>
        }
        intro={
          <>
            The Sawhneys lead My Dentist with a quiet conviction — that <span className="font-semibold">great dentistry</span> is part craft, part conversation, and <span className="italic">entirely personal.</span>
          </>
        }
      />

      <section className="px-6 pb-24">
        <Stagger className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d) => (
            <motion.article
              key={d.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft transition-shadow hover:shadow-luxe"
            >
              <div className="relative h-[380px] sm:h-[440px] md:h-[540px] overflow-hidden">
                {d.img ? (
                  <img
                    src={d.img}
                    alt={d.name}
                    style={{ objectPosition: d.imgPosition ?? "center" }}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center gradient-aqua">
                    <span className="font-display text-6xl font-bold text-white/90 md:text-7xl">
                      {d.name
                        .replace(/^Dr\.\s*/, "")
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 100%)",
                    zIndex: 1,
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-3" style={{ zIndex: 2 }}>
                  <div
                    className="min-w-0 flex-1"
                    style={{
                      color: "#FFFFFF",
                      textShadow: "0 2px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.7)",
                    }}
                  >
                    <h2
                      className="font-display text-2xl sm:text-4xl md:text-5xl"
                      style={{ color: "#FFFFFF" }}
                    >
                      {d.name}
                    </h2>
                    <p
                      className="mt-2 text-[11px] tracking-[0.1em] sm:text-sm sm:tracking-[0.18em] uppercase"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {d.role}
                    </p>
                    {/* Badges: placed directly below the doctor's name so the face stays unobstructed */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {d.credentialBadge ? (
                        <div className="glass flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 ring-1 ring-white/40 sm:gap-2 sm:px-3.5 sm:py-1.5">
                          <img
                            src={invisalignBadge}
                            alt="Invisalign"
                            className="h-4 w-auto shrink-0 object-contain sm:h-5"
                          />
                          <span className="text-[9px] font-bold uppercase tracking-[0.06em] sm:text-[11px] sm:tracking-[0.1em]">
                            {d.credentialBadge}
                          </span>
                        </div>
                      ) : null}
                      {d.tags.map((t) => (
                        <span key={t} className="glass rounded-full px-3 py-1.5 text-[11px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/${d.slug}` as "/dr-asheesh-sawhny"}
                    className="grid h-11 w-11 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-full gradient-aqua text-white shadow-luxe transition-transform group-hover:scale-110"
                  >
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-base leading-relaxed text-muted-foreground">{d.bio}</p>
                {d.qualifications ? (
                  <p className="mt-3 text-xs font-medium leading-relaxed text-muted-foreground/80">
                    {d.qualifications}
                  </p>
                ) : null}
                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-aqua-deep/20 bg-aqua-deep/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-aqua-deep">
                  {d.badge}
                </div>
                <div className="mt-auto">
                  {d.showRating ? (
                    <div className="mt-6 flex items-center gap-3 border-t border-foreground/8 pt-6 text-sm">
                      <Star className="h-4 w-4 fill-aqua text-aqua" />
                      <span className="font-bold text-lg text-aqua-deep">4.9</span>
                      <span className="text-muted-foreground">· <span className="italic">Highly recommended by patients</span></span>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section className="px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-5xl md:text-6xl">
              Care that <span className="italic text-aqua-deep">begins with listening.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every consultation begins with a conversation — your concerns,
              your history, your goals. Treatment plans follow, never the other way around.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/contact" hash="consultation-form">Book a consultation</MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
