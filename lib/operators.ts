export type OperatorType = 'casino' | 'sportsbook' | 'poker';

export interface Operator {
  slug: string; // maps to /reviews/[slug]
  name: string;
  type: OperatorType;
  logo: string; // remote logo (existing WP uploads) — swap for local optimized assets later
  rating: number; // out of 5
  bonus: string;
  bonusShort?: string;
  blurb: string;
  playUrl: string; // affiliate link (preserved)
  established?: number;
  licences?: string[];
  payments?: string[];
  pros?: string[];
  cons?: string[];
  featured?: boolean;
}

// Data extracted from the existing OnlineGamblingCanada.com. Ratings, bonuses and
// affiliate URLs preserved. Pros/cons/licences are editorial defaults to be verified
// per operator during content QA.
export const OPERATORS: Operator[] = [
  {
    slug: 'highroller-casino',
    name: 'Highroller Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/Logo-120x120.png',
    rating: 5.0,
    bonus: '100% up to $2,000',
    bonusShort: '100% up to $2,000',
    blurb:
      'A thrilling online gaming destination for Canadian players seeking high-stakes action, with a large slots library and fast CAD payouts.',
    playUrl: 'https://track.affroller.com/visit/?bta=36441&nci=5356&utm_campaign=onlinegamblingcanada',
    licences: ['Malta Gaming Authority'],
    payments: ['Visa', 'Mastercard', 'Interac', 'Neteller', 'Crypto'],
    pros: ['Large welcome bonus', 'Broad slots catalogue', 'CAD accepted'],
    cons: ['Higher wagering on max bonus'],
    featured: true,
  },
  {
    slug: 'cazimbo-casino',
    name: 'Cazimbo Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/cazimbo-casino-logo-120x120.webp',
    rating: 4.8,
    bonus: '100% up to $750 + 200 Free Spins + 1 Bonus Crab',
    bonusShort: '100% up to $750 + 200 FS',
    blurb:
      'A vibrant online gaming destination tailored for Canadian players, blending a playful theme with a strong live-casino and slots line-up.',
    playUrl: 'https://track.affilirise.com/visit/?bta=656073&nci=5496&utm_campaign=onlinegamblingcanada',
    licences: ['Curaçao eGaming'],
    payments: ['Visa', 'Mastercard', 'Interac', 'Crypto'],
    pros: ['Free spins + bonus package', 'Live dealer games', 'Mobile-friendly'],
    cons: ['Curaçao licence only'],
    featured: true,
  },
  {
    slug: 'riseofbets-casino',
    name: 'RiseOfBets Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/Rise-Of-Bets-Logo-120x120.png',
    rating: 4.3,
    bonus: '100% up to $1,000 + 1,000 Free Spins',
    bonusShort: '100% up to $1,000 + 1,000 FS',
    blurb: 'A newer Canadian-facing casino with an aggressive welcome package and a big free-spins allocation.',
    playUrl:
      'https://go.campeonaffiliatesdirect.com/visit/?bta=36823&brand=riseofbets&utm_campaign=onlinegamblingcanada',
    licences: ['Curaçao eGaming'],
    payments: ['Visa', 'Mastercard', 'Crypto'],
    pros: ['Huge free-spins offer', 'Fast sign-up'],
    cons: ['Newer brand, shorter track record'],
  },
  {
    slug: 'bitkingz-casino',
    name: 'Bitkingz Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/bitkingz-casino-logo-600x600-1-150x150-1-120x120.png',
    rating: 4.0,
    bonus: '100% up to $4,500 + 225 Free Spins',
    bonusShort: '100% up to $4,500 + 225 FS',
    blurb: 'A crypto-friendly casino with one of the largest headline bonuses aimed at Canadian high rollers.',
    playUrl: 'https://www.bitkingzmedia.com/ad3c572ed',
    licences: ['Curaçao eGaming'],
    payments: ['Crypto', 'Visa', 'Mastercard'],
    pros: ['Very large max bonus', 'Crypto payments'],
    cons: ['High wagering to clear full bonus'],
  },
  {
    slug: '888casino',
    name: '888 Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2022/04/888casino.png',
    rating: 5.0,
    bonus: 'Welcome offer for new Canadian players',
    blurb: '888 Casino is one of the most popular and trusted online casinos for players in Canada, known for fast withdrawals.',
    playUrl: 'https://ic.aff-handler.com/c/48368?sr=2009697',
    established: 1997,
    licences: ['Malta Gaming Authority', 'UK Gambling Commission'],
    payments: ['Visa', 'Mastercard', 'PayPal', 'Neteller', 'Interac'],
    pros: ['Long-established, highly trusted brand', 'Fast withdrawals', 'Strong live casino'],
    cons: ['Some games region-restricted'],
    featured: true,
  },
  {
    slug: 'jackpotcity-casino',
    name: 'JackpotCity Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2022/04/Jackpot-City-Casino.png',
    rating: 4.3,
    bonus: 'Top welcome bonus for Canadian bettors',
    blurb: 'One of the leading online casinos for Canada, praised for the quickest withdrawals in our testing.',
    playUrl: 'https://www.onlinegamblingcanada.com/go/jackpotcity',
    established: 1998,
    licences: ['Malta Gaming Authority', 'Kahnawake Gaming Commission'],
    payments: ['Visa', 'Mastercard', 'Interac', 'Neteller'],
    pros: ['Fastest withdrawals in testing', 'Progressive jackpots', 'Trusted brand'],
    cons: ['Dated interface in places'],
  },
  {
    slug: 'draftkings-casino',
    name: 'DraftKings Casino',
    type: 'casino',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2024/11/DraftKings_logo_circle-1-80x80.webp',
    rating: 4.8,
    bonus: 'New player casino offer',
    blurb: 'DraftKings is one of the leading regulated casino operators in Ontario and a top choice for Canadian players.',
    playUrl:
      'https://dkcs.sng.link/A9aj1/gypq?pcid=413988&psn=3064&pcn=SAUSDRAFTKINGSC&pscn=onlinegamblingcanada&_forward_params=1',
    licences: ['iGaming Ontario / AGCO'],
    payments: ['Interac', 'Visa', 'Mastercard', 'PayPal'],
    pros: ['Ontario-regulated', 'Slick app', 'Strong brand'],
    cons: ['Ontario only for regulated play'],
  },
  {
    slug: 'betinia-sports',
    name: 'Betinia Sports',
    type: 'sportsbook',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/Betinia_1200x1200-120x120.jpg',
    rating: 4.8,
    bonus: '100% up to $150',
    bonusShort: '100% up to $150',
    blurb:
      'Your go-to sportsbook for thrilling action — live betting, competitive odds, and a sleek mobile app with a 100% match on your first deposit up to $150.',
    playUrl: 'https://btn.xarvilo.com/?mid=149989_1450537',
    licences: ['Malta Gaming Authority'],
    payments: ['Visa', 'Mastercard', 'Interac', 'Crypto'],
    pros: ['Strong live betting', 'Competitive odds', 'Great mobile app'],
    cons: ['Smaller welcome bonus'],
    featured: true,
  },
  {
    slug: 'campeonbet-sports',
    name: 'Campeonbet Sport',
    type: 'sportsbook',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/campeonbet-sports-e1736947312729-120x120.png',
    rating: 4.3,
    bonus: '100% up to $100',
    bonusShort: '100% up to $100',
    blurb:
      'Experience elite sports betting with vast markets, top odds, and instant payouts. New users get a 100% bonus up to $100.',
    playUrl: 'https://go.campeonaffiliatesdirect.com/visit/?bta=36823&nci=7693&utm_campaign=onlinegamblingcanada',
    licences: ['Curaçao eGaming'],
    payments: ['Visa', 'Mastercard', 'Crypto'],
    pros: ['Vast betting markets', 'Fast payouts'],
    cons: ['Modest bonus cap'],
  },
  {
    slug: 'cazimbo-sport',
    name: 'Cazimbo Sport',
    type: 'sportsbook',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/cazimbo-casino-logo-120x120.webp',
    rating: 4.3,
    bonus: '100% up to $150',
    bonusShort: '100% up to $150',
    blurb: 'The sportsbook side of Cazimbo, offering a solid range of markets alongside its popular casino.',
    playUrl: 'https://track.affilirise.com/visit/?bta=656189&nci=5429&utm_campaign=onlinegamblingcanada',
    licences: ['Curaçao eGaming'],
    payments: ['Visa', 'Mastercard', 'Crypto'],
    pros: ['Casino + sportsbook in one', 'Crypto accepted'],
    cons: ['Curaçao licence only'],
  },
  {
    slug: 'campobet-sports',
    name: 'Campobet Sports',
    type: 'sportsbook',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/Campotbet-logo-120x120.png',
    rating: 4.0,
    bonus: '100% up to $100',
    bonusShort: '100% up to $100',
    blurb: 'A well-rounded sportsbook with a broad sports offering and a straightforward welcome bonus.',
    playUrl: 'https://cpb.xarvilo.com/?mid=149993_1449052',
    licences: ['Curaçao eGaming'],
    payments: ['Visa', 'Mastercard', 'Crypto'],
    pros: ['Wide sports coverage', 'Simple bonus terms'],
    cons: ['Average odds on niche markets'],
  },
  {
    slug: 'betbeast-sport',
    name: 'BetBeast Sport',
    type: 'sportsbook',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/betbeast.jpg',
    rating: 3.8,
    bonus: '100% up to $5,000',
    bonusShort: '100% up to $5,000',
    blurb: 'The biggest headline sportsbook bonus on our list, aimed at high-staking Canadian bettors.',
    playUrl: 'https://playbetbeast.com/jee7a281d',
    licences: ['Curaçao eGaming'],
    payments: ['Crypto', 'Visa', 'Mastercard'],
    pros: ['Huge max bonus', 'Crypto-friendly'],
    cons: ['High wagering requirement', 'Newer brand'],
  },
  {
    slug: 'draftkings-sport',
    name: 'DraftKings Sport',
    type: 'sportsbook',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2024/11/DraftKings_logo_circle-1-80x80.webp',
    rating: 4.8,
    bonus: 'New player sportsbook offer',
    blurb: 'DraftKings is one of the leading regulated sportsbooks in Ontario and a top pick for Canadian bettors.',
    playUrl:
      'https://dksb.sng.link/As9kz/9es9?pcid=413987&psn=3064&pcn=SAUSDRAFTKINGSC&pscn=onlinegamblingcanada&_forward_params=1',
    licences: ['iGaming Ontario / AGCO'],
    payments: ['Interac', 'Visa', 'Mastercard', 'PayPal'],
    pros: ['Ontario-regulated', 'Deep NFL/NHL markets', 'Best-in-class app'],
    cons: ['Regulated play limited to Ontario'],
  },
  {
    slug: '888-poker-ontario',
    name: '888 Poker Ontario',
    type: 'poker',
    logo: 'https://www.onlinegamblingcanada.com/wp-content/uploads/2025/01/888Poker-80x80.png',
    rating: 5.0,
    bonus: '$20 free + 100% up to $1,000',
    bonusShort: '$20 free + 100% up to $1,000',
    blurb: 'The Ontario-regulated version of 888poker, one of the largest and most trusted online poker rooms.',
    playUrl: 'https://ic.aff-handler.com/c/47828?sr=2009697',
    licences: ['iGaming Ontario / AGCO'],
    payments: ['Interac', 'Visa', 'Neteller'],
    pros: ['Ontario-regulated', 'Soft cash games', 'Frequent tournaments'],
    cons: ['Ontario players only'],
  },
];

export const CASINOS = OPERATORS.filter((o) => o.type === 'casino');
export const SPORTSBOOKS = OPERATORS.filter((o) => o.type === 'sportsbook');
export const POKER = OPERATORS.filter((o) => o.type === 'poker');

export function getOperator(slug: string): Operator | undefined {
  return OPERATORS.find((o) => o.slug === slug);
}

export function topByRating(list: Operator[], n: number): Operator[] {
  return [...list].sort((a, b) => b.rating - a.rating).slice(0, n);
}
