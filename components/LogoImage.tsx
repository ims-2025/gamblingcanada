/**
 * Renders an operator's logo. By default it serves the self-hosted SVG monogram
 * at /public/logos/<slug>.svg (guaranteed to exist → no 404s).
 *
 * To use a real brand logo, add the file to /public/logos and pass its path via
 * the operator's `logo` field (e.g. logo: '/logos/888casino.png'); it will be
 * used instead. See /public/logos/README.md.
 */
export default function LogoImage({
  slug,
  name,
  size = 84,
  src,
}: {
  slug: string;
  name: string;
  size?: number;
  src?: string;
}) {
  const resolved = src && src.startsWith('/logos/') ? src : `/logos/${slug}.svg`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={resolved} alt={`${name} logo`} width={size} height={size} loading="lazy" decoding="async" />
  );
}
