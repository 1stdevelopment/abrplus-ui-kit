import { TablePaginationConfig } from 'antd';
import { TableCurrentDataSource } from 'antd/es/table/interface';
import { SorterResult } from 'antd/lib/table/interface';
interface SelectComponentClassProps<TFilter extends Record<string, any>> {
    pagination: TablePaginationConfig;
    filters: TFilter;
    pageSize: number;
    onChange: (pagination: TablePaginationConfig, filters: TFilter, sorter?: SorterResult<any> | SorterResult<any>[], extra?: TableCurrentDataSource<any>) => void;
}
interface ItemRenderProps {
    page: number;
    current: number;
    type: 'page' | 'next' | 'prev' | 'jump-prev' | 'jump-next';
    isFa?: boolean;
}
declare const SelectComponentClass: <TFilter extends Record<string, any>>({ pagination, filters, pageSize, onChange, }: SelectComponentClassProps<TFilter>) => import("react/jsx-runtime").JSX.Element;
declare const ItemRender: ({ page, type, current, isFa }: ItemRenderProps) => import("react/jsx-runtime").JSX.Element;
export { ItemRender, SelectComponentClass };
