import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import CartItem from './CartItem';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, closeCart, cartItems, totalPrice, totalItems, checkout } = useCart();
  
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', // Default to USD if no currency is specified
    }).format(parseFloat(price));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      
      {/* Cart Sidebar */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-medium">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto px-4 py-2">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <svg 
                  className="h-16 w-16 text-gray-400 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                  />
                </svg>
                <p className="text-gray-500 text-center">
                  Your cart is empty
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 btn btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4 py-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-4">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <div className="space-y-2">
                <button
                  onClick={checkout}
                  className="btn btn-primary w-full"
                >
                  Checkout
                </button>
                <Link href="/cart" 
                  className="btn btn-secondary w-full"
                  onClick={closeCart}
                >
                  View Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
