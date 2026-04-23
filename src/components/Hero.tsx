import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-eco-dark-50 grid-pattern min-h-[90vh] flex items-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-eco-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-eco-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eco-green-500/10 border border-eco-green-500/20 rounded-full text-sm font-medium text-eco-green-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-eco-green-500"></span>
              </span>
              Sustainable Tech Accessories
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] text-balance">
              Eco Meets{' '}
              <span className="text-eco-green-400 eco-glow">Tech</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg text-balance">
              Discover our range of eco-friendly tech accessories that honor
              ancient wisdom while embracing modern innovation.
            </p>

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

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-eco-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span>Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-eco-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <span>Ethically Made</span>
              </div>
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
                      <p className="text-xs font-semibold uppercase tracking-widest text-eco-green-400 mb-1.5">
                        Inspired by ancient traditions
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                        Nazka craftsmanship meets modern technology
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 glass-card rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-eco-green-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-eco-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Powered by</p>
                    <p className="text-sm font-semibold text-white">
                      Solar Energy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
