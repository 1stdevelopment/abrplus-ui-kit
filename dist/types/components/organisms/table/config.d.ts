import { ThemeConfig } from 'antd';
import { TableProps } from '.';
type NonUndefined<T> = T extends undefined ? never : T;
export declare const CustomizedAntTableConfig: (theme?: Partial<ThemeConfig>) => ThemeConfig;
export declare const tailwindTableClasses: string;
export declare const tableTransparentHeaderClasses: string;
export declare const rowHeightClassName: Record<NonUndefined<TableProps<any>['size']>, string>;
export {};
