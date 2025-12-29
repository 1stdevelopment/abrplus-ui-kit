import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Loading } from '../../../../../antOverrides';
import { useToggleTask } from '../../hooks/useToggleTask';
import { ToggleIcon } from './icon';

interface ToggleButtonProps {
  className?: string;
  size?: number;
  isActive?: boolean;
  crmObjectId?: string;
  lifePathId?: string;
  subject?: string;
}

export const ToggleButton = memo(
  ({ isActive, className, size = 24, crmObjectId, lifePathId, subject }: ToggleButtonProps) => {
    const { toggle, isPending } = useToggleTask();

    const onToggle = async () => {
      if (!crmObjectId || !lifePathId || isPending) return;

      toggle({
        requestBody: { crmObjectId: crmObjectId, lifePathId: lifePathId, subject },
      });
    };

    return (
      <div onClick={onToggle} className={twMerge('bg-white-ff rounded-full', className)}>
        <Loading isLoading={isPending} width={size} height={size} size={size * 0.75}>
          <ToggleIcon size={size} isTaskActive={isActive} />
        </Loading>
      </div>
    );
  },
);
