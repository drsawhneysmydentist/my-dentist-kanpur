import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { getBlogPostBySlug } from "@/lib/blog-posts";
import { SITE_URL, buildBreadcrumbSchema, buildFaqSchema, jsonLdScript } from "@/lib/seo-schema";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const path = `/blog/${params.slug}`;
    const title = loaderData.metaTitle ?? loaderData.title;

    return {
      meta: [
        { title },
        { name: "description", content: loaderData.metaDescription },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}${path}` },
        { property: "article:published_time", content: loaderData.date },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: loaderData.metaDescription },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: loaderData.title,
          description: loaderData.metaDescription,
          datePublished: loaderData.date,
          dateModified: loaderData.date,
          author: { "@type": "Person", name: "Sumit Kumar Gupta", url: `${SITE_URL}/#founder` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}${path}`,
        }),
        jsonLdScript(
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: loaderData.title, path },
          ]),
        ),
        ...(loaderData.faqs && loaderData.faqs.length > 0 ? [jsonLdScript(buildFaqSchema(loaderData.faqs))] : []),
      ],
    };
  },
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const post = Route.useLoaderData();
  return <BlogPost post={post} />;
}
