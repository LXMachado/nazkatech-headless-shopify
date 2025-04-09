/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'images.unsplash.com', // For sample product images
      'placehold.co', // For placeholder images
      'via.placeholder.com', // Alternative placeholder service
      'dummyimage.com', // Another placeholder service
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
