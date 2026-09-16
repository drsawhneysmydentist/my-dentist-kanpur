import { createFileRoute } from "@tanstack/react-router";
import { WeddingDecorationKanpur } from "@/components/site/services/WeddingDecorationKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/wedding-decoration-kanpur";
const TITLE = "Wedding Decorator in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "SD Event & Photography — wedding decorator in Kanpur for mandap, stage & entry décor. Fog entry, floral mandaps, mirror arch & more. Free quote — call now.";

const faqs = [
  { q: "Do you offer floral mandap decoration in Kanpur?", a: "Yes — floral-couture mandaps designed around your chosen theme and venue." },
  { q: "What entry concepts do you offer?", a: "Fog entry, rose petal shower, mirror arch, balloon rain, drone entry and Ganga Aarti-themed entries." },
  { q: "Do you decorate for haldi and mehndi separately?", a: "Yes, each ritual gets its own themed décor, paired with matching candid photography coverage." },
  { q: "Can decoration be booked without photography?", a: "Yes, décor can be booked standalone, though most clients combine it with our photography for a coordinated look." },
  { q: "How far in advance should décor be booked?", a: "2–3 months ahead is ideal, especially for peak wedding season dates in Kanpur." },
];

export const Route = createFileRoute("/wedding-decoration-kanpur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
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
        buildServiceSchema({
          name: "Wedding Decoration in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Wedding Decorator",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Wedding Decoration in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: WeddingDecorationKanpur,
});
