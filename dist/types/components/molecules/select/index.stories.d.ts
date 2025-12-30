import { Meta, StoryObj } from '@storybook/react';
import { SelectProps } from './index';
type OptionType = {
    value: string;
    label: string;
};
/**
 * Default export for Storybook
 */
declare const _default: Meta<SelectProps<OptionType, "single">>;
export default _default;
type SingleStory = StoryObj<SelectProps<OptionType, 'single'>>;
type MultipleStory = StoryObj<SelectProps<OptionType, 'multiple'>>;
/**
 * Primary export for Storybook
 */
export declare const Single: SingleStory;
export declare const Multiple: MultipleStory;
export declare const WithHeaderAndFooter: SingleStory;
export declare const WithInputError: SingleStory;
/**
 * ##render node before or after select
 */
export declare const WithAddonBeforeAndAfter: SingleStory;
export declare const WithLoading: SingleStory;
