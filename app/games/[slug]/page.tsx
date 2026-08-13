import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { GAMES, getGame } from '@/lib/content';
import { getGameGuide } from '@/lib/gameGuides';
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
  const guide = getGameGuide(g.slug);
  const topCasinos = topByRating(CASINOS, 3);

  const faqSchema = guide
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
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
          {guide ? (
            <div dangerouslySetInnerHTML={{ __html: guide.body }} />
          ) : (
            <p>
              This guide covers playing {g.name.toLowerCase()} at Canadian online casinos. Compare the top-rated
              options below.
            </p>
          )}

          <h2>Where to play {g.name.toLowerCase()} in Canada</h2>
          <div className="op-list mt-2">
            {topCasinos.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} />
            ))}
          </div>

          {guide && (
            <>
              <h2>{g.name} FAQ</h2>
              <div className="faq mt-2">
                {guide.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <div className="faq-a">{f.a}</div>
                  </details>
                ))}
              </div>
            </>
          )}

          <p className="mt-3">
            Explore more <Link href="/games">game guides</Link> or see our{' '}
            <Link href="/casino">best online casinos</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
