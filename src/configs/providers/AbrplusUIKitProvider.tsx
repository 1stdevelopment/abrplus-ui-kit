import { AbrplusUIKit, AbrplusUIKitType } from '@configs/constructors';
import { useAntConfig } from '@hooks';
import { deepMerge } from '@utilities';
import { ConfigProvider, ConfigProviderProps } from 'antd';
import { ReactNode } from 'react';

export interface AbrplusUIKitProviderProps extends ConfigProviderProps {
  children: ReactNode;
  locales: AbrplusUIKitType['locales'];
  antdConfigs?: Partial<ConfigProviderProps>;
}
export const AbrplusUIKitProvider = ({
  children,
  locales,
  antdConfigs = {},
}: AbrplusUIKitProviderProps) => {
  AbrplusUIKit.config({
    locales,
  });
  const defaultAntDConfigs = useAntConfig(locales?.lang ?? 'fa') as ConfigProviderProps;
  const mergedConfigs = deepMerge(defaultAntDConfigs, antdConfigs);
  return <ConfigProvider {...mergedConfigs}>{children}</ConfigProvider>;
};
