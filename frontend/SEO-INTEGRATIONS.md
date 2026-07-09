# ============================================================
# SEO & ANALYTICS INTEGRATIONS — Complete Setup Guide
# ============================================================
# materials.tanzibaba.com
# ============================================================
# Last updated: June 2026
# ============================================================


## TABLE OF CONTENTS

1. Google Search Console
2. Bing Webmaster Tools
3. Microsoft Clarity
4. Google Tag Manager
5. Google Analytics 4
6. Event Tracking Architecture
7. Google Business Profile
8. Verification Checklist
9. Login Steps & Accounts Required


---

## 1. GOOGLE SEARCH CONSOLE

### Account
- URL: https://search.google.com/search-console
- Email: [YOUR_GOOGLE_ACCOUNT]

### Property to Add
- Property type: **Domain**
- Domain: `materials.tanzibaba.com`

### Verification Methods (pick one)

#### Method A: DNS TXT Record (Recommended)
1. In Search Console → Add property → Domain → Enter `materials.tanzibaba.com`
2. Google gives a TXT record: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXX`
3. Go to Cloudflare → tanzibaba.com → DNS → Add record:
   - Type: TXT
   - Name: `materials` (or `@` for domain-level)
   - Content: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXX`
   - Proxy: DNS only (gray cloud)
4. Wait 2–5 minutes, click Verify in Search Console

#### Method B: HTML File
1. In Search Console → Add property → URL prefix → `https://materials.tanzibaba.com`
2. Download the `googleXXXXXXXXXXXXXXXX.html` file
3. Place it in `frontend/public/` directory
4. Commit + push to GitHub
5. Verify at: `https://materials.tanzibaba.com/googleXXXXXXXXXXXXXXXX.html`
6. Click Verify in Search Console

#### Method C: HTML Meta Tag
1. In Search Console → Add property → URL prefix
2. Copy the meta tag content
3. Edit `src/app/layout.tsx` line 48:
   ```typescript
   verification: {
     google: 'YOUR_ACTUAL_43_CHARACTER_CODE',
   },
   ```
4. Deploy, then click Verify

### Sitemaps to Submit
After verification, go to Sitemaps and submit each:
```
https://materials.tanzibaba.com/sitemap.xml
https://materials.tanzibaba.com/sitemap-products.xml
https://materials.tanzibaba.com/sitemap-blog.xml
https://materials.tanzibaba.com/sitemap-directory.xml
https://materials.tanzibaba.com/sitemap-locations.xml
```

### Post-Verification
- Check Coverage report after 48 hours
- Monitor Core Web Vitals
- Request indexing for homepage: `https://materials.tanzibaba.com`
- Set up URL inspection for key pages


---

## 2. BING WEBMASTER TOOLS

### Account
- URL: https://www.bing.com/webmasters
- Email: [YOUR_MICROSOFT_ACCOUNT]

### Site to Add
- URL: `https://materials.tanzibaba.com`

### Verification Methods

#### Method A: XML File
1. In Bing Webmaster Tools → Add site → Enter URL
2. Download `BingSiteAuth.xml`
3. Place in `frontend/public/BingSiteAuth.xml`
4. Verify at: `https://materials.tanzibaba.com/BingSiteAuth.xml`
5. Click Verify

#### Method B: HTML Meta Tag
1. In Bing Webmaster Tools → Verification → HTML Meta Tag
2. Copy `<meta name="msvalidate.01" content="YOUR_TOKEN" />`
3. Edit `public/bing-site-verification.html` line 14
4. Also add the meta tag to `src/app/layout.tsx` metadata
5. Deploy and verify

#### Method C: DNS TXT Record
1. Bing gives a TXT record
2. Add to Cloudflare DNS as TXT record
3. Wait 5 minutes, verify

### Sitemaps to Submit
```
https://materials.tanzibaba.com/sitemap.xml
https://materials.tanzibaba.com/sitemap-products.xml
https://materials.tanzibaba.com/sitemap-blog.xml
https://materials.tanzibaba.com/sitemap-directory.xml
https://materials.tanzibaba.com/sitemap-locations.xml
```

### IndexNow Setup
Already configured. File is at: `public/indexnow.txt`
Key: `440590aea249dc3c994bdc8ba6a0e04e973916a92806b179353897529b6dbe98`

