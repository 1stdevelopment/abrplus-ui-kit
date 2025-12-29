import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import {
  CrmObjectType,
  InboxFilterResponseVM,
  InboxFilterTypes,
  useGetV1CrmObjectTypeGetRelatedInboxCrmObjectTypes,
} from '@configs/crmObject';

import { Flex, Text } from '../../../../../antOverrides';
import { Icon } from '../../../../../atoms';
import { SelectRawValue } from '../../../../../molecules/select/types';
import { Select } from '../../../../select';
import TaskListContainer from './taskListContainer';

interface TasklistProps {
  inboxFilter: InboxFilterResponseVM;
  onBack: () => void;
}

export const TaskList = ({ inboxFilter, onBack }: TasklistProps) => {
  const { t } = useTranslation();
  const [crmObjectTypeId, setCrmObjectTypeId] = useState<SelectRawValue>('');

  const { data: taskTypes } = useGetV1CrmObjectTypeGetRelatedInboxCrmObjectTypes(
    {
      crmObjectTypeIndex: CrmObjectType.Task,
    },
    { enabled: inboxFilter.filterType === InboxFilterTypes.Task },
  );

  const taskTypeOptions = useMemo(() => {
    const options =
      taskTypes?.map(({ name, crmObjectTypeId }) => ({
        label: name,
        value: crmObjectTypeId,
      })) || [];

    return [{ label: t('common.literal.all'), value: undefined }, ...options];
  }, [taskTypes, t]);

  return (
    <>
      <Flex align="center" className="w-max cursor-pointer p-2" onClick={onBack}>
        <Icon name="Chevron_Right" color={colors.primary_dark_1} />

        <Text color={colors.primary_dark_1} weight="medium" className="mt-1">
          {t('root.literal.backToInbox')}
        </Text>
      </Flex>

      {inboxFilter.filterType === InboxFilterTypes.Task && (
        <Flex className="bg-light-7 px-3 py-2">
          <Select.Single
            selectedValue={crmObjectTypeId}
            onChangeValue={(value) => value && setCrmObjectTypeId(value)}
            options={taskTypeOptions}
            defaultValue={taskTypeOptions[0]}
            style={{ height: 34 }}
            hideErrorMessage
          />
        </Flex>
      )}

      <Text color={colors.primary_dark_1} weight="bold" className="bg-light-1 w-full px-3 py-2">
        {inboxFilter.name}
      </Text>

      <TaskListContainer
        crmObjectTypeId={crmObjectTypeId as string}
        inboxFilterId={inboxFilter.id}
      />
    </>
  );
};
