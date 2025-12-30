import {
  InputDatePicker as Picker,
  InputDatePickerProps as Props,
} from 'jalaali-react-date-picker';
import moment, { Moment } from 'moment-jalaali';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { InputFieldError, colors,  } from '@configs';

import { Flex, Icon, InputErrorMessage, Text, Tooltip } from '../..';
import { getErrorMessage, Render } from '../../../utilities';
import { datePickerColors } from '@constants';

export interface InputDatePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
  wrapperClassName?: string;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  label?: string | React.ReactNode;
  required?: boolean;
  helperText?: string;
  onChangeISO?: (date: string | undefined) => void;
  valueISO?: string;
  hideErrorMessage?: boolean;
  placeholder?: string;
}

export const InputDatePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  onChange: onChangeProp,
  onChangeISO,
  value: valueProp,
  valueISO,
  locale,
  placeholder,
  wrapperStyle,
  hideErrorMessage = false,
  ...props
}: InputDatePickerProps) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    if (valueISO) {
      return moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);

  const onChange: InputDatePickerProps['onChange'] = useCallback(
    (date: Moment | undefined | null, dateString: string) => {
      const isoString = date ? date.toISOString() : '';
      onChangeProp?.(date, dateString);
      onChangeISO?.(isoString);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const language = locale || i18n.language;

  return (
    <Flex vertical className={`w-full ${!hideErrorMessage && 'inputErrorMessageContainer'}`}>
      <label htmlFor="language-textarea" className="flex flex-row items-center gap-1">
        <Render when={helperText}>
          <Tooltip variant="default" title={helperText} arrow={{ pointAtCenter: true }}>
            <Icon name="Help_header" color={colors.primary_light_3} size={15} />
          </Tooltip>
        </Render>
        {typeof label === 'string' ? (
          <Text className="mb-[3px]" color={colors.primary}>
            {label}
          </Text>
        ) : (
          label
        )}
        <Render when={required}>
          <Icon name="Asterisk" size={6} color={colors.negative} className="mb-2" />
        </Render>
      </label>
      <Picker
        open={open}
        onOpenChange={setOpen}
        format={language === 'fa' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'}
        locale={language === 'fa' ? 'fa' : 'en'}
        pickerProps={{
          style: { fontFamily: locale === 'en' ? 'RobotoLight' : 'YekanBakhFaRegular' },
        }}
        customColors={datePickerColors}
        style={{ fontFamily: 'YekanBakhFaRegular', fontSize: 16 }}
        inputMode="numeric"
        className="placeholder:text-primary-light-3"
        wrapperStyle={{
          fontFamily: 'YekanBakhFaRegular',
          borderColor: error?.message ? colors.negative : colors.primary_light_3,
          ...wrapperStyle,
        }}
        onChange={onChange}
        value={value}
        // @ts-ignore
        placeholder={placeholder}
        closeOnChange={true}
        {...props}
      />
      {!hideErrorMessage && error?.message && (
        <InputErrorMessage message={getErrorMessage(error)} />
      )}
    </Flex>
  );
};
