export const initialState = {
  cartItems: [],
  listColor: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find((item) => item.name === action.payload)
        ? true
        : false;
      const newItem = { name: action.payload, count: 1 };
      return {
        cartItems: existingItem
          ? state.cartItems.map((item) =>
              item.name === action.payload ? { ...item, count: item.count + 1 } : item
            )
          : [...state.cartItems, newItem],
        listColor: state.listColor + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        cartItems: state.cartItems.filter((_, i) => i !== action.payload),
        listColor: state.listColor - 1,
      };
    case "CLEAR_CART":
      return {
        cartItems: [],
        listColor: 0,
      };
    default:
      return state;
  }
};
