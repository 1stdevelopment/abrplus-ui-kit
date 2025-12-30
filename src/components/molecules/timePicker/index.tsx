import {
  ConfigProvider,
  TimePicker as Picker,
  TimePickerProps as PickerProps,
  ThemeConfig,
} from 'antd';
import { twMerge } from 'tailwind-merge';

import { InputFieldError, colors,  } from '@configs';

import { Icon } from '../../atoms';
import { InputErrorMessage } from '../inputErrorMessage';
import { getErrorMessage } from '@utilities';

export interface InputTimePickerProps extends PickerProps {
  error?: InputFieldError;
}

const timePickerTheme: ThemeConfig = {
  components: {
    DatePicker: {
      colorBorder: colors.primary_light_3,
      colorTextPlaceholder: colors.primary_light_3,
    },
  },
};

export const InputTimePicker = ({ className, error, ...rest }: InputTimePickerProps) => {
  return (
    <ConfigProvider theme={timePickerTheme}>
      <>
        <Picker
          size="large"
          suffixIcon={<Icon name="time" color={colors.primary} />}
          className={twMerge(
            'text-primary-dark-1 hover:border-primary-light-2 w-full text-[14px] font-medium !shadow-none outline-none',
            error?.message && 'border-negative',
            className,
          )}
          needConfirm={false}
          showNow={false}
          popupStyle={{ scrollbarWidth: 'thin', scrollbarColor: colors.primary }}
          popupClassName="[&_.ant-picker-content]:flex-row-reverse "
          {...rest}
        />

        <InputErrorMessage message={getErrorMessage(error)} />
      </>
    </ConfigProvider>
  );
};
