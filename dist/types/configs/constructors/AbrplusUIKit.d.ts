import { Language, Resources } from '../locales';
import { APP_NAME } from '../types';
export interface AbrplusUIKitType {
    locales?: {
        lang?: Language;
        resources?: Resources;
    };
    appName?: APP_NAME;
}
export declare class AbrplusUIKit {
    private static instance;
    private configs;
    private constructor();
    static config(configs?: AbrplusUIKitType): AbrplusUIKit;
    private init;
    getAppName(): APP_NAME;
}
