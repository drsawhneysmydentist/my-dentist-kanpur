import { createFileRoute } from "@tanstack/react-router";
import { BirthdayEventPlannerKanpur } from "@/components/site/services/BirthdayEventPlannerKanpur";
import {
  SITE_URL,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-schema";

const PATH = "/birthday-event-planner-kanpur";
const TITLE = "Birthday Event Planner in Kanpur | SD Event & Photography";
const DESCRIPTION =
  "Birthday event planner in Kanpur for kids & adults — themed décor, photobooths & candid photography for every milestone celebration. Free quote — call now.";

const faqs = [
  { q: "Do you plan birthday parties for both kids and adults?", a: "Yes — full themed décor, execution and photography for kids' and adults' birthdays across Kanpur." },
  { q: "Can I choose a custom theme for my child's birthday?", a: "Yes, themes are fully customisable — cartoon, superhero, princess or any concept you'd like." },
  { q: "Do you provide photobooths?", a: "Yes, photobooths are available as an add-on for birthdays and celebrations." },
  { q: "How much notice do you need for a birthday party?", a: "2–3 weeks is generally sufficient for birthday party planning and décor." },
  { q: "Is photography included in birthday packages?", a: "Candid photography with cake-cutting coverage and same-day highlights can be added to any birthday package." },
];

export const Route = createFileRoute("/birthday-event-planner-kanpur")({
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
          name: "Birthday Event Planning in Kanpur",
          description: DESCRIPTION,
          url: `${SITE_URL}${PATH}`,
          serviceType: "Birthday Event Planner",
        }),
      ),
      jsonLdScript(buildFaqSchema(faqs)),
      jsonLdScript(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Birthday Event Planner in Kanpur", path: PATH },
        ]),
      ),
    ],
  }),
  component: BirthdayEventPlannerKanpur,
});
