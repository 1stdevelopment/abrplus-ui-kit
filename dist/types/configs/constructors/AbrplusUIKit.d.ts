import { Language, Resources } from '../locales';
export interface AbrplusUIKitType {
    locales?: {
        lang?: Language;
        resources?: Resources;
    };
}
export declare class AbrplusUIKit {
    private static instance;
    private configs;
    private constructor();
    static config(configs?: AbrplusUIKitType): AbrplusUIKit;
    private init;
}
