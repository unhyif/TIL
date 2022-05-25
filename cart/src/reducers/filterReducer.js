export function filterReducer(state, action) {
  const payload = action.payload;

  switch (action.type) {
    case 'ORDER_BY_ASCENDING_PRICE':
      return { ...state, byAscendingPrice: payload };

    case 'FILTER_BY_STOCK':
      return { ...state, byStock: !state.byStock };

    case 'FILTER_BY_DELIVERY':
      return { ...state, byFastDelivery: !state.byFastDelivery };

    case 'FILTER_BY_RATING':
      return { ...state, rating: payload };

    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: payload };

    case 'CLEAR_FILTERS':
      return {
        byAscendingPrice: true,
        byStock: false,
        byFastDelivery: false,
        rating: 0,
        searchQuery: '',
      };

    default:
      return state;
  }
}
