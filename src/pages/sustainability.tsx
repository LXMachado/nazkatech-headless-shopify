import Head from 'next/head';
import Link from 'next/link';

export default function SustainabilityPage() {
  return (
    <>
      <Head>
        <title>Sustainability | Nazka.Tech</title>
        <meta
          name="description"
          content="Discover the sustainable materials and design practices behind Nazka.Tech products."
        />
      </Head>

      <main className="container-custom py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sustainability by Design
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Our product decisions prioritize recyclable materials, reduced packaging,
            and responsible sourcing. Every release aims to lower our footprint while
            keeping the durability customers expect.
          </p>

          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
