import { useRef } from 'react';

export const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  delay: number,
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (...args: Parameters<T>) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
