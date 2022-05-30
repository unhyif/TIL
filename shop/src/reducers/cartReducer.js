import produce from 'immer';

export function cartReducer(state, action) {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        draft.cart.push({ ...payload, quantity: 1 });
      });

    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        let index = draft.cart.findIndex(item => item.id === payload.id);
        draft.cart.splice(index, 1);
      });

    case 'CHANGE_CART_QUANTITY':
      return produce(state, draft => {
        let index = draft.cart.findIndex(item => item.id === payload.id);
        draft.cart.splice(index, 1, payload);
      });

    default:
      return state;
  }
}
