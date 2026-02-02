import { useCallback } from 'react';

import { useWindowDimensions } from './useWindowDimensions';

// don't change properties its matching the tailwind default config
const SMALL_SCREEN = 640;
const MEDIUM_SCREEN = 768;
const LARGE_SCREEN = 1024;
const EXTRA_LARGE_SCREEN = 1280;

export function useObserveWindow() {
  const { width } = useWindowDimensions();

  const getIsWidthSmallerThan = useCallback(
    (query: number) => {
      if (typeof window === 'undefined') return;

      return width <= query;
    },
    [width],
  );

  const getIsWidthLargerThan = useCallback(
    (query: number) => {
      if (typeof window === 'undefined') return;

      return width > query;
    },
    [width],
  );

  const getIsWidthBetween = useCallback(
    (queries: [number, number]) => {
      if (queries[0] >= queries[1]) {
        throw new Error(
          `The second query: ${queries[1]}px must be greater than the first query: ${queries[0]}px`,
        );
      }

      if (typeof window === 'undefined') return;

      return width > queries[0] && width <= queries[1];
    },
    [width],
  );

  const isSmallerThenLarge = getIsWidthSmallerThan(LARGE_SCREEN);

  const isSmallerThanSmall = getIsWidthSmallerThan(SMALL_SCREEN);

  const isSmallerThanMedium = getIsWidthSmallerThan(MEDIUM_SCREEN);

  const isSmallerThanExtraLarge = getIsWidthLargerThan(EXTRA_LARGE_SCREEN);

  return {
    getIsWidthSmallerThan,
    getIsWidthLargerThan,
    getIsWidthBetween,
    isSmallerThanExtraLarge,
    isSmallerThanMedium,
    isSmallerThanSmall,
    isSmallerThenLarge,
  };
}
