import { default as React, ReactElement } from 'react';
import { DefaultSelectOption, TagInputProps } from './types';
export declare const TagInput: <T extends Record<string, any> = DefaultSelectOption>(props: TagInputProps<T> & {
    ref?: React.ForwardedRef<HTMLUListElement>;
}) => ReactElement | null;
export type { SelectOption, TagInputProps } from './types';
