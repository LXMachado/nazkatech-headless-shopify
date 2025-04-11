const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tech with a Conscience
          </h2>
          <p className="text-lg text-gray-700">
            Our products are designed with the planet in mind, without compromising on quality or performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Biodegradable Feature */}
          <div className="bg-soft-cream-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-forest-green-100 rounded-full text-forest-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.16 4.16a1 1 0 011.19-.8A11.944 11.944 0 0110 4c2.397 0 4.647-.712 6.534-1.943.155-.107.351-.113.512-.012a1 1 0 01.119 1.756C14.886 5.564 12.527 6.5 10 6.5c-2.667 0-5.145-1.046-6.961-2.816a1 1 0 01-.079-1.524zm10.84 10.84a1 1 0 01-1.19.8A11.945 11.945 0 0010 15c-2.397 0-4.647.712-6.534 1.943a.997.997 0 01-.512.012 1 1 0 01-.119-1.756C5.114 13.436 7.473 12.5 10 12.5c2.667 0 5.145 1.046 6.961 2.816a1 1 0 01.079 1.524z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Biodegradable</h3>
            <p className="text-gray-700">
              Our products are made from plant-based materials that break down naturally, leaving no microplastics behind.
            </p>
          </div>
          
          {/* Solar-Powered Feature */}
          <div className="bg-soft-cream-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-forest-green-100 rounded-full text-forest-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Solar-Powered</h3>
            <p className="text-gray-700">
              Our power banks and chargers harness the power of the sun, giving you clean energy wherever you go.
            </p>
          </div>
          
          {/* Recyclable Feature */}
          <div className="bg-soft-cream-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-forest-green-100 rounded-full text-forest-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Recyclable</h3>
            <p className="text-gray-700">
              When your product reaches the end of its life, we'll take it back and recycle it responsibly.
            </p>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 p-6 md:p-8 bg-forest-green-50 rounded-2xl border border-forest-green-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold text-forest-green-800 mb-3">Our Environmental Commitment</h3>
              <p className="text-forest-green-700">
                For every product sold, we plant a tree and offset the carbon footprint of shipping. 
                We've partnered with environmental organizations to ensure our business practices 
                are as green as our products.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <span className="block text-3xl font-bold text-forest-green-600 mb-1">10k+</span>
                  <span className="text-sm text-gray-600">Trees Planted</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <span className="block text-3xl font-bold text-forest-green-600 mb-1">15t</span>
                  <span className="text-sm text-gray-600">CO₂ Offset</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <span className="block text-3xl font-bold text-forest-green-600 mb-1">2t</span>
                  <span className="text-sm text-gray-600">Plastic Saved</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <span className="block text-3xl font-bold text-forest-green-600 mb-1">100%</span>
                  <span className="text-sm text-gray-600">Recyclable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
