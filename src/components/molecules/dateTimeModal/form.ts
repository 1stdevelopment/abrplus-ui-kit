import { Moment } from 'moment';
import { createFormContext } from 'react-hook-form-context';

import { InputTimePickerProps } from '..';

interface DateTimeModalFormProps {
  date?: Moment;
  time?: InputTimePickerProps['value'];
}

export const DateTimeModalForm = createFormContext<DateTimeModalFormProps>({
  date: undefined,
  time: undefined,
});
