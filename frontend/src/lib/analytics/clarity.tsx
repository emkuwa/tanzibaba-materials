'use client';

// ============================================================
// CLARITY — Microsoft Clarity Heatmap & Session Recording
// ============================================================
// How to activate:
//   1. Go to https://clarity.microsoft.com
//   2. Create a new project for "materials.tanzibaba.com"
//   3. Copy the Project ID (format: clarity_xxxxxxxx)
//   4. Set NEXT_PUBLIC_CLARITY_ID in .env.local
//   5. Restart dev server / redeploy
// ============================================================

import { useEffect } from 'react';

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || '';

export function ClarityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!CLARITY_ID || CLARITY_ID === 'clarity_project_id_here') return;

    // Load Clarity script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");
    `;
    document.head.appendChild(script);
  }, []);

  return <>{children}</>;
}

// Custom Clarity events (optional, for manual tracking)
export function clarityEvent(eventName: string, data?: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('set', eventName, data);
  }
}

export function clarityIdentify(userId: string) {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('identify', userId);
  }
}

export function clarityConsent() {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('consent');
  }
}
