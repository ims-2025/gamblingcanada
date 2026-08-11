import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorCard from '@/components/OperatorCard';
import JsonLd from '@/components/JsonLd';
import { SPORTSBOOKS, topByRating } from '@/lib/operators';

interface Province {
  name: string;
  regulator: string;
  intro: string;
  sections: { h: string; body: string }[];
  faq: { q: string; a: string }[];
}

const PROVINCES: Record<string, Province> = {
  ontario: {
    name: 'Ontario',
    regulator: 'iGaming Ontario / AGCO',
    intro:
      'Ontario launched Canada’s first regulated online gambling market on 4 April 2022. Sportsbooks operating under iGaming Ontario and the AGCO are fully licensed for Ontario residents, offering strong player protections, local dispute resolution and responsible-gambling tools. Here are the best sports betting sites for Ontario players in 2026.',
    sections: [
      {
        h: 'Is sports betting legal in Ontario?',
        body: 'Yes. Single-event sports betting became legal across Canada in 2021 under Bill C-218, and Ontario went further by opening a fully regulated iGaming market in April 2022. Ontario residents can bet legally with operators licensed by iGaming Ontario and the AGCO, with the same consumer protections you would expect from a provincially regulated market.',
      },
      {
        h: 'How to sign up with an Ontario sportsbook',
        body: 'Choose a licensed operator from our list, create an account with your real details, verify your identity (a standard KYC step), make a deposit with Interac or a card in Canadian dollars, then claim any welcome offer and place your first bet. The whole process usually takes a few minutes.',
      },
      {
        h: 'Banking and payouts',
        body: 'Ontario sportsbooks lean heavily on Interac, which makes deposits and withdrawals fast and simple for Canadian bettors, alongside Visa, Mastercard and e-wallets. Everything is handled in Canadian dollars, so there are no currency-conversion fees. Withdrawal speed is one of the factors we weigh in every review.',
      },
      {
        h: 'Taxes on winnings',
        body: 'For recreational bettors, gambling winnings in Ontario are generally not taxed. The rare exceptions are interest earned on winnings, or the unusual case where betting is treated as a professional business. If in doubt, speak to a tax professional.',
      },
    ],
    faq: [
      { q: 'Which sportsbooks are legal in Ontario?', a: 'Sportsbooks licensed by iGaming Ontario and the AGCO are the fully regulated options for Ontario residents. Our list highlights strong choices for Ontario players.' },
      { q: 'What is the legal betting age in Ontario?', a: 'You must be 19 or older to bet on sports in Ontario.' },
      { q: 'Can I bet on single games in Ontario?', a: 'Yes. Single-event wagering has been legal since 2021, so you can bet on individual games rather than only parlays.' },
    ],
  },
  alberta: {
    name: 'Alberta',
    regulator: 'AGLC',
    intro:
      'Alberta operates PlayAlberta through the AGLC and is moving toward an expanded regulated iGaming market. Albertans can bet on single events legally, with a growing range of options to compare. Here are the best sports betting sites for Alberta players in 2026.',
    sections: [
      {
        h: 'Is sports betting legal in Alberta?',
        body: 'Yes. Single-event sports betting is legal in Alberta following the 2021 federal change, and the province runs its own regulated platform, PlayAlberta, through the AGLC. Alberta has also signalled plans to open a broader regulated iGaming market, which is expected to expand the choice of licensed operators available to Albertans.',
      },
      {
        h: 'How to sign up with an Alberta sportsbook',
        body: 'Pick an operator from our list, register with your real details, complete identity verification, deposit with Interac or a card in Canadian dollars, and place your bet. Claim any welcome offer first — but always read the wagering terms.',
      },
      {
        h: 'Banking and payouts',
        body: 'Alberta bettors get the same Canadian-friendly banking as the rest of the country: Interac, cards and e-wallets, all in Canadian dollars. Look for books with fast withdrawals and clear limits — details we cover in each review.',
      },
      {
        h: 'Taxes on winnings',
        body: 'As elsewhere in Canada, recreational gambling winnings in Alberta are generally not taxable. Professional-level gambling income is the main exception. Consult a tax professional if your situation is unusual.',
      },
    ],
    faq: [
      { q: 'Is online sports betting legal in Alberta?', a: 'Yes. Single-event betting is legal, and Alberta runs the regulated PlayAlberta platform through the AGLC, with a wider regulated market expected.' },
      { q: 'What is the legal betting age in Alberta?', a: 'You must be 18 or older to bet on sports in Alberta.' },
      { q: 'What is PlayAlberta?', a: 'PlayAlberta is the province’s official regulated online gambling site, operated by the Alberta Gaming, Liquor and Cannabis commission (AGLC).' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PROVINCES).map((province) => ({ province }));
}

export function generateMetadata({ params }: { params: { province: string } }): Metadata {
  const p = PROVINCES[params.province];
  if (!p) return {};
  return {
    title: `Best Sports Betting Sites in ${p.name} 2026`,
    description: `Compare the best legal online sportsbooks in ${p.name}. Odds, markets, bonuses, banking and payout speed, reviewed for ${p.name} bettors in 2026.`,
    alternates: { canonical: `/sports-betting/${params.province}` },
  };
}

export default function ProvincePage({ params }: { params: { province: string } }) {
  const p = PROVINCES[params.province];
  if (!p) notFound();
  const ranked = topByRating(SPORTSBOOKS, SPORTSBOOKS.length);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: 'Sports Betting', href: '/sports-betting' }, { label: p.name }]} />
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{p.regulator}</div>
            <h1>Best Sports Betting Sites in {p.name}</h1>
            <p className="lead text-muted">{p.intro}</p>
          </div>
          <div className="disclosure mb-2">
            Advertising disclosure: we may earn a commission from operators listed here. It never influences our
            independent ratings.
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
          {p.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.body}</p>
            </div>
          ))}
          <p>
            New to betting? Read our <Link href="/sports-betting-understanding-the-basics">sports betting basics guide</Link>,
            or compare every option on our <Link href="/sports-betting">best Canadian sportsbooks</Link> page.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">FAQ</div>
            <h2>{p.name} sports betting questions</h2>
          </div>
          <div className="faq">
            {p.faq.map((f) => (
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
