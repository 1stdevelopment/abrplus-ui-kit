import { default as React } from 'react';
export interface BorderedTitleProps {
    title: string | React.ReactNode;
    align?: 'start' | 'center' | 'end';
    textColor?: string;
    textSize?: number;
}
declare const BorderedTitle: ({ title, align, textSize, textColor, }: BorderedTitleProps) => import("react/jsx-runtime").JSX.Element;
export { BorderedTitle };
