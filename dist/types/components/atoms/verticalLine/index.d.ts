import { HTMLAttributes } from 'react';
export interface VerticalLine extends HTMLAttributes<HTMLDivElement> {
    style?: React.CSSProperties;
    color?: string;
    spacing?: number;
}
export declare const VerticalLine: ({ style, color, spacing, ...rest }: VerticalLine) => import("react/jsx-runtime").JSX.Element;
