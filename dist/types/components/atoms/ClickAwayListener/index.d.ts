import { default as React } from 'react';
export interface ClickAwayListenerProps {
    children: React.ReactNode;
    onClickAway: () => void;
    document?: Document;
    active?: boolean;
    className?: string;
    hasDefaultStyle?: boolean;
}
declare const ClickAwayListener: React.FC<ClickAwayListenerProps>;
export { ClickAwayListener };
