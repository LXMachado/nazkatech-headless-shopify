import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleProducts } from '@/data/sampleProducts';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Use sample products for now
    setProducts(sampleProducts);
  }, []);

  const handleAddToCart = (product: Product) => {
    // Add the first variant to the cart
    const variant = product.variants[0];
    
    addToCart({
      id: `${product.id}-${variant.id}`,
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      handle: product.handle,
      image: product.image,
      variantTitle: variant.title,
      price: variant.price,
      currencyCode: variant.currencyCode,
      quantity: 1
    });
  };

  return (
    <>
      <Head>
        <title>Nazka.Tech | Eco-Friendly Tech Accessories</title>
        <meta name="description" content="Eco-friendly tech accessories - biodegradable phone cases, solar power banks, and more. Where eco meets tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-soft-cream-100 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-green-500 mb-6">
              Eco Meets Tech
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Sustainable tech accessories for the environmentally conscious consumer. 
              Join the movement for a greener digital lifestyle.
            </p>
            <button className="btn btn-primary text-lg px-8 py-3">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of eco-friendly tech accessories that combine style, 
              functionality, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                <div className="aspect-w-1 aspect-h-1 h-48 bg-gray-100 flex items-center justify-center relative">
                  <img 
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-green-600 font-bold">
                      ${product.price}
                    </span>
                    <div className="space-x-2">
                      <Link href={`/products/${product.handle}`}
                        className="inline-block px-3 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        View
                      </Link>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="inline-block px-3 py-2 bg-forest-green-500 text-white rounded-lg text-sm font-medium hover:bg-forest-green-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="bg-forest-green-500 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Sustainable Tech</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join us in reducing e-waste and promoting sustainable technology solutions.
            </p>
            <button className="bg-white text-forest-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
