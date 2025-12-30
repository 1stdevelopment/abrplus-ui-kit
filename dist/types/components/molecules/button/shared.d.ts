import { IconsNames } from '../../atoms/icon';
export type ButtonMode = 'small' | 'medium' | 'block';
type PaddingButton = (hasIcon: boolean) => {
    [K in 'start' | 'end']: {
        [Key in ButtonMode]: string;
    };
};
export interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'children' | 'lang'> {
    height?: number | string;
    mode?: ButtonMode;
    iconName?: IconsNames;
    iconPosition?: 'start' | 'end';
    isLoading?: boolean;
    children?: string;
    lang?: 'fa' | 'en';
    textSize?: number;
}
export declare const fontSizePicker: {
    [key in ButtonMode]: string;
};
export declare const paddingPicker: PaddingButton;
export declare const buttonDefaultClasses = "flex relative select-none w-fit appearance-none flex-row items-center  justify-center gap-2 whitespace-nowrap rounded text-center outline-none";
export {};
