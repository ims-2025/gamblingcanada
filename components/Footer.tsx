import Link from 'next/link';
import { SITE, HELPLINES } from '@/lib/site';
import { Leaf } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ color: '#fff' }}>
            <Leaf className="leaf" />
            <span>OnlineGamblingCanada</span>
          </Link>
          <p className="mt-2">
            For over {SITE.yearsInBusiness} years we’ve followed the Canadian gambling scene — publishing
            independent casino reviews, sportsbook ratings, strategy guides and news to keep Canadians
            informed and safe.
          </p>
          <div className="rg-badges mt-2">
            <span className="rg-chip">19+ Play Responsibly</span>
            <span className="rg-chip">iGaming Ontario</span>
          </div>
        </div>

        <div>
          <h4>Games</h4>
          <Link href="/games/slots">Slots</Link>
          <Link href="/games/blackjack">Blackjack</Link>
          <Link href="/games/roulette">Roulette</Link>
          <Link href="/games/poker">Poker</Link>
          <Link href="/games/video-poker">Video Poker</Link>
          <Link href="/games/bingo">Bingo</Link>
        </div>

        <div>
          <h4>Reviews</h4>
          <Link href="/reviews/888casino">888 Casino</Link>
          <Link href="/reviews/jackpotcity-casino">JackpotCity</Link>
          <Link href="/reviews/highroller-casino">Highroller Casino</Link>
          <Link href="/reviews/betinia-sports">Betinia Sports</Link>
          <Link href="/reviews">All Reviews</Link>
        </div>

        <div>
          <h4>Explore</h4>
          <Link href="/casino">Online Casinos</Link>
          <Link href="/sports-betting">Sports Betting</Link>
          <Link href="/crypto">Crypto Gambling</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="rg-bar">
        <div className="container">
          <p className="rg-note">
            <strong style={{ color: '#cfe0f2' }}>Responsible Gambling.</strong> At {SITE.name} we prioritise
            responsible gambling across Canada. You must be 19+ (18+ in some provinces) to play. If gambling
            stops being fun, free confidential 24/7 help is available in every province:{' '}
            {HELPLINES.map((h, i) => (
              <span key={h.province}>
                {h.province} ({h.phone}){i < HELPLINES.length - 1 ? ', ' : '. '}
              </span>
            ))}
            You can also contact ConnexOntario. Seeking help is a sign of strength.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} OnlineGamblingCanada.com — Independent reviews for Canadian players.</span>
        <span>Play responsibly. 19+</span>
      </div>
    </footer>
  );
}
