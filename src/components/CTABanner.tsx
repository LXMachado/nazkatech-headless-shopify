import Link from 'next/link';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-forest-green-600 relative overflow-hidden">
      {/* Background leaf pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544v2.83L25.456 30l-1.414 1.414L0 7.372v2.828L20.686 30l-1.414 1.414L0 12.2v2.83L15.914 30l-1.414 1.414L0 17.03v2.828L11.142 30l-1.414 1.414L0 21.856v2.83L6.37 30l-1.414 1.414L0 26.684V30h30V0h-4.73zm0 52.828L28 24.828 28.586 24 0 52.586v-2.83L28 21.172l1.414 1.414L0 48.03v-2.828L28 16.686l1.414 1.414L0 43.43v-2.83L28 12.2l1.414 1.414L0 38.858v-2.83L28 7.714 29.414 9.13 0 34.344v-2.83L28 3.232 29.414 4.646 0 29.86v-2.83L28 0h2.828L.284 30 0 30.414v2.544L30 2.544v-2.83L2.544 30 .284 47.3V30l.284-28z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Explore Sustainable Tech
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 md:px-12">
            Join us in creating a more sustainable future. Our eco-friendly tech accessories combine innovation with environmental responsibility.
          </p>
          <Link href="/#products" className="btn bg-white text-forest-green-600 hover:bg-soft-cream-100 font-semibold">
            Shop Collection
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default CTABanner;
