import { Platform } from '../../../../configs';
import { ButtonProps } from '../shared';
export interface ActionButtonProps extends ButtonProps {
    platform: Platform;
}
declare const ActionButton: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, platform, ...rest }: ActionButtonProps) => import("react/jsx-runtime").JSX.Element;
export { ActionButton };
