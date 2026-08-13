# Screaming Frog Analysis — onlinegamblingcanada.com
### Crawl dated 12 Aug 2026 20:10 · reviewed 13 Aug 2026 · 98 internal URLs, 55 HTML pages

---

## TL;DR — read this first

**This crawl is stale relative to your current source code.** The previous session
already fixed several of the issues below *in the code* (logo references, long titles,
security headers, thin review pages), but the crawler hit a live build that predates
those fixes. So a big share of what this report "flags" is **already solved and just
needs a redeploy + re-crawl**, not new work.

**The single most valuable NEW finding — missed by the last pass — is that the site
still says "2025" everywhere.** It is August 2026. 26 page titles and 2 meta
descriptions carry the wrong year, and the cause is live in the source. On a gambling
site, where searchers actively look for "2026", this quietly suppresses click-through
and freshness. **This is the #1 fix.**

Priority order: **(1) fix the stale year → 2026, (2) redeploy so the already-coded fixes
go live, (3) expand the thin game guides, (4) minor tidy-ups, (5) re-crawl to confirm.**

---

## 1. What's genuinely outstanding (needs a code change)

### 🔴 P0 — Stale "2025" should be "2026" (still in source)
Currently 26 titles + 2 descriptions on the live site say 2025, and the source confirms
it's not a crawl artefact. Affected source locations:

| File | Line | Current |
|------|------|---------|
| `app/page.tsx` | 12 | `… Sportsbooks & Online Casinos Canada 2025` (title) |
| `app/page.tsx` | 40 | `<h1>Top Legal Online Betting Sites for Canada 2025</h1>` |
| `app/sports-betting/page.tsx` | 8, 36 | `Best Real Money Online Sportsbooks in Canada 2025` |
| `app/casino/page.tsx` | 7 | `Best Real Money Online Casinos in Canada 2025` |
| `app/reviews/page.tsx` | 7 | `Independent … Reviews (2025)` |
| `app/reviews/[slug]/page.tsx` | 20 | `${op.name} Review 2025 — …` (every review) |
| `lib/content.ts` | 43, 60 | game-guide titles: `… in Canada 2025`, `… for Canadians 2025` |

**Fix:** change these to 2026. Better: introduce a single `const YEAR = 2026` (or derive
it) in `lib/site.ts` and interpolate it, so this never goes stale again.
**Do NOT touch** the `2025` inside `wp-content/uploads/2025/01/…` image URLs in
`operators.ts`, or the dated news filenames/JSON — those are legitimate.

### 🟠 P1 — Thin game guides (the real content lever)
The crawl flags **29 low-content pages**. Most are already handled in code (see §2), but
the **6 game guides remain genuinely thin and unaddressed**:

`/games/bingo` (192w), `/games/blackjack` (197w), `/games/poker` (193w),
`/games/roulette` (193w), `/games/video-poker` (199w), plus `/games` hub (173w).

These are evergreen pages targeting real keyword demand (bingo already ranks ~#43 per
the prior GSC notes). Expanding each to a proper **800–1,000-word guide** — rules,
odds/RTP, basic strategy, "best sites to play in Canada", FAQ with FAQ schema — is the
highest-value content work left on the site. The 8 legacy news stubs (126–179w) are
lower priority; the daily task supersedes them over time.

### 🟡 P2 — Remove the meta keywords tag (still in source)
`app/layout.tsx` line 18 sets `keywords: [...]`, which emits an identical
`<meta name="keywords">` on all 55 pages (hence "duplicate meta keywords ×55"). Google
has ignored this tag for years; an identical tag sitewide is a faint low-quality signal
and pure noise. **Fix:** delete the `keywords` field from the metadata object. 30-second job.

### 🟡 P3 — 12 meta descriptions over 155 characters
Minor SERP truncation on ~12 pages (several reviews, `/about`, `/crypto`, `/games`).
Trim to ≤150 chars when convenient. Not a ranking factor — purely how the snippet reads.

### 🟡 P3 — 4 index pages missing an H2
`/reviews`, `/news`, `/games`, `/contact` have an H1 but no H2. Add one section heading
each (e.g. "Latest reviews"). Also flagged: H2s that are duplicated (21) / non-sequential
(28) / multiple (42) — these are mild structural tidy-ups, not errors. One H1 exceeds 70
chars and one page reads "difficult"; both trivial.

---

## 2. Already fixed in the source — these just need a DEPLOY

The crawl still shows these because it ran against the old live build. Redeploy, then
re-crawl and they disappear. **No further code work needed:**

- **19 internal 404s** — every one was `/logos/<slug>.png`. `components/LogoImage.tsx`
  now resolves to `/logos/<slug>.svg` (all 20 SVGs exist in `public/logos/`), and
  `operators.ts` logo fields point at `.svg`. ✅ fixed in code, ❌ not yet live.
- **52 titles over 60 chars** — the ` | Online Gambling Canada` suffix was removed from
  inner-page titles (`app/layout.tsx` template is now `%s`). ✅ in code. *(Note: fixing
  the year in §1 also shortens these titles further.)*
- **Missing security headers (79 pages ×4)** — `X-Frame-Options`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` are now set in
  `next.config.mjs` `headers()`. Because the build is a server/SSG deploy (no
  `output:'export'`), these will apply once deployed. ✅ in code. *(CSP was deliberately
  left out — add a tested policy later; a blind default can break affiliate links/images.)*
- **Thin operator reviews** — a "How we review" methodology block now renders on any
  review lacking a long body (e.g. Highroller ~160 → ~530 words). ✅ in code.

> ⚠️ **Action:** confirm the live site has actually been redeployed from the current
> `main`. The last git commits (`dbcf625 "das"`, `5ec967d "ad"`…) suggest recent local
> work — make sure it's pushed **and** that Vercel has built it. Until then the crawl and
> the real site disagree.

---

## 3. Clean bill of health (confirmed good — no action)

The crawl confirms a solid technical base: **all 98 URLs on HTTPS**, no 5xx, no redirect
chains/loops, **no missing/duplicate H1s or titles**, no missing meta descriptions, no
duplicate/near-duplicate content, no soft 404s, **55 correct self-referencing canonicals**,
all pages `index,follow`, valid structured data (0 errors/warnings), all images have alt
text + dimensions, no mixed content, mobile-friendly throughout. Only 3 internal
`nofollow` outlinks (worth a quick look, but harmless).

*(Sitemap showed 0 URLs pulled — that's almost certainly a Screaming Frog crawl-config
setting, not a site fault. Verify `https://www.onlinegamblingcanada.com/sitemap.xml`
loads and is submitted in Search Console.)*

---

## 4. Recommended action plan

1. **Fix the stale year → 2026** (P0) — ~7 source edits, ideally via one `YEAR` constant.
2. **Push + redeploy** so §2's coded fixes (logos, titles, headers, review depth) go live.
3. **Expand the 6 game guides** to 800–1,000 words each (P1 — biggest remaining lever).
4. **Delete the meta keywords tag**; trim the 12 long meta descriptions; add H2s to the
   4 bare index pages (P2/P3 — quick polish).
5. **Re-crawl** in Screaming Frog to confirm the error/warning counts drop to near-zero.

I can do steps 1, 4 immediately (mechanical, low-risk) and 3 as a focused content pass —
just say the word.
