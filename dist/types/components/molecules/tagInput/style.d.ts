import { ThemeConfig } from 'antd';
import { SelectProps } from '../select/types';
export declare const CustomizedAntSelectTagConfig: ThemeConfig;
export declare const generateSelectClassNames: ({ size, error, disabled, isTabFocused, }: {
    size: SelectProps<any>["size"];
    error?: boolean;
    disabled: SelectProps<any>["disabled"];
    isTabFocused: boolean;
}) => string;
