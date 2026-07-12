/**
 * Premium dental icon system.
 * A single consistent visual family — soft, lightly rendered 3D tooth forms
 * with clinically relevant accents per treatment — designed to replace
 * generic line icons on the homepage treatment cards.
 *
 * All icons share the same base tooth geometry, gradient shading approach,
 * stroke weight, and accent-color language (site aqua palette via CSS vars),
 * so they read as one designed icon system rather than mismatched glyphs.
 */

type IconProps = {
  className?: string;
};

/** Shared soft 3D shading defs, unique per icon instance to avoid id collisions. */
function ToothGradients({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="55%" stopColor="var(--aqua-soft)" />
        <stop offset="100%" stopColor="#dcedee" />
      </linearGradient>
      <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--aqua)" />
        <stop offset="100%" stopColor="var(--aqua-deep)" />
      </linearGradient>
      <radialGradient id={`${id}-shine`} cx="35%" cy="25%" r="65%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** Base molar-style tooth silhouette shared across the set. */
const TOOTH_PATH =
  "M24 4c5.2 0 8.8 2.6 11.4 5.4 2.4 2.6 3.6 6 3.2 10.4-.4 4.6-2 9-3.4 13.2-1.2 3.6-2.2 7.4-3.6 9.8-1 1.7-2.4 2.2-3.4.4-1.2-2.2-1.6-6-2.4-9-.4-1.6-1.2-2.6-1.8-2.6s-1.4 1-1.8 2.6c-.8 3-1.2 6.8-2.4 9-1 1.8-2.4 1.3-3.4-.4-1.4-2.4-2.4-6.2-3.6-9.8-1.4-4.2-3-8.6-3.4-13.2-.4-4.4.8-7.8 3.2-10.4C15.2 6.6 18.8 4 24 4z";

export function IconRootCanal({ className }: IconProps) {
  const id = "rct";
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Root canal treatment">
      <ToothGradients id={id} />
      <path d={TOOTH_PATH} fill={`url(#${id}-body)`} stroke="var(--aqua-deep)" strokeWidth="1.1" strokeLinejoin="round" />
      <path d={TOOTH_PATH} fill={`url(#${id}-shine)`} />
      {/* root canal anatomy — treated canal line down each root with apex marker */}
      <path d="M20.4 20c-.3 5.4-.9 11.6-1.9 16.4" stroke={`url(#${id}-accent)`} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M27.6 20c.3 5.4.9 11.6 1.9 16.4" stroke={`url(#${id}-accent)`} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="18.3" cy="37.6" r="1.5" fill="var(--aqua-deep)" />
      <circle cx="29.7" cy="37.6" r="1.5" fill="var(--aqua-deep)" />
      <path d="M15.5 17.5h17" stroke="var(--aqua-deep)" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 2.2" opacity="0.6" />
    </svg>
  );
}

export function IconDentalImplant({ className }: IconProps) {
  const id = "implant";
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Dental implants">
      <ToothGradients id={id} />
      {/* crown */}
      <path
        d="M24 4c5 0 9 3.4 9 8 0 3.4-2 5.6-4.6 6.6-.6.3-1 .9-1 1.6v1.2h-6.8v-1.2c0-.7-.4-1.3-1-1.6C17 18.6 15 16.4 15 13c0-4.6 4-9 9-9z"
        fill={`url(#${id}-body)`}
        stroke="var(--aqua-deep)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M24 4c5 0 9 3.4 9 8 0 3.4-2 5.6-4.6 6.6-.6.3-1 .9-1 1.6v1.2h-6.8v-1.2c0-.7-.4-1.3-1-1.6C17 18.6 15 16.4 15 13c0-4.6 4-9 9-9z"
        fill={`url(#${id}-shine)`}
      />
      {/* abutment */}
      <path d="M20.6 21.4h6.8l-1 4h-4.8l-1-4z" fill="var(--aqua-soft)" stroke="var(--aqua-deep)" strokeWidth="1" strokeLinejoin="round" />
      {/* titanium fixture post with thread lines */}
      <path d="M20.9 25.4h6.2l-1.6 16.4a1.5 1.5 0 0 1-1.5 1.4h0a1.5 1.5 0 0 1-1.5-1.4l-1.6-16.4z" fill={`url(#${id}-accent)`} />
      {[27.6, 30, 32.4, 34.8, 37.2, 39.6].map((y) => (
        <line key={y} x1="20.6" y1={y} x2="27.4" y2={y} stroke="#ffffff" strokeWidth="0.9" opacity="0.55" />
      ))}
    </svg>
  );
}

export function IconBraces({ className }: IconProps) {
  const id = "braces";
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Braces and orthodontics">
      <ToothGradients id={id} />
      <path d={TOOTH_PATH} fill={`url(#${id}-body)`} stroke="var(--aqua-deep)" strokeWidth="1.1" strokeLinejoin="round" />
      <path d={TOOTH_PATH} fill={`url(#${id}-shine)`} />
      {/* orthodontic wire */}
      <path d="M13 19.5c3 1.6 6.3 2.4 11 2.4s8-.8 11-2.4" stroke={`url(#${id}-accent)`} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* brackets */}
      <rect x="17.4" y="17.6" width="3.2" height="3.4" rx="0.8" fill="var(--aqua-deep)" />
      <rect x="27.4" y="17.6" width="3.2" height="3.4" rx="0.8" fill="var(--aqua-deep)" />
      <rect x="22.4" y="18.3" width="3.2" height="3.4" rx="0.8" fill="var(--aqua-deep)" />
    </svg>
  );
}

