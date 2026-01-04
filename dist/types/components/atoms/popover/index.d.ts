import { PopoverProps as AntPopoverProps } from 'antd';
import { ReactNode } from 'react';
export interface PopoverProps extends AntPopoverProps {
    headerTitle?: ReactNode;
    onClose?: () => void;
    closeable?: boolean;
    footer?: ReactNode;
    overlayInnerClassName?: string;
}
declare const Popover: {
    ({ overlayInnerStyle, overlayClassName, overlayInnerClassName, headerTitle, content, closeable, onClose, footer, ...rest }: PopoverProps): import("react/jsx-runtime").JSX.Element;
    Link: ({ children, size, color, weight, className, ...rest }: import('./link').PopoverLinkProps) => import("react/jsx-runtime").JSX.Element;
};
export { Popover };
