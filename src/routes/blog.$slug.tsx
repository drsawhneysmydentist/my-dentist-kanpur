import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { blogRegistry } from "@/data/blogs/index";
import { loadBlogContent } from "@/data/blogs/loader";
import { SITE } from "@/lib/site";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const meta = blogRegistry.find((b) => b.slug === params.slug);
    if (!meta) throw notFound();

    const content = await loadBlogContent(params.slug);
    if (!content) throw notFound();

    return { meta, content };
  },
  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { meta } = loaderData;
    const title = `${meta.title} | My Dentist Kanpur`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title,
      description: meta.excerpt,
      datePublished: meta.date,
      image: meta.featuredImage,
      author: {
        "@type": "Person",
        name: meta.author ?? "Dr. Asheesh K. Sawhny",
      },
      publisher: { "@type": "Dentist", name: "My Dentist", url: SITE.url },
      mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${meta.slug}` },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: meta.title,
          item: `/blog/${meta.slug}`,
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: "description", content: meta.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: meta.excerpt },
        { property: "og:url", content: `${SITE.url}/blog/${meta.slug}` },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `${SITE.url}${meta.featuredImage}` },
        { property: "article:published_time", content: meta.date },
      ],
      links: [{ rel: "canonical", href: `${SITE.url}/blog/${meta.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(articleSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema),
        },
      ],
    };
  },
});

function BlogPostPage() {
  const { meta, content } = Route.useLoaderData();

  return (
    <article className="px-6 pb-24 pt-32 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/blog" className="hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-foreground">
              {meta.title}
            </li>
          </ol>
        </nav>

        <Reveal>
          {meta.category && (
            <span className="pill border border-foreground/10 bg-aqua-soft text-aqua-deep">
              {meta.category}
            </span>
          )}

          <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            {meta.title}
          </h1>

          <p className="mt-5 text-sm text-muted-foreground">
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            {meta.author && <> &bull; By {meta.author}</>}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={meta.featuredImage}
              alt={meta.alt}
              width={1200}
              height={500}
              loading="eager"
              className="h-auto w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/blogs/placeholder.svg";
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="prose-blog mt-10 max-w-none text-base leading-relaxed text-foreground/90 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:text-foreground [&_h3]:mt-7 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground [&_p]:mt-4 [&_p]:text-muted-foreground [&_a]:text-aqua-deep [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2 [&_li]:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Reveal>

        <div className="mt-14 border-t border-foreground/8 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-aqua-deep"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}

function BlogNotFound() {
  return (
    <section className="px-6 pb-24 pt-32 text-center md:pt-48">
      <h1 className="font-display text-4xl">Article Not Found</h1>
      <p className="mt-4 text-muted-foreground">
        The article you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/blog"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>
    </section>
  );
}
