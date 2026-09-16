import { ServicePageLayout } from "./ServicePageLayout";
import birthdayImg from "@/assets/gallery/stage-decor/stage-decor-06.webp";
import decorImg from "@/assets/gallery/stage-decor/stage-decor-04.webp";
import entertainmentImg from "@/assets/gallery/corporate/corporate-02.webp";

export function BirthdayEventPlannerKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Birthday Event Planner in Kanpur · Kids · Adults · Milestones"
      heroHeadline={
        <>
          Birthday Event Planner
          <span className="mt-2 block italic text-gold-gradient">in Kanpur</span>
        </>
      }
      heroSubline="SD Event & Photography plans and decorates birthday parties in Kanpur for kids and adults — themed décor, entertainment and candid photography, from first birthdays to milestone celebrations."
      heroImageAlt="Themed birthday party décor by a birthday event planner in Kanpur"
      introHeading={
        <>
          Birthdays, <span className="italic text-rose-gold">Planned and Styled.</span>
        </>
      }
      introParagraphs={[
        "As a birthday event planner in Kanpur, SD Event & Photography designs themed décor for kids' and adults' birthdays — from cartoon-themed setups to elegant milestone celebrations — with balloon décor, photobooths and candid photography.",
        "Every birthday package can be customised to age, theme and guest count, with same-day photo highlights so the celebration is captured, not just decorated.",
      ]}
      servicesEyebrow="Birthday Event Services"
      servicesHeading={
        <>
          Every birthday, <span className="italic text-rose-gold">planned right.</span>
        </>
      }
      servicesSubtext="Themed décor, entertainment and photography for birthdays of every age."
      servicesItems={[
        { title: "Kids' Birthday Décor", tag: "Custom cartoon and theme decoration for children.", img: birthdayImg },
        { title: "Adult Milestone Birthdays", tag: "Elegant décor for 18th, 30th, 50th and other milestones.", img: decorImg },
        { title: "Photobooth & Entertainment", tag: "Photobooths, entertainment and cake-cutting coverage.", img: entertainmentImg },
      ]}
      whyHeading={
        <>
          One planner, <span className="italic text-rose-gold">every kind of birthday.</span>
        </>
      }
      whyPoints={[
        "Dedicated birthday event planner in Kanpur for kids, adults and milestone celebrations.",
        "Custom themes — from cartoon setups to elegant adult soirées.",
        "Candid photography and same-day highlights for every party.",
        "Photobooth and entertainment add-ons available.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">birthday planning</span> service.
        </>
      }
      faqs={[
        { q: "Do you plan birthday parties for both kids and adults?", a: "Yes — full themed décor, execution and photography for kids' and adults' birthdays across Kanpur." },
        { q: "Can I choose a custom theme for my child's birthday?", a: "Yes, themes are fully customisable — cartoon, superhero, princess or any concept you'd like." },
        { q: "Do you provide photobooths?", a: "Yes, photobooths are available as an add-on for birthdays and celebrations." },
        { q: "How much notice do you need for a birthday party?", a: "2–3 weeks is generally sufficient for birthday party planning and décor." },
        { q: "Is photography included in birthday packages?", a: "Candid photography with cake-cutting coverage and same-day highlights can be added to any birthday package." },
      ]}
      relatedLinks={[
        { label: "Event Planner in Kanpur", href: "/event-planner-kanpur" },
        { label: "Corporate Event Management", href: "/corporate-event-management-kanpur" },
        { label: "Wedding Decoration in Kanpur", href: "/wedding-decoration-kanpur" },
        { label: "All Events", href: "/events" },
      ]}
      ctaHeading={
        <>
          Planning a Birthday in Kanpur? <span className="italic text-rose-gold">Get a Free Quote.</span>
        </>
      }
      ctaSubtext="Call +91 88878 11248 or WhatsApp Us Today for birthday packages."
    />
  );
}
