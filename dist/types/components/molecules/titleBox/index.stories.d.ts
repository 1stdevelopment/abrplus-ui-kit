import { Meta, StoryObj } from '@storybook/react';
import { StatusBoxProps } from './status';
import { TitleBoxProps } from './title';
declare const _default: Meta<TitleBoxProps & StatusBoxProps>;
export default _default;
type Story = StoryObj<TitleBoxProps & StatusBoxProps>;
/**
 * Status ICON
 */
export declare const Status: Story;
/**
 * Title box
 */
export declare const Title: Story;
