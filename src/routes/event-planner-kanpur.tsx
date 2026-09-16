import { createFileRoute } from "@tanstack/react-router";
import { EventPlannerKanpur } from "@/components/site/services/EventPlannerKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/event-planner-kanpur";
const TITLE = "Event Planner in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "Looking for a trusted event planner in Kanpur? SD Event & Photography plans weddings, corporate events, birthdays & more with décor and photography. Call now.";

const faqs = [
  { q: "What does an event planner in Kanpur handle?", a: "Venue coordination, budgeting, décor, vendor management, on-the-day execution and photography — SD Event & Photography manages all of it under one team." },
  { q: "Which areas of Kanpur do you serve as an event planner?", a: "Kakadev, Civil Lines, Swaroop Nagar, Shyam Nagar, Lajpat Nagar, Kalyanpur, Govind Nagar, Ratan Lal Nagar and Panki." },
  { q: "Do you plan both weddings and corporate events?", a: "Yes — weddings, corporate events, birthdays and anniversaries are all planned by the same accountable team." },
  { q: "How much notice do you need to plan an event?", a: "2–3 weeks for birthdays and smaller events; 2–3 months for weddings and larger corporate events." },
  { q: "Can I get a custom event planning quote?", a: "Yes, every package is customised to your event size, venue and budget — call or WhatsApp for a free quote." },
];

export const Route = createFileRoute("/event-planner-kanpur")({
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
          name: "Event Planning in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Event Planner",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Event Planner in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: EventPlannerKanpur,
});
