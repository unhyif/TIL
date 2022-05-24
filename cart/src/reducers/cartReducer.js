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

    case 'increment':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload.id
            ? { ...payload, quantity: payload.quantity + 1 }
            : item
        ),
      };

    case 'decrement': {
      if (!payload.quantity) return;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload.id
            ? { ...payload, quantity: payload.quantity - 1 }
            : item
        ),
      };
    }

    default:
      return state;
  }
}
