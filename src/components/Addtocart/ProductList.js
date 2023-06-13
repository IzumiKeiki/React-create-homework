import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="product-list">
      <ProductItem name={"HTLM"} />
      <ProductItem name={"CSS"} />
      <ProductItem name={"Javascript"} />
      <ProductItem name={"PHP"} />
      <ProductItem name={"SQL"} />
    </div>
  );
}

export default ProductList;
