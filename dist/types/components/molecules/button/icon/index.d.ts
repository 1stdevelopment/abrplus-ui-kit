import { ReactNode } from 'react';
import { IconMoonsProps } from '../../../atoms/icon';
import { ButtonProps } from '../shared';
export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'iconName' | 'mode'> {
    iconProps?: Omit<IconMoonsProps, 'name' | 'color'> & {
        renderIcon?: ReactNode;
    };
    iconName: Required<ButtonProps['iconName']>;
}
declare const IconButton: ({ style, height, iconName, disabled, className, iconPosition, iconProps, color, ...rest }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
export { IconButton };
