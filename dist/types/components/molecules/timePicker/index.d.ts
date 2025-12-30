import { InputFieldError } from '../../../configs';
import { TimePickerProps as PickerProps } from 'antd';
export interface InputTimePickerProps extends PickerProps {
    error?: InputFieldError;
}
export declare const InputTimePicker: ({ className, error, ...rest }: InputTimePickerProps) => import("react/jsx-runtime").JSX.Element;