To activate IndexNow in Bing Webmaster Tools:
1. Go to Configure My Site → IndexNow
2. Enter the key: `440590aea249dc3c994bdc8ba6a0e04e973916a92806b179353897529b6dbe98`
3. Verify key file is accessible at `https://materials.tanzibaba.com/indexnow.txt`
4. Enable automatic URL submission


---

## 3. MICROSOFT CLARITY

### Account
- URL: https://clarity.microsoft.com
- Email: [YOUR_MICROSOFT_ACCOUNT]

### Setup Steps
1. Click "New project"
2. Enter website URL: `materials.tanzibaba.com`
3. Project name: `Tanzibaba Materials`
4. Copy the **Project ID** (format: `clarity_xxxxxxxx`)
5. Set environment variable:
   ```
   NEXT_PUBLIC_CLARITY_ID=clarity_xxxxxxxx
   ```
6. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CLARITY_ID=clarity_xxxxxxxx
   ```
7. Redeploy

### What's Already Built
- `src/lib/analytics/clarity.tsx` — ClarityProvider component
- Auto-injects Clarity script when ID is set
- Exports `clarityEvent()`, `clarityIdentify()`, `clarityConsent()`
- Integrated in `src/lib/analytics/providers.tsx`

### Features Enabled
- Heatmaps (click maps, scroll maps)
- Session recordings
- Rage click detection
- Dead click detection
- Network request errors
- Custom events

### After Setup
- Wait 1 hour for data to appear
- Check "Recordings" tab for session replays
- Check "Heatmaps" for click patterns
- Set up "Goals" for quote submissions


---

## 4. GOOGLE TAG MANAGER

### Account
- URL: https://tagmanager.google.com
- Email: [YOUR_GOOGLE_ACCOUNT]

### Setup Steps
1. Click "Create Account"
   - Account Name: `Tanzibaba`
   - Country: `Tanzania`
2. Create Container
   - Container Name: `materials.tanzibaba.com`
   - Target Platform: `Web`
3. Copy the **Container ID** (format: `GTM-XXXXXXX`)
4. Set environment variable:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
6. Redeploy

### What's Already Built
- `src/lib/analytics/gtm.tsx` — GTMProvider component
- Auto-loads GTM script when ID is set
- Compatible with existing gtag setup (both can coexist)
- `pushToGTM()` helper for manual dataLayer pushes

### Recommended GTM Tags to Create
After setup, create these tags in GTM:

1. **GA4 Configuration Tag**
   - Trigger: All Pages
   - Measurement ID: G-7KYD1RMSV9

2. **GA4 Event Tag — phone_click**
   - Trigger: Custom Event = `phone_click`

3. **GA4 Event Tag — whatsapp_click**
   - Trigger: Custom Event = `whatsapp_click`

4. **GA4 Event Tag — quote_submit**
   - Trigger: Custom Event = `quote_submit`

5. **Clarity Initialization Tag**
   - Trigger: All Pages
   - Custom HTML: Clarity init script

### DataLayer Events Already Fired
All events from `src/lib/analytics/events.ts` push to `window.dataLayer`:
- `phone_click`
- `whatsapp_click`
- `get_price_click`
- `quote_submit`
- `calculator_use`
- `directory_visit`
- `blog_read`
- `scroll_depth`


---

## 5. GOOGLE ANALYTICS 4

### Account
- URL: https://analytics.google.com
- Email: [YOUR_GOOGLE_ACCOUNT]

### Current Status
- GA4 Measurement ID: `G-7KYD1RMSV9` ✅ Already configured
- Loaded via inline script in `layout.tsx`
- Basic pageview tracking: ✅ Active
- Enhanced measurement: Via `src/lib/analytics/ga4.tsx`

### Setup Steps (if new account needed)
1. Go to Analytics → Admin → Create Property
   - Property Name: `Tanzibaba Materials`
   - Timezone: `East Africa Time`
   - Currency: `Tanzanian Shilling`
2. Create Data Stream → Web
   - URL: `materials.tanzibaba.com`
   - Stream name: `Tanzibaba Materials Web`
3. Copy Measurement ID (G-XXXXXXXXXX)
4. Update `src/app/layout.tsx` line 7:
   ```typescript
   const gaId = 'G-XXXXXXXXXX';
   ```
5. Update `.env.local`:
   ```
   NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Enhanced Events (already firing via events.ts)
