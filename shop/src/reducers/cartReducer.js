export function cartReducer(state, action) {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload.id),
      };

    case 'CHANGE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => (item.id === payload.id ? payload : item)),
      };

    default:
      return state;
  }
}
