import { InputFieldError, colors } from '@configs';
import { Flex, Tag } from 'antd';
import React, { memo, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputErrorMessage } from '../../';
import { Text } from '../../../antOverrides';
import { Icon, Render } from '../../../atoms';
import { InputDefaultProps } from '../default';

export interface InputTagProps extends Omit<InputDefaultProps, 'value' | 'onChange'> {
  value?: string[];
  onChange?: (tags: string[]) => void;
  label?: string | React.ReactNode;
  required?: boolean;
  hideErrorMessage?: boolean;
  wrapperClassName?: string;
  error?: InputFieldError;
}

export const InputTag = memo(
  ({
    value = [],
    onChange,
    placeholder,
    disabled,
    label,
    required,
    hideErrorMessage,
    error,
    wrapperClassName,
  }: InputTagProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const addTag = useCallback(() => {
      const newTag = inputRef.current?.value.trim();
      if (!newTag || value.includes(newTag)) return;

      onChange?.([...value, newTag]);

      inputRef.current && (inputRef.current.value = '');
    }, [value, onChange]);

    const removeTag = useCallback(
      (removedTag: string) => {
        onChange?.(value.filter((tag) => tag !== removedTag));
      },
      [value, onChange],
    );

    const onKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addTag();
        }
      },
      [addTag],
    );

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      inputRef.current && (inputRef.current.value = e.target.value);
    }, []);

    return (
      <Flex
        vertical
        className={twMerge(
          'w-full',
          !hideErrorMessage && 'inputErrorMessageContainer',
          wrapperClassName,
          '[&_.ant-input-clear-icon]:!flex',
        )}
      >
        {label && (
          <div className="flex h-[24px] items-center gap-1">
            {typeof label === 'string' ? (
              <>
                <Text
                  // lang={lang}
                  size={14}
                  color={colors.primary}
                  weight="normal"
                >
                  {label}
                </Text>
              </>
            ) : (
              label
            )}
            <Render when={required}>
              <Icon name="Asterisk" size={6} color={colors.negative} className="mb-2" />
            </Render>
          </div>
        )}

        <Flex
          wrap
          className={twMerge(
            'min-h-10 w-full gap-1 rounded border border-solid border-primary-light-3 bg-white-ff p-2 text-[14px] font-medium hover:border-primary-light-2',
            error && 'border-negative',
          )}
        >
          <>
            {value.map((tag) => (
              <Tag
                key={tag}
                closable={!disabled}
                onClose={() => removeTag(tag)}
                style={{ marginInlineEnd: 4 }}
              >
                {tag}
              </Tag>
            ))}
          </>

          <input
            ref={inputRef}
            onChange={onChangeInput}
            placeholder={value.length === 0 ? placeholder : undefined}
            className={twMerge(
              'placeholder:text-primary_light_3 flex-1 border-none font-yekan-normal text-primary-dark-1 outline-none',
            )}
            onKeyDown={onKeyDown}
          />
        </Flex>

        {!hideErrorMessage && error?.message && <InputErrorMessage message={error?.message} />}
      </Flex>
    );
  },
);
