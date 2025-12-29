import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useUserApps } from '@configs';
import { useGetApiTaskStatus, useGetApiTaskTimeTaskToday } from '@configs/electron';
import { PlatformApplication } from '@configs/global';

import { useTaskStore } from '../../../../../core/store';
import { Flex } from '../../../../antOverrides';
import { ToggleButton } from '../components';
import { TaskTimer } from './taskTimer';
import { TodaysWork } from './todaysWork';

export const TaskInfo = () => {
  const { checkHasApp } = useUserApps();
  const hasTeam = checkHasApp(PlatformApplication.Team);

  const { isRunning, subject, crmObjectId, lifePathId, setTask, setTimer } = useTaskStore(
    useShallow((state) => ({
      isRunning: state.task?.isRunning,
      subject: state.task?.subject,
      crmObjectId: state.task?.crmObjectId,
      lifePathId: state.task?.lifePathId,
      setTask: state.setTask,
      setTimer: state.setTimer,
    })),
  );

  const { data: status, isFetching } = useGetApiTaskStatus({
    staleTime: 0,
    refetchInterval: !window.electron && 60_000,
  });

  const { mutate: getTaskTodayTime } = useMutation({
    mutationFn:
      status?.crmObjectId && status.lifePathId
        ? useGetApiTaskTimeTaskToday.info({
            crmObjectId: crmObjectId || status?.crmObjectId,
            lifePathId: lifePathId || status?.lifePathId,
          }).fun
        : undefined,
    onSuccess: (time) => {
      setTimer((time || 0) * 60);

      setTask({
        isRunning: true,
        crmObjectId: status?.crmObjectId,
        lifePathId: status?.lifePathId,
        subject: status?.subject,
      });
    },
  });

  useEffect(() => {
    if (!isFetching && status?.isTaskRunning && !isRunning) {
      getTaskTodayTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status?.isTaskRunning, isFetching, isRunning]);

  return (
    <>
      <Flex className="relative w-full" vertical>
        {hasTeam && <TaskTimer isRunning={isRunning} subject={subject} />}
        {hasTeam && (
          <ToggleButton
            crmObjectId={crmObjectId}
            lifePathId={lifePathId}
            subject={subject}
            isActive
            size={36}
            className="absolute left-3 top-[19px]"
          />
        )}
        <TodaysWork hasTeam={hasTeam} isRunning={isRunning} />
      </Flex>
    </>
  );
};
