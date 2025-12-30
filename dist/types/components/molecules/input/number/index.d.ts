import { InputProps, InputRef } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { InputFieldError } from '../../../../configs';
export interface InputNumberProps extends Omit<InputProps, 'onChange' | 'value' | 'height'> {
    helperText?: string;
    label?: React.ReactNode;
    background?: string;
    lang?: 'fa' | 'en';
    onlyNumber?: boolean;
    isCurrency?: boolean;
    inputSize?: SizeType;
    placeHolder?: string | undefined;
    wrapperClassName?: string;
    /**
     * if `error` property provided, regardless of its value, the error gap is applied to component.
     */
    error?: InputFieldError;
    step?: number | undefined;
    value?: number | undefined;
    height?: number;
    disableNegative?: boolean;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
    hideErrorMessage?: boolean;
}
declare const InputNumber: import('react').ForwardRefExoticComponent<InputNumberProps & import('react').RefAttributes<InputRef>>;
export { InputNumber };
