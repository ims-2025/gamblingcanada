'use client';

import { useState } from 'react';

/**
 * Renders an operator's real brand logo if a raster file exists at
 * /public/logos/<slug>.<ext>, otherwise falls back to the self-hosted
 * SVG monogram at /public/logos/<slug>.svg — so missing logos never break.
 *
 * Drop a real logo into /public/logos named exactly <slug>.png (or .webp)
 * and it appears automatically. See /public/logos/README.md for the list.
 */
export default function LogoImage({
  slug,
  name,
  size = 84,
  exts = ['png', 'webp', 'jpg'],
}: {
  slug: string;
  name: string;
  size?: number;
  exts?: string[];
}) {
  const candidates = [...exts.map((e) => `/logos/${slug}.${e}`), `/logos/${slug}.svg`];
  const [idx, setIdx] = useState(0);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={candidates[idx]}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setIdx((i) => (i < candidates.length - 1 ? i + 1 : i))}
    />
  );
}
