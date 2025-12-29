import { batch } from '@configs';

import { StatusBox } from './status';
import { TitleBox } from './title';

const Box = batch({ Title: TitleBox, Status: StatusBox });

export { Box };
