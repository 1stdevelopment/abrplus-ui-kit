import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalContainerProps {
  id: string;
  children?: ReactNode;
}

export const PortalContainer = ({ children, id }: PortalContainerProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById(id);

    if (!el) {
      const observer = new MutationObserver(() => {
        el = document.getElementById(id);
        if (el) {
          setContainer(el);
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => observer.disconnect();
    }

    setContainer(el);
  }, [id]);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};
