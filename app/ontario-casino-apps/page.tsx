import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import { CASINOS, topByRating } from '@/lib/operators';

export const metadata: Metadata = {
  title: 'Best Ontario Casino Apps 2026 — Top Regulated iOS & Android',
  description:
    'The best online casino apps for Ontario players in 2026. Regulated by iGaming Ontario, with top slots, live dealer games, Interac banking and fast payouts.',
  alternates: { canonical: '/ontario-casino-apps' },
};

export default function OntarioCasinoAppsPage() {
  const ranked = topByRating(CASINOS, 4);
  return (
    <>
      <Breadcrumbs items={[{ label: 'Online Casinos', href: '/casino' }, { label: 'Ontario Casino Apps' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Ontario • iGaming Ontario / AGCO</div>
            <h1>Best Ontario Casino Apps</h1>
            <p className="lead text-muted">
              Ontario is home to Canada’s first regulated online gambling market, and the best casino apps give
              players a fast, secure, mobile-first way to play. Here are our top-rated mobile casinos for Ontario
              players in 2026.
            </p>
          </div>
          <div className="disclosure mb-2">
            Advertising disclosure: we may earn a commission when you sign up through links on this page. It
            never affects our ratings.
          </div>
          <div className="op-list">
            {ranked.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container prose">
          <h2>Why Ontario is different</h2>
          <p>
            Since April 2022, Ontario players have been able to play at operators licensed by iGaming Ontario and
            the AGCO. That means stronger player protection, local dispute resolution and responsible-gambling
            tools built in. Regulated apps must meet these standards, so you get accountability you simply don’t
            have with unregulated offshore sites. Learn more in our{' '}
            <Link href="/sports-betting/ontario">Ontario betting guide</Link> and our overview of the{' '}
            <Link href="/casino">best online casinos in Canada</Link>.
          </p>
          <h2>App or mobile browser?</h2>
          <p>
            Many Ontario casinos work perfectly in your phone browser with no download, while others offer native
            iOS and Android apps. Both give you the full game library; the choice comes down to convenience. For a
            national view of the best mobile play, see our{' '}
            <Link href="/best-mobile-casinos-in-canada">best mobile casinos in Canada</Link> guide. You must be
            19+ to play in Ontario.
          </p>
        </div>
      </section>
    </>
  );
}
