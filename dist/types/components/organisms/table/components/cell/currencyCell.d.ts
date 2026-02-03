import { TextProps } from 'src/components/antOverrides';
export interface TableCellProps extends TextProps {
    value?: string | number;
    includeCurrency?: boolean;
}
declare const CurrencyCell: ({ value, includeCurrency, ...rest }: TableCellProps) => import("react/jsx-runtime").JSX.Element;
export { CurrencyCell };
