import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { item } from "@/components/Reveal";
import type { BlogMeta } from "@/data/blogs/index";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ blog }: { blog: BlogMeta }) {
  return (
    <motion.article
      variants={item}
      className="group overflow-hidden rounded-3xl border border-foreground/8 bg-card shadow-soft transition-transform duration-500 hover:-translate-y-1"
    >
      <Link
        to="/blog/$slug"
        params={{ slug: blog.slug }}
        className="block overflow-hidden"
        aria-label={blog.title}
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
          <img
            src={blog.featuredImage}
            alt={blog.alt}
            loading="lazy"
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/images/blogs/placeholder.svg";
            }}
          />
          {blog.category && (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-foreground backdrop-blur">
              {blog.category}
            </span>
          )}
        </div>
      </Link>

      <div className="p-7">
        <p className="text-xs text-muted-foreground">
          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          {blog.author && (
            <>
              {" "}
              &bull; <span>{blog.author}</span>
            </>
          )}
        </p>

        <h2 className="mt-3 font-display text-xl leading-snug">
          <Link
            to="/blog/$slug"
            params={{ slug: blog.slug }}
            className="hover:text-aqua-deep"
          >
            {blog.title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {blog.excerpt}
        </p>

        <Link
          to="/blog/$slug"
          params={{ slug: blog.slug }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          aria-label={`Read more: ${blog.title}`}
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
