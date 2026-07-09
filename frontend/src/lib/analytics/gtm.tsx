'use client';

// ============================================================
// GTM — Google Tag Manager
// ============================================================
// How to activate:
//   1. Go to https://tagmanager.google.com
//   2. Create a container for materials.tanzibaba.com (Web)
//   3. Copy the Container ID (format: GTM-XXXXXXX)
//   4. Set NEXT_PUBLIC_GTM_ID in .env.local
//   5. Restart dev server / redeploy
//
// This loads GTM via dataLayer push, compatible with existing gtag setup.
// GTM and gtag can coexist — GTM manages tags via its own interface.
// ============================================================

import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export function GTMProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') return;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // GTM snippet
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.insertBefore(script, document.head.firstChild);

    // noscript fallback iframe
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }, []);

  return <>{children}</>;
}

// GTM dataLayer push helper
export function pushToGTM(data: Record<string, any>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}
