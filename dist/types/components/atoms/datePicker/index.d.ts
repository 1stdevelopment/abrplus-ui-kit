import { DatePickerProps as Props } from 'jalaali-react-date-picker';
import { InputFieldError } from '../../../configs';
export interface DatePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
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
}
export declare const DatePicker: ({ helperText, required, label, error, wrapperClassName, onChange: onChangeProp, onChangeISO, value: valueProp, valueISO, locale, hideErrorMessage, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
