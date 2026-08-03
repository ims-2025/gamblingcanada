# OnlineGamblingCanada.com — Premium Rebuild

A high-performance, SEO-first rebuild of OnlineGamblingCanada.com, built with **Next.js 14 (App Router)** and TypeScript. Clean, light, trustworthy design. All pages are statically prerendered for near-instant loads.

## Highlights

- **47 pages statically generated** — ~87 kB shared JS, ~99 kB First Load on the heaviest page.
- **Existing URL structure preserved** — `/casino`, `/sports-betting`, `/reviews/[slug]`, `/games/[slug]`, `/news`, `/crypto`, `/about`, `/contact`, `/services`, plus `/sports-betting/ontario` & `/alberta`.
- **SEO built in** — per-page metadata, canonicals, Open Graph, `sitemap.xml`, `robots.txt`, web manifest, and JSON-LD schema (Organization, WebSite, FAQPage, Review, NewsArticle, BreadcrumbList).
- **Affiliate-safe** — all outbound operator links use `rel="nofollow sponsored noopener"`.
- **Responsible gambling** — 19+ messaging, advertising disclosure, and all provincial helplines preserved.
- **Zero-JS mobile menu**, system font stack (no web-font penalty), lazy-loaded images, immutable asset caching.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx            Root layout, global SEO, Org + WebSite schema
  page.tsx              Homepage
  casino/               Best casinos (list template)
  sports-betting/       Best sportsbooks + [province] pages
  reviews/[slug]/       Operator review template (Review schema)
  games/[slug]/         Game guide template
  news/[slug]/          News article template (NewsArticle schema)
  crypto, about, contact, services
  sitemap.ts, robots.ts, manifest.ts
components/              Header, Footer, OperatorCard, Breadcrumbs, icons, JsonLd
lib/                    site.ts, operators.ts, content.ts  (all editable data)
```

## Editing content

All operators, games, news and copy live in `lib/`. Add or edit an operator in `lib/operators.ts` and it automatically appears in the lists, generates a `/reviews/<slug>` page, and is added to the sitemap.

## Before going live

1. Replace remote WordPress image URLs (in `lib/operators.ts`) with locally optimized assets in `/public` so `next/image` can serve AVIF/WebP.
2. Wire the contact form to a provider (Formspree, Resend, or a serverless function).
3. Confirm the 301 redirects in `next.config.mjs` cover any other legacy URLs from the old site.
4. Deploy to Vercel, Netlify or Cloudflare Pages.

See `CONTENT-AND-SEO-STRATEGY.md` for the content roadmap and SEO plan.
