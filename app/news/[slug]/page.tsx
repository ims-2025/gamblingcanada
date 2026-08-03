import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { NEWS } from '@/lib/content';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = NEWS.find((n) => n.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date },
  };
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const post = NEWS.find((n) => n.slug === params.slug);
  if (!post) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    description: post.excerpt,
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: post.category }]} />
      <section className="section-tight">
        <div className="container prose">
          <span className="badge badge-blue mb-2">{post.category}</span>
          <h1>{post.title}</h1>
          <time className="news-meta text-muted" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          <p className="lead mt-2">{post.excerpt}</p>
          <p>
            This article is part of our Canadian gambling news coverage. The full report is being migrated from
            the previous site and expanded with the latest figures and expert analysis by our editorial team.
          </p>
          <p>
            <Link href="/news">← Back to all news</Link>
          </p>
        </div>
      </section>
    </>
  );
}
