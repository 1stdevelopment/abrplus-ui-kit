import { CSSProperties } from 'react';
import { IconsNames } from '../constants/iconNames';
type IcomoonProps = {
    size?: number;
    name: IconsNames;
    color?: string | string[];
    style?: CSSProperties;
    className?: string;
};
export declare function createIcomoonIconSet(): ({ size, name, color, className, style }: IcomoonProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
