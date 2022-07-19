import React from 'react';
import { useRecoilState } from 'recoil';
import { todosFilterState } from 'states/todosState';

const TodosFilter = () => {
  const [filter, setFilter] = useRecoilState(todosFilterState);

  const changeFilter = ({ target: { value } }) => setFilter(value);

  return (
    <select value={filter} onChange={changeFilter}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
  );
};

export default TodosFilter;
