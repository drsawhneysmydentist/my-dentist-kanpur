import { createFileRoute } from "@tanstack/react-router";
import { PreWeddingPhotographyKanpur } from "@/components/site/services/PreWeddingPhotographyKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/pre-wedding-photography-kanpur";
const TITLE = "Pre Wedding Photography in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "Pre wedding photography in Kanpur at scenic locations with candid styling & quick-turnaround editing. Cinematic pre-wedding films available. Call now.";

const faqs = [
  { q: "Where do you shoot pre-wedding photography near Kanpur?", a: "Curated scenic locations in and around Kanpur, plus getaway options near Lucknow and the Ganga riverfront." },
  { q: "How long does a pre-wedding shoot take?", a: "Most pre-wedding shoots are completed in a half-day to full-day session, depending on the number of locations and outfit changes." },
  { q: "How soon will I get the edited photos?", a: "Quick-turnaround editing means your favourite frames are ready well ahead of invites and save-the-dates." },
  { q: "Do you offer a cinematic pre-wedding video?", a: "Yes, a short cinematic pre-wedding film can be added alongside your photography package." },
  { q: "Can pre-wedding photography be combined with wedding photography?", a: "Yes, combo packages covering pre-wedding and wedding day photography are available at a discounted rate." },
];

export const Route = createFileRoute("/pre-wedding-photography-kanpur")({
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
          name: "Pre Wedding Photography in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Pre Wedding Photography",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pre Wedding Photography in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: PreWeddingPhotographyKanpur,
});
