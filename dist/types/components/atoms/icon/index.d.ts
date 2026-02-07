import { CSSProperties, ImgHTMLAttributes } from 'react';
import { IconsNames } from './constants/iconNames';
type BaseProps = {
    className?: string;
    style?: CSSProperties;
    disable?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | number;
};
export type ImageIconProps = BaseProps & {
    hasSrc: true;
    src: NonNullable<ImgHTMLAttributes<HTMLImageElement>['src']>;
    imgProps?: ImgHTMLAttributes<HTMLImageElement>;
};
export type IconMoonsProps = BaseProps & {
    hasSrc?: false;
    name?: IconsNames;
    color?: string | string[];
    imgProps?: ImgHTMLAttributes<HTMLImageElement>;
};
type IconProps = ImageIconProps | IconMoonsProps;
/**
 * Icon component
 */
declare const Icon: ({ size, onClick, style, className, disable, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
export { Icon };
export type { IconProps, IconsNames };
