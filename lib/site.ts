export const SITE = {
  name: 'Online Gambling Canada',
  shortName: 'OnlineGamblingCanada',
  domain: 'onlinegamblingcanada.com',
  url: 'https://www.onlinegamblingcanada.com',
  tagline: 'Best Online Sportsbooks & Online Casinos',
  description:
    'Discover top-rated online casinos and sportsbooks in Canada. Expert reviews, gambling news, and guides for safe, legal online betting.',
  yearsInBusiness: 10,
  operatorsReviewed: '70+',
  established: 2013,
} as const;

// Current year, resolved at build time so year-stamped titles/headings never go
// stale. Because the site is rebuilt regularly (incl. the daily news task), this
// stays correct automatically — no more hard-coded "2025" to chase every January.
export const YEAR: number = new Date().getFullYear();

export const NAV: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: 'Online Casinos', href: '/casino' },
  {
    label: 'Sports Betting',
    href: '/sports-betting',
    children: [
      { label: 'Alberta', href: '/sports-betting/alberta' },
      { label: 'Ontario', href: '/sports-betting/ontario' },
      { label: 'Understanding the Basics', href: '/sports-betting-understanding-the-basics' },
    ],
  },
  {
    label: 'Reviews',
    href: '/reviews',
    children: [
      { label: 'PlayOJO Casino', href: '/reviews/playojo-casino' },
      { label: '888 Casino', href: '/reviews/888casino' },
      { label: 'Jackpot City Casino', href: '/reviews/jackpotcity-casino' },
      { label: 'Spin Casino', href: '/reviews/spin-casino' },
    ],
  },
  { label: 'News', href: '/news' },
  {
    label: 'Games',
    href: '/games',
    children: [
      { label: 'Slots', href: '/games/slots' },
      { label: 'Blackjack', href: '/games/blackjack' },
      { label: 'Roulette', href: '/games/roulette' },
      { label: 'Poker', href: '/games/poker' },
      { label: 'Video Poker', href: '/games/video-poker' },
      { label: 'Bingo', href: '/games/bingo' },
    ],
  },
  { label: 'Crypto', href: '/crypto' },
];

// Provincial responsible-gambling helplines (preserved from existing site).
export const HELPLINES: { province: string; phone: string }[] = [
  { province: 'Alberta', phone: '1-866-461-1259' },
  { province: 'British Columbia', phone: '1-888-795-6111' },
  { province: 'Manitoba', phone: '1-800-463-1554' },
  { province: 'New Brunswick', phone: '1-800-461-1234' },
  { province: 'Newfoundland and Labrador', phone: '1-888-899-4357' },
  { province: 'Northwest Territories', phone: '1-800-661-0844' },
  { province: 'Nova Scotia', phone: '1-888-429-8167' },
  { province: 'Nunavut', phone: '1-800-265-3333' },
  { province: 'Ontario', phone: '1-866-531-2600' },
  { province: 'Prince Edward Island', phone: '1-855-255-4255' },
  { province: 'Quebec', phone: '1-800-461-0140' },
  { province: 'Saskatchewan', phone: '1-800-306-6789' },
  { province: 'Yukon', phone: '1-866-456-3838' },
];
