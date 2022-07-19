import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodosState } from 'states/todosState';
import TodosFilter from 'components/TodosFilter';
import TodosStats from 'components/TodosStats';
import TodoItem from 'components/TodoItem';
import TodoCreator from 'components/TodoCreator';

const Home = () => {
  const todos = useRecoilValue(filteredTodosState);

  return (
    <>
      <TodosFilter />
      <TodosStats />
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
      <TodoCreator />

      <hr />
    </>
  );
};

export default Home;
