import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.count}</span>
              {item.name}
              <button
                className="addtocart-btn remove"
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: index })}>
                Remove
              </button>
            </li>
          ))}
          <button className="addtocart-btn clear" onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        </ul>
      )}
    </div>
  );
}
export default Cart;
