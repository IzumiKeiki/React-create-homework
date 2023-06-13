import Cart from "./Addtocart/Cart";
import ProductList from "./Addtocart/ProductList";

function Addtocart() {
  return (
    <div className="addtocart">
      <h2>Book Store</h2>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default Addtocart;
