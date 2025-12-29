import { Select as AntSelect, ConfigProvider } from 'antd';
import React, {
  ReactElement,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { colors, i18nInstance, useInteractions } from '@configs';

import { InputErrorMessage, Tag } from '../..';
import { Flex, InfiniteLoader, Loading, Text } from '../../../antOverrides';
import { Checkbox } from '../../../atoms';
import { SelectClearIcon } from '../components/clearIcon';
import { SelectLabel } from '../components/label';
import { SelectNotFound } from '../components/notFound';
import { SelectPlaceholder } from '../components/placeholder';
import { SelectSuffix } from '../components/suffix';
import { CustomizedAntSelectConfig, generateSelectClassNames } from '../style';
import { DefaultSelectOption, SelectProps, SelectRawValue } from '../types';

const { Option } = AntSelect;

export const MultipleSelect = forwardRef(
  <T extends Record<string, any> = DefaultSelectOption>(
    {
      error,
      className,
      underlined,
      value,
      label,
      labelExtraNode = null,
      onDropdownVisibleChange,
      open,
      showSearch = false,
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
      wrapperClassName,
      disabled = false,
      loading = false,
      noContentFoundMessage,
      labelPosition = 'vertical',
      size = 'medium',
      placeholder,
      popupClassName,
      allowClear,
      header,
      footer,
      infinite,
      hasError,
      addonBefore,
      addonAfter,
      required,
      lang,
      disableOutsideScroll,
      hideErrorMessage = false,
      getTagProps,
      ...rest
    }: SelectProps<T, 'multiple'>,
    ref: any,
  ) => {
    const { t } = useTranslation();
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const memoizedSelectedOptions = useRef(
      new Map<string, T>(value?.map((v) => [valueExtractor(v), v])),
    );

    const _value = useMemo(() => {
      const selectedItems: SelectRawValue[] = [];

      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }

      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }
      return selectedItems;
    }, [selectedValue, value, valueExtractor]);

    const currentSelectedItems = useMemo(() => {
      const mappedSelectedOptions = memoizedSelectedOptions.current;
      const unMappedOptions = [...mappedSelectedOptions].map(([_, option]) => option);
      const currents =
        unMappedOptions?.filter((item) => _value.some((i) => i === valueExtractor(item))) || [];

      return currents.map((cur) => ({ value: valueExtractor(cur), label: tagExtractor(cur) }));
    }, [_value, valueExtractor, tagExtractor]);

    const onVisibleChange = (open: boolean) => {
      onDropdownVisibleChange?.(open);
      setIsOpen(open);
    };
    const _onChange = (items: SelectRawValue[]) => {
      const mappedOptions = new Map(options?.map((option) => [valueExtractor(option), option]));
      const mappedItems = new Set(items);
      const mappedSelectedOptions = memoizedSelectedOptions.current;
      items.forEach((item) => {
        if (mappedOptions.has(item as string)) {
          const option = mappedOptions.get(item as string) as T;
          mappedSelectedOptions.set(valueExtractor(option), option);
        }
      });

      const unMappedSelectedOptions = [...mappedSelectedOptions].map(([_, option]) => option);
      unMappedSelectedOptions.forEach((option) => {
        if (!mappedItems.has(valueExtractor(option)))
          mappedSelectedOptions.delete(valueExtractor(option));
      });

      const selectedOptions: T[] = [];
      const selectedOptionIds = [];

      [...mappedSelectedOptions].forEach(([id, option]) => {
        selectedOptions.push(option);
        selectedOptionIds.push(id);
      });

      onChange?.(selectedOptions as T[]);

      const itemsValue: SelectRawValue[] = items.map((i) => i);
      onChangeValue?.(itemsValue);
    };

    const _renderItem = useCallback(
      ({
        item,
        index,
        isActive,
        disabled,
      }: {
        item: T;
        index: number;
        isActive: boolean;
        disabled?: boolean;
      }) => {
        const extractedLabel = labelExtractor(item);
        return (
          <Flex
            className={twMerge(
              'cursor-pointer',
              disabled && 'pointer-events-none cursor-default opacity-50',
            )}
            onClick={() => {
              const convertedValueToMatchOnChange = _value.map((i) => i);
              if (convertedValueToMatchOnChange.some((i) => i === valueExtractor(item))) {
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
                {renderItem(item, index, isActive, disabled)}
              </Flex>
            ) : (
              <Flex gap={8} className={twMerge('h-10 w-full flex-1 items-center px-2')}>
                <Checkbox checked={isActive} />
                {typeof extractedLabel === 'string' ? (
                  <Text
                    weight={isActive ? 'bold' : 'normal'}
                    color={colors.primary_dark_1}
                    lang={lang || i18nInstance.language}
                    className="max-w-full overflow-hidden text-ellipsis"
                  >
                    {extractedLabel}
                  </Text>
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

    const scrollHandler = (event: { target: any }) => {
      const { target } = event;
      if (!target.classList.contains('rc-virtual-list-holder')) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener('scroll', scrollHandler, true);
      } else {
        document.removeEventListener('scroll', scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);

    return (
      <Flex
        vertical={labelPosition === 'vertical'}
        className={twMerge(
          'h-fit w-full',
          !hideErrorMessage && 'inputErrorMessageContainer',
          labelPosition === 'horizontal' && 'items-center gap-3',
          wrapperClassName,
        )}
      >
        <SelectLabel {...{ disabled, label, labelExtraNode, required, size }} />
        <ConfigProvider theme={CustomizedAntSelectConfig}>
          <Flex align="center">
            {addonBefore}
            <AntSelect<any>
              {...rest}
              mode="multiple"
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
              disabled={disabled}
              {...eventHandlers()}
              showSearch={showSearch}
              bordered={false}
              maxTagCount={0}
              maxTagPlaceholder={
                <Text>
                  {t('common.message.itemsSelectedWithCount', { count: _value.length } as any)}
                </Text>
              }
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
              notFoundContent={<SelectNotFound {...{ error, noContentFoundMessage }} />}
              suffixIcon={
                <SelectSuffix {...{ isHovered, loading, disabled, isTabFocused, error }} />
              }
              popupClassName={twMerge('p-0 small-custom-scrollbar z-[1000]', popupClassName)}
              value={_value}
              onDropdownVisibleChange={onVisibleChange}
              onPopupScroll={(e) => {
                e.persist();
                const target = e.target as HTMLElement;
                if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                  infinite?.hasMore && infinite?.fetchNextPage();
                }
              }}
              loading={false}
              open={disabled ? false : open === undefined ? isOpen : open}
              // onChange={_onChange} // TODO back-space on search header, clears selectedOptions
              optionLabelProp="valueRender"
              dropdownRender={(menu) => {
                if (loading) {
                  return (
                    <Flex className="h-[100px] items-center justify-center">
                      <Loading isLoading size={24} />
                    </Flex>
                  );
                }
                const tags = (
                  <Flex
                    align="center"
                    gap={8}
                    className="tiny-custom-scrollbar-horizontal border-b-light-7 flex-1 overflow-x-auto border-b p-3"
                  >
                    {currentSelectedItems.map((i) => {
                      return (
                        <Tag
                          closable
                          key={i.value}
                          className="!min-w-max"
                          title={i.label || ''}
                          onClose={() => {
                            const filteredItems = _value?.filter((x) => i?.value !== x);
                            _onChange(filteredItems);
                          }}
                          {...getTagProps?.(i)}
                        />
                      );
                    })}
                  </Flex>
                );

                const dropdown = (
                  <Flex vertical>
                    {tags}
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
                    {tags}

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
                          return _renderItem({ index, isActive, item });
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
                    value={valueExtractor(item)}
                    disabled={disableExtractor(item)}
                  >
                    {_renderItem({
                      index,
                      item,
                      isActive,
                      disabled: disableExtractor ? disableExtractor(item) : false,
                    })}
                  </Option>
                );
              })}
            </AntSelect>
            {addonAfter}
          </Flex>
        </ConfigProvider>
        {error?.message && !hideErrorMessage && <InputErrorMessage message={error?.message} />}
      </Flex>
    );
  },
) as <T extends Record<string, any> = DefaultSelectOption>(
  props: SelectProps<T, 'multiple'> & { ref?: React.ForwardedRef<HTMLUListElement> },
) => ReactElement | null;
