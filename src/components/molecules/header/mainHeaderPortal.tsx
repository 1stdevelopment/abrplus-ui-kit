import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { MainHeaderContext } from './context';

interface MainHeaderPortalProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const MainHeaderPortal = ({ children, disabled = false }: MainHeaderPortalProps) => {
  const { container } = useContext(MainHeaderContext);

  if (disabled) return null;

  return container ? createPortal(children, container) : null;
};

export const MainHeaderPortalProvider = ({ children }: MainHeaderPortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <MainHeaderContext.Provider value={{ container, setContainer }}>
      {children}
    </MainHeaderContext.Provider>
  );
};
