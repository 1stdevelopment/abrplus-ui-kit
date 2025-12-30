import { TooltipProps as AntTooltipProps } from '../../antOverrides/tooltip';
import { IconsNames } from '../icon';
export interface TooltipProps extends AntTooltipProps {
    iconName?: IconsNames;
}
declare const Tooltip: ({ children, title, iconName, ...rest }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export { Tooltip };
