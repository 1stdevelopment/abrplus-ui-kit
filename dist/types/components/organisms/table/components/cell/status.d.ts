import { TextProps } from 'src/components/antOverrides';
export interface TableCellProps extends TextProps {
    value?: boolean;
    activeTitle?: string;
    disableTitle?: string;
}
declare const StatusCell: ({ value, activeTitle, disableTitle, ...rest }: TableCellProps) => import("react/jsx-runtime").JSX.Element;
export { StatusCell };
