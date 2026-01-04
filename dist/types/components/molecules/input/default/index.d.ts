import { InputFieldError } from '../../../../configs';
import { InputProps, InputRef } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
export interface InputDefaultProps extends Omit<InputProps, 'dir'> {
    helperText?: string;
    label?: React.ReactNode;
    background?: string;
    lang?: 'fa' | 'en';
    direction?: 'ltr' | 'rtl';
    onlyNumber?: boolean;
    isCurrency?: boolean;
    onChangeText?: (event: string) => void;
    inputSize?: SizeType;
    placeholder?: string | undefined;
    wrapperClassName?: string;
    hideErrorMessage?: boolean;
    /**
     * if `error` property provided, regardless of its value, the error gap is applied to component.
     */
    error?: InputFieldError;
}
declare const InputDefault: import('react').ForwardRefExoticComponent<InputDefaultProps & import('react').RefAttributes<InputRef>>;
export { InputDefault };
