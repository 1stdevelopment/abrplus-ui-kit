import { useEffect, useRef } from 'react';

import { colors, hhmmss } from '@configs';
import { Text } from '@abrplus/ui';

import { useTaskStore } from '../../../../../../core/store';
import { TimerMessageType } from './worker';

const TimerWorker = new URL('./worker.ts', import.meta.url);

export const Timer = ({ isRunning }: { isRunning?: boolean }) => {
  const timer = useTaskStore((state) => state.timer);
  const setTimer = useTaskStore((state) => state.setTimer);

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(TimerWorker, { type: 'module' });
    workerRef.current = worker;

    worker.onmessage = (e) => {
      const { type, payload } = e.data;
      if (type === TimerMessageType.TICK) {
        setTimer(payload);
      }
    };

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, [setTimer]);

  useEffect(() => {
    const worker = workerRef.current;
    if (!worker) return;

    if (isRunning) {
      worker.postMessage({ type: TimerMessageType.SET, payload: timer });
      worker.postMessage({ type: TimerMessageType.START });
    } else {
      worker.postMessage({ type: TimerMessageType.STOP });
    }

    return () => {
      worker.postMessage({ type: TimerMessageType.STOP });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  return (
    <Text color={colors.white_ff} weight="medium">
      {hhmmss(timer || 0)}
    </Text>
  );
};
