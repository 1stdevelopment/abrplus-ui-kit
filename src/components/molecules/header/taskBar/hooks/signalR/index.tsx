import { useQueryClient } from '@tanstack/react-query';

import { TaskType, getApiTaskStatus } from '@configs/electron';

import { useTaskStore } from '../../../../../../core/store';

interface StartTaskProps {
  crmObjectId?: string;
  lifePathId?: string;
  subject?: string;
  taskType: TaskType;
  workTime?: number;
  workId?: string;
}

export const useTaskBarSignalREventListener = () => {
  const setTask = useTaskStore((state) => state.setTask);
  const stopTask = useTaskStore((state) => state.stopTask);
  const setTimer = useTaskStore((state) => state.setTimer);

  const queryClient = useQueryClient();

  const performanceStartWork = ({ crmObjectId, subject, lifePathId, workTime }: StartTaskProps) => {
    if (!crmObjectId || !subject) return;

    setTask({
      isRunning: true,
      crmObjectId,
      lifePathId,
      subject,
    });

    // workTime is in minutes
    setTimer((workTime || 0) * 60);
  };

  const performanceEndWork = () => {
    queryClient.invalidateQueries({ queryKey: [getApiTaskStatus.key], refetchType: 'all' });
    stopTask();
  };

  return { performanceStartWork, performanceEndWork };
};
