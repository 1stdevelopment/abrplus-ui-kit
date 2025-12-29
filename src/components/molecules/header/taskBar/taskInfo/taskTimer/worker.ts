//  A Web Worker responsible for managing a persistent timer that continues
//  counting even when the browser tab is inactive or throttled by browser.

let interval: NodeJS.Timeout | undefined;
let timer = 0;

export enum TimerMessageType {
  START = 'START',
  STOP = 'STOP',
  SET = 'SET',
  TICK = 'TICK',
}

self.onmessage = (e) => {
  const { type, payload }: { type: TimerMessageType; payload: number } = e.data;

  switch (type) {
    case 'START':
      if (interval) return; // already running
      interval = setInterval(() => {
        timer += 1;
        self.postMessage({ type: TimerMessageType.TICK, payload: timer });
      }, 1000);
      break;

    case 'STOP':
      if (interval) clearInterval(interval);
      interval = undefined;
      break;

    case 'SET':
      timer = payload ?? 0;
      break;
  }
};
