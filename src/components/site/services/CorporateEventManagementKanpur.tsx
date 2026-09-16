import { ServicePageLayout } from "./ServicePageLayout";
import corporateImg from "@/assets/gallery/corporate/corporate-02.webp";
import entertainmentImg from "@/assets/gallery/corporate/corporate-03.webp";
import eventImg from "@/assets/gallery/corporate/corporate-01.webp";

export function CorporateEventManagementKanpur() {
  return (
    <ServicePageLayout
      heroEyebrow="✦ Corporate Event Planner in Kanpur · Conferences · Launches · Seminars"
      heroHeadline={
        <>
          Corporate Event Management
          <span className="mt-2 block italic text-gold-gradient">in Kanpur</span>
        </>
      }
      heroSubline="SD Event & Photography is a corporate event planner in Kanpur handling conferences, product launches, seminars and team celebrations — end-to-end planning, execution and professional photography."
      heroImageAlt="Corporate event management setup in Kanpur"
      introHeading={
        <>
          Corporate Events, <span className="italic text-rose-gold">Managed Professionally.</span>
        </>
      }
      introParagraphs={[
        "As a corporate event planner in Kanpur, SD Event & Photography handles venue coordination, stage setup, vendor management and on-the-day execution for conferences, product launches, seminars and internal team celebrations.",
        "Every corporate event includes professional photography and videography coverage, with same-day edited highlights suitable for internal communications and social media.",
      ]}
      servicesEyebrow="Corporate Event Services"
      servicesHeading={
        <>
          Every corporate event, <span className="italic text-rose-gold">planned and covered.</span>
        </>
      }
      servicesSubtext="Conferences, launches, seminars and team celebrations — managed end-to-end."
      servicesItems={[
        { title: "Conferences & Seminars", tag: "Full stage, AV and venue coordination.", img: corporateImg },
        { title: "Product Launches", tag: "Branded décor and professional event photography.", img: eventImg },
        { title: "Team Celebrations", tag: "Corporate parties, anniversaries and team offsites.", img: entertainmentImg },
      ]}
      whyHeading={
        <>
          A corporate event planner <span className="italic text-rose-gold">that delivers on time.</span>
        </>
      }
      whyPoints={[
        "Dedicated corporate event planner in Kanpur for conferences, launches and seminars.",
        "End-to-end management — venue, décor, AV coordination and photography.",
        "Same-day edited highlights for internal communications and social media.",
        "Transparent, itemised pricing for corporate budgets and approvals.",
      ]}
      faqHeading={
        <>
          Questions about our <span className="italic text-rose-gold">corporate event</span> service.
        </>
      }
      faqs={[
        { q: "Do you manage corporate events end-to-end?", a: "Yes — venue coordination, décor, vendor management and on-the-day execution are all handled by one team." },
        { q: "Do you provide photography for corporate events?", a: "Yes, professional event photography and videography with same-day edited highlights are included." },
        { q: "How much notice do you need for a corporate event?", a: "4+ weeks is recommended for conferences and product launches; shorter notice can often be accommodated for smaller events." },
        { q: "Can you handle recurring corporate events?", a: "Yes, we work with several Kanpur businesses on recurring seminars, anniversaries and team celebrations." },
        { q: "Do you provide invoices for corporate bookings?", a: "Yes, formal quotations and invoices are provided for corporate accounting and approvals." },
      ]}
      relatedLinks={[
        { label: "Event Planner in Kanpur", href: "/event-planner-kanpur" },
        { label: "Birthday Event Planner", href: "/birthday-event-planner-kanpur" },
        { label: "Wedding Planner in Kanpur", href: "/wedding-planner-kanpur" },
        { label: "All Events", href: "/events" },
      ]}
      ctaHeading={
        <>
          Planning a Corporate Event in Kanpur? <span className="italic text-rose-gold">Get a Free Quote.</span>
        </>
      }
      ctaSubtext="Call +91 88878 11248 or WhatsApp Us Today for corporate event packages."
    />
  );
}
