import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { GAMES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Casino Games Guides — Slots, Blackjack, Roulette & More',
  description:
    'Learn how to play and win at Canada’s most popular casino games. Rules, odds, RTP and strategy for slots, blackjack, roulette, poker, video poker and bingo.',
  alternates: { canonical: '/games' },
};

export default function GamesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Games' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Learn to Play</div>
            <h1>Casino Game Guides for Canadian Players</h1>
            <p className="lead text-muted">
              From the highest-RTP slots to low-house-edge blackjack, our guides cover the rules, odds and
              strategy you need to play smarter.
            </p>
          </div>
          <div className="grid grid-3">
            {GAMES.map((g) => (
              <Link key={g.slug} href={`/games/${g.slug}`} className="game-card">
                <div className="game-ic" aria-hidden="true">{g.icon}</div>
                <h3>{g.name}</h3>
                <p>{g.excerpt}</p>
                <div className="game-meta">
                  {g.rtp && <span className="badge badge-green">RTP {g.rtp}</span>}
                  {g.difficulty && <span className="badge badge-gray">{g.difficulty}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
