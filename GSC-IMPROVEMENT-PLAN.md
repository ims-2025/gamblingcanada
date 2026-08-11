# OnlineGamblingCanada.com — SEO Improvement Plan (from GSC data)

**Data window:** 13 Jul – 9 Aug 2026 (last 28 days), Web search, Google Search Console export.

---

## 1. Executive summary

| Metric | Value | Read |
|---|---|---|
| Impressions | 27,209 | Healthy — Google is showing the site widely |
| Clicks | 4 | Effectively zero |
| CTR | 0.01% | A symptom, not the disease |
| Avg position | ~54–62 (page 5–7) | **This is the disease** |
| Canada share of impressions | 87% (23,730) | Right audience, right market |

The story is simple: **the site earns real impressions for valuable Canadian gambling queries, but almost everything ranks on page 5–7, where clicks are impossible.** CTR optimisation (titles, meta) is *not* the priority yet — you cannot improve the click rate of a result nobody scrolls to. **The job is to move rankings up**, and there are two fast levers to do it.

The two biggest wins, in order:

1. **Stop the migration bleed.** ~8,250 impressions (≈30% of all impressions) point at legacy URLs that the rebuild dropped or moved — they now 404 or lack a redirect. This is ranking equity leaking every day. Fixing it is a one-time technical job with outsized return.
2. **Convert striking-distance queries.** A cluster of brand and review terms already rank positions 8–25. Small content/linking pushes turn these into page-1 rankings and the site's first real clicks.

---

## 2. Critical finding: the rebuild is losing legacy ranking equity

The new Next.js site changed the URL pattern for two whole content types and dropped several ranking pages. Because Google still has the **old** URLs indexed, those impressions now hit dead ends.

### 2a. High-value legacy pages that no longer exist (top by impressions)

| Old URL | Impr. | Pos | Status in new site | Action |
|---|---:|---:|---|---|
| `/best-mobile-casinos-in-canada` | 4,712 | 47 | **Missing** | **Recreate** as a real page (best single opportunity) |
| `/our-favorite-ontario-casino-apps-for-2024` | 1,481 | 55 | Missing | Recreate as evergreen "Ontario casino apps" |
| `/top-canadian-sportsbooks-for-nfl-and-nhl` | 673 | 83 | Moved to `/news/…` | 301 old→new |
| `/review-of-lucky7even-casino` | 343 | **25** | Missing (operator dropped) | Recreate review or 301 to `/reviews` |
| `/top-10-most-searched-online-casino-games-in-canada` | 342 | 56 | Missing | Recreate (links well to game guides) |
| `/review-of-las-vegas-casino` | 313 | 49 | Missing | Recreate or 301 |
| `/games/blackjack/the-basics-of-blackjack` | 188 | 71 | Missing (sub-page) | 301 → `/games/blackjack` |
| `/review-of-neospin-casino` | 27 | **18** | Missing | Recreate or 301 |
| `/esports-betting-in-canada-trend-or-fad` | 6 | **8.2** | Moved to `/news/…` | 301 old→new (best-ranked page on the site!) |

Plus ~24 more lower-volume legacy article and `/category/*` URLs.

### 2b. Two systemic URL problems

- **News moved from root to `/news/…`.** The old WordPress site published articles at the root (e.g. `/esports-betting-in-canada-trend-or-fad`). The rebuild serves them at `/news/<slug>`. Every migrated article changed URL. The one page already on **page 1 (position 8.2)** is a casualty. **Fix:** add 301s from each root article slug to `/news/<slug>`.
- **Legacy review slugs differ.** Old: `/review-of-lucky7even-casino`, `/888-casino`, `/jackpot-city-casino`. New: `/reviews/<slug>`. **Fix:** 301 map old→new, and recreate the reviews for operators that were dropped (Lucky7even, Neospin, Las Vegas Casino, PlayOJO, Spin) — several already rank in the teens/20s.

### 2c. Trailing-slash duplicates

GSC shows both `/sports-betting/ontario/` (4,953 impr, pos 73) and `/sports-betting/ontario` (1,336 impr, pos 77) — signals split across two URLs. Next.js normalises trailing slashes automatically, but confirm a single canonical form is emitted site-wide and that the sitemap uses it consistently.

