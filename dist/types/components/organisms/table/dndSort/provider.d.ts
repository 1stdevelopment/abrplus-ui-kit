import { ReactNode } from 'react';
export type DragEndCallback<T> = (newData: T[]) => void;
interface DndSortProviderProps<T> {
    children: ReactNode;
    onDragEnd: DragEndCallback<T>;
    dataSource?: readonly T[];
    rowKey: keyof T;
}
export declare const DndSortProvider: <T>({ children, onDragEnd, dataSource, rowKey, }: DndSortProviderProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
