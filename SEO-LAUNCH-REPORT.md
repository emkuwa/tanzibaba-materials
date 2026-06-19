# SEO Launch Report — materials.tanzibaba.com

**Date:** June 19, 2026  
**Domain:** materials.tanzibaba.com  
**Status:** LIVE — SEO infrastructure deployed

---

## ✅ COMPLETED TASKS

### Technical SEO

| Task | Status | Details |
|------|--------|---------|
| robots.txt | ✅ Fixed | Updated domain to materials.tanzibaba.com |
| Sitemap | ✅ Created | Main + 4 segmented sitemaps |
| Canonical tags | ✅ Fixed | Removed duplicate canonical in layout |
| Meta titles | ✅ Added | All tool pages, directory, get-quote |
| Meta descriptions | ✅ Added | All tool pages, directory, get-quote |
| Open Graph | ✅ Present | Root layout provides fallback for all pages |
| Twitter Cards | ✅ Present | summary_large_image configured |
| favicon | ✅ Present | SVG primary, PNG fallback |
| manifest.json | ✅ Created | PWA manifest with theme color |
| Schema.org | ✅ Excellent | LocalBusiness, Organization, Service, FAQ, Breadcrumb |
| noindex admin | ✅ Added | 8 protected pages noindexed |

### Sitemaps Created

| Sitemap | URL | Pages |
|---------|-----|-------|
| Main | /sitemap.xml | All pages (1000+) |
| Products | /sitemap-products.xml | 15 product pages |
| Locations | /sitemap-locations.xml | 15 location pages |
| Blog | /sitemap-blog.xml | 14 blog articles |
| Directory | /sitemap-directory.xml | Directory index |

### Domain Updates

- All canonical URLs → materials.tanzibaba.com ✅
- robots.txt sitemap → materials.tanzibaba.com ✅
- Schema URLs → materials.tanzibaba.com ✅
- 60+ page files updated ✅

### Tracking Infrastructure

| Tool | Status | Script Location |
|------|--------|-----------------|
| GA4 | ✅ Active | layout.tsx (G-7KYD1RMSV9) |
| Meta Pixel | ✅ Active | layout.tsx (984823598215170) |
| WhatsApp tracking | ✅ Active | layout.tsx |
| GTM | ⏳ Placeholder | Needs container ID |
| Clarity | ⏳ Not installed | Needs project ID |

---

## 🔧 NEEDS MANUAL ACTION

### 1. Google Search Console (Priority 1)

```
1. Go to https://search.google.com/search-console
2. Add property → Domain → materials.tanzibaba.com
3. Verify via DNS TXT record or HTML file
4. Submit sitemap: https://materials.tanzibaba.com/sitemap.xml
5. Request indexing for:
   - Homepage
   - /aggregates-supplier-dar-es-salaam
   - /blocks-supplier-dar-es-salaam
   - /ready-mix-concrete-zanzibar
   - /directory
   - /tools
   - /blog
```

### 2. Bing Webmaster Tools (Priority 2)

```
1. Go to https://www.bing.com/webmasters
2. Add site → materials.tanzibaba.com
3. Import from Google Search Console (if verified)
4. Submit sitemap: https://materials.tanzibaba.com/sitemap.xml
5. Enable IndexNow for faster indexing
```

### 3. Microsoft Clarity (Priority 3)

```
1. Go to https://clarity.microsoft.com
2. Create project → materials.tanzibaba.com
3. Get tracking script
4. Add to layout.tsx:
   <Script id="clarity" strategy="afterInteractive">
     {`(function(c,l,a,r,i,t,y){
       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
     })(window, document, "clarity", "script", "YOUR_PROJECT_ID");`}
   </Script>
```

### 4. Google Analytics 4 Events (Priority 4)

```
Already tracking:
- PageViews ✅
- WhatsApp clicks ✅ (via gtag conversion)

Add to layout.tsx for phone clicks:
document.addEventListener('click', function(e) {
  var target = e.target.closest('a[href^="tel:"]');
  if (target && typeof gtag !== 'undefined') {
    gtag('event', 'phone_click', { 'phone_number': target.href.replace('tel:', '') });
  }
});

Add for Get Price clicks:
document.addEventListener('click', function(e) {
  var target = e.target.closest('button');
  if (target && target.textContent.includes('Get Price') && typeof gtag !== 'undefined') {
    gtag('event', 'get_price_click');
  }
});
```

### 5. Google Tag Manager (Priority 5)

```
1. Go to https://tagmanager.google.com
2. Create container → materials.tanzibaba.com
3. Get container ID (GTM-XXXXXXX)
4. Add to layout.tsx:
   <Script id="gtm" strategy="afterInteractive">
     {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
   </Script>
   <noscript>
     <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
     height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
   </noscript>
```

### 6. Google Business Profile (Priority 6)

```
Create profiles for:
- Dar es Salaam: https://business.google.com
- Dodoma
- Zanzibar

Include:
- Business name: Tanzibaba
- Category: Building Materials Supplier
- Phone: +255 716 002 790
- Website: https://materials.tanzibaba.com
- Service areas: Dar es Salaam, Dodoma, Zanzibar
```

---

## 📊 SEO INFRASTRUCTURE SUMMARY

### Schema Types Implemented

| Type | Pages | Status |
|------|-------|--------|
| LocalBusiness | Root layout | ✅ |
| Organization | Root layout | ✅ |
| Service | Service pages | ✅ |
| FAQPage | Dynamic pages | ✅ |
| BreadcrumbList | Dynamic pages | ✅ |
| Article/BlogPosting | Blog pages | ✅ |
| WebSite + SearchAction | Root layout | ✅ |

### Page Coverage

| Page Type | Metadata | Schema | Canonical | Status |
|-----------|----------|--------|-----------|--------|
| Homepage | ✅ | ✅ | ✅ | Ready |
| Product pages (15) | ✅ | ✅ | ✅ | Ready |
| Service pages (10) | ✅ | ✅ | ✅ | Ready |
| Blog pages (14) | ✅ | ✅ | ✅ | Ready |
| Tool pages (10) | ✅ | — | ✅ | Ready |
| Directory | ✅ | — | ✅ | Ready |
| Government pages | ✅ | ✅ | ✅ | Ready |
| Swahili pages (200+) | ✅ | ✅ | ✅ | Ready |
| Admin/Dashboard | noindex | — | — | Protected |

---

## 🚀 POST-DEPLOYMENT CHECKLIST

- [ ] Verify HTTPS active on materials.tanzibaba.com
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Install Microsoft Clarity
- [ ] Create Google Business Profile
- [ ] Submit to Tanzania business directories
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Check indexing status after 1 week
- [ ] Review Search Console performance after 2 weeks

---

## 📈 EXPECTED TIMELINE

| Milestone | Timeframe |
|-----------|-----------|
| DNS propagation | 5-30 minutes |
| SSL certificate | 15-60 minutes |
| Google discovers sitemap | 1-3 days |
| First pages indexed | 3-7 days |
| Full indexation | 2-4 weeks |
| Search Console data | 3-5 days |
| Ranking improvements | 4-12 weeks |

---

*Report generated by opencode — June 19, 2026*
