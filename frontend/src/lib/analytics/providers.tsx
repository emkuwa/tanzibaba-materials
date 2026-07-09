'use client';

// ============================================================
// UNIFIED ANALYTICS PROVIDER — Tanzibaba Materials
// ============================================================
// Imports and initializes all analytics providers.
// Drop this into layout.tsx to activate all tracking.
//
// Usage in layout.tsx:
//   import { AnalyticsProviders } from '@/lib/analytics/providers';
//   ...
//   <AnalyticsProviders>{children}</AnalyticsProviders>
//
// All providers are safe to use without env vars —
// they gracefully skip initialization if ID is not set.
// ============================================================

import { ClarityProvider } from './clarity';
import { GTMProvider } from './gtm';
import { GA4Provider } from './ga4';

export function AnalyticsProviders({ children }: { children: React.ReactNode }) {
  return (
    <GA4Provider>
      <GTMProvider>
        <ClarityProvider>
          {children}
        </ClarityProvider>
      </GTMProvider>
    </GA4Provider>
  );
}
