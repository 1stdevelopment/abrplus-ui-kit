import { FlexProps, TableColumnProps } from 'antd';
import * as React from 'react';

export interface ColumnProps<T> extends Omit<
  TableColumnProps<T>,
  'title' | 'children' | 'render' | 'dataIndex'
> {
  children?: string | React.ReactNode;
  render?: (props: { row: T; index: number; value: any }) => React.ReactNode;
  dataIndex?: keyof T;
  headerStyle?: React.CSSProperties;
  headerClassName?: string;
  filtersOptions?: {
    className?: string;
    renderFilter?: () => React.ReactNode;
  };
  sortIconOptions?: Partial<FlexProps>;
}
// This component is only making sure you pass correct props so that it can be used in the table
const Column = <T extends object>(_props: ColumnProps<T>) => {
  return <></>;
};

export { Column };
