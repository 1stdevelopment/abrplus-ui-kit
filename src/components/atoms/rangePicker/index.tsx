import { RangePicker as Picker, RangePickerProps as Props } from 'jalaali-react-date-picker';
import { useTranslation } from 'react-i18next';

import { InputFieldError, colors } from '@configs';

import { datePickerColors } from 'src/constants';
import { Flex, Icon, InputErrorMessage, Text, Tooltip } from '../..';
import { Render } from '../render';

export interface RangePickerProps extends Omit<Props, 'wrapperClassName' | 'error'> {
  wrapperClassName?: string;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  label?: string | React.ReactNode;
  required?: boolean;
  helperText?: string;
  hideErrorMessage?: boolean;
}

export const RangePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  value,
  hideErrorMessage = false,
  ...props
}: RangePickerProps) => {
  const { i18n } = useTranslation();

  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;

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
        locale={i18n.language === 'fa' ? 'fa' : 'en'}
        customColors={datePickerColors}
        value={isValueValid ? value : null}
        {...props}
      />
      {!hideErrorMessage && error?.message && <InputErrorMessage message={error?.message} />}
    </Flex>
  );
};
