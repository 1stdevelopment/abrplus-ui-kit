import { ReactElement, ReactNode } from 'react';
interface TabProps {
    title: string;
    tab: string;
    children: ReactNode;
    className?: string;
    transparent?: boolean;
    extraNode?: ReactNode;
}
export interface VerticalTabsProps {
    defaultActiveTab?: string;
    query?: boolean;
    children: ReactElement<TabProps>[];
}
declare const VerticalTabs: {
    ({ children, query, defaultActiveTab }: VerticalTabsProps): import("react/jsx-runtime").JSX.Element;
    Tab: (_props: TabProps) => null;
};
export { VerticalTabs };
