import { IconsNames } from '../../atoms/icon';

export type ButtonMode = 'small' | 'medium' | 'block';

type PaddingButton = (hasIcon: boolean) => {
  [K in 'start' | 'end']: {
    [Key in ButtonMode]: string;
  };
};

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'children' | 'lang'
  > {
  height?: number | string;
  mode?: ButtonMode;
  iconName?: IconsNames;
  iconPosition?: 'start' | 'end';
  isLoading?: boolean;
  children?: string;
  lang?: 'fa' | 'en';
  textSize?: number;
}

export const fontSizePicker: { [key in ButtonMode]: string } = {
  block: 'text-[16px]',
  medium: 'text-[16px]',
  small: 'text-[12px]',
};

export const paddingPicker: PaddingButton = (hasIcon) => ({
  start: {
    block: `pe-4 ${hasIcon ? 'ps-3' : 'ps-4'} `,
    medium: `pe-4 ${hasIcon ? 'ps-3' : 'ps-4'} `,
    small: `pe-3 ps-[8px]`,
  },
  end: {
    block: `ps-4 pe-3`,
    medium: `ps-4 pe-3`,
    small: `ps-4 pe-3`,
  },
});

export const buttonDefaultClasses =
  'flex relative select-none w-fit appearance-none flex-row items-center  justify-center gap-2 whitespace-nowrap rounded text-center outline-none';
