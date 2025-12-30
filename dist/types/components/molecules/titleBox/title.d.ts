import { ReactNode } from 'react';
export interface TitleBoxProps {
    title: string | ReactNode;
    children: string | ReactNode;
}
declare const TitleBox: ({ children, title }: TitleBoxProps) => import("react/jsx-runtime").JSX.Element;
export { TitleBox };
