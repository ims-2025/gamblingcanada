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
  hidden?: boolean; // exclude from ranked toplists; review page still generated (preserves SEO equity)
  reviewBody?: string; // optional long-form review HTML rendered on the review page
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
    reviewBody:
      "<p>Betinia has quickly become one of the most-searched sportsbooks among Canadian bettors, and our testing shows why: sharp odds, a deep live-betting product and one of the cleanest mobile apps in the market. New customers get a 100% match on their first deposit up to $150.</p><h2>Betinia in Canada and Ontario</h2><p>Betinia accepts Canadian players and is a popular choice for bettors in Ontario looking for a modern sportsbook experience. It supports Canadian dollars and Interac, so there are no awkward currency conversions, and withdrawals were prompt in our checks. If you are comparing province by province, our <a href='/sports-betting/ontario'>Ontario sports betting guide</a> puts Betinia in context alongside other options.</p><h2>Betting markets and live betting</h2><p>Coverage spans hockey, football, basketball and soccer plus niche markets, and the in-play product is where Betinia really shines — fast, stable and well-priced. Hockey bettors in particular will find plenty of value; see our seasonal analysis in the <a href='/news'>news section</a>.</p><h2>Bonuses and banking</h2><p>The welcome offer is modest in size but comes with fair, clearly-stated terms — often better value than a bigger bonus buried under heavy wagering. Read the requirements before claiming. For alternatives, compare Betinia against our full list of <a href='/sports-betting'>top Canadian sportsbooks</a>.</p><h2>Verdict</h2><p>Betinia earns a 4.8/5 from our team for its odds, live betting and mobile experience. It is an easy recommendation for Canadian bettors, especially those in Ontario who want a polished, reliable book.</p>",
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

  // --- Restored review pages (ranked in GSC; kept out of curated toplists via hidden:true) ---
  {
    slug: 'lucky7even-casino',
    name: 'Lucky7even Casino',
    type: 'casino',
    logo: '/logos/lucky7even-casino.svg',
    rating: 4.2,
    bonus: 'Welcome package for new Canadian players',
    blurb:
      'Lucky7even is a modern, mobile-first online casino aimed at Canadian players, with a big slots library, live dealer tables and crypto-friendly banking.',
    playUrl: '/casino',
    hidden: true,
    licences: ['Curaçao eGaming'],
    payments: ['Interac', 'Visa', 'Mastercard', 'Crypto'],
    pros: ['Strong mobile experience', 'Large slots catalogue', 'Crypto accepted'],
    cons: ['Curaçao licence only', 'Wagering terms vary by promo'],
    reviewBody:
      "<p>Lucky7even has built a reputation as a slick, mobile-first casino for Canadian players who want a big game library without a clunky interface. The lobby is fast, the search and filtering are genuinely useful, and the slots catalogue spans the major studios alongside a solid live dealer section.</p><h2>Games and software</h2><p>Slots dominate, which is good news for players since online slots carry the highest return to player in the casino. If you are new to them, our <a href='/games/slots'>guide to playing slots online</a> explains RTP and volatility. Table-game fans get blackjack, roulette and a growing live-casino floor.</p><h2>Banking and support</h2><p>Interac and card payments sit alongside crypto options, with reasonable withdrawal times in our testing. As always, read the wagering requirements before claiming a bonus. If Lucky7even is not the right fit, compare it against our <a href='/casino'>best online casinos</a> and read more <a href='/reviews'>independent reviews</a>.</p>",
  },
  {
    slug: 'neospin-casino',
    name: 'Neospin Casino',
    type: 'casino',
    logo: '/logos/neospin-casino.svg',
    rating: 4.1,
    bonus: 'Multi-tier welcome bonus + free spins',
    blurb:
      'Neospin is a well-rounded online casino for Canadians, combining a generous multi-deposit welcome offer with a broad slots and live-casino line-up.',
    playUrl: '/casino',
    hidden: true,
    licences: ['Curaçao eGaming'],
    payments: ['Interac', 'Visa', 'Mastercard', 'Crypto'],
    pros: ['Generous multi-deposit bonus', 'Good live-casino range', 'Crypto banking'],
    cons: ['High wagering to clear full bonus'],
    reviewBody:
      "<p>Neospin targets Canadian players with a multi-tier welcome package that spreads value across your first few deposits, plus free spins. The design is clean and the game library is deep, with a particularly strong live-casino floor.</p><h2>Bonuses</h2><p>The staggered welcome offer looks generous, but the value depends on the wagering requirement and game weighting — always read the terms first. For a broader view of current offers, see our <a href='/casino'>casino rankings</a>.</p><h2>Games and banking</h2><p>Expect a full slots catalogue plus live blackjack and roulette; our <a href='/games/blackjack'>blackjack guide</a> is worth a read before you sit down. Interac, cards and crypto are supported. Compare Neospin with other options in our <a href='/reviews'>reviews section</a> before depositing.</p>",
  },
  {
    slug: 'las-vegas-casino',
    name: 'Las Vegas Casino',
    type: 'casino',
    logo: '/logos/las-vegas-casino.svg',
    rating: 3.9,
    bonus: 'New player welcome bonus',
    blurb:
      'Las Vegas Casino brings a classic casino theme to Canadian players, with a dependable game library and standard CAD banking options.',
    playUrl: '/casino',
    hidden: true,
    licences: ['Curaçao eGaming'],
    payments: ['Interac', 'Visa', 'Mastercard'],
    pros: ['Classic casino feel', 'CAD accepted'],
    cons: ['Smaller live-casino range', 'Fewer promotions'],
    reviewBody:
      "<p>Las Vegas Casino leans into a traditional, old-school casino theme. It is a dependable rather than flashy option for Canadian players, with a reasonable slots and table-game library and straightforward CAD banking.</p><h2>Verdict</h2><p>It covers the basics well but trails the market leaders on promotions and live-casino depth. If you want more choice, start with our <a href='/casino'>best online casinos</a> or browse all <a href='/reviews'>operator reviews</a>.</p>",
  },
  {
    slug: 'playojo-casino',
    name: 'PlayOJO Casino',
    type: 'casino',
    logo: '/logos/playojo-casino.svg',
    rating: 4.6,
    bonus: 'Fair-play free spins, no wagering',
    blurb:
      'PlayOJO is known for its no-wagering, fair-play philosophy — winnings from bonus spins are paid as real cash, a genuine rarity in the market.',
    playUrl: '/casino',
    hidden: true,
    licences: ['Malta Gaming Authority', 'AGCO / iGaming Ontario'],
    payments: ['Interac', 'Visa', 'Mastercard', 'Neteller'],
    pros: ['No wagering requirements', 'Fair-play reputation', 'Ontario-regulated'],
    cons: ['Smaller headline bonus figures'],
    reviewBody:
      "<p>PlayOJO stands out for one reason above all: no wagering requirements. Winnings from your bonus spins are paid as real, withdrawable cash — a genuine rarity that makes its offers far more valuable than a big headline number with heavy playthrough attached.</p><h2>Why players trust it</h2><p>PlayOJO operates under respected licences and is available to Ontario players through the regulated market. The fair-play angle, combined with a large slots library and live-casino floor, makes it one of the more player-friendly brands we cover. See how it compares on our <a href='/casino'>casino rankings</a> and in our other <a href='/reviews'>reviews</a>.</p>",
  },
  {
    slug: 'spin-casino',
    name: 'Spin Casino',
    type: 'casino',
    logo: '/logos/spin-casino.svg',
    rating: 4.4,
    bonus: 'Tiered welcome bonus across first deposits',
    blurb:
      'Spin Casino is a long-established, trusted brand for Canadians, offering a polished mobile experience and a large Microgaming-powered library.',
    playUrl: '/casino',
    hidden: true,
    established: 2001,
    licences: ['Malta Gaming Authority', 'Kahnawake Gaming Commission'],
    payments: ['Interac', 'Visa', 'Mastercard', 'Neteller', 'PayPal'],
    pros: ['Long-established, trusted brand', 'Excellent mobile app', 'Progressive jackpots'],
    cons: ['Bonus wagering on the higher side'],
    reviewBody:
      "<p>Spin Casino is one of the more established names available to Canadian players, with a polished mobile experience and a deep library. It has a strong reputation for reliability and fast, fuss-free banking in Canadian dollars.</p><h2>Games and jackpots</h2><p>Spin carries a large slots catalogue including progressive jackpots, plus a full suite of table and live-dealer games. Slots players should skim our <a href='/games/slots'>slots guide</a> first. Compare Spin with the current market leaders on our <a href='/casino'>best casinos</a> page and across our <a href='/reviews'>reviews</a>.</p>",
  },
];

export const CASINOS = OPERATORS.filter((o) => o.type === 'casino' && !o.hidden);
export const SPORTSBOOKS = OPERATORS.filter((o) => o.type === 'sportsbook' && !o.hidden);
export const POKER = OPERATORS.filter((o) => o.type === 'poker' && !o.hidden);

export function getOperator(slug: string): Operator | undefined {
  return OPERATORS.find((o) => o.slug === slug);
}

export function topByRating(list: Operator[], n: number): Operator[] {
  return [...list].sort((a, b) => b.rating - a.rating).slice(0, n);
}
