import Head from 'next/head';
import Link from 'next/link';

export default function QualityPage() {
  return (
    <>
      <Head>
        <title>Quality | Nazka.Tech</title>
        <meta
          name="description"
          content="See how Nazka.Tech builds long-lasting products to reduce waste and replacement cycles."
        />
      </Head>

      <main className="container-custom py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Durable Product Quality
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We focus on durability testing and long-term usability to reduce
            replacement frequency. Higher product longevity means less electronic waste
            and better value over time.
          </p>

          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
