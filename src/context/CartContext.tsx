import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, CartContextType } from '@/types';
import { createCheckout } from '@/lib/shopify';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('nazkatech-cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
        localStorage.removeItem('nazkatech-cart');
      }
    }
  }, []);
  
  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('nazkatech-cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const toggleCart = () => setIsOpen(!isOpen);
  const closeCart = () => setIsOpen(false);
  const openCart = () => setIsOpen(true);
  
  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        existingItem => existingItem.variantId === item.variantId
      );
      
      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        const newCart = [...prevItems];
        newCart[existingItemIndex].quantity += item.quantity;
        return newCart;
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
    openCart();
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('nazkatech-cart');
  };
  
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  ).toFixed(2);
  
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  
  const checkout = async () => {
    try {
      const checkoutUrl = await createCheckout(cartItems);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("Couldn't create checkout");
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  
  const value: CartContextType = {
    isOpen,
    toggleCart,
    closeCart,
    openCart,
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalItems,
    checkout,
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
