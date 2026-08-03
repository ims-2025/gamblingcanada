import Link from 'next/link';
import JsonLd from './JsonLd';
import { SITE } from '@/lib/site';

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ label: 'Home', href: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${SITE.url}${it.href}` } : {}),
    })),
  };
  return (
    <div className="container">
      <JsonLd data={schema} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        {items.map((it, i) => (
          <span key={i}>
            {' / '}
            {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
          </span>
        ))}
      </nav>
    </div>
  );
}
