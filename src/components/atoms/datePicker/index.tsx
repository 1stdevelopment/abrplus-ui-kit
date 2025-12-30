import { DatePicker as Picker, DatePickerProps as Props } from 'jalaali-react-date-picker';
import moment, { Moment } from 'moment-jalaali';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InputFieldError, colors } from '@configs';

import { datePickerColors } from 'src/constants';
import { Flex } from '../../antOverrides/flex';
import { Text } from '../../antOverrides/text';
import { Icon } from '../../atoms/icon';
import { Tooltip } from '../../atoms/tooltip';
import { InputErrorMessage } from '../../molecules/inputErrorMessage';
import { Render } from '../render';

export interface DatePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
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
}

export const DatePicker = ({
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
  hideErrorMessage = false,
  ...props
}: DatePickerProps) => {
  const { i18n } = useTranslation();

  const value = useMemo(() => {
    if (valueISO) {
      return moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);

  const onChange: DatePickerProps['onChange'] = useCallback(
    (date: Moment | undefined | null, dateString: string) => {
      onChangeProp?.(date, dateString);
      onChangeISO?.(date?.toISOString());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Flex vertical className={`w-full ${!hideErrorMessage && 'inputErrorMessageContainer'}`}>
      <label htmlFor="language-textarea" className="flex flex-row items-center gap-1">
        <Render when={helperText}>
          <Tooltip variant="default" title={helperText} arrow={{ pointAtCenter: true }}>
            <Icon name="Help_header" color={colors.primary_light_3} size={15} />
          </Tooltip>
        </Render>
        {typeof label === 'string' ? <Text color={colors.primary}>{label}</Text> : label}
        <Render when={required}>
          <Icon name="Asterisk" size={6} color={colors.negative} className="mb-2" />
        </Render>
      </label>
      <Picker
        format={i18n.language === 'fa' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'}
        locale={locale || i18n.language === 'fa' ? 'fa' : 'en'}
        customColors={datePickerColors}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!hideErrorMessage && error?.message && <InputErrorMessage message={error?.message} />}
    </Flex>
  );
};
