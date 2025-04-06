const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-green-50 border-t border-forest-green-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Sustainability Statement */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-auto text-forest-green-500" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C11.729 5 5 11.729 5 20C5 28.271 11.729 35 20 35C28.271 35 35 28.271 35 20C35 11.729 28.271 5 20 5ZM15 12C15 10.895 15.895 10 17 10H23C24.105 10 25 10.895 25 12V16C25 17.105 24.105 18 23 18H20V28C20 29.105 19.105 30 18 30C16.895 30 16 29.105 16 28V18C16 16.895 16.895 16 18 16H23V12H17V16C17 17.105 16.105 18 15 18C13.895 18 13 17.105 13 16V12H15Z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-forest-green-800">Nazka.Tech</span>
            </div>
            <p className="text-forest-green-700 mb-6 max-w-md">
              At Nazka.Tech, we're committed to creating tech accessories that don't cost the Earth. 
              Our innovative products are designed with sustainability at their core, using biodegradable 
              materials and renewable energy sources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-green-600 hover:text-forest-green-800" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-forest-green-600 hover:text-forest-green-800" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-forest-green-600 hover:text-forest-green-800" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-forest-green-600 hover:text-forest-green-800" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-forest-green-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-forest-green-800 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-green-600 hover:text-forest-green-800">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sustainability Certification Badges */}
        <div className="mt-12 pt-8 border-t border-forest-green-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green-500 mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-forest-green-700">Carbon Neutral</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm font-medium text-forest-green-700">Eco Certified</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium text-forest-green-700">100% Recyclable</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green-500 mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-forest-green-700">Ethically Made</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 text-center text-sm text-forest-green-600">
          <p>&copy; {new Date().getFullYear()} Nazka.Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
