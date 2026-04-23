/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVG images for placeholders
    contentDispositionType: 'attachment', // Security measure for SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Security measure for SVGs
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
