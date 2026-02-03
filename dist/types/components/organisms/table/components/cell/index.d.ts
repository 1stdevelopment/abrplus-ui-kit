export interface TableCellProps {
    children?: any;
}
declare const TableCell: {
    ({ children }: TableCellProps): any;
    Currency: ({ value, includeCurrency, ...rest }: import('./currencyCell').TableCellProps) => import("react/jsx-runtime").JSX.Element;
    Date: ({ value, ...rest }: import('./dateCell').TableCellProps) => import("react/jsx-runtime").JSX.Element;
    StatusCell: ({ value, activeTitle, disableTitle, ...rest }: import('./status').TableCellProps) => import("react/jsx-runtime").JSX.Element;
};
export { TableCell };
