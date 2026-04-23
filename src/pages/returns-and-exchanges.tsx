import Head from 'next/head';
import Link from 'next/link';

export default function ReturnsAndExchangesPage() {
  return (
    <>
      <Head>
        <title>Returns & Exchanges | Nazka.Tech</title>
        <meta name="description" content="Returns and exchanges policy for Nazka.Tech purchases." />
      </Head>

      <section className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Returns & Exchanges</h1>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>We accept returns within 30 days of delivery for unused items in original condition.</p>
            <p>Exchanges are available for eligible products based on stock availability.</p>
            <p>Refunds are issued to the original payment method after inspection.</p>
            <p>Contact support before sending any return so we can provide instructions.</p>
          </div>
          <div className="mt-10">
            <Link href="/#contact" className="btn btn-secondary">Start a Return</Link>
          </div>
        </div>
      </section>
    </>
  );
}
