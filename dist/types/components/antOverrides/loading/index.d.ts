import { default as React } from 'react';
export interface SpinnerProps {
    size?: number;
    thickness?: number;
    color?: string;
    isLoading?: boolean;
    heightOffset?: number;
    children?: React.ReactNode;
    className?: string;
    width?: number;
    height?: number;
    center?: boolean;
}
export declare const Loading: ({ children, isLoading, size, color, heightOffset, thickness, className, height, width, center, }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
