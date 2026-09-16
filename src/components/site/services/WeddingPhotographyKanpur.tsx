import { ServicePageLayout } from "./ServicePageLayout";
import candidImg from "@/assets/gallery/wedding/wedding-06.webp";
import cinemaImg from "@/assets/gallery/wedding/wedding-03.webp";
import droneImg from "@/assets/gallery/team-management/team-04.webp";

export function WeddingPhotographyKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Wedding Photography in Kanpur · Candid · Cinematic · Drone"
      heroHeadline={
        <>
          Wedding Photography in Kanpur
          <span className="mt-2 block italic text-gold-gradient">— Candid, Cinematic & Drone Coverage</span>
        </>
      }
      heroSubline="SD Event & Photography delivers candid wedding photography and cinematic wedding films in Kanpur, with drone coverage and same-day highlight reels — every ritual documented, not staged."
      heroImageAlt="Candid wedding photography coverage in Kanpur"
      introHeading={
        <>
          Wedding Photography that <span className="italic text-rose-gold">Feels Real.</span>
        </>
      }
      introParagraphs={[
        "Our wedding photography in Kanpur focuses on candid, unposed moments — first looks, ritual details and reactions from family — captured alongside cinematic wedding films with drone coverage.",
        "Every wedding gets a same-day edited highlight reel, followed by full-length edits and album design, so you can relive the day before the celebrations are even over.",
      ]}
      servicesEyebrow="Wedding Photography Services"
      servicesHeading={
        <>
          Every angle, <span className="italic text-rose-gold">every emotion.</span>
        </>
      }
      servicesSubtext="Candid photography, cinematic films and drone coverage for Kanpur weddings."
      servicesItems={[
        { title: "Candid Wedding Photography", tag: "Unposed, emotion-first coverage of every ritual.", img: candidImg },
        { title: "Cinematic Wedding Films", tag: "Storytelling-style edits with same-day highlight reels.", img: cinemaImg },
        { title: "Drone Wedding Coverage", tag: "Aerial shots for venue, baraat and grand entries.", img: droneImg },
      ]}
      whyHeading={
        <>
          Photography, <span className="italic text-rose-gold">not just documentation.</span>
        </>
      }
      whyPoints={[
        "Candid, unposed wedding photography style — Kanpur's most requested approach.",
        "200+ weddings covered with cinematic films and drone footage.",
        "Same-day highlight reels delivered before the wedding week ends.",
        "Album design and full-length edits included in combined packages.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">wedding photography</span> service.
        </>
      }
      faqs={[
        { q: "Do you offer both photography and videography?", a: "Yes, combined photo + video packages with album design are available for every wedding." },
        { q: "Is drone coverage included?", a: "Drone coverage is available as part of our cinematic wedding film packages, subject to venue permissions." },
        { q: "How soon do we get our wedding photos?", a: "A same-day edited highlight reel is delivered, with full albums and final edits following shortly after." },
        { q: "Do you shoot candid or posed wedding photography?", a: "Our style is primarily candid and documentary — we capture real moments as they happen, with posed shots on request." },
        { q: "Do you cover weddings outside Kanpur?", a: "Yes, we take on wedding photography assignments across Uttar Pradesh on request." },
      ]}
      relatedLinks={[
        { label: "Wedding Planner in Kanpur", href: "/wedding-planner-kanpur" },
        { label: "Wedding Decoration in Kanpur", href: "/wedding-decoration-kanpur" },
        { label: "Pre-Wedding Photography", href: "/pre-wedding-photography-kanpur" },
        { label: "Event Planner in Kanpur", href: "/event-planner-kanpur" },
        { label: "All Weddings", href: "/weddings" },
      ]}
      ctaHeading={
        <>
          Looking for a Wedding Photographer in Kanpur? <span className="italic text-rose-gold">Let's Talk.</span>
        </>
      }
      ctaSubtext="Call +91 88878 11248 or WhatsApp Us Today for availability and packages."
    />
  );
}
