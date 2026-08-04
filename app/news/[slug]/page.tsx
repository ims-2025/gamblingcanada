import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { getAllNews, getNews, readingTime, wordCount } from '@/lib/news';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getNews(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const post = getNews(params.slug);
  if (!post) notFound();

  const related = getAllNews()
    .filter((n) => n.slug !== post.slug && n.category === post.category)
    .slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    wordCount: wordCount(post.bodyHtml),
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: SITE.name },
    description: post.excerpt,
    mainEntityOfPage: `${SITE.url}/news/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: post.category }]} />
      <section className="section-tight">
        <div className="container prose">
          <span className="badge badge-blue mb-2">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="news-meta text-muted" style={{ margin: '0 0 8px' }}>
            By {post.author} ·{' '}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>{' '}
            · {readingTime(post.bodyHtml)} min read
          </p>
          <p className="lead mt-2">{post.excerpt}</p>

          {/* Article body */}
          <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

          {related.length > 0 && (
            <>
              <h2>More in {post.category}</h2>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/news/${r.slug}`}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="mt-3">
            <Link href="/news">← Back to all news</Link>
          </p>
        </div>
      </section>
    </>
  );
}
