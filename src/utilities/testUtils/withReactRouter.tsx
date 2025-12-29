import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const withReactRouter = (children: ReactNode) => {
  return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>;
};
