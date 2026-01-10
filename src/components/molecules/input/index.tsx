import './index.css';

import { batch } from '@utilities';
import { InputRef } from 'antd';

import { InputTextArea, InputTextAreaProps } from './TextArea';
import { InputDefault, InputDefaultProps } from './default';
import { EmojiPicker, EmojiPickerInputProps } from './emojiPicker';
import { InputGhost, InputGhostProps } from './ghost';
import { InputNumber, InputNumberProps } from './number';
import { InputSearch, InputSearchProps } from './search';
import { InputTag, InputTagProps } from './tag';

const Input = batch({
  Default: InputDefault,
  Ghost: InputGhost,
  Number: InputNumber,
  Search: InputSearch,
  TextArea: InputTextArea,
  EmojiPicker: EmojiPicker,
  Tag: InputTag,
});

export { Input };
export type {
  EmojiPickerInputProps,
  InputDefaultProps,
  InputGhostProps,
  InputNumberProps,
  InputRef,
  InputSearchProps,
  InputTagProps,
  InputTextAreaProps,
};
