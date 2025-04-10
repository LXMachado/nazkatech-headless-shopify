import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllProducts, getProductByHandle } from '@/lib/shopify';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  
  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div className="container-custom py-20 text-center">Loading...</div>;
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: `${selectedVariant.id}-${Date.now()}`, // Ensure unique ID for cart items
      variantId: selectedVariant.id,
      productId: product.id,
      title: product.title,
      handle: product.handle,
      image: product.image,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      currencyCode: selectedVariant.currencyCode,
      quantity: quantity,
    });
  };
  
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.currencyCode,
    }).format(parseFloat(price));
  };
  
  return (
    <>
      <Head>
        <title>{`${product.title} | Nazka.Tech`}</title>
        <meta name="description" content={product.description} />
      </Head>
      
      <div className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative rounded-2xl overflow-hidden bg-soft-cream-50">
            {product.images && product.images.length > 0 ? (
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={product.images[0].url} 
                  alt={product.images[0].altText}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={product.image} 
                  alt={product.imageAlt}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <div className="text-2xl font-medium text-forest-green-500 mb-6">
              {formatPrice(selectedVariant.price)}
            </div>
            
            <div className="prose prose-green mb-8" dangerouslySetInnerHTML={{ __html: product.descriptionHtml || product.description }} />
            
            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Options
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant.id}
                      className={`px-4 py-2 text-sm rounded-xl border ${
                        selectedVariant.id === variant.id
                          ? 'border-forest-green-500 bg-forest-green-50 text-forest-green-700'
                          : 'border-gray-200 hover:border-forest-green-200'
                      }`}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex border border-gray-300 rounded-xl w-32">
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-forest-green-500" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center focus:outline-none"
                />
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-forest-green-500" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant.availableForSale}
              className="btn btn-primary w-full mb-4"
            >
              {selectedVariant.availableForSale ? 'Add to Cart' : 'Out of Stock'}
            </button>
            
            {/* Eco-friendly Badges */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-forest-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Biodegradable Materials</span>
              </div>
              <div className="flex items-center text-forest-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Sustainably Made</span>
              </div>
              <div className="flex items-center text-forest-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span>100% Recyclable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  
  const paths = products.map((product) => ({
    params: { handle: product.handle },
  }));
  
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const handle = params?.handle as string;
  const product = await getProductByHandle(handle);
  
  if (!product) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      product,
    },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
};
