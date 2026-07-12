import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCallFab } from "@/components/MobileCallFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl">404</h1>
        <h2 className="mt-4 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm text-background"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        ...(SITE.gscVerification
          ? [{ name: "google-site-verification", content: SITE.gscVerification }]
          : []),
        {
          title:
            "My Dentist, Kakadeo — Best Dentist in Kanpur | Specialists",
        },
        {
          name: "description",
          content:
            "Trusted dentist in Kanpur for dental implants, root canal treatment & braces. My Dentist, Kakadeo — specialist care with evening & Sunday appointments.",
        },
        { name: "author", content: "Dr Sawhney's My Dentist" },
        { name: "theme-color", content: "#1a1a1a" },
        { name: "msapplication-TileColor", content: "#1a1a1a" },
        {
          name: "msapplication-TileImage",
          content: "/android-chrome-192x192.png",
        },
        {
          property: "og:title",
          content:
            "My Dentist · Best Dental Clinic in Kakadeo, Kanpur | MDS Specialists",
        },
        {
          property: "og:description",
          content:
            "Best dentist in Kanpur — My Dentist, Kakadeo. Painless root canal, dental implants, braces, smile makeover & emergency dentistry by MDS specialists.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Dr Sawhney's My Dentist" },
        { property: "og:image", content: `${SITE.url}/og-image.jpg` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content:
            "Dr Sawhney's My Dentist — Multi Speciality & Advanced Digital Dental Clinic, Kakadeo Kanpur",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE.url}/og-image.jpg` },
        {
          name: "twitter:image:alt",
          content: "Dr Sawhney's My Dentist Kanpur",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        // ── Favicon & PWA icons ──────────────────────────────────────────────
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon-48x48.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        // ── Fonts ────────────────────────────────────────────────────────────
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..700,0..100,0..1&family=Inter+Tight:wght@300;400;500;600&display=swap",
        },
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
            name: "My Dentist",
            alternateName: ["MY DENTIST", "Dr Sawhney's My Dentist"],
            description:
              "Best dental clinic in Kakadeo, Kanpur. Specialist-led dentistry — painless root canal treatment, dental implants, braces, teeth whitening, smile makeover, emergency dentistry, paediatric dentistry. Led by MDS Endodontist & AAID-Certified Implantologist Dr. Asheesh K. Sawhny and MDS Orthodontist Dr. Karuna Singh Sawhny.",
            image: "/og-image.jpg",
            telephone: "+91 98385 00100",
            email: "drsawhneysmydentist@gmail.com",
            url: SITE.url,
            sameAs: [SITE.googleReviewsUrl],
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "117/L-1/455-A, Naveen Nagar, Kakadeo",
              addressLocality: "Kanpur",
              addressRegion: "Uttar Pradesh",
              postalCode: "208025",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.4499,
              longitude: 80.3319,
            },
            areaServed: [
              { "@type": "Place", name: "Kakadeo, Kanpur" },
              { "@type": "Place", name: "Naveen Nagar, Kanpur" },
              { "@type": "Place", name: "Pandu Nagar, Kanpur" },
              { "@type": "Place", name: "Sharda Nagar, Kanpur" },
              { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
              { "@type": "Place", name: "Civil Lines, Kanpur" },
              { "@type": "Place", name: "Sarvodaya Nagar, Kanpur" },
              { "@type": "Place", name: "Kaushalpuri, Kanpur" },
              { "@type": "Place", name: "Lajpat Nagar, Kanpur" },
              { "@type": "Place", name: "RS Puram, Kanpur" },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "16:00",
                closes: "21:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "11:00",
                closes: "14:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "226",
            },
            medicalSpecialty: [
              "Endodontics",
              "Orthodontics",
              "Implantology",
              "Prosthodontics",
              "Periodontics",
              "Pediatric Dentistry",
              "Cosmetic Dentistry",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Dental Services Kanpur",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Root Canal Treatment Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Dental Implants Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Braces in Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Teeth Whitening Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Smile Makeover Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Emergency Dentist Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Gum Treatment Kanpur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Dental Crowns Kanpur",
                  },
                },
              ],
            },
            employee: [
              {
                "@type": "Physician",
                name: "Dr. Asheesh Sawhny",
                alternateName: "Dr. Asheesh K. Sawhny",
                jobTitle: "MDS Endodontist and AAID-Certified Implantologist",
                hasCredential: [
                  "MDS Conservative Dentistry and Endodontics — KLE Institute of Dental Sciences, Belgaum",
                  "Certificate in Dental Implants — American Academy of Implant Dentistry (AAID), 2010",
                  "Principal & Professor — Rama Dental College, Kanpur",
                ],
              },
              {
                "@type": "Physician",
                name: "Dr. Karuna Singh Sawhny",
                jobTitle:
                  "MDS Orthodontist and Dentofacial Orthopaedics Specialist",
                hasCredential: [
                  "MDS Orthodontics and Dentofacial Orthopaedics — Rama Dental College, Kanpur",
                  "Member — Indian Orthodontic Society (IOS)",
                ],
              },
              {
                "@type": "Physician",
                name: "Dr. Sirjon Mukherji",
                jobTitle: "Oral & Maxillofacial Surgeon and Implantologist",
                hasCredential: [
                  "BDS — Calcutta University, 1997, Dr. R. Ahmed Memorial Gold Medal",
                  "FDS RCS England, 2000",
                  "FDS RCS Edinburgh, 2018",
                  "FIBOMS, 2010",
                ],
              },
            ],
          }),
        },
        // GA4 — only loaded once a real Measurement ID is configured via
        // VITE_GA4_MEASUREMENT_ID, so no placeholder tracking ID ever ships.
        ...(SITE.ga4MeasurementId
          ? [
              {
                src: `https://www.googletagmanager.com/gtag/js?id=${SITE.ga4MeasurementId}`,
                async: true,
              },
              {
                children: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${SITE.ga4MeasurementId}');`,
              },
            ]
          : []),
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

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
  const pathname = router.state.location.pathname;

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
      <MobileCallFab />
    </QueryClientProvider>
  );
}
