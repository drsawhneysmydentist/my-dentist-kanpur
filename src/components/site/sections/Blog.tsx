import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { getLatestBlogPosts } from "@/lib/blog-posts";

// Small, compact blog preview section. Shows the 3 latest posts and a
// "View All Blogs" link through to /blog. Matches the existing card/eyebrow
// styling used elsewhere on the site — no new design language introduced.
export function Blog() {
  const posts = getLatestBlogPosts(3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>From Our Blog</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.05] text-warm-brown sm:text-5xl">
            Tips &amp; stories from our{" "}
            <span className="italic text-rose-gold">Kanpur events.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-champagne/30 bg-ivory shadow-luxe">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={520}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-48"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl leading-snug text-warm-brown line-clamp-2">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h3>
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

        <Reveal className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-warm-brown/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-warm-brown transition-colors hover:border-rose-gold hover:text-rose-gold"
          >
            View All Blogs →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