> **Priority 0 (do first, this week): a complete 301 redirect map** in `next.config.mjs` covering every legacy URL in the GSC export → its closest live equivalent. This alone should recover a large share of the 8,250 stranded impressions and is a few hours of work.

---

## 3. Opportunity clusters (ranked by impression volume)

| Cluster | Queries | Impr. | Avg pos | Verdict |
|---|---:|---:|---:|---|
| **Ontario sports betting** | 182 | 8,896 | 66.7 | Huge demand, page-7 content — biggest content upside |
| **Alberta sports betting** | 71 | 5,514 | 70.6 | Same pattern; less competitive than Ontario |
| **Mobile casinos** | 61 | 4,759 | 48.7 | Page dropped in rebuild — recreate = quick win |
| **Betinia (brand)** | 31 | 2,833 | 28.6 | Closest to page 1 (best 15.3); high intent |
| **Operator reviews** (Cazimbo, Lucky7even, Neospin, Highroller…) | 39 | 819 | 34.5 | Low-competition brand terms; some already teens |
| Games (blackjack/slots/roulette/poker) | 62 | 1,236 | 57.7 | Guides exist; need depth + internal links |
| Bingo | 38 | 729 | 42.7 | `/games/bingo` ranks 43 — winnable |
| Crypto/Bitcoin | 25 | 237 | 53.5 | Small but page exists; low effort |

### What this means
- **Sports betting (Ontario + Alberta) = 14,400 impressions**, over half the site's total, but ranking page 7. The current `/sports-betting/ontario` and `/alberta` pages are thin. These need to become genuinely deep provincial hubs (see §5).
- **Mobile casinos** is the fastest content win: the old page ranked **47** with the site's best click — recreate it better and it targets ~4,700 impressions of demand.
- **Betinia + operator reviews** are the fastest *ranking* wins: brand searches, low competition, already in striking distance.

---

## 4. Low-hanging fruit — do these first

Ordered by effort-to-reward. None require waiting on domain authority.

### LHF-1 — Ship the 301 redirect map (Priority 0)
Recover the ~8,250 stranded impressions. Include: root news slugs → `/news/…`; `/review-of-*` → `/reviews/*`; dropped pages → nearest hub; `/category/*` → relevant hub; `/games/blackjack/the-basics-of-blackjack` → `/games/blackjack`. *Effort: low. Reward: high.*

### LHF-2 — Recreate `/best-mobile-casinos-in-canada`
Its old URL still pulls 4,712 impressions at position 47. Rebuild it as a strong, current comparison page (mobile-optimised operators, app vs browser, Interac, CAD) and interlink from `/casino` and the homepage. *Effort: low-medium. Reward: high.*

### LHF-3 — Win the Betinia cluster (2,833 impressions, best pos 15)
`/reviews/betinia-sports` already ranks 23.5 and the brand terms sit 15–22. Expand the review (bonus detail, banking, Ontario availability, FAQ, screenshots), add a dedicated "Betinia Canada / Ontario" section, and internally link from the sports-betting hub and Ontario page. Target queries: *betinia canada, betinia ontario, betinia casino ontario, betinia sportsbook ontario*. *Effort: low. Reward: medium-high (first real clicks).*

### LHF-4 — Recreate the dropped operator reviews that already rank
Lucky7even (pos 25, had a click), Neospin (pos 18), Las Vegas Casino (pos 49). Either add these operators back with proper reviews at `/reviews/<slug>` or 301 the old URLs. Brand-review terms are low-competition and convert. *Effort: medium. Reward: medium.*

### LHF-5 — Deepen `/games/bingo` and blackjack/slots guides
Bingo ranks 43 with a small striking-distance set (*best bingo site canada, top bingo sites canada* at pos 18). Expand each game guide to a full guide with "best sites to play" tables and internal links. *Effort: medium. Reward: medium.*

---

## 5. Content plan by cluster (the ranking work)

