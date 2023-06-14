import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductItem({ name }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <p>{name}</p>
      <button className="addtocart-btn add" onClick={() => addToCart(name)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
