import { Meta, StoryObj } from '@storybook/react';
import { ActionButtonProps } from './action';
import { IconButtonProps } from './icon';
import { ButtonProps } from './shared';
/**
 * Default export for Storybook
 */
declare const _default: Meta<ButtonProps>;
export default _default;
type Story = StoryObj<ButtonProps>;
type StoryIcon = StoryObj<IconButtonProps>;
export declare const PrimaryStory: Story;
export declare const TertiaryStory: Story;
export declare const SecondaryStory: Story;
export declare const NegativeStory: Story;
export declare const SecondaryQuiet: Story;
export declare const ActionStory: StoryObj<ActionButtonProps>;
export declare const IconStory: StoryIcon;
