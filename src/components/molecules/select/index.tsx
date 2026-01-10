import './index.css';

import { batch } from '@utilities';

import { MultipleSelect } from './multiple';
import { SingleSelect } from './single';
import { PlusTreeSelect } from './treeSelect';
import {
  DefaultSelectOption,
  PlusTreeSelectProps,
  SelectInfinite,
  SelectProps,
  SelectRawValue,
} from './types';

const Select = batch({ Single: SingleSelect, Multiple: MultipleSelect, Tree: PlusTreeSelect });

export * from './components';
export { Select };
export type {
  DefaultSelectOption,
  PlusTreeSelectProps,
  SelectInfinite,
  SelectProps,
  SelectRawValue,
};
