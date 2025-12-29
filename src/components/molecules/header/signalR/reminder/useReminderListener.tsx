import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import reminderSVG from '@abrplus/config/assets/svgs/reminder.svg';
import { colors, redirectCrmObjectFinder } from '@configs';
import { getV1ReminderGetReminderList, usePostV1ReminderIgnore } from '@configs/crmObject';

import { useLayoutNotification } from '../../../../../core/providers/notification';
import { Flex, Text } from '../../../../antOverrides';
import { Icon, VerticalLine } from '../../../../atoms';
import { SnoozePopover } from './snoozePopover';

interface ReminderSignalProps {
  LifePathId?: string;
  CrmObjectId?: string;
  ReminderType?: 'Notify' | 'Ignore' | 'Snooze';
  AffectedUsersList?: string[];
  Subject?: string;
  Description?: string;
}

export const useReminderListener = ({
  openDateTimePicker,
}: {
  openDateTimePicker: (crmObjectId: string) => void;
}) => {
  const { api } = useLayoutNotification();
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const { mutate: dismissReminder } = usePostV1ReminderIgnore({
    onSuccess: (_, { queryParams }) => {
      queryClient.invalidateQueries({
        queryKey: [getV1ReminderGetReminderList.key],
        refetchType: 'all',
      });

      api.destroy(queryParams?.id);
    },
  });

  const onDismiss = (id: string) => {
    dismissReminder({ queryParams: { id } });
  };

  const openNotification = ({
    Subject,
    Description,
    CrmObjectId,
    LifePathId,
    ReminderType,
  }: ReminderSignalProps) => {
    if (ReminderType !== 'Notify') {
      api.destroy(LifePathId);
      return;
    }

    const btn = (
      <Flex align="center" justify="end">
        <Text
          color={colors.positive}
          size={14}
          weight="medium"
          className="cursor-pointer"
          onClick={() => LifePathId && onDismiss(LifePathId)}
        >
          {t('common.literal.fulfill')}
        </Text>

        <VerticalLine color={colors.light_7} />

        <Flex className="cursor-pointer">
          <SnoozePopover
            lifePathId={LifePathId}
            onSelectTime={() => CrmObjectId && openDateTimePicker(CrmObjectId)}
            onSuccess={() => api.destroy(CrmObjectId)}
          >
            <Flex align="center" gap={4}>
              <Text iconPosition="end" color={colors.secondary} size={14} weight="medium">
                {t('common.literal.snooze')}
              </Text>

              <Icon name="Chevron_Left" size={14} color={colors.secondary} />
            </Flex>
          </SnoozePopover>
        </Flex>
      </Flex>
    );

    api.destroy(CrmObjectId);
    api.open({
      message: (
        <Text
          color={colors.secondary}
          weight="medium"
          size={16}
          numberOfLines={1}
          className="cursor-pointer"
          onClick={() => CrmObjectId && redirectCrmObjectFinder(CrmObjectId, true)}
        >
          {Subject || '--'}
        </Text>
      ),

      description: (
        <Text color={colors.primary_light_1} size={14} numberOfLines={3}>
          {Description || '--'}
        </Text>
      ),
      btn,
      closable: false,
      key: LifePathId,
      duration: 0,
      className: '[&_.ant-notification-notice-btn]:!w-full !p-4',
      icon: <img src={reminderSVG} width={28} />,
      placement: 'topLeft',
    });
  };

  return { openNotification };
};
