import { Navbar } from "./Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { FAQ } from "./sections/FAQ";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";
import { FloatingActions } from "./FloatingActions";

import weddingImg from "@/assets/gallery/stage-decor/stage-decor-03.webp";
import candidImg from "@/assets/gallery/wedding/wedding-06.webp";
import cinemaImg from "@/assets/gallery/wedding/wedding-03.webp";
import droneImg from "@/assets/gallery/pre-wedding/pre-wedding-01.webp";
import eventImg from "@/assets/gallery/haldi/haldi-01.webp";
import decorImg from "@/assets/gallery/stage-decor/stage-decor-02.webp";

const weddingServices = [
  {
    title: "Wedding Planning & Decoration",
    tag: "End-to-end wedding planning in Kanpur — venue coordination, budgeting, vendor management and bespoke floral/stage décor, tailored to Hindu, Punjabi, Marwari and destination-style ceremonies across Uttar Pradesh.",
    img: weddingImg,
    alt: "Wedding planning and stage decoration in Kanpur",
  },
  {
    title: "Candid Wedding Photography",
    tag: "Natural, story-driven candid photography that captures real emotion — baraat, phere, vidaai — without staged poses.",
    img: candidImg,
    alt: "Candid wedding photography of bride in Kanpur",
  },
  {
    title: "Cinematic Wedding Videography",
    tag: "Storytelling wedding films with drone coverage, same-day highlight reels, and full-length cinematic edits.",
    img: cinemaImg,
    alt: "Drone cinematic wedding videography Kanpur",
  },
  {
    title: "Pre-Wedding Shoots",
    tag: "Creative pre-wedding photography at scenic locations in and around Kanpur, Lucknow and the Ganga riverfront.",
    img: droneImg,
    alt: "Pre-wedding shoot location near Kanpur",
  },
  {
    title: "Haldi & Mehndi Photography",
    tag: "Vibrant candid coverage of haldi, mehndi and sangeet rituals, paired with themed floral decoration and same-day edited photos.",
    img: eventImg,
    alt: "Haldi and mehndi ceremony decoration Kanpur",
  },
  {
    title: "Mandap & Stage Decoration",
    tag: "Signature floral mandap and stage scenography — from minimalist pastel setups to grand traditional décor.",
    img: decorImg,
    alt: "Floral mandap and stage decoration for Kanpur wedding",
  },
];

const weddingFaqs = [
  {
    q: "Do you provide complete wedding planning in Kanpur?",
    a: "Yes — we handle venue coordination, budgeting, vendor management and décor, alongside candid photography and cinematic videography, all under one accountable team.",
  },
  {
    q: "Do you offer pre-wedding shoots?",
    a: "Yes, at scenic locations in and around Kanpur, Lucknow and the Ganga riverfront.",
  },
  {
    q: "Do you offer wedding videography?",
    a: "Yes, including cinematic wedding films with drone coverage, same-day highlight reels and full-length edits.",
  },
  {
    q: "How early should I book?",
    a: "Ideally 2–3 months before your wedding date, especially for peak wedding season dates in Kanpur and UP.",
  },
  {
    q: "Do you provide haldi and mehndi photography?",
    a: "Yes, along with themed floral decoration and same-day edited photos.",
  },
  {
    q: "Do you cover weddings outside Kanpur?",
    a: "Yes, we take on destination and out-of-city weddings across Uttar Pradesh — get in touch with your venue details for a custom quote.",
  },
];

export function Weddings() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero
          eyebrow="✦ Wedding Planning · Decoration · Candid Photography · Cinematic Videography"
          headline={
            <>
              Wedding Planning & Photography in Kanpur
              <span className="mt-2 block text-2xl italic text-gold-gradient sm:text-3xl">
                — One Team, Every Ritual
              </span>
            </>
          }
          subline="Kanpur's trusted wedding planning studio for decor, candid photography and cinematic films — from roka to vidaai, one accountable team handles it all so you don't have to juggle five vendors."
          imageAlt="Bride and groom during wedding ceremony in Kanpur"
          primaryCta={{ label: "Get Free Quote", href: "#contact" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/918887811248" }}
        />

        <Services
          eyebrow="Services Included"
          heading={
            <>
              Everything your wedding <span className="italic text-rose-gold">needs.</span>
            </>
          }
          subtext="From planning to photography — every wedding moment, planned, decorated, and captured by one accountable team."
          items={weddingServices}
        />

        <WhyChooseUs
          eyebrow="Why Choose Us"
          heading={
            <>
              One team, <span className="italic text-rose-gold">zero stress.</span>
            </>
          }
          points={[
            "One accountable team, zero vendor chaos — planning, décor, photography and videography under a single studio based in Barra 2, Kanpur.",
            "200+ weddings shot across Kanpur and UP.",
            "Transparent, itemised package pricing — no hidden costs.",
            "Same-day highlight reels delivered.",
          ]}
        />

        <FAQ
          eyebrow="Questions"
          heading={
            <>
              Quiet answers to the <span className="italic text-rose-gold">loud</span> ones.
            </>
          }
          items={weddingFaqs}
          showCta={false}
        />

        <CTASection
          eyebrow="Ready When You Are"
          heading={
            <>
              Planning a Wedding in Kanpur or <span className="italic text-rose-gold">Nearby UP?</span>
            </>
          }
          subtext="Get a free, no-obligation quote for planning, décor, photography and videography — one team, one price, zero stress. Call +91 88878 11248 or WhatsApp Us Today."
          primaryCta={{ label: "Get Free Quote", href: "#contact" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/918887811248" }}
        />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
