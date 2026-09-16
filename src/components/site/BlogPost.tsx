import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./sections/Footer";
import { FloatingActions } from "./FloatingActions";
import { Reveal } from "./Reveal";
import { MarkdownContent, extractHeadings } from "./MarkdownContent";
import type { BlogPost as BlogPostType } from "@/lib/blog-posts";

export function BlogPost({ post }: { post: BlogPostType }) {
  const headings = extractHeadings(post.contentMarkdown).filter((h) => h.level === 2);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <article className="relative py-28 sm:py-40">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            {/* Breadcrumb */}
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                <Link to="/" className="hover:text-rose-gold">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-rose-gold">Blog</Link>
                <span>/</span>
                <span className="text-warm-brown">{post.title}</span>
              </nav>

              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-rose-gold"
              >
                <ArrowLeft size={14} />
                All Blogs
              </Link>

              <p className="mt-8 text-[0.65rem] uppercase tracking-[0.24em] text-rose-gold">
                {formatDate(post.date)} · 15 min read
              </p>
              <h1 className="mt-3 font-display text-4xl leading-[1.1] text-warm-brown sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-2xl bg-warm-brown/10">
                <img
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={720}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>

            {/* Table of Contents */}
            {headings.length > 0 && (
              <Reveal delay={0.12}>
                <nav className="mt-10 rounded-2xl border border-warm-brown/15 bg-beige/40 p-6 sm:p-8">
                  <p className="font-display text-lg text-warm-brown">Table of Contents</p>
                  <ol className="mt-4 space-y-2">
                    {headings.map((h, i) => (
                      <li key={h.id} className="text-sm font-light text-muted-foreground">
                        <a href={`#${h.id}`} className="hover:text-rose-gold">
                          {i + 1}. {h.text}
                        </a>
                      </li>
                    ))}
                    {post.faqs && post.faqs.length > 0 && (
                      <li className="text-sm font-light text-muted-foreground">
                        <a href="#faqs" className="hover:text-rose-gold">
                          {headings.length + 1}. Frequently Asked Questions
                        </a>
                      </li>
                    )}
                  </ol>
                </nav>
              </Reveal>
            )}

            <Reveal delay={0.15} className="mt-10">
              <MarkdownContent markdown={post.contentMarkdown} />
            </Reveal>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <Reveal delay={0.18} className="mt-14">
                <h2 id="faqs" className="scroll-mt-28 font-display text-2xl leading-tight text-warm-brown sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-3">
                  {post.faqs.map((faq, i) => (
                    <FaqItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.2} className="mt-14 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-warm-brown px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-ivory transition-colors hover:bg-rose-gold"
              >
                Book Your Event →
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
              >
                More Blogs
              </Link>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-xl border border-warm-brown/15 bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-base text-warm-brown sm:text-lg">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-rose-gold transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="px-5 pb-5 text-sm font-light leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
