import { DrawerProps as Props } from 'antd';
import { HTMLAttributes, ReactNode } from 'react';
import { DrawerHeaderTitleProps } from './components/headerTitle';
export type DrawerAction = Partial<{
    onSubmit: () => void;
    onDiscard: () => void;
    submitTitle: string;
    discardTitle: string;
    isLoading?: boolean;
    noPadding?: boolean;
    isSubmitDisabled?: boolean;
}>;
export interface DrawerProps extends Omit<Props, 'title' | 'onClose' | 'closable'> {
    title?: string | ReactNode;
    transparent?: boolean;
    onClose?: () => void;
    headerHeight?: number;
    wrapperClassName?: HTMLAttributes<HTMLElement>['className'];
    contentClassName?: HTMLAttributes<HTMLElement>['className'];
    closable?: boolean;
}
declare const Drawer: ({ title, closable, transparent, submitTitle, discardTitle, onClose, onSubmit, onDiscard, classNames, styles, children, isLoading, headerHeight, wrapperClassName, contentClassName, noPadding, isSubmitDisabled, footer, ...rest }: DrawerProps & DrawerAction) => import("react/jsx-runtime").JSX.Element;
export { Drawer };
export type { DrawerHeaderTitleProps };
