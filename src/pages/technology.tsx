import Head from 'next/head';
import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <>
      <Head>
        <title>Technology | Nazka.Tech</title>
        <meta
          name="description"
          content="Learn how Nazka.Tech designs energy-efficient accessories with lower environmental impact."
        />
      </Head>

      <main className="container-custom py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Energy-Efficient Technology
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We engineer products to reduce power waste, extend product lifespan, and
            improve charging efficiency. Our goal is simple: better performance with
            less environmental cost.
          </p>

          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
