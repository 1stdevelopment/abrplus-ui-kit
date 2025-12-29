import { CSSProperties } from 'react';

import glyphMap from '@assets/fonts/icomoon/selection.json';

type IcomoonProps = {
  size?: number;
  name?: string;
  color?: string | string[];
  style?: CSSProperties;
};

export function createIcomoonIconSet() {
  const Icon = (props: IcomoonProps) => {
    const glyph = glyphMap.icons.find(({ properties }) => properties.name === props.name);

    if (!glyph) return null;

    return (
      <svg
        viewBox={`0 0 ${glyphMap.height} ${glyphMap.height}`}
        fill="none"
        width={props.size || 30}
        height={props.size || 30}
      >
        {glyph.icon.paths.map((d, index) => {
          return (
            //TODO
            // @ts-ignore todo fix me later
            <path
              key={index}
              d={d}
              {...glyph.attrs[index]}
              fill={
                Array.isArray(props.color)
                  ? props.color[index]
                  : props.color || (glyph.attrs[index] as { fill: string }).fill
              }
            ></path>
          );
        })}
      </svg>
    );
  };

  return Icon;
}
