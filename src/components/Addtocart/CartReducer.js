export const initialState = {
  cartItems: [],
  listColor: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartItems: [...state.cartItems, action.payload],
        listColor: state.listColor + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        cartItems: state.cartItems.filter((_, i) => i !== action.payload),
        listColor: state.listColor - 1,
      };
    case "CLEAR_CART":
      return { cartItems: [], listColor: 0 };
    default:
      return state;
  }
};
