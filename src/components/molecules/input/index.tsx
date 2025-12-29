import { InputRef } from 'antd';

import { batch } from '@configs';

import { InputTextArea } from './TextArea';
import { InputDefault } from './default';
import { EmojiPicker } from './emojiPicker';
import { InputGhost } from './ghost';
import { InputNumber } from './number';
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
export type { InputRef, InputSearchProps };
