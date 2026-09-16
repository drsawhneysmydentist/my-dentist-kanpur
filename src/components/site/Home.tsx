import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./sections/Hero";
import { ImageScroll } from "./sections/ImageScroll";
import { Stats } from "./sections/Stats";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Portfolio";
import { Films } from "./sections/Films";
import { Packages } from "./sections/Packages";
import { Founder } from "./sections/Founder";
import { Blog } from "./sections/Blog";
import { Testimonials } from "./sections/Testimonials";
import { Reviews } from "./sections/Reviews";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { FloatingActions } from "./FloatingActions";
import { scrollToCurrentHash } from "@/lib/scroll-nav";

const gbpFaqs = [
  {
    q: "What areas does SD Event & Photography serve?",
    a: "We serve Kanpur and nearby areas including Kakadev, Civil Lines, Swaroop Nagar, and Shyam Nagar.",
  },
  {
    q: "Does SD Event & Photography handle both event planning and photography?",
    a: "Yes, we offer complete event planning along with in-house photography and videography for weddings, corporate events, birthdays, and anniversaries.",
  },
  {
    q: "How far in advance should I book for a wedding?",
    a: "We recommend booking at least 2–3 months in advance for weddings, especially during peak wedding season.",
  },
  {
    q: "Do you provide corporate event planning services?",
    a: "Yes, we plan and manage corporate events including conferences, product launches, and team celebrations.",
  },
  {
    q: "Can I book only photography without full event planning?",
    a: "Yes, photography and videography services can be booked independently of event planning.",
  },
  {
    q: "What is included in your wedding planning package?",
    a: "Venue coordination, vendor management, decor coordination, and on-the-day execution support.",
  },
  {
    q: "Do you offer birthday party planning for both kids and adults?",
    a: "Yes, we plan themed birthday parties for all age groups.",
  },
  {
    q: "How can I get a price estimate?",
    a: "Contact us via call or message on our profile and we'll share a customized quote based on your event requirements.",
  },
  {
    q: "Do you provide drone photography for events?",
    a: "Yes, drone photography and videography are available for weddings and large events.",
  },
  {
    q: "Is photo editing and album design included?",
    a: "Yes, professional photo editing and album design are part of our photography packages.",
  },
];

export function Home() {
  useEffect(() => {
    scrollToCurrentHash();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SchemaMarkup />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ImageScroll />
        <Services />
        <Portfolio />
        <Films />
        <Packages />
        <Founder />
        <Blog />
        <Testimonials />
        <Reviews />
        <FAQ />
        <FAQ
          eyebrow="Common Questions"
          heading={
            <>
              Common <span className="italic text-rose-gold">Questions</span>
            </>
          }
          items={gbpFaqs}
          showCta={false}
        />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function SchemaMarkup() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SD Event & Photography",
    image: "/og-image.jpg",
    description:
      "Luxury wedding planner, event management company and cinematic photography atelier based in Kanpur.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    telephone: "+91 00000 00000",
    priceRange: "₹₹₹",
    areaServed: [
      "Kanpur",
      "Kakadev",
      "Civil Lines",
      "Swaroop Nagar",
      "Shyam Nagar",
      "Lajpat Nagar",
      "Kalyanpur",
      "Govind Nagar",
      "Ratan Lal Nagar",
      "Panki",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}