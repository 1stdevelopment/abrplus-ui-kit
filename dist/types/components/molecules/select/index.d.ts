import { DefaultSelectOption, SelectInfinite, SelectProps, SelectRawValue } from './types';
declare const Select: {
    readonly Tree: <TMultiple extends boolean>({ initialValue, value: valueProps, label, beforeLabelIcon, renderPrefix, treeData, placeholder, treeDefaultExpandAll, warning, disabled, searchable, addable, multiple, onChange, onAddButtonClick, renderItem, className, style, onTreeExpand, onSearch, localSearch, wrapperClassName, error, required, size, labelOffset, hasError, addonBefore, popupClassName, header, footer, onSelect, onDeselect, treeDataHashMap, ...rest }: import('./types').PlusTreeSelectProps<TMultiple>) => import("react/jsx-runtime").JSX.Element;
    readonly Single: <T extends Record<string, any> = DefaultSelectOption>(props: SelectProps<T, "single"> & {
        ref?: React.ForwardedRef<HTMLUListElement>;
    }) => import('react').ReactElement | null;
    readonly Multiple: <T extends Record<string, any> = DefaultSelectOption>(props: SelectProps<T, "multiple"> & {
        ref?: React.ForwardedRef<HTMLUListElement>;
    }) => import('react').ReactElement | null;
};
export { Select };
export type { DefaultSelectOption, SelectInfinite, SelectProps, SelectRawValue };
