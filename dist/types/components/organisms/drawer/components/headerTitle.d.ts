import { default as React } from 'react';
export interface DrawerHeaderTitleProps {
    title?: string | React.ReactNode;
    closable?: boolean;
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}
declare const DrawerHeaderTitle: ({ title, closable, onClose }: DrawerHeaderTitleProps) => import("react/jsx-runtime").JSX.Element;
export { DrawerHeaderTitle };
