import { AppDirection } from '../configs';
import { ThemeConfig } from 'antd';
export declare const useAntConfig: () => {
    theme: ThemeConfig;
    direction: AppDirection;
    locale: import('antd/lib/locale').Locale;
};
