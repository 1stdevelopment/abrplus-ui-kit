import { default as React, CSSProperties } from 'react';
export interface TagProps {
    closable?: boolean;
    onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    visible?: boolean;
    imageSrc?: string;
    title: string;
    disabled?: boolean;
    error?: boolean;
    height?: number;
    readonly className?: string;
    style?: CSSProperties;
    autoSlice?: boolean;
    sliceLength?: number;
}
declare const Tag: ({ closable, onClose, imageSrc, title, disabled, className, style, autoSlice, sliceLength, }: TagProps) => import("react/jsx-runtime").JSX.Element;
export { Tag };
