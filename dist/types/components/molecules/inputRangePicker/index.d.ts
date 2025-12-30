import { InputRangePickerProps as Props } from 'jalaali-react-date-picker';
import { InputFieldError } from '../../../configs';
export interface InputRangePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
    wrapperClassName?: string;
    inputWrapperClassName?: string;
    /**
     * if `error` property provided, regardless of its value, the error gap is applied to component.
     */
    error?: InputFieldError;
    label?: string | React.ReactNode;
    required?: boolean;
    helperText?: string;
    hideErrorMessage?: boolean;
    height?: number | string;
}
export declare const InputRangePicker: ({ helperText, required, label, error, wrapperClassName, inputWrapperClassName, value, locale, wrapperStyle, hideErrorMessage, height, ...props }: InputRangePickerProps) => import("react/jsx-runtime").JSX.Element;
