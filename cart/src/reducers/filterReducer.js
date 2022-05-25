export function filterReducer(state, action) {
  switch (action.type) {
    case 'OUT_OF_STOCK':
      return { ...state, inStock: !state.inStock };

    case 'FAST_DELIVERY':
      return { ...state, fastDelivery: !state.fastDelivery };

    case 'CLEAR':
      return { ascending: true, inStock: true, fastDelivery: false, rating: 0 };

    default:
      return state;
  }
}
