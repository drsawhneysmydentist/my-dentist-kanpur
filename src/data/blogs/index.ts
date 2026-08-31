// ============================================================
//  BLOG REGISTRY — DR SAWHNEY’S MY DENTIST Kanpur
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
  imagePosition?: string; // CSS object-position override for the card thumbnail, e.g. "50% 8%" — use only when the default center crop hides a face; omit to keep default centering
}

// ----------------------------------------------------------------
// ADD NEW BLOGS ANYWHERE IN THIS ARRAY — order here doesn't matter.
// The listing page always sorts by `date` descending automatically,
// so the newest post appears first on /blog without any reordering.
// ----------------------------------------------------------------
export const blogRegistry: BlogMeta[] = [
  {
    slug: "best-endodontist-implantologist-kanpur-dr-asheesh-sawhny",
    title: "Best Endodontist & Implantologist in Kanpur – Dr. Asheesh Sawhny",
    excerpt:
      "Looking for the best endodontist or implantologist in Kanpur? Read this specialist-written guide to root canal treatment and dental implants at Dr Sawhney's My Dentist, Kakadeo.",
    date: "2026-08-31",
    featuredImage:
      "/images/blogs/dr-asheesh-sawhny-hero.jpg",
    alt: "Dr. Asheesh Sawhny – Endodontist and Implantologist in Kanpur",
    author: "Dr. Asheesh K. Sawhny",
    category: "Treatments",
  },
  {
    slug: "best-dentist-in-kanpur",
    title: "Best Dentist in Kanpur: The Complete 2026 Guide to Choosing the Right Dental Clinic",
    excerpt:
      "Looking for the best dentist in Kanpur? Dr Sawhney’s My Dentist, Kanpur offers painless RCT, implants, braces & smile makeovers. MDS specialists. Book today.",
    date: "2026-07-12",
    featuredImage: "/images/blogs/best-dentist-in-kanpur-doctors.jpg",
    alt: "Dr. Asheesh K. Sawhny and Dr. Karuna Sawhny, MDS dental specialists at Dr Sawhney’s My Dentist super speciality dental clinic in Kakadeo, Kanpur",
    author: "Dr. Asheesh K. Sawhny",
    category: "Dental Tips",
    imagePosition: "50% 8%",
  },
  {
    slug: "root-canal-treatment-kanpur",
    title:
      "Root Canal Treatment in Kanpur: The Complete 2026 Guide to Cost, Pain, and Recovery",
    excerpt:
      "Thinking about a root canal in Kanpur? Here is an honest, specialist-written guide to real costs, whether it actually hurts, and how to recover fast — from an MDS Endodontist.",
    date: "2026-08-03",
    featuredImage: "/images/blogs/root-canal-treatment-kanpur.webp",
    alt: "MDS Endodontist Dr. Asheesh K. Sawhny performing painless root canal treatment using rotary endodontics at Dr Sawhney’s My Dentist, Kakadeo, Kanpur",
    author: "Dr. Asheesh K. Sawhny",
    category: "Treatments",
  },
  {
    slug: "best-orthodontist-invisalign-provider-kanpur",
    title: "Best Orthodontist and Invisalign Provider in Kanpur – Dr. Karuna Sawhny",
    excerpt:
      "Weighing up braces or Invisalign in Kanpur? Here's an honest, specialist-written guide to choosing the right orthodontist — from an MDS Orthodontist and certified Invisalign provider.",
    date: "2026-08-16",
    featuredImage: "/images/blogs/best-orthodontist-invisalign-provider-kanpur.webp",
    alt: "Dr. Karuna Singh Sawhny, MDS Orthodontist and Invisalign Provider at Dr Sawhney’s My Dentist, Kakadeo, Kanpur",
    author: "Dr. Karuna Singh Sawhny",
    category: "Treatments",
  },
];

// Sorted newest-first — used by the listing page so future posts
// (added above) automatically appear in the right order.
export const sortedBlogs = [...blogRegistry].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
