// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — Before & After case manifest.
//
// Both the Homepage "Premium Before & After Transformations" auto-slider
// AND the Gallery page's "Before & After Cases" section read from this one
// array. Add / remove / reorder a case here and it automatically appears
// in both places — no component edits required.
//
// FIELDS
// ── id           unique, stable key (used for React keys & loop-cloning)
// ── treatment    treatment name shown on the case card
// ── beforeImage  the "before" photo (stacked/left-hand image in cards)
// ── afterImage   the "after" photo (stacked/right-hand image in cards)
// ── thumbnail    optional — a single combined before/after graphic used by
//                 the homepage slider card. Falls back to `afterImage` if
//                 omitted.
// ── patientName  optional attribution shown under the treatment name
// ── altBefore    alt text for the before image
// ── altAfter     alt text for the after image
// ── featured     true/false — featured cases can be surfaced first
// ── ratio        optional — true width/height of `thumbnail`, used so the
//                 homepage slider sizes each card without cropping
//
// HOW TO ADD A NEW CASE:
// 1. Import the before / after (and optional thumbnail) images from `@/assets/`.
// 2. Push a new entry to `beforeAfterCases` below.
// That's it — the homepage slider and the Gallery page both update automatically.
// ─────────────────────────────────────────────────────────────────────────

// Legacy combined before/after graphics (already used across the site)
import baOrtho1 from "@/assets/ba-orthodontics-1.webp";
import baOrtho2 from "@/assets/ba-orthodontics-2.webp";
import baOrtho3 from "@/assets/ba-orthodontics-3.webp";
import baOrtho4 from "@/assets/ba-orthodontics-4.webp";
import baOrthoB from "@/assets/ba-orthodontics-braces.webp";
import baSmile from "@/assets/ba-general-1.webp";
import baImplants from "@/assets/ba-implants.webp";
import baWhitening from "@/assets/ba-teeth-whitening.webp";
import baRestorative from "@/assets/ba-restorative.webp";
import baRct1 from "@/assets/ba-rct-1.webp";
import baRct2 from "@/assets/ba-rct-2.webp";
import baGum1 from "@/assets/ba-gum-treatment-1.webp";
import baGum2 from "@/assets/ba-gum-treatment-2.webp";
import baProstho from "@/assets/ba-prosthodontics.webp";
import baPaediatric from "@/assets/ba-paediatric.webp";
import baGen2 from "@/assets/ba-general-2.webp";
import baGen3 from "@/assets/ba-general-3.webp";

// New cases — separate before / after crops, plus the original combined
// graphic kept as the `thumbnail` for the homepage slider.
import veneersBefore from "@/assets/ba-new-veneers-before.webp";
import veneersAfter from "@/assets/ba-new-veneers-after.webp";
import veneersThumb from "@/assets/ba-new-veneers-thumb.webp";
import orthoFaceBefore from "@/assets/ba-new-ortho-face-before.webp";
import orthoFaceAfter from "@/assets/ba-new-ortho-face-after.webp";
import orthoFaceThumb from "@/assets/ba-new-ortho-face-thumb.webp";
import orthoAdultBefore from "@/assets/ba-new-ortho-adult-before.webp";
import orthoAdultAfter from "@/assets/ba-new-ortho-adult-after.webp";
import orthoAdultThumb from "@/assets/ba-new-ortho-adult-thumb.webp";
import zoom1Before from "@/assets/ba-new-zoom-1-before.webp";
import zoom1After from "@/assets/ba-new-zoom-1-after.webp";
import zoom1Thumb from "@/assets/ba-new-zoom-1-thumb.webp";
import zoom2Before from "@/assets/ba-new-zoom-2-before.webp";
import zoom2After from "@/assets/ba-new-zoom-2-after.webp";
import zoom2Thumb from "@/assets/ba-new-zoom-2-thumb.webp";
import zoom3Before from "@/assets/ba-new-zoom-3-before.webp";
import zoom3After from "@/assets/ba-new-zoom-3-after.webp";
import zoom3Thumb from "@/assets/ba-new-zoom-3-thumb.webp";

