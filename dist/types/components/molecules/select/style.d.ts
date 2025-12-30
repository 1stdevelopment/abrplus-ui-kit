import { ThemeConfig } from 'antd';
export declare const CustomizedAntSelectConfig: ThemeConfig;
export declare const generateSelectClassNames: ({ size, error, disabled, isTabFocused, }: {
    size: "small" | "medium" | "large";
    error?: boolean;
    disabled: boolean;
    isTabFocused: boolean;
}) => string;
