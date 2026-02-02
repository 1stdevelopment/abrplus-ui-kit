import { colors } from '@configs';
import { TablePaginationConfig } from 'antd';
import { TableCurrentDataSource } from 'antd/es/table/interface';
import { SorterResult } from 'antd/lib/table/interface';
import { useTranslation } from 'react-i18next';

import { Flex, Icon, Select, Text } from '../../..';
import { sizeOptions } from './usePagination';

interface SelectComponentClassProps<TFilter extends Record<string, any>> {
  pagination: TablePaginationConfig;
  filters: TFilter;
  pageSize: number;
  onChange: (
    pagination: TablePaginationConfig,
    filters: TFilter,
    sorter?: SorterResult<any> | SorterResult<any>[],
    extra?: TableCurrentDataSource<any>,
  ) => void;
}

interface ItemRenderProps {
  page: number;
  current: number;
  type: 'page' | 'next' | 'prev' | 'jump-prev' | 'jump-next';
  isFa?: boolean;
}

const SelectComponentClass = <TFilter extends Record<string, any>>({
  pagination,
  filters,
  pageSize,
  onChange,
}: SelectComponentClassProps<TFilter>) => {
  const { t } = useTranslation();

  return (
    <Flex justify="space-between">
      <Flex justify="flex-start" align="center" gap={8}>
        <Text size={14} className="whitespace-nowrap">
          {t('common.literal.displayCountPerPage')}
        </Text>
        <Select.Single
          onChange={(e) => onChange({ ...pagination, pageSize: Number(e?.value) }, filters)}
          className="min-w-fit"
          options={sizeOptions}
          style={{ width: 80 }}
          value={sizeOptions.find((i) => i.value === pageSize)}
          size="small"
        />
      </Flex>
    </Flex>
  );
};

const ItemRender = ({ page, type, current, isFa }: ItemRenderProps) => {
  const isCurrentPage = Number(page) === current;
  return (
    <Flex className="h-[30px] items-center justify-center">
      {type === 'page' ? (
        <Text
          weight={isCurrentPage ? 'bold' : 'normal'}
          size={isCurrentPage ? 20 : 18}
          color={isCurrentPage ? colors.primary : colors.primary_dark_1}
        >
          {page}
        </Text>
      ) : type === 'next' ? (
        <Flex className="me-4 h-[30px] w-[30px] items-center justify-center rounded border border-light-7">
          <Icon name={isFa ? 'Chevron_Right' : 'Chevron_Left'} color={colors.primary} />
        </Flex>
      ) : type === 'prev' ? (
        <Flex className="h-[30px] w-[30px] items-center justify-center rounded border border-light-7">
          <Icon name={isFa ? 'Chevron_Left' : 'Chevron_Right'} color={colors.primary} />
        </Flex>
      ) : (
        <Text size={18}>{'...'}</Text>
      )}
    </Flex>
  );
};

export { ItemRender, SelectComponentClass };
