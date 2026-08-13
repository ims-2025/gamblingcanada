import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { GAMES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Top 10 Most Searched Online Casino Games in Canada 2026',
  description:
    'The most popular online casino games among Canadian players in 2026 — from slots and blackjack to roulette and poker, with RTP and where to play.',
  alternates: { canonical: '/top-10-most-searched-online-casino-games-in-canada' },
};

const TOP10: { rank: number; name: string; note: string; href?: string }[] = [
  { rank: 1, name: 'Online Slots', note: 'By far the most played category, with the highest RTP in the casino — often up to 99%.', href: '/games/slots' },
  { rank: 2, name: 'Blackjack', note: 'Correct basic strategy brings the house edge under 1%, one of the best odds anywhere.', href: '/games/blackjack' },
  { rank: 3, name: 'Roulette', note: 'European roulette (97.3% RTP) is the smarter choice over American (94.7%).', href: '/games/roulette' },
  { rank: 4, name: 'Live Dealer Games', note: 'Real croupiers streamed in HD — the fastest-growing category in Canada.' },
  { rank: 5, name: 'Poker', note: 'A game of skill against other players, with soft cash games and big tournaments.', href: '/games/poker' },
  { rank: 6, name: 'Video Poker', note: 'Full-pay machines offer some of the highest returns when played correctly.', href: '/games/video-poker' },
  { rank: 7, name: 'Baccarat', note: 'Simple, fast and low house edge — a live-casino staple.' },
  { rank: 8, name: 'Bingo', note: 'A social, low-stakes favourite with chat games and jackpot rooms.', href: '/games/bingo' },
  { rank: 9, name: 'Craps', note: 'The most exciting dice game, with a wide range of bets and good odds on the line.' },
  { rank: 10, name: 'Keno', note: 'A lottery-style game that’s easy to pick up and popular for casual play.' },
];

export default function Top10GamesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Games', href: '/games' }, { label: 'Top 10 Most Searched' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Player Trends</div>
            <h1>Top 10 Most Searched Online Casino Games in Canada</h1>
            <p className="lead text-muted">
              Which casino games are Canadians playing most? Here’s our ranking of the most popular online casino
              games in 2026, with a note on the odds and where to learn each one.
            </p>
          </div>

          <div className="op-list">
            {TOP10.map((g) => (
              <article key={g.rank} className="op-card" style={{ gridTemplateColumns: '44px 1fr' }}>
                <div className="op-rank">{g.rank}</div>
                <div className="op-body">
                  <h3 style={{ marginBottom: 4 }}>
                    {g.href ? <Link href={g.href}>{g.name}</Link> : g.name}
                  </h3>
                  <p className="op-blurb" style={{ margin: 0 }}>{g.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container prose">
          <h2>Learn to play — and play smart</h2>
          <p>
            Popularity isn’t the same as value. Slots top the list on search volume and offer the highest RTP,
            while blackjack and video poker reward skill with some of the lowest house edges in the casino. Our
            game guides break down the rules, odds and strategy for each — start with{' '}
            <Link href="/games/slots">slots</Link>, <Link href="/games/blackjack">blackjack</Link> and{' '}
            <Link href="/games/roulette">roulette</Link>.
          </p>
          <p>
            Ready to play? Compare our <Link href="/casino">best online casinos in Canada</Link> and read our
            independent <Link href="/reviews">operator reviews</Link>. Remember to play responsibly — you must be
            19+ (18+ in some provinces).
          </p>
          <div className="grid grid-3 mt-3">
            {GAMES.map((g) => (
              <Link key={g.slug} href={`/games/${g.slug}`} className="game-card">
                <div className="game-ic" aria-hidden="true">{g.icon}</div>
                <h3>{g.name}</h3>
                <p>{g.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
