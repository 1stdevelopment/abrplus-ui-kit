import { ReactNode } from 'react';
interface InfiniteLoaderProps {
    children?: ReactNode;
    indicatorSize?: number;
    indicatorColor?: string;
    hasMore: boolean;
    className?: string;
    onNextPage: () => void;
    scrollableNodeId: string;
}
declare const InfiniteLoader: ({ children, indicatorColor, indicatorSize, className, hasMore, scrollableNodeId, onNextPage, }: InfiniteLoaderProps) => import("react/jsx-runtime").JSX.Element;
export { InfiniteLoader };
