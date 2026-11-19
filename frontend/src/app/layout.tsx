import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AuthProvider } from '@/lib/auth';
import { AnalyticsProviders } from '@/lib/analytics/providers';
import AiSalesChat from '@/components/AiSalesChat';

const siteUrl = 'https://materials.tanzibaba.com';
const gaId = 'G-7KYD1RMSV9';
const pixelId = '984823598215170';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tanzibaba — Construction Supply, Equipment & Logistics Network | Tanzania',
    template: '%s | Tanzibaba — Construction Supply, Equipment & Logistics Tanzania',
  },
  description: 'Tanzibaba is Tanzania\'s construction supply, equipment and logistics network. Premium ready-mix concrete, aggregates, gravel, washed sand, road base, concrete blocks, paving blocks, construction equipment hire and materials delivered across Tanzania.',
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
    languages: {
      'x-default': siteUrl,
    },
  },
  openGraph: {
    title: 'Tanzibaba — Construction Supply, Equipment & Logistics Network | Tanzania',
    description: 'Tanzania\'s construction supply, equipment and logistics network. Premium concrete, aggregates, blocks, equipment hire and construction materials.',
    url: siteUrl,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/og-brand-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanzibaba — Construction Supply, Equipment & Logistics Network',
    description: 'Tanzania\'s construction supply, equipment and logistics network. Premium concrete, aggregates, blocks, equipment hire and construction materials.',
    images: ['/images/og-brand-image.png'],
  },
  verification: {
    google: 'Z_ScDUGbP5OYWvLJ-m3k0LS-pAmuKwds5VVkZm-4vcM',
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
      alternateName: 'Tanzibaba Construction Supply',
      description: 'Construction supply, equipment and logistics network in Tanzania — ready-mix concrete (C10 to C50), aggregates, gravel, crushed stone, hollow blocks, solid blocks, paving blocks, culvert pipes, construction equipment hire and road construction materials. Washed sand technology for superior concrete strength.',
      url: siteUrl,
      telephone: '+255716002790',
      email: 'info@tanzibaba.co.tz',
      areaServed: [
        { '@type': 'City', name: 'Dar es Salaam', containedInPlace: { '@type': 'Country', name: 'Tanzania' } },
        { '@type': 'City', name: 'Dodoma', containedInPlace: { '@type': 'Country', name: 'Tanzania' } },
        { '@type': 'City', name: 'Iringa', containedInPlace: { '@type': 'Country', name: 'Tanzania' } },
        { '@type': 'Place', name: 'Zanzibar', containedInPlace: { '@type': 'Country', name: 'Tanzania' } },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tanzibaba Construction Materials & Services',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Ready-Mix Concrete', itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'C25 Ready-Mix Concrete', description: 'Most popular grade for residential construction. House foundations, columns, beams, driveways.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'C30 Ready-Mix Concrete', description: 'Multi-storey apartments, commercial buildings, heavy-duty ground slabs.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'C35 Ready-Mix Concrete', description: 'Industrial floors, factories, warehouses, heavy structures.' } },
          ]},
          { '@type': 'OfferCatalog', name: 'Aggregates & Gravel', itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Crushed Stone Aggregates', description: 'Multiple sizes: 6mm, 10mm, 14mm, 20mm, 40mm from Lugoba crushing plant.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Road Base Material', description: 'Road base, sub-base and asphalt aggregates for infrastructure projects.' } },
          ]},
          { '@type': 'OfferCatalog', name: 'Concrete Blocks', itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hollow Blocks', description: 'Lightweight blocks: 140x190x390mm, 190x190x390mm, 230x190x390mm for walls and partitions.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Solid Blocks', description: 'Dense solid blocks: 90x190x390mm to 220x190x390mm for load-bearing walls.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Paving Blocks', description: 'Interlocking blocks: 200x100x80mm, 220x110x80mm for driveways and walkways.' } },
          ]},
          { '@type': 'OfferCatalog', name: 'Equipment Hire', itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Excavator Hire', description: 'Various excavator sizes available for rent across Tanzania.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Concrete Pump Truck Hire', description: 'Boom pumps and line pumps for concrete placement.' } },
          ]},
        ],
      },
      priceRange: 'TZS 120,000 - TZS 400,000 per m³',
      image: `${siteUrl}/images/new/mobile-hero.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dar es Salaam',
        addressRegion: 'Dar es Salaam',
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
        'https://wa.me/255716002790',
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
      '@id': `${siteUrl}/#service-concrete`,
      name: 'Ready-Mix Concrete Supply',
      serviceType: 'Ready-Mix Concrete Delivery',
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Dar es Salaam' },
        { '@type': 'City', name: 'Dodoma' },
        { '@type': 'City', name: 'Iringa' },
        { '@type': 'Place', name: 'Zanzibar' },
      ],
      description: 'Premium ready-mix concrete supply in Tanzania. Grades C10 to C50 with washed sand technology and computerized batching. Delivery within 24-48 hours. Pricing from TZS 130,000 per m³ including 18% VAT.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Concrete Grades',
        itemListElement: [
          { '@type': 'Offer', price: '130000', priceCurrency: 'TZS', priceSpecification: { '@type': 'UnitPriceSpecification', price: '130000', priceCurrency: 'TZS', unitText: 'm³' }, itemOffered: { '@type': 'Product', name: 'C10 Concrete' } },
          { '@type': 'Offer', price: '210000', priceCurrency: 'TZS', priceSpecification: { '@type': 'UnitPriceSpecification', price: '210000', priceCurrency: 'TZS', unitText: 'm³' }, itemOffered: { '@type': 'Product', name: 'C25 Concrete' } },
          { '@type': 'Offer', price: '250000', priceCurrency: 'TZS', priceSpecification: { '@type': 'UnitPriceSpecification', price: '250000', priceCurrency: 'TZS', unitText: 'm³' }, itemOffered: { '@type': 'Product', name: 'C30 Concrete' } },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-aggregates`,
      name: 'Aggregate Supply & Crushing',
      serviceType: 'Construction Aggregates Supply',
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Dar es Salaam' },
        { '@type': 'City', name: 'Dodoma' },
        { '@type': 'City', name: 'Iringa' },
        { '@type': 'Place', name: 'Zanzibar' },
      ],
      description: 'High-quality crushed stone and aggregates from our Lugoba crushing plant. Sizes from crusher dust to 40mm+ for road construction, building foundations, concrete production, and infrastructure development.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-blocks`,
      name: 'Concrete Blocks Supply',
      serviceType: 'Concrete Blocks Supply',
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Dar es Salaam' },
        { '@type': 'City', name: 'Dodoma' },
        { '@type': 'City', name: 'Iringa' },
        { '@type': 'Place', name: 'Zanzibar' },
      ],
      description: 'Concrete blocks supply — hollow blocks, solid blocks, paving blocks and kerbstones for walls, fencing, driveways, and construction projects.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-equipment`,
      name: 'Construction Equipment Hire',
      serviceType: 'Equipment Rental',
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: { '@type': 'Country', name: 'Tanzania' },
      description: 'Construction equipment hire — excavators, bulldozers, wheel loaders, concrete pump trucks, mobile cranes, dump trucks and more. Rent, buy, or rent-to-own.',
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
        <AnalyticsProviders>
          <AuthProvider>{children}</AuthProvider>
        </AnalyticsProviders>
        <AiSalesChat />
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
