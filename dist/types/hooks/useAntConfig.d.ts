import { AppDirection, Language } from '../configs';
export declare const useAntConfig: (language: Language) => {
    theme: {
        token: {
            fontFamily: string;
            colorPrimary: "#435879";
            colorSuccess: "#268e6c";
            colorError: "#c9252d";
            borderRadius: number;
        };
        components: {
            Input: {
                colorBorder: "#b8c7d8";
                hoverBorderColor: "#2b4063";
                colorBgContainerDisabled: "#eaeff5";
            };
            Collapse: {
                headerBg: "#f1f3f8";
            };
        };
    };
    direction: AppDirection;
    locale: import('antd/lib/locale').Locale;
};
