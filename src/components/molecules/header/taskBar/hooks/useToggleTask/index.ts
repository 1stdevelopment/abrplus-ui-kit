import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import { usePostApiTaskStart, usePostApiTaskStop } from '@configs/electron';

import { useNotification } from '../../../../';
import { useTaskStore } from '../../../../../../core/store';

export type StartTaskProps = Parameters<ReturnType<typeof usePostApiTaskStart>['mutate']>[0];

export const useToggleTask = () => {
  const { t } = useTranslation();
  const { error: errorNotification } = useNotification();

  const { setTask, stopStoreTask, task, setTimer } = useTaskStore(
    useShallow((state) => ({
      setTask: state.setTask,
      stopStoreTask: state.stopTask,
      task: state.task,
      setTimer: state.setTimer,
    })),
  );

  const { mutate: startTask, isPending: isStartPending } = usePostApiTaskStart({
    onSuccess: (data, { requestBody: { crmObjectId, lifePathId, subject } }) => {
      setTimer((data.todayLifePathWorkTime ?? 0) * 60);

      if (data.startedWorkId) {
        setTask({
          isRunning: true,
          crmObjectId,
          lifePathId,
          workId: data.startedWorkId,
          subject,
        });
      }
    },
    onError: () => {
      errorNotification(t('team.error.logInElectronApp'));
    },
  });

  const { mutateAsync: stopTask, isPending: isStopPending } = usePostApiTaskStop({
    onSuccess: () => {
      stopStoreTask();
    },
  });

  const start = async (props: StartTaskProps) => {
    if (task?.isRunning) {
      // TODO requestBody completely is optional
      await stopTask({ requestBody: {} });
    }

    startTask(props);
  };

  const toggle = async (props: StartTaskProps) => {
    if (!props.requestBody.lifePathId || isStartPending || isStartPending) return;

    if (task?.isRunning) {
      await stopTask({ requestBody: {} });

      if (task?.lifePathId !== props.requestBody.lifePathId) {
        start(props);
      }
    } else {
      start(props);
    }
  };

  return { start, stopTask, toggle, isPending: isStartPending || isStopPending };
};
