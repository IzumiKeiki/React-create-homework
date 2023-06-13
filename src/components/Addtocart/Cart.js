function Cart() {
  return (
    <div className="cart">
      <ul>
        <li>
          name
          <button className="addtocart-btn remove">Remove</button>
        </li>
        <li>
          name
          <button className="addtocart-btn remove">Remove</button>
        </li>
        <li>
          name
          <button className="addtocart-btn remove">Remove</button>
        </li>
      </ul>
      <button className="addtocart-btn clear">Clear Cart</button>
    </div>
  );
}

export default Cart;
