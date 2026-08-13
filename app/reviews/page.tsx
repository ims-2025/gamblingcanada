import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import { OPERATORS, topByRating } from '@/lib/operators';
import { YEAR } from '@/lib/site';

export const metadata: Metadata = {
  title: `Independent Online Casino & Sportsbook Reviews (${YEAR})`,
  description:
    'Independent, expert reviews and ratings of online casinos and sportsbooks for Canadian players — covering licensing, payouts, games, support and security.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  const ranked = topByRating(OPERATORS, OPERATORS.length);
  return (
    <>
      <Breadcrumbs items={[{ label: 'Reviews' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Independent Ratings</div>
            <h1>Online Sportsbook & Casino Reviews</h1>
            <p className="lead text-muted">
              In a crowded market, knowing which platforms are reliable, fair and safe is hard. Our independent
              reviews cut through the marketing noise — assessing user experience, payout rates, game selection,
              security, support and licensing — so you can choose with confidence.
            </p>
          </div>
          <h2 style={{ marginBottom: 16 }}>Our latest operator reviews</h2>
          <div className="op-list">
            {ranked.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
