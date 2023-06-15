import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCount(count + 1);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    setCount(count - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCount(0);
  };

  return (
    <CartContext.Provider
      value={{ count, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
