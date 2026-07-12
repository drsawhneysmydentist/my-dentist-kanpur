// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      // Only allow localhost in development — never commit tunnel/preview hostnames
      allowedHosts: ["localhost", "127.0.0.1"],
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Outside Lovable's sandbox (e.g. a Netlify CI build) the deploy plugin only runs
  // nitro when a `nitro` option is explicitly provided — otherwise it's skipped and
  // `vite build` emits a client-only bundle with no SSR function, which is why every
  // route 404s on Netlify. Pin the preset explicitly so the build always produces a
  // proper Netlify Function for SSR, in dev and on every deploy target.
  nitro: {
    preset: "netlify",
  },
});
