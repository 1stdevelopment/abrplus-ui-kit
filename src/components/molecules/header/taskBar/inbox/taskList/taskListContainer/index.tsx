import { useTranslation } from 'react-i18next';

import { colors, useUserApps } from '@configs';
import { useGetV1InboxInboxlist } from '@configs/crmObject';
import { PlatformApplication } from '@configs/global';

import { useTaskStore } from '../../../../../../../core/store';
import { Flex, InfiniteLoader, Loading, Text } from '../../../../../../antOverrides';
import { useToggleTask } from '../../../hooks/useToggleTask';
import { TaskItem } from '../taskItem';

const TaskListContainer = ({
  inboxFilterId,
  crmObjectTypeId,
}: {
  inboxFilterId?: string;
  crmObjectTypeId?: string;
}) => {
  const { t } = useTranslation();

  const activeTaskId = useTaskStore((state) => state.task?.lifePathId);

  const {
    list: inboxList,
    fetchNextPage,
    hasMore,
    isPending,
  } = useGetV1InboxInboxlist(
    {
      filterId: inboxFilterId,
      PageSize: 5,
      ...(crmObjectTypeId ? { 'filterRawData.CrmObjectTypeId': crmObjectTypeId } : {}),
    },
    {
      enabled: !!inboxFilterId,
      staleTime: 1000 * 60 * 2,
    } as any,
  );
  const { toggle, isPending: isTogglePending } = useToggleTask();
  const { checkHasApp } = useUserApps();
  const hasTeam = checkHasApp(PlatformApplication.Team);

  return (
    <Flex
      className="bg-light-1 tiny-custom-scrollbar h-full overflow-y-scroll p-3 pt-0"
      id="inboxListContainer"
    >
      <Loading isLoading={isPending} className="min-h-20 flex-1 items-center justify-center">
        <InfiniteLoader
          hasMore={hasMore}
          onNextPage={fetchNextPage}
          className="flex flex-col gap-2"
          scrollableNodeId="inboxListContainer"
        >
          {inboxList?.length ? (
            inboxList?.map((task) => (
              <TaskItem
                {...task}
                hasTeam={hasTeam}
                onToggle={(props) => !isTogglePending && toggle(props)}
                isActive={task.lifePathId === activeTaskId}
              />
            ))
          ) : (
            <Flex justify="center" className="p-6">
              <Text size={16} color={colors.primary} weight="medium">
                {t('common.message.noResultFound')}
              </Text>
            </Flex>
          )}
        </InfiniteLoader>
      </Loading>
    </Flex>
  );
};

export default TaskListContainer;
