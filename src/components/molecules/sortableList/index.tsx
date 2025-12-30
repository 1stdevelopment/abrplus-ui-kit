import { DndContext, type DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Props as DndContextProps } from '@dnd-kit/core/dist/components/DragOverlay';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Props as SortableContextProps } from '@dnd-kit/sortable/dist/components/SortableContext';
import { CSS } from '@dnd-kit/utilities';
import { type CSSProperties, HTMLAttributes, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface DraggableItem {
  id: string | number;
}

//TODO test & storybook hesam

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

interface SortableItemProps {
  children: ReactNode;
  item: DraggableItem;
}

export const SortableList = <T extends DraggableItem>({
  move,
  renderItem,
  data,
  wrapperClassName,
  activateDistance = 5,
  dndContextProps,
  sortableContextProps,
  sortableWrapperProps: { className: sortableWrapperClassName, ...restSortableWrapperProps } = {},
  sortableItemProps,
}: SortableListProps<T>) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: activateDistance,
      },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const fromIndex = data.findIndex((el) => el.id === active.id);
    const toIndex = data.findIndex((el) => el.id === over.id);
    if (fromIndex !== -1 && toIndex !== -1) {
      move(fromIndex, toIndex);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} {...dndContextProps}>
      <SortableContext
        items={data}
        strategy={verticalListSortingStrategy}
        {...sortableContextProps}
      >
        <div
          className={twMerge(wrapperClassName, sortableWrapperClassName)}
          {...restSortableWrapperProps}
        >
          {data.map((item, index) => (
            <SortableItem key={item.id} item={item} {...sortableItemProps}>
              {renderItem(item, index)}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

const SortableItem = ({ children, item, ...rest }: SortableItemProps) => {
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
    id: item.id,
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners} {...rest}>
      {children}
    </div>
  );
};
