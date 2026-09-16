import { ServicePageLayout } from "./ServicePageLayout";
import weddingImg from "@/assets/gallery/pre-wedding/pre-wedding-01.webp";
import decorImg from "@/assets/gallery/stage-decor/stage-decor-02.webp";
import candidImg from "@/assets/gallery/wedding/wedding-06.webp";

export function WeddingPlannerKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Wedding Planner in Kanpur · Décor · Photography · Videography"
      heroHeadline={
        <>
          Wedding Planner in Kanpur
          <span className="mt-2 block italic text-gold-gradient">— Roka to Vidaai, One Team</span>
        </>
      }
      heroSubline="SD Event & Photography is a dedicated wedding planner in Kanpur handling venue coordination, décor, budgeting, candid photography and cinematic videography — so you never have to juggle five different vendors."
      heroImageAlt="Wedding planner in Kanpur arranging décor for a bride and groom"
      introHeading={
        <>
          A Wedding Planner <span className="italic text-rose-gold">Kanpur Trusts.</span>
        </>
      }
      introParagraphs={[
        "Planning a wedding in Kanpur involves dozens of moving parts — venue, décor, catering coordination, rituals and photography. As a dedicated wedding planner in Kanpur, SD Event & Photography brings all of it under one accountable team, based in Barra 2, Kanpur.",
        "From the first roka to the final vidaai, every ritual is planned, decorated and documented — with transparent, itemised pricing and same-day photo highlights delivered after key events.",
      ]}
      servicesEyebrow="Wedding Planning Services"
      servicesHeading={
        <>
          Every ritual, <span className="italic text-rose-gold">planned and captured.</span>
        </>
      }
      servicesSubtext="Wedding planning, décor and photography — one team, every ceremony."
      servicesItems={[
        { title: "Wedding Decoration in Kanpur", tag: "Mandap, stage and venue décor for every ceremony.", img: decorImg, href: "/wedding-decoration-kanpur" },
        { title: "Wedding Photography in Kanpur", tag: "Candid photography and cinematic wedding films.", img: candidImg, href: "/wedding-photography-kanpur" },
        { title: "Pre-Wedding Photography", tag: "Scenic pre-wedding shoots around Kanpur and Lucknow.", img: weddingImg, href: "/pre-wedding-photography-kanpur" },
      ]}
      whyHeading={
        <>
          One planner, <span className="italic text-rose-gold">zero vendor chaos.</span>
        </>
      }
      whyPoints={[
        "Single accountable wedding planner in Kanpur — no juggling separate décor, catering and photo vendors.",
        "200+ weddings planned and shot across Kanpur and Uttar Pradesh.",
        "Transparent, itemised package pricing with no hidden costs.",
        "Same-day highlight reels delivered after every major ritual.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">wedding planning</span> service.
        </>
      }
      faqs={[
        { q: "Does a wedding planner in Kanpur handle venue booking too?", a: "We coordinate directly with your chosen venue on décor, timelines and vendor access, alongside full planning and photography." },
        { q: "How early should I book a wedding planner in Kanpur?", a: "Ideally 2–3 months before your wedding date, especially during peak wedding season." },
        { q: "Do you plan destination or out-of-Kanpur weddings?", a: "Yes, we take on weddings across Uttar Pradesh — share your venue details for a custom quote." },
        { q: "Is photography included with wedding planning?", a: "Yes — candid photography and cinematic videography are part of our combined wedding planning packages." },
        { q: "Can I book planning and décor without photography?", a: "Yes, all services can be booked individually or combined at a discounted rate." },
      ]}
      relatedLinks={[
        { label: "Wedding Decoration in Kanpur", href: "/wedding-decoration-kanpur" },
        { label: "Wedding Photography in Kanpur", href: "/wedding-photography-kanpur" },
        { label: "Pre-Wedding Photography", href: "/pre-wedding-photography-kanpur" },
        { label: "Event Planner in Kanpur", href: "/event-planner-kanpur" },
        { label: "All Weddings", href: "/weddings" },
      ]}
      ctaHeading={
        <>
          Planning a Wedding in Kanpur? <span className="italic text-rose-gold">Get a Free Quote.</span>
        </>
      }
      ctaSubtext="Talk to Kanpur's accountable wedding planning team. Call +91 88878 11248 or WhatsApp Us Today."
    />
  );
}
