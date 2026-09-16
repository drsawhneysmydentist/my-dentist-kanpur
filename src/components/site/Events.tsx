import { Navbar } from "./Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { FAQ } from "./sections/FAQ";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";
import { FloatingActions } from "./FloatingActions";

import birthdayImg from "@/assets/gallery/stage-decor/stage-decor-06.webp";
import corporateImg from "@/assets/gallery/corporate/corporate-01.webp";
import candidImg from "@/assets/gallery/pre-wedding/pre-wedding-02.webp";
import eventImg from "@/assets/gallery/home-decor/home-decor-02.webp";
import decorImg from "@/assets/gallery/home-decor/home-decor-01.webp";
import entertainmentImg from "@/assets/gallery/corporate/corporate-03.webp";

const eventServices = [
  {
    title: "Birthday Party Planning & Decoration",
    tag: "Themed birthday party planning for kids and adults in Kanpur — from balloon décor to full-scale themed setups.",
    img: birthdayImg,
    alt: "Birthday decoration setup in Kanpur",
  },
  {
    title: "Corporate Event Management",
    tag: "End-to-end corporate event planning in Kanpur — conferences, product launches, seminars and team celebrations.",
    img: corporateImg,
    alt: "Corporate event setup in Kanpur",
  },
  {
    title: "Engagement Decoration & Photography",
    tag: "Engagement ceremony planning and décor paired with candid photography.",
    img: candidImg,
    alt: "Engagement photography and decoration Kanpur",
  },
  {
    title: "Anniversary Celebrations",
    tag: "Anniversary planner services in Kanpur for milestone celebrations — intimate gatherings to large-scale parties.",
    img: eventImg,
    alt: "Anniversary celebration decoration Kanpur",
  },
  {
    title: "Theme Decoration",
    tag: "Custom theme decoration for any occasion — from kids' cartoon themes to elegant adult soirées.",
    img: decorImg,
    alt: "Custom theme decoration for events in Kanpur",
  },
  {
    title: "Event Photography & Videography",
    tag: "Professional event photography and videography, including drone coverage, with same-day edited highlights.",
    img: entertainmentImg,
    alt: "Event photography and videography coverage Kanpur",
  },
];

const eventFaqs = [
  {
    q: "Do you plan birthday parties for kids and adults?",
    a: "Yes — full themed decor, execution and photography for kids' and adults' birthdays across Kanpur.",
  },
  {
    q: "Do you manage corporate events?",
    a: "Yes, including conferences, product launches, seminars and team celebrations, end-to-end.",
  },
  {
    q: "Do you offer engagement and anniversary decoration?",
    a: "Yes, both are available with matching candid photography coverage.",
  },
  {
    q: "How much notice do you need?",
    a: "2–3 weeks is generally sufficient for birthdays and events; corporate events are best booked 4+ weeks ahead.",
  },
  {
    q: "Do you provide photobooths for parties?",
    a: "Yes, available as an add-on for birthdays and celebrations.",
  },
  {
    q: "Which areas of Kanpur do you serve?",
    a: "We cover Kakadev, Civil Lines, Swaroop Nagar, Shyam Nagar, Kalyanpur, Govind Nagar, Ratan Lal Nagar, Panki and surrounding areas.",
  },
];

export function Events() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero
          eyebrow="✦ Birthdays · Corporate Events · Engagements · Anniversaries · Theme Decoration"
          headline={
            <>
              Event Planner &amp; Photography
              <span className="mt-2 block italic text-gold-gradient">for Birthdays &amp; Corporate Events</span>
              <span className="mt-2 block">in Kanpur</span>
            </>
          }
          headlineClassName="text-[clamp(2.25rem,6vw,5rem)] leading-[1.15]"
          subline="Kanpur's dependable event management company for birthday parties, corporate events, engagements and anniversaries — décor, execution and professional photography from one accountable team."
          imageAlt="Corporate event and celebration setup in Kanpur"
          primaryCta={{ label: "Get Free Quote", href: "#contact" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/918887811248" }}
        />

        <Services
          eyebrow="Services Included"
          heading={
            <>
              Every celebration, <span className="italic text-rose-gold">planned right.</span>
            </>
          }
          subtext="From birthdays to boardrooms — every event planned, decorated, and captured by one accountable team."
          items={eventServices}
        />

        <WhyChooseUs
          eyebrow="Why Choose Us"
          heading={
            <>
              One team, <span className="italic text-rose-gold">every occasion.</span>
            </>
          }
          points={[
            "One team for planning, décor & photography.",
            "500+ events delivered across Kakadev, Civil Lines, Swaroop Nagar, Shyam Nagar, Kalyanpur, Govind Nagar, Ratan Lal Nagar and Panki.",
            "Custom themes for every age and occasion.",
            "Same-day photo/video highlights.",
          ]}
        />

        <FAQ
          eyebrow="Questions"
          heading={
            <>
              Quiet answers to the <span className="italic text-rose-gold">loud</span> ones.
            </>
          }
          items={eventFaqs}
          showCta={false}
        />

        <CTASection
          eyebrow="Ready When You Are"
          heading={
            <>
              Planning a Birthday, Corporate Event or <span className="italic text-rose-gold">Celebration in Kanpur?</span>
            </>
          }
          subtext="Get a free quote — décor, execution and photography, all from one event management company. Call +91 88878 11248 or WhatsApp Us Today."
          primaryCta={{ label: "Get Free Quote", href: "#contact" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/918887811248" }}
        />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
