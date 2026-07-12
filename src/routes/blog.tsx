import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Stagger } from "@/components/Reveal";
import { BlogCard } from "@/components/BlogCard";
import { sortedBlogs } from "@/data/blogs/index";
import { SITE } from "@/lib/site";

const TITLE = "Dental Health Blog | My Dentist Kakadeo Kanpur";
const DESC =
  "Expert dental health tips, treatment guides, and oral hygiene advice from Dr. Asheesh K. Sawhny and Dr. Karuna Singh Sawhny at MY DENTIST, Kakadeo, Kanpur.";

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MY DENTIST Kanpur — Dental Health Blog",
  url: `${SITE.url}/blog`,
  publisher: {
    "@type": "Dentist",
    name: "My Dentist",
    url: SITE.url,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
  ],
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(blogListSchema) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema),
      },
    ],
  }),
  component: BlogListPage,
});

function BlogListPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Dental health,{" "}
            <span className="italic text-aqua-deep">explained simply.</span>
          </>
        }
        intro="Expert advice on oral health, treatments, and keeping your smile healthy — from the specialists at MY DENTIST, Kakadeo, Kanpur."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          {sortedBlogs.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No articles yet. Check back soon!
            </p>
          ) : (
            <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sortedBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </Stagger>
          )}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft">
            <div>
              <h3 className="font-display text-2xl">Have a dental question?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Speak with a specialist at MY DENTIST — we'll guide you
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
        </div>
      </section>
    </>
  );
}
