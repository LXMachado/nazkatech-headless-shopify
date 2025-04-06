import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
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
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Display first 3 products or all if less than 3 */}
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
            {/* If there are less than 3 products from API, show placeholders */}
            {products.length < 3 && (
              Array.from({ length: 3 - products.length }).map((_, index) => (
                <div key={`placeholder-${index}`} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-xl mb-4"></div>
                  <div className="h-6 bg-gray-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/4 mb-4"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                </div>
              ))
            )}
          </div>
        )}
        
        {/* Show All Products Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
