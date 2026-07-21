// src/data/blogs/loader.ts
// Dynamically loads a blog's full content by slug.
// To add a new blog:
//   1. Create src/data/blogs/<your-slug>.ts  (export slug + content)
//   2. Add it to the map below
//   3. Add its metadata to index.ts — done. It will appear on /blog
//      automatically, sorted newest-first.

const contentMap: Record<
  string,
  () => Promise<{ slug: string; content: string }>
> = {
  "how-to-prevent-tooth-decay": () => import("./how-to-prevent-tooth-decay"),
  "dental-implants-vs-bridges": () => import("./dental-implants-vs-bridges"),
  "root-canal-myths-debunked": () => import("./root-canal-myths-debunked"),
  "best-dentist-in-kanpur": () => import("./best-dentist-in-kanpur"),
};

export async function loadBlogContent(slug: string): Promise<string | null> {
  const loader = contentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.content;
}

export { contentMap };
