import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductItem({ name, link }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product-item">
      <p>{name}</p>
      <img src={link} alt={name} />
      <button
        className="addtocart-btn add"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: name })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
