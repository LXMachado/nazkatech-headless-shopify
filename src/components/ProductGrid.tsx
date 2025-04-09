import { Product } from '@/types';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [loading, setLoading] = useState(true);
  
  // After 3 seconds, if products is still empty, show error instead of loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="products" className="py-16 md:py-20 bg-soft-cream-50">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-700">
            Explore our range of eco-friendly tech accessories that combine style, functionality, and sustainability.
          </p>
        </div>
        
        {products.length > 0 ? (
          // Products are loaded successfully
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : loading ? (
          // Show loading state
          <div className="text-center py-12">
            <div className="animate-pulse">
              <p className="text-lg text-gray-500 mb-4">Loading products...</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={`loading-${index}`} className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl mb-4 h-48"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Show error message after loading timeout
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              Unable to load products at this time.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Please check your Shopify connection settings or try again later.
            </p>
            <p className="text-xs text-red-500">
              Error: Shopify API authentication failed
            </p>
          </div>
        )}
        
        {/* Show All Products Button */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
