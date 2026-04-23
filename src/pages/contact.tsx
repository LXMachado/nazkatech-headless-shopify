import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Nazka.Tech</title>
        <meta
          name="description"
          content="Get in touch with Nazka.Tech for product questions, partnerships, or support."
        />
      </Head>

      <section className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-dark-100 border border-eco-dark-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-eco-green-400" />
                <span className="text-sm font-medium text-gray-400">Contact</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Talk
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Questions about products, shipping, or partnerships? Reach out and
                our team will get back to you as soon as possible.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li>123 Eco Street, Green City</li>
                <li>info@nazka.tech</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>

            <div className="bg-eco-dark-100/50 border border-eco-dark-200/60 rounded-2xl p-6 md:p-8">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-xl bg-eco-dark-50 border border-eco-dark-200 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-eco-green-500/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl bg-eco-dark-50 border border-eco-dark-200 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-eco-green-500/40"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-xl bg-eco-dark-50 border border-eco-dark-200 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-eco-green-500/40"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
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
