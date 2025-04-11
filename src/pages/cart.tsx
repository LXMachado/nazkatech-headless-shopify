import Head from 'next/head';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';

export default function Cart() {
  const { cartItems, totalPrice, totalItems, checkout } = useCart();
  
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', // Default to USD if no currency is specified
    }).format(parseFloat(price));
  };
  
  return (
    <>
      <Head>
        <title>Your Cart | Nazka.Tech</title>
        <meta name="description" content="View your shopping cart and checkout" />
      </Head>
      
      <div className="container-custom py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <svg 
              className="mx-auto h-16 w-16 text-gray-400"
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
            <h2 className="mt-4 text-xl font-medium text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">
              Looks like you haven't added any items to your cart yet.
            </p>
            <div className="mt-8">
              <Link href="/" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                    <span className="font-medium">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-forest-green-600">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
                
                <button 
                  onClick={checkout}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-center">
                  <Link href="/" className="text-forest-green-600 hover:text-forest-green-800 text-sm">
                    Continue Shopping
                  </Link>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-soft-cream-100 rounded-xl p-4 border border-soft-cream-200">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-forest-green-800">Fast Delivery</h3>
                    <p className="text-xs text-forest-green-600 mt-1">
                      Our eco-friendly packaging and carbon-neutral shipping ensures your products arrive safely with minimal environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
