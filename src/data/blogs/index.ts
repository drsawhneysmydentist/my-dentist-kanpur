export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string;
  alt: string;
  author?: string;
  category?: string;
  imagePosition?: string;
}

export const blogRegistry: BlogMeta[] = [
  {
    slug: "best-dentist-in-kanpur",
    title: "Best Dentist in Kanpur: The Complete 2026 Guide to Choosing the Right Dental Clinic",
    excerpt:
      "Looking for the best dentist in Kanpur? My Dentist, Kanpur offers painless RCT, implants, braces & smile makeovers. MDS specialists. Book today.",
    date: "2026-07-12",
    featuredImage: "/images/blogs/best-dentist-in-kanpur-doctors.jpg",
    alt: "Dr. Asheesh K. Sawhny and Dr. Karuna Sawhny, MDS dental specialists at My Dentist super speciality dental clinic in Kakadeo, Kanpur",
    author: "Dr. Asheesh K. Sawhny",
    category: "Dental Tips",
    imagePosition: "50% 8%",
  },
];

export const sortedBlogs = [...blogRegistry].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
