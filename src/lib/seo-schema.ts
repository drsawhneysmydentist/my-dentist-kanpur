// Shared JSON-LD schema builders.
// Centralised here so every page (existing + new service pages) emits
// consistent NAP / business data instead of hand-duplicating it per file.

export const SITE_URL = "https://sdeventkanpur.in";
export const BUSINESS_NAME = "SD Event & Photography";
export const BUSINESS_PHONE = "+91-88878-11248";
export const BUSINESS_PHONE_TEL = "+918887811248";
export const BUSINESS_EMAIL = "sdeventkanpur@gmail.com";

// Pre-filled WhatsApp click-to-chat link (used by Hero + floating WhatsApp
// buttons) so every WhatsApp CTA opens a chat with a ready-made enquiry
// message instead of a blank conversation.
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello SD Event & Photography, I would like to know more about your event planning, wedding planning and photography services in Kanpur.";
export const WHATSAPP_URL = `https://wa.me/918887811248?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

export const BUSINESS_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: "Barra 2",
  addressLocality: "Kanpur",
  addressRegion: "Uttar Pradesh",
  postalCode: "208027",
  addressCountry: "IN",
};

export const SERVICE_AREAS = [
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
];

// Note: uses /public/favicon.jpg (the only stable, always-public image path
// in this project) since no dedicated /public logo/og-image file exists yet.
// Recommendation: add a real 1200x630 og-image.jpg and a square logo.jpg to
// /public for full ImageObject / rich-result support.
export const BUSINESS_IMAGE = `${SITE_URL}/favicon.jpg`;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: BUSINESS_IMAGE,
    image: BUSINESS_IMAGE,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: BUSINESS_ADDRESS,
    sameAs: [
      "https://www.instagram.com/sd_event_kanpur191",
      "https://www.facebook.com/share/1C3CpXrqZ2/",
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanner"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    image: BUSINESS_IMAGE,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: BUSINESS_ADDRESS,
    areaServed: SERVICE_AREAS,
    priceRange: "₹₹",
    url: SITE_URL,
    sameAs: [
      "https://www.instagram.com/sd_event_kanpur191",
      "https://www.facebook.com/share/1C3CpXrqZ2/",
    ],
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: "Kanpur",
      containedInPlace: { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    },
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function buildBreadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
