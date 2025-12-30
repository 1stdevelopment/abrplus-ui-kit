declare const Box: {
    readonly Status: ({ active }: import('./status').StatusBoxProps) => import("react/jsx-runtime").JSX.Element;
    readonly Title: ({ children, title }: import('./title').TitleBoxProps) => import("react/jsx-runtime").JSX.Element;
};
export { Box };
