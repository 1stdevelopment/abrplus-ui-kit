import { Input as AntInput, InputRef } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TextAreaProps } from 'antd/es/input';
import { ChangeEvent, ForwardedRef, forwardRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import starkString from 'starkstring';
import { twMerge } from 'tailwind-merge';

import { InputFieldError, colors } from '@configs';

import { Flex, Icon, InputErrorMessage, Text } from '../../..';
import { Render } from '../../../../utilities';

export interface InputTextAreaProps extends TextAreaProps {
  helperText?: string;
  label?: React.ReactNode;
  background?: string;
  lang?: 'fa' | 'en';
  onlyNumber?: boolean;
  isCurrency?: boolean;
  onChangeText?: (event: string) => void;
  inputSize?: SizeType;
  placeholder?: string | undefined;
  wrapperClassName?: string;
  rows?: number;
  height?: number;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  hideErrorMessage?: boolean;
}
const InputTextArea$ = (props: InputTextAreaProps, ref: ForwardedRef<InputRef>) => {
  const {
    placeholder,
    background = '#fff',
    inputSize = 'large',
    error,
    lang,
    helperText,
    disabled,
    onlyNumber,
    isCurrency,
    onChangeText,
    onChange,
    status,
    prefix,
    required,
    label,
    readOnly,
    className,
    classNames,
    wrapperClassName,
    hideErrorMessage = false,
    height,
    rows,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);
  const { i18n } = useTranslation();

  const _onChangeText = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const star = starkString(e.target.value);

      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber],
  );

  return (
    <Flex
      vertical
      className={twMerge(
        'w-full',
        !hideErrorMessage && 'inputErrorMessageContainer',
        wrapperClassName,
      )}
    >
      {label && (
        <div className="flex h-[24px] items-center gap-1">
          {typeof label === 'string' ? (
            <>
              <Text
                lang={lang}
                size={inputSize === 'large' ? 14 : 12}
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

      <AntInput.TextArea
        autoSize
        ref={ref}
        className={twMerge(
          'text-primary-dark-1  w-full  text-[14px] font-medium  outline-none',
          className,
        )}
        classNames={{
          textarea: twMerge(
            (lang || i18n.language) === 'fa'
              ? 'font-yekan-normal direction-rtl'
              : 'font-roboto-normal direction-ltr',
            'placeholder:text-primary_light_3',
            readOnly && 'cursor-default',
          ),
          ...classNames,
        }}
        placeholder={placeholder}
        size={inputSize}
        rows={rows}
        readOnly={readOnly}
        style={{ background, height, outline: 'none' }}
        onChange={_onChangeText}
        status={error?.message ? 'error' : status}
        disabled={disabled}
        {...rest}
      />

      {!hideErrorMessage && error?.message && !helperText && (
        <InputErrorMessage message={error?.message} />
      )}
      {helperText && (
        <Text color={colors.primary} className={'helperText'}>
          {helperText}
        </Text>
      )}
    </Flex>
  );
};

const InputTextArea = forwardRef(InputTextArea$);

export { InputTextArea };
