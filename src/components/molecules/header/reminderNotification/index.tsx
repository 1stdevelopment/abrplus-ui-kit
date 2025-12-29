import { useCallback, useState } from 'react';

import { SignalRProvider } from '../../../../core';
import { DateTimeModal } from '../../dateTimeModal';
import { useReminderListener } from '../signalR/reminder/useReminderListener';

export const ReminderNotification = () => {
  const [dateTimePicker, setDateTimePicker] = useState<{ isOpen: boolean; crmObjectId?: string }>({
    isOpen: false,
  });

  const closeTimePicker = useCallback(() => setDateTimePicker({ isOpen: false }), []);
  const openDateTimePicker = useCallback(
    (crmObjectId: string) => setDateTimePicker({ isOpen: true, crmObjectId }),
    [],
  );

  const { openNotification } = useReminderListener({
    openDateTimePicker,
  });

  SignalRProvider.use('ReminderNotified', openNotification);

  return (
    <>
      <DateTimeModal
        open={dateTimePicker.isOpen}
        crmObjectId={dateTimePicker.crmObjectId}
        onClose={closeTimePicker}
      />
    </>
  );
};
