import Head from 'next/head';

export default function FAQPage() {
  const faqs = [
    {
      question: 'Where are Nazka.Tech products made?',
      answer: 'Our products are designed in Australia and manufactured in certified facilities that meet both our quality and sustainability standards. We prioritise local Australian suppliers where possible and ensure all partners adhere to ethical labour practices and environmental regulations.',
    },
    {
      question: 'Do you ship to all Australian states and territories?',
      answer: 'Yes, we ship to all Australian states and territories including NSW, VIC, QLD, WA, SA, TAS, NT, and ACT. We offer both standard and express delivery options. Orders over $100 to any Australian address qualify for free standard shipping.',
    },
    {
      question: 'Are your products GST-inclusive?',
      answer: 'Yes, all prices displayed on our website include Australian Goods and Services Tax (GST). Our ABN is displayed on all invoices for your records.',
    },
    {
      question: 'What is your warranty policy?',
      answer: 'All Nazka.Tech products come with a minimum 12-month manufacturer warranty against defects. This warranty is in addition to your rights under the Australian Consumer Law. If a product fails due to a manufacturing defect within the warranty period, we\'ll repair, replace, or refund it at our discretion.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order has been dispatched, you\'ll receive an email with a tracking number and a link to track your shipment. You can also log into your Nazka.Tech account to view order history and tracking information.',
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be modified or cancelled within 1 hour of placement by contacting our support team. Once an order has entered processing (typically within 2-4 hours), changes or cancellations are no longer possible as items are packed quickly for delivery.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping starts from $29.95 AUD. Please note that international orders may be subject to customs duties and taxes imposed by the destination country, which are the responsibility of the recipient.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major Australian payment methods including credit/debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and Afterpay. All transactions are processed in AUD and secured with SSL encryption.',
    },
    {
      question: 'Are your products truly eco-friendly?',
      answer: 'Absolutely. Every Nazka.Tech product is designed with sustainability in mind. We use biodegradable, recycled, or recyclable materials wherever possible. Each product includes detailed environmental impact information, and we third-party verify our sustainability claims. Our carbon-neutral shipping ensures your purchase has minimal environmental footprint.',
    },
    {
      question: 'What happens if my order arrives damaged?',
      answer: 'If your order arrives damaged or tampered with, please refuse delivery or sign as "damaged" and contact us within 24 hours with photos. We\'ll immediately arrange a replacement or full refund including shipping costs. This is in addition to your rights under Australian Consumer Law.',
    },
    {
      question: 'Do you have a physical store in Australia?',
      answer: 'Currently, we operate online-only, allowing us to keep prices competitive and reduce our carbon footprint. However, we occasionally pop up at sustainability markets and eco-expos in major Australian cities. Follow us on social media to stay updated on our next appearance.',
    },
    {
      question: 'How do I care for my eco-friendly products?',
      answer: 'Each product comes with care instructions tailored to its materials. Generally, we recommend gentle hand washing with eco-friendly soap, avoiding harsh chemicals, and storing in a cool, dry place. Proper care extends product life and reduces waste – a core part of our sustainability mission.',
    },
    {
      question: 'What is your price match policy?',
      answer: 'We strive to offer competitive pricing while maintaining high sustainability standards. If you find an identical product (same brand, model, condition) from an Australian retailer at a lower price, contact us within 7 days of purchase and we\'ll match it plus give you a 10% discount on your next order.',
    },
    {
      question: 'Can I return a product if I\'ve changed my mind?',
      answer: 'Yes! We offer a 30-day happiness guarantee. If you\'ve changed your mind and the product is unused, in original packaging, and in resaleable condition, you can return it for a full refund (excluding return shipping). This goes beyond your statutory rights under Australian Consumer Law.',
    },
    {
      question: 'Are gift cards available?',
      answer: 'Yes! Digital gift cards are available in denominations from $25 to $500 AUD and can be used for any Nazka.Tech purchase. They\'re delivered by email instantly and never expire. Physical gift cards are not currently available to reduce plastic waste.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'Our Australian support team is available Monday to Friday, 9am–5pm AEST. You can reach us via email at <a href="mailto:support@nazka.tech" className="text-eco-green-400 hover:underline">support@nazka.tech</a>, phone at +61 2 8000 0000, or through our website contact form. We aim to respond to all inquiries within 24 business hours.',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQs | Nazka.Tech Australia</title>
        <meta
          name="description"
          content="Frequently asked questions about Nazka.Tech eco-friendly tech accessories. Shipping, returns, warranties, and Australian delivery information."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-eco-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-eco-green-400">Questions</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Everything you need to know about our products, shipping, and Australian service standards.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto divide-y divide-eco-dark-200/50">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-eco-dark-100/30 rounded-xl mb-4 overflow-hidden open:bg-eco-dark-100/60 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white group-open:text-eco-green-400 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-eco-green-500/20 flex items-center justify-center group-open:bg-eco-green-500/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed animate-fade-in">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br/>') }} />
                </div>
              </details>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white mb-3">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Our Australian support team is available to help with any questions you have about products, orders, or sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@nazka.tech"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <span className="text-gray-400">or</span>
              <span className="text-eco-green-400 font-semibold">+61 2 8000 0000</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
