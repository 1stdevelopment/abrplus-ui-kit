import { memo } from 'react';

import { colors } from '@configs';

import { Flex, Text } from '../../../../../antOverrides';
import { Timer } from './timer';

interface TaskTimerProps {
  subject?: string;
  isRunning?: boolean;
}

export const TaskTimer = memo(({ subject, isRunning }: TaskTimerProps) => {
  return (
    <Flex
      flex={1}
      justify="space-between"
      align="center"
      className="bg-primary min-h-[38px] py-2 pe-14 ps-3"
    >
      <Text color={colors.white_ff} weight="medium">
        {subject || '--'}
      </Text>

      <Timer isRunning={isRunning} />
    </Flex>
  );
});
