import { ReactNode } from 'react';
interface PortalContainerProps {
    id: string;
    children?: ReactNode;
}
export declare const PortalContainer: ({ children, id }: PortalContainerProps) => import('react').ReactPortal | null;
export {};
