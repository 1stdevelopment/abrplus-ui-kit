import { InputRef } from 'antd';
import { MouseEvent } from 'react';
import { InputDefaultProps } from '../default';
export interface InputSearchProps extends InputDefaultProps {
    onIconClick?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
}
export declare const InputSearch: import('react').ForwardRefExoticComponent<InputSearchProps & import('react').RefAttributes<InputRef>>;
