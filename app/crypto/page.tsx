import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import { OPERATORS, topByRating } from '@/lib/operators';

export const metadata: Metadata = {
  title: 'Crypto Gambling in Canada — Best Bitcoin Casinos & Sportsbooks',
  description:
    'A guide to crypto gambling in Canada — how Bitcoin and other cryptocurrencies work at online casinos and sportsbooks, plus top crypto-friendly operators.',
  alternates: { canonical: '/crypto' },
};

export default function CryptoPage() {
  const cryptoOps = topByRating(
    OPERATORS.filter((o) => o.payments?.includes('Crypto')),
    5,
  );
  return (
    <>
      <Breadcrumbs items={[{ label: 'Crypto' }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Guide</div>
            <h1>Crypto Gambling in Canada</h1>
            <p className="lead text-muted">
              Cryptocurrency is an increasingly popular way for Canadians to fund their play — offering fast
              withdrawals, low fees and added privacy. Here’s how it works and which trusted operators accept it.
            </p>
          </div>
          <div className="op-list">
            {cryptoOps.map((op, i) => (
              <OperatorCard key={op.slug} op={op} rank={i + 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container prose">
          <h2>Is crypto gambling legal in Canada?</h2>
          <p>
            Using cryptocurrency to deposit at a licensed gambling site is legal for Canadians. The same rules
            apply as with any online gambling: choose operators licensed by a recognised regulator, understand
            the volatility of crypto, and only wager what you can afford to lose.
          </p>
          <h2>Pros and cons</h2>
          <p>
            Crypto payments are typically fast and low-cost, with withdrawals often processed within minutes.
            The trade-off is price volatility and, at some sites, weaker consumer protections than fiat banking.
            Stick to reputable, well-reviewed operators — start with our{' '}
            <Link href="/reviews">independent reviews</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
