import { ChangeEvent, DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
export interface InputGhostProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'prefix' | 'onChange'> {
    label?: string | ReactNode;
    wrapperClassName?: string;
    inputSize?: 'medium' | 'small';
    error?: {
        message?: string;
    };
    disabled?: boolean;
    forwardRef?: LegacyRef<HTMLInputElement> | undefined;
    suffix?: ReactNode;
    lang?: 'fa' | 'en';
    prefix?: ReactNode;
    isCurrency?: boolean;
    readOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeText?: (event: string) => void;
    helperText?: string;
    onlyNumber?: boolean;
    value?: string;
    placeHolder?: string;
}
declare const InputGhost$: (props: InputGhostProps, ref: ForwardedRef<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
declare const InputGhost: typeof InputGhost$;
export { InputGhost };
