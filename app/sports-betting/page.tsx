import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import { SPORTSBOOKS, topByRating } from '@/lib/operators';

export const metadata: Metadata = {
  title: 'Best Real Money Online Sportsbooks in Canada 2025',
  description:
    'Compare the best online sportsbooks in Canada for NHL, NFL, NBA and soccer betting. Rated for odds, markets, live betting, bonuses and payout speed.',
  alternates: { canonical: '/sports-betting' },
};

const FACTORS = [
  { h: 'Bonuses & Promotions', p: 'Welcome offers, free bets and reloads — always read the wagering terms before claiming.' },
  { h: 'Payment Methods', p: 'A range of fast, low-fee options including Interac, cards and e-wallets in Canadian dollars.' },
  { h: 'Sports Offering', p: 'Deep coverage from the NHL, NFL and NBA to soccer, tennis and niche markets.' },
  { h: 'User Experience', p: 'A fast, intuitive website and mobile app that make finding markets and placing bets effortless.' },
  { h: 'Live Betting', p: 'In-play markets with responsive odds so you can bet as the momentum shifts.' },
  { h: 'Security & Licensing', p: 'Regulated by the AGCO, MGA, UKGC or Kahnawake for fair, transparent, protected betting.' },
];

export default function SportsBettingPage() {
  const ranked = topByRating(SPORTSBOOKS, SPORTSBOOKS.length);
  return (
    <>
      <Breadcrumbs items={[{ label: 'Sports Betting' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Reviewed & Ranked</div>
            <h1>Best Real Money Online Sportsbooks in Canada</h1>
            <p className="lead text-muted">
              Online sports betting is more popular than ever in Canada. Since single-event wagering became legal
              in 2021, it’s easier than ever to bet on hockey, football, basketball and soccer. Here are our
              top-rated Canadian sportsbooks for 2025.
            </p>
          </div>
          <div className="flex gap-2 wrap mb-2">
            <Link href="/sports-betting/ontario" className="badge badge-blue">Ontario betting →</Link>
            <Link href="/sports-betting/alberta" className="badge badge-blue">Alberta betting →</Link>
            <Link href="/sports-betting-understanding-the-basics" className="badge badge-gray">Betting basics →</Link>
          </div>
          <div className="op-list">
            {ranked.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head">
            <h2>What to Consider When Picking a Sportsbook</h2>
          </div>
          <div className="grid grid-3">
            {FACTORS.map((f) => (
              <div key={f.h} className="feature">
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>What to expect from online sports betting in Canada</h2>
          <p>
            Online sports betting in Canada is legal provided the sportsbook is licensed by a provincial
            regulator or a recognised authority such as the Kahnawake Gaming Commission. Most Canadian
            sportsbooks cover hockey, football, basketball and soccer, plus niche sports like tennis and cricket,
            with everything from simple moneylines to prop and futures bets.
          </p>
          <p>
            Live (in-play) betting adds an extra layer of excitement, letting you wager while a game is underway
            and take advantage of shifting odds. Typical sportsbook payouts sit around 95–98%, with the sharpest
            odds on the most popular leagues. As always, bet responsibly and only with licensed operators.
          </p>
        </div>
      </section>
    </>
  );
}
