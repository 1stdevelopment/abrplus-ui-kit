import { default as React } from 'react';
export interface CopyButtonProps {
    textToCopy: string;
    renderButton?: React.ReactNode;
    variant?: 'informative' | 'success' | 'error' | 'default';
}
declare const CopyButton: ({ textToCopy, variant, renderButton }: CopyButtonProps) => import("react/jsx-runtime").JSX.Element;
export { CopyButton };
