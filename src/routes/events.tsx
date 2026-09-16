import { createFileRoute } from "@tanstack/react-router";
import { Events } from "@/components/site/Events";
import { SITE_URL, buildBreadcrumbSchema, jsonLdScript } from "@/lib/seo-schema";

const PATH = "/events";
const TITLE = "Event Management Company in Kanpur | SD Events";
const DESCRIPTION =
  "Best event planner in Kanpur for birthdays, corporate events, engagements & anniversaries — with in-house photography. Serving Kakadev, Civil Lines, Swaroop Nagar. Call +91 88878 11248.";

export const Route = createFileRoute("/events")({
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
          { name: "Events", path: PATH },
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
              name: "Do you plan birthday parties for kids and adults?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — full themed decor, execution and photography for kids' and adults' birthdays across Kanpur.",
              },
            },
            {
              "@type": "Question",
              name: "Do you manage corporate events?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, including conferences, product launches, seminars and team celebrations, end-to-end.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer engagement and anniversary decoration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, both are available with matching candid photography coverage.",
              },
            },
            {
              "@type": "Question",
              name: "How much notice do you need?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "2–3 weeks is generally sufficient for birthdays and events; corporate events are best booked 4+ weeks ahead.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide photobooths for parties?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, available as an add-on for birthdays and celebrations.",
              },
            },
            {
              "@type": "Question",
              name: "Which areas of Kanpur do you serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We cover Kakadev, Civil Lines, Swaroop Nagar, Shyam Nagar, Kalyanpur, Govind Nagar, Ratan Lal Nagar, Panki and surrounding areas.",
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
          serviceType: "Event Management",
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
        }),
      },
    ],
  }),
  component: Events,
});
