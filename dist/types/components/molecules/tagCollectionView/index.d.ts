import { ReactNode } from 'react';
export interface TagCollectionProps {
    tags?: {
        value: string;
        onRemove?: () => void;
    }[];
    label?: ReactNode;
    hasMore?: boolean;
    fetchNextPage?: () => void;
    isSearchable?: boolean;
    noContentFoundMessage?: string;
    numberOfRows?: number;
}
export declare const TagCollectionView: ({ tags, label, hasMore, fetchNextPage, isSearchable, noContentFoundMessage, numberOfRows, }: TagCollectionProps) => import("react/jsx-runtime").JSX.Element;
