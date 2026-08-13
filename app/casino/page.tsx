import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import { CASINOS, topByRating } from '@/lib/operators';
import { YEAR } from '@/lib/site';

export const metadata: Metadata = {
  title: `Best Real Money Online Casinos in Canada ${YEAR}`,
  description:
    'Compare the best real-money online casinos in Canada, expert-rated for licensing, bonuses, game selection, payout speed and mobile play.',
  alternates: { canonical: '/casino' },
};

const CHECKLIST = [
  {
    h: 'Bonuses & Promotions',
    p: 'Compare welcome bonuses, free spins, loyalty programs, wagering requirements and bonus expiry before you commit.',
  },
  {
    h: 'Banking & Withdrawal Speed',
    p: 'Look for CAD support, Interac and e-wallets, fast withdrawals, clear limits and no hidden fees.',
  },
  {
    h: 'Software & Games',
    p: 'A deep library from providers like NetEnt, Evolution and Pragmatic Play, plus live dealer tables and audited RNGs.',
  },
  {
    h: 'Security & Licensing',
    p: 'Choose casinos licensed by the AGCO, MGA, UKGC or Kahnawake, with SSL encryption and eCOGRA-certified fair play.',
  },
  {
    h: 'Mobile Experience',
    p: 'Smooth iOS/Android play in-browser or via app, with the full game library and fast load times.',
  },
  {
    h: 'Customer Support',
    p: '24/7 live chat, email and phone, quick response times and a genuinely useful FAQ.',
  },
];

export default function CasinoPage() {
  const ranked = topByRating(CASINOS, CASINOS.length);
  return (
    <>
      <Breadcrumbs items={[{ label: 'Online Casinos' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Reviewed & Ranked</div>
            <h1>Best Real Money Online Casinos in Canada</h1>
            <p className="lead text-muted">
              Playing at online casinos has become a favourite pastime for Canadians. With so many sites
              available, choosing the right one is hard — so our editors have done the work. Here are the
              top-rated real-money casinos for Canadian players, updated for {YEAR}.
            </p>
          </div>
          <div className="disclosure mb-2">
            Advertising disclosure: we may earn a commission from operators listed here. It never influences our
            independent ratings.
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
            <h2>What to Consider When Picking an Online Casino</h2>
            <p className="text-muted">
              Six things our reviewers check on every site — and you should too.
            </p>
          </div>
          <div className="grid grid-3">
            {CHECKLIST.map((c) => (
              <div key={c.h} className="feature">
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Popular casino guides</h2>
            <p className="text-muted">Go deeper on bonuses, banking, provinces and more.</p>
          </div>
          <div className="grid grid-3">
            <Link href="/online-casinos-ontario" className="feature"><h3>Ontario Casinos</h3><p>Best regulated casinos for Ontario players.</p></Link>
            <Link href="/online-casinos-alberta" className="feature"><h3>Alberta Casinos</h3><p>Top online casinos for Alberta players.</p></Link>
            <Link href="/casino-bonuses" className="feature"><h3>Casino Bonuses</h3><p>Best offers and how to read the terms.</p></Link>
            <Link href="/no-deposit-bonus-canada" className="feature"><h3>No Deposit Bonuses</h3><p>Free bonuses with no deposit required.</p></Link>
            <Link href="/interac-casinos" className="feature"><h3>Interac Casinos</h3><p>Canada’s favourite casino payment method.</p></Link>
            <Link href="/fastest-payout-casinos" className="feature"><h3>Fastest Payout Casinos</h3><p>Get your winnings quickly — speed tested.</p></Link>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container prose">
          <h2>Online casinos in Canada: what to expect</h2>
          <p>
            The best Canadian online casinos combine a valid licence, a large and fair game library, fast CAD
            payouts and responsive support. Online slots offer the highest return to player — often up to 99% —
            followed by European roulette (97.3%) and classic table games like blackjack, where correct basic
            strategy keeps the house edge under 1%.
          </p>
          <p>
            Always play within your means, read bonus terms carefully, and stick to licensed operators. Every
            casino on this page has been vetted by our editorial team for security, fairness and player
            protection. Remember: you must be 19+ (18+ in some provinces) to play, and free confidential help is
            available if gambling stops being fun.
          </p>
        </div>
      </section>
    </>
  );
}
