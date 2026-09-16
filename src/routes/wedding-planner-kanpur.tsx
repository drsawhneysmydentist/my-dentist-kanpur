import { createFileRoute } from "@tanstack/react-router";
import { WeddingPlannerKanpur } from "@/components/site/services/WeddingPlannerKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/wedding-planner-kanpur";
const TITLE = "Wedding Planner in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "SD Event & Photography — dedicated wedding planner in Kanpur for décor, budgeting, candid photography & cinematic films. 200+ weddings. Free quote — call now.";

const faqs = [
  { q: "Does a wedding planner in Kanpur handle venue booking too?", a: "We coordinate directly with your chosen venue on décor, timelines and vendor access, alongside full planning and photography." },
  { q: "How early should I book a wedding planner in Kanpur?", a: "Ideally 2–3 months before your wedding date, especially during peak wedding season." },
  { q: "Do you plan destination or out-of-Kanpur weddings?", a: "Yes, we take on weddings across Uttar Pradesh — share your venue details for a custom quote." },
  { q: "Is photography included with wedding planning?", a: "Yes — candid photography and cinematic videography are part of our combined wedding planning packages." },
  { q: "Can I book planning and décor without photography?", a: "Yes, all services can be booked individually or combined at a discounted rate." },
];

export const Route = createFileRoute("/wedding-planner-kanpur")({
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
          name: "Wedding Planning in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Wedding Planner",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Wedding Planner in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: WeddingPlannerKanpur,
});
