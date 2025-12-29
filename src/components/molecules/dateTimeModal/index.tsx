import { useQueryClient } from '@tanstack/react-query';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { colors, getErrorMessage, useConvertISOToLocal } from '@configs';
import {
  getV1InboxInboxlist,
  getV1ReminderGetReminderList,
  usePostV1ReminderSetReminder,
} from '@configs/crmObject';

import { InputDatePicker, InputTimePicker, useNotification } from '..';
import { useLayoutNotification } from '../../../core/providers/notification';
import { Flex, Text } from '../../antOverrides';
import { HorizontalLine, VerticalLine } from '../../atoms';
import { Modal } from '../../organisms';
import { DateTimeModalForm } from './form';

interface TimePickerModalProps {
  open: boolean;
  onClose: () => void;
  crmObjectId?: string;
  type?: 'reminder' | 'followUp';
}

const DateTimeModal = ({
  open,
  onClose: _onClose,
  crmObjectId,
  type = 'reminder',
}: TimePickerModalProps) => {
  const { t } = useTranslation();

  const { convertISOToLocal } = useConvertISOToLocal();
  const { api } = useLayoutNotification();

  const { date, time } = DateTimeModalForm.useWatch();
  const { handleSubmit, reset } = DateTimeModalForm.useFormContext();
  const { errors } = DateTimeModalForm.useFormState();

  const queryClient = useQueryClient();
  const notification = useNotification();

  const onClose = () => {
    reset();
    _onClose();
  };

  const { mutate: setReminder } = usePostV1ReminderSetReminder({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getV1ReminderGetReminderList.key],
        refetchType: 'all',
      });
      queryClient.invalidateQueries({ queryKey: [getV1InboxInboxlist.key], refetchType: 'all' });

      onClose();
      api.destroy(crmObjectId);
    },
    onError: (error) => {
      notification.error(getErrorMessage(error));
    },
  });

  const onSubmit = () => {
    const reminderDate = moment(
      date?.format('YYYY-MM-DD') + ' ' + time?.format('HH:mm'),
    ).toISOString();

    if (!crmObjectId) return;

    setReminder({
      requestBody: {
        ...(type === 'reminder'
          ? {
              crmObjectId,
              reminderDate,
            }
          : { crmObjectId, dueDate: reminderDate, hasReminder: false, isDone: false }),
      },
    });
  };

  return (
    <Modal.Confirm
      getContainer={() => document.getElementById('inbox-container') as any}
      width={360}
      title={t('common.literal.selectTimeAndDate')}
      submitTitle={t('common.literal.toSave')}
      discardTitle={t('common.literal.discard')}
      // zIndex of the last open  popover is 1300
      zIndex={2050 + 1}
      closable
      open={open}
      onClose={onClose}
      onDiscard={onClose}
      onCancel={onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex vertical className="w-full">
        <DateTimeModalForm.Controller
          name="date"
          rules={{ required: t('common.error.fieldRequired') }}
          render={({ field }) => (
            <InputDatePicker
              disabledDates={(current) => moment().isAfter(current, 'day')}
              placeholder={t('common.literal.selectDate')}
              error={errors.date}
              {...field}
            />
          )}
        />

        <DateTimeModalForm.Controller
          name="time"
          rules={{ required: t('common.error.fieldRequired') }}
          render={({ field }) => (
            <InputTimePicker
              placeholder={t('common.literal.selectTime')}
              showSecond={false}
              error={errors.time}
              // disabledDate={(date) => date.isSame() || date.isAfter()}
              // disabledTime={(date) => ({})}
              {...field}
            />
          )}
        />

        <HorizontalLine className="mb-4" />

        <Flex>
          <Flex>
            <Text
              iconName="calendar_header"
              iconColor={colors.primary_light_2}
              iconSize={18}
              color={colors.primary}
              weight="bold"
              size={14}
            >
              {convertISOToLocal(date?.toISOString()).humanDate || '--'}
            </Text>
          </Flex>

          <VerticalLine color={colors.light_7} />

          <Flex>
            <Text
              iconName="time"
              iconColor={colors.primary_light_2}
              iconSize={18}
              color={colors.primary}
              weight="bold"
              size={14}
            >
              {time?.format('HH:mm') || '--'}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Modal.Confirm>
  );
};

const Provider = (props: TimePickerModalProps) => (
  <DateTimeModalForm.Provider>
    <DateTimeModal {...props} />
  </DateTimeModalForm.Provider>
);

export { Provider as DateTimeModal };
