import { SelectProps as AntSelectProps } from 'antd';
import React, { ReactNode } from 'react';

import { InputFieldError } from '@configs';

export interface TagResponseVM {
  id?: string;
  tag?: string;
}

export interface TagInputProps<T extends Record<string, any> | unknown> extends Omit<
  AntSelectProps<T>,
  | 'onChange'
  | 'options'
  | 'labelInValue'
  | 'optionLabelProp'
  | 'disabled'
  | 'size'
  | 'allowClear'
  | 'value'
  | 'mode'
> {
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  /**
   *  pass this prop to only show negative border
   */
  hasError?: boolean;
  height?: number | string;
  underlined?: boolean;
  label?: string;
  labelOffset?: number;
  labelExtraNode?: ReactNode;
  labelExtractor?: (item: T) => ReactNode | string;
  valueExtractor?: (item: T) => string;
  tagExtractor?: (item: T) => string;
  disableExtractor?: (item: T) => boolean;
  options?: T[];
  showSearch?: boolean;
  renderItem?: (item: T, index: number, isActive: boolean) => React.ReactNode;
  renderSelectedItem?: (item: T) => React.ReactNode;
  onChange?: (value?: T[]) => void;
  onChangeValue?(value: TagResponseVM[]): void;
  onAddNew?: (value: string) => void;
  selectedValue?: string[];
  selectedValues?: T[];
  value?: T[];
  wrapperClassName?: string;
  disabled?: boolean;
  allowClear?: boolean;
  required?: boolean;
  tagValue?: T[];
  onChangeTagValue?: (value?: T[]) => void;
  noContentFoundMessage?: string;
  labelPosition?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium';
  footer?: ReactNode;
  header?: ReactNode;
  infinite?: SelectInfinite;

  /**
   * `selectedValue` has more priority than `value`. if `selectedValue` provided the select component ignores the `value`.
   */

  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  hideErrorMessage?: boolean;
}

export const SELECT_POPUP_HEIGHT = 200;

export type DefaultSelectOption = {
  label?: ReactNode;
  value: any;
};

type SelectInfinite = {
  total?: number;
  fetchNextPage: () => void;
  hasMore: boolean;
};

export type SelectOption<T> = T | null | undefined;
