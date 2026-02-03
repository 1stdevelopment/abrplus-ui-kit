import { LogoIconNameType } from '../../../configs';
import { CSSProperties } from 'react';
import { TooltipProps } from '../..';
export type LogoProps = {
    style?: CSSProperties;
    shape?: 'circle' | 'square';
    className?: string;
    toolTipTitle?: string;
    iconName?: LogoIconNameType;
    hasAnimation?: boolean;
    iconSize?: number;
    badged?: boolean;
    isFullSizeLogo?: boolean;
    badgeColor?: string;
    badgeStatus?: 'success' | 'error' | 'warn' | 'default';
    badgePosition?: 'left' | 'right';
    onClick?: () => void;
    imageSrc?: string;
} & ({
    hasToolTip: true;
    tooltipProps?: Partial<TooltipProps>;
} | {
    hasToolTip?: false;
});
export declare const Logo: ({ style, shape, className, toolTipTitle, imageSrc, iconName, badgeStatus, badgePosition, badgeColor, badged, hasAnimation, iconSize, isFullSizeLogo, onClick, ...rest }: LogoProps) => import("react/jsx-runtime").JSX.Element;
