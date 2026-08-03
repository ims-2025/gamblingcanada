import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <div className="eyebrow">404</div>
        <h1>Page not found</h1>
        <p className="lead text-muted" style={{ margin: '0 auto 24px' }}>
          The page you’re looking for may have moved. Try one of these instead.
        </p>
        <div className="flex gap-2 wrap" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/casino" className="btn btn-ghost">Online Casinos</Link>
          <Link href="/sports-betting" className="btn btn-ghost">Sports Betting</Link>
          <Link href="/reviews" className="btn btn-ghost">Reviews</Link>
        </div>
      </div>
    </section>
  );
}
