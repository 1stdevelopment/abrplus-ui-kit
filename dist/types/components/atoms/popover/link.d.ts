import { FlexProps } from 'antd';
import { TextProps } from '../../antOverrides/text';
export interface PopoverLinkProps extends FlexProps, Pick<TextProps, 'size' | 'color' | 'weight'> {
}
declare const PopoverLink: ({ children, size, color, weight, className, ...rest }: PopoverLinkProps) => import("react/jsx-runtime").JSX.Element;
export { PopoverLink };
