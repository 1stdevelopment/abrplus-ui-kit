import { colors } from '@configs';

import { Flex, Icon, Render, SelectProps, Text } from '../../..';

export interface SelectLabelProps extends Pick<
  SelectProps<any>,
  'label' | 'size' | 'disabled' | 'required' | 'labelExtraNode'
> {
  offset?: number;
}

const SelectLabel = ({
  disabled,
  label,
  labelExtraNode,
  required,
  size,
  offset = 0,
}: SelectLabelProps) => {
  if (!label) {
    return null;
  }

  return (
    <label
      className="flex flex-row items-center justify-between"
      style={{ marginBlockEnd: offset }}
    >
      <Flex vertical={false} align="center" gap={1}>
        {typeof label === 'string' ? (
          <Text
            className="h-[24px]"
            weight="normal"
            size={size === 'medium' ? 14 : 12}
            color={disabled ? colors.primary_light_2 : colors.primary}
          >
            {label}
          </Text>
        ) : (
          <>{label}</>
        )}
        <Render when={required}>
          <Icon name="Asterisk" size={6} color={colors.negative} className="mb-2" />
        </Render>
      </Flex>
      {labelExtraNode}
    </label>
  );
};

export { SelectLabel };
