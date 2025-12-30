import {
  InputRangePicker as Picker,
  InputRangePickerProps as Props,
} from 'jalaali-react-date-picker';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { InputFieldError, colors } from '@configs';

import { Flex, Icon, InputErrorMessage, Text, Tooltip } from '../..';
import { Render } from '../../../utilities';
import { datePickerColors } from '@constants';

export interface InputRangePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
  wrapperClassName?: string;
  inputWrapperClassName?: string;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  label?: string | React.ReactNode;
  required?: boolean;
  helperText?: string;
  hideErrorMessage?: boolean;
  height?: number | string;
}

export const InputRangePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  inputWrapperClassName,
  value,
  locale,
  wrapperStyle,
  hideErrorMessage = false,
  height,
  ...props
}: InputRangePickerProps) => {
  const { i18n } = useTranslation();
  const pickerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  const language = locale || i18n.language;
  useEffect(() => {
    if (value?.length === 2 && pickerRef.current) {
      setOpen(false);
    }
  }, [value]);
  return (
    <Flex
      vertical
      className={twMerge(
        'w-full',
        !hideErrorMessage && 'inputErrorMessageContainer',
        wrapperClassName,
      )}
    >
      <label htmlFor="language-textarea" className="flex flex-row items-center gap-1">
        <Render when={helperText}>
          <Tooltip variant="default" title={helperText} arrow={{ pointAtCenter: true }}>
            <Icon name="Help_header" color={colors.primary_light_3} size={15} />
          </Tooltip>
        </Render>
        {typeof label === 'string' ? (
          <Text color={colors.primary} className="mb-[3px]">
            {label}
          </Text>
        ) : (
          label
        )}
        <Render when={required}>
          <Icon name="Asterisk" size={6} color={colors.negative} className="mb-2" />
        </Render>
      </label>
      <Flex ref={pickerRef} className={twMerge('h-full w-full', inputWrapperClassName)}>
        <Picker
          open={open}
          onOpenChange={setOpen}
          format={language === 'fa' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'}
          locale={language === 'fa' ? 'fa' : 'en'}
          rangeProps={{
            style: { fontFamily: locale === 'en' ? 'RobotoLight' : 'YekanBakhFaRegular' },
          }}
          customColors={datePickerColors}
          inputMode="numeric"
          wrapperStyle={{
            fontFamily: 'YekanBakhFaRegular',
            borderColor: error?.message ? colors.negative : colors.primary_light_3,
            minHeight: 40,
            ...wrapperStyle,
          }}
          value={isValueValid ? value : null}
          {...props}
        />
      </Flex>
      {!hideErrorMessage && error?.message && <InputErrorMessage message={error?.message} />}
    </Flex>
  );
};
