import { default as React } from 'react';
export interface ActionHeaderProps {
    children?: React.ReactNode;
    title?: string | React.ReactNode;
    route?: any;
    gap?: number;
    hasBorder?: boolean;
    className?: string;
}
declare const ActionHeader: React.ForwardRefExoticComponent<ActionHeaderProps & React.RefAttributes<HTMLElement>>;
export { ActionHeader };
