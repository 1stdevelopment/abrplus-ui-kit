import { colors } from '@configs';
import { Table as AntTable, TableProps as AntTableProps, ConfigProvider, ThemeConfig } from 'antd';
import { Fragment, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Flex, Icon, Loading } from '../..';
import { Column, ColumnProps } from './column';
import { TableCell } from './components/cell';
import { ExpandIcon } from './components/expandIcon';
import { TableHeaderTitle } from './components/headerTitle';
import {
  CustomizedAntTableConfig,
  rowHeightClassName,
  tableTransparentHeaderClasses,
  tailwindTableClasses,
} from './config';
import { DndRow, DndSortProvider, DragEndCallback, DragHandle } from './dndSort';
import { usePagination } from './pagination/usePagination';

export interface TableProps<T> extends AntTableProps<T> {
  transparentHeader?: boolean;
  internalScroll?: boolean;
  extraHeight?: number;
  sortsClassName?: string;
  theme?: Partial<ThemeConfig>;
  dndSort?: {
    onDragEnd: DragEndCallback<T>;
  };
}

const Table = <T extends object>({
  className,
  children,
  expandable,
  rowSelection,
  size,
  pagination,
  loading,
  transparentHeader,
  internalScroll = true,
  extraHeight = 100,
  footer,
  theme,
  dndSort,
  components,
  ...rest
}: TableProps<T>) => {
  const [scrollY, setScrollY] = useState<number>();
  // TODO: it should be React.Ref<Reference> but antd didnt export the type yet.
  const ref = useRef<any>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setScrollY(
      window.innerHeight - ref.current.offsetTop - 46 - (pagination ? 65 : 0) - extraHeight,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination, theme?.components?.Table?.headerBg]);

  const columns = useMemo(() => {
    function getChildren(_children: any): ColumnProps<T>[] {
      if (!_children) {
        return [];
      }
      if (
        typeof _children === 'boolean' ||
        typeof _children === 'undefined' ||
        _children === null
      ) {
        return [];
      }

      if (typeof _children !== 'object') {
        throw new Error('Table children must be Column');
      }

      if (!Array.isArray(_children)) {
        if (_children.type === Column) {
          const result: ColumnProps<T> = {
            ...(_children.props as any),
            child: _children,
          };

          return [result];
        }

        if (_children.type === Fragment) {
          return getChildren((_children.props as any)?.children);
        }
      }

      return (_children || [])?.flatMap((child: ReactNode) => {
        return getChildren(child);
      });
    }

    const mappedChildren = getChildren(children);

    return mappedChildren;
  }, [children]);

  const Provider = ({ children }: { children: ReactNode }) =>
    dndSort === undefined ? (
      <>{children}</>
    ) : (
      <DndSortProvider<T>
        children={children}
        onDragEnd={dndSort.onDragEnd}
        dataSource={rest.dataSource}
        rowKey={rest.rowKey as keyof T}
      />
    );

  return (
    <ConfigProvider theme={CustomizedAntTableConfig(theme)}>
      <Provider>
        <AntTable
          ref={ref}
          loading={{
            indicator: (
              <Flex className="items-center justify-center">
                <Loading isLoading size={32} thickness={3} />
              </Flex>
            ),
            spinning: !!loading,
          }}
          // TODO: ! x scroll
          scroll={internalScroll ? { y: scrollY } : undefined}
          className={twMerge(
            tailwindTableClasses,
            'abrplus-table-custom-scroll-bar w-full !animate-none [&_.ant-table-thead_th]:!pt-2',
            !!expandable && !!rowSelection && '[&_.ant-table-selection-column]:!ps-0',
            transparentHeader && tableTransparentHeaderClasses,
            className,
          )}
          rowSelection={rowSelection}
          expandable={
            expandable
              ? {
                  ...expandable,
                  expandedRowClassName: () =>
                    '[&_.ant-table-cell]:!p-0  [&_.ant-table-row-expand-icon-cell]:!p-0 ',
                  expandIcon: ({ expandable, expanded, onExpand, record }) => (
                    <ExpandIcon
                      {...{ expandable, expanded }}
                      onExpand={(e) => onExpand?.(record, e)}
                    />
                  ),
                }
              : undefined
          }
          pagination={pagination}
          footer={footer}
          components={dndSort ? { body: { row: DndRow } } : components}
          {...rest}
        >
          {dndSort && (
            <Table.Column key="sort" align="center" width={80} render={() => <DragHandle />} />
          )}
          {columns.map(
            (
              {
                render,
                children,
                dataIndex,
                align,
                headerStyle,
                headerClassName,
                className,
                filtersOptions,
                sortIconOptions,
                ...rest
              },
              colIndex,
            ) => (
              <AntTable.Column
                key={colIndex}
                {...rest}
                dataIndex={dataIndex?.toString()}
                className={twMerge('h-[56px] [&_.ant-table-column-title]:!flex-1', className)}
                title={
                  <Flex
                    className="ant-table-column-title-content items-center justify-between"
                    flex={1}
                  >
                    <TableHeaderTitle
                      title={children}
                      align={align}
                      style={headerStyle}
                      className={headerClassName}
                    />
                    {filtersOptions?.renderFilter?.()}
                  </Flex>
                }
                render={(value, row: T, index) => (
                  <Flex
                    className={twMerge('items-center', rowHeightClassName[size || 'large'])}
                    style={{
                      wordWrap: 'break-word',
                      wordBreak: 'break-word',
                      paddingInlineEnd: colIndex === columns.length - 1 ? 24 : undefined,
                    }}
                  >
                    {render ? render({ index, row, value }) : <TableCell>{value}</TableCell>}
                  </Flex>
                )}
                showSorterTooltip={false}
                sortIcon={({ sortOrder }) => {
                  return (
                    <Flex
                      vertical
                      {...sortIconOptions}
                      className={twMerge(
                        'table-filters-sort flex-[4] ps-2',
                        sortIconOptions?.className,
                      )}
                    >
                      <Icon
                        size={12}
                        color={sortOrder === 'ascend' ? colors.primary : colors.primary_light_3}
                        name="Chevron_Up"
                        style={{ marginBottom: -4 }}
                      />
                      <Icon
                        size={12}
                        color={sortOrder === 'descend' ? colors.primary : colors.primary_light_3}
                        name="Chevron_Down"
                      />
                    </Flex>
                  );
                }}
              />
            ),
          )}
        </AntTable>
      </Provider>
    </ConfigProvider>
  );
};

export type { UsePaginationType } from './pagination/usePagination';
export { Table };

Table.Cell = TableCell;
Table.Column = Column;
Table.Currency = TableCell.Currency;
Table.Date = TableCell.Date;
Table.Status = TableCell.StatusCell;
Table.usePagination = usePagination;
