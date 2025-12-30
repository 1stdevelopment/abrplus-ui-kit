import { TooltipProps as AntTooltipProps } from 'antd';
import { default as React } from 'react';
export type TooltipProps = Omit<AntTooltipProps, 'title'> & {
    variant?: 'informative' | 'success' | 'error' | 'default';
    title?: string | React.ReactNode;
};
declare const Tooltip: ({ children, variant, overlayInnerStyle, title, ...rest }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export { Tooltip };
