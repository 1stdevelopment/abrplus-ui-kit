import { ReactNode, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { Flex } from '../flex';
import { Loading } from '../loading';

interface InfiniteLoaderProps {
  children?: ReactNode;
  indicatorSize?: number;
  indicatorColor?: string;
  hasMore: boolean;
  className?: string;
  onNextPage: () => void;
  scrollableNodeId: string;
}

const getScrollableNode = (scrollableNodeId: string): HTMLElement | null => {
  return document.getElementById(scrollableNodeId);
};

const debounce = (func: () => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

const InfiniteLoader = ({
  children,
  indicatorColor,
  indicatorSize,
  className,
  hasMore,
  scrollableNodeId,
  onNextPage,
}: InfiniteLoaderProps) => {
  useEffect(() => {
    const scrollableNode = getScrollableNode(scrollableNodeId);

    if (scrollableNode) {
      const onScroll = () => {
        if (hasMore) {
          const { scrollHeight, scrollTop, clientHeight } = scrollableNode;

          const isBottom = Math.ceil(scrollTop) + clientHeight === scrollHeight;

          isBottom && onNextPage();
        }
      };

      onScroll();

      const debouncedOnScroll = debounce(onScroll, 1500);

      scrollableNode.addEventListener('scroll', debouncedOnScroll);

      return () => scrollableNode.removeEventListener('scroll', debouncedOnScroll);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, scrollableNodeId]);

  return (
    <div className={twMerge(className, 'w-full')} onClick={(e) => e.stopPropagation()}>
      {children}

      {hasMore && (
        <Flex className="min-h-12" align="center" justify="center">
          <Loading isLoading color={indicatorColor} size={indicatorSize} />
        </Flex>
      )}
    </div>
  );
};

export { InfiniteLoader };
