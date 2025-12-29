import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { colors, hhmm } from '@configs';
import { useGetApiTaskTimeToday } from '@configs/electron';
import { Text } from '@abrplus/ui';

interface TodaysWorkProps {
  hasTeam?: boolean;
  isRunning?: boolean;
}

export const TodaysWork = memo(({ hasTeam, isRunning }: TodaysWorkProps) => {
  const { t } = useTranslation();

  const { data: todaysTime } = useGetApiTaskTimeToday({
    refetchInterval: isRunning && 60 * 1000,
    enabled: hasTeam && isRunning,
    gcTime: 0,
    staleTime: 0,
  });

  return (
    <div
      className={twMerge(
        'bg-primary flex min-h-[38px] w-full flex-1 items-center justify-between py-2 pe-14 ps-3',
        hasTeam && 'bg-light-2',
      )}
    >
      <Text color={hasTeam ? colors.primary : colors.white_ff} weight="medium">
        {t('root.literal.todaysWork')}
      </Text>

      {hasTeam && (
        <Text color={colors.primary} weight="medium">
          {hhmm(Math.floor(todaysTime || 0))}
        </Text>
      )}
    </div>
  );
});
