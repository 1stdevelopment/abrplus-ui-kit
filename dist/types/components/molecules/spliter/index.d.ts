import { default as React } from 'react';
export interface PropsTypes {
    title?: string;
    children?: React.ReactNode;
    direction?: 'center' | 'start' | 'end';
    expand?: boolean;
}
export declare const Spliter: ({ children, title, direction, expand }: PropsTypes) => import("react/jsx-runtime").JSX.Element;
