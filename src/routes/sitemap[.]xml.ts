import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogRegistry } from "@/data/blogs/index";
import { SITE } from "@/lib/site";

const BASE_URL = SITE.url;

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/doctors", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/faqs", changefreq: "monthly", priority: "0.7" },
          { path: "/dr-asheesh-sawhny", changefreq: "monthly", priority: "0.7" },
          { path: "/dr-karuna-sawhny", changefreq: "monthly", priority: "0.7" },
          { path: "/dr-sirjon-mukherji", changefreq: "monthly", priority: "0.7" },
          { path: "/prosthodontics", changefreq: "monthly", priority: "0.8" },
          { path: "/oral-and-maxillofacial-surgery", changefreq: "monthly", priority: "0.8" },
          { path: "/cosmetic-dentistry", changefreq: "monthly", priority: "0.8" },
          { path: "/paediatric-dentistry", changefreq: "monthly", priority: "0.8" },
          { path: "/root-canal-treatment-kanpur", changefreq: "monthly", priority: "0.9" },
          { path: "/dental-implants-kanpur", changefreq: "monthly", priority: "0.9" },
          { path: "/orthodontist-kanpur", changefreq: "monthly", priority: "0.9" },
          { path: "/smile-makeover-kanpur", changefreq: "monthly", priority: "0.9" },
          { path: "/teeth-whitening-kanpur", changefreq: "monthly", priority: "0.9" },
          { path: "/preventive-dentistry-kanpur", changefreq: "monthly", priority: "0.85" },
          { path: "/restorative-dentistry-kanpur", changefreq: "monthly", priority: "0.85" },
          { path: "/gum-treatment-periodontics-kanpur", changefreq: "monthly", priority: "0.85" },
          { path: "/emergency-dentist-kanpur", changefreq: "monthly", priority: "0.95" },
          { path: "/paediatric-dentist-kanpur", changefreq: "monthly", priority: "0.85" },
          { path: "/specialized-dental-care-kanpur", changefreq: "monthly", priority: "0.85" },
          ...blogRegistry.map(
            (b): SitemapEntry => ({
              path: `/blog/${b.slug}`,
              changefreq: "monthly",
              priority: "0.6",
            }),
          ),
        ];

        const lastmod = new Date().toISOString().slice(0, 10);

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

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
