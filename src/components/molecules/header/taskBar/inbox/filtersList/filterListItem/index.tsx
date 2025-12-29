import { isEqual } from 'lodash';
import { memo, useMemo } from 'react';

import { colors } from '@configs';
import { InboxFilterResponseVM } from '@configs/crmObject';
import { ColorVM } from '@configs/global';

import { Flex, Text } from '../../../../../../antOverrides';
import { Icon, IconsNames } from '../../../../../../atoms';

const FilterListItem = memo(
  ({
    taskFilter,
    onFilterClick,
    colorsHex,
  }: {
    taskFilter: InboxFilterResponseVM;
    onFilterClick: (taskTypeId?: InboxFilterResponseVM | undefined) => void;
    colorsHex: ColorVM[] | undefined;
  }) => {
    const backgroundColor = useMemo(() => {
      return colorsHex?.find((color) => color.id === taskFilter.color);
    }, [colorsHex, taskFilter.color]);

    return (
      <Flex
        align="center"
        justify="space-between"
        className="w-[calc(50%-4px)] cursor-pointer rounded p-3"
        style={
          backgroundColor
            ? { backgroundColor: `#${backgroundColor.colorCode}` }
            : { backgroundColor: colors.primary_light_1 }
        }
        onClick={() => onFilterClick(taskFilter)}
      >
        <Flex align="center" gap={8}>
          <Icon name={(taskFilter.icon as IconsNames) || 'system-logs-duotone'} size={20} />
          <Text color={colors.white_ff}>{taskFilter?.name || '--'}</Text>
        </Flex>
        <Text color={colors.white_ff}>{taskFilter?.count || 0}</Text>
      </Flex>
    );
  },
  isEqual,
);

export default FilterListItem;
