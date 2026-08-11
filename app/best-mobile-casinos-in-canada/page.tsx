import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import JsonLd from '@/components/JsonLd';
import { CASINOS, topByRating } from '@/lib/operators';
import { HOME_FAQ } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Best Mobile Casinos in Canada 2026 — Top Apps & Sites',
  description:
    'Compare the best mobile casinos in Canada for 2026. Play top slots and live dealer games on iOS and Android with fast Interac payments and CAD support.',
  alternates: { canonical: '/best-mobile-casinos-in-canada' },
};

const FACTORS = [
  { h: 'App vs. browser', p: 'Most top Canadian casinos run beautifully in your mobile browser with no download, while some offer dedicated iOS and Android apps for faster access and notifications.' },
  { h: 'Game selection on mobile', p: 'The best mobile casinos serve their full library — slots, live dealer, table games — optimised for touch, not a cut-down version.' },
  { h: 'Performance & load time', p: 'Smooth, fast-loading games matter most on mobile data. We favour operators with lightweight, responsive lobbies.' },
  { h: 'Interac & CAD banking', p: 'Fast deposits and withdrawals in Canadian dollars, with Interac and e-wallets that work seamlessly on a phone.' },
  { h: 'Mobile-first bonuses', p: 'Some sites run app-exclusive offers or free spins for mobile players — worth checking before you sign up.' },
  { h: 'Security on mobile', p: 'SSL encryption, licensed operators and mobile-friendly responsible-gambling tools like deposit limits and time-outs.' },
];

export default function MobileCasinosPage() {
  const ranked = topByRating(CASINOS, 5);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I play mobile casinos for real money in Canada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Canadians can play real-money mobile casino games legally at licensed operators, in your phone browser or via a dedicated app, with deposits and withdrawals in Canadian dollars.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to download an app to play on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Most top Canadian casinos are fully optimised for mobile browsers, so you can play instantly with no download. Some also offer native iOS and Android apps for convenience.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which payment methods work best on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Interac is the most popular option for Canadians, alongside Visa, Mastercard, e-wallets like Neteller, and increasingly crypto — all of which work smoothly on mobile.',
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: 'Online Casinos', href: '/casino' }, { label: 'Best Mobile Casinos' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Reviewed & Ranked</div>
            <h1>Best Mobile Casinos in Canada</h1>
            <p className="lead text-muted">
              Canadians play more on phones than ever, and the best mobile casinos deliver the full experience —
              top slots, live dealer tables and fast Interac payouts — right in your pocket. These are our
              highest-rated mobile-friendly casinos for 2026, tested on iOS and Android.
            </p>
          </div>
          <div className="disclosure mb-2">
            Advertising disclosure: we may earn a commission when you sign up through links on this page. It
            never affects our independent ratings.
          </div>
          <div className="op-list">
            {ranked.map((op, i) => (
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

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head">
            <h2>What makes a great mobile casino?</h2>
            <p className="text-muted">The six things our reviewers test on every phone and tablet.</p>
          </div>
          <div className="grid grid-3">
            {FACTORS.map((f) => (
              <div key={f.h} className="feature">
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Playing casino games on mobile in Canada</h2>
          <p>
            Mobile play has become the default for most Canadian casino players. Modern phones handle slots,
            live dealer streams and table games effortlessly, and the leading operators build their lobbies
            mobile-first. If you are choosing where to play, the same fundamentals apply as on desktop — a valid
            licence, fair bonus terms and fast CAD banking — with the added factors of app quality and load
            speed. For the full picture, see our <Link href="/casino">best online casinos</Link> guide and our{' '}
            <Link href="/games/slots">slots strategy guide</Link>.
          </p>
          <p>
            Ontario players can also access regulated apps from operators licensed by iGaming Ontario — see our{' '}
            <Link href="/ontario-casino-apps">Ontario casino apps guide</Link> for options available in the
            province. As always, you must be 19+ (18+ in some provinces) to play, and every site we recommend
            offers responsible-gambling tools you can manage right from your phone.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">FAQ</div>
            <h2>Mobile casino questions</h2>
          </div>
          <div className="faq">
            {HOME_FAQ.slice(0, 3).map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
