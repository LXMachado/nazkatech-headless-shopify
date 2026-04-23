import Head from 'next/head';
import Link from 'next/link';

export default function FaqPage() {
  const faqs = [
    {
      q: 'What materials do you use?',
      a: 'We prioritize recycled, biodegradable, and responsibly sourced materials across our product line.',
    },
    {
      q: 'Do your products support fast charging?',
      a: 'Selected chargers and power accessories support fast charging standards. Check each product page for exact specs.',
    },
    {
      q: 'How long does shipping take?',
      a: 'Most orders are delivered within a few business days after dispatch, depending on destination.',
    },
    {
      q: 'How can I get help with my order?',
      a: 'Use our contact section and include your order number so we can assist quickly.',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ | Nazka.Tech</title>
        <meta name="description" content="Frequently asked questions about Nazka.Tech products and orders." />
      </Head>

      <section className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-eco-dark-200/60 bg-eco-dark-100/50 p-5">
                <h2 className="text-white font-semibold mb-2">{item.q}</h2>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/#contact" className="btn btn-secondary">Still Need Help?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
