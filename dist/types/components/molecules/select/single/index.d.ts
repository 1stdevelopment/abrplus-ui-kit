import { default as React, ReactElement } from 'react';
import { DefaultSelectOption, SelectProps } from '../types';
export declare const SingleSelect: <T extends Record<string, any> = DefaultSelectOption>(props: SelectProps<T, "single"> & {
    ref?: React.ForwardedRef<HTMLUListElement>;
}) => ReactElement | null;
