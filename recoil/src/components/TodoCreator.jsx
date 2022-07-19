import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todosState } from 'states/todosState';

const TodoCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const onChange = ({ target: { value } }) => setInputValue(value);

  const setTodos = useSetRecoilState(todosState);
  const addTodo = () => {
    setTodos(todos => [
      ...todos,
      { id: new Date(), content: inputValue, isComplete: false },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input value={inputValue} onChange={onChange} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoCreator;
