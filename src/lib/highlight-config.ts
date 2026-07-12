/**
 * Centralized highlight configuration.
 *
 * This is the SINGLE source of truth for which words/phrases get visually
 * highlighted across treatment pages, and how.
 *
 * Add or remove a term here and it takes effect on every page that renders
 * text through <AutoHighlight> — no per-page mapping files needed.
 *
 * Categories (per project spec — only these are ever highlighted):
 *  1. treatment      – treatment / procedure names
 *  2. credential     – specialist qualifications & certifications
 *  3. technology     – technology / procedure / clinical terms
 *  4. outcome        – patient outcome benefits
 *  5. trust          – experience / trust indicators
 *
 * Styling reuses classes already present in the codebase
 * (font-semibold text-aqua-deep / font-bold text-foreground) so no new
 * design tokens, colors, or typography are introduced.
 */

export type HighlightCategory =
  | "treatment"
  | "credential"
  | "technology"
  | "outcome"
  | "trust";

/** Visual style per category — reuses existing utility classes only. */
export const HIGHLIGHT_STYLES: Record<HighlightCategory, string> = {
  treatment: "font-semibold text-aqua-deep",
  credential: "font-semibold text-aqua-deep",
  technology: "font-semibold text-aqua-deep",
  outcome: "font-bold text-foreground",
  trust: "font-semibold text-aqua-deep",
};

/**
 * Term lists. Longer/more specific phrases are listed before shorter ones
 * within a category so matching prefers the most specific phrase
 * (e.g. "single tooth implant" over "implant").
 *
 * Matching is case-insensitive and whole-word/phrase based.
 */
export const HIGHLIGHT_TERMS: Record<HighlightCategory, string[]> = {
  treatment: [
    "single tooth implant",
    "multiple implants",
    "implant-supported bridge",
    "full arch restoration",
    "full mouth rehabilitation",
    "dental implants",
    "dental implant",
    "root canal treatment",
    "root canal",
    "smile makeover",
    "smile design",
    "teeth whitening",
    "invisalign",
    "clear aligners",
    "metal braces",
    "ceramic braces",
    "orthodontic treatment",
    "veneers",
    "dental veneers",
    "crowns and bridges",
    "dental crown",
    "dental bridge",
    "gum treatment",
    "gum surgery",
    "periodontal treatment",
    "wisdom tooth extraction",
    "oral surgery",
    "paediatric dentistry",
    "pediatric dentistry",
    "preventive dentistry",
    "restorative dentistry",
    "cosmetic dentistry",
    "prosthodontics",
    "denture",
    "dentures",
    "emergency dentistry",
    "scaling and polishing",
    "fluoride treatment",
    "dental sealants",
    "tooth extraction",
    "dental filling",
    "dental fillings",
    "zygomatic implants",
    "pterygoid implants",
    "camlog implants",
  ],

  credential: [
    "aaid-certified implantologist",
    "aaid certified implantologist",
    "american-certified implantologist",
    "american certified implantologist",
    "aaid-certified",
    "aaid certified",
    "board-certified",
    "mds endodontist",
    "mds orthodontist",
    "mds in endodontics",
    "mds in conservative dentistry",
    "mds orthodontics",
    "bds, mds",
    "bds mds",
    "certified implantologist",
    "certified invisalign provider",
    "invisalign certified",
    "dentofacial orthopaedics specialist",
    "endodontist",
    "orthodontist",
    "implantologist",
    "periodontist",
    "prosthodontist",
    "pedodontist",
    "oral surgeon",
    "principal & professor",
  ],

  technology: [
    "3d scan",
    "digital x-ray",
    "cerec",
    "cad/cam technology",
    "zeiss microscope",
    "dental microscope",
    "laser dentistry",
    "rvg",
    "osseointegration",
    "same-day crown",
    "same-day crowns",
    "titanium implant",
    "bone grafting",
    "local anaesthesia",
    "local anesthesia",
    "digital smile design",
    "intraoral scanner",
    "panoramic x-ray",
    "opg",
  ],

  outcome: [
    "permanent, stable tooth replacement",
    "natural-looking",
    "natural appearance",
    "pain-free",
    "painless",
    "long-lasting",
    "lasts a lifetime",
    "minimally invasive",
    "no damage to surrounding healthy teeth",
    "preserves jawbone",
    "prevents bone loss",
    "full chewing function restored",
    "quick recovery",
    "same-day results",
    "confident smile",
    "improved oral health",
    "permanent",
  ],

  trust: [
    "21+ years of clinical experience",
    "21+ years experience",
    "21+ years",
    "226+ five-star reviews",
    "five-star reviews",
    "super specialty dental clinic",
    "most trusted dental clinic",
    "since 2005",
    "thousands of happy patients",
    "award-winning",
  ],
};

/** Max number of highlighted terms allowed within a single content block. */
export const MAX_HIGHLIGHTS_PER_BLOCK = 3;
