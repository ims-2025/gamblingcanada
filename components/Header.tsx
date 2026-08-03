import Link from 'next/link';
import { NAV, SITE } from '@/lib/site';
import { Leaf } from './icons';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label={`${SITE.name} home`}>
          <Leaf className="leaf" />
          <span>
            Online<span style={{ color: 'var(--blue)' }}>Gambling</span>Canada
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {NAV.map((item) => (
            <div key={item.href} className="nav-item">
              <Link href={item.href} className="nav-link">
                {item.label}
                {item.children && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-cta">
          <Link href="/casino" className="btn btn-primary btn-sm">
            Top Casinos
          </Link>
        </div>

        {/* CSS-only mobile menu (no JS) */}
        <input type="checkbox" id="mobile-menu" hidden />
        <label className="menu-toggle" htmlFor="mobile-menu" aria-label="Toggle menu">
          <span />
        </label>
      </div>

      <nav className="mobile-nav" aria-label="Mobile">
        {NAV.map((item) => (
          <div key={item.href}>
            <Link href={item.href}>{item.label}</Link>
            {item.children?.map((c) => (
              <Link key={c.href} href={c.href} className="sub">
                {c.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </header>
  );
}
