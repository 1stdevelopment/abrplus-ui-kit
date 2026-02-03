import { TextProps } from 'src/components/antOverrides';
export interface TableCellProps extends TextProps {
    value?: string;
}
declare const DateCell: ({ value, ...rest }: TableCellProps) => import("react/jsx-runtime").JSX.Element;
export { DateCell };
