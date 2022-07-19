import { createContext } from 'react';

interface AppContextInterface {
  isTall: boolean;
}

export const AppContext = createContext<AppContextInterface | null>(null);
