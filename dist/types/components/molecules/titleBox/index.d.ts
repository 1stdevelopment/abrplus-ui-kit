import { StatusBoxProps } from './status';
import { TitleBoxProps } from './title';
declare const Box: {
    readonly Status: ({ active }: StatusBoxProps) => import("react/jsx-runtime").JSX.Element;
    readonly Title: ({ children, title }: TitleBoxProps) => import("react/jsx-runtime").JSX.Element;
};
export { Box };
export type { StatusBoxProps, TitleBoxProps };
