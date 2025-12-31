import { InputRef } from 'antd';

import { batch } from '@utilities';
import { InputTextArea, InputTextAreaProps } from './TextArea';
import { InputDefault, InputDefaultProps } from './default';
import { EmojiPicker, EmojiPickerInputProps } from './emojiPicker';
import { InputGhost, InputGhostProps } from './ghost';
import { InputNumber, InputNumberProps } from './number';
import { InputSearch, InputSearchProps } from './search';

const Input = batch({
  Default: InputDefault,
  Ghost: InputGhost,
  Number: InputNumber,
  Search: InputSearch,
  TextArea: InputTextArea,
  EmojiPicker: EmojiPicker,
});

export { Input };
export type {
  InputRef,
  InputSearchProps,
  InputTextAreaProps,
  InputDefaultProps,
  EmojiPickerInputProps,
  InputGhostProps,
  InputNumberProps
};
