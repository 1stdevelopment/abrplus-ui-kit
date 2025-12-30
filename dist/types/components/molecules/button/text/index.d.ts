import { TextProps } from '../../..';
import { ButtonProps } from '../shared';
export interface TextButtonProps extends ButtonProps {
    underline?: boolean;
    textProps?: TextProps;
    startIconSize?: number;
    endIconSize?: number;
}
declare const TextButton: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, underline, textProps, startIconSize, endIconSize, ...rest }: TextButtonProps) => import("react/jsx-runtime").JSX.Element;
export { TextButton };
