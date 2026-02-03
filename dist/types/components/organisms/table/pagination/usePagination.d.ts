import { TablePaginationConfig } from 'antd';
import { TableCurrentDataSource } from 'antd/es/table/interface';
import { SortOrder, SorterResult } from 'antd/lib/table/interface';
export declare const sizeOptions: {
    label: string;
    value: number;
}[];
interface PaginationProps extends TablePaginationConfig {
    hasQueryParams?: boolean;
}
declare function usePagination<TFilter extends Record<string, any>>({ defaultCurrent, defaultPageSize, hasQueryParams, hideOnSinglePage, style, ...rest }: PaginationProps): {
    filters: TFilter;
    current: number;
    pageSize: number;
    pagination: TablePaginationConfig;
    order: SortOrder | undefined;
    orderBy: string;
    onChange: (pagination: TablePaginationConfig, filters: TFilter, sorter?: SorterResult<any> | SorterResult<any>[], extra?: TableCurrentDataSource<any>) => void;
    getTotal: (total?: number) => void;
};
type UsePaginationType = ReturnType<typeof usePagination>;
export { usePagination, type UsePaginationType };
