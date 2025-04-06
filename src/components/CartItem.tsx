import Image from 'next/image';
import Link from 'next/link';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: item.currencyCode,
    }).format(parseFloat(price));
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };
  
  return (
    <div className="flex border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Product Image */}
      <Link href={`/products/${item.handle}`} className="flex-shrink-0 w-24 h-24 bg-soft-cream-50 relative">
        {item.image ? (
          <Image 
            src={item.image} 
            alt={item.title}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-soft-cream-100">
            <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4.44-6.19l-2.35 3.02-1.56-1.88c-.2-.25-.58-.24-.78.01l-1.74 2.23c-.26.33-.02.81.39.81h8.98c.41 0 .65-.47.4-.8l-2.55-3.39c-.19-.26-.59-.26-.79 0z" />
            </svg>
          </div>
        )}
      </Link>
      
      {/* Item details */}
      <div className="flex-grow p-4 flex flex-col">
        <div className="flex justify-between">
          <div>
            <Link href={`/products/${item.handle}`} className="text-gray-900 font-medium hover:text-forest-green-600">
              {item.title}
            </Link>
            {item.variantTitle !== 'Default Title' && (
              <p className="text-sm text-gray-500">{item.variantTitle}</p>
            )}
          </div>
          <span className="font-medium text-forest-green-600">
            {formatPrice(item.price)}
          </span>
        </div>
        
        {/* Quantity Controls */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button 
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-forest-green-600 focus:outline-none"
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button 
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-forest-green-600 focus:outline-none"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-gray-400 hover:text-red-500 focus:outline-none"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
