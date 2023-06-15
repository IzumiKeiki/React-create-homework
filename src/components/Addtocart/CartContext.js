import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [listColor, setListColor] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setListColor(listColor + 1);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    setListColor(listColor - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setListColor(0);
  };

  return (
    <CartContext.Provider
      value={{ listColor, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
