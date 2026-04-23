import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Nazka.Tech Australia</title>
        <meta
          name="description"
          content="Get in touch with Nazka.Tech customer support in Australia. Email, phone, and contact form for inquiries about products, orders, and sustainability."
        />
      </Head>

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-eco-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="text-eco-green-400">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Our Australian support team is here to help. Reach out and we'll respond within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Contact Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-eco-green-500/10 border border-eco-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">We'll respond within 24 business hours</p>
                <a href="mailto:support@nazka.tech" className="text-eco-green-400 hover:underline font-medium">
                  support@nazka.tech
                </a>
              </div>

              {/* Phone */}
              <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-eco-green-500/10 border border-eco-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">Mon–Fri, 9am–5pm AEST</p>
                <a href="tel:+61280000000" className="text-eco-green-400 hover:underline font-medium">
                  +61 2 8000 0000
                </a>
              </div>

              {/* Location */}
              <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-eco-green-500/10 border border-eco-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eco-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300 mb-4">Based in Sydney, Australia</p>
                <span className="text-gray-400 text-sm">NSW 2000</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-eco-dark-100/50 border border-eco-dark-200 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-eco-dark-200/50 border border-eco-dark-300 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-eco-green-500/50 focus:ring-1 focus:ring-eco-green-500/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-eco-dark-200/50 border border-eco-dark-300 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-eco-green-500/50 focus:ring-1 focus:ring-eco-green-500/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-eco-dark-200/50 border border-eco-dark-300 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-eco-green-500/50 focus:ring-1 focus:ring-eco-green-500/20 outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-eco-dark-200/50 border border-eco-dark-300 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-eco-green-500/50 focus:ring-1 focus:ring-eco-green-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto px-10"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
