import React from 'react';
import { useRecoilValue } from 'recoil';
import { todosStatsState } from 'states/todosState';

const TodosStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, completedPercent } =
    useRecoilValue(todosStatsState);

  return (
    <ul>
      <li>{totalNum}</li>
      <li>{totalCompletedNum}</li>
      <li>{totalUncompletedNum}</li>
      <li>{completedPercent.toFixed(2) + '%'}</li>
    </ul>
  );
};

export default TodosStats;
