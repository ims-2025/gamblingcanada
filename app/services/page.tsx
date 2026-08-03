import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Services',
  description: 'What OnlineGamblingCanada.com offers Canadian players and industry partners — independent reviews, news, guides and responsible-gambling resources.',
  alternates: { canonical: '/services' },
};

const SERVICES = [
  { h: 'Independent Reviews', p: 'Hands-on, criteria-based reviews of casinos, sportsbooks and poker rooms for Canadian players.' },
  { h: 'Rankings & Comparisons', p: 'Up-to-date best-of lists so players can compare bonuses, odds and features at a glance.' },
  { h: 'Strategy Guides', p: 'How-to-play and strategy content across slots, blackjack, roulette, poker and more.' },
  { h: 'Gambling News', p: 'Coverage of Canadian regulation, market data and industry developments.' },
  { h: 'Responsible Gambling', p: 'Provincial helpline information and guidance to keep play safe and enjoyable.' },
  { h: 'Partnerships', p: 'Editorial partnerships with licensed operators — always clearly disclosed and never influencing ratings.' },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h1>What we do</h1>
            <p className="lead text-muted">
              We help Canadian players find safe, high-quality places to play — and give the industry an
              independent, trusted voice.
            </p>
          </div>
          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <div key={s.h} className="feature">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
