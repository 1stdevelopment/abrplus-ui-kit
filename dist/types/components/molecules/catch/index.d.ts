import { ClientError } from '../../../configs';
import { default as React } from 'react';
export interface CatchProps {
    children: React.ReactNode;
    error: ClientError;
    retry?: () => void;
}
declare const Catch: ({ children, error, retry }: CatchProps) => import("react/jsx-runtime").JSX.Element;
export { Catch };
