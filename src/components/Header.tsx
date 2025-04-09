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
      className={`sticky top-0 z-30 w-full transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'bg-eco-dark-900/80 shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="h-9 w-9 rounded-md bg-eco-green-500 flex items-center justify-center overflow-hidden relative">
              <svg className="h-5 w-5 text-eco-dark" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C11.729 5 5 11.729 5 20C5 28.271 11.729 35 20 35C28.271 35 35 28.271 35 20C35 11.729 28.271 5 20 5ZM15 12C15 10.895 15.895 10 17 10H23C24.105 10 25 10.895 25 12V16C25 17.105 24.105 18 23 18H20V28C20 29.105 19.105 30 18 30C16.895 30 16 29.105 16 28V18C16 16.895 16.895 16 18 16H23V12H17V16C17 17.105 16.105 18 15 18C13.895 18 13 17.105 13 16V12H15Z" />
              </svg>
              <div className="absolute inset-0 bg-eco-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-2 relative flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-eco-green-400 transition-colors">Nazka</span>
              <span className="text-sm font-light text-eco-green-500 absolute top-5 right-0 transform -translate-x-0">.Tech</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-eco-green-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-white hover:text-eco-green-400 font-medium transition-colors">
              Products
            </Link>
            <Link href="/#about" className="text-white hover:text-eco-green-400 font-medium transition-colors">
              About
            </Link>
            <Link href="/#sustainability" className="text-white hover:text-eco-green-400 font-medium transition-colors">
              Sustainability
            </Link>
          </nav>
          
          {/* Cart and Mobile Menu Buttons */}
          <div className="flex items-center space-x-1">
            {/* Cart Button */}
            <button 
              onClick={toggleCart}
              className="p-2 relative text-white hover:text-eco-green-400 transition-colors"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-eco-dark transform translate-x-1/2 -translate-y-1/2 bg-eco-green-500 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="ml-2 md:hidden p-2 text-white hover:text-eco-green-400 transition-colors"
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
            
            <Link href="/#products" className="hidden md:block ml-6">
              <button className="btn btn-primary text-xs md:text-sm px-4 py-2">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden mt-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-2 py-3 bg-eco-dark-50 rounded-lg border border-eco-dark-200">
            <Link href="/" 
              className="px-4 py-2 text-white hover:bg-eco-dark-200 hover:text-eco-green-400 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/#products" 
              className="px-4 py-2 text-white hover:bg-eco-dark-200 hover:text-eco-green-400 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link href="/#about" 
              className="px-4 py-2 text-white hover:bg-eco-dark-200 hover:text-eco-green-400 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/#sustainability" 
              className="px-4 py-2 text-white hover:bg-eco-dark-200 hover:text-eco-green-400 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sustainability
            </Link>
            <div className="px-4 py-2">
              <button className="btn btn-primary w-full py-2 text-sm">
                Shop Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
