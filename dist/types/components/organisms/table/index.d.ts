import { TableProps as AntTableProps, ThemeConfig } from 'antd';
import { ColumnProps } from './column';
import { DragEndCallback } from './dndSort';
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
declare const Table: {
    <T extends object>({ className, children, expandable, rowSelection, size, pagination, loading, transparentHeader, internalScroll, extraHeight, footer, theme, dndSort, components, ...rest }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
    Cell: {
        ({ children }: import('./components/cell').TableCellProps): any;
        Currency: ({ value, includeCurrency, ...rest }: import('./components/cell/currencyCell').TableCellProps) => import("react/jsx-runtime").JSX.Element;
        Date: ({ value, ...rest }: import('./components/cell/dateCell').TableCellProps) => import("react/jsx-runtime").JSX.Element;
        StatusCell: ({ value, activeTitle, disableTitle, ...rest }: import('./components/cell/status').TableCellProps) => import("react/jsx-runtime").JSX.Element;
    };
    Column: <T extends object>(_props: ColumnProps<T>) => import("react/jsx-runtime").JSX.Element;
    Currency: ({ value, includeCurrency, ...rest }: import('./components/cell/currencyCell').TableCellProps) => import("react/jsx-runtime").JSX.Element;
    Date: ({ value, ...rest }: import('./components/cell/dateCell').TableCellProps) => import("react/jsx-runtime").JSX.Element;
    Status: ({ value, activeTitle, disableTitle, ...rest }: import('./components/cell/status').TableCellProps) => import("react/jsx-runtime").JSX.Element;
    usePagination: typeof usePagination;
};
export type { UsePaginationType } from './pagination/usePagination';
export { Table };
