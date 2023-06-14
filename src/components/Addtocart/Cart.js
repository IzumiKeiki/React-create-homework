import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((name, index) => (
            <li key={index}>
              {name}
              <button className="addtocart-btn remove" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
          <button className="addtocart-btn clear" onClick={clearCart}>
            Clear Cart
          </button>
        </ul>
      )}
    </div>
  );
}

export default Cart;
