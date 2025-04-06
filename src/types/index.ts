export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  descriptionHtml?: string;
  price: string;
  currencyCode: string;
  image: string;
  imageAlt: string;
  images?: ProductImage[];
  variants: ProductVariant[];
}

export interface ProductImage {
  url: string;
  altText: string;
  width?: number;
  height?: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: string;
  currencyCode: string;
  availableForSale: boolean;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  products: Product[];
}

export interface CartItem {
  id: string;
  variantId: string;
  productId: string;
  title: string;
  handle: string;
  image: string;
  variantTitle: string;
  price: string;
  currencyCode: string;
  quantity: number;
}

export interface CartContextType {
  isOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalPrice: string;
  totalItems: number;
  checkout: () => Promise<void>;
}
