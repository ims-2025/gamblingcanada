# OnlineGamblingCanada.com — Content & SEO Strategy

A practical roadmap to turn the rebuilt site into a category-leading, high-authority resource for Canadian online gambling. Structured in four parts: (1) technical SEO already shipped, (2) content improvements to existing pages, (3) a new-content roadmap, and (4) an off-page / authority plan.

---

## 1. Technical SEO — shipped in this build

These are already implemented in the Next.js rebuild:

- **Static generation** for every page (near-instant TTFB, ideal Core Web Vitals baseline).
- **Per-page metadata** — unique titles and meta descriptions, canonical URLs, Open Graph and Twitter cards.
- **Structured data (JSON-LD):** Organization, WebSite (with SearchAction), FAQPage on the homepage, Review + AggregateRating fields on operator pages, NewsArticle on news posts, and BreadcrumbList site-wide.
- **XML sitemap** (`/sitemap.xml`) and **robots.txt** generated automatically and kept in sync with content.
- **Preserved URL structure** plus 301 redirects for the legacy `/category/news/` path.
- **Affiliate hygiene** — outbound operator links use `rel="nofollow sponsored noopener"`, protecting crawl equity and complying with Google's affiliate guidance.
- **Performance** — system font stack (no render-blocking web fonts), lazy-loaded below-the-fold images, `next/image` with AVIF/WebP, immutable caching headers for static assets, and a CSS-only mobile menu (no JS hydration cost for navigation).

### Immediate technical to-dos (post-launch)
1. **Localize images.** Move operator logos and hero art into `/public`, then drop `unoptimized` so `next/image` serves responsive AVIF/WebP. This is the single biggest remaining LCP win.
2. **Set `en-CA` hreflang** if a French edition is planned (see §3).
3. **Add `AggregateRating`** to category pages once you collect review counts.
4. **Google Search Console + Bing Webmaster** — submit the sitemap, monitor Core Web Vitals and index coverage.
5. **Analytics** — privacy-friendly analytics (Plausible/GA4) plus event tracking on "Play Now" clicks for conversion data.

---

## 2. Improving existing content

The migrated copy is solid but has recurring issues to fix during editorial QA:

| Issue on old site | Fix |
|---|---|
| Thin/duplicated intros (casino & sportsbook pages share phrasing) | Rewrite each intro to be unique, specific and current (province context, 2025/2026 dates). |
| Typos & inconsistencies ("$2,0000", "Betina", "hoover", "leauges") | Copy-edit pass across all pages. |
| Undated, stale references ("2024" in meta, old bonus amounts) | Add "last updated" dates; automate the year in titles where possible. |
| Weak E-E-A-T signals | Add author bylines, credentials, review methodology page, and last-reviewed dates on every review. |
| Bonuses/ratings hard-coded in prose | Now centralized in `lib/operators.ts` — update once, reflected everywhere. |
| No internal linking strategy | Add contextual links between reviews ⇄ category ⇄ game guides (partially done). |

**E-E-A-T priorities** (critical in the "Your Money or Your Life" gambling niche):
- A dedicated **Review Methodology** page explaining the 6 criteria and testing process.
- **Named authors** with bios, photos and areas of expertise on every review and guide.
- **"Last reviewed" / "Fact-checked" dates** on operator pages.
- Visible **licensing badges** and links to regulators (AGCO, iGaming Ontario, MGA).
- A clear **Responsible Gambling** hub (helplines already in the footer — expand into a full page).

---

## 3. New high-quality content roadmap

Prioritized by search demand and commercial value. Each cluster is a topic hub with a pillar page plus supporting articles, richly interlinked.

### Cluster A — Provincial hubs (highest priority)
Canadian gambling is regulated province-by-province, so province pages capture high-intent local search and are hard for global competitors to match.

- **Pillar:** `/provinces/` overview.
- **Pages:** Ontario, Alberta, British Columbia, Quebec, Manitoba, Saskatchewan, Nova Scotia, and the rest — each covering legal status, regulator, licensed operators, local helplines, and "best casino/sportsbook in [province]".
- *Sportsbook Ontario/Alberta pages are already scaffolded; extend the pattern to casinos and all provinces.*

### Cluster B — Bonus & comparison content (highest commercial value)
- "Best casino bonuses in Canada" (updated monthly).
- "No deposit bonuses Canada", "Free spins offers", "High-roller bonuses".
- "Bonus wagering requirements explained" (evergreen educational).
- Interactive **bonus comparison table** / filter tool.

### Cluster C — Payments
- "Interac casinos", "PayPal casinos", "Pay-by-phone", "Crypto/Bitcoin casinos" (crypto hub already live).
- "Fastest withdrawal casinos in Canada" (leverages your withdrawal-speed testing — a genuine differentiator).

### Cluster D — Game guides (expand existing stubs)
Each game page (slots, blackjack, roulette, poker, video poker, bingo) should grow into a full guide:
- Rules, odds/RTP tables, strategy charts, glossary, FAQs, and "best sites to play [game]".
- Add: baccarat, craps, keno, live dealer, and "highest RTP slots in Canada".

### Cluster E — Sports betting depth
- League guides: NHL, NFL, NBA, MLB, MLS/soccer, CFL, UFC.
- "How to bet on hockey", odds-format explainer, parlay guide, live betting guide.
- Seasonal/event pages (Stanley Cup, Super Bowl, Grey Cup) — big seasonal traffic spikes.

### Cluster F — Trust & safety (E-E-A-T + brand)
- Review methodology, About/authors, Responsible Gambling hub, "How to spot a rogue casino", "Is [operator] legit?" style pages.

### Cluster G — News & data (freshness + links)
- Keep the news cadence; add original **market-data roundups** (e.g. Ontario iGaming quarterly numbers). Data journalism earns backlinks and citations.

### Optional: French edition
Quebec is a major market. A `fr-CA` version of core pages (with hreflang) unlocks significant untapped search demand.

### Suggested publishing cadence
- **Month 1–2:** Fix/expand existing pages, ship Review Methodology + author bios, build 3–4 provincial casino hubs.
- **Month 3–4:** Bonus cluster + payments cluster, expand two game guides fully.
- **Ongoing:** 2–4 news posts/week, one evergreen guide/week, monthly bonus-page refreshes.

---

## 4. Keyword & on-page targets

Primary head terms (high difficulty, long-term): *online casino canada, online gambling canada, sports betting canada, best online casino canada*.

Realistic near-term wins (lower competition, high intent):
- "[operator] review canada", "[operator] bonus code"
- "best online casino in [province]"
- "interac online casino", "fastest payout casino canada"
- "highest rtp slots canada", "single game sports betting canada"
- "no deposit bonus canada 2026"

On-page checklist per page: unique H1, keyword in title + first 100 words + one H2, descriptive internal links, an FAQ block with FAQPage schema, updated date, and one clear primary CTA.

---

## 5. Measurement

Track monthly: organic sessions, keyword rankings (top 3 / top 10 counts), indexed pages, Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1), affiliate click-through and conversion by page. Set a baseline in Search Console at launch and review at 30/60/90 days.

---

*Prepared for the OnlineGamblingCanada.com rebuild. All operator data is centralized in `lib/` for easy, single-source updates.*
