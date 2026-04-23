import Head from 'next/head';

export default function ShippingPolicyPage() {
  return (
    <>
      <Head>
        <title>Shipping Policy | Nazka.Tech Australia</title>
        <meta
          name="description"
          content="Australian shipping policy for Nazka.Tech eco-friendly tech accessories. Fast delivery, tracking, and international shipping information."
        />
      </Head>

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-eco-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shipping <span className="text-eco-green-400">Policy</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Fast, reliable delivery across Australia and worldwide. All orders are carbon-neutral shipped.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Delivery Options */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Delivery Options
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-eco-dark-200">
                  <div>
                    <h3 className="font-semibold text-white">Standard Delivery (Australia)</h3>
                    <p className="text-sm text-gray-400">3-5 business days</p>
                  </div>
                  <span className="text-eco-green-400 font-bold">$9.95</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-eco-dark-200">
                  <div>
                    <h3 className="font-semibold text-white">Express Delivery (Australia)</h3>
                    <p className="text-sm text-gray-400">1-2 business days</p>
                  </div>
                  <span className="text-eco-green-400 font-bold">$14.95</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-eco-dark-200">
                  <div>
                    <h3 className="font-semibold text-white">Free Shipping (Australia)</h3>
                    <p className="text-sm text-gray-400">On orders over $100</p>
                  </div>
                  <span className="text-eco-green-400 font-bold">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-white">International Shipping</h3>
                    <p className="text-sm text-gray-400">7-14 business days (varies by country)</p>
                  </div>
                  <span className="text-eco-green-400 font-bold">From $29.95</span>
                </div>
              </div>
            </div>

            {/* Order Processing */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Order Processing
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>• Orders placed before 2:00 PM AEST (Monday - Friday) are processed the same day.</p>
                <p>• Orders placed after 2:00 PM or on weekends/public holidays are processed the next business day.</p>
                <p>• You'll receive a confirmation email with tracking information once your order ships.</p>
                <p>• All orders are packed using eco-friendly, recyclable materials.</p>
              </div>
            </div>

            {/* Tracking */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Order Tracking
              </h2>
              <p className="text-gray-300">
                Once your order has been dispatched, you'll receive an email with a tracking number and link to monitor your delivery progress in real-time. You can also track your order through your account dashboard.
              </p>
            </div>

            {/* International Shipping */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                International Shipping
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>• We ship to over 50 countries worldwide.</li>
                <li>• International orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</li>
                <li>• Delivery times vary by destination; please allow 7-14 business days for most countries.</li>
                <li>• Tracked international shipping is available for all orders.</li>
              </ul>
            </div>

            {/* Carbon Neutral Delivery */}
            <div className="bg-eco-green-500/10 border border-eco-green-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Carbon-Neutral Delivery
              </h2>
              <p className="text-gray-300">
                All Nazka.Tech shipments are carbon-neutral. We offset every kilogram of CO₂ emitted during delivery through verified environmental projects, aligning with our commitment to sustainability.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300">
                If you have any questions about shipping, please contact us at{' '}
                <a href="mailto:shipping@nazka.tech" className="text-eco-green-400 hover:underline">
                  shipping@nazka.tech
                </a>
                {' '}or call us at <span className="text-eco-green-400">+61 2 8000 0000</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
