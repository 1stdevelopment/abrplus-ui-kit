import { CSSProperties, ReactElement, ReactNode } from 'react';
type TabProps<T extends string> = {
    tabKey: T;
    title?: string | ((color: string) => ReactNode);
    children: ReactElement | ReactNode;
    style?: CSSProperties | ((activeTabKey: T) => CSSProperties);
    className?: string | ((activeTabKey: T) => string);
    isVisible?: boolean;
    testID?: string;
};
interface NavigationTabsProps<T extends string> {
    children: ReactElement<TabProps<T>>[];
    onChange?: (activeTabKey: T) => void;
    wrapperStyle?: CSSProperties;
    wrapperClassName?: string;
    spaceBetweenTabs?: number;
    activeStyleMode?: 'underlined' | 'background' | 'textGlow';
    defaultTabKey?: T;
    extraAfterItem?: ReactNode | ((activeTabKey?: T) => ReactNode);
    extraBeforeItem?: ReactNode | ((activeTabKey?: T) => ReactNode);
    extraAfterChildren?: ReactNode | ((activeTabKey?: T) => ReactNode);
    extraBeforeChildren?: ReactNode | ((activeTabKey?: T) => ReactNode);
    tabFontSize?: number;
    tabsClassName?: string;
    tabClassName?: string;
    innerContentClassName?: string;
    tabsWrapperStyle?: CSSProperties;
    extraChildrenInheritBorder?: boolean;
    hasBorder?: boolean;
}
export declare const NavigationTabs: {
    <T extends string>({ children, onChange, wrapperStyle, wrapperClassName, spaceBetweenTabs, activeStyleMode, defaultTabKey, extraAfterItem, extraBeforeItem, extraBeforeChildren, extraAfterChildren, tabFontSize, tabsClassName, tabClassName, tabsWrapperStyle, innerContentClassName, extraChildrenInheritBorder, hasBorder, }: NavigationTabsProps<T>): import("react/jsx-runtime").JSX.Element;
    Tab<T extends string>(_props: TabProps<T>): null;
};
export {};
