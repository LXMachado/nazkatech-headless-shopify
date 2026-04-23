import Head from 'next/head';
import Link from 'next/link';

export default function ShippingPolicyPage() {
  return (
    <>
      <Head>
        <title>Shipping Policy | Nazka.Tech</title>
        <meta name="description" content="Shipping policy for Nazka.Tech orders." />
      </Head>

      <section className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Shipping Policy</h1>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>Orders are typically processed within 1-2 business days.</p>
            <p>Standard delivery times vary by location and are shown at checkout.</p>
            <p>Tracking details are sent by email once your order ships.</p>
            <p>For shipping questions, please contact us via the contact section.</p>
          </div>
          <div className="mt-10">
            <Link href="/#contact" className="btn btn-secondary">Contact Support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
