import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Clock, ChevronRight, Stethoscope } from "lucide-react";
import { Reveal, Stagger } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { BackToTop } from "@/components/blog/BackToTop";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { StickyToc } from "@/components/blog/StickyToc";
import { BlogCard } from "@/components/BlogCard";
import { sortedBlogs, type BlogMeta } from "@/data/blogs/index";
import { content, faqs, toc } from "@/data/blogs/best-dentist-in-kanpur";
import { SITE } from "@/lib/site";
import doctorsPortrait from "@/assets/dr-asheesh-karuna-dentsply.webp";

const META: BlogMeta = {
  slug: "best-dentist-in-kanpur",
  title:
    "Best Dentist in Kanpur: The Complete 2026 Guide to Choosing the Right Dental Clinic",
  excerpt:
    "Looking for the best dentist in Kanpur? My Dentist, Kanpur offers painless RCT, implants, braces & smile makeovers. MDS specialists. Book today.",
  date: "2026-07-12",
  featuredImage: "/images/blogs/best-dentist-in-kanpur-doctors.jpg",
  alt: "Dr. Asheesh K. Sawhny and Dr. Karuna Sawhny, MDS dental specialists at My Dentist super speciality dental clinic in Kakadeo, Kanpur",
  author: "Dr. Asheesh K. Sawhny",
  category: "Dental Tips",
};

