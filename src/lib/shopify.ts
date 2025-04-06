import { Product, ProductVariant, Collection, CartItem } from '@/types';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

const shopifyFetch = async ({ query, variables }: { query: string; variables?: any }) => {
  try {
    const result = await fetch(`https://${domain}/api/2023-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    });
    
    return {
      status: result.status,
      body: await result.json(),
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
  
  if (response.status !== 200 || !response.body.data) {
    console.error('Error fetching products:', response.body.errors);
    return [];
  }

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

export async function getProductByHandle(handle: string): Promise<Product | null> {
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

  if (response.status !== 200 || !response.body.data.productByHandle) {
    console.error('Error fetching product:', response.body.errors);
    return null;
  }

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
