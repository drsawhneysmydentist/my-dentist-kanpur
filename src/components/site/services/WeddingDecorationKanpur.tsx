import { ServicePageLayout } from "./ServicePageLayout";
import decorImg from "@/assets/gallery/stage-decor/stage-decor-01.webp";
import eventImg from "@/assets/gallery/haldi/haldi-02.webp";
import weddingImg from "@/assets/entry-concepts-stage.png";

export function WeddingDecorationKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Wedding Decorator in Kanpur · Mandap · Stage · Entry Concepts"
      heroHeadline={
        <>
          Wedding Decoration in Kanpur
          <span className="mt-2 block italic text-gold-gradient">— Mandap, Stage & Entry Décor</span>
        </>
      }
      heroSubline="From floral mandaps to grand stage backdrops, SD Event & Photography is a wedding decorator in Kanpur crafting cinematic décor for every ceremony — haldi, mehndi, sangeet and the wedding day itself."
      heroImageAlt="Wedding decoration and floral mandap by a wedding decorator in Kanpur"
      introHeading={
        <>
          A Wedding Decorator <span className="italic text-rose-gold">for Every Ceremony.</span>
        </>
      }
      introParagraphs={[
        "As a dedicated wedding decorator in Kanpur, SD Event & Photography designs floral mandaps, stage backdrops and entry concepts — fog entry, rose petal shower, mirror arch, balloon rain and drone entry — tailored to your theme and venue.",
        "Every décor setup is planned alongside photography, so lighting, colour palette and camera angles are considered from the first mood board, not as an afterthought.",
      ]}
      servicesEyebrow="Wedding Decoration Services"
      servicesHeading={
        <>
          Décor that photographs <span className="italic text-rose-gold">as beautifully as it feels.</span>
        </>
      }
      servicesSubtext="Mandap, stage, entry and ritual décor — designed and executed in Kanpur."
      servicesItems={[
        { title: "Mandap & Stage Décor", tag: "Floral-couture mandaps and grand stage backdrops.", img: decorImg },
        { title: "Haldi & Mehndi Décor", tag: "Vibrant themed décor for pre-wedding rituals.", img: eventImg },
        { title: "Entry Concepts", tag: "Fog entry, rose petal shower, mirror arch, drone entry.", img: weddingImg },
      ]}
      whyHeading={
        <>
          Décor and photography, <span className="italic text-rose-gold">designed together.</span>
        </>
      }
      whyPoints={[
        "Wedding decorator in Kanpur working alongside our own photography team, not a third-party vendor.",
        "Custom themes for mandap, stage and entry concepts to match your vision.",
        "500+ décor setups delivered across Kanpur venues.",
        "Transparent, itemised décor pricing with no hidden costs.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">wedding decoration</span> service.
        </>
      }
      faqs={[
        { q: "Do you offer floral mandap decoration in Kanpur?", a: "Yes — floral-couture mandaps designed around your chosen theme and venue." },
        { q: "What entry concepts do you offer?", a: "Fog entry, rose petal shower, mirror arch, balloon rain, drone entry and Ganga Aarti-themed entries." },
        { q: "Do you decorate for haldi and mehndi separately?", a: "Yes, each ritual gets its own themed décor, paired with matching candid photography coverage." },
        { q: "Can decoration be booked without photography?", a: "Yes, décor can be booked standalone, though most clients combine it with our photography for a coordinated look." },
        { q: "How far in advance should décor be booked?", a: "2–3 months ahead is ideal, especially for peak wedding season dates in Kanpur." },
      ]}
      relatedLinks={[
        { label: "Wedding Planner in Kanpur", href: "/wedding-planner-kanpur" },
        { label: "Wedding Photography in Kanpur", href: "/wedding-photography-kanpur" },
        { label: "Pre-Wedding Photography", href: "/pre-wedding-photography-kanpur" },
        { label: "Birthday Event Planner", href: "/birthday-event-planner-kanpur" },
        { label: "All Weddings", href: "/weddings" },
      ]}
      ctaHeading={
        <>
          Need a Wedding Decorator in Kanpur? <span className="italic text-rose-gold">Get a Free Quote.</span>
        </>
      }
      ctaSubtext="Call +91 88878 11248 or WhatsApp Us Today for a custom décor quote."
    />
  );
}
