import { SignalRProvider } from '../../../../core';
import { Flex } from '../../../antOverrides';
import { Clickable, Icon, Popover } from '../../../atoms';
import { useTaskBarSignalREventListener } from './hooks';
import { Inbox } from './inbox';
import { TaskInfo } from './taskInfo';

export const TaskBar = () => {
  const { performanceEndWork, performanceStartWork } = useTaskBarSignalREventListener();

  SignalRProvider.use('PerformanceStartWork', performanceStartWork);
  SignalRProvider.use('PerformanceEndWork', performanceEndWork);

  return (
    <Popover
      id="inbox-container"
      trigger={['click']}
      placement="bottomRight"
      overlayInnerClassName="!p-0 rounded overflow-hidden"
      overlayInnerStyle={{ height: window.innerHeight * 0.8 }}
      content={
        <Flex className="h-full w-[384px]" vertical>
          <TaskInfo />
          <Inbox />
        </Flex>
      }
    >
      <Clickable>
        <Icon name="task-list-outlined" />
      </Clickable>
    </Popover>
  );
};
