import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AuthProvider } from '@/lib/auth';

const siteUrl = 'https://materials.tanzibaba.com';
const gaId = 'G-7KYD1RMSV9';
const pixelId = '984823598215170';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tanzibaba — Premium Concrete, Aggregates & Building Materials Supplier | Tanzania',
    template: '%s | Tanzibaba — Premium Building Materials Tanzania',
  },
  description: 'Tanzibaba is Tanzania\'s premium building materials supplier. Premium ready-mix concrete, aggregates, gravel, washed sand, road base, concrete blocks, paving blocks and construction materials delivered across Tanzania.',
  keywords: ['premium concrete Tanzania', 'ready mix concrete Dar es Salaam', 'premium aggregates Tanzania', 'building materials Tanzania', 'washed sand Tanzania', 'concrete blocks Tanzania', 'construction materials Tanzania', 'premium building materials Tanzania'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Tanzibaba — Premium Concrete, Aggregates & Building Materials Supplier | Tanzania',
    description: 'Tanzania\'s leading building materials supplier. Premium concrete, aggregates, blocks and construction materials.',
    url: siteUrl,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/og-brand-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanzibaba — Premium Concrete, Aggregates & Building Materials Supplier',
    description: 'Tanzania\'s leading building materials supplier. Premium concrete, aggregates, blocks and construction materials.',
    images: ['/images/og-brand-image.png'],
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  category: 'construction',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Tanzibaba',
      description: 'Premium construction materials supplier in Dar es Salaam — ready-mix concrete, aggregates, crushed stone, and road construction materials.',
      url: siteUrl,
      telephone: '+255716002790',
      email: 'info@tanzibaba.co.tz',
      areaServed: 'Dar es Salaam, Tanzania',
      image: `${siteUrl}/images/new/mobile-hero.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dar es Salaam',
        addressCountry: 'TZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.7924,
        longitude: 39.2083,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '07:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '07:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '07:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '07:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '15:00' },
      ],
      sameAs: [
        `https://wa.me/255716002790`,
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Tanzibaba',
      url: siteUrl,
      logo: `${siteUrl}/images/logo/tanzibaba.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+255716002790',
        contactType: 'customer service',
        availableLanguage: ['English', 'Swahili'],
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Construction Materials Supply',
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: 'Dar es Salaam, Tanzania',
      description: 'Premium construction materials — ready-mix concrete (C10 to C50), gravel, crushed stone, and road construction aggregates — with washed sand technology.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-aggregates`,
      name: 'Aggregate Supply & Crushing',
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: 'Dar es Salaam, Coastal Region, Tanzania',
      description: 'High-quality crushed stone and aggregates from our Lugoba crusher for road construction, building foundations, concrete production, and infrastructure development.',
    },
    {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#image-hero`,
      url: `${siteUrl}/images/new/mobile-hero.webp`,
      contentUrl: `${siteUrl}/images/new/mobile-hero.webp`,
      caption: 'Premium ready-mix concrete supply for commercial construction projects in Dar es Salaam',
      representativeOfPage: true,
    },
    {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#image-featured-projects`,
      url: `${siteUrl}/images/new/commercial-building.webp`,
      contentUrl: `${siteUrl}/images/new/commercial-building.webp`,
      caption: 'Featured construction projects supplied by Tanzibaba — commercial buildings, apartments, and infrastructure',
    },
    {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#image-washed-sand`,
      url: `${siteUrl}/images/new/washed-sand.webp`,
      contentUrl: `${siteUrl}/images/new/washed-sand.webp`,
      caption: 'Advanced washed sand technology used in Tanzibaba concrete production for superior strength and durability',
    },
    {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#image-og-brand`,
      url: `${siteUrl}/images/og-brand-image.png`,
      contentUrl: `${siteUrl}/images/og-brand-image.png`,
      caption: 'Tanzibaba — Premium Construction Materials Dar es Salaam',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/new/mobile-hero.webp" fetchPriority="high" />
        <link rel="icon" type="image/svg+xml" href="/images/logo/tanzibaba.svg" />
        <link rel="alternate icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
        <Script id="gtm-base" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtag/js?id=${gaId}'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gaId}');
            window.gtag = function(){ window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="" src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
        </noscript>
        <AuthProvider>{children}</AuthProvider>
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <Script id="whatsapp-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              // WhatsApp clicks
              var waTarget = e.target.closest('a[href*="wa.me"]');
              if (waTarget && typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', { 'event_category': 'contact', 'event_label': window.location.pathname });
              }
              // Phone clicks
              var telTarget = e.target.closest('a[href^="tel:"]');
              if (telTarget && typeof gtag !== 'undefined') {
                gtag('event', 'phone_click', { 'event_category': 'contact', 'event_label': telTarget.href.replace('tel:', '') });
              }
              // Get Price / Quote buttons
              var btnTarget = e.target.closest('button');
              if (btnTarget) {
                var txt = btnTarget.textContent || '';
                if ((txt.indexOf('Get Price') !== -1 || txt.indexOf('Get Quote') !== -1 || txt.indexOf('Send via WhatsApp') !== -1) && typeof gtag !== 'undefined') {
                  gtag('event', 'quote_request', { 'event_category': 'conversion', 'event_label': window.location.pathname });
                }
              }
            });
          `}
        </Script>
        <Script id="scroll-depth" strategy="afterInteractive">
          {`
            var tracked = {};
            window.addEventListener('scroll', function() {
              var h = document.documentElement.scrollHeight - window.innerHeight;
              if (h > 0) {
                var p = Math.round((window.scrollY / h) * 100);
                [25, 50, 75, 100].forEach(function(t) {
                  if (p >= t && !tracked[t]) {
                    tracked[t] = true;
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'scroll_depth', { 'event_category': 'engagement', 'event_label': t + '%', 'value': t });
                    }
                  }
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
