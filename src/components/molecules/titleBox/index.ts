import { batch } from '@utilities';

import { StatusBox } from './status';
import { TitleBox } from './title';

const Box = batch({ Title: TitleBox, Status: StatusBox });

export { Box };
