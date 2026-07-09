// ============================================================
// EVENT TRACKING — Tanzibaba Materials
// ============================================================
// Centralized event utilities for GA4, GTM, Clarity, and Meta Pixel.
// Call these from any component to fire consistent events.
// ============================================================

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (...args: any[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean>;

// ---- Core helper: pushes to all active trackers ----

function fire(event: string, params: EventParams = {}) {
  // GA4 / gtag
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }

  // GTM dataLayer
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params });
  }

  // Meta Pixel custom events
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, params);
  }
}

// ============================================================
// PREDEFINED EVENTS
// ============================================================

/** User clicks a phone number link */
export function trackPhoneClick(phoneNumber?: string) {
  fire('phone_click', {
    event_category: 'contact',
    event_label: phoneNumber || '+255716002790',
  });
}

/** User clicks a WhatsApp link */
export function trackWhatsAppClick(source?: string) {
  fire('whatsapp_click', {
    event_category: 'contact',
    event_label: source || 'unknown',
  });
}

/** User clicks "Get Price" or "Get Quote" CTA */
export function trackGetPriceClick(location?: string) {
  fire('get_price_click', {
    event_category: 'conversion',
    event_label: location || window.location.pathname,
  });
}

/** User submits a quote request via WhatsApp */
export function trackQuoteSubmit(product?: string, quantity?: string) {
  fire('quote_submit', {
    event_category: 'conversion',
    event_label: product || 'general',
    value: 1,
  });
}

/** User uses a construction calculator */
export function trackCalculatorUse(calculatorType: string) {
  fire('calculator_use', {
    event_category: 'tools',
    event_label: calculatorType,
  });
}

/** User visits the directory page */
export function trackDirectoryVisit() {
  fire('directory_visit', {
    event_category: 'engagement',
    event_label: window.location.pathname,
  });
}

/** User visits a blog post */
export function trackBlogRead(postTitle?: string) {
  fire('blog_read', {
    event_category: 'content',
    event_label: postTitle || document.title,
  });
}

/** Generic custom event */
export function trackEvent(name: string, params?: EventParams) {
  fire(name, params);
}
