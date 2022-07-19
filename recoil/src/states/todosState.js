import { atom, selector, useRecoilValue } from 'recoil';

export const todosState = atom({ key: 'todosState', default: [] });

export const todosFilterState = atom({
  key: 'todosFilterState',
  default: 'Show All',
});

export const filteredTodosState = selector({
  key: 'filteredTodosState',
  get: ({ get }) => {
    const filter = get(todosFilterState);
    const todos = get(todosState);

    switch (filter) {
      case 'Show Completed':
        return todos.filter(todo => todo.isComplete);

      case 'Show Uncompleted':
        return todos.filter(todo => !todo.isComplete);

      default:
        return todos;
    }
  },
});

export const todosStatsState = selector({
  key: 'todosStatsState',
  get: ({ get }) => {
    const todos = get(todosState);
    const totalNum = todos.length;
    const totalCompletedNum = todos.filter(todo => todo.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const completedPercent = totalNum
      ? (totalCompletedNum / totalNum) * 100
      : 0;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      completedPercent,
    };
  },
});
