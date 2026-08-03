export interface Game {
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  rtp?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  icon: string; // emoji placeholder — replace with SVG icons in assets
}

export const GAMES: Game[] = [
  {
    slug: 'slots',
    name: 'Slots',
    title: 'How to Play Slots Online: A Beginner’s Guide to Winning',
    excerpt:
      'Online slots are the most popular casino game in Canada and carry the highest RTP — often up to 99%. Learn paylines, volatility and jackpots.',
    rtp: 'Up to 99%',
    difficulty: 'Easy',
    icon: '🎰',
  },
  {
    slug: 'blackjack',
    name: 'Blackjack',
    title: 'The Basics of Blackjack',
    excerpt: 'Master basic strategy to bring blackjack’s house edge down to under 1% — one of the best odds in any casino.',
    rtp: '~99.5%',
    difficulty: 'Medium',
    icon: '🃏',
  },
  {
    slug: 'roulette',
    name: 'Roulette',
    title: 'Roulette Guide for Canadian Players',
    excerpt: 'European roulette returns 97.3% versus 94.7% for American — a simple choice that improves your odds.',
    rtp: '94.7–97.3%',
    difficulty: 'Easy',
    icon: '🎡',
  },
  {
    slug: 'poker',
    name: 'Poker',
    title: 'Best Online Poker Sites in Canada 2025',
    excerpt: 'A game of skill against other players. Find soft cash games, big tournaments and Ontario-regulated rooms.',
    difficulty: 'Hard',
    icon: '♠️',
  },
  {
    slug: 'video-poker',
    name: 'Video Poker',
    title: 'Video Poker Strategy & Best Machines',
    excerpt: 'Full-pay video poker offers some of the highest returns in the casino when played with correct strategy.',
    rtp: 'Up to 99.5%',
    difficulty: 'Medium',
    icon: '🎴',
  },
  {
    slug: 'bingo',
    name: 'Bingo',
    title: 'Best Online Bingo Sites for Canadians 2025',
    excerpt: 'A social, low-stakes favourite. Discover the best rooms, chat games and jackpot bingo for Canadians.',
    difficulty: 'Easy',
    icon: '🔵',
  },
];

export function getGame(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export interface NewsPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO
}

export const NEWS: NewsPost[] = [
  {
    slug: 'canada-sports-betting-slows-will-nfl-revive',
    title: 'Sports Betting in Canada Slows – Will NFL Season Spark a Comeback?',
    category: 'Sports Betting',
    excerpt:
      'It’s becoming increasingly evident that sports betting in Canada has experienced a notable decline in recent months.',
    date: '2025-08-30',
  },
  {
    slug: 'canadian-online-casino-bonuses-2025-top-offers',
    title: 'Canadian Online Casino Bonuses 2025 – Best Offers Right Now',
    category: 'Casino',
    excerpt: 'Most players seeking entertainment in online casinos will find an array of enticing bonuses available in Canada.',
    date: '2025-08-30',
  },
  {
    slug: 'ontario-exclusive-slots-worth-playing',
    title: 'Exclusive Slots Launch in Ontario – Are They Worth Playing?',
    category: 'Casino Games',
    excerpt: 'Slots enthusiasts are eager to explore the recent exclusive slots launch in Ontario.',
    date: '2025-08-30',
  },
  {
    slug: 'top-canadian-sportsbooks-for-nfl-and-nhl',
    title: 'Best Canadian Sportsbooks for NFL & NHL Betting This Season',
    category: 'Sportsbook',
    excerpt: 'Sportsbooks play a vital role in enhancing the excitement of NFL and NHL betting for Canadian fans.',
    date: '2025-08-29',
  },
  {
    slug: 'rise-of-live-dealer-games-in-canada',
    title: 'The Rise of Live Dealer Games in Canadian Online Casinos',
    category: 'Casino Games',
    excerpt: 'Many players in Canada are increasingly drawn to live dealer games, combining online convenience with a real table feel.',
    date: '2025-08-29',
  },
  {
    slug: 'ontario-online-casino-handle-hits-89-as-sports-betting-slows',
    title: 'Ontario Online Casino Handle Jumps to 89% as Sports Betting Slows',
    category: 'Casino',
    excerpt: 'Ontario’s online casino handle leapt to 89% of the market while sports betting cooled.',
    date: '2025-08-29',
  },
  {
    slug: 'canada-s-online-poker-shows-steady-growth',
    title: 'Online Poker in Canada Sees Steady Growth – Here’s Why',
    category: 'Casino Games',
    excerpt: 'The rising popularity of online poker in Canada has been building steadily over recent years.',
    date: '2025-08-29',
  },
  {
    slug: 'esports-betting-in-canada-trend-or-fad',
    title: 'Esports Betting in Canada – Growing Trend or Passing Fad?',
    category: 'Sports Betting',
    excerpt: 'Canadians are increasingly drawn to the world of esports betting, captivated by its dynamic, fast-paced nature.',
    date: '2025-08-29',
  },
];

