import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BlogCard } from "@/components/BlogCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { blogRegistry, sortedBlogs, type BlogMeta } from "@/data/blogs/index";
import { loadBlogContent } from "@/data/blogs/loader";
import { SITE } from "@/lib/site";

// Extracts plain-text FAQ question/answer pairs straight out of the
// article's own "Frequently Asked Questions" H2 block so the FAQPage
// schema always matches what's actually shown on the page — no
// separately maintained FAQ list to fall out of sync.
function extractFaqs(html: string): { question: string; answer: string }[] {
  const faqSectionMatch = html.match(
    /<h2[^>]*id="faqs"[^>]*>[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|$)/,
  );
  if (!faqSectionMatch) return [];
  const section = faqSectionMatch[1];
  const pairs: { question: string; answer: string }[] = [];
  const h3Regex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
  let match: RegExpExecArray | null;
  while ((match = h3Regex.exec(section)) !== null) {
    const strip = (s: string) => s.replace(/<[^>]+>/g, "").trim();
    pairs.push({ question: strip(match[1]), answer: strip(match[2]) });
  }
  return pairs;
}

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

    const index = sortedBlogs.findIndex((b) => b.slug === params.slug);
    const prev: BlogMeta | null = sortedBlogs[index + 1] ?? null; // older post
    const next: BlogMeta | null = sortedBlogs[index - 1] ?? null; // newer post

    const related = sortedBlogs.filter(
      (b) => b.slug !== params.slug && b.category === meta.category,
    );

    const faqs = extractFaqs(content);

    return { meta, content, prev, next, related, faqs };
  },
  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { meta, faqs } = loaderData;
    const title = `${meta.title} | Dr Sawhney’s My Dentist Kanpur`;
    const pageUrl = `${SITE.url}/blog/${meta.slug}`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title,
      description: meta.excerpt,
      datePublished: meta.date,
      dateModified: meta.date,
      image: `${SITE.url}${meta.featuredImage}`,
      author: {
        "@type": "Person",
        name: meta.author ?? "Dr. Asheesh K. Sawhny",
      },
      publisher: { "@type": "Dentist", name: "Dr Sawhney’s My Dentist", url: SITE.url },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: meta.title,
          item: pageUrl,
        },
      ],
    };

    const faqSchema =
      faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }
        : null;

    return {
      meta: [
        { title },
        { name: "description", content: meta.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: meta.excerpt },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `${SITE.url}${meta.featuredImage}` },
        { property: "article:published_time", content: meta.date },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(articleSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema),
        },
        ...(faqSchema
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(faqSchema),
              },
            ]
          : []),
      ],
    };
  },
});

function BlogPostPage() {
  const { meta, content, prev, next, related, faqs: _faqs } =
    Route.useLoaderData();
  const pageUrl = `${SITE.url}/blog/${meta.slug}`;

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

          <ShareButtons url={pageUrl} title={meta.title} className="mt-5" />
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

        {(prev || next) && (
          <Reveal delay={0.05}>
            <nav
              aria-label="Article navigation"
              className="mt-14 grid gap-4 border-t border-foreground/8 pt-8 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: prev.slug }}
                  className="group rounded-3xl border border-foreground/8 bg-card p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <ArrowLeft className="h-3.5 w-3.5" /> Previous Article
                  </span>
                  <p className="mt-2 font-display text-base leading-snug group-hover:text-aqua-deep">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: next.slug }}
                  className="group rounded-3xl border border-foreground/8 bg-card p-6 text-right shadow-soft transition-transform duration-500 hover:-translate-y-1 sm:col-start-2"
                >
                  <span className="inline-flex items-center justify-end gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Next Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <p className="mt-2 font-display text-base leading-snug group-hover:text-aqua-deep">
                    {next.title}
                  </p>
                </Link>
              ) : null}
            </nav>
          </Reveal>
        )}

        {related.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-foreground/8 pt-10">
              <h2 className="font-display text-2xl">Related Articles</h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {related.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft">
            <div>
              <h3 className="font-display text-2xl">
                Have a dental question?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Speak with a specialist at DR SAWHNEY’S MY DENTIST — we'll guide you
                honestly.
              </p>
            </div>
            <Link
              to="/contact"
              hash="consultation-form"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              Book a consultation
            </Link>
          </div>
        </Reveal>

        <div className="mt-10">
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
