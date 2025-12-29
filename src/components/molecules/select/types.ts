import { SelectProps as AntSelectProps } from 'antd';
import { TreeSelectProps } from 'antd/lib';
import { LabeledValue } from 'antd/lib/select';
import React, { ReactNode } from 'react';

import { ITreeOption, InputFieldError } from '@configs';

import { IconsNames } from '../../atoms';
import { TagProps } from '../tag';

export { TreeSelect } from 'antd';

export type SelectRawValue = string | number | null;

export type DynamicValue<T, P> = P extends 'single' ? T | null : T[];
export type GetValueType<VALUE, TMultiple extends boolean | undefined> = TMultiple extends
  | false
  | undefined
  ? VALUE | null
  : VALUE[] | null;
export interface SelectProps<
  T extends Record<string, any> | unknown,
  P extends 'single' | 'multiple' = 'single',
> extends Omit<
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
  hideErrorMessage?: boolean;
  underlined?: boolean;
  label?: string | ReactNode;
  labelOffset?: number;
  labelExtraNode?: ReactNode;
  labelExtractor?: (item: T) => ReactNode | string;
  valueExtractor?: (item: T) => string;
  tagExtractor?: (item: T) => string;
  getTagProps?: (item: DefaultSelectOption) => Omit<TagProps, 'title'>;
  disableExtractor?: (item: T) => boolean;
  options?: T[];
  showSearch?: boolean;
  renderItem?: (item: T, index: number, isActive: boolean, disabled?: boolean) => React.ReactNode;
  onClickItem?: (value: SelectOption<LabeledValue>) => void;
  renderSelectedItem?: (item: T) => React.ReactNode;
  onChange?: (value?: DynamicValue<T, P>) => void;
  onChangeValue?(value: DynamicValue<SelectRawValue, P>): void;
  selectedValue?: DynamicValue<SelectRawValue, P>;
  value?: DynamicValue<T, P>;
  wrapperClassName?: string;
  disabled?: boolean;
  allowClear?: boolean;
  required?: boolean;
  lang?: 'fa' | 'en';
  noContentFoundMessage?: string;
  labelPosition?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium' | 'large';
  footer?: ReactNode;
  header?: ReactNode;
  infinite?: SelectInfinite;
  isLocaleSearch?: boolean;
  disableOutsideScroll?: boolean;

  /**
   * `selectedValue` has more priority than `value`. if `selectedValue` provided the select component ignores the `value`.
   */

  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
}

/* -------------------------------------------------------------------------- */
export interface PlusTreeSelectProps<TMultiple extends boolean>
  extends Omit<TreeSelectProps, 'onTreeExpand' | 'size'> {
  initialValue?: ITreeOption[];
  value?: ITreeOption | ITreeOption[] | null;
  label?: string;
  beforeLabelIcon?: IconsNames;
  afterLabelIcon?: IconsNames;
  renderPrefix?: (options: { value?: any }) => React.ReactNode;
  treeData: ITreeOption[];
  placeholder?: string;
  treeDefaultExpandAll?: boolean;
  warning?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  addable?: boolean;
  multiple?: boolean;
  onChange?: (value: GetValueType<ITreeOption, TMultiple>) => void;
  onAddButtonClick?: () => void;
  renderItem?: (menuItem: ITreeOption) => React.ReactNode;
  readonly className?: string;
  style?: React.CSSProperties;
  onTreeExpand: (keys: Array<ITreeOption['value']>) => void;
  localSearch?: boolean;
  size?: 'small' | 'medium' | 'large';
  footer?: ReactNode;
  header?: ReactNode;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  error?: InputFieldError;
  /**
   *  pass this prop to only show negative border
   */
  hasError?: boolean;
  labelOffset?: number;
  required?: boolean;
  wrapperClassName?: string;
  treeDataHashMap?: Map<ITreeOption['value'], ITreeOption>;
}

export const SELECT_POPUP_HEIGHT = 200;

export type DefaultSelectOption = {
  label?: ReactNode;
  value: any;
};

export type SelectInfinite = {
  total?: number;
  fetchNextPage: () => void;
  hasMore: boolean;
};

export type SelectOption<T> = T | null | undefined;
