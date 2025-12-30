import { RangePickerProps as Props } from 'jalaali-react-date-picker';
import { InputFieldError } from '../../../configs';
export interface RangePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
    wrapperClassName?: string;
    /**
     * if `error` property provided, regardless of its value, the error gap is applied to component.
     */
    error?: InputFieldError;
    label?: string | React.ReactNode;
    required?: boolean;
    helperText?: string;
    hideErrorMessage?: boolean;
}
export declare const RangePicker: ({ helperText, required, label, error, wrapperClassName, value, hideErrorMessage, ...props }: RangePickerProps) => import("react/jsx-runtime").JSX.Element;
