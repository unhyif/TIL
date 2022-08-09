import { ChangeEvent, useState } from 'react';

type ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;

export const useInput = () => {
  const [value, setValue] = useState<string>('');
  const onChange: ChangeHandler = e => setValue(e.target.value);
  const result: [string, ChangeHandler] = [value, onChange];
  return result;
};
