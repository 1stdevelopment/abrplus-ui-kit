import { Input as AntInput, InputProps, InputRef } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ChangeEvent, ForwardedRef, forwardRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import starkString from 'starkstring';
import { twMerge } from 'tailwind-merge';

import { InputFieldError, colors } from '@configs';

import { Render } from '../../../../utilities/render';
import { Flex } from '../../../antOverrides/flex';
import { Text } from '../../../antOverrides/text';
import { Icon } from '../../../atoms/icon';
import { Tooltip } from '../../../atoms/tooltip';
import { InputErrorMessage } from '../../inputErrorMessage';

export interface InputDefaultProps extends Omit<InputProps, 'dir'> {
  helperText?: string;
  label?: React.ReactNode;
  background?: string;
  lang?: 'fa' | 'en';
  direction?: 'ltr' | 'rtl';
  onlyNumber?: boolean;
  isCurrency?: boolean;
  onChangeText?: (event: string) => void;
  inputSize?: SizeType;
  placeholder?: string | undefined;
  wrapperClassName?: string;
  hideErrorMessage?: boolean;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
}
const InputDefault$ = (props: InputDefaultProps, ref: ForwardedRef<InputRef>) => {
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
    suffix,
    required,
    label,
    height = 38,
    readOnly,
    classNames,
    wrapperClassName,
    direction,
    hideErrorMessage = false,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);
  const { i18n } = useTranslation();

  const _onChangeText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
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
        '[&_.ant-input-clear-icon]:!flex',
      )}
    >
      {label && (
        <div className="flex h-[22px] items-center gap-1">
          {typeof label === 'string' ? (
            <>
              <Text
                // lang={lang}
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

      <AntInput
        ref={ref}
        className="text-primary-dark-1 hover:border-primary-light-2 w-full text-[14px] font-medium outline-none"
        classNames={{
          input: twMerge(
            (lang || i18n.language) === 'fa'
              ? 'font-yekan-normal direction-rtl'
              : 'font-roboto-normal direction-ltr',
            'placeholder:text-primary_light_3',
            readOnly && 'cursor-default',
            direction === 'ltr' ? 'direction-ltr' : 'direction-rtl',
          ),

          ...classNames,
        }}
        rootClassName="!rounded"
        placeholder={placeholder}
        size={inputSize}
        readOnly={readOnly}
        style={{ background, height, outline: 'none' }}
        onChange={_onChangeText}
        status={error?.message ? 'error' : status}
        disabled={disabled}
        suffix={
          suffix || error?.message ? (
            <div
              className={twMerge('flex h-full justify-center')}
              onClick={(e) => e.stopPropagation()}
            >
              {(suffix && (
                <div className={`flex h-full items-center justify-center `}> {suffix}</div>
              )) ||
                (error?.message && helperText && !suffix && !disabled && (
                  <div
                    id="my-anchor-element"
                    className={`flex h-full cursor-pointer items-center justify-center `}
                  >
                    <Tooltip
                      variant="error"
                      color={colors.negative}
                      title={error.message}
                      arrow={true}
                    >
                      <Icon name="alert-line" color={colors.negative} />
                    </Tooltip>
                  </div>
                ))}
              {/*  // errormessage && helperText && !suffix && !disabled */}
            </div>
          ) : undefined
        }
        prefix={prefix ? <div onClick={(e) => e.stopPropagation()}>{prefix}</div> : undefined}
        {...rest}
      />

      {!hideErrorMessage && error?.message && !helperText && (
        <InputErrorMessage message={error?.message} />
      )}

      {helperText && <Text color={colors.primary}>{helperText}</Text>}
    </Flex>
  );
};

const InputDefault = forwardRef(InputDefault$);

export { InputDefault };
