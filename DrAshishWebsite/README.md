# drashishlaparoscopy.com

Marketing website for **Dr. Ashish Agarwal** — Advanced Laparoscopic Surgeon & Proctologist, Gorakhpur. A fast, bilingual (English + Hindi), single-page site whose one goal is **inbound phone / WhatsApp calls**.

Built with **Next.js (App Router)** and exported as a **fully static site** (`output: 'export'`), deployed to **Hostinger** via **GitHub Actions**.

---

## Tech stack

- **Next.js 14** (App Router) → static HTML/CSS/JS in `out/` (no server needed)
- **TypeScript**, self-hosted Google Fonts via `next/font` (Spectral + Mukta/Devanagari)
- Images pre-compressed to **WebP** (with JPG fallback)
- SEO: per-page metadata, `Physician` JSON-LD, `sitemap.xml`, `robots.txt`, Open Graph + Twitter card

## Local development

```bash
npm install
npm run dev        # http://localhost:3000

# Production static export:
npm run build      # outputs the site to ./out
npm run serve      # preview the built ./out locally
```

## Project structure

```
app/
  layout.tsx          SEO metadata, fonts, Physician JSON-LD
  page.tsx            The single page (all 16 sections)
  globals.css         Reset, keyframes, reusable + responsive classes
  sitemap.ts          → /sitemap.xml at build
  robots.ts           → /robots.txt at build
  components/
    Header.tsx        Top bar + sticky nav + mobile menu (client)
    Faq.tsx           Accordion (client)
    Photo.tsx         <picture> WebP/JPG helper
    icons.tsx         Inline SVG icons + logo badge
lib/
  site.ts             ← ALL business data, links & content live here
public/
  assets/             Images (webp + jpg) + logo.svg
  og-image.jpg        1200×630 social share card
  favicon.ico, icon-*.png, apple-touch-icon.png
  .htaccess           Apache: 404 page, asset caching, gzip
.github/workflows/
  deploy.yml          GitHub Actions → Hostinger (FTP)
```

## Editing content

Almost everything (phone numbers, address, treatments, FAQs, reviews, Instagram, timings) is in **`lib/site.ts`** — edit there and it updates across the page. Two section toggles also live there:

- `SHOW_AYUSHMAN_BAND` (currently `true`)
- `SHOW_REVIEWS` (currently `true`)

## Deployment — GitHub Actions → Hostinger

On every push to `main`, `.github/workflows/deploy.yml` builds the site and uploads `out/` to Hostinger over FTP.

**One-time setup:**

1. Create the GitHub repo and push this project (default branch `main`).
2. In **GitHub → Settings → Secrets and variables → Actions**, add:
   | Secret | Where to find it |
   |---|---|
   | `FTP_SERVER` | Hostinger hPanel → Files → **FTP Accounts** (host, e.g. `ftp.drashishlaparoscopy.com` or the server IP) |
   | `FTP_USERNAME` | FTP account username |
   | `FTP_PASSWORD` | FTP account password |
   | `FTP_REMOTE_DIR` *(optional)* | Web root. Defaults to `./public_html/`. For an **addon/secondary domain** use `./domains/drashishlaparoscopy.com/public_html/` |
3. Point the domain **drashishlaparoscopy.com** at this Hostinger site (hPanel → Domains).
4. Push to `main` (or run the workflow manually from the Actions tab) to deploy.

> The workflow uses the standard Hostinger FTP pattern (`SamKirkland/FTP-Deploy-Action`). If your existing **Hello World** repo deploys differently (e.g. SSH/rsync or different secret names), copy that repo's `.github/workflows/*.yml` over this one, or share it and I'll align this exactly.

## Before / soon after launch — please confirm

- **OPD timings** — currently `Mon–Sat 10 AM–8 PM (call to confirm)`. Update in `lib/site.ts` if different.
- **Patient reviews** — the 3 testimonials in `lib/site.ts` are realistic but **fictional samples**. Replace with real, consented reviews (or set `SHOW_REVIEWS = false`).
- **Map / geo** — the JSON-LD `GEO` coordinates in `app/layout.tsx` are approximate for Daudpur, Gorakhpur. Replace with the exact clinic lat/long from Google Maps for best local SEO.
- **Hero photo** — uses the supplied portrait (`public/assets/dr-ashish-portrait.jpg`); swap if a cleaner front-facing headshot is available.

## Business details (as used on the site)

- **Dr. Ashish Agarwal** — MBBS (KGMU Lucknow), MS General Surgery (BRD Gorakhpur), FMAS (Delhi) · UP MCI Reg. 64333
- Call **+91 98075 60443** / **+91 79850 32860** · WhatsApp **+91 98075 60443**
- Daudpur, Near Bela Public School, Gorakhpur, Uttar Pradesh
- Instagram [@dr_ashish_agarwal_](https://www.instagram.com/dr_ashish_agarwal_)
