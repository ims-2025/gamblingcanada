import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Scale, ShieldCheck, Check } from '@/components/icons';
import { EDITORS } from '@/lib/content';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — Independent Canadian Gambling Experts',
  description:
    'For over a decade, OnlineGamblingCanada.com has published independent casino reviews, sportsbook ratings and gambling news for Canadian players.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About' }]} />
      <section className="section-tight">
        <div className="container prose">
          <div className="eyebrow">About Us</div>
          <h1>We find safe, best-in-class gambling sites for Canadians</h1>
          <p className="lead">
            For the last {SITE.yearsInBusiness} years we’ve followed the gambling scene in Canada — publishing
            news articles, casino reviews and strategy guides that keep Canadians up to date on both online and
            offline gambling in our beautiful country.
          </p>
          <p>
            We’ve reviewed {SITE.operatorsReviewed} online casinos, sportsbooks, bingo and poker sites against six
            independent criteria: security and licensing, customer support, game content, promotions, banking, and
            jackpots. Our ratings are editorially independent and are never paid for.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid grid-3">
          <div className="feature">
            <h3><span className="ic"><ShieldCheck /></span>Independent</h3>
            <p>We only recommend licensed operators, and our rankings can’t be bought.</p>
          </div>
          <div className="feature">
            <h3><span className="ic"><Check /></span>Experienced</h3>
            <p>A decade of hands-on testing across {SITE.operatorsReviewed} operators.</p>
          </div>
          <div className="feature">
            <h3><span className="ic"><Scale /></span>Responsible</h3>
            <p>We put player safety and responsible gambling at the centre of everything.</p>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <h2>Meet the editorial team</h2>
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
        </div>
      </section>
    </>
  );
}
