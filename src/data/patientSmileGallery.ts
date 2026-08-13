// ─────────────────────────────────────────────────────────────────────────
// Patient Smile Gallery — "CMS collection"
//
// NOTE ON ARCHITECTURE: this project has no backend CMS (no Netlify/Decap
// CMS, no Sanity, no Contentful, no admin panel). Every gallery on this
// site — the Distinguished Patients section, the homepage carousel, the
// Before & After sections — is a hand-edited typed array like this one,
// imported directly at build time. This file follows that exact same
// pattern, so it behaves identically to every other gallery you already
// have: no separate "integration" step, no server, no database.
//
// HOW TO ADD A NEW PATIENT SMILE PHOTO:
// 1. Drop the optimized image file into `src/assets/` (webp preferred).
// 2. Import it below.
// 3. Add one entry to `patientSmileGalleryEntries` with:
//      - src            → the imported image
//      - alt            → required, SEO/accessibility description
//      - patientName    → optional
//      - treatmentName  → optional
//      - sortOrder      → controls display order (lower = earlier)
//      - active         → set to false to hide without deleting the entry
// 4. That's it — the section on /gallery re-sorts and re-renders
//    automatically. No other file needs to change.
//
// Unlimited entries are supported — this is a plain array with no length
// cap. Inactive entries are filtered out before rendering.
// ─────────────────────────────────────────────────────────────────────────

import type { Tile } from "@/routes/gallery";

import smileSample01 from "@/assets/smile-gallery-sample-01.webp";
import smileSample02 from "@/assets/smile-gallery-sample-02.webp";

export interface PatientSmileGalleryEntry {
  /** Unique, stable key */
  id: string;
  /** Imported image module (from src/assets) */
  src: string;
  /** Required — SEO-friendly, descriptive alt text */
  alt: string;
  /** Optional — shown on the card badge if provided */
  patientName?: string;
  /** Optional — shown on the card badge if provided */
  treatmentName?: string;
  /** Lower numbers render first */
  sortOrder: number;
  /** Set to false to hide this entry without deleting it */
  active: boolean;
  /** Optional CSS object-position override (defaults to "center") */
  objectPosition?: string;
}

// ── Sample seed entries ─────────────────────────────────────────────────
// These 2 entries use the images provided so far, purely to demonstrate
// the collection working end-to-end (image renders, badge text composes
// correctly, sort order applies). Replace `alt`, `patientName`, and
// `treatmentName` with real patient case details, or set `active: false`
// / delete the entry once real treatment photos are ready to add.
export const patientSmileGalleryEntries: PatientSmileGalleryEntry[] = [
  {
    id: "smile-sample-01",
    src: smileSample01,
    alt: "Patient smile gallery sample photo at Dr Sawhney’s My Dentist Kakadeo, Kanpur",
    sortOrder: 10,
    active: true,
  },
  {
    id: "smile-sample-02",
    src: smileSample02,
    alt: "Patient smile gallery sample photo at Dr Sawhney’s My Dentist Kakadeo, Kanpur",
    sortOrder: 20,
    active: true,
  },
];

function buildBadgeLabel(entry: PatientSmileGalleryEntry): string {
  if (entry.patientName && entry.treatmentName) {
    return `${entry.patientName} · ${entry.treatmentName}`;
  }
  return entry.treatmentName ?? entry.patientName ?? "Patient Smile Gallery";
}

/**
 * Active entries, sorted by sortOrder, mapped to the shared `Tile` shape
 * used by the existing gallery grid — so it renders with the exact same
 * card design, hover effect, lazy loading, and lightbox as every other
 * section on /gallery.
 */
export const patientSmileGalleryTiles: Tile[] = patientSmileGalleryEntries
  .filter((entry) => entry.active)
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map((entry) => ({
    src: entry.src,
    alt: entry.alt,
    tag: buildBadgeLabel(entry),
    objectPosition: entry.objectPosition,
  }));
