import { useMemo } from 'react';

import { colors } from '@configs';
import {
  InboxFilterResponseVM,
  InboxFilterTypes,
  useGetV1InboxUserInboxFilters,
} from '@configs/crmObject';
import { useGetV2Color } from '@configs/global';

import { Flex, Text } from '../../../../../antOverrides';
import { Icon, IconsNames } from '../../../../../atoms';
import FilterListItem from './filterListItem';

interface TaskFiltersProps {
  onFilterClick: (taskTypeId?: InboxFilterResponseVM) => void;
}

export const FiltersList = ({ onFilterClick }: TaskFiltersProps) => {
  const { data: rawInboxFilters } = useGetV1InboxUserInboxFilters();
  const { data: colorsHex } = useGetV2Color();

  const { customFilters, inboxFilters } = useMemo(() => {
    const customFilters: InboxFilterResponseVM[] = [];
    const inboxFilters: InboxFilterResponseVM[] = [];

    if (rawInboxFilters?.length) {
      rawInboxFilters.forEach((filter) => {
        if (filter.filterType === InboxFilterTypes.Custom) {
          customFilters.push(filter);
          return;
        } else {
          inboxFilters.push(filter);
        }
      });
    }

    return { customFilters, inboxFilters };
  }, [rawInboxFilters]);

  return (
    <>
      <Flex wrap className="p-3" gap={8}>
        {inboxFilters?.map((taskFilter) => (
          <FilterListItem
            onFilterClick={onFilterClick}
            colorsHex={colorsHex}
            taskFilter={taskFilter}
          />
        ))}
      </Flex>

      <Flex
        vertical
        flex={1}
        gap={8}
        className="bg-light-1 tiny-custom-scrollbar overflow-y-scroll p-3"
      >
        {customFilters?.map((filter) => (
          <Flex
            justify="space-between"
            className="bg-white-ff hover:bg-light-2 cursor-pointer rounded p-3"
            onClick={() => onFilterClick(filter)}
          >
            <Flex align="center" gap={8}>
              <Icon name={filter.icon as IconsNames} size={20} />
              <Text color={colors.primary}>{filter.name}</Text>
            </Flex>

            <Text
              className="bg-light-4 flex h-7 w-7 items-center justify-center rounded"
              color={colors.primary}
            >
              {filter.count}
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
