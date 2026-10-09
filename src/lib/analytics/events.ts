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

// ============================================================
// AI SEARCH REFERRAL TRACKING (measurable only — no estimates)
// ============================================================
// Matches referrer hosts belonging to answer engines / AI search
// surfaces so referral traffic from them is identifiable in GA4.
const AI_REFERRER_PATTERNS: { id: string; match: RegExp }[] = [
  { id: 'chatgpt', match: /(^|\.)chatgpt\.com$/ },
  { id: 'openai', match: /(^|\.)openai\.com$/ },
  { id: 'perplexity', match: /(^|\.)perplexity\.ai$/ },
  { id: 'copilot', match: /(^|\.)copilot\.microsoft\.com$/ },
  { id: 'bing-chat', match: /(^|\.)bing\.com$/ },
  { id: 'gemini', match: /(^|\.)gemini\.google\.com$/ },
  { id: 'google-ai', match: /(^|\.)(google\.[a-z.]+|grok\.com)$/ },
  { id: 'claude', match: /(^|\.)claude\.ai$/ },
  { id: 'you', match: /(^|\.)you\.com$/ },
  { id: 'phind', match: /(^|\.)phind\.com$/ },
];

/** Identify which AI surface (if any) referred the current session. Returns null when not measurable. */
export function detectAIReferrer(): string | null {
  if (typeof document === 'undefined') return null;
  try {
    const ref = document.referrer;
    if (!ref) return null;
    const host = new URL(ref).hostname.toLowerCase();
    for (const p of AI_REFERRER_PATTERNS) {
      if (p.match.test(host)) return p.id;
    }
    return null;
  } catch {
    return null;
  }
}

/** Fire once per session when the visitor arrived from an AI answer engine. */
export function trackAIReferral() {
  const source = detectAIReferrer();
  if (!source) return;
  try {
    if (typeof window !== 'undefined' && window.sessionStorage.getItem('ai_referral_tracked')) return;
    window.sessionStorage.setItem('ai_referral_tracked', '1');
  } catch {
    /* storage unavailable — still fire */
  }
  fire('ai_referral', {
    event_category: 'attribution',
    event_label: source,
  });
}
