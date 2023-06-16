import { useContext } from "react";
import { CartContext } from "./CartContext";

import ProductItem from "./ProductItem";

function ProductList() {
  const { listColor } = useContext(CartContext);

  const arrayofobjects = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "PHP" },
    { id: 5, name: "SQL" },
  ];

  return (
    <div className={`product-list ${listColor > 3}`}>
      {arrayofobjects.map((item) => (
        <ProductItem key={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default ProductList;
