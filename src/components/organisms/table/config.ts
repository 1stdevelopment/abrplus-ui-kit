import { colors } from '@configs';
import { deepMerge } from '@utilities';
import { ThemeConfig } from 'antd';
import { twMerge } from 'tailwind-merge';

import { TableProps } from '.';

type NonUndefined<T> = T extends undefined ? never : T;

export const CustomizedAntTableConfig = (theme?: Partial<ThemeConfig>): ThemeConfig =>
  deepMerge(
    {
      components: {
        Table: {
          borderColor: colors.light_7,
          cellPaddingBlock: 0,
          cellPaddingBlockMD: 0,
          cellPaddingBlockSM: 0,
          cellPaddingInline: 8,
          cellPaddingInlineMD: 8,
          cellPaddingInlineSM: 8,
          fixedHeaderSortActiveBg: 'transparent',
          footerBg: colors.light_2,
          headerBg: colors.light_2,
          headerBorderRadius: 0,
          headerColor: colors.primary,
          bodySortBg: colors.white_ff,
          headerSortHoverBg: colors.light_1,
          headerSortActiveBg: colors.light_1,
          headerSplitColor: 'transparent',
          rowExpandedBg: colors.light_3,
          rowHoverBg: colors.light_4,
          rowSelectedBg: colors.light_7,
          rowSelectedHoverBg: colors.light_7,
          selectionColumnWidth: 56,
          /* here is your component tokens */
        },
        Pagination: {
          itemActiveBg: colors.white_ff,
          itemActiveBgDisabled: colors.negative,
          itemActiveColorDisabled: colors.negative,
          colorPrimaryBorderHover: 'red',
          colorInfoBorderHover: 'yellow',
          colorWarningBorderHover: 'green',
          itemBg: colors.white_ff,
          itemInputBg: colors.negative,
          itemLinkBg: colors.negative,
          itemSize: 30,
          itemSizeSM: 30,
          miniOptionsSizeChangerTop: 40,
          colorPrimary: colors.primary,
          fontFamily: 'YekanBakhFaRegular',
        },
      },
    },
    theme ?? {},
  );

export const tailwindTableClasses = twMerge(
  '[&_th]:!border-t h-full [&_.ant-spin-nested-loading]:h-full [&_.ant-spin-container]:h-full [&_.ant-table]:h-full [&_.ant-spin-container]:flex [&_.ant-spin-container]:flex-col [&_.ant-spin-container]:justify-between  [&_.ant-table-column-title]:flex-[0] [&_th]:!border-t-light-7 [&_th]:!pt-4 [&_th]:!pb-1 [&_.ant-table-selection-column]:!ps-4 [&_.ant-table-wrapper]:!p-0 [&_.ant-table-measure-row]:!h-[1px] [&_.ant-table-body]:h-full [&_.ant-table-container]:h-full',
);
export const tableTransparentHeaderClasses = twMerge(
  '[&_th]:!bg-transparent h-full [&_th]:!border-t-0  [&_td]:!bg-transparent ',
);

export const rowHeightClassName: Record<NonUndefined<TableProps<any>['size']>, string> = {
  small: 'h-[40px] max-h-[40px] min-h-[40px]',
  middle: 'h-[48px] max-h-[48px] min-h-[48px]',
  large: 'h-[56px] max-h-[56px] min-h-[56px]',
};
