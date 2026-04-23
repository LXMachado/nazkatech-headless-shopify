import { Product, ProductVariant, CartItem } from '@/types';
import { sampleProducts, getSampleProductByHandle } from '@/data/sampleProducts';

// Toggle to use sample products for development (no Shopify API connection)
const DEVELOPMENT_MODE = false;

// Trim any spaces from the domain to prevent URL parsing errors
const domain = (process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '').trim();
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
const hasStorefrontConfig = Boolean(domain && storefrontAccessToken);

// For debugging
console.log('Environment check:');
console.log('Development mode:', DEVELOPMENT_MODE ? 'Yes (using sample products)' : 'No (using Shopify API)');
console.log('Domain configured:', domain || 'Not set');
console.log('Access token available:', storefrontAccessToken ? 'Yes' : 'No');

// Storefront API fetch function
const shopifyFetch = async ({ query, variables }: { query: string; variables?: any }) => {
  if (!hasStorefrontConfig) {
    return {
      status: 400,
      body: { errors: [{ message: 'Missing Shopify Storefront API environment variables' }] },
    };
  }

  try {
    const apiUrl = `https://${domain}/api/2023-07/graphql.json`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    };

    console.log('Shopify API Request URL:', apiUrl);
    
    const result = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
    
    const responseBody = await result.json();
    
    // Log the response for debugging
    console.log('Shopify API Response Status:', result.status);
    if (result.status !== 200) {
      console.log('Shopify API Response Errors:', responseBody.errors);
    }
    
    return {
      status: result.status,
      body: responseBody,
    };
  } catch (error) {
    console.error('Error fetching data from Shopify:', error);
    return {
      status: 500,
      body: { errors: [{ message: 'Error fetching data from Shopify' }] },
    };
  }
};

export async function getAllProducts(): Promise<Product[]> {
  // If in development mode, return sample products instead
  if (DEVELOPMENT_MODE) {
    console.log('Using sample products for development');
    // Simulate API delay for more realistic development
    await new Promise(resolve => setTimeout(resolve, 500));
    return sampleProducts;
  }

  if (!hasStorefrontConfig) {
    console.warn('Shopify Storefront API env vars missing. Falling back to sample products.');
    return sampleProducts;
  }

  // If not in development mode, try using the Storefront API
  const query = `
    query GetAllProducts {
      products(first: 100) {
        edges {
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 100) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch({ query });
  
  if (response.status === 200 && response.body.data && response.body.data.products) {
    console.log('Successfully fetched products using Storefront API');
    
    const products = response.body.data.products.edges.map(({ node }: any) => {
      const product: Product = {
        id: node.id,
        title: node.title,
        description: node.description,
        handle: node.handle,
        price: node.priceRange.minVariantPrice.amount,
        currencyCode: node.priceRange.minVariantPrice.currencyCode,
        image: node.images.edges[0]?.node.url || '',
        imageAlt: node.images.edges[0]?.node.altText || node.title,
        variants: node.variants.edges.map(({ node: variant }: any): ProductVariant => ({
          id: variant.id,
          title: variant.title,
          price: variant.price.amount,
          currencyCode: variant.price.currencyCode,
          availableForSale: variant.availableForSale,
        })),
      };
      return product;
    });

    return products;
  }
  
  // If Storefront API fails, use sample products
  console.log('Storefront API failed. Falling back to sample products...');
  console.error('Storefront API error:', response.body.errors);
  return sampleProducts;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  // If in development mode, return sample product instead
  if (DEVELOPMENT_MODE) {
    console.log(`Using sample product with handle "${handle}" for development`);
    // Simulate API delay for more realistic development
    await new Promise(resolve => setTimeout(resolve, 500));
    return getSampleProductByHandle(handle);
  }

  if (!hasStorefrontConfig) {
    console.warn('Shopify Storefront API env vars missing. Falling back to sample product data.');
    return getSampleProductByHandle(handle);
  }

  // If not in development mode, try using the Storefront API
  const query = `
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        handle
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 100) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    }
  `;

  const variables = { handle };
  const response = await shopifyFetch({ query, variables });

  if (response.status === 200 && response.body.data && response.body.data.productByHandle) {
    console.log('Successfully fetched product using Storefront API');
    
    const product = response.body.data.productByHandle;
    
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      handle: product.handle,
      descriptionHtml: product.descriptionHtml,
      price: product.priceRange.minVariantPrice.amount,
      currencyCode: product.priceRange.minVariantPrice.currencyCode,
      images: product.images.edges.map(({ node }: any) => ({
        url: node.url,
        altText: node.altText || product.title,
        width: node.width,
        height: node.height,
      })),
      image: product.images.edges[0]?.node.url || '',
      imageAlt: product.images.edges[0]?.node.altText || product.title,
      variants: product.variants.edges.map(({ node: variant }: any): ProductVariant => ({
        id: variant.id,
        title: variant.title,
        price: variant.price.amount,
        currencyCode: variant.price.currencyCode,
        availableForSale: variant.availableForSale,
      })),
    };
  }
  
  // If Storefront API fails, use sample product
  console.log('Storefront API failed to fetch product. Falling back to sample product.');
  console.error('Storefront API error:', response.body.errors);
  return getSampleProductByHandle(handle);
}

export async function createCheckout(cartItems: CartItem[]): Promise<string | null> {
  // If in development mode, return fake checkout URL
  if (DEVELOPMENT_MODE) {
    console.log('Using sample checkout for development');
    console.log('Cart items:', cartItems);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return a fake checkout URL for development
    return 'https://checkout.shopify.com/development-mode/sample-checkout';
  }

  if (!hasStorefrontConfig) {
    console.warn('Shopify Storefront API env vars missing. Checkout cannot be created.');
    return null;
  }
  
  // For production mode, use the real Shopify API
  const lineItems = cartItems.map(item => ({
    variantId: item.variantId,
    quantity: item.quantity,
  }));

  const query = `
    mutation CheckoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lineItems,
    },
  };

  const response = await shopifyFetch({ query, variables });

  if (response.status !== 200 || response.body.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
    console.error('Error creating checkout:', response.body.errors || response.body.data?.checkoutCreate?.checkoutUserErrors);
    return null;
  }

  return response.body.data.checkoutCreate.checkout.webUrl;
}
