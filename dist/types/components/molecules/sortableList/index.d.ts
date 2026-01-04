import { Props as DndContextProps } from '@dnd-kit/core/dist/components/DragOverlay';
import { Props as SortableContextProps } from '@dnd-kit/sortable/dist/components/SortableContext';
import { HTMLAttributes, ReactNode } from 'react';
export interface DraggableItem {
    id: string | number;
}
interface SortableListProps<T extends DraggableItem> {
    move: (i: number, j: number) => void;
    data: T[];
    renderItem: (item: T, index: number) => ReactNode;
    wrapperClassName?: string;
    activateDistance?: number;
    dndContextProps?: DndContextProps;
    sortableContextProps?: SortableContextProps;
    sortableWrapperProps?: HTMLAttributes<HTMLDivElement>;
    sortableItemProps?: HTMLAttributes<HTMLDivElement>;
}
export declare const SortableList: <T extends DraggableItem>({ move, renderItem, data, wrapperClassName, activateDistance, dndContextProps, sortableContextProps, sortableWrapperProps: { className: sortableWrapperClassName, ...restSortableWrapperProps }, sortableItemProps, }: SortableListProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
