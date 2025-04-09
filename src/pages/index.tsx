import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleProducts } from '@/data/sampleProducts';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Use sample products for now
    setProducts(sampleProducts);
  }, []);

  const handleAddToCart = (product: Product) => {
    // Add the first variant to the cart
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
      quantity: 1
    });
  };

  return (
    <>
      <Head>
        <title>Nazka.Tech | Eco-Friendly Tech Accessories</title>
        <meta name="description" content="Eco-friendly tech accessories - biodegradable phone cases, solar power banks, and more. Where eco meets tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Video/Animated Effect would go here in production */}
        <div className="absolute inset-0 bg-eco-gradient opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Eco</span>
                <span className="text-eco-green-400 eco-glow"> Meets </span>
                <span className="text-white">Tech</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium sustainable tech accessories for the environmentally 
                conscious consumer. Join the movement for a greener digital lifestyle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/#products" className="btn btn-primary flex items-center justify-center group">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/sustainability" className="btn btn-secondary">
                  Our Impact
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-eco-dark-200 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-eco-green-400 font-medium">100%</p>
                    <p className="text-gray-400 text-sm">Sustainable Materials</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-eco-dark-200 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-eco-green-400 font-medium">45%</p>
                    <p className="text-gray-400 text-sm">Less CO2 Impact</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-eco-dark-200 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-eco-green-400 font-medium">2-Year</p>
                    <p className="text-gray-400 text-sm">Warranty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative z-10 bg-eco-dark-50 rounded-2xl overflow-hidden shadow-eco border border-eco-dark-200">
                {/* Hero Image - would be replaced with actual product image */}
                <div className="aspect-w-1 aspect-h-1 h-96 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-eco-dark-100"></div>
                  <img 
                    src="/images/product-2.svg"
                    alt="Eco-friendly solar power bank"
                    className="relative z-10 w-full h-full object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eco-dark-100 to-transparent"></div>
                </div>
                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">Solar Power Bank</h3>
                    <span className="text-eco-green-400 font-bold">$49.99</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Charge your devices with clean solar energy anywhere you go.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="space-x-2">
                      <button className="w-6 h-6 rounded-full bg-eco-dark-200 border-2 border-eco-green-500"></button>
                      <button className="w-6 h-6 rounded-full bg-eco-dark-200"></button>
                      <button className="w-6 h-6 rounded-full bg-eco-dark-200"></button>
                    </div>
                    <button 
                      onClick={() => handleAddToCart(products[1])} 
                      className="btn btn-primary py-2 px-3 text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-eco-green-500 opacity-20 blur-3xl -z-10"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-eco-green-400 opacity-20 blur-xl -z-10"></div>
              <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-eco-green-600 opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-eco-dark-50 border-y border-eco-dark-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-eco-green-400">Harmony</span> Between Technology and Nature
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our products are designed with both cutting-edge technology and environmental 
              responsibility in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-eco-dark-100 rounded-xl p-6 border border-eco-dark-200 hover:border-eco-green-700 transition-all hover:shadow-eco">
              <div className="w-14 h-14 rounded-full bg-eco-dark-200 mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Eco-Conscious Design</h3>
              <p className="text-gray-400 mb-4">
                All our products are made from biodegradable or fully recyclable materials, 
                reducing environmental impact.
              </p>
              <Link href="/sustainability" className="text-eco-green-400 hover:text-eco-green-300 font-medium text-sm inline-flex items-center group">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-eco-dark-100 rounded-xl p-6 border border-eco-dark-200 hover:border-eco-green-700 transition-all hover:shadow-eco">
              <div className="w-14 h-14 rounded-full bg-eco-dark-200 mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Energy Efficient</h3>
              <p className="text-gray-400 mb-4">
                Our products are designed to maximize energy efficiency, from solar charging 
                to optimized power consumption.
              </p>
              <Link href="/technology" className="text-eco-green-400 hover:text-eco-green-300 font-medium text-sm inline-flex items-center group">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-eco-dark-100 rounded-xl p-6 border border-eco-dark-200 hover:border-eco-green-700 transition-all hover:shadow-eco">
              <div className="w-14 h-14 rounded-full bg-eco-dark-200 mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Durable Quality</h3>
              <p className="text-gray-400 mb-4">
                Long-lasting products that stand the test of time, reducing the need for frequent 
                replacements.
              </p>
              <Link href="/quality" className="text-eco-green-400 hover:text-eco-green-300 font-medium text-sm inline-flex items-center group">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-gray-400 max-w-2xl">
                Explore our range of eco-friendly tech accessories that combine style, 
                functionality, and sustainability.
              </p>
            </div>
            <Link href="/products" className="mt-6 md:mt-0 btn btn-secondary">
              View All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="card-eco group">
                <div className="aspect-w-1 aspect-h-1 h-52 bg-eco-dark-200 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-contain p-4 z-10 relative transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-eco-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-white">{product.title}</h3>
                    <span className="text-eco-green-400 font-bold">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 h-12 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link href={`/products/${product.handle}`}
                      className="text-eco-green-400 hover:text-eco-green-300 text-sm font-medium">
                      View Details
                    </Link>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary py-2 px-3 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-eco-green-800 opacity-20"></div>
        {/* Animated particles would be added here in production */}
        
        <div className="container-custom relative z-10">
          <div className="bg-eco-dark-50 rounded-2xl overflow-hidden border border-eco-dark-200 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Join Our <span className="text-eco-green-400 eco-glow">Sustainable</span> Journey
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Subscribe to our newsletter for exclusive eco-tips, product launches, 
                  and sustainability insights. Be part of the solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-eco-dark-200 border border-eco-dark-300 focus:border-eco-green-600 text-white px-4 py-3 rounded-lg outline-none flex-grow"
                  />
                  <button className="btn btn-primary whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <div className="aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 bg-eco-green-500 rounded-full opacity-10 blur-2xl"></div>
                  <div className="h-full flex items-center justify-center">
                    <svg className="h-24 w-24 text-eco-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
