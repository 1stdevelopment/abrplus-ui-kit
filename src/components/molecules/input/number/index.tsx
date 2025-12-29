import { Input as AntInput, Divider, InputProps, InputRef } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { forwardRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import starkString from 'starkstring';
import { twMerge } from 'tailwind-merge';

import { InputFieldError, colors } from '@configs';

import { Flex, Icon, InputErrorMessage, Text } from '../../..';
import { Render } from '../../../../utilities';

export interface InputNumberProps extends Omit<InputProps, 'onChange' | 'value' | 'height'> {
  helperText?: string;
  label?: React.ReactNode;
  background?: string;
  lang?: 'fa' | 'en';
  onlyNumber?: boolean;
  isCurrency?: boolean;
  inputSize?: SizeType;
  placeHolder?: string | undefined;
  wrapperClassName?: string;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  step?: number | undefined;
  value?: number | undefined;
  height?: number;
  disableNegative?: boolean;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  hideErrorMessage?: boolean;
}
const InputNumber = forwardRef<InputRef, InputNumberProps>((props, ref) => {
  const {
    placeHolder,
    background,
    inputSize = 'large',
    error,
    lang,
    helperText,
    disabled,
    isCurrency,
    onChange,
    value,
    status,
    prefix,
    suffix,
    required,
    label,
    height = 38,
    step = 1,
    className,
    wrapperClassName,
    max,
    min,
    hideErrorMessage = false,
    disableNegative = false,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);

  const { i18n } = useTranslation();

  const _onChangeText = useCallback(
    (e: number | string) => {
      const star = starkString(e);

      if (isCurrency) {
        star.parseNumber();
      }

      const value = Number(e);
      if (!isNaN(value)) {
        const minimumIsValid = min !== undefined && Number.isInteger(min);
        const maximumIsValid = max !== undefined && Number.isInteger(max);

        if (maximumIsValid && minimumIsValid && max < min) {
          throw new Error('Maximum should be bigger than Minimum');
        }

        if (
          (disableNegative && value < 0) ||
          (minimumIsValid && min == 0 && value < 0) ||
          (maximumIsValid && max == 0 && value > 0)
        ) {
          return;
        }

        if (minimumIsValid && value < Number(min)) {
          return;
        }

        if (maximumIsValid && value > Number(max)) {
          return;
        }

        onChange?.(star.toStringNumber({ negative: true }) as unknown as number);
      } else {
        onChange?.(star.toStringNumber({ negative: true }) as unknown as number);
      }
    },
    [isCurrency, onChange, min, max, disableNegative],
  );

  const handleArrowBtns = useCallback(
    (sp: number) => {
      const DEFAULT_VALUE = 0;

      const currentNumber = value === undefined ? DEFAULT_VALUE : value;
      const [integerPart, decimalPart = ''] = currentNumber.toString().split('.');

      const updatedDecimalPart = (Number(integerPart) - sp).toString();

      const combinedNumberString = decimalPart
        ? `${updatedDecimalPart}.${decimalPart}`
        : updatedDecimalPart;

      const updatedNumber = Number(combinedNumberString).toFixed(decimalPart.length);

      _onChangeText(updatedNumber);
    },
    [value, _onChangeText],
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
              <Text size={inputSize === 'large' ? 14 : 12} color={colors.primary} weight="normal">
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
        value={isCurrency && value ? starkString(value).toCurrency().toString() : value || ''}
        ref={ref}
        className={twMerge(
          (lang || i18n.language) === 'fa'
            ? 'font-yekan-normal direction-rtl '
            : 'font-roboto-normal direction-ltr',
          'placeholder:text-primary text-primary-dark-1 w-full select-none py-0  pe-0 ps-2 text-[14px] font-medium outline-none',
          className,
        )}
        classNames={{
          input: 'py-2 !placeholder:text-right',
        }}
        styles={{ input: { unicodeBidi: 'plaintext' } }}
        placeholder={placeHolder}
        size={inputSize}
        style={{ background, height, outline: 'none', unicodeBidi: 'plaintext' }}
        onChange={(e) => _onChangeText(e.target.value)}
        status={error?.message ? 'error' : status}
        disabled={disabled}
        suffix={
          <div className={twMerge('flex h-full')}>
            <Flex
              vertical
              flex={1}
              className=" border-primary-light-3 w-full border-s border-solid p-0"
            >
              <Flex
                flex={1}
                className="bg-light-1 w-10 cursor-pointer items-center  justify-center  rounded	border-solid "
                onClick={() => handleArrowBtns(-step)}
              >
                <Icon name="Chevron_Up" size="small" color={colors.primary_dark_2} />
              </Flex>
              <Divider className="bg-primary-light-3 m-0 p-0" />
              <Flex
                flex={1}
                onClick={() => handleArrowBtns(+step)}
                className="bg-light-1 border-1 w-10 cursor-pointer items-center justify-center  rounded	border-solid"
              >
                <Icon name="Chevron_Down" size="small" color={colors.primary_dark_2} />
              </Flex>
            </Flex>
          </div>
        }
        prefix={prefix}
        step={step}
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
});

export { InputNumber };
