import Link from 'next/link';
import Image from 'next/image';
import type { Operator } from '@/lib/operators';
import { StarRating } from './icons';

export default function OperatorCard({ op, rank, priority = false }: { op: Operator; rank: number; priority?: boolean }) {
  const top = rank === 1;
  return (
    <article className={`op-card${top ? ' is-top' : ''}`}>
      <div className="op-rank">
        {top && <span className="ribbon">Top Pick</span>}
        {rank}
      </div>

      <div className="op-logo">
        <Image
          src={op.logo}
          alt={`${op.name} logo`}
          width={84}
          height={84}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          unoptimized
        />
      </div>

      <div className="op-body">
        <h3>
          <Link href={`/reviews/${op.slug}`}>{op.name}</Link>
        </h3>
        <div className="op-bonus">{op.bonus}</div>
        <p className="op-blurb">{op.blurb}</p>
      </div>

      <div className="op-cta">
        <span className="rating-line">
          <StarRating value={op.rating} />
          <span className="rating-num">{op.rating.toFixed(1)}</span>
        </span>
        <a
          className="btn btn-primary btn-sm"
          href={op.playUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Play Now
        </a>
        <Link className="btn btn-ghost btn-sm" href={`/reviews/${op.slug}`}>
          Read Review
        </Link>
      </div>
    </article>
  );
}
