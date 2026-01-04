import { SelectProps } from '..';
export interface SelectPlaceholderProps extends Pick<SelectProps<any>, 'placeholder' | 'disabled'> {
    isHovered?: boolean;
    isTabFocused?: boolean;
}
declare const SelectPlaceholder: ({ placeholder, isHovered, disabled, isTabFocused, }: SelectPlaceholderProps) => import("react/jsx-runtime").JSX.Element;
export { SelectPlaceholder };
