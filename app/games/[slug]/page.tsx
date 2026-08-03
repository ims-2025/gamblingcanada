import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { GAMES, getGame } from '@/lib/content';
import { CASINOS, topByRating } from '@/lib/operators';
import OperatorCard from '@/components/OperatorCard';

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGame(params.slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/games/${g.slug}` },
  };
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const g = getGame(params.slug);
  if (!g) notFound();
  const topCasinos = topByRating(CASINOS, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Games', href: '/games' }, { label: g.name }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Game Guide</div>
            <h1>{g.title}</h1>
            <p className="lead text-muted">{g.excerpt}</p>
            <div className="game-meta mt-1">
              {g.rtp && <span className="badge badge-green">RTP {g.rtp}</span>}
              {g.difficulty && <span className="badge badge-gray">Difficulty: {g.difficulty}</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose">
          <p>
            This guide is a starting point for playing {g.name.toLowerCase()} at Canadian online casinos. Our
            editorial team is expanding each game guide with detailed rules, odds tables, strategy charts and the
            best places to play — see the content roadmap for what’s coming next.
          </p>
          <h2>Where to play {g.name.toLowerCase()} in Canada</h2>
          <div className="op-list mt-2">
            {topCasinos.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} />
            ))}
          </div>
          <p className="mt-3">
            Explore more <Link href="/games">game guides</Link> or see our{' '}
            <Link href="/casino">best online casinos</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
