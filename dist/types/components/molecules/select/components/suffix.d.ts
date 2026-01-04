import { InputFieldError } from '../../../../configs';
import { SelectProps } from '..';
export interface SelectSuffixProps extends Pick<SelectProps<any>, 'disabled' | 'loading'> {
    isHovered?: boolean;
    isTabFocused?: boolean;
    disabled?: boolean;
    error?: InputFieldError;
}
declare const SelectSuffix: ({ isHovered, isTabFocused, disabled, error }: SelectSuffixProps) => import("react/jsx-runtime").JSX.Element;
export { SelectSuffix };
