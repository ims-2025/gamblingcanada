import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import LogoImage from '@/components/LogoImage';
import { StarRating, Check } from '@/components/icons';
import { OPERATORS, getOperator } from '@/lib/operators';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return OPERATORS.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const op = getOperator(params.slug);
  if (!op) return {};
  const typeLabel = op.type === 'sportsbook' ? 'Sportsbook' : op.type === 'poker' ? 'Poker' : 'Casino';
  return {
    title: `${op.name} Review 2025 — Bonus, Rating & Verdict`,
    description: `Our expert ${op.name} review for Canadian players: ${op.bonus}. Rated ${op.rating}/5 for licensing, ${typeLabel.toLowerCase()} quality, banking and support.`,
    alternates: { canonical: `/reviews/${op.slug}` },
  };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const op = getOperator(params.slug);
  if (!op) notFound();

  const typeLabel = op.type === 'sportsbook' ? 'Sportsbook' : op.type === 'poker' ? 'Poker Room' : 'Casino';

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: op.name,
    },
    reviewRating: { '@type': 'Rating', ratingValue: op.rating, bestRating: 5 },
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    reviewBody: op.blurb,
  };

  return (
    <>
      <JsonLd data={reviewSchema} />
      <Breadcrumbs items={[{ label: 'Reviews', href: '/reviews' }, { label: op.name }]} />

      <section className="section-tight">
        <div className="container">
          <div className="card review-hero">
            <div className="op-logo">
              <LogoImage slug={op.slug} name={op.name} size={112} src={op.logo} />
            </div>
            <div>
              <div className="badge badge-blue mb-2">{typeLabel}</div>
              <h1 style={{ margin: '0 0 6px' }}>{op.name} Review</h1>
              <div className="flex items-center gap-2">
                <StarRating value={op.rating} />
                <span className="rating-num">{op.rating.toFixed(1)} / 5</span>
              </div>
              <p className="op-bonus mt-1" style={{ marginBottom: 0 }}>{op.bonus}</p>
            </div>
            <div className="rev-cta flex" style={{ flexDirection: 'column', gap: 10 }}>
              {op.playUrl.startsWith('http') ? (
                <a className="btn btn-primary" href={op.playUrl} target="_blank" rel="nofollow sponsored noopener">
                  Play at {op.name}
                </a>
              ) : (
                <Link className="btn btn-primary" href="/casino">
                  See top-rated casinos
                </Link>
              )}
              <span className="text-muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>
                19+ • Play responsibly
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose">
          <p className="lead">{op.blurb}</p>

          {(op.pros || op.cons) && (
            <div className="proscons mt-2 mb-2">
              {op.pros && (
                <div className="box pros">
                  <h4>Pros</h4>
                  <ul>
                    {op.pros.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
              {op.cons && (
                <div className="box cons">
                  <h4>Cons</h4>
                  <ul>
                    {op.cons.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {op.reviewBody && <div dangerouslySetInnerHTML={{ __html: op.reviewBody }} />}

          <h2>{op.name} at a glance</h2>
          <table className="info-table">
            <tbody>
              <tr>
                <th>Welcome bonus</th>
                <td>{op.bonus}</td>
              </tr>
              <tr>
                <th>Our rating</th>
                <td>{op.rating.toFixed(1)} / 5</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{typeLabel}</td>
              </tr>
              {op.established && (
                <tr>
                  <th>Established</th>
                  <td>{op.established}</td>
                </tr>
              )}
              {op.licences && (
                <tr>
                  <th>Licensing</th>
                  <td>{op.licences.join(', ')}</td>
                </tr>
              )}
              {op.payments && (
                <tr>
                  <th>Payments</th>
                  <td>{op.payments.join(', ')}</td>
                </tr>
              )}
            </tbody>
          </table>

          <h2>Our verdict</h2>
          <p>
            {op.name} earns a {op.rating.toFixed(1)}/5 from our editorial team. We tested account sign-up,
            bonus terms, banking and support, and cross-checked its licensing before recommending it to Canadian
            players. As with any operator, read the full bonus terms and only deposit what you can comfortably
            afford.
          </p>
          <p className="flex items-center gap-2" style={{ color: 'var(--green)', fontWeight: 700 }}>
            <Check /> Licence verified by our review team
          </p>

          {!op.reviewBody && (
            <>
              <h2>How we review {op.name}</h2>
              <p>
                Every operator on {SITE.name} is assessed against the same six criteria: security and licensing,
                customer support, game or market content, promotions and bonuses, banking and withdrawal speed, and
                overall user experience. We create a real account, test deposits and withdrawals in Canadian
                dollars, read the bonus terms in full and confirm the licence before publishing. Our ratings are
                editorially independent and are never paid for.
              </p>
              <p>
                Not sure {op.name} is right for you? Compare it against our{' '}
                {op.type === 'sportsbook' ? (
                  <Link href="/sports-betting">best Canadian sportsbooks</Link>
                ) : (
                  <Link href="/casino">best online casinos in Canada</Link>
                )}
                , browse all our <Link href="/reviews">operator reviews</Link>, or read the{' '}
                <Link href="/about">criteria behind every rating</Link>.
              </p>
            </>
          )}

          <div className="disclosure mt-2">
            Advertising disclosure: we may earn a commission if you sign up through our link. This never affects
            our rating.
          </div>
        </div>
      </section>
    </>
  );
}
