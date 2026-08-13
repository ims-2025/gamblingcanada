export interface PillarSection {
  h2: string;
  html: string; // section body HTML (single-quoted attributes)
}

export interface Pillar {
  slug: string; // top-level flat slug, e.g. 'online-casinos-ontario'
  title: string; // <= 60 chars (SEO title)
  h1: string;
  metaDescription: string; // <= 155 chars
  eyebrow?: string;
  lead: string; // intro lead sentence(s), plain text
  author: string;
  updated: string; // ISO date
  breadcrumb: { label: string; href?: string }[]; // crumbs after Home; last has no href
  // Optional ranked operator list rendered near the top
  operators?: {
    heading: string;
    type?: 'casino' | 'sportsbook';
    slugs?: string[]; // explicit operator slugs (overrides type/count)
    count?: number; // otherwise top N by rating of `type`
  };
  sections: PillarSection[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}
