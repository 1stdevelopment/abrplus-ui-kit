
import { batch } from '@utilities';
import { MultipleSelect } from './multiple';
import { SingleSelect } from './single';
import { PlusTreeSelect } from './treeSelect';
import { DefaultSelectOption, SelectInfinite, SelectProps, SelectRawValue } from './types';

const Select = batch({ Single: SingleSelect, Multiple: MultipleSelect, Tree: PlusTreeSelect });

export { Select };
export type { DefaultSelectOption, SelectInfinite, SelectProps, SelectRawValue };
