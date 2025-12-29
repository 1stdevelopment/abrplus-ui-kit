import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from '../../antOverrides/tooltip';
import { IconsNames } from '../icon';
import { TooltipTitle } from './titleTooltip';

export interface TooltipProps extends AntTooltipProps {
  iconName?: IconsNames;
}
const Tooltip = ({ children, title, iconName, ...rest }: TooltipProps) => {
  return (
    <AntTooltip
      title={typeof title === 'string' ? <TooltipTitle title={title} iconName={iconName} /> : title}
      {...rest}
    >
      {children}
    </AntTooltip>
  );
};

export { Tooltip };
