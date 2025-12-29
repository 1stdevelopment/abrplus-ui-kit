import { TreeSelect } from 'antd';
import { ConfigProvider } from 'antd/lib';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { ITreeOption, colors, useInteractions } from '@configs';

import { Flex, Loading, Text } from '../../../antOverrides';
import { Tag } from '../../tag';
import { SelectLabel } from '../components/label';
import { SelectNotFound } from '../components/notFound';
import { SelectSuffix } from '../components/suffix';
import { generateSelectClassNames } from '../style';
import { GetValueType, PlusTreeSelectProps } from '../types';

/* -------------------------------------------------------------------------- */

export const PlusTreeSelect = <TMultiple extends boolean>({
  initialValue,
  value: valueProps,
  label,
  beforeLabelIcon,
  renderPrefix,
  treeData,
  placeholder,
  treeDefaultExpandAll,
  warning,
  disabled = false,
  searchable,
  addable,
  multiple,
  onChange,
  onAddButtonClick,
  renderItem,
  className,
  style,
  onTreeExpand,
  onSearch,
  localSearch = true,
  wrapperClassName,
  error,
  required,
  size = 'medium',
  labelOffset,
  hasError,
  addonBefore,
  popupClassName,
  header,
  footer,
  onSelect,
  onDeselect,
  treeDataHashMap,
  ...rest
}: PlusTreeSelectProps<TMultiple>) => {
  const [items, setitmes] = useState(treeData);
  // const [selectedKeys, setselectedKeys] = useState<number[] | string[]>(['']);
  const [isLoading, setLoading] = useState(true);
  const { t } = useTranslation();

  const [selectedItems, setselectedItems] = useState<ITreeOption[]>(
    initialValue ? initialValue : [],
  );

  const value = valueProps
    ? Array.isArray(valueProps)
      ? valueProps
      : [valueProps]
    : selectedItems;

  const { isTabFocused, eventHandlers } = useInteractions();
  useEffect(() => {
    if (treeData === null) {
      setLoading(true);
      setitmes([]);
    }
    if (treeData?.length === 0) {
      setLoading(false);
      setitmes([]);
    }
    if (treeData?.length > 0) {
      setLoading(false);
      setitmes(treeData);
    }
  }, [treeData]);

  const renderDropDownContent = (menu: React.ReactElement) => {
    const dropdown = (
      <Flex vertical>
        {header && (
          <Flex gap={8} align="center" className="px-4 py-3">
            {header}
          </Flex>
        )}

        <Flex vertical className="relative overflow-auto scroll-smooth">
          {menu}
        </Flex>

        {footer && (
          <Flex gap={8} flex={1} align="center" className="border-light-7 border-t px-4 py-2">
            {footer}
          </Flex>
        )}
      </Flex>
    );
    return dropdown;
  };

  // function getExpandedKey(list: ITreeOption[]): any[] {
  //   const result = list.reduce((prev: Array<string | number>, cur: ITreeOption) => {
  //     return [...prev, cur.value, ...(cur.children ? getExpandedKey(cur.children) : [])];
  //   }, []);
  //   return result;
  // }
  const renderTree = (item: ITreeOption) => {
    return (
      <TreeSelect.TreeNode
        title={
          renderItem ? (
            renderItem(item)
          ) : (
            <Text lang={'fa'} color={colors.primary_dark_1}>
              {item.label}
            </Text>
          )
        }
        value={item.value}
        key={item.value}
        label={item.label}
        checkable={item.checkable}
      >
        {item.hasChildren && (
          <div style={{ display: 'none' }}>blank children for showing switcher icon</div>
        )}
        {item.children && item.children.map((opt) => renderTree(opt))}
      </TreeSelect.TreeNode>
    );
  };

  return (
    <Flex style={style} {...eventHandlers()} className={twMerge('flex-col', wrapperClassName)}>
      {label && <SelectLabel {...{ disabled, label, required, size, offset: labelOffset }} />}
      <ConfigProvider>
        {addonBefore}
        <TreeSelect
          listItemHeight={50}
          className={twMerge(
            `${generateSelectClassNames({
              size,
              error: !!error?.message || hasError,
              disabled,
              isTabFocused,
            })}`,
            className,
            'flex-none [&_.ant-select-selector]:!border-none',
          )}
          popupClassName={twMerge(
            'p-0 small-custom-scrollbar [&_.ant-select-selector]:!border-none [&_.ant-select-tree-node-content-wrapper]:!p-0 [&_.ant-select-tree-node-selected]:!bg-light-1 [&_.ant-select-tree-treenode]:!h-10 z-[1000]',
            popupClassName,
          )}
          showSearch={false}
          onTreeExpand={(expandedKeys) => {
            onTreeExpand(expandedKeys.map((key) => String(key)));
            // setselectedKeys(expandedKeys);
          }}
          treeDefaultExpandAll={treeDefaultExpandAll}
          disabled={disabled}
          treeCheckable={multiple}
          showCheckedStrategy={TreeSelect.SHOW_PARENT}
          labelInValue
          value={value}
          suffixIcon={<SelectSuffix {...{ disabled, isTabFocused, error }} />}
          //@ts-ignore
          tagRender={(props) => {
            return value && value?.length < 3 ? (
              <Tag title={props.label as string} {...props} />
            ) : props.value === value?.[0].value ? (
              <span>
                {value.length} {t('common.message.itemSelected')}
              </span>
            ) : null;
          }}
          treeNodeLabelProp="label"
          notFoundContent={isLoading ? <Loading /> : <SelectNotFound />}
          onChange={(value: ITreeOption[]) => {
            let values = value;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              values = value.map((v) => treeDataHashMap?.get(v.value) ?? v);
            }
            setselectedItems(values);
            onChange?.(values as GetValueType<ITreeOption, TMultiple>);
          }}
          onSelect={(value) => {
            const _value = value as unknown as string; // TODO: CHECK TYPE
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              onSelect?.(
                (treeDataHashMap.get(_value) as GetValueType<ITreeOption, TMultiple>) || {},
                value,
              );
            } else {
              onSelect?.(
                (items.find((item) => item.value === _value) as GetValueType<
                  ITreeOption,
                  TMultiple
                >) || {},
                value,
              );
            }
          }}
          placeholder={placeholder}
          dropdownRender={renderDropDownContent}
          onInputKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Backspace') {
              event.stopPropagation();
            }
          }}
          onDeselect={(value) => {
            const _value = value as unknown as string; // TODO: CHECK TYPE
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              onDeselect?.(
                (treeDataHashMap.get(_value) as GetValueType<ITreeOption, TMultiple>) || {},
                value,
              );
            } else {
              onDeselect?.(
                (items.find((item) => item.value === _value) as GetValueType<
                  ITreeOption,
                  TMultiple
                >) || {},
                value,
              );
            }
          }}
          {...rest}
        >
          {items.map((item) => {
            return renderTree(item);
          })}
        </TreeSelect>
      </ConfigProvider>
    </Flex>
  );
};
