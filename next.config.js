/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'images.unsplash.com', // For sample product images
    ],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
