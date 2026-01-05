import { AbrplusUIKitType } from '../constructors';
import { ConfigProviderProps } from 'antd';
import { ReactNode } from 'react';
export interface AbrplusUIKitProviderProps extends ConfigProviderProps {
    children: ReactNode;
    locales: AbrplusUIKitType['locales'];
    antdConfigs?: Partial<ConfigProviderProps>;
}
export declare const AbrplusUIKitProvider: ({ children, locales, antdConfigs, }: AbrplusUIKitProviderProps) => import("react/jsx-runtime").JSX.Element;
