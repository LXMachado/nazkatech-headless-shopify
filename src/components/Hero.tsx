import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-eco-dark-50 grid-pattern">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-4 py-1 bg-eco-dark-200 text-eco-green-400 rounded-full text-sm font-medium mb-4">
              Sustainable Tech Accessories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Eco Meets <span className="text-eco-green-400 eco-glow">Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Discover our range of eco-friendly tech accessories that honor ancient wisdom while embracing modern innovation.
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
          
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-eco">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden">
              {/* Using regular img tag instead of next/image for direct rendering */}
              <img 
                src="/images/nazka-hero.png"
                alt="Nazka Tech - Ancient wisdom meets modern innovation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-dark-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <p className="text-sm md:text-base font-medium text-eco-green-300">Inspired by ancient traditions</p>
                <h3 className="text-lg md:text-xl font-bold">Nazka craftsmanship meets modern technology</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-eco-green-500 opacity-5 transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-eco-green-500 opacity-5 transform -rotate-45"></div>
    </section>
  );
};

export default Hero;
