import { ReactNode } from 'react';
import Header from './Header';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, closeCart, cartItems, totalPrice, totalItems, checkout } = useCart();

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(parseFloat(price));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow grid-pattern">
        {children}
      </main>
      
      <footer className="py-16 bg-eco-dark-100 border-t border-eco-dark-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center mb-6 group">
                <div className="h-10 w-10 rounded-md bg-eco-green-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-eco-dark" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5C11.729 5 5 11.729 5 20C5 28.271 11.729 35 20 35C28.271 35 35 28.271 35 20C35 11.729 28.271 5 20 5ZM15 12C15 10.895 15.895 10 17 10H23C24.105 10 25 10.895 25 12V16C25 17.105 24.105 18 23 18H20V28C20 29.105 19.105 30 18 30C16.895 30 16 29.105 16 28V18C16 16.895 16.895 16 18 16H23V12H17V16C17 17.105 16.105 18 15 18C13.895 18 13 17.105 13 16V12H15Z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold text-white group-hover:text-eco-green-400 transition-colors">Nazka.Tech</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Eco-friendly tech accessories for the environmentally conscious consumer. Pioneering sustainable technology solutions to reduce environmental impact.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="h-10 w-10 rounded-full bg-eco-dark-200 flex items-center justify-center text-eco-green-500 hover:bg-eco-green-500 hover:text-eco-dark transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-eco-dark-200 flex items-center justify-center text-eco-green-500 hover:bg-eco-green-500 hover:text-eco-dark transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-eco-dark-200 flex items-center justify-center text-eco-green-500 hover:bg-eco-green-500 hover:text-eco-dark transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4 text-lg border-b border-eco-dark-200 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-eco-green-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-eco-green-400 transition-colors">Products</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-eco-green-400 transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-gray-400 hover:text-eco-green-400 transition-colors">Sustainability</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-eco-green-400 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4 text-lg border-b border-eco-dark-200 pb-2">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eco-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 Eco Street, Green City</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eco-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@nazka.tech</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eco-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-eco-dark-200 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Nazka.Tech. All rights reserved. Pioneering sustainable technology.</p>
          </div>
        </div>
      </footer>
      
      {/* Cart Sidebar */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-eco-dark-50 border-l border-eco-dark-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center border-b border-eco-dark-200 pb-4">
            <h2 className="text-xl font-medium text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-eco-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Your Cart <span className="ml-2 text-eco-green-500">({totalItems})</span>
            </h2>
            <button 
              onClick={closeCart} 
              className="text-gray-400 hover:text-eco-green-400 transition-colors p-1 rounded-full hover:bg-eco-dark-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-6 pr-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 px-4">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-eco-dark-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Add items to your cart to get started with your eco-friendly shopping journey.</p>
                <button 
                  className="btn btn-primary py-2"
                  onClick={closeCart}
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex bg-eco-dark-100 rounded-lg overflow-hidden border border-eco-dark-200 hover:border-eco-dark-300 transition-colors">
                    <div className="w-24 h-24 bg-eco-dark-200 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="flex-grow p-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white text-sm">{item.title}</h3>
                        <button 
                          onClick={() => closeCart()}
                          className="text-gray-500 hover:text-red-500 ml-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      {item.variantTitle !== 'Default Title' && (
                        <p className="text-xs text-gray-400 mt-1">{item.variantTitle}</p>
                      )}
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-medium text-eco-green-400">{formatPrice(item.price)}</span>
                        <div className="flex items-center bg-eco-dark-200 rounded-md">
                          <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-eco-green-400">-</button>
                          <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                          <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-eco-green-400">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t border-eco-dark-200 pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-white">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-gray-400 pb-4 border-b border-eco-dark-200">
                  <span>Tax</span>
                  <span className="text-white">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between font-medium">
                <span className="text-white text-lg">Total</span>
                <span className="text-eco-green-400 text-lg">{formatPrice(totalPrice)}</span>
              </div>
              
              <div className="space-y-3 pt-2">
                <button 
                  onClick={checkout}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  Proceed to Checkout
                </button>
                <Link href="/cart" 
                  className="btn btn-secondary w-full"
                  onClick={closeCart}
                >
                  View Cart Details
                </Link>
              </div>
              
              <div className="pt-3">
                <div className="bg-eco-dark-200 rounded-lg p-4 text-center">
                  <p className="text-eco-green-400 text-sm font-medium mb-1">Eco-Friendly Shipping</p>
                  <p className="text-gray-400 text-xs">All our shipments use biodegradable packaging and carbon-neutral delivery methods.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
