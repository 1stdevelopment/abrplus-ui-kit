import { CSSProperties } from 'react';

import { IconsNames } from '../constants/iconNames';
import { iconsPack } from '../constants/iconsPack';

type IcomoonProps = {
  size?: number;
  name: IconsNames;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
};

export function createIcomoonIconSet() {
  const Icon = ({ size = 30, name, color, className, style }: IcomoonProps) => {
    const glyph = iconsPack[name];

    if (!glyph) return null;

    const shouldUseCurrentColor = !!color || !!className;

    return (
      <svg
        viewBox={`0 0 ${glyph.height} ${glyph.height}`}
        width={size || 30}
        height={size || 30}
        className={className}
        style={style}
        fill="currentColor"
      >
        {glyph.icon.paths.map((d, index) => {
          const originalFill = (glyph.attrs[index] as { fill?: string })?.fill;
          return (
            <path
              key={index}
              d={d}
              {...glyph.attrs[index]}
              fill={
                color
                  ? Array.isArray(color)
                    ? color[index]
                    : color
                  : shouldUseCurrentColor
                    ? 'currentColor'
                    : originalFill
              }
            ></path>
          );
        })}
      </svg>
    );
  };

  return Icon;
}
