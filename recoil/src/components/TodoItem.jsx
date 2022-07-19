import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todosState } from 'states/todosState';

const TodoItem = ({ item }) => {
  const setTodos = useSetRecoilState(todosState);

  const toggleTodo = () =>
    setTodos(todos =>
      todos.map(todo =>
        todo.id === item.id ? { ...item, isComplete: !item.isComplete } : todo
      )
    );

  const editTodo = ({ target: { value } }) =>
    setTodos(todos =>
      todos.map(todo =>
        todo.id === item.id ? { ...item, content: value } : todo
      )
    );

  const deleteTodo = () =>
    setTodos(todos => todos.filter(todo => todo.id !== item.id));

  return (
    <div>
      <input type="checkbox" checked={item.isComplete} onChange={toggleTodo} />
      <input value={item.content} onChange={editTodo} />
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
