import { SelectProps } from '../../..';
export interface SelectLabelProps extends Pick<SelectProps<any>, 'label' | 'size' | 'disabled' | 'required' | 'labelExtraNode'> {
    offset?: number;
}
declare const SelectLabel: ({ disabled, label, labelExtraNode, required, size, offset, }: SelectLabelProps) => import("react/jsx-runtime").JSX.Element | null;
export { SelectLabel };
