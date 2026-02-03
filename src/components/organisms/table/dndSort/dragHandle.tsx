import { colors } from '@configs';
import { useContext } from 'react';

import { Icon } from '../../../';
import { RowContext } from './context';

export const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);

  return (
    <button style={{ cursor: 'move' }} ref={setActivatorNodeRef} {...listeners}>
      <Icon name="drag_and_drop" color={colors.primary_light_2} />
    </button>
  );
};
