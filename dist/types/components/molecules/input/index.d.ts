import { InputRef } from 'antd';
import { InputSearchProps } from './search';
declare const Input: {
    readonly Search: import('react').ForwardRefExoticComponent<InputSearchProps & import('react').RefAttributes<InputRef>>;
    readonly Number: import('react').ForwardRefExoticComponent<import('./number').InputNumberProps & import('react').RefAttributes<InputRef>>;
    readonly Default: import('react').ForwardRefExoticComponent<import('./default').InputDefaultProps & import('react').RefAttributes<InputRef>>;
    readonly TextArea: import('react').ForwardRefExoticComponent<import('./TextArea').InputTextAreaProps & import('react').RefAttributes<InputRef>>;
    readonly Ghost: (props: import('./ghost').InputGhostProps, ref: import('react').ForwardedRef<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
    readonly EmojiPicker: ({ value, onChange, label, emojis, }: import('./emojiPicker').EmojiPickerInputProps) => import("react/jsx-runtime").JSX.Element;
};
export { Input };
export type { InputRef, InputSearchProps };