export function IconSmileMakeover({ className }: IconProps) {
  const id = "smile";
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Smile makeover">
      <ToothGradients id={id} />
      {/* smile arc built from veneer-like tooth segments */}
      <path
        d="M9 19c3.6 8.4 9.6 13 15 13s11.4-4.6 15-13"
        stroke="var(--aqua-deep)"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M9 19c3.6 8.4 9.6 13 15 13s11.4-4.6 15-13c-3 6.2-8.4 9.6-15 9.6S12 25.2 9 19z"
        fill={`url(#${id}-body)`}
      />
      {[13.5, 18.6, 23.7, 28.8, 34].map((x, i) => (
        <line key={x} x1={x} y1="23" x2={x - 1.4} y2="28.2" stroke="var(--aqua-deep)" strokeWidth="0.7" opacity="0.5" />
      ))}
      {/* sparkle accent — aesthetic enhancement */}
      <path d="M35.5 8.5l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill={`url(#${id}-accent)`} />
      <circle cx="12" cy="10" r="1.3" fill="var(--aqua)" opacity="0.85" />
    </svg>
  );
}

export function IconTeethWhitening({ className }: IconProps) {
  const id = "whitening";
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Teeth whitening">
      <ToothGradients id={id} />
      <path d={TOOTH_PATH} fill="#ffffff" stroke="var(--aqua-deep)" strokeWidth="1.1" strokeLinejoin="round" />
      <path d={TOOTH_PATH} fill={`url(#${id}-shine)`} />
      {/* whitening sparkle burst */}
      <path d="M35 8l1.3 3.7L40 13l-3.7 1.3L35 18l-1.3-3.7L30 13l3.7-1.3L35 8z" fill={`url(#${id}-accent)`} />
      <circle cx="12.5" cy="12" r="1.4" fill="var(--aqua)" />
      <circle cx="38" cy="24" r="1" fill="var(--aqua-deep)" opacity="0.7" />
    </svg>
  );
}

export function IconPaediatric({ className }: IconProps) {
  const id = "paed";
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Paediatric dentistry">
      <ToothGradients id={id} />
      {/* rounded, friendlier tooth silhouette for a child-focused treatment */}
      <path
        d="M24 7c4.4 0 7.4 2.2 9.6 4.6 2 2.2 3 5 2.7 8.8-.4 3.9-1.7 7.6-2.9 11.1-1 3-1.9 6.2-3 8.2-.9 1.4-2 1.9-2.9.4-1-1.8-1.4-5-2-7.5-.3-1.4-1-2.2-1.5-2.2s-1.2.8-1.5 2.2c-.6 2.5-1 5.7-2 7.5-.9 1.5-2 1-2.9-.4-1.1-2-2-5.2-3-8.2-1.2-3.5-2.5-7.2-2.9-11.1-.3-3.8.7-6.6 2.7-8.8C16.6 9.2 19.6 7 24 7z"
        fill={`url(#${id}-body)`}
        stroke="var(--aqua-deep)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M24 7c4.4 0 7.4 2.2 9.6 4.6 2 2.2 3 5 2.7 8.8-.4 3.9-1.7 7.6-2.9 11.1-1 3-1.9 6.2-3 8.2-.9 1.4-2 1.9-2.9.4-1-1.8-1.4-5-2-7.5-.3-1.4-1-2.2-1.5-2.2s-1.2.8-1.5 2.2c-.6 2.5-1 5.7-2 7.5-.9 1.5-2 1-2.9-.4-1.1-2-2-5.2-3-8.2-1.2-3.5-2.5-7.2-2.9-11.1-.3-3.8.7-6.6 2.7-8.8C16.6 9.2 19.6 7 24 7z"
        fill={`url(#${id}-shine)`}
      />
      {/* friendly smile face on the tooth */}
      <circle cx="19.5" cy="18.5" r="1.3" fill="var(--aqua-deep)" />
      <circle cx="28.5" cy="18.5" r="1.3" fill="var(--aqua-deep)" />
      <path d="M19 23.5c1.6 1.8 3.4 2.6 5 2.6s3.4-.8 5-2.6" stroke="var(--aqua-deep)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* small heart accent — gentle, child-friendly care */}
      <path
        d="M37 10.4c-.9-.9-2.3-.9-3 0-.7-.9-2.1-.9-3 0-1 1-1 2.5 0 3.6l3 3 3-3c1-1.1 1-2.6 0-3.6z"
        fill={`url(#${id}-accent)`}
      />
    </svg>
  );
}

export const DENTAL_ICONS = [
  IconRootCanal,
  IconDentalImplant,
  IconBraces,
  IconSmileMakeover,
  IconTeethWhitening,
  IconPaediatric,
];
