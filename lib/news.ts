import fs from 'fs';
import path from 'path';

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string; // ~150–160 chars, used as meta description + card summary
  date: string; // ISO date, e.g. 2026-08-04
  author: string;
  bodyHtml: string; // full article HTML (headings, paragraphs, lists, internal links)
}

const NEWS_DIR = path.join(process.cwd(), 'content', 'news');

/** Read every article JSON at build time, newest first. */
export function getAllNews(): Article[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  const items = files.map((f) => JSON.parse(fs.readFileSync(path.join(NEWS_DIR, f), 'utf8')) as Article);
  return items.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
}

export function getNews(slug: string): Article | undefined {
  return getAllNews().find((n) => n.slug === slug);
}

export function wordCount(html: string): number {
  return html
    .replace(/<[^>]+>/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readingTime(html: string): number {
  return Math.max(1, Math.round(wordCount(html) / 220));
}
