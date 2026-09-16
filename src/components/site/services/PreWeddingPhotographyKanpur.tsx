import { ServicePageLayout } from "./ServicePageLayout";
import candidImg from "@/assets/gallery/pre-wedding/pre-wedding-04.webp";
import weddingImg from "@/assets/gallery/pre-wedding/pre-wedding-01.webp";
import cinemaImg from "@/assets/gallery/pre-wedding/pre-wedding-03.webp";

export function PreWeddingPhotographyKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Pre Wedding Photography in Kanpur · Scenic Locations · Quick Turnaround"
      heroHeadline={
        <>
          Pre Wedding Photography
          <span className="mt-2 block italic text-gold-gradient">in Kanpur</span>
        </>
      }
      heroSubline="SD Event & Photography shoots pre-wedding photography in Kanpur and nearby scenic locations, with candid styling and quick-turnaround editing — so your pre-wedding shoot is ready before your invites go out."
      heroImageAlt="Pre-wedding photography shoot at a scenic location near Kanpur"
      introHeading={
        <>
          Pre-Wedding Shoots, <span className="italic text-rose-gold">Beautifully Told.</span>
        </>
      }
      introParagraphs={[
        "Our pre-wedding photography in Kanpur covers scenic locations in and around the city, along with getaway options near Lucknow and the Ganga riverfront — styled candidly rather than stiffly posed.",
        "Every pre-wedding shoot includes quick-turnaround editing, so your favourite frames are ready for invites, save-the-dates and social media well ahead of the wedding.",
      ]}
      servicesEyebrow="Pre-Wedding Photography Services"
      servicesHeading={
        <>
          Locations and styles <span className="italic text-rose-gold">to match your story.</span>
        </>
      }
      servicesSubtext="Scenic pre-wedding shoots around Kanpur, styled candidly."
      servicesItems={[
        { title: "Scenic Location Shoots", tag: "Curated Kanpur and nearby locations for your shoot.", img: weddingImg },
        { title: "Candid Pre-Wedding Styling", tag: "Natural, unposed pre-wedding photography.", img: candidImg },
        { title: "Cinematic Pre-Wedding Films", tag: "Short cinematic pre-wedding video edits.", img: cinemaImg },
      ]}
      whyHeading={
        <>
          Ready before your <span className="italic text-rose-gold">invites go out.</span>
        </>
      }
      whyPoints={[
        "Pre-wedding photography in Kanpur with quick-turnaround editing.",
        "Curated scenic locations in and around Kanpur and Lucknow.",
        "Candid styling — natural moments over stiff posing.",
        "Optional short cinematic pre-wedding film add-on.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">pre-wedding photography</span> service.
        </>
      }
      faqs={[
        { q: "Where do you shoot pre-wedding photography near Kanpur?", a: "Curated scenic locations in and around Kanpur, plus getaway options near Lucknow and the Ganga riverfront." },
        { q: "How long does a pre-wedding shoot take?", a: "Most pre-wedding shoots are completed in a half-day to full-day session, depending on the number of locations and outfit changes." },
        { q: "How soon will I get the edited photos?", a: "Quick-turnaround editing means your favourite frames are ready well ahead of invites and save-the-dates." },
        { q: "Do you offer a cinematic pre-wedding video?", a: "Yes, a short cinematic pre-wedding film can be added alongside your photography package." },
        { q: "Can pre-wedding photography be combined with wedding photography?", a: "Yes, combo packages covering pre-wedding and wedding day photography are available at a discounted rate." },
      ]}
      relatedLinks={[
        { label: "Wedding Photography in Kanpur", href: "/wedding-photography-kanpur" },
        { label: "Wedding Planner in Kanpur", href: "/wedding-planner-kanpur" },
        { label: "Wedding Decoration in Kanpur", href: "/wedding-decoration-kanpur" },
        { label: "All Weddings", href: "/weddings" },
      ]}
      ctaHeading={
        <>
          Ready for Your Pre-Wedding Shoot? <span className="italic text-rose-gold">Get a Free Quote.</span>
        </>
      }
      ctaSubtext="Call +91 88878 11248 or WhatsApp Us Today to check location availability."
    />
  );
}
