import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-soft-cream-100 leaf-bg">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-4 py-1 bg-forest-green-100 text-forest-green-600 rounded-full text-sm font-medium mb-4">
              Sustainable Tech Accessories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Eco Meets Tech
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Discover our range of eco-friendly tech accessories that are kind to the planet without compromising on quality or style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link href="/#sustainability" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden bg-white shadow-md">
            <div className="aspect-w-1 aspect-h-1 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-forest-green-100 rounded-2xl">
                <svg
                  className="h-32 w-32 text-forest-green-500 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 12.24C16 14.74 13.5 17.24 11 17.24C8.5 17.24 7 15.74 7 13.24C7 10.74 9.5 9.24 12 9.24C14.5 9.24 16 10.74 16 12.24Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="absolute inset-0 bg-soft-cream-100 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20C63.3 20 74 30.7 74 44C74 57.3 63.3 68 50 68C36.7 68 26 57.3 26 44C26 30.7 36.7 20 50 20ZM58 36C58 39.3 60.7 42 64 42C67.3 42 70 39.3 70 36C70 32.7 67.3 30 64 30C60.7 30 58 32.7 58 36ZM0 0H100V100H0V0Z' fill='%232D6A4F' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-forest-green-500 opacity-10 transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-forest-green-500 opacity-10 transform -rotate-45"></div>
    </section>
  );
};

export default Hero;
