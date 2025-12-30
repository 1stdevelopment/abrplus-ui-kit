export interface ErrorProps {
    name?: string;
    children?: React.ReactNode;
    textColor?: string;
    message?: string;
    testID?: string;
    className?: string;
}
export declare const InputErrorMessage: ({ children, message, textColor, className }: ErrorProps) => import("react/jsx-runtime").JSX.Element;
