/** @type {import('next').NextConfig} */

// Legacy WordPress news articles lived at the site root; the rebuild serves
// them under /news/<slug>. 301 each old root URL to its new home.
const NEWS_SLUGS = [
  'top-canadian-sportsbooks-for-nfl-and-nhl',
  'canadian-online-casino-bonuses-2025-top-offers',
  'canada-sports-betting-slows-will-nfl-revive',
  'esports-betting-in-canada-trend-or-fad',
  'canada-s-online-poker-shows-steady-growth',
  'ontario-exclusive-slots-worth-playing',
  'rise-of-live-dealer-games-in-canada',
  'ontario-online-casino-handle-hits-89-as-sports-betting-slows',
];

// Legacy review URL patterns → new /reviews/<slug> structure.
const REVIEW_REDIRECTS = [
  ['/review-of-lucky7even-casino', '/reviews/lucky7even-casino'],
  ['/review-of-las-vegas-casino', '/reviews/las-vegas-casino'],
  ['/review-of-neospin-casino', '/reviews/neospin-casino'],
  ['/888-casino', '/reviews/888casino'],
  ['/jackpot-city-casino', '/reviews/jackpotcity-casino'],
  ['/playojo-casino', '/reviews/playojo-casino'],
  ['/spin-casino', '/reviews/spin-casino'],
];

// Dropped or restructured legacy pages → closest live equivalent.
const PAGE_REDIRECTS = [
  ['/our-favorite-ontario-casino-apps-for-2024', '/ontario-casino-apps'],
  ['/games/blackjack/the-basics-of-blackjack', '/games/blackjack'],
  ['/new-online-slots-canada-2024', '/games/slots'],
  ['/casino/ontario', '/casino'],
  ['/analyzing-the-most-popular-online-betting-payment-methods-in-canada', '/sports-betting'],
  ['/the-future-of-online-sports-gambling-in-canada', '/sports-betting'],
  ['/betting-on-canadian-university-sports-usports-football', '/sports-betting'],
  ['/offshore-vs-licensed-gambling-sites-in-canada-risks-and-rewards', '/casino'],
  ['/us-vs-canadian-gambling-laws-cross-border-comparison', '/about'],
  ['/the-growing-popularity-of-telegram-casinos-in-the-igaming-industry', '/casino'],
  ['/snake-helps-thief-with-casino-heist', '/news'],
  // Legacy WordPress taxonomy/category paths
  ['/category/casino', '/casino'],
  ['/category/sportsbetting', '/sports-betting'],
  ['/category/news/casino-games', '/news'],
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.onlinegamblingcanada.com' },
      { protocol: 'https', hostname: 'onlinegamblingcanada.com' },
    ],
  },
  async redirects() {
    return [
      // News articles moved from root → /news/<slug>
      ...NEWS_SLUGS.map((slug) => ({ source: `/${slug}`, destination: `/news/${slug}`, permanent: true })),
      // Legacy review URLs → /reviews/<slug>
      ...REVIEW_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Dropped / restructured pages → nearest live hub
      ...PAGE_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
      // WordPress news category tree
      { source: '/category/news', destination: '/news', permanent: true },
      { source: '/category/news/:path*', destination: '/news', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|woff2|css|js)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
