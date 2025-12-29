import { createContext, useContext } from 'react';

interface HeaderContextProps {
  setContainer: (node: HTMLElement | null) => void;
  container: HTMLElement | null;
}

export const MainHeaderContext = createContext<HeaderContextProps>({
  setContainer: () => null,
  container: null,
});

export const useMainHeaderContext = () => useContext(MainHeaderContext);
