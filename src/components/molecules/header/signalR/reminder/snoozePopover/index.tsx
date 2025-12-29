import { useQueryClient } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import { getV1ReminderGetReminderList, usePostV1ReminderSnooze } from '@configs/crmObject';

import { Flex, Text } from '../../../../../antOverrides';
import { Icon, Popover, PopoverProps } from '../../../../../atoms';

interface SnoozePopoverProps extends PopoverProps {
  children: ReactNode;
  lifePathId?: string;
  onSuccess?: () => void;
  onSelectTime: () => void;
}

export const SnoozePopover = ({
  children,
  lifePathId,
  onSuccess,
  onSelectTime,
}: SnoozePopoverProps) => {
  const { t } = useTranslation();

  const snoozeOptions = useMemo(
    () => [
      { label: t('common.literal.countMinutes', { count: 1 }), value: 1 },
      { label: t('common.literal.countMinutes', { count: 5 }), value: 5 },
      { label: t('common.literal.countMinutes', { count: 10 }), value: 10 },
      { label: t('common.literal.countMinutes', { count: 15 }), value: 15 },
      { label: t('common.literal.countMinutes', { count: 30 }), value: 30 },
      { label: t('common.literal.countHours', { count: 1 }), value: 60 },
    ],
    [t],
  );

  const queryClient = useQueryClient();

  const {
    mutate: snoozeReminder,
    // isPending: isSnoozePending
  } = usePostV1ReminderSnooze({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getV1ReminderGetReminderList.key],
        refetchType: 'all',
      });
      onSuccess?.();
    },
  });

  const onSnooze = (minutes: number) => {
    snoozeReminder({ queryParams: { id: lifePathId, minutes } });
  };

  return (
    <>
      <Popover
        trigger={'click'}
        placement="leftTop"
        overlayInnerClassName="!p-0"
        zIndex={2049 + 1}
        content={
          <Flex vertical className="relative w-[200px]">
            <Flex vertical className="small-custom-scrollbar max-h-[100px] overflow-y-scroll">
              {snoozeOptions.map(({ label, value }) => (
                <Flex
                  align="center"
                  justify="space-between"
                  className="hover:bg-light-1 cursor-pointer px-3 py-1"
                  onClick={() => onSnooze(value)}
                >
                  <Text size={16} color={colors.primary_dark_1}>
                    {label}
                  </Text>

                  {/* {isSnoozePending && (
                    <Loading
                      color={colors.primary_dark_1}
                      thickness={1.5}
                      isLoading
                      size={16}
                      className="me-1"
                    />
                  )} */}
                </Flex>
              ))}
            </Flex>

            <Flex
              gap={8}
              align="center"
              className="hover:bg-light-1 border-light-7 sticky bottom-0 w-full cursor-pointer border-t px-3 py-1"
              onClick={onSelectTime}
            >
              <Icon name="calendar_event_line" />

              <Text size={14} color={colors.primary_dark_1}>
                {t('common.literal.selectTimeAndDate')}
              </Text>
            </Flex>
          </Flex>
        }
      >
        {children}
      </Popover>
    </>
  );
};
