import { GetStaticProps } from 'next';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import CTABanner from '@/components/CTABanner';
import { getAllProducts } from '@/lib/shopify';
import { Product } from '@/types';

interface HomePageProps {
  products: Product[];
}

export default function Home({ products }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Nazka.Tech | Eco-Friendly Tech Accessories</title>
        <meta name="description" content="Eco-friendly tech accessories - biodegradable phone cases, solar power banks, and more. Where eco meets tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <ProductGrid products={products} />
        <CTABanner />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();
  
  return {
    props: {
      products: products.slice(0, 6), // Get first 6 products for the homepage
    },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
};
