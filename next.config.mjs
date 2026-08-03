/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.onlinegamblingcanada.com' },
      { protocol: 'https', hostname: 'onlinegamblingcanada.com' },
    ],
  },
  async redirects() {
    return [
      // Preserve historical WordPress category path for news
      { source: '/category/news', destination: '/news', permanent: true },
      { source: '/category/news/:path*', destination: '/news', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|woff2|css|js)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
