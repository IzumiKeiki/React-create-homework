import { CartProvider } from "./Addtocart/CartContext";

import Cart from "./Addtocart/Cart";
import ProductList from "./Addtocart/ProductList";

function Addtocart() {
  return (
    <CartProvider>
      <div className="addtocart">
        <h2>Pokemon Store</h2>
        <div className="container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default Addtocart;
