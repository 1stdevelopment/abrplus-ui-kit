import { colors, useInteractions } from '@configs';

import { Icon } from '../../../../../';
import { useTaskStore } from '../../../../../../core/store';

export const ToggleIcon = ({ size, isTaskActive }: { size?: number; isTaskActive?: boolean }) => {
  const { isHovered, isActive, eventHandlers } = useInteractions();
  const isRunning = useTaskStore((state) => state.task?.isRunning);

  return (
    <div {...eventHandlers()}>
      <Icon
        name={isRunning && isTaskActive ? 'pause_fill' : 'play-circle-filled'}
        className="cursor-pointer"
        color={
          isRunning && isTaskActive
            ? isActive
              ? colors.negative_dark_1
              : isHovered
                ? colors.negative_light_2
                : colors.negative
            : isActive
              ? colors.positive_dark_1
              : isHovered
                ? colors.positive_light_2
                : colors.positive
        }
        size={size}
      />
    </div>
  );
};
