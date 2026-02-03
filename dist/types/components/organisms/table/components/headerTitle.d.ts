import { TableProps } from '..';
import { ColumnProps } from '../column';
export interface TableHeaderTitleProps {
    title?: TableProps<any>['children'];
    style?: ColumnProps<any>['headerStyle'];
    className?: ColumnProps<any>['headerClassName'];
    align?: ColumnProps<any>['align'];
}
declare const TableHeaderTitle: ({ title, align, style, className }: TableHeaderTitleProps) => number | boolean | Iterable<import('react').ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export { TableHeaderTitle };
