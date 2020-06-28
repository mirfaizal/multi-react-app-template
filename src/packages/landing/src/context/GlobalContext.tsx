import { createContext } from 'react';

export interface IGlobalContext {
  useLogin: () => void;
  useLogout: () => void;
  getCovidInfo: () => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  useLogin: () => {},
  useLogout: () => {},
  getCovidInfo: () => {},
});
