import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sports Betting: Understanding the Basics',
  description:
    'New to sports betting in Canada? Learn the essentials — odds formats, bet types, bankroll management and how to read a line — in our beginner’s guide.',
  alternates: { canonical: '/sports-betting-understanding-the-basics' },
};

export default function BasicsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Sports Betting', href: '/sports-betting' }, { label: 'Understanding the Basics' }]} />
      <section className="section-tight">
        <div className="container prose">
          <div className="eyebrow">Beginner’s Guide</div>
          <h1>Sports Betting: Understanding the Basics</h1>
          <p className="lead">
            A plain-English introduction to online sports betting for Canadians — the odds, the bet types and the
            habits that keep it fun and under control.
          </p>

          <h2>How odds work</h2>
          <p>
            Canadian sportsbooks usually show odds in the American format. A minus number (e.g. −150) is the
            favourite and shows how much you must stake to win $100; a plus number (e.g. +130) is the underdog and
            shows how much you win on a $100 stake. Many sites let you switch to decimal odds, which some players
            find easier.
          </p>

          <h2>Common bet types</h2>
          <ul>
            <li><strong>Moneyline:</strong> a straight bet on who wins.</li>
            <li><strong>Spread / puck line:</strong> betting on the margin of victory.</li>
            <li><strong>Totals (over/under):</strong> betting on the combined score.</li>
            <li><strong>Props:</strong> bets on specific events, like a player’s points or goals.</li>
            <li><strong>Parlays:</strong> combining multiple bets for a bigger payout — and higher risk.</li>
            <li><strong>Live / in-play:</strong> betting while the game is underway.</li>
          </ul>

          <h2>Bankroll & responsible play</h2>
          <p>
            Set a budget you can afford to lose and treat it as entertainment, not income. Never chase losses.
            Every licensed Canadian sportsbook offers deposit limits, time-outs and self-exclusion — use them.
            You must be 19+ (18+ in some provinces) to bet.
          </p>

          <p className="mt-2">
            Ready to start? Compare our <Link href="/sports-betting">top Canadian sportsbooks</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
