export function cartReducer(state, action) {
  const type = action.type;
  const item = action.item;

  switch (type) {
    case 'add':
      return [...state, item];
    case 'remove':
      return state.filter(value => value.id !== item.id);
    case 'increment':
      return state.map(value => (value.id === item.id ? item : value));
    case 'decrement': {
      if (item.count < 0) return;
      return state.map(value => (value.id === item.id ? item : value));
    }
    default:
      return state;
  }
}
