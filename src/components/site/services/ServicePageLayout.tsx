import { Navbar } from "../Navbar";
import { Hero } from "../sections/Hero";
import { ServiceIntro } from "../sections/ServiceIntro";
import { Services } from "../sections/Services";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { FAQ } from "../sections/FAQ";
import { RelatedServices } from "../sections/RelatedServices";
import { CTASection } from "../sections/CTASection";
import { Footer } from "../sections/Footer";
import { FloatingActions } from "../FloatingActions";

export type ServiceItem = { title: string; tag: string; img: string; href?: string; alt?: string };
export type FaqItem = { q: string; a: string };

export type ServicePageConfig = {
  heroEyebrow: string;
  heroHeadline: React.ReactNode;
  heroSubline: string;
  heroImageAlt: string;
  introHeading: React.ReactNode;
  introParagraphs: string[];
  servicesEyebrow: string;
  servicesHeading: React.ReactNode;
  servicesSubtext: string;
  servicesItems: ServiceItem[];
  whyHeading: React.ReactNode;
  whyPoints: string[];
  faqHeading: React.ReactNode;
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
  ctaHeading: React.ReactNode;
  ctaSubtext: string;
};

// Every new service page is built from this single layout using ONLY
// existing, unmodified section components (Hero, Services, WhyChooseUs,
// FAQ, CTASection, Footer, Navbar, FloatingActions) — no design, styling,
// or component changes, only new content passed in as props.
export function ServicePageLayout(config: ServicePageConfig) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero
          eyebrow={config.heroEyebrow}
          headline={config.heroHeadline}
          headlineClassName="text-[clamp(2.25rem,6vw,5rem)] leading-[1.15]"
          subline={config.heroSubline}
          imageAlt={config.heroImageAlt}
          primaryCta={{ label: "Get Free Quote", href: "#contact" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/918887811248" }}
        />

        <ServiceIntro heading={config.introHeading} paragraphs={config.introParagraphs} />

        <Services
          eyebrow={config.servicesEyebrow}
          heading={config.servicesHeading}
          subtext={config.servicesSubtext}
          items={config.servicesItems}
        />

        <WhyChooseUs eyebrow="Why Choose Us" heading={config.whyHeading} points={config.whyPoints} />

        <FAQ
          eyebrow="Questions"
          heading={config.faqHeading}
          items={config.faqs}
          showCta={false}
        />

        <RelatedServices items={config.relatedLinks} />

        <CTASection
          eyebrow="Ready When You Are"
          heading={config.ctaHeading}
          subtext={config.ctaSubtext}
          primaryCta={{ label: "Get Free Quote", href: "#contact" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/918887811248" }}
        />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
