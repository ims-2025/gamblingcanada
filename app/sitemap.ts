import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { OPERATORS } from '@/lib/operators';
import { GAMES } from '@/lib/content';
import { getAllNews } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    '',
    '/casino',
    '/sports-betting',
    '/sports-betting/ontario',
    '/sports-betting/alberta',
    '/sports-betting-understanding-the-basics',
    '/reviews',
    '/games',
    '/news',
    '/crypto',
    '/about',
    '/contact',
    '/services',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const reviewPages = OPERATORS.map((o) => ({
    url: `${base}/reviews/${o.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const gamePages = GAMES.map((g) => ({
    url: `${base}/games/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const newsPages = getAllNews().map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...reviewPages, ...gamePages, ...newsPages];
}
