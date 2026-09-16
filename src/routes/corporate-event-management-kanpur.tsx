import { createFileRoute } from "@tanstack/react-router";
import { CorporateEventManagementKanpur } from "@/components/site/services/CorporateEventManagementKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/corporate-event-management-kanpur";
const TITLE = "Corporate Event Planner in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "Corporate event planner in Kanpur for conferences, product launches & seminars — end-to-end management with professional photography. Free quote — call now.";

const faqs = [
  { q: "Do you manage corporate events end-to-end?", a: "Yes — venue coordination, décor, vendor management and on-the-day execution are all handled by one team." },
  { q: "Do you provide photography for corporate events?", a: "Yes, professional event photography and videography with same-day edited highlights are included." },
  { q: "How much notice do you need for a corporate event?", a: "4+ weeks is recommended for conferences and product launches; shorter notice can often be accommodated for smaller events." },
  { q: "Can you handle recurring corporate events?", a: "Yes, we work with several Kanpur businesses on recurring seminars, anniversaries and team celebrations." },
  { q: "Do you provide invoices for corporate bookings?", a: "Yes, formal quotations and invoices are provided for corporate accounting and approvals." },
];

export const Route = createFileRoute("/corporate-event-management-kanpur")({
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
          name: "Corporate Event Management in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Corporate Event Planner",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Corporate Event Planner in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: CorporateEventManagementKanpur,
});
