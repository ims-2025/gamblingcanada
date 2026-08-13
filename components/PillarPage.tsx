import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import OperatorCard from '@/components/OperatorCard';
import { getOperator, CASINOS, SPORTSBOOKS, topByRating } from '@/lib/operators';
import { SITE } from '@/lib/site';
import type { Pillar } from '@/lib/pillars/_types';

export function pillarMetadata(p: Pillar): Metadata {
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: { canonical: `/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description: p.metaDescription },
  };
}

export default function PillarPage({ pillar: p }: { pillar: Pillar }) {
  const ops = (() => {
    if (!p.operators) return [];
    if (p.operators.slugs) return p.operators.slugs.map(getOperator).filter(Boolean) as NonNullable<ReturnType<typeof getOperator>>[];
    const pool = p.operators.type === 'sportsbook' ? SPORTSBOOKS : CASINOS;
    return topByRating(pool, p.operators.count ?? 5);
  })();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const updated = new Date(p.updated).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={p.breadcrumb} />

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            {p.eyebrow && <div className="eyebrow">{p.eyebrow}</div>}
            <h1>{p.h1}</h1>
            <p className="lead text-muted">{p.lead}</p>
            <p className="news-meta text-muted" style={{ margin: '4px 0 0' }}>
              By {p.author} · Last updated {updated}
            </p>
          </div>

          {ops.length > 0 && (
            <>
              <div className="disclosure mb-2">
                Advertising disclosure: we may earn a commission when you sign up through links on this page. It
                never affects our independent ratings.
              </div>
              <h2 style={{ marginBottom: 16 }}>{p.operators!.heading}</h2>
              <div className="op-list">
                {ops.map((op, i) => (
                  <OperatorCard key={op.slug} op={op} rank={i + 1} priority={i === 0} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose">
          {p.sections.map((s) => (
            <div key={s.h2}>
              <h2>{s.h2}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.html }} />
            </div>
          ))}

          <h2>Frequently asked questions</h2>
          <div className="faq mt-2">
            {p.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>

          {p.related.length > 0 && (
            <>
              <h2>Related guides</h2>
              <ul>
                {p.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href}>{r.label}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="disclosure mt-3">
            {SITE.name} provides independent information only. You must be 19+ (18+ in some provinces) to gamble in
            Canada. If gambling stops being fun, free confidential help is available in every province.
          </div>
        </div>
      </section>
    </>
  );
}
