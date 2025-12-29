import { Checkbox } from 'antd';
import React from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { colors } from '@configs';

import { Flex, Text } from '../..';

export interface FilterItemProps {
  label?: string;
  hasCheckbox?: boolean;
  children?: React.ReactNode;
  name?: string;
  onClear?: () => void;
}

const FilterItem = ({ label, hasCheckbox, children, name, onClear }: FilterItemProps) => {
  const { control, setValue } = useFormContext();
  const isChecked = useWatch({
    control: control,
    name: name + '_InternalCheckbox',
  });

  return (
    <Flex vertical className={'my-2'}>
      <Flex gap={8} align="center" className={'mb-2'}>
        {hasCheckbox && (
          <Controller
            control={control}
            name={name + '_InternalCheckbox'}
            render={({ field: { onChange, value, ...rest } }) => (
              <Checkbox
                {...rest}
                checked={value}
                onChange={(e) => {
                  !e.target.checked && onClear?.();
                  onChange(e);
                }}
              />
            )}
            shouldUnregister
          />
        )}
        <Flex
          vertical
          style={{ cursor: 'pointer' }}
          onClick={() => setValue(name + '_InternalCheckbox', !isChecked)}
        >
          <Text size={14} color={colors.primary}>
            {label}
          </Text>
        </Flex>
      </Flex>

      {(isChecked || !hasCheckbox) && <div style={{ marginBottom: 4 }}>{children}</div>}
    </Flex>
  );
};

export { FilterItem };