**Ontario sports betting hub** — rebuild `/sports-betting/ontario` into a comprehensive hub: legal status (iGaming Ontario/AGCO), licensed vs offshore, best Ontario sportsbooks table, banking (Interac), how to sign up, tax, responsible gambling, FAQ. Target the full head + long-tail set (*ontario sports betting, ontario sportsbooks, ontario betting sites, online sports betting ontario*). Add supporting articles that link in.

**Alberta sports betting hub** — same treatment. Explicitly answer *"is sports betting legal in Alberta"* (268 impr, pos 92) with a clear, up-to-date section; cover PlayAlberta and the coming regulated market. Lower competition than Ontario — likely faster gains.

**Mobile casinos hub** — see LHF-2; support with "best casino apps Ontario" (recreate the 1,481-impression apps page) and interlink.

**Operator reviews** — bring review depth up across the board: bonus terms, licensing, banking, pros/cons, screenshots, verdict, "last reviewed" date, and `Review`/`AggregateRating` schema (already scaffolded). Brand terms are the cheapest clicks on the site.

**Games guides** — expand each to 1,000+ words with rules, odds/RTP tables, strategy, and "best sites" tables linking to reviews. Add the recreated "top 10 most searched casino games" as a hub that links to each guide.

---

## 6. Technical SEO checklist

- [ ] **301 redirect map** for all legacy URLs (Priority 0).
- [ ] Confirm single canonical URL form (trailing-slash consistency) site-wide and in the sitemap.
- [ ] Submit the new `sitemap.xml` in Search Console; request indexing for the priority pages.
- [ ] Verify all recreated pages are in the sitemap and internally linked (no orphans).
- [ ] Keep `Review`, `FAQPage`, `BreadcrumbList`, `NewsArticle` schema on the relevant templates (already built) and validate in the Rich Results Test.
- [ ] Localise operator logos (already flagged) and run Core Web Vitals — LCP is the main lever once rankings climb.
- [ ] Add internal links from high-impression pages to related hubs (sports ↔ province ↔ review ↔ game).
- [ ] Set up a rank/GSC tracker so movement on the striking-distance set is visible weekly.

---

## 7. Why CTR is *not* the current priority

At position 55, expected CTR is ~0%, so the 0.01% figure is fully explained by rank, not by weak titles. **Once the priority pages reach page 1–2, revisit titles and meta descriptions** — that is when CTR work pays off. Doing it now would be optimising a lever that isn't connected to anything yet.

---

## 8. 30/60/90-day roadmap

**Days 1–14 (recover + quick wins)**
- Ship the 301 redirect map (LHF-1).
- Recreate `/best-mobile-casinos-in-canada` (LHF-2).
- Expand the Betinia review + brand section (LHF-3).
- Submit sitemap, request indexing, fix trailing-slash canonicals.

**Days 15–45 (ranking work)**
- Rebuild Ontario and Alberta sports-betting hubs into deep pages.
- Recreate dropped operator reviews that already rank (LHF-4).
- Recreate the "Ontario casino apps" and "top 10 casino games" pages.
- Begin daily news cadence feeding internal links to the hubs.

**Days 46–90 (compound + measure)**
- Expand all game guides; add "best sites to play X" tables.
- Build 3–4 more provincial pages (BC, Quebec, Manitoba, Saskatchewan).
- Title/meta CTR pass on any page now ranking in the top 20.
- Review GSC: track striking-distance queries crossing into page 1.

---

## 9. KPIs to watch (monthly in GSC)

- Impressions on **live** pages (should rise as redirects consolidate equity).
- Count of queries in **positions 1–10** and **11–20** (the leading indicator — expect this to move before clicks do).
- Clicks and CTR on the priority clusters (mobile casinos, Betinia, Ontario/Alberta SB).
- Average position of the Ontario and Alberta hubs specifically.
- Indexed-page count vs sitemap (coverage).

---

*Bottom line: the site isn't failing to convert clicks — it's failing to rank, and it's leaking the little equity it has through a broken migration. Fix the redirects, recreate the mobile-casinos page, and push the striking-distance brand terms over the line, and this site earns its first meaningful clicks within weeks — not months.*
