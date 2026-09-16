import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/components/site/BlogIndex";
import { SITE_URL, buildBreadcrumbSchema, jsonLdScript } from "@/lib/seo-schema";

const PATH = "/blog";
const TITLE = "Blog | SD Event & Photography — Wedding & Event Planning Insights, Kanpur";
const DESCRIPTION =
  "Wedding planning tips, photography location guides and event management insights from SD Event & Photography, Kanpur.";

export const Route = createFileRoute("/blog/")({
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
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
        ]),
      ),
    ],
  }),
  component: BlogIndex,
});
