import '@abrplus/config/assets/css/styles.css';

import { Select as AntSelect, ConfigProvider } from 'antd';
import React, { ReactElement, forwardRef, useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useInteractions } from '@configs';

import { InputErrorMessage, Tag } from '../..';
import { Flex, InfiniteLoader, Loading, Text } from '../../antOverrides';
import { Checkbox } from '../../atoms';
import { SelectClearIcon } from '../select/components/clearIcon';
import { SelectLabel } from '../select/components/label';
import { SelectPlaceholder } from '../select/components/placeholder';
import { SelectSuffix } from '../select/components/suffix';
import { NotFoundAddItem } from './components/notFoundAddItem';
import { CustomizedAntSelectTagConfig, generateSelectClassNames } from './style';
import { DefaultSelectOption, TagInputProps } from './types';

const { Option } = AntSelect;

export const TagInput = forwardRef(
  <T extends Record<string, any> = DefaultSelectOption>(
    {
      error,
      className,
      height = 48,
      underlined,
      value,
      label,
      labelExtraNode = null,
      onDropdownVisibleChange,
      onAddNew,
      open,
      showSearch = true,
      options,
      labelExtractor = (item: T) => item?.label,
      valueExtractor = (item: T) => item.value,
      tagExtractor = (item: T) => item.label,
      disableExtractor = (_item: T) => false,
      onChange,
      renderItem,
      renderSelectedItem,
      onChangeValue,
      selectedValue,
      selectedValues,
      wrapperClassName,
      disabled = false,
      loading,
      noContentFoundMessage,
      labelPosition = 'vertical',
      size = 'medium',
      placeholder,
      popupClassName,
      allowClear = true,
      header,
      footer,
      hasError,
      addonBefore,
      addonAfter,
      required,
      infinite,
      hideErrorMessage = false,
      onSearch,
      ...rest
    }: TagInputProps<T>,
    ref: any,
  ) => {
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [newItem, setNewItem] = useState('');
    const _value = useMemo(() => {
      const selectedItems: string[] = [];

      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }

      if (selectedValues) {
        selectedItems.push(...selectedValues.map(valueExtractor));
      }

      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }

      return selectedItems;
    }, [selectedValue, value, selectedValues, valueExtractor]);

    const onVisibleChange = (open: boolean) => {
      onDropdownVisibleChange?.(open);
      setIsOpen(open);
    };
    const allOptions = useMemo(() => {
      const optionsMap = new Map<string, T>();

      options?.forEach((option) => {
        optionsMap.set(valueExtractor(option), option);
      });

      selectedValues?.forEach((option) => {
        optionsMap.set(valueExtractor(option), option);
      });

      return Array.from(optionsMap.values());
    }, [options, selectedValues, valueExtractor]);

    const _onChange = (items: string[]) => {
      const selectedOptions = allOptions.filter((option) =>
        items.some((item) => item === valueExtractor(option)),
      );
      onChange?.(selectedOptions);

      setIsOpen(true);
      setNewItem('');

      selectedOptions && onChangeValue?.(selectedOptions);
    };

    const handleSearch = useCallback(
      (value: string) => {
        setNewItem(value);
        onSearch?.(value);
      },
      [onSearch],
    );

    const _renderItem = useCallback(
      ({ item, index, isActive }: { item: T; index: number; isActive: boolean }) => {
        const extractedLabel = labelExtractor(item);

        return (
          <Flex
            className="cursor-pointer"
            onClick={() => {
              const convertedValueToMatchOnChange = _value?.map((i) => i?.toString() || '') || [];

              if (convertedValueToMatchOnChange?.some((i) => i === valueExtractor(item))) {
                //deselect
                _onChange(convertedValueToMatchOnChange.filter((i) => i !== valueExtractor(item)));
              } else {
                _onChange([...convertedValueToMatchOnChange, valueExtractor(item)]);
              }
            }}
          >
            {renderItem ? (
              <Flex className={'min-h-[32px] w-full flex-1 items-center px-2'} gap={8}>
                <Checkbox checked={isActive} />
                {renderItem(item, index, isActive)}
              </Flex>
            ) : (
              <Flex gap={8} className={twMerge('h-10 w-full flex-1 items-center px-2')}>
                <Checkbox checked={isActive} />
                {typeof extractedLabel === 'string' ? (
                  <Text>{extractedLabel}</Text>
                ) : (
                  extractedLabel
                )}
              </Flex>
            )}
          </Flex>
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, renderItem],
    );

    const onAddNewItem = () => {
      const isNew = options?.filter((option) => labelExtractor(option) === newItem);

      if (isNew?.length === 0 && newItem !== '') {
        setIsOpen(true);
        onAddNew?.(newItem);
        setNewItem('');
      }
    };

    const tagRender: TagInputProps<T>['tagRender'] = ({ value, closable, onClose }) => {
      const item = selectedValues
        ? selectedValues?.find((item) => valueExtractor(item) === value)
        : options?.find((item) => valueExtractor(item) === value);
      const selectedLabel = item && labelExtractor(item);

      return (
        <Tag
          key={value}
          closable={closable}
          onClose={onClose}
          title={selectedLabel?.toString() || ''}
          style={{ margin: 5 }}
        />
      );
    };

    return (
      <Flex
        vertical={labelPosition === 'vertical'}
        className={twMerge(
          'h-fit w-full',
          !hideErrorMessage && 'inputErrorMessageContainer',
          labelPosition === 'horizontal' && 'items-center gap-3',
        )}
      >
        <SelectLabel {...{ disabled, label, labelExtraNode, required, size }} />
        <ConfigProvider theme={CustomizedAntSelectTagConfig}>
          <Flex align="center">
            {addonBefore}
            <AntSelect<any>
              {...rest}
              mode="multiple"
              style={{ minHeight: height }}
              menuItemSelectedIcon={null}
              ref={ref}
              className={twMerge(
                `${generateSelectClassNames({
                  size,
                  error: !!error?.message || hasError,
                  disabled,
                  isTabFocused,
                })}`,
                className,
              )}
              onSearch={handleSearch}
              disabled={disabled}
              filterOption
              {...eventHandlers()}
              showSearch={showSearch}
              bordered={false}
              tagRender={tagRender}
              placeholder={
                <SelectPlaceholder {...{ isHovered, isTabFocused, placeholder, size, disabled }} />
              }
              allowClear={
                allowClear
                  ? {
                      clearIcon: <SelectClearIcon />,
                    }
                  : undefined
              }
              notFoundContent={<NotFoundAddItem onAddNewItem={onAddNewItem} />}
              suffixIcon={
                <SelectSuffix {...{ isHovered, loading, disabled, isTabFocused, error }} />
              }
              popupClassName={twMerge('p-0 small-custom-scrollbar z-[1000]', popupClassName)}
              value={_value}
              onDropdownVisibleChange={onVisibleChange}
              loading={false}
              searchValue={newItem}
              open={disabled ? false : open === undefined ? isOpen : open}
              onChange={_onChange}
              optionFilterProp="label"
              dropdownAlign={{ offset: [0, 6] }}
              onInputKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === 'Tab') {
                  e.preventDefault();
                  onAddNewItem();
                }
              }}
              onPopupScroll={(e) => {
                e.persist();
                const target = e.target as HTMLElement;
                if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                  infinite?.hasMore && infinite?.fetchNextPage();
                }
              }}
              dropdownRender={(menu) => {
                if (loading) {
                  return (
                    <Flex className="h-[100px] items-center justify-center">
                      <Loading isLoading size={24} />
                    </Flex>
                  );
                }

                const dropdown = (
                  <Flex vertical>
                    {header && (
                      <Flex gap={8} align="center" className="px-4 py-3">
                        {header}
                      </Flex>
                    )}

                    <Flex vertical className="relative overflow-auto">
                      {menu}
                    </Flex>

                    {footer && (
                      <Flex
                        gap={8}
                        flex={1}
                        align="center"
                        className="border-light-7 border-t px-4 py-2"
                      >
                        {footer}
                      </Flex>
                    )}
                  </Flex>
                );

                if (!infinite) {
                  return dropdown;
                }

                return (
                  <Flex vertical>
                    {header && (
                      <Flex gap={8} align="center" className="px-4 py-3">
                        {header}
                      </Flex>
                    )}

                    <Flex
                      vertical
                      id="selectContainer"
                      className="tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto"
                    >
                      <InfiniteLoader
                        hasMore={infinite.hasMore}
                        onNextPage={infinite.fetchNextPage}
                        scrollableNodeId="selectContainer"
                      >
                        {options?.map((item, index) => {
                          const isActive = !!_value?.find((i) => i === valueExtractor(item));
                          return _renderItem({ index, item, isActive });
                        })}
                      </InfiniteLoader>
                    </Flex>

                    {footer && (
                      <Flex
                        gap={8}
                        flex={1}
                        align="center"
                        className="border-light-7 border-t px-4 py-2"
                      >
                        {footer}
                      </Flex>
                    )}
                  </Flex>
                );
              }}
            >
              {options?.map((item, index) => {
                const isActive = !!_value?.find((i) => i === valueExtractor(item));

                return (
                  <Option
                    key={valueExtractor(item)}
                    label={labelExtractor(item)}
                    value={valueExtractor(item)}
                    disabled={disableExtractor(item)}
                  >
                    {_renderItem({ index, item, isActive })}
                  </Option>
                );
              })}
            </AntSelect>
            {addonAfter}
          </Flex>
        </ConfigProvider>

        {!hideErrorMessage && error?.message && <InputErrorMessage message={error?.message} />}
      </Flex>
    );
  },
) as <T extends Record<string, any> = DefaultSelectOption>(
  props: TagInputProps<T> & { ref?: React.ForwardedRef<HTMLUListElement> },
) => ReactElement | null;