| Event Name | Category | Trigger |
|---|---|---|
| `phone_click` | contact | User clicks phone link |
| `whatsapp_click` | contact | User clicks WhatsApp link |
| `get_price_click` | conversion | User clicks Get Price CTA |
| `quote_submit` | conversion | User submits quote via WhatsApp |
| `calculator_use` | tools | User uses any calculator |
| `directory_visit` | engagement | User visits directory page |
| `blog_read` | content | User visits blog post |
| `scroll_depth` | engagement | User scrolls 25/50/75/100% |

### Custom Dimensions to Set Up (in GA4 Admin)
1. `event_category` — Custom dimension
2. `event_label` — Custom dimension
3. `page_path` — Already tracked by GA4


---

## 6. EVENT TRACKING ARCHITECTURE

### File: `src/lib/analytics/events.ts`

All events fire to ALL active trackers simultaneously:
- GA4 (via `gtag()`)
- GTM (via `dataLayer.push()`)
- Meta Pixel (via `fbq('trackCustom')`)

### Event Reference

```typescript
import { trackPhoneClick, trackWhatsAppClick, trackGetPriceClick,
         trackQuoteSubmit, trackCalculatorUse, trackDirectoryVisit,
         trackBlogRead, trackEvent } from '@/lib/analytics/events';

// Phone click
trackPhoneClick('+255716002790');

// WhatsApp click
trackWhatsAppClick('hero-cta');

// Get Price button
trackGetPriceClick('/get-quote');

// Quote submitted via WhatsApp
trackQuoteSubmit('ready-mix-concrete', '50m3');

// Calculator used
trackCalculatorUse('concrete-calculator');

// Directory page visit
trackDirectoryVisit();

// Blog post viewed
trackBlogRead('Concrete Price Guide Tanzania');

// Generic custom event
trackEvent('custom_event', { key: 'value' });
```

### Manual Integration Points

Add to existing components where these actions happen:

**Navbar phone link:**
```tsx
<a href="tel:+255716002790" onClick={() => trackPhoneClick()}>
```

**Hero WhatsApp CTA:**
```tsx
<a href="https://wa.me/255716002790" onClick={() => trackWhatsAppClick('hero')}>
```

**Calculator pages:**
```tsx
useEffect(() => { trackCalculatorUse('concrete-calculator'); }, []);
```

**Directory page:**
```tsx
useEffect(() => { trackDirectoryVisit(); }, []);
```

**Blog pages:**
```tsx
useEffect(() => { trackBlogRead(post.title); }, []);
```


---

## 7. GOOGLE BUSINESS PROFILE

### Accounts Required
- Google Account (use same as Search Console)
- Business Profile Manager: https://business.google.com

### Profile 1: Dar es Salaam

**Business Name:** `Tanzibaba — Premium Building Materials`

**Category (Primary):** `Building Materials Supplier`

**Categories (Secondary):**
- `Concrete Supplier`
- `Construction Material Supplier`
- `Sand Supplier`
- `Gravel Supplier`

**Description (750 chars):**
> Tanzibaba is Tanzania's premium building materials supplier based in Dar es Salaam. We specialize in ready-mix concrete (C10 to C50) manufactured using our proprietary washed sand technology for superior strength and durability. Our product range includes premium aggregates, crushed stone, gravel, washed sand, concrete blocks, paving blocks, culvert pipes, and road construction materials. We serve commercial contractors, residential developers, infrastructure projects, and government agencies across Dar es Salaam and surrounding areas. With our state-of-the-art batching plant and fleet of transit mixers, we deliver concrete on schedule to any construction site. Our washed sand technology ensures consistent quality, reduced water absorption, and enhanced structural performance. Free technical consultation available for all projects. WhatsApp: +255 716 002 790

**Services:**
- Ready-Mix Concrete Supply (C10–C50)
- Premium Aggregates & Crushed Stone
- Washed Sand Supply
- Concrete Blocks & Paving Blocks
- Culvert Pipes
- Road Construction Materials
- Concrete Pump Rental
- Technical Consultation
- Bulk Material Delivery

