import Link from 'next/link';
import type { Metadata } from 'next';
import OperatorCard from '@/components/OperatorCard';
import JsonLd from '@/components/JsonLd';
import { Check, ShieldCheck, Scale, Users } from '@/components/icons';
import { SITE } from '@/lib/site';
import { CASINOS, SPORTSBOOKS, topByRating } from '@/lib/operators';
import { RANKING_CRITERIA, HOME_FAQ, GAMES, EDITORS } from '@/lib/content';
import { getAllNews } from '@/lib/news';

export const metadata: Metadata = {
  title: `${SITE.name} — Sportsbooks & Online Casinos Canada 2025`,
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const topCasinos = topByRating(CASINOS, 5);
  const topSportsbooks = topByRating(SPORTSBOOKS, 5);
  const latestNews = getAllNews().slice(0, 6);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="eyebrow">Independent • Est. {SITE.established} • 19+</div>
          <h1>Top Legal Online Betting Sites for Canada 2025</h1>
          <p className="lead">
            Expert-reviewed online casinos and sportsbooks for Canadian players. Every operator is checked for
            licensing, payout speed, game quality and support before it makes our list — so you can play safe,
            legal and with confidence.
          </p>
          <div className="flex gap-2 wrap mt-3">
            <Link href="/casino" className="btn btn-primary">
              Best Online Casinos
            </Link>
            <Link href="/sports-betting" className="btn btn-ghost">
              Best Sportsbooks
            </Link>
          </div>
          <div className="trust-row">
            <span className="trust-item">
              <ShieldCheck /> Licensed & regulated operators only
            </span>
            <span className="trust-item">
              <Check /> {SITE.operatorsReviewed} operators reviewed
            </span>
            <span className="trust-item">
              <Check /> CAD banking & Interac
            </span>
          </div>
        </div>
      </section>

      {/* TOP CASINOS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Editor’s Choice</div>
            <h2>Best Online Casinos in Canada</h2>
            <p className="text-muted">
              Our highest-rated real-money casinos this month, ranked by our editorial team across security,
              bonuses, game content and withdrawal speed.
            </p>
          </div>
          <div className="disclosure mb-2">
            Advertising disclosure: we may earn a commission when you sign up through links on this page. This
            never affects our ratings, which are editorially independent.
          </div>
          <div className="op-list">
            {topCasinos.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} priority={i === 0} />
            ))}
          </div>
          <div className="center mt-3">
            <Link href="/casino" className="btn btn-ghost">
              See all online casinos →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO / E-E-A-T */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head">
            <h2>Online Gambling in Canada — Casinos, Sportsbooks & Poker</h2>
          </div>
          <div className="prose">
            <p>
              Canada’s online gambling landscape has never been clearer. On 4 April 2022, Ontario became the
              first province to launch a fully regulated iGaming market, led by the Alcohol and Gaming
              Commission of Ontario (AGCO) and iGaming Ontario. That framework covers online casinos, sports
              betting, poker and bingo — and other provinces are expected to follow.
            </p>
            <p>
              The other landmark change came in June 2021, when Bill C-218 legalised single-event sports betting
              nationwide, handing each province the authority to build its own regulatory framework. Today,
              Canadian players can enjoy their favourite games safely and legally — the key is choosing operators
              that are properly licensed. That’s exactly what we help you do.
            </p>
          </div>
        </div>
      </section>

      {/* TOP SPORTSBOOKS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Sports Betting</div>
            <h2>Top Canadian Sportsbooks</h2>
            <p className="text-muted">
              The best places to bet on the NHL, NFL, NBA and soccer — ranked for odds, live betting, markets and
              payout speed.
            </p>
          </div>
          <div className="op-list">
            {topSportsbooks.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} />
            ))}
          </div>
          <div className="center mt-3">
            <Link href="/sports-betting" className="btn btn-ghost">
              See all sportsbooks →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE RANK */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Our Methodology</div>
            <h2>How We Rank the Best Gambling Sites</h2>
            <p className="lead text-muted">
              For over {SITE.yearsInBusiness} years our editors have reviewed {SITE.operatorsReviewed} casinos,
              sportsbooks, bingo and poker sites. Every ranking rests on six independent criteria.
            </p>
          </div>
          <div className="grid grid-3">
            {RANKING_CRITERIA.map((c) => (
              <div key={c.title} className="feature">
                <h3>
                  <span className="ic">
                    <Check />
                  </span>
                  {c.title}
                </h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Learn to Play</div>
            <h2>Casino Games & Strategy Guides</h2>
            <p className="text-muted">Rules, odds and winning strategy for Canada’s most popular games.</p>
          </div>
          <div className="grid grid-3">
            {GAMES.map((g) => (
              <Link key={g.slug} href={`/games/${g.slug}`} className="game-card">
                <div className="game-ic" aria-hidden="true">
                  {g.icon}
                </div>
                <h3>{g.name}</h3>
                <p>{g.excerpt}</p>
                <div className="game-meta">
                  {g.rtp && <span className="badge badge-green">RTP {g.rtp}</span>}
                  {g.difficulty && <span className="badge badge-gray">{g.difficulty}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section bg-navy">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="num">{SITE.yearsInBusiness}+</div>
              <div className="lbl">Years reviewing the market</div>
            </div>
            <div className="stat">
              <div className="num">{SITE.operatorsReviewed}</div>
              <div className="lbl">Operators reviewed</div>
            </div>
            <div className="stat">
              <div className="num">6</div>
              <div className="lbl">Independent ranking criteria</div>
            </div>
            <div className="stat">
              <div className="num">13</div>
              <div className="lbl">Provinces & territories covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Latest</div>
            <h2>Canadian Gambling News</h2>
          </div>
          <div className="grid grid-3">
            {latestNews.map((n) => (
              <article key={n.slug} className="news-card">
                <div className="news-body">
                  <span className="badge badge-blue">{n.category}</span>
                  <h3>
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>
                    {n.excerpt}
                  </p>
                  <time className="news-meta" dateTime={n.date}>
                    {new Date(n.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
              </article>
            ))}
          </div>
          <div className="center mt-3">
            <Link href="/news" className="btn btn-ghost">
              All news →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">FAQ</div>
            <h2>Canadian Online Gambling — Your Questions Answered</h2>
          </div>
          <div className="faq">
            {HOME_FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / EDITORS */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">
              <Users /> About Us
            </div>
            <h2>We Find Safe, Best-in-Class Sites for Canadians</h2>
            <p className="lead text-muted">
              For a decade our editorial team has followed the Canadian gambling scene, publishing news, reviews
              and strategy so players stay informed and protected.
            </p>
          </div>
          <div className="grid grid-3">
            {EDITORS.map((e) => (
              <div key={e.name} className="feature">
                <h3 style={{ marginBottom: 2 }}>{e.name}</h3>
                <div className="badge badge-gray mb-2">{e.city}</div>
                <p>{e.role}</p>
              </div>
            ))}
          </div>
          <div className="center mt-3 flex gap-2 wrap" style={{ justifyContent: 'center' }}>
            <span className="trust-item">
              <Scale /> Editorially independent — ratings are never paid for
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
