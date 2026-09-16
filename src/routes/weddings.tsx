import { createFileRoute } from "@tanstack/react-router";
import { Weddings } from "@/components/site/Weddings";
import { SITE_URL, buildBreadcrumbSchema, jsonLdScript } from "@/lib/seo-schema";

const PATH = "/weddings";
const TITLE = "Wedding Planner & Photographer in Kanpur | SD Events";
const DESCRIPTION =
  "Complete wedding planning, decor, candid photography & cinematic films in Kanpur, Lucknow & UP. 200+ weddings. Free quote — Call +91 88878 11248.";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content: DESCRIPTION,
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Weddings", path: PATH },
        ]),
      ),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you provide complete wedding planning in Kanpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — we handle venue coordination, budgeting, vendor management and décor, alongside candid photography and cinematic videography, all under one accountable team.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer pre-wedding shoots?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, at scenic locations in and around Kanpur, Lucknow and the Ganga riverfront.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer wedding videography?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, including cinematic wedding films with drone coverage, same-day highlight reels and full-length edits.",
              },
            },
            {
              "@type": "Question",
              name: "How early should I book?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ideally 2–3 months before your wedding date, especially for peak wedding season dates in Kanpur and UP.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide haldi and mehndi photography?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, along with themed floral decoration and same-day edited photos.",
              },
            },
            {
              "@type": "Question",
              name: "Do you cover weddings outside Kanpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we take on destination and out-of-city weddings across Uttar Pradesh — get in touch with your venue details for a custom quote.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Wedding Planning",
          provider: {
            "@type": "LocalBusiness",
            name: "SD Event & Photography",
            telephone: "+91-88878-11248",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Barra 2",
              addressLocality: "Kanpur",
              addressRegion: "Uttar Pradesh",
              postalCode: "208027",
              addressCountry: "IN",
            },
          },
          areaServed: ["Kanpur", "Lucknow", "Uttar Pradesh"],
        }),
      },
    ],
  }),
  component: Weddings,
});
