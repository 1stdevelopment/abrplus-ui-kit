import { TimePickerProps as PickerProps } from 'antd';
import { InputFieldError } from '../../../configs';
export interface InputTimePickerProps extends PickerProps {
    error?: InputFieldError;
}
export declare const InputTimePicker: ({ className, error, ...rest }: InputTimePickerProps) => import("react/jsx-runtime").JSX.Element;
