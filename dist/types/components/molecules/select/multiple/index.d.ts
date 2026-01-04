import { default as React, ReactElement } from 'react';
import { DefaultSelectOption, SelectProps } from '../types';
export declare const MultipleSelect: <T extends Record<string, any> = DefaultSelectOption>(props: SelectProps<T, "multiple"> & {
    ref?: React.ForwardedRef<HTMLUListElement>;
}) => ReactElement | null;