export const RANKING_CRITERIA: { title: string; body: string }[] = [
  {
    title: 'Security & Licensing',
    body: 'Our number one check. We verify every operator holds a valid licence from a recognised regulator — iGaming Ontario/AGCO, the Malta Gaming Authority, the UK Gambling Commission or the Kahnawake Gaming Commission — before it can appear on our list.',
  },
  {
    title: 'Customer Support',
    body: 'Every recommended site offers 24/7 live chat plus email and phone support, so help is always a few clicks away when you need answers about products, payments or your account.',
  },
  {
    title: 'Game Content',
    body: 'We look for a deep library — blackjack, roulette, craps, keno, video poker and baccarat, plus live casino — powered by top providers like NetEnt, Evolution, Pragmatic Play, Play’n GO, Red Tiger and Big Time Gaming.',
  },
  {
    title: 'Promotions & Bonuses',
    body: 'A top-ranked site needs a strong welcome bonus, ongoing promotions, a rewarding VIP programme, tournaments and enhanced odds — with fair, clearly-stated wagering terms.',
  },
  {
    title: 'Deposits & Withdrawals',
    body: 'We want a wide range of secure, fast banking options in Canadian dollars: Visa, Mastercard, Interac, PayPal, Neteller, ecoPayz, PaysafeCard and bank transfer — with no nasty currency conversions.',
  },
  {
    title: 'Jackpots',
    body: 'The best sites offer big progressive jackpots — Mega Moolah, Mega Fortune and Arabian Nights among them — that can be won from a minimum bet.',
  },
];

export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: 'Is online gambling legal in Canada?',
    a: 'Yes. You can play your favourite gaming products online safely and legally. Ontario was the first province to locally regulate online gambling (April 2022 via the AGCO and iGaming Ontario), and other provinces are expected to follow. Single-event sports betting became legal nationwide in June 2021 under Bill C-218, giving each province authority to set its own framework.',
  },
  {
    q: 'What are the payouts / RTP at Canadian casinos and sportsbooks?',
    a: 'Sportsbook payouts typically sit around 95–98% depending on the sport and league, with the highest returns on popular markets like the NBA, NHL and NFL. Online casino RTP can reach 99% — online slots are highest, followed by European roulette at 97.3% and American roulette at 94.7%.',
  },
  {
    q: 'What is a welcome bonus and how is it converted?',
    a: 'A welcome bonus is a match offer for new customers, usually 100% up to around C$1,000. It converts via wagering (turnover): sportsbooks commonly require 5–10x within 30 days on odds of at least -200, while casino wagering typically ranges 25–35x. Casino bonuses are often released in batches as you hit turnover milestones.',
  },
  {
    q: 'Which site handles withdrawals the quickest?',
    a: 'From our testing, JackpotCity is the quickest for casino withdrawals, closely followed by 888 Casino. For sports betting, the fastest payouts came from 888Sport and Unibet.',
  },
  {
    q: 'Do I need to pay taxes on gambling winnings?',
    a: 'Generally no — recreational gambling winnings from reputable sites are not taxed in Canada. The exceptions are interest earned on winnings, or the rare case where gambling is your sole, substantial source of income and could be treated as business income.',
  },
  {
    q: 'What is the legal gambling age in Canada?',
    a: 'You must be at least 18 (19 in some provinces) to gamble online or offline in Canada, depending on your province’s legal age.',
  },
];

export const EDITORS: { name: string; city: string; role: string }[] = [
  { name: 'Jane Williams', city: 'Toronto', role: 'Content Editor covering online gambling news, legal updates and financial reports.' },
  { name: 'David Andersen', city: 'Vancouver', role: 'Content Editor for in-depth operator reviews, in frequent contact with regulators.' },
  { name: 'Lisa Davids', city: 'Montreal', role: 'Head of Content overseeing all reviews and editorial operations.' },
];