**Keywords:**
- ready mix concrete dar es salaam
- building materials dar es salaam
- concrete supplier tanzania
- washed sand dar es Salaam
- aggregates supplier dar es salaam
- construction materials tanzania
- premium concrete dar es salaam
- concrete blocks dar es salaam
- road base supplier tanzania

**Operating Hours:**
- Monday–Friday: 7:00 AM – 6:00 PM
- Saturday: 8:00 AM – 3:00 PM
- Sunday: Closed

**Photos Required:**
- [ ] Logo (use existing: `/images/logo/tanzibaba.svg`)
- [ ] Cover photo (1200x630, use `/images/new/mobile-hero.webp`)
- [ ] Storefront/office exterior
- [ ] Batching plant / production facility
- [ ] Transit mixer trucks fleet
- [ ] Concrete pouring in progress
- [ ] Aggregates / washed sand stockpile
- [ ] Team photo (if available)
- [ ] Product photos: blocks, paving, culvert pipes

**Verification:**
- Phone verification (call to +255 716 002 790)
- Or postcard verification (takes 5–14 days)
- Address: [YOUR_EXACT_ADDRESS], Dar es Salaam

---

### Profile 2: Dodoma

**Business Name:** `Tanzibaba Dodoma — Premium Building Materials`

**Category (Primary):** `Building Materials Supplier`

**Description (750 chars):**
> Tanzibaba Dodoma is the trusted premium building materials supplier in Tanzania's capital city. We supply ready-mix concrete, aggregates, crushed stone, washed sand, concrete blocks, paving blocks, and road construction materials for residential, commercial, and government projects. Our washed sand technology delivers concrete with superior strength and durability, making us the preferred supplier for contractors building Dodoma's growing infrastructure. We serve the entire Dodoma region including Mkwa, Ihumwa, Nala, Chamwino, and surrounding areas. Same-day delivery available for orders placed before 10 AM. WhatsApp: +255 716 002 790

**Keywords:**
- building materials dodoma
- concrete supplier dodoma
- ready mix concrete dodoma
- aggregates dodoma
- construction materials dodoma tanzania
- blocks supplier dodoma

---

### Profile 3: Zanzibar

**Business Name:** `Tanzibaba Zanzibar — Premium Building Materials`

**Category (Primary):** `Building Materials Supplier`

**Description (750 chars):**
> Tanzibaba Zanzibar is the leading premium building materials supplier for construction projects across the Zanzibar Archipelago. We supply ready-mix concrete, premium aggregates, washed sand, concrete blocks, paving blocks, and construction materials for hotels, resorts, residential developments, and infrastructure projects. Our specialized washed sand technology is ideal for Zanzibar's coastal construction, providing enhanced durability against salt air and humidity. We serve Stone Town, Unguja, Pemba, and all surrounding islands. Ferry and barge delivery available. WhatsApp: +255 716 002 790

**Keywords:**
- building materials zanzibar
- concrete supplier zanzibar
- construction materials stone town
- aggregates supplier zanzibar
- hotel construction materials zanzibar
- ready mix concrete zanzibar

### Common Requirements for All Profiles

**Verification Documents:**
- [ ] Business registration certificate (BRELA)
- [ ] Tax Identification Number (TIN)
- [ ] Utility bill or bank statement (proof of address)
- [ ] Phone bill showing business name

**Initial Posts (first week):**
- Welcome post with products overview
- Washed sand technology explanation
- Delivery coverage map post
- Customer testimonial (if available)
- Special offer / first-order discount


---

## 8. VERIFICATION CHECKLIST

### Ready Before Login
- [x] `.env.local` created with all ID slots
- [x] `src/lib/analytics/clarity.tsx` — ClarityProvider
- [x] `src/lib/analytics/gtm.tsx` — GTMProvider
- [x] `src/lib/analytics/ga4.tsx` — GA4Provider
- [x] `src/lib/analytics/events.ts` — All 7+ event functions
- [x] `src/lib/analytics/providers.tsx` — Unified provider
- [x] `src/app/layout.tsx` — Providers integrated
- [x] `src/app/robots.ts` — All 5 sitemaps listed
- [x] `public/indexnow.txt` — IndexNow key file
- [x] `public/bing-site-verification.html` — Bing verification placeholder
- [x] `public/google-verification-readme.txt` — GSC instructions
- [x] `SEO-INTEGRATIONS.md` — This document

