import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import { SPORTSBOOKS, topByRating } from '@/lib/operators';

const PROVINCES: Record<string, { name: string; regulator: string; body: string }> = {
  ontario: {
    name: 'Ontario',
    regulator: 'iGaming Ontario / AGCO',
    body:
      'Ontario launched Canada’s first regulated online gambling market on 4 April 2022. Sportsbooks operating under iGaming Ontario and the AGCO are fully licensed for Ontario residents, offering strong player protections, local dispute resolution and responsible-gambling tools.',
  },
  alberta: {
    name: 'Alberta',
    regulator: 'AGLC',
    body:
      'Alberta operates PlayAlberta through the AGLC and is moving toward an expanded regulated iGaming market. Albertans can bet on single events legally, with a growing range of licensed and offshore options to compare.',
  },
};

export function generateStaticParams() {
  return Object.keys(PROVINCES).map((province) => ({ province }));
}

export function generateMetadata({ params }: { params: { province: string } }): Metadata {
  const p = PROVINCES[params.province];
  if (!p) return {};
  return {
    title: `Best Sports Betting Sites in ${p.name} 2025`,
    description: `Compare the best legal online sportsbooks in ${p.name}. Odds, markets, bonuses and payout speed, reviewed for ${p.name} bettors.`,
    alternates: { canonical: `/sports-betting/${params.province}` },
  };
}

export default function ProvincePage({ params }: { params: { province: string } }) {
  const p = PROVINCES[params.province];
  if (!p) notFound();
  const ranked = topByRating(SPORTSBOOKS, SPORTSBOOKS.length);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Sports Betting', href: '/sports-betting' }, { label: p.name }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{p.regulator}</div>
            <h1>Best Sports Betting Sites in {p.name}</h1>
            <p className="lead text-muted">{p.body}</p>
          </div>
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
