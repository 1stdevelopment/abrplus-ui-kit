import { InputDatePickerProps as Props } from 'jalaali-react-date-picker';
import { InputFieldError } from '../../../configs';
export interface InputDatePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
    wrapperClassName?: string;
    /**
     * if `error` property provided, regardless of its value, the error gap is applied to component.
     */
    error?: InputFieldError;
    label?: string | React.ReactNode;
    required?: boolean;
    helperText?: string;
    onChangeISO?: (date: string | undefined) => void;
    valueISO?: string;
    hideErrorMessage?: boolean;
    placeholder?: string;
}
export declare const InputDatePicker: ({ helperText, required, label, error, wrapperClassName, onChange: onChangeProp, onChangeISO, value: valueProp, valueISO, locale, placeholder, wrapperStyle, hideErrorMessage, ...props }: InputDatePickerProps) => import("react/jsx-runtime").JSX.Element;
