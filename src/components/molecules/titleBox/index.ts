import { batch } from '@utilities';

import { StatusBox, StatusBoxProps } from './status';
import { TitleBox, TitleBoxProps } from './title';

const Box = batch({ Title: TitleBox, Status: StatusBox });

export { Box };
export type {
    StatusBoxProps,
    TitleBoxProps
}