const READ_TIME_MIN = 12;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const Route = createFileRoute("/blog/best-dentist-in-kanpur")({
  component: BestDentistKanpurBlogPage,
  head: () => {
    const title = "Best Dentist in Kanpur | My Dentist, Kanpur (2026 Guide)";
    const description =
      "Looking for the best dentist in Kanpur? My Dentist, Kanpur offers painless RCT, implants, braces & smile makeovers. MDS specialists. Book today.";
    const canonical = `${SITE.url}/blog/${META.slug}`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: META.title,
      description: META.excerpt,
      datePublished: META.date,
      image: `${SITE.url}${META.featuredImage}`,
      author: { "@type": "Person", name: META.author },
      publisher: { "@type": "Dentist", name: "My Dentist", url: SITE.url },
      mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${META.slug}` },
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
          name: META.title,
          item: `/blog/${META.slug}`,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: "My Dentist – A Super Speciality Dental Clinic",
      image: `${SITE.url}/og-image.jpg`,
      telephone: "+91-9838500100",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "117/L-1/455A, Naveen Nagar, Near Panacea Hospital, Kakadeo",
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        postalCode: "208025",
        addressCountry: "IN",
      },
      url: SITE.url,
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Best Dentist in Kanpur — My Dentist, Kanapur" },
        {
          property: "og:description",
          content:
            "Super-speciality dental clinic in Kanpur, Kanpur. MDS specialists, modern technology, transparent pricing. Serving all of Kanpur since 2005.",
        },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `${SITE.url}${META.featuredImage}` },
        { property: "article:published_time", content: META.date },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Best Dentist in Kanpur | My Dentist Kanpur" },
        {
          name: "twitter:description",
          content:
            "MDS-qualified dental specialists in Kakadeo, Kanpur. Painless RCT, implants, braces, whitening & more.",
        },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
        { type: "application/ld+json", children: JSON.stringify(dentistSchema) },
      ],
    };
  },
});

function BestDentistKanpurBlogPage() {
  const shareUrl = `${SITE.url}/blog/${META.slug}`;
  const relatedBlogs = sortedBlogs
    .filter((b) => b.slug !== META.slug)
    .slice(0, 3);

  return (
    <>
      <ReadingProgressBar />
      <BackToTop />

      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <header className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,var(--color-aqua-soft),transparent_55%)]" />
        <div className="mx-auto max-w-5xl px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="text-foreground">
                Best Dentist in Kanpur
              </li>
            </ol>
          </nav>

          <Reveal className="mt-6">
            {META.category && (
              <span className="pill border border-foreground/10 bg-aqua-soft text-aqua-deep">
                {META.category}
              </span>
            )}

            <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
              Best Dentist in Kanpur: The Complete 2026 Guide to Choosing the
              Right Dental Clinic
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link
                to="/dr-asheesh-sawhny"
                className="flex items-center gap-2.5 hover:text-foreground"
              >
                <img
                  src={doctorsPortrait}
                  alt={META.author ?? "Author"}
                  width={36}
                  height={36}
                  loading="eager"
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-background shadow-soft"
                />
                <span>
                  By <span className="font-medium text-foreground">{META.author}</span>
                </span>
              </Link>
              <span className="flex items-center gap-1.5">
                <time dateTime={META.date}>{formatDate(META.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {READ_TIME_MIN} min read
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={META.featuredImage}
              alt={META.alt}
              width={1600}
              height={1000}
              loading="eager"
              className="h-auto w-full object-cover"
            />
          </Reveal>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* Body: sticky TOC + article                                  */}
      {/* ---------------------------------------------------------- */}
      <section className="px-6 pb-24 pt-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0">
            <ShareButtons url={shareUrl} title={META.title} className="mb-8" />

            <Reveal>
              <div
                className="prose-blog max-w-none text-base leading-relaxed text-foreground/90
                  [&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:text-foreground md:[&_h2]:text-[1.7rem]
                  [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground
                  [&_p]:mt-4 [&_p]:text-muted-foreground
                  [&_a]:text-aqua-deep [&_a]:underline [&_a]:underline-offset-2 [&_a]:font-medium
                  [&_strong]:text-foreground
                  [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:text-muted-foreground
                  [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Reveal>

            {/* ---------------------------------------------------- */}
            {/* Doctor's Advice / About Doctor                        */}
            {/* ---------------------------------------------------- */}
            <Reveal delay={0.05}>
              <div className="mt-14 flex flex-col gap-6 rounded-3xl border border-foreground/8 bg-card p-7 shadow-soft sm:flex-row sm:items-center">
                <img
                  src={doctorsPortrait}
                  alt="Dr. Asheesh K. Sawhny and Dr. Karuna Sawhny at My Dentist, Kakadeo, Kanpur"
                  width={120}
                  height={120}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-2xl object-cover shadow-soft sm:h-28 sm:w-28"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-aqua-deep">
                    Doctor&rsquo;s Advice
                  </p>
                  <h3 className="mt-1 font-display text-xl">
                    Dr. Asheesh K. Sawhny &amp; Dr. Karuna Sawhny
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    An MDS Endodontist &amp; Implantologist and an MDS
                    Orthodontist, together leading a super-speciality practice
                    at My Dentist, Kakadeo, Kanpur — so every patient is
                    treated by a doctor trained specifically in that field,
                    not a single general dentist handling every case.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ---------------------------------------------------- */}
            {/* FAQ Accordion                                         */}
            {/* ---------------------------------------------------- */}
            <div id="faqs" className="mt-16 scroll-mt-28">
              <Reveal>
                <span className="pill border border-foreground/10 bg-aqua-soft text-aqua-deep">
                  FAQs
                </span>
                <h2 className="mt-4 font-display text-2xl leading-snug text-foreground md:text-[1.7rem]">
                  Frequently Asked Questions
                </h2>
              </Reveal>

              <Reveal delay={0.05} className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={f.question} value={`faq-${i}`}>
                      <AccordionTrigger className="font-display text-base text-foreground">
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>

            {/* ---------------------------------------------------- */}
            {/* CTA                                                   */}
            {/* ---------------------------------------------------- */}
            <Reveal delay={0.05}>
              <div className="relative mt-16 overflow-hidden rounded-3xl bg-[image:var(--gradient-aqua)] p-8 text-white shadow-luxe sm:p-10">
                <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={doctorsPortrait}
                      alt="Dr. Asheesh K. Sawhny and Dr. Karuna Sawhny"
                      width={64}
                      height={64}
                      loading="lazy"
                      className="hidden h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-white/30 sm:block"
                    />
                    <div>
                      <h3 className="font-display text-2xl leading-snug">
                        Ready to find your best dentist in Kanpur?
                      </h3>
                      <p className="mt-1 text-sm text-white/85">
                        Book a consultation with our MDS specialists at
                        Kakadeo, Kanpur today.
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-aqua-deep shadow-soft transition-transform hover:-translate-y-0.5"
                    >
                      Book Appointment Today
                    </Link>
                    <a
                      href={`tel:${SITE.phoneDigits}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <Phone className="h-4 w-4" />
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-14 border-t border-foreground/8 pt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-aqua-deep"
              >
                <Stethoscope className="h-4 w-4" /> Back to Blog
              </Link>
            </div>
          </article>

          {/* -------------------------------------------------------- */}
          {/* Sticky sidebar                                            */}
          {/* -------------------------------------------------------- */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <StickyToc items={toc} />

              <div className="rounded-3xl border border-foreground/8 bg-bone p-6 shadow-soft">
                <p className="font-display text-lg leading-snug">
                  My Dentist – A Super Speciality Dental Clinic
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {SITE.address}
                </p>
                <a
                  href={`tel:${SITE.phoneDigits}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-aqua-deep"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Related Blogs                                                */}
      {/* ---------------------------------------------------------- */}
      {relatedBlogs.length > 0 && (
        <section className="border-t border-foreground/8 bg-bone px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="pill border border-foreground/10 bg-aqua-soft text-aqua-deep">
                Keep Reading
              </span>
              <h2 className="mt-4 font-display text-3xl leading-snug text-foreground md:text-4xl">
                Related Articles
              </h2>
            </Reveal>

            <Stagger className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
