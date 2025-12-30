import { RefAttributes } from 'react';
import { InputRef, InputSearchProps } from '../../../molecules/input';
type TreeSearchBarProps = InputSearchProps & RefAttributes<InputRef> & {
    onSearch: (value: string) => void;
};
export declare const TreeSearchBar: ({ onSearch, ...props }: TreeSearchBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
