import Link from 'next/link';

interface HeroProps {
  featuredProductImage?: string;
  featuredProductName?: string;
}

const Hero: React.FC<HeroProps> = ({ featuredProductImage, featuredProductName }) => {
  const productImage = featuredProductImage || '/images/product-1.svg';
  const productName = featuredProductName || 'Biodegradable MagSafe Case';

  return (
    <section className="relative overflow-hidden bg-eco-dark-50 grid-pattern min-h-[90vh] flex items-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-eco-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-eco-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.08] text-balance">
              Sustainable Tech Accessories
              <span className="text-eco-green-400 eco-glow"> That Actually Look Good</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg text-balance">
              Premium eco-friendly phone cases, chargers and accessories designed for
              modern living.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-eco-green-500/25 bg-eco-green-500/10 px-4 py-2 mb-10">
              <span className="text-sm text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-200">1,200+ happy customers</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="btn btn-primary px-8 py-3.5"
              >
                Shop Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/#sustainability"
                className="btn btn-secondary px-8 py-3.5"
              >
                Our Mission
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <span>Carbon Neutral Materials</span>
              <span>30-Day Returns</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Image container with refined framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/nazka-hero.png"
                    alt="Nazka Tech - Ancient wisdom meets modern innovation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-eco-dark-900/80 via-eco-dark-900/20 to-transparent" />
                </div>

                {/* Bottom caption bar */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                        Sustainable design inspired by heritage craftsmanship
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product cue for faster store comprehension */}
              <div className="mt-4 md:mt-5 glass-card rounded-2xl p-3.5 md:p-4 flex items-center justify-between gap-3">
                <div className="w-14 h-14 rounded-xl bg-eco-dark-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-eco-green-400">Best Seller</p>
                  <p className="text-sm text-white font-semibold truncate">{productName}</p>
                  <p className="text-xs text-gray-400">Plant-based material • Shock resistant</p>
                </div>
                <Link href="/products" className="btn btn-primary px-4 py-2 text-xs md:text-sm shrink-0">
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
