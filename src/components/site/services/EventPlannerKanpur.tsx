import { ServicePageLayout } from "./ServicePageLayout";
import eventImg from "@/assets/gallery/stage-decor/stage-decor-06.webp";
import weddingImg from "@/assets/gallery/wedding/wedding-01.webp";
import corporateImg from "@/assets/gallery/corporate/corporate-01.webp";

export function EventPlannerKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Event Planner in Kanpur · Weddings · Corporate · Birthdays · Photography"
      heroHeadline={
        <>
          Event Planner in Kanpur
          <span className="mt-2 block italic text-gold-gradient">for Every Kind of Celebration</span>
        </>
      }
      heroSubline="SD Event & Photography is a full-service event planner in Kanpur handling weddings, corporate events, birthdays and private celebrations — planning, décor and photography from one accountable team based in Barra 2, Kanpur."
      heroImageAlt="Professional event planning and décor setup by an event planner in Kanpur"
      introHeading={
        <>
          Kanpur's Accountable <span className="italic text-rose-gold">Event Planning Team</span>
        </>
      }
      introParagraphs={[
        "Looking for a reliable event planner in Kanpur? SD Event & Photography plans, decorates and photographs weddings, corporate events, birthdays and anniversaries across Kanpur — including Kakadev, Civil Lines, Swaroop Nagar and Shyam Nagar — so you deal with one accountable studio instead of five separate vendors.",
        "Every event is planned around your budget and vision, from venue coordination and vendor management to on-the-day execution and professional photography with same-day highlight delivery.",
      ]}
      servicesEyebrow="Event Planning Services in Kanpur"
      servicesHeading={
        <>
          Full-service event planning, <span className="italic text-rose-gold">Kanpur-wide.</span>
        </>
      }
      servicesSubtext="From weddings to boardrooms — planning, décor and photography under one roof."
      servicesItems={[
        { title: "Wedding Planning in Kanpur", tag: "End-to-end wedding planning, décor and photography.", img: weddingImg, href: "/wedding-planner-kanpur" },
        { title: "Corporate Event Management", tag: "Conferences, launches, seminars and corporate celebrations.", img: corporateImg, href: "/corporate-event-management-kanpur" },
        { title: "Birthday & Private Events", tag: "Themed birthday and celebration planning for all ages.", img: eventImg, href: "/birthday-event-planner-kanpur" },
      ]}
      whyHeading={
        <>
          Why Kanpur chooses <span className="italic text-rose-gold">SD Event & Photography.</span>
        </>
      }
      whyPoints={[
        "One accountable event planner in Kanpur for planning, décor and photography.",
        "500+ events delivered across Kakadev, Civil Lines, Swaroop Nagar, Kalyanpur and Govind Nagar.",
        "Transparent, itemised package pricing with no hidden costs.",
        "Dedicated on-ground execution team for every event date.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">event planning</span> service.
        </>
      }
      faqs={[
        { q: "What does an event planner in Kanpur handle?", a: "Venue coordination, budgeting, décor, vendor management, on-the-day execution and photography — SD Event & Photography manages all of it under one team." },
        { q: "Which areas of Kanpur do you serve as an event planner?", a: "Kakadev, Civil Lines, Swaroop Nagar, Shyam Nagar, Lajpat Nagar, Kalyanpur, Govind Nagar, Ratan Lal Nagar and Panki." },
        { q: "Do you plan both weddings and corporate events?", a: "Yes — weddings, corporate events, birthdays and anniversaries are all planned by the same accountable team." },
        { q: "How much notice do you need to plan an event?", a: "2–3 weeks for birthdays and smaller events; 2–3 months for weddings and larger corporate events." },
        { q: "Can I get a custom event planning quote?", a: "Yes, every package is customised to your event size, venue and budget — call or WhatsApp for a free quote." },
      ]}
      relatedLinks={[
        { label: "Wedding Planner in Kanpur", href: "/wedding-planner-kanpur" },
        { label: "Wedding Decoration in Kanpur", href: "/wedding-decoration-kanpur" },
        { label: "Corporate Event Management", href: "/corporate-event-management-kanpur" },
        { label: "Birthday Event Planner", href: "/birthday-event-planner-kanpur" },
        { label: "All Events", href: "/events" },
      ]}
      ctaHeading={
        <>
          Planning an Event in Kanpur? <span className="italic text-rose-gold">Let's Talk.</span>
        </>
      }
      ctaSubtext="Get a free quote from Kanpur's accountable event planning team. Call +91 88878 11248 or WhatsApp Us Today."
    />
  );
}
