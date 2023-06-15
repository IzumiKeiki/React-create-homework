import { useContext } from "react";
import { CartContext } from "./CartContext";

import ProductItem from "./ProductItem";

function ProductList() {
  const { listColor } = useContext(CartContext);

  return (
    <div className={`product-list ${listColor > 3}`}>
      <ProductItem name={"HTLM"} />
      <ProductItem name={"CSS"} />
      <ProductItem name={"Javascript"} />
      <ProductItem name={"PHP"} />
      <ProductItem name={"SQL"} />
    </div>
  );
}

export default ProductList;
