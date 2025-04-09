import { Product, ProductVariant, Collection, CartItem } from '@/types';

// Trim any spaces from the domain to prevent URL parsing errors
const domain = (process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '').trim();
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
const apiKey = process.env.SHOPIFY_API_KEY || '';
const apiSecret = process.env.SHOPIFY_API_SECRET || '';
const storePassword = process.env.SHOPIFY_STORE_PASSWORD || '';

// For debugging
console.log('Environment check:');
console.log('Domain configured:', domain || 'Not set');
console.log('Access token available:', storefrontAccessToken ? 'Yes' : 'No');
console.log('API Key available:', apiKey ? 'Yes' : 'No');
console.log('API Secret available:', apiSecret ? 'Yes' : 'No');
console.log('Store password available:', storePassword ? 'Yes' : 'No');

// Admin REST API fetch function
const shopifyAdminFetch = async (endpoint: string) => {
  try {
    const apiUrl = `https://${apiKey}:${storePassword}@${domain}/admin/api/2023-07/${endpoint}`;
    
    console.log('Shopify Admin API Request URL:', apiUrl.replace(`${apiKey}:${storePassword}@`, '***:***@'));
    
    const result = await fetch(apiUrl);
    
    const responseBody = await result.json();
    
    // Log the response for debugging
    console.log('Shopify Admin API Response Status:', result.status);
    if (result.status !== 200) {
      console.log('Shopify Admin API Response Error:', responseBody);
    }
    
    return {
      status: result.status,
      body: responseBody,
    };
  } catch (error) {
    console.error('Error fetching data from Shopify Admin API:', error);
    return {
      status: 500,
      body: { errors: [{ message: 'Error fetching data from Shopify Admin API' }] },
    };
  }
};

// API fetch function with multiple auth options (Storefront API)
const shopifyFetch = async ({ query, variables }: { query: string; variables?: any }) => {
  try {
    // Set up the API URL for the Storefront API (using 2023-07 version as it's known to be stable)
    const apiUrl = `https://${domain}/api/2023-07/graphql.json`;
    
    // We'll use both authentication methods in the headers to see which one works
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    };
    
    // Add basic auth if available
    if (apiKey && apiSecret) {
      const basicAuth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
      headers['Authorization'] = `Basic ${basicAuth}`;
    }
    
    // Log the request information for debugging (safely)
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

// Attempt to fetch products from Admin API as a fallback
export async function getProductsFromAdminAPI(): Promise<Product[]> {
  try {
    console.log('Attempting to fetch products using Admin API...');
    
    const response = await shopifyAdminFetch('products.json?limit=50');
    
    if (response.status !== 200 || !response.body.products) {
      console.error('Error fetching products from Admin API:', response.body);
      return [];
    }
    
    console.log(`Successfully fetched ${response.body.products.length} products from Admin API`);
    
    const products: Product[] = response.body.products.map((product: any) => {
      // Parse the first variant for price info
      const firstVariant = product.variants && product.variants.length > 0 
        ? product.variants[0] 
        : { price: '0.00' };
        
      // Parse image
      const image = product.images && product.images.length > 0
        ? product.images[0]
        : null;
        
      // Map to our Product type
      return {
        id: product.id.toString(),
        title: product.title,
        description: product.body_html || '',
        handle: product.handle,
        descriptionHtml: product.body_html || '',
        price: firstVariant.price,
        currencyCode: 'USD', // Default currency code
        image: image ? image.src : '',
        imageAlt: image ? (image.alt || product.title) : product.title,
        variants: product.variants.map((variant: any): ProductVariant => ({
          id: variant.id.toString(),
          title: variant.title,
          price: variant.price,
          currencyCode: 'USD', // Default currency code
          availableForSale: variant.available,
        })),
      };
    });
    
    return products;
  } catch (error) {
    console.error('Error in getProductsFromAdminAPI:', error);
    return [];
  }
}

export async function getAllProducts(): Promise<Product[]> {
  // First try using the Storefront API
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
  
  // If Storefront API fails, try the Admin API
  console.log('Storefront API failed, falling back to Admin API...');
  console.error('Storefront API error:', response.body.errors);
  
  return getProductsFromAdminAPI();
}

// Get a single product by handle from Admin API
export async function getProductByHandleFromAdminAPI(handle: string): Promise<Product | null> {
  try {
    console.log(`Attempting to fetch product with handle "${handle}" using Admin API...`);
    
    // First we need to get all products as Admin API doesn't support direct handle lookup
    const productsResponse = await shopifyAdminFetch('products.json?handle=' + handle);
    
    if (productsResponse.status !== 200 || !productsResponse.body.products || productsResponse.body.products.length === 0) {
      console.error('Error fetching product by handle from Admin API:', productsResponse.body);
      return null;
    }
    
    const product = productsResponse.body.products[0]; // Should be just one
    console.log(`Successfully fetched product "${product.title}" from Admin API`);
        
    // Parse the first variant for price info
    const firstVariant = product.variants && product.variants.length > 0 
      ? product.variants[0] 
      : { price: '0.00' };
      
    // Parse images
    const images = product.images && product.images.length > 0 
      ? product.images.map((img: any) => ({
          url: img.src,
          altText: img.alt || product.title,
          width: img.width,
          height: img.height,
        }))
      : [];
    
    // Map to our Product type
    return {
      id: product.id.toString(),
      title: product.title,
      description: product.body_html || '',
      handle: product.handle,
      descriptionHtml: product.body_html || '',
      price: firstVariant.price,
      currencyCode: 'USD', // Default currency code
      images,
      image: images.length > 0 ? images[0].url : '',
      imageAlt: images.length > 0 ? images[0].altText : product.title,
      variants: product.variants.map((variant: any): ProductVariant => ({
        id: variant.id.toString(),
        title: variant.title,
        price: variant.price,
        currencyCode: 'USD', // Default currency code
        availableForSale: variant.available,
      })),
    };
  } catch (error) {
    console.error('Error in getProductByHandleFromAdminAPI:', error);
    return null;
  }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  // First try using the Storefront API
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
  
  // If Storefront API fails, try the Admin API
  console.log('Storefront API failed to fetch product, falling back to Admin API...');
  console.error('Storefront API error:', response.body.errors);
  
  return getProductByHandleFromAdminAPI(handle);
}

export async function createCheckout(cartItems: CartItem[]): Promise<string | null> {
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
