// Swiper ships its stylesheets behind package-export subpaths (e.g. "swiper/css",
// "swiper/css/effect-fade") that don't end in a literal ".css" specifier, so Vite's
// built-in `declare module '*.css'` ambient type (which matches on the specifier
// text, not the resolved file) doesn't cover them. These declarations close that gap.
declare module "swiper/css" {}
declare module "swiper/css/*" {}
