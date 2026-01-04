import { default as React, HTMLAttributes } from 'react';
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}
declare const Clickable: ({ children, onClick, className, ...rest }: BoxProps) => import("react/jsx-runtime").JSX.Element;
export { Clickable };
