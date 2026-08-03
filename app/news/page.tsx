import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NEWS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Canadian Online Gambling News & Market Updates',
  description:
    'The latest online gambling news for Canada — casino launches, sports betting trends, regulation updates and provincial market data.',
  alternates: { canonical: '/news' },
};

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'News' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Latest</div>
            <h1>Canadian Gambling News</h1>
            <p className="lead text-muted">
              Regulation, market data and industry trends — reported by our editorial team.
            </p>
          </div>
          <div className="grid grid-3">
            {NEWS.map((n) => (
              <article key={n.slug} className="news-card">
                <div className="news-body">
                  <span className="badge badge-blue">{n.category}</span>
                  <h3>
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>{n.excerpt}</p>
                  <time className="news-meta" dateTime={n.date}>
                    {new Date(n.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