### After Login (Manual Steps)
- [ ] GSC: Add property, verify DNS TXT, submit sitemaps
- [ ] Bing: Add site, verify, submit sitemaps, enable IndexNow
- [ ] Clarity: Create project, get Project ID, set env var
- [ ] GTM: Create container, get Container ID, set env var
- [ ] GA4: Verify existing setup, configure custom dimensions
- [ ] GBP: Create 3 profiles, add photos, verify


---

## 9. LOGIN STEPS & ACCOUNTS REQUIRED

### Accounts You Need

| Service | URL | Email Needed |
|---|---|---|
| Google Search Console | search.google.com/search-console | Google account |
| Google Analytics | analytics.google.com | Same Google account |
| Google Tag Manager | tagmanager.google.com | Same Google account |
| Google Business Profile | business.google.com | Same Google account |
| Bing Webmaster Tools | bing.com/webmasters | Microsoft account |
| Microsoft Clarity | clarity.microsoft.com | Microsoft account |
| Cloudflare | dash.cloudflare.com | Cloudflare account |
| GitHub | github.com/emkuwa/tanzibaba-materials | GitHub account |

### Step-by-Step Login Order

**Phase 1 — Google (10 minutes)**
1. Go to https://search.google.com/search-console
2. Add property: `materials.tanzibaba.com`
3. Verify via DNS TXT record (Cloudflare)
4. Submit all 5 sitemaps
5. Go to https://tagmanager.google.com
6. Create account → Container → Copy GTM-XXXXXXX
7. Go to https://analytics.google.com
8. Confirm GA4 property exists with G-7KYD1RMSV9

**Phase 2 — Microsoft (5 minutes)**
1. Go to https://www.bing.com/webmasters
2. Add site: `materials.tanzibaba.com`
3. Verify via HTML meta tag or DNS
4. Submit all 5 sitemaps
5. Enable IndexNow with key: `440590aea249dc3c994bdc8ba6a0e04e973916a92806b179353897529b6dbe98`
6. Go to https://clarity.microsoft.com
7. Create project for `materials.tanzibaba.com`
8. Copy Project ID

**Phase 3 — Deploy (2 minutes)**
1. Edit `.env.local` with GTM_ID and CLARITY_ID
2. Push to GitHub: `git add . && git commit -m "Add analytics IDs" && git push`
3. Vercel auto-deploys

**Phase 4 — Google Business Profile (15 minutes)**
1. Go to https://business.google.com
2. Create profile for Dar es Salaam (primary)
3. Add all photos, description, services
4. Repeat for Dodoma and Zanzibar
5. Start verification process (phone or postcard)

### Estimated Total Time After Login: **30–35 minutes**

- Phase 1 (Google): 10 minutes
- Phase 2 (Microsoft): 5 minutes
- Phase 3 (Deploy): 2 minutes
- Phase 4 (GBP): 15 minutes


---

## ENVIRONMENT VARIABLES REFERENCE

Add to `.env.local` (or Vercel Settings → Environment Variables):

```bash
# Already set (hardcoded in layout.tsx)
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-7KYD1RMSV9

# Set after account creation
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_ID=clarity_xxxxxxxx
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_43_char_code
BING_VERIFICATION_TOKEN=your_bing_token
```

### Vercel Deployment
After setting env vars locally:
1. Go to https://vercel.com/emkuwa/tanzibaba-materials/settings/environment-variables
2. Add each variable for Production environment
3. Trigger redeploy


---

## TROUBLESHOOTING

### Clarity not loading
- Check `NEXT_PUBLIC_CLARITY_ID` is set in `.env.local`
- Check browser console for Clarity script errors
- Verify project ID format: `clarity_xxxxxxxx`

### GTM not firing
- Check `NEXT_PUBLIC_GTM_ID` is set
- Use GTM Preview mode to debug
- Verify dataLayer events in browser console

### GA4 not tracking
- GA4 is hardcoded in layout.tsx — check script loads
- Use GA4 DebugView for real-time testing
- Verify `gtag` function exists: `typeof window.gtag`

### Sitemaps not indexing
- Check robots.txt includes all sitemap URLs
- Verify sitemaps return 200: `curl -I https://materials.tanzibaba.com/sitemap.xml`
- Google: wait 48 hours after submission
- Bing: check "Sitemaps" in webmaster tools
