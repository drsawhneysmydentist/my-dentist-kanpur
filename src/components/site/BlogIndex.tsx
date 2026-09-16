import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./sections/Footer";
import { FloatingActions } from "./FloatingActions";
import { Reveal, Eyebrow } from "./Reveal";
import { getAllBlogPosts } from "@/lib/blog-posts";

export function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative py-28 sm:py-40">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow>Our Blog</Eyebrow>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] text-warm-brown sm:text-6xl">
                Wedding &amp; event planning{" "}
                <span className="italic text-rose-gold">insights from Kanpur.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
                Guides, tips, and behind-the-scenes stories from our event planning and
                photography work across Kanpur.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-champagne/30 bg-ivory shadow-luxe">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="block overflow-hidden"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={520}
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-rose-gold">
                        {formatDate(post.date)}
                      </p>
                      <h2 className="mt-2 font-display text-xl leading-snug text-warm-brown">
                        <Link to="/blog/$slug" params={{ slug: post.slug }}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-rose-gold transition-all group-hover:gap-3"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
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
