import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Nazka.Tech</title>
        <meta
          name="description"
          content="Learn more about Nazka.Tech and our mission to build sustainable tech accessories."
        />
      </Head>

      <section className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-dark-100 border border-eco-dark-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-green-400" />
              <span className="text-sm font-medium text-gray-400">About Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building Tech That Respects The Planet
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Nazka.Tech creates eco-conscious accessories that combine performance,
              durability, and responsible design. We focus on sustainable materials,
              reduced waste, and product longevity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Our goal is simple: make everyday technology more sustainable without
              sacrificing quality, style, or usability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link href="/sustainability" className="btn btn-secondary">
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
