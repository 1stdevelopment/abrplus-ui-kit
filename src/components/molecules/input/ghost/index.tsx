import { Tooltip } from 'antd';
import {
  ChangeEvent,
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import starkString from 'starkstring';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex, Icon, Text } from '../../..';

export interface InputGhostProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'prefix' | 'onChange'
  > {
  label?: string | ReactNode;
  wrapperClassName?: string;
  inputSize?: 'medium' | 'small';
  error?: { message?: string };
  disabled?: boolean;
  forwardRef?: LegacyRef<HTMLInputElement> | undefined;
  suffix?: ReactNode;
  lang?: 'fa' | 'en';
  prefix?: ReactNode;
  isCurrency?: boolean;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeText?: (event: string) => void;
  helperText?: string;
  onlyNumber?: boolean;
  value?: string;
  placeHolder?: string;
}

const InputGhost$ = (props: InputGhostProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    label,
    inputSize = 'medium',
    error,
    readOnly,
    value,
    height = 38,
    isCurrency,
    required = false,
    wrapperClassName,
    prefix,
    placeHolder,
    suffix,
    onChange,
    onlyNumber,
    style,
    onChangeText,
    disabled,
    lang,
    helperText,
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

  //   classes
  const InputClassName = twMerge(
    `w-full flex items-center rounded-[4px] bg-white-ff bg-none outline-none transition-all border-none duration-200`,
    disabled ? 'bg-light-6 text-primary-light-2' : 'bg-none text-primary-light-2',
  );

  return (
    <Flex
      className={`flex w-full flex-col justify-start gap-[2px] text-[14px] ${wrapperClassName} `}
    >
      {label && (
        <div className="flex h-[24px] items-center gap-1">
          {typeof label === 'string' ? (
            <Text size={inputSize === 'medium' ? 14 : 12} color={colors.primary} weight="medium">
              {label}
            </Text>
          ) : (
            label
          )}
          {required && <Icon name="Asterisk" size={8} color={colors.primary_light_3} />}
        </div>
      )}

      <div
        className={`${InputClassName} focus-within:border-primary `}
        style={{
          border: `${error?.message && !disabled ? `1px solid ${colors.negative}` : ''}`,
        }}
      >
        {prefix && (
          <div
            className={twMerge(
              'absolute flex items-center justify-center',
              inputSize === 'medium' ? 'ps-[12px]' : 'ps-[8px]',
            )}
          >
            {prefix}
          </div>
        )}
        <input
          ref={ref}
          placeholder={placeHolder}
          disabled={disabled}
          {...rest}
          style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            ...style,
          }}
          onChange={_onChangeText}
          value={value}
          className={`text-primary disabled:placeholder:text-primary-light-2 border-none bg-transparent placeholder:text-opacity-50 ${
            prefix ? 'pe-3 ps-8' : 'px-3'
          } 
            ${
              inputSize === 'medium'
                ? 'px-[12px] text-[16px] placeholder:text-[16px] '
                : 'px-[8px] text-[14px] placeholder:text-[14px]'
            } 
            ${
              (lang || i18n.language) === 'fa'
                ? 'font-yekan-normal direction-rtl'
                : 'font-roboto-normal direction-ltr'
            } placeholder:text-primary  text-primary-dark-1 w-full  border-none text-[14px] font-medium outline-none ${
              inputSize === 'medium' ? 'h-[38px]  text-[16px]' : 'h-[32px] text-[14px]'
            }`}
          readOnly={readOnly}
        />

        {(suffix || error?.message) && (
          <div
            className={twMerge(
              'flex h-full justify-center',
              suffix ? (inputSize === 'medium' ? 'pe-3' : 'pe-2') : null,
            )}
          >
            {(suffix && (
              <div className={` flex h-full items-center justify-center`}>{suffix}</div>
            )) ||
              (error?.message && helperText && !suffix && !disabled && (
                <div
                  id="my-anchor-element"
                  className={` flex h-full cursor-pointer items-center justify-center`}
                >
                  <Tooltip color={colors.negative} title={error.message} arrow={true}>
                    <Icon name="alert-line" color={colors.negative} />
                  </Tooltip>
                </div>
              ))}
          </div>
        )}
      </div>
      {!helperText && error && (
        <Text className="min-h-[24px]" size={12} color={colors.negative_light_1}>
          {error?.message}
        </Text>
      )}
      {helperText && <Text color={colors.primary}>{helperText}</Text>}
    </Flex>
  );
};

const InputGhost = forwardRef(InputGhost$) as typeof InputGhost$;

export { InputGhost };
