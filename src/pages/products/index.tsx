import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleProducts } from '@/data/sampleProducts';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { getAllProducts } from '@/lib/shopify';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const fetchedProducts = await getAllProducts();
        console.log('Fetched all products:', fetchedProducts);
        
        if (fetchedProducts && fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
        } else {
          console.warn('No products fetched from API, using sample products');
          setProducts(sampleProducts);
        }
        setError('');
      } catch (error) {
        console.error('Error loading products:', error);
        setError('Failed to load products. Please try again later.');
        setProducts(sampleProducts);
      } finally {
        setLoading(false);
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
        <title>All Products | Nazka.Tech</title>
        <meta name="description" content="Browse our full range of eco-friendly tech accessories including biodegradable phone cases, solar power banks, and more." />
      </Head>

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-eco-dark-50">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-eco-green-400">Products</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our complete range of sustainable tech accessories that combine eco-friendly materials, 
              innovative design, and functionality.
            </p>
          </div>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center text-sm text-gray-400">
            <Link href="/" className="hover:text-eco-green-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-eco-green-400">Products</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          {loading ? (
            // Loading state
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-t-2 border-eco-green-500 border-solid rounded-full animate-spin mb-4"></div>
              <p className="text-gray-300">Loading products...</p>
            </div>
          ) : error ? (
            // Error state
            <div className="text-center py-20">
              <div className="mb-4 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-medium text-white mb-2">Something went wrong</h2>
              <p className="text-gray-400 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="btn btn-primary"
              >
                Try Again
              </button>
            </div>
          ) : products.length === 0 ? (
            // Empty state
            <div className="text-center py-20">
              <div className="mb-4 text-eco-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-medium text-white mb-2">No products available</h2>
              <p className="text-gray-400 mb-6">Check back soon for our new product releases.</p>
              <Link href="/" className="btn btn-primary">
                Return to Home
              </Link>
            </div>
          ) : (
            // Products grid
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-square bg-eco-dark-50 rounded-2xl flex items-center justify-center relative p-6 border border-eco-dark-200 overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full h-full object-contain z-10 relative transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-eco-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      
                      {/* Quick action overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-eco-dark-900/80 to-transparent py-6 px-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
              
              {/* Back to home link */}
              <div className="mt-16 text-center">
                <Link href="/" className="inline-flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green-400 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-eco-green-400 font-medium">Back to Home</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}