declare const Button: {
    readonly Text: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, underline, textProps, startIconSize, endIconSize, ...rest }: import('./text').TextButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Primary: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, textSize, ...rest }: import('./shared').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Secondary: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, ...rest }: import('./shared').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Tertiary: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, ...rest }: import('./shared').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly SecondaryQuiet: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, ...rest }: import('./shared').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Icon: ({ style, height, iconName, disabled, className, iconPosition, iconProps, color, ...rest }: import('./icon').IconButtonProps) => import("react/jsx-runtime").JSX.Element;
    readonly Negative: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, variant, ...rest }: import('./shared').ButtonProps & {
        variant?: "contain" | "outline";
    }) => import("react/jsx-runtime").JSX.Element;
    readonly Action: ({ style, height, mode, children, iconName, disabled, className, iconPosition, isLoading, lang, platform, ...rest }: import('./action').ActionButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export { Button };
