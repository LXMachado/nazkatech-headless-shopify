import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.currencyCode,
    }).format(parseFloat(price));
  };
  
  const handleAddToCart = () => {
    if (product.variants.length > 0) {
      const defaultVariant = product.variants[0];
      addToCart({
        id: `${defaultVariant.id}-${Date.now()}`, // Ensure unique ID for cart items
        variantId: defaultVariant.id,
        productId: product.id,
        title: product.title,
        handle: product.handle,
        image: product.image,
        variantTitle: defaultVariant.title,
        price: defaultVariant.price,
        currencyCode: defaultVariant.currencyCode,
        quantity: 1,
      });
    }
  };
  
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <Link href={`/products/${product.handle}`}>
        <div className="aspect-w-1 aspect-h-1 relative bg-soft-cream-50">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={500}
              height={500}
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-soft-cream-100">
              <svg className="h-16 w-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4.44-6.19l-2.35 3.02-1.56-1.88c-.2-.25-.58-.24-.78.01l-1.74 2.23c-.26.33-.02.81.39.81h8.98c.41 0 .65-.47.4-.8l-2.55-3.39c-.19-.26-.59-.26-.79 0z" />
              </svg>
            </div>
          )}
          
          {/* Eco Badge */}
          <div className="absolute top-2 left-2">
            <div className="bg-forest-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Eco-Friendly
            </div>
          </div>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4 md:p-6">
        <Link href={`/products/${product.handle}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-forest-green-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-medium text-forest-green-600">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        <div className="flex space-x-2 mb-4">
          <div className="text-xs font-medium bg-soft-cream-100 text-forest-green-600 px-2 py-1 rounded-full">
            Biodegradable
          </div>
          <div className="text-xs font-medium bg-soft-cream-100 text-forest-green-600 px-2 py-1 rounded-full">
            Recyclable
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={handleAddToCart} 
            className="flex-1 btn btn-primary"
          >
            Add to Cart
          </button>
          <Link href={`/products/${product.handle}`} className="btn btn-secondary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
