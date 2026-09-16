import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://sdeventkanpur.in";

const PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/weddings", priority: "0.9", changefreq: "weekly" },
  { path: "/events", priority: "0.9", changefreq: "weekly" },
  { path: "/event-planner-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/wedding-planner-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/wedding-decoration-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/wedding-photography-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/corporate-event-management-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/birthday-event-planner-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/pre-wedding-photography-kanpur", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  {
    path: "/blog/wedding-photographer-kanpur-complete-guide",
    priority: "0.7",
    changefreq: "monthly",
  },
  { path: "/blog/best-event-planner-in-kanpur", priority: "0.7", changefreq: "monthly" },
  {
    path: "/blog/rudra-abhishek-decoration-kanpur-sawan-guide",
    priority: "0.7",
    changefreq: "monthly",
  },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PAGES.map(
          (p) =>
            `  <url><loc>${BASE_URL}${p.path}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
