import { Meta, StoryFn } from '@storybook/react';
import { Tooltip } from '.';
import { TooltipProps } from '../../antOverrides/tooltip';
import { Button } from '../../molecules/button';
import { IconsNames } from '../icon';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'The variant of the tooltip which affects its appearance. Options include informative, success, error, and default.',
      options: ['informative', 'success', 'error', 'default'],
    },
    iconName: {
      control: 'text',
      description: 'Name of the icon to be displayed inside the tooltip, if any.',
    },
    title: {
      control: 'text',
      description: 'The text to be displayed as the tooltip content.',
    },
    children: {
      control: 'text',
      description: 'The element or text that the tooltip should be attached to.',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Tooltip>;

const Template: StoryFn<TooltipProps & { iconName?: IconsNames }> = (args) => (
  <Tooltip {...args}>
    <Button.Primary>Hover over me</Button.Primary>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  title: 'This is a tooltip',
};
/**
 * SuccessVariant
 */
export const WithSuccessVariant = Template.bind({});
WithSuccessVariant.args = {
  variant: 'success',
  title: 'Success Tooltip',
};
/**
 * ErrorVariant
 */
export const WithErrorVariant = Template.bind({});
WithErrorVariant.args = {
  variant: 'error',
  title: 'Error Tooltip',
};
/**
 * InformativeVariant
 */
export const WithInformativeVariant = Template.bind({});
WithInformativeVariant.args = {
  variant: 'informative',
  title: 'Informative Tooltip',
  iconName: 'Info_fill',
};
