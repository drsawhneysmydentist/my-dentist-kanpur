// ============================================================
//  BLOG REGISTRY — MY DENTIST Kanpur
//  Add new entries here. Newest date = shown first automatically.
//  Each entry maps to a file in src/data/blogs/<slug>.ts
//  (registered in loader.ts so its content loads on demand)
// ============================================================

export interface BlogMeta {
  slug: string; // URL: /blog/<slug>
  title: string;
  excerpt: string; // 1–2 sentences shown on card
  date: string; // ISO 8601 — "2025-06-15"
  featuredImage: string; // path relative to /public — e.g. "/images/blogs/root-canal.jpg"
  alt: string; // image alt text (SEO + a11y)
  author?: string; // defaults to "Dr. Asheesh K. Sawhny" if omitted
  category?: string; // e.g. "Dental Tips", "Treatments", "Oral Health"
}

// ----------------------------------------------------------------
// ADD NEW BLOGS ANYWHERE IN THIS ARRAY — order here doesn't matter.
// The listing page always sorts by `date` descending automatically,
// so the newest post appears first on /blog without any reordering.
// ----------------------------------------------------------------
export const blogRegistry: BlogMeta[] = [
  {
    slug: "how-to-prevent-tooth-decay",
    title: "How to Prevent Tooth Decay: A Complete Guide",
    excerpt:
      "Tooth decay is one of the most common dental problems, but it is almost entirely preventable. Learn the habits that protect your teeth every day.",
    date: "2025-06-10",
    featuredImage: "/images/blogs/placeholder.svg",
    alt: "Woman brushing teeth to prevent tooth decay",
    author: "Dr. Asheesh K. Sawhny",
    category: "Oral Health",
  },
  {
    slug: "dental-implants-vs-bridges",
    title: "Dental Implants vs. Dental Bridges: Which Is Right for You?",
    excerpt:
      "Both implants and bridges replace missing teeth, but they work differently. Here is an honest comparison to help you decide with your dentist.",
    date: "2025-05-20",
    featuredImage: "/images/blogs/placeholder.svg",
    alt: "Dental implant model vs dental bridge comparison",
    author: "Dr. Karuna Singh Sawhny",
    category: "Treatments",
  },
  {
    slug: "root-canal-myths-debunked",
    title: "5 Root Canal Myths — Debunked by a Kanpur Dentist",
    excerpt:
      "Root canal therapy has an undeserved reputation. Dr. Asheesh explains what actually happens during the procedure and why it is not something to fear.",
    date: "2025-04-15",
    featuredImage: "/images/blogs/placeholder.svg",
    alt: "Dentist explaining root canal procedure to a patient",
    author: "Dr. Asheesh K. Sawhny",
    category: "Treatments",
  },
];

// Sorted newest-first — used by the listing page so future posts
// (added above) automatically appear in the right order.
export const sortedBlogs = [...blogRegistry].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
