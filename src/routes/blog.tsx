import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /blog and all its children (/blog, /blog/$slug).
// This route intentionally renders nothing but an <Outlet /> — the actual
// page content lives in blog.index.tsx (the /blog listing page) and
// blog.$slug.tsx (individual article pages). Without this Outlet, TanStack
// Router mounts /blog/$slug as a *child* of this route but has nowhere to
// render it, so clicking "Read More" changes the URL while the screen stays
// blank/unchanged. See blog.index.tsx for the listing page that used to
// live here.
export const Route = createFileRoute("/blog")({
  component: () => <Outlet />,
});
