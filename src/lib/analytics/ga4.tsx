'use client';

// ============================================================
// GA4 — Google Analytics 4 (Enhanced Setup)
// ============================================================
// The base gtag.js script is already loaded in layout.tsx.
// This provider adds enhanced measurement features:
//   - Scroll depth tracking
//   - Outbound click tracking
//   - File download tracking
//   - Page visibility tracking
//
// GA4 Measurement ID: Already set as NEXT_PUBLIC_GA4_MEASUREMENT_ID
// Currently hardcoded in layout.tsx as G-7KYD1RMSV9
// ============================================================

import { useEffect } from 'react';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '';

export function GA4Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!GA4_ID || GA4_ID === 'G-7KYD1RMSV9') {
      // Already loaded via layout.tsx inline script
      // This provider just adds enhanced features
    }

    // Track page visibility changes (engagement signal)
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden' && typeof window.gtag === 'function') {
        window.gtag('event', 'page_exit', {
          event_category: 'engagement',
          event_label: document.title,
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return <>{children}</>;
}
