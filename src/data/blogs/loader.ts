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
  "best-dentist-in-kanpur": () => import("./best-dentist-in-kanpur"),
  "root-canal-treatment-kanpur": () =>
    import("./root-canal-treatment-kanpur"),
  "best-orthodontist-invisalign-provider-kanpur": () =>
    import("./best-orthodontist-invisalign-provider-kanpur"),
  "best-endodontist-implantologist-kanpur-dr-asheesh-sawhny": () =>
    import("./best-endodontist-implantologist-kanpur-dr-asheesh-sawhny"),
  "dental-implants-vs-dentures-kanpur": () =>
    import("./dental-implants-vs-dentures-kanpur"),
};

export async function loadBlogContent(slug: string): Promise<string | null> {
  const loader = contentMap[slug];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.content;
  } catch (err) {
    // A dynamic import can fail after a new deploy if the browser still has
    // an older page in memory referencing since-replaced hashed chunk
    // filenames (e.g. clicking a blog card without refreshing after an
    // update). Without this, the URL changes but the page silently stays on
    // the previous view. Force a full reload of the target URL so the
    // browser fetches the current build instead of navigating client-side.
    if (typeof window !== "undefined") {
      window.location.href = `/blog/${slug}`;
      // Keep the caller pending — the reload below takes over.
      return new Promise<string | null>(() => {});
    }
    throw err;
  }
}

export { contentMap };
