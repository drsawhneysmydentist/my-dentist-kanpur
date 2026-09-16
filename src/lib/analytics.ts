// Google Analytics 4 tracking helpers.
//
// The GA4 gtag.js script itself is loaded once, globally, in
// src/routes/__root.tsx using the recommended gtag.js snippet
// (Measurement ID: G-HPHYXJJ7H6). This module only sends events through
// the global `gtag` function once that script has loaded.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-HPHYXJJ7H6";

function callGtag(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

/** Sends a GA4 page_view event. Called on initial load and on every client-side route change. */
export function trackPageView(path: string) {
  callGtag("event", "page_view", {
    page_path: path,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}

/** Sends a generic GA4 custom event. */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  callGtag("event", eventName, params);
}

let clickTrackingInitialized = false;

/**
 * Delegated click tracking for WhatsApp and Call buttons.
 *
 * Rather than instrumenting every individual WhatsApp/tel link across the
 * site (Hero, floating buttons, Contact section, service pages, footer,
 * etc.), this listens at the document level and fires a GA4 event whenever
 * any link whose href points to `wa.me` (WhatsApp) or starts with `tel:`
 * (Call) is clicked. This tracks every existing WhatsApp/Call button
 * automatically, without changing any of their markup, styling, or
 * behaviour.
 */
export function initClickTracking() {
  if (typeof document === "undefined" || clickTrackingInitialized) return;
  clickTrackingInitialized = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const linkText = link.textContent?.trim().slice(0, 100) || undefined;
      const pagePath = window.location.pathname;

      if (href.includes("wa.me")) {
        trackEvent("whatsapp_click", { link_url: href, link_text: linkText, page_path: pagePath });
      } else if (href.startsWith("tel:")) {
        trackEvent("call_button_click", { link_url: href, link_text: linkText, page_path: pagePath });
      }
    },
    { capture: true },
  );
}

/** Sends a GA4 event when the contact form is successfully submitted. */
export function trackContactFormSubmit() {
  trackEvent("contact_form_submit", { page_path: typeof window !== "undefined" ? window.location.pathname : undefined });
}
