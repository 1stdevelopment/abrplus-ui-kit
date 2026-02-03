import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ReactNode, useCallback, useMemo } from 'react';

export type DragEndCallback<T> = (newData: T[]) => void;

interface DndSortProviderProps<T> {
  children: ReactNode;
  onDragEnd: DragEndCallback<T>;
  dataSource?: readonly T[];
  rowKey: keyof T;
}

export const DndSortProvider = <T,>({
  children,
  onDragEnd,
  dataSource = [],
  rowKey,
}: DndSortProviderProps<T>) => {
  const items = useMemo(
    () => dataSource.map((item) => item[rowKey] as string),
    [dataSource, rowKey],
  );

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (active.id !== over?.id) {
        const activeIndex = dataSource.findIndex((record) => record[rowKey] === active?.id);
        const overIndex = dataSource.findIndex((record) => record[rowKey] === over?.id);
        const newSort = arrayMove(dataSource as T[], activeIndex, overIndex);

        onDragEnd(newSort);
      }
    },
    [dataSource, rowKey, onDragEnd],
  );

  return (
    <>
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {children}
        </SortableContext>
      </DndContext>
    </>
  );
};
