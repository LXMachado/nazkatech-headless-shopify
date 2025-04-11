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
        // This will now try to fetch from Shopify API since we changed DEVELOPMENT_MODE
        const fetchedProducts = await getAllProducts();
        console.log('Fetched products:', fetchedProducts);
        
        // Check if we got any products
        if (fetchedProducts && fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
        } else {
          console.warn('No products fetched from API, using sample products');
          setProducts(sampleProducts);
        }
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts(sampleProducts);
      }
    }
    
    loadProducts();
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
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-eco-dark-50 border-y border-eco-dark-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-eco-dark-100 mb-4">
              <span className="w-2 h-2 rounded-full bg-eco-green-400 mr-2"></span>
              <span className="text-sm text-gray-300">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-5">
              <span className="text-eco-green-400">Harmony</span> Between Technology and Nature
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Our products are designed with both cutting-edge technology and environmental 
              responsibility in mind, creating a perfect balance for the modern eco-conscious consumer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-eco-dark-100 p-8 rounded-2xl border border-eco-dark-200 transition-all duration-300 hover:border-eco-green-600 relative overflow-hidden h-full">
                {/* Subtle background pattern */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-eco-green-500 opacity-5 rounded-full -mb-20 -mr-20"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full border border-eco-green-600 mr-4 flex items-center justify-center">
                      <span className="text-eco-green-400 font-medium">01</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">Eco-Conscious Design</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 font-light">
                    All our products are made from biodegradable or fully recyclable materials, 
                    reducing environmental impact without compromising on style or function.
                  </p>
                  
                  <Link href="/sustainability" className="inline-block text-eco-green-400 hover:text-eco-green-300 font-medium text-sm underline underline-offset-4 decoration-eco-green-800 hover:decoration-eco-green-500 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-eco-dark-100 p-8 rounded-2xl border border-eco-dark-200 transition-all duration-300 hover:border-eco-green-600 relative overflow-hidden h-full">
                {/* Subtle background pattern */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-eco-green-500 opacity-5 rounded-full -mb-20 -mr-20"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full border border-eco-green-600 mr-4 flex items-center justify-center">
                      <span className="text-eco-green-400 font-medium">02</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">Energy Efficient</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 font-light">
                    Our products are designed to maximize energy efficiency, from solar charging 
                    to optimized power consumption, all to minimize your carbon footprint.
                  </p>
                  
                  <Link href="/technology" className="inline-block text-eco-green-400 hover:text-eco-green-300 font-medium text-sm underline underline-offset-4 decoration-eco-green-800 hover:decoration-eco-green-500 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-eco-dark-100 p-8 rounded-2xl border border-eco-dark-200 transition-all duration-300 hover:border-eco-green-600 relative overflow-hidden h-full">
                {/* Subtle background pattern */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-eco-green-500 opacity-5 rounded-full -mb-20 -mr-20"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full border border-eco-green-600 mr-4 flex items-center justify-center">
                      <span className="text-eco-green-400 font-medium">03</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">Durable Quality</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 font-light">
                    Long-lasting products that stand the test of time, reducing the need for frequent 
                    replacements and contributing to less electronic waste.
                  </p>
                  
                  <Link href="/quality" className="inline-block text-eco-green-400 hover:text-eco-green-300 font-medium text-sm underline underline-offset-4 decoration-eco-green-800 hover:decoration-eco-green-500 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-1 w-10 bg-eco-green-500 rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold text-white">
                Featured Products
              </h2>
              <div className="h-1 w-10 bg-eco-green-500 rounded-full ml-3"></div>
            </div>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore our range of eco-friendly tech accessories that combine style, 
              functionality, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-square bg-eco-dark-50 rounded-2xl flex items-center justify-center relative p-8 border border-eco-dark-200 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-3/4 h-3/4 object-contain z-10 relative transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-eco-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  {/* Quick action overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-eco-dark-900/80 to-transparent py-6 px-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                      <Link href={`/products/${product.handle}`}
                        className="text-eco-green-400 hover:text-eco-green-300 text-sm font-medium underline underline-offset-4 decoration-eco-green-800 hover:decoration-eco-green-500 transition-colors">
                        View Details
                      </Link>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-eco-green-500 hover:bg-eco-green-400 text-eco-dark-900 rounded-full p-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 px-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg text-white">{product.title}</h3>
                    <span className="text-eco-green-400 font-medium">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    {product.description.length > 60 
                      ? `${product.description.substring(0, 60)}...` 
                      : product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/products" className="inline-flex items-center group">
              <span className="text-eco-green-400 font-medium mr-2 group-hover:mr-3 transition-all">View All Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Mission Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl h-96">
                <img 
                  src="/images/eco-tech-lightbulbs.jpg"
                  alt="Eco-friendly lightbulbs with plants growing inside"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-eco-dark-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-0 w-full px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium">Sustainable Technology</p>
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-eco-green-500 text-eco-dark-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-eco-dark-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-eco-green-400 mr-2"></span>
                <span className="text-sm text-gray-300">Our Mission</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                Embrace Sustainable Living with <span className="text-eco-green-400">Every Purchase</span>
              </h2>
              
              <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                At Nazka.Tech, every purchase reverberates with environmental responsibility 
                and empowers a greener future for generations to come.
              </p>
              
              <div className="flex items-start">
                <Link href="/sustainability" className="btn btn-primary inline-flex items-center group">
                  Learn About Our Impact
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                <div className="ml-8 hidden md:block">
                  <img 
                    src="/images/eco-tech-circuit.png" 
                    alt="Eco tech circuit design"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-eco-dark-50 border-y border-eco-dark-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8">
              Stay updated with our latest products, eco-tips, and exclusive offers. 
              Join our community of eco-conscious consumers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-eco-dark-200 border border-eco-dark-300 focus:border-eco-green-600 text-white px-4 py-3 rounded-lg outline-none flex-grow"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
