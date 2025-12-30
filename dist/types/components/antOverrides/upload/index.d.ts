import { UploadProps as AntUploadProps } from 'antd';
import { ReactNode } from 'react';
interface UploadProps<T = any> extends Omit<AntUploadProps<T>, 'onChange' | 'children'> {
    children: ReactNode;
}
export declare const Upload: ({ children, ...rest }: UploadProps) => import("react/jsx-runtime").JSX.Element;
export {};
