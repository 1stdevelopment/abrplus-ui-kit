import { FlexProps } from 'antd';
type LayoutValue = {
    x: number;
    y: number;
    left: number;
    top: number;
    width: number;
    height: number;
};
export type LayoutEvent = {
    nativeEvent: {
        layout: LayoutValue;
        target: any;
    };
    timeStamp: number;
};
export interface ViewProps extends FlexProps {
    isLoading?: boolean;
    error?: string;
    onRetry?: () => void;
    loadingMinHeight?: number;
    loadingSize?: number;
    onLayout?: (e: LayoutEvent) => void;
}
declare const View: import('react').ForwardRefExoticComponent<ViewProps & import('react').RefAttributes<HTMLElement>>;
export { View };
