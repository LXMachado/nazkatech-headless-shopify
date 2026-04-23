import Head from 'next/head';

export default function ReturnsExchangesPage() {
  return (
    <>
      <Head>
        <title>Returns & Exchanges | Nazka.Tech Australia</title>
        <meta
          name="description"
          content="Australian Consumer Law compliant returns and exchanges policy for Nazka.Tech eco-friendly tech accessories. 30-day guarantee, refunds, and exchanges."
        />
      </Head>

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-eco-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Returns & <span className="text-eco-green-400">Exchanges</span>
            </h1>
            <p className="text-gray-300 text-lg">
              We stand behind our products with a 30-day happiness guarantee, backed by Australian Consumer Law.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* SATISFACTION GUARANTEE - HIGHLIGHT */}
            <div className="bg-eco-green-500/10 border border-eco-green-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                30-Day Happiness Guarantee
              </h2>
              <p className="text-gray-300 text-lg">
                If you're not 100% happy with your purchase, return it within 30 days for a full refund or exchange. No questions asked.
              </p>
            </div>

            {/* Australian Consumer Law */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M6 7l6-2" />
                </svg>
                Your Rights Under Australian Consumer Law
              </h2>
              <p className="text-gray-300 mb-4">
                Under the Australian Competition and Consumer Act 2010, you have statutory rights when purchasing goods. These include guarantees that products are:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Of acceptable quality (safe, durable, free from defects, acceptable in appearance and finish)</li>
                <li>Fit for their intended purpose</li>
                <li>Match their description or sample</li>
              </ul>
              <p className="text-gray-300 mt-4">
                If a product fails to meet these guarantees, you may be entitled to a repair, replacement, or refund. Our 30-day guarantee goes beyond your statutory rights.
              </p>
            </div>

            {/* Return Eligibility */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Return Eligibility
              </h2>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Items eligible for return within 30 days:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Unused and in original packaging</li>
                  <li>With all accessories, tags, and certificates included</li>
                  <li>In resaleable condition (no damage, stains, or signs of use)</li>
                </ul>
                <p className="mt-4"><strong className="text-white">Non-returnable items:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personalised or custom-made products</li>
                  <li>Downloadable digital products</li>
                  <li>Gift cards</li>
                  <li>Products that have been opened, used, or damaged due to customer fault</li>
                </ul>
              </div>
            </div>

            {/* How to Return */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                How to Return
              </h2>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>Contact our support team at <a href="mailto:returns@nazka.tech" className="text-eco-green-400 hover:underline">returns@nazka.tech</a> to initiate your return.</li>
                <li>Receive a prepaid return shipping label via email.</li>
                <li>Pack the item securely in its original packaging (or similar protective packaging).</li>
                <li>Attach the return label and drop off at your nearest Australia Post outlet.</li>
                <li>Allow 5-7 business days for us to process your return once received.</li>
              </ol>
            </div>

            {/* Refunds & Exchanges */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Refunds & Exchanges
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-eco-dark-200/30 p-5 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Refunds</h3>
                  <p className="text-gray-300 text-sm">
                    Refunds are issued to the original payment method within 5-7 business days after approval. Shipping costs are non-refundable unless the return is due to our error.
                  </p>
                </div>
                <div className="bg-eco-dark-200/30 p-5 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Exchanges</h3>
                  <p className="text-gray-300 text-sm">
                    Want a different size or colour? Exchange is easy! Contact us and we'll help you swap your item. Additional shipping charges may apply for exchanges.
                  </p>
                </div>
              </div>
            </div>

            {/* Faulty or Damaged Items */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Faulty or Damaged Items
              </h2>
              <p className="text-gray-300 mb-4">
                If your item arrives damaged or is faulty, we apologise. Please contact us immediately with photos of the issue. We'll offer:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Repair</strong> – Where feasible and reasonable</li>
                <li><strong>Replacement</strong> – Same item (if available)</li>
                <li><strong>Refund</strong> – Full refund including shipping</li>
              </ul>
              <p className="text-gray-300 mt-4">
                You're also protected under Australian Consumer Law, which guarantees a remedy for major failures.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-300">
                Our friendly support team is here to help. Email us at{' '}
                <a href="mailto:support@nazka.tech" className="text-eco-green-400 hover:underline">
                  support@nazka.tech
                </a>{' '}
                or call <span className="text-eco-green-400">+61 2 8000 0000</span> (Mon–Fri, 9am–5pm AEST).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
