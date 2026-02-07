import { CSSProperties, ImgHTMLAttributes } from 'react';

import { IconsNames } from './constants/iconNames';
import { createIcomoonIconSet } from './utils/createIcomoonIconSet';

const IconMoon = createIcomoonIconSet();

type BaseProps = {
  className?: string;
  style?: CSSProperties;
  disable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | number;
};

export type ImageIconProps = BaseProps & {
  hasSrc: true;
  src: NonNullable<ImgHTMLAttributes<HTMLImageElement>['src']>;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
};

export type IconMoonsProps = BaseProps & {
  hasSrc?: false;
  name?: IconsNames;
  color?: string | string[];
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
};

type IconProps = ImageIconProps | IconMoonsProps;

/**
 * Icon component
 */

const Icon = ({ size = 'medium', onClick, style, className, disable, ...rest }: IconProps) => {
  let fontSize = 18;

  if (typeof size === 'number') {
    fontSize = size;
  } else {
    switch (size) {
      case 'xsmall':
        fontSize = 12;
        break;
      case 'small':
        fontSize = 14;
        break;
      case 'medium':
        fontSize = 18;
        break;
      case 'large':
        fontSize = 24;
        break;
      default:
        fontSize = 18;
    }
  }

  return (
    <div
      role="img"
      onClick={!disable ? onClick : undefined}
      style={{
        ...(!!onClick && { cursor: 'pointer' }),
        ...(disable && { cursor: 'not-allowed', opacity: '0.5' }),
        ...style,
      }}
      className={className}
    >
      {rest.hasSrc ? (
        <img src={rest.src} width={fontSize} height={fontSize} {...rest.imgProps} />
      ) : (
        <IconMoon name={rest.name!} color={rest.color} size={fontSize} {...rest.imgProps} />
      )}
    </div>
  );
};

export { Icon };
export type { IconProps, IconsNames };
