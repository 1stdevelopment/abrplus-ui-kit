import { ImageProps as Props } from 'antd';
import { ReactNode } from 'react';
export interface ImageProps extends Omit<Props, 'fallback'> {
    fallback?: ReactNode;
}
declare const Image: ({ preview, width, height, fallback, onError, wrapperClassName, ...rest }: ImageProps) => import("react/jsx-runtime").JSX.Element;
export { Image };
