import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex } from '../../antOverrides/flex';
import { Text } from '../../antOverrides/text';

export interface HorizontalLineProps {
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  color?: string;
  text?: string;
}

const HorizontalLine = ({
  className,
  wrapperClassName,
  style,
  color,
  text,
}: HorizontalLineProps) => {
  return (
    <Flex data-testid="horizontal-line" className={wrapperClassName} align="center" gap={10}>
      {text ? (
        <Text
          className="whitespace-nowrap"
          // numberOfLines={1}
          weight="normal"
          size="medium"
          color={colors.primary}
        >
          {text}
        </Text>
      ) : null}
      <hr
        role="separator"
        className={twMerge('border-t-light-7 m-0 w-full border-x-0 border-b-0 border-t', className)}
        style={{ ...style, borderTopColor: color }}
      />
    </Flex>
  );
};

export { HorizontalLine };
