import { InputRef } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TextAreaProps } from 'antd/es/input';
import { InputFieldError } from '../../../../configs';
export interface InputTextAreaProps extends TextAreaProps {
    helperText?: string;
    label?: React.ReactNode;
    background?: string;
    lang?: 'fa' | 'en';
    onlyNumber?: boolean;
    isCurrency?: boolean;
    onChangeText?: (event: string) => void;
    inputSize?: SizeType;
    placeholder?: string | undefined;
    wrapperClassName?: string;
    rows?: number;
    height?: number;
    /**
     * if `error` property provided, regardless of its value, the error gap is applied to component.
     */
    error?: InputFieldError;
    hideErrorMessage?: boolean;
}
declare const InputTextArea: import('react').ForwardRefExoticComponent<InputTextAreaProps & import('react').RefAttributes<InputRef>>;
export { InputTextArea };
