import { colors } from '@configs';
import { PAGINATION_SIZE } from '@constants';
import { useLocalStorageState, useObserveWindow } from '@hooks';
import { TablePaginationConfig } from 'antd';
import { TableCurrentDataSource } from 'antd/es/table/interface';
import { SortOrder, SorterResult } from 'antd/lib/table/interface';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ItemRender } from './components';

// import { ItemRender, SelectComponentClass } from './components';

export const sizeOptions = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
];

const CHANGE_ORDER = 'CHANGE_ORDER';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE = 'CHANGE';
const PAGE_SEARCH_PARAM = 'page';

const initialState = {
  order: undefined,
  orderBy: '',
  pageSize: 10,
  current: 1,
  filters: {},
};

interface PaginationProps extends TablePaginationConfig {
  hasQueryParams?: boolean;
}

type InitialState<TFilter extends Record<string, any> = Record<string, any>> = {
  order: SortOrder | undefined;
  orderBy: string;
  pageSize: number;
  current: number;
  filters: TFilter;
};

type ActionType<T> =
  | { type: 'CHANGE_ORDER'; payload: { orderBy: string; order: SortOrder } }
  | { type: 'CHANGE_PAGE'; payload: { current: number; pageSize?: number } }
  | {
      type: 'CHANGE';
      payload: {
        order?: SortOrder;
        orderBy?: string;
        pageSize?: number;
        current?: number;
        filters?: T;
      };
    };

type State<TFilter extends Record<string, any>> = {
  order: SortOrder | undefined;
  orderBy?: string;
  pageSize: number;
  current?: number;
  filters?: TFilter;
};

function reducer<TFilter extends Record<string, any>>(
  state: State<TFilter>,
  action: ActionType<TFilter>,
): State<TFilter> {
  switch (action.type) {
    case CHANGE_ORDER:
      return {
        ...state,
        orderBy: action.payload.orderBy,
        order: action.payload.order,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        current: action.payload.current,
        pageSize: action.payload.pageSize === undefined ? state.pageSize : action.payload.pageSize,
      };
    case CHANGE:
      return {
        ...state,
        current: action.payload.current,
        pageSize: action.payload.pageSize ?? state.pageSize,
        order: action.payload.order,
        orderBy: action.payload.orderBy,
        filters: action.payload.filters,
      };
    default:
      return state;
  }
}

function usePagination<TFilter extends Record<string, any>>({
  defaultCurrent = 1,
  defaultPageSize = 10,
  hasQueryParams = false,
  hideOnSinglePage,
  style,
  ...rest
}: PaginationProps) {
  const { isSmallerThanMedium } = useObserveWindow();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [localPageSize, setLocalPageSize] = useLocalStorageState<number>(
    PAGINATION_SIZE,
    defaultPageSize,
  );
  const [total, setTotal] = useState<number>(0);
  const { i18n } = useTranslation();

  const [{ current, order, orderBy, pageSize, filters }, dispatch] = useReducer(
    reducer as React.Reducer<InitialState<TFilter>, any>,
    {
      ...initialState,

      pageSize: localPageSize,
      current: hasQueryParams
        ? Number(searchParams.get(PAGE_SEARCH_PARAM) || String(defaultCurrent))
        : defaultCurrent,
    } as InitialState<TFilter>,
  );
  localStorage.removeItem(PAGINATION_SIZE);
  const onChange = useCallback<
    (
      pagination: TablePaginationConfig,
      filters: TFilter,
      sorter?: SorterResult<any> | SorterResult<any>[],
      extra?: TableCurrentDataSource<any>,
    ) => void
  >(
    (pagination, filters, sorter) => {
      const sort = Array.isArray(sorter) ? sorter[0] : sorter;
      setLocalPageSize(pagination.pageSize || defaultPageSize);
      dispatch({
        type: CHANGE,
        payload: {
          filters,
          current: pagination.current,
          pageSize: pagination.pageSize,
          orderBy: Array.isArray(sort?.field) ? sort?.field[0] : sort?.field,
          order: sort?.order,
        },
      });
    },
    [defaultPageSize, setLocalPageSize],
  );

  const handleInternalPagination = (page: number, pageSize: number | undefined) => {
    dispatch({ type: CHANGE_PAGE, payload: { current: page, pageSize } });
  };

  const getTotal = (total?: number) => setTotal(total || defaultPageSize);

  useEffect(() => {
    if (hasQueryParams) {
      navigate({ search: `?${PAGE_SEARCH_PARAM}=${current}` }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, hasQueryParams]);

  const pagination: TablePaginationConfig = {
    total,
    current,
    pageSize,
    defaultCurrent: defaultCurrent,
    defaultPageSize: defaultPageSize,
    onChange: handleInternalPagination,
    pageSizeOptions: ['10', '20', '30'],
    showSizeChanger: true,
    hideOnSinglePage: hideOnSinglePage,
    className: 'border border-negative',
    style: {
      backgroundColor: colors.white_ff,
      paddingInline: isSmallerThanMedium ? 4 : 24,
      paddingBlock: 16,
      margin: 0,
      borderTop: `1px solid ${colors.light_7}`,
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
      border: 'none',
      ...style,
    },
    showPrevNextJumpers: true,
    showQuickJumper: true,

    rootClassName:
      'flex items-center [&_.ant-select-dropdown]:!p-0 [&_.ant-pagination-options]:flex [&_.ant-pagination-options]:items-center [&_.ant-pagination-options]:justify-between [&_.ant-pagination-options]:flex-1',
    // selectComponentClass: () => SelectComponentClass({ filters, onChange, pageSize, pagination }),
    itemRender: (page, type) => ItemRender({ current, page, type, isFa: i18n.language === 'fa' }),

    ...rest,
  };

  return {
    filters,
    current,
    pageSize,
    pagination,
    order,
    orderBy,
    onChange,
    getTotal,
  };
}

type UsePaginationType = ReturnType<typeof usePagination>;

export { usePagination, type UsePaginationType };
