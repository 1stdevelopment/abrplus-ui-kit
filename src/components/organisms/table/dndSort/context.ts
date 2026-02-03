import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { createContext } from 'react';

export interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

export const RowContext = createContext<RowContextProps>({});
