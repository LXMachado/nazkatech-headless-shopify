import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { toggleCart, totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white md:bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-auto text-forest-green-500" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5C11.729 5 5 11.729 5 20C5 28.271 11.729 35 20 35C28.271 35 35 28.271 35 20C35 11.729 28.271 5 20 5ZM15 12C15 10.895 15.895 10 17 10H23C24.105 10 25 10.895 25 12V16C25 17.105 24.105 18 23 18H20V28C20 29.105 19.105 30 18 30C16.895 30 16 29.105 16 28V18C16 16.895 16.895 16 18 16H23V12H17V16C17 17.105 16.105 18 15 18C13.895 18 13 17.105 13 16V12H15Z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-900">Nazka.Tech</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-forest-green-600 font-medium">
              Home
            </Link>
            <Link href="/#products" className="text-gray-800 hover:text-forest-green-600 font-medium">
              Products
            </Link>
            <Link href="/#about" className="text-gray-800 hover:text-forest-green-600 font-medium">
              About
            </Link>
            <Link href="/#sustainability" className="text-gray-800 hover:text-forest-green-600 font-medium">
              Sustainability
            </Link>
          </nav>
          
          {/* Cart and Mobile Menu Buttons */}
          <div className="flex items-center">
            {/* Cart Button */}
            <button 
              onClick={toggleCart}
              className="p-2 relative text-gray-800 hover:text-forest-green-600"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 h-4 w-4 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-forest-green-500 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="ml-4 md:hidden p-2 text-gray-800 hover:text-forest-green-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden mt-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-2 py-3">
            <Link href="/" 
              className="px-4 py-2 text-gray-800 hover:bg-soft-cream-100 hover:text-forest-green-600 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/#products" 
              className="px-4 py-2 text-gray-800 hover:bg-soft-cream-100 hover:text-forest-green-600 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link href="/#about" 
              className="px-4 py-2 text-gray-800 hover:bg-soft-cream-100 hover:text-forest-green-600 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/#sustainability" 
              className="px-4 py-2 text-gray-800 hover:bg-soft-cream-100 hover:text-forest-green-600 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sustainability
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
