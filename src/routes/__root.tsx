import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { buildOrganizationSchema, buildWebsiteSchema, jsonLdScript } from "@/lib/seo-schema";
import { initClickTracking, trackPageView } from "@/lib/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Best Event Planner in Kanpur | SD Event & Photography" },
      {
        name: "description",
        content:
          "SD Event & Photography offers wedding planning, event management, decoration, photography and corporate event services in Kanpur.",
      },
      { name: "author", content: "SD Event & Photography" },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#f7f2ea" },
      { property: "og:title", content: "Best Event Planner in Kanpur | SD Event & Photography" },
      {
        property: "og:description",
        content:
          "SD Event & Photography offers wedding planning, event management, decoration, photography and corporate event services in Kanpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sdeventkanpur.in/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SD Event & Photography" },
      {
        name: "twitter:description",
        content: "Luxury wedding planning, event management & cinematic photography in Kanpur.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.jpg", type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Lato:wght@300;400;700&display=swap",
      },
    ],
    scripts: [
      // Google Analytics 4 — recommended global site tag (gtag.js) snippet.
      // send_page_view is disabled here because page views are tracked
      // manually on every client-side route change (see RootComponent
      // below), which avoids double-counting on this single-page app.
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-HPHYXJJ7H6",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || [];\n" +
          "function gtag(){dataLayer.push(arguments);}\n" +
          "gtag('js', new Date());\n" +
          "gtag('config', 'G-HPHYXJJ7H6', { send_page_view: false });",
      },
      jsonLdScript(buildOrganizationSchema()),
      jsonLdScript(buildWebsiteSchema()),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "EventPlanner"],
          name: "SD Event & Photography",
          image: "https://sdeventphotography.com/logo.png",
          telephone: "+91-88878-11248",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Barra 2",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "208027",
            addressCountry: "IN",
          },
          areaServed: [
            "Kanpur",
            "Kakadev",
            "Civil Lines",
            "Swaroop Nagar",
            "Shyam Nagar",
            "Lajpat Nagar",
            "Kalyanpur",
            "Govind Nagar",
            "Ratan Lal Nagar",
            "Panki",
          ],
          priceRange: "₹₹",
          url: "https://sdeventphotography.com",
          sameAs: [
            "https://www.instagram.com/sd_event_kanpur191",
            "https://www.facebook.com/share/1C3CpXrqZ2/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Does SD Event & Photography handle corporate events?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — end-to-end corporate event planning and photography across Kanpur.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer wedding photography and videography together?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, combined photo + video packages with album design are available.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide pre-wedding shoots?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, at creative locations in and around Kanpur with quick-turnaround editing.",
              },
            },
            {
              "@type": "Question",
              name: "How far in advance should I book your services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For weddings, 2–3 months in advance is ideal; for birthdays and small events, 2–3 weeks is usually enough.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide services outside Kanpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, on request, with additional travel arrangements.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer combo packages for planning + photography together?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, combo packages are available at a discounted rate.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide a written agreement after booking?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, a formal agreement is shared once the date is confirmed.",
              },
            },
            {
              "@type": "Question",
              name: "Can I customize a package to my budget?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all packages are customizable.",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    initClickTracking();
    trackPageView(router.state.location.pathname);

    const unsubscribe = router.subscribe("onResolved", (event) => {
      trackPageView(event.toLocation.pathname);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
