import { AbrplusUIKitType } from '../constructors';
import { APP_NAME } from '../types';
import { ConfigProviderProps } from 'antd';
import { ReactNode } from 'react';
export interface AbrplusUIKitProviderProps extends ConfigProviderProps {
    children: ReactNode;
    locales: AbrplusUIKitType['locales'];
    antdConfigs?: Partial<ConfigProviderProps>;
    appName?: APP_NAME;
}
export declare const AbrplusUIKitProvider: ({ children, locales, appName, antdConfigs, }: AbrplusUIKitProviderProps) => import("react/jsx-runtime").JSX.Element;
