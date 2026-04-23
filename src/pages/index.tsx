import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleProducts } from '@/data/sampleProducts';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { getAllProducts } from '@/lib/shopify';
import Hero from '@/components/Hero';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        const fetchedProducts = await getAllProducts();
        if (fetchedProducts && fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
        } else {
          setProducts(sampleProducts);
        }
      } catch (error) {
        setProducts(sampleProducts);
      }
    }
    loadProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const variant = product.variants[0];
    addToCart({
      id: `${product.id}-${variant.id}`,
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      handle: product.handle,
      image: product.image,
      variantTitle: variant.title,
      price: variant.price,
      currencyCode: variant.currencyCode,
      quantity: 1,
    });
  };

  const features = [
    {
      number: '01',
      title: 'Eco-Conscious Design',
      description:
        'All our products are made from biodegradable or fully recyclable materials, reducing environmental impact without compromising on style or function.',
      link: '/sustainability',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Energy Efficient',
      description:
        'Our products are designed to maximize energy efficiency, from solar charging to optimized power consumption, all to minimize your carbon footprint.',
      link: '/technology',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Durable Quality',
      description:
        'Long-lasting products that stand the test of time, reducing the need for frequent replacements and contributing to less electronic waste.',
      link: '/quality',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Nazka.Tech | Eco-Friendly Tech Accessories</title>
        <meta
          name="description"
          content="Eco-friendly tech accessories - biodegradable phone cases, solar power banks, and more. Where eco meets tech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Features Section - Why Choose Us */}
      <section className="py-24 md:py-32 bg-eco-dark-50 border-y border-eco-dark-200/50 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-eco-green-500/20 to-transparent" />

        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16 md:mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-dark-100 border border-eco-dark-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-green-400"></span>
              <span className="text-sm font-medium text-gray-400">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              <span className="text-eco-green-400">Harmony</span> Between Technology and Nature
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
              Our products are designed with both cutting-edge technology and environmental
              responsibility in mind, creating a perfect balance for the modern eco-conscious consumer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.number} className="group">
                <div className="relative bg-eco-dark-100/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-eco-dark-200/60 transition-all duration-500 hover:border-eco-green-500/30 hover:shadow-eco hover:-translate-y-1 h-full overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-eco-green-500/0 via-eco-green-500/0 to-eco-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-eco-green-500/10 border border-eco-green-500/20 flex items-center justify-center text-eco-green-400 group-hover:bg-eco-green-500/20 group-hover:border-eco-green-500/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <span className="text-xs font-bold text-eco-green-500/60 tracking-widest uppercase">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-eco-green-50 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-8 text-balance">
                      {feature.description}
                    </p>

                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-eco-green-400 hover:text-eco-green-300 transition-colors group/link"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 md:py-32 relative">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-dark-100 border border-eco-dark-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-green-400"></span>
              <span className="text-sm font-medium text-gray-400">Curated Selection</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              Featured Products
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
              Explore our range of eco-friendly tech accessories that combine style,
              functionality, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="group">
                <div className="bg-eco-dark-100/40 border border-eco-dark-200/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-eco-green-500/20 hover:shadow-eco hover:-translate-y-1">
                  {/* Image Container */}
                  <div className="aspect-square bg-eco-dark-50/50 relative p-8 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full h-full object-contain z-10 relative transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle ambient glow on hover */}
                    <div className="absolute inset-0 bg-eco-green-500/0 group-hover:bg-eco-green-500/5 transition-colors duration-500" />

                    {/* Quick action overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-eco-dark-900/90 via-eco-dark-900/50 to-transparent py-8 px-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/products/${product.handle}`}
                          className="text-sm font-semibold text-white hover:text-eco-green-400 transition-colors inline-flex items-center gap-2"
                        >
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-eco-green-500 hover:bg-eco-green-400 text-eco-dark-900 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-eco flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                          </svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-lg text-white group-hover:text-eco-green-50 transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <span className="text-eco-green-400 font-bold text-lg shrink-0">
                        ${product.price}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-3.5 w-3.5 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">4.8</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center">
            <Link
              href="/products"
              className="btn btn-primary inline-flex items-center px-8 py-3.5"
            >
              <span>View All Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission / Sustainability Section */}
      <section id="sustainability" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-eco-green-500/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-eco-dark-200/50 shadow-2xl shadow-black/30">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="/images/eco-tech-lightbulbs.jpg"
                      alt="Eco-friendly lightbulbs with plants growing inside"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eco-dark-900/70 via-transparent to-transparent" />
                  </div>

                  {/* Bottom overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-eco-green-400 mb-1">
                          Sustainable Technology
                        </p>
                        <p className="text-white font-medium">Innovation for a greener tomorrow</p>
                      </div>
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-eco-green-500 text-eco-dark-900 shadow-lg shadow-eco-green-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-4 md:-right-6 glass-card rounded-2xl px-5 py-4 shadow-xl border border-eco-green-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-eco-green-500/15 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">10k+</p>
                      <p className="text-xs text-gray-400">Trees Planted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-dark-100 border border-eco-dark-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-eco-green-400"></span>
                <span className="text-sm font-medium text-gray-400">Our Mission</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                Embrace Sustainable Living with{' '}
                <span className="text-eco-green-400">Every Purchase</span>
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg text-balance">
                At Nazka.Tech, every purchase reverberates with environmental responsibility
                and empowers a greener future for generations to come.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">15t</p>
                  <p className="text-sm text-gray-500">CO₂ Offset</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">2t</p>
                  <p className="text-sm text-gray-500">Plastic Saved</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-sm text-gray-500">Recyclable</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/sustainability"
                  className="btn btn-primary px-8 py-3.5"
                >
                  Learn About Our Impact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <div className="hidden md:block">
                  <img
                    src="/images/eco-tech-circuit.png"
                    alt="Eco tech circuit design"
                    className="w-28 h-28 object-contain opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-eco-dark-50 border-y border-eco-dark-200/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eco-green-500/[0.02] to-transparent pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-dark-100 border border-eco-dark-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-green-400"></span>
              <span className="text-sm font-medium text-gray-400">Stay Connected</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight text-balance">
              Join the Green Revolution
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto text-balance">
              Stay updated with our latest products, eco-tips, and exclusive offers.
              Join our community of eco-conscious consumers.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-eco-dark-100/60 border border-eco-dark-200/60 focus:border-eco-green-500/50 focus:ring-1 focus:ring-eco-green-500/20 text-white pl-12 pr-4 py-3.5 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-500"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary px-8 py-3.5 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-600">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
