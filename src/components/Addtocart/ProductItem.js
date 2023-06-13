function ProductItem({ name }) {
  return (
    <div className="product-item">
      <p>{name}</p>
      <button className="addtocart-btn add">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
