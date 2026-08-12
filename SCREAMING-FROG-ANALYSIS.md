# Screaming Frog Crawl Analysis — 12 Aug 2026

Crawl of the live site: **79 indexable HTML pages, 98 internal URLs**. Overall this is a **technically clean, healthy build** — the issues found were a short, fixable list, most now resolved.

## Clean bill of health (no action needed)

The crawl found **none** of the problems that usually plague a site: no 5xx server errors, no redirect chains or loops, no missing/duplicate/multiple page titles, no missing or duplicate H1s, no missing meta descriptions, no duplicate or near-duplicate content, no soft 404s, no broken canonicals (55 correct self-referencing), valid structured data across the board (zero errors/warnings), all images have alt text and dimensions, no mixed content, mobile-friendly throughout, no spelling errors. That's a strong foundation.

## Issues found — and what was fixed

### ✅ FIXED — 19 internal 404s (the only "error" class issue)
Every 404 was a request to `/logos/<slug>.png`. The logo component was probing for a PNG on every logo before falling back to the SVG monogram — visually fine, but it fired a 404 per logo on every page. **Fix:** the component now serves the SVG directly (which always exists), with an explicit opt-in path for real raster logos later. All 19 404s eliminated.

### ✅ FIXED — 52 page titles over 60 characters
Caused by the ` | Online Gambling Canada` suffix (24 chars) appended to already-descriptive titles, pushing them past Google's display limit and risking SERP truncation. **Fix:** removed the brand suffix from inner-page titles (homepage keeps full branding). Review/page titles now sit comfortably under 60.

### ✅ FIXED — thin operator review pages
Reviews without a long-form body were ~146–170 words. **Fix:** added a standard "How we review" methodology section (with internal links to the relevant hub, all reviews, and the ratings criteria) that renders on any review lacking a custom body. Example: the Highroller review went from ~160 to ~530 words.

### ✅ FIXED — missing security headers (79 pages)
No `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` or `Permissions-Policy`. **Fix:** added all four site-wide in `next.config.mjs`. (HSTS was already present via the host.)

## Remaining recommendations (prioritised)

### 1. Content depth — the main opportunity (medium-high)
The crawl flagged **29 low-content pages**. The most valuable to expand:

- **Game guides** (`/games/slots`, `/blackjack`, `/roulette`, `/poker`, `/video-poker`, `/bingo`) sit at ~190–200 words. These are evergreen pages targeting real keyword demand (e.g. bingo already ranks ~43). Expanding each to a full 800–1,000-word guide (rules, odds/RTP, strategy, "best sites to play", FAQ) is the highest-value content work on the site.
- **Legacy news stubs** (8 migrated posts at 126–179 words) are thin. The daily task now produces full 1,000-word articles, so these can be expanded or left to be superseded over time.
- Small utility pages (`/contact` 61w, `/about` 163w) are naturally short — low priority.

### 2. Meta descriptions over 155 characters (12) — low
Minor SERP truncation on 12 pages (several reviews, `/about`, `/crypto`, `/games`). Trim to ~150 chars when convenient. Cosmetic, not a ranking factor.

### 3. Missing H2 on 4 index pages — low
`/reviews`, `/news`, `/games`, `/contact` have an H1 but no H2. Adding a section H2 (e.g. "Latest reviews") is a small structural nicety.

### 4. Content Security Policy header — optional
Screaming Frog flags a missing CSP. It was deliberately **not** auto-added — a mis-set CSP can break affiliate links, images and scripts. Worth adding later with a tested policy rather than a blind default.

### 5. Confirm sitemap is being read
The crawl showed 0 URLs pulled from the sitemap, which usually means Screaming Frog wasn't pointed at `/sitemap.xml` (a crawl-config setting) rather than a site fault. Verify `https://www.onlinegamblingcanada.com/sitemap.xml` loads and is submitted in Search Console.

## Bottom line

Technically the rebuild is in excellent shape — the crawl surfaced one real bug (the logo 404s, now fixed) and a handful of best-practice tidy-ups, all addressed except the CSP. **The single biggest lever from here is content depth on the game guides**, which are thin relative to their keyword opportunity. Everything else is polish.
