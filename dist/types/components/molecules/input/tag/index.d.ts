import { InputFieldError } from '../../../../configs';
import { default as React } from 'react';
import { InputDefaultProps } from '../default';
export interface InputTagProps extends Omit<InputDefaultProps, 'value' | 'onChange'> {
    value?: string[];
    onChange?: (tags: string[]) => void;
    label?: string | React.ReactNode;
    required?: boolean;
    hideErrorMessage?: boolean;
    wrapperClassName?: string;
    error?: InputFieldError;
}
export declare const InputTag: React.MemoExoticComponent<({ value, onChange, placeholder, disabled, label, required, hideErrorMessage, error, wrapperClassName, }: InputTagProps) => import("react/jsx-runtime").JSX.Element>;
