import { ActionButtonProps } from './action';
import { IconButtonProps } from './icon';
import { ButtonProps } from './shared';
import { TextButtonProps } from './text';
declare const Button: {
    readonly Text: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, underline, textProps, startIconSize, endIconSize, ...rest }: TextButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Primary: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, textSize, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Secondary: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Tertiary: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly SecondaryQuiet: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Icon: ({ style, height, iconName, disabled, className, iconPosition, iconProps, color, ...rest }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Negative: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, variant, ...rest }: ButtonProps & {
        variant?: "contain" | "outline";
    }) => import("react/jsx-runtime").JSX.Element;
    readonly Action: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, platform, ...rest }: ActionButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export { Button };
export type { ActionButtonProps, ButtonProps, IconButtonProps, TextButtonProps };
