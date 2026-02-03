import { InputRef } from 'antd';
import { InputTextAreaProps } from './TextArea';
import { InputDefaultProps } from './default';
import { EmojiPickerInputProps } from './emojiPicker';
import { InputGhostProps } from './ghost';
import { InputNumberProps } from './number';
import { InputSearchProps } from './search';
import { InputTagProps } from './tag';
declare const Input: {
    readonly Search: import('react').ForwardRefExoticComponent<InputSearchProps & import('react').RefAttributes<InputRef>>;
    readonly Number: import('react').ForwardRefExoticComponent<InputNumberProps & import('react').RefAttributes<InputRef>>;
    readonly Default: import('react').ForwardRefExoticComponent<InputDefaultProps & import('react').RefAttributes<InputRef>>;
    readonly Tag: import('react').MemoExoticComponent<({ value, onChange, placeholder, disabled, label, required, hideErrorMessage, error, wrapperClassName, }: InputTagProps) => import("react/jsx-runtime").JSX.Element>;
    readonly TextArea: import('react').ForwardRefExoticComponent<InputTextAreaProps & import('react').RefAttributes<InputRef>>;
    readonly Ghost: (props: InputGhostProps, ref: import('react').ForwardedRef<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
    readonly EmojiPicker: ({ value, onChange, label, emojis, }: EmojiPickerInputProps) => import("react/jsx-runtime").JSX.Element;
};
export { Input };
export type { EmojiPickerInputProps, InputDefaultProps, InputGhostProps, InputNumberProps, InputRef, InputSearchProps, InputTagProps, InputTextAreaProps, };
