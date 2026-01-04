import { Language, colors, i18n } from '@configs';
import { useInteractions } from '@hooks';
import { Select as AntSelect, ConfigProvider } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import React, { ReactElement, forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputErrorMessage } from '../../';
import { Flex, InfiniteLoader, Loading, Text } from '../../../antOverrides';
import { Icon } from '../../../atoms';
import { SelectClearIcon } from '../components/clearIcon';
import { SelectLabel } from '../components/label';
import { SelectNotFound } from '../components/notFound';
import { SelectPlaceholder } from '../components/placeholder';
import { SelectSuffix } from '../components/suffix';
import { CustomizedAntSelectConfig, generateSelectClassNames } from '../style';
import { DefaultSelectOption, SelectOption, SelectProps } from '../types';

const { Option } = AntSelect;

export const SingleSelect = forwardRef(
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
      disableExtractor = (_item: T) => false,
      onChange,
      renderItem,
      onClickItem,
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
      labelOffset = 0,
      lang,
      style,
      hideErrorMessage = false,
      suffixIcon,
      isLocaleSearch = false,
      disableOutsideScroll,
      ...rest
    }: SelectProps<T>,
    ref: any,
  ) => {
    // const { t } = useTranslation();
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const _value = useMemo(() => {
      let selectItem: SelectOption<T> = null;

      if (selectedValue) {
        const item = options?.find((option) => valueExtractor(option) === selectedValue);

        if (item) {
          selectItem = item;
        }
      }

      if (value) {
        selectItem = value;
      }

      if (selectItem) return valueExtractor(selectItem);

      return selectItem;
    }, [options, selectedValue, value, valueExtractor]);

    const _label = useMemo(() => {
      const current = options?.find((item) => valueExtractor(item) === _value) ?? value;

      if (!current) return null;

      return labelExtractor(current);
    }, [_value, options, labelExtractor, valueExtractor, value]);

    const onVisibleChange = (open: boolean) => {
      onDropdownVisibleChange?.(open);
      setIsOpen(open);
    };

    const _onChange = (selected: SelectOption<LabeledValue>) => {
      if (!selected?.value) {
        return onChange?.(null);
      }
      if (selected) onChangeValue?.((selected.value as string) || '');

      const original = options?.find(
        (item) => valueExtractor(item) === (selected as LabeledValue)?.value,
      );

      onChange?.(original);
    };

    const _renderItem = useCallback(
      ({ item, index, isActive }: { item: T; index: number; isActive: boolean }) => {
        return (
          <Flex
            key={valueExtractor(item)}
            className="cursor-pointer"
            onClick={() => {
              _onChange({
                label: labelExtractor(item),
                value: valueExtractor(item),
                key: valueExtractor(item),
              });
              onClickItem?.({
                label: labelExtractor(item),
                value: valueExtractor(item),
                key: valueExtractor(item),
              });
              setIsOpen(false);
            }}
          >
            {renderItem ? (
              <Flex className={'min-h-[32px] w-full flex-1 items-center justify-between'}>
                {renderItem(item, index, isActive)}
              </Flex>
            ) : (
              <Flex
                className={twMerge(
                  'h-10 w-full flex-1 items-center justify-between border-r-2 border-r-transparent px-4',
                  'hover:border-r-2 hover:border-r-primary',
                )}
              >
                <Text
                  weight={isActive ? 'bold' : 'normal'}
                  color={colors.primary_dark_1}
                  lang={lang || (i18n.language as Language)}
                  className="max-w-full overflow-hidden text-ellipsis"
                >
                  {labelExtractor(item)}
                </Text>
                {isActive && <Icon name="Checkmark" color={colors.positive} />}
              </Flex>
            )}
          </Flex>
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [labelExtractor, renderItem, valueExtractor],
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
        <SelectLabel
          {...{ disabled, label, labelExtraNode, required, size, offset: labelOffset }}
        />

        <ConfigProvider theme={CustomizedAntSelectConfig}>
          <Flex align="center">
            {addonBefore}
            <AntSelect<any>
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
              {...rest}
              showSearch={showSearch}
              style={style}
              variant="borderless"
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
                suffixIcon ?? (
                  <SelectSuffix {...{ isHovered, loading, disabled, isTabFocused, error }} />
                )
              }
              labelInValue
              popupClassName={twMerge('p-0 small-custom-scrollbar z-[1000]', popupClassName)}
              value={_value ? { value: _value, label: _label } : undefined}
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
              onChange={_onChange}
              optionLabelProp="valueRender"
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

                    <Flex vertical className="relative overflow-auto scroll-smooth">
                      {menu}
                    </Flex>

                    {footer && (
                      <Flex
                        gap={8}
                        flex={1}
                        align="center"
                        className="border-t border-light-7 px-4 py-2"
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
                          const isActive = !!_value && _value === valueExtractor(item);
                          return _renderItem({ index, isActive, item });
                        })}
                      </InfiniteLoader>
                    </Flex>
                    {footer && (
                      <Flex
                        gap={8}
                        flex={1}
                        align="center"
                        className="border-t border-light-7 px-4 py-2"
                      >
                        {footer}
                      </Flex>
                    )}
                  </Flex>
                );
              }}
              filterOption={
                isLocaleSearch
                  ? (input, option) => {
                      if (!input || !option) return true;

                      // TODO: check side effects (hesam)
                      // const label = labelExtractor(option as T);
                      const label = option.label;
                      return (
                        typeof label === 'string' &&
                        label.toLowerCase().includes(input.toLowerCase())
                      );
                    }
                  : false
              }
            >
              {options?.map((item, index) => {
                const isActive = !!_value && _value === valueExtractor(item);
                return (
                  <Option
                    key={valueExtractor(item)}
                    label={labelExtractor(item)}
                    value={valueExtractor(item)}
                    valueRender={
                      renderSelectedItem ? (
                        renderSelectedItem(item)
                      ) : (
                        <Text
                          color={colors.primary_dark_1}
                          lang={lang || (i18n.language as Language)}
                        >
                          {labelExtractor(item)}
                        </Text>
                      )
                    }
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

        {error?.message && !hideErrorMessage && <InputErrorMessage message={error?.message} />}
      </Flex>
    );
  },
) as <T extends Record<string, any> = DefaultSelectOption>(
  props: SelectProps<T, 'single'> & { ref?: React.ForwardedRef<HTMLUListElement> },
) => ReactElement | null;