export interface BeforeAfterCase {
  /** Unique, stable key — used for React keys & infinite-loop cloning */
  id: string;
  /** Treatment name shown on the case card */
  treatment: string;
  /** The "before" photo */
  beforeImage: string;
  /** The "after" photo */
  afterImage: string;
  /** Optional combined before/after graphic used by the homepage slider */
  thumbnail?: string;
  /** Optional patient attribution */
  patientName?: string;
  /** Alt text for the before image */
  altBefore: string;
  /** Alt text for the after image */
  altAfter: string;
  /** Featured cases can be surfaced first */
  featured: boolean;
  /** True (unmodified) width / height of `thumbnail`, for uncropped sizing */
  ratio?: number;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "ba1",
    treatment: "Orthodontics",
    beforeImage: baOrtho1,
    afterImage: baOrtho1,
    thumbnail: baOrtho1,
    altBefore: "Orthodontic treatment before — My Dentist Kanpur",
    altAfter: "Orthodontic treatment after — My Dentist Kanpur",
    featured: true,
    ratio: 1600 / 1600,
  },
  {
    id: "ba2",
    treatment: "Dental Implants",
    beforeImage: baImplants,
    afterImage: baImplants,
    thumbnail: baImplants,
    altBefore: "Dental implant treatment before — My Dentist Kanpur",
    altAfter: "Dental implant treatment after — My Dentist Kanpur",
    featured: true,
    ratio: 1054 / 620,
  },
  {
    id: "ba3",
    treatment: "Smile Makeover",
    beforeImage: baSmile,
    afterImage: baSmile,
    thumbnail: baSmile,
    altBefore: "Smile makeover before — My Dentist Kanpur",
    altAfter: "Smile makeover after — My Dentist Kanpur",
    featured: true,
    ratio: 1076 / 788,
  },
  {
    id: "ba4",
    treatment: "Teeth Whitening",
    beforeImage: baWhitening,
    afterImage: baWhitening,
    thumbnail: baWhitening,
    altBefore: "Teeth whitening before — My Dentist Kanpur",
    altAfter: "Teeth whitening after — My Dentist Kanpur",
    featured: false,
    ratio: 1261 / 1280,
  },
  {
    id: "ba5",
    treatment: "Root Canal Treatment",
    beforeImage: baRct1,
    afterImage: baRct1,
    thumbnail: baRct1,
    altBefore: "Root canal treatment before — My Dentist Kanpur",
    altAfter: "Root canal treatment after — My Dentist Kanpur",
    featured: false,
    ratio: 754 / 570,
  },
  {
    id: "ba6",
    treatment: "Orthodontics",
    beforeImage: baOrtho3,
    afterImage: baOrtho3,
    thumbnail: baOrtho3,
    altBefore: "Orthodontic treatment before — My Dentist Kanpur",
    altAfter: "Orthodontic treatment after — My Dentist Kanpur",
    featured: false,
    ratio: 1600 / 1600,
  },
  {
    id: "ba7",
    treatment: "Gum Treatment",
    beforeImage: baGum1,
    afterImage: baGum1,
    thumbnail: baGum1,
    altBefore: "Gum treatment before — My Dentist Kanpur",
    altAfter: "Gum treatment after — My Dentist Kanpur",
    featured: false,
    ratio: 760 / 566,
  },
  {
    id: "ba8",
    treatment: "Restorative Dentistry",
    beforeImage: baRestorative,
    afterImage: baRestorative,
    thumbnail: baRestorative,
    altBefore: "Restorative dentistry before — My Dentist Kanpur",
    altAfter: "Restorative dentistry after — My Dentist Kanpur",
    featured: false,
    ratio: 1080 / 674,
  },
  {
    id: "ba9",
    treatment: "Prosthodontics",
    beforeImage: baProstho,
    afterImage: baProstho,
    thumbnail: baProstho,
    altBefore: "Prosthodontics before — My Dentist Kanpur",
    altAfter: "Prosthodontics after — My Dentist Kanpur",
    featured: false,
    ratio: 370 / 373,
  },
  {
    id: "ba10",
    treatment: "Paediatric Dentistry",
    beforeImage: baPaediatric,
    afterImage: baPaediatric,
    thumbnail: baPaediatric,
    altBefore: "Paediatric dentistry case before — My Dentist Kanpur",
    altAfter: "Paediatric dentistry case after — My Dentist Kanpur",
    featured: false,
    ratio: 958 / 1238,
  },
  {
    id: "ba11",
    treatment: "Smile Makeover — Veneers",
    beforeImage: veneersBefore,
    afterImage: veneersAfter,
    thumbnail: veneersThumb,
    altBefore: "Discoloured, chipped front teeth before veneers — My Dentist Kanpur",
    altAfter: "Bright, uniform smile after ceramic veneers — My Dentist Kanpur",
    featured: true,
    ratio: 948 / 1280,
  },
  {
    id: "ba12",
    treatment: "Orthodontics — Full Face",
    beforeImage: orthoFaceBefore,
    afterImage: orthoFaceAfter,
    thumbnail: orthoFaceThumb,
    patientName: "Case treated by Dr. Karuna Singh Sawhny",
    altBefore: "Patient's smile before orthodontic treatment — My Dentist Kanpur",
    altAfter: "Patient's smile after orthodontic treatment by Dr. Karuna Singh Sawhny — My Dentist Kanpur",
    featured: true,
    ratio: 1280 / 734,
  },
  {
    id: "ba13",
    treatment: "Orthodontics — Adult Braces",
    beforeImage: orthoAdultBefore,
    afterImage: orthoAdultAfter,
    thumbnail: orthoAdultThumb,
    patientName: "Case treated by Dr. Karuna Singh Sawhny",
    altBefore: "Adult patient's crowded, misaligned smile before braces — My Dentist Kanpur",
    altAfter: "Adult patient's aligned, confident smile after orthodontic treatment — My Dentist Kanpur",
    featured: false,
    ratio: 1280 / 1280,
  },
  {
    id: "ba14",
    treatment: "ZOOM! Teeth Whitening",
    beforeImage: zoom1Before,
    afterImage: zoom1After,
    thumbnail: zoom1Thumb,
    altBefore: "Yellow, stained teeth before ZOOM teeth whitening — My Dentist Kanpur",
    altAfter: "Bright white teeth after ZOOM teeth whitening — My Dentist Kanpur",
    featured: false,
    ratio: 702 / 745,
  },
  {
    id: "ba15",
    treatment: "ZOOM! Teeth Whitening",
    beforeImage: zoom2Before,
    afterImage: zoom2After,
    thumbnail: zoom2Thumb,
    altBefore: "Discoloured teeth before ZOOM teeth whitening — My Dentist Kanpur",
    altAfter: "Whitened teeth after ZOOM teeth whitening — My Dentist Kanpur",
    featured: false,
    ratio: 708 / 745,
  },
  {
    id: "ba16",
    treatment: "ZOOM! Teeth Whitening",
    beforeImage: zoom3Before,
    afterImage: zoom3After,
    thumbnail: zoom3Thumb,
    altBefore: "Stained teeth before ZOOM teeth whitening — My Dentist Kanpur",
    altAfter: "Brighter, whiter smile after ZOOM teeth whitening — My Dentist Kanpur",
    featured: false,
    ratio: 697 / 745,
  },
  {
    id: "ba17",
    treatment: "Orthodontics",
    beforeImage: baOrtho2,
    afterImage: baOrtho2,
    thumbnail: baOrtho2,
    altBefore: "Orthodontic treatment before — My Dentist Kanpur",
    altAfter: "Orthodontic treatment after — My Dentist Kanpur",
    featured: false,
    ratio: 1600 / 1600,
  },
  {
    id: "ba18",
    treatment: "Orthodontics",
    beforeImage: baOrtho4,
    afterImage: baOrtho4,
    thumbnail: baOrtho4,
    altBefore: "Orthodontic treatment before — My Dentist Kanpur",
    altAfter: "Orthodontic treatment after — My Dentist Kanpur",
    featured: false,
    ratio: 1600 / 1600,
  },
  {
    id: "ba19",
    treatment: "Braces",
    beforeImage: baOrthoB,
    afterImage: baOrthoB,
    thumbnail: baOrthoB,
    altBefore: "Braces close-up before — My Dentist Kanpur",
    altAfter: "Braces close-up after — My Dentist Kanpur",
    featured: false,
  },
  {
    id: "ba20",
    treatment: "Root Canal Treatment",
    beforeImage: baRct2,
    afterImage: baRct2,
    thumbnail: baRct2,
    altBefore: "Root canal treatment before — My Dentist Kanpur",
    altAfter: "Root canal treatment after — My Dentist Kanpur",
    featured: false,
  },
  {
    id: "ba21",
    treatment: "Periodontics",
    beforeImage: baGum2,
    afterImage: baGum2,
    thumbnail: baGum2,
    altBefore: "Gum treatment before — My Dentist Kanpur",
    altAfter: "Gum treatment after — My Dentist Kanpur",
    featured: false,
  },
  {
    id: "ba22",
    treatment: "Teeth Whitening",
    beforeImage: baGen2,
    afterImage: baGen2,
    thumbnail: baGen2,
    altBefore: "Teeth whitening before — My Dentist Kanpur",
    altAfter: "Teeth whitening after — My Dentist Kanpur",
    featured: false,
  },
  {
    id: "ba23",
    treatment: "Teeth Whitening",
    beforeImage: baGen3,
    afterImage: baGen3,
    thumbnail: baGen3,
    altBefore: "Teeth whitening before — My Dentist Kanpur",
    altAfter: "Teeth whitening after — My Dentist Kanpur",
    featured: false,
  },
];
