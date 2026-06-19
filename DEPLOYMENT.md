# Deployment Instructions — Tanzibaba Materials

**Target:** materials.tanzibaba.com  
**Stack:** Next.js 14 + Vercel + Cloudflare DNS

---

## ✅ Pre-Deployment Audit (COMPLETE)

| Check | Status |
|-------|--------|
| Build | ✅ Passes (`npm run build`) |
| Git initialized | ✅ Committed |
| Sitemap | ✅ `/sitemap.xml` configured |
| Robots.txt | ✅ Disallows `/admin/`, `/dashboard/`, `/supplier/`, `/api/` |
| SEO Metadata | ✅ Title, description, keywords, OG, Twitter Card |
| Open Graph Image | ✅ `/images/og-brand-image.png` exists |
| Schema.org | ✅ Organization markup in layout |
| Product images | ✅ 13 WebP files in `/images/new/` |
| Directory data | ✅ 100+ stakeholder records |
| Auth system | ✅ Client-side (no env vars needed for static pages) |

---

## Step 1: Create GitHub Repository

```bash
# Create repo on GitHub (via web UI or CLI):
# Repository name: tanzibaba-materials
# Visibility: Public or Private
# Do NOT initialize with README

# Then push:
cd /Users/apple/Zanzibaba-Projects/active-projects/tanzibaba/frontend
git remote add origin https://github.com/YOUR_USERNAME/tanzibaba-materials.git
git push -u origin main
```

---

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import `tanzibaba-materials` from GitHub
4. Framework: **Next.js** (auto-detected)
5. Root Directory: `./` (leave default)
6. Build Command: `npm run build` (leave default)
7. Install Command: `npm install` (leave default)

### Environment Variables

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_API_URL` | `https://api.tanzibaba.com/api` | Backend API (set when backend is deployed) |

> **Note:** The site works without this variable — it falls back to `http://localhost:4000/api` which won't affect static page generation. Set it when backend is ready.

8. Click **Deploy**
9. Wait for deployment to complete (~2-3 minutes)

---

## Step 3: Configure Custom Domain

1. In Vercel project → **Settings** → **Domains**
2. Add: `materials.tanzibaba.com`
3. Vercel will show DNS records to configure

---

## Step 4: Configure Cloudflare DNS

1. Log in to [Cloudflare](https://dash.cloudflare.com)
2. Select `tanzibaba.com` zone
3. Go to **DNS** → **Records**
4. Add these records:

| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| CNAME | materials | `cname.vercel-dns.com` | DNS only (gray cloud) | Auto |

> **Important:** Set proxy to **DNS only** (gray cloud) for CNAME records pointing to Vercel. Vercel handles SSL automatically.

---

## Step 5: SSL & HTTPS Verification

Vercel automatically provisions SSL certificates via Let's Encrypt. After DNS propagation (5-30 minutes):

```bash
# Verify SSL
curl -I https://materials.tanzibaba.com | head -5
# Should show: HTTP/2 200

# Check certificate
echo | openssl s_client -connect materials.tanzibaba.com:443 2>/dev/null | grep -E "subject|issuer"
# Should show: Let's Encrypt
```

---

## Step 6: Post-Deployment Verification

```bash
# Test homepage
curl -s -o /dev/null -w "%{http_code}" https://materials.tanzibaba.com
# Expected: 200

# Test sitemap
curl -s -o /dev/null -w "%{http_code}" https://materials.tanzibaba.com/sitemap.xml
# Expected: 200

# Test robots.txt
curl -s https://materials.tanzibaba.com/robots.txt

# Test product pages
curl -s -o /dev/null -w "%{http_code}" https://materials.tanzibaba.com/ready-mix-concrete-zanzibar
# Expected: 200

# Test directory
curl -s -o /dev/null -w "%{http_code}" https://materials.tanzibaba.com/directory
# Expected: 200
```

---

## Step 7: SEO Configuration

### Already Configured
- ✅ Sitemap at `/sitemap.xml`
- ✅ Robots.txt with proper disallows
- ✅ Open Graph tags (title, description, image)
- ✅ Twitter Card tags
- ✅ Schema.org Organization markup
- ✅ Canonical URLs
- ✅ Mobile viewport meta

### Post-Deployment Tasks
1. **Submit sitemap to Google Search Console:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `materials.tanzibaba.com`
   - Submit sitemap: `https://materials.tanzibaba.com/sitemap.xml`

2. **Submit to Bing Webmaster Tools:**
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
   - Submit sitemap

3. **Update Google Verification Code** in `src/app/layout.tsx`:
   - Replace `YOUR_GOOGLE_VERIFICATION_CODE` with actual code

---

## Deployment Summary

| Item | Value |
|------|-------|
| GitHub Repository | `https://github.com/YOUR_USERNAME/tanzibaba-materials` |
| Vercel Project | `https://vercel.com/YOUR_USERNAME/tanzibaba-materials` |
| Production URL | `https://materials.tanzibaba.com` |
| DNS Record | `CNAME materials → cname.vercel-dns.com` |
| SSL | Auto-provisioned by Vercel (Let's Encrypt) |
| Build | Static + ISR (no server needed) |

---

## Troubleshooting

### White screen after deploy
- Vercel may need to clear cache: Settings → General → Clear Cache
- Or redeploy: Deployments → click ⋯ → Redeploy

### 404 on page refresh
- Already handled: `next.config.js` should have proper output config
- If issues persist, check Vercel function logs

### Images not loading
- All images are in `/public/images/` — served statically
- No env vars needed for images
- Check paths match exactly (case-sensitive)

### Mixed content warnings
- All internal links should use relative paths or `https://`
- No hardcoded `http://` URLs in source code
