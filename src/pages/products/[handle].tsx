import { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllProducts, getProductByHandle } from '@/lib/shopify';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { getSampleProductByHandle } from '@/data/sampleProducts';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedVariant.id}`,
      variantId: selectedVariant.id,
      productId: product.id,
      title: product.title,
      handle: product.handle,
      image: product.image,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      currencyCode: selectedVariant.currencyCode,
      quantity: quantity
    });
  };

  return (
    <>
      <Head>
        <title>{product.title} | Nazka.Tech</title>
        <meta name="description" content={product.description.slice(0, 160)} />
      </Head>

      {/* Breadcrumbs */}
      <section className="bg-eco-dark-50 pt-24 pb-6">
        <div className="container-custom">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-eco-green-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-eco-green-400 transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-eco-green-400">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-10 bg-eco-dark-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-eco-dark-100 rounded-2xl flex items-center justify-center p-8 border border-eco-dark-200 overflow-hidden">
              <img 
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-eco-dark-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-eco-green-400 mr-2"></span>
                <span className="text-sm text-gray-300">Eco-Friendly</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{product.title}</h1>
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold text-eco-green-400">${product.price} {product.currencyCode}</p>
                <div className="inline-flex items-center text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-2 text-sm text-white">(5.0)</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-white font-medium mb-2">Description</h3>
                <div className="text-gray-300" 
                  dangerouslySetInnerHTML={{ 
                    __html: product.descriptionHtml || `<p>${product.description}</p>` 
                  }}
                />
              </div>

              {/* Variants */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <h3 className="text-white font-medium mb-2">Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-4 py-2 border rounded-md ${
                          selectedVariant.id === variant.id 
                            ? 'bg-eco-green-500 text-eco-dark-900 border-eco-green-500' 
                            : 'bg-eco-dark-200 text-white border-eco-dark-300 hover:border-eco-green-400'
                        }`}
                      >
                        {variant.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-white font-medium mb-2">Quantity</h3>
                <div className="flex items-center border border-eco-dark-300 rounded-lg w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-white hover:text-eco-green-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="flex-grow h-10 flex items-center justify-center text-white font-medium">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:text-eco-green-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow md:flex-grow-0 py-3 px-8"
                >
                  Add to Cart
                </button>
                <Link href="/cart" className="btn btn-outline flex-grow md:flex-grow-0 py-3 px-8">
                  View Cart
                </Link>
              </div>

              {/* Eco Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-eco-dark-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Carbon Neutral</span>
                  </div>
                  <p className="text-gray-400 text-sm">Our products are carbon neutral from production to delivery</p>
                </div>
                <div className="bg-eco-dark-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Recycled Materials</span>
                  </div>
                  <p className="text-gray-400 text-sm">Made from post-consumer recycled materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-eco-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-8">You Might Also Like</h2>
          <Link href="/products" className="inline-flex items-center text-eco-green-400 hover:text-eco-green-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Products
          </Link>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch all products
    const products = await getAllProducts();
    
    // Create paths from product handles
    const paths = products.map((product) => ({
      params: { handle: product.handle },
    }));
    
    return { 
      paths, 
      fallback: 'blocking' // Show 404 if handle doesn't exist
    };
  } catch (error) {
    console.error('Error generating product paths:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params?.handle) {
      return { notFound: true };
    }
    
    const handle = params.handle as string;
    const product = await getProductByHandle(handle);
    
    // If product not found in API, try to get from sample data
    if (!product) {
      const sampleProduct = getSampleProductByHandle(handle);
      
      if (!sampleProduct) {
        return { notFound: true };
      }
      
      return {
        props: {
          product: sampleProduct
        },
        // Revalidate every hour
        revalidate: 3600
      };
    }
    
    return {
      props: {
        product
      },
      // Revalidate every hour
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching product by handle:', error);
    return { notFound: true };
  }
};