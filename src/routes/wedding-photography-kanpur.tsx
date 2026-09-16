import { createFileRoute } from "@tanstack/react-router";
import { WeddingPhotographyKanpur } from "@/components/site/services/WeddingPhotographyKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/wedding-photography-kanpur";
const TITLE = "Wedding Photography in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "Candid wedding photography in Kanpur with cinematic films & drone coverage. Same-day highlights, album design. 200+ weddings shot. Free quote — call now.";

const faqs = [
  { q: "Do you offer both photography and videography?", a: "Yes, combined photo + video packages with album design are available for every wedding." },
  { q: "Is drone coverage included?", a: "Drone coverage is available as part of our cinematic wedding film packages, subject to venue permissions." },
  { q: "How soon do we get our wedding photos?", a: "A same-day edited highlight reel is delivered, with full albums and final edits following shortly after." },
  { q: "Do you shoot candid or posed wedding photography?", a: "Our style is primarily candid and documentary — we capture real moments as they happen, with posed shots on request." },
  { q: "Do you cover weddings outside Kanpur?", a: "Yes, we take on wedding photography assignments across Uttar Pradesh on request." },
];

export const Route = createFileRoute("/wedding-photography-kanpur")({
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
          name: "Wedding Photography in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Wedding Photography",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Wedding Photography in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: WeddingPhotographyKanpur,
});
