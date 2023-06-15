import { useContext } from "react";
import { CartContext } from "./CartContext";

import ProductItem from "./ProductItem";

function ProductList() {
  const { count } = useContext(CartContext);

  return (
    <div className={`product-list ${count > 3}`}>
      <ProductItem name={"HTLM"} />
      <ProductItem name={"CSS"} />
      <ProductItem name={"Javascript"} />
      <ProductItem name={"PHP"} />
      <ProductItem name={"SQL"} />
    </div>
  );
}

export default ProductList;
