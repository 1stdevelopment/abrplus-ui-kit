import type { Meta, StoryObj } from '@storybook/react';

import { Separator, SeparatorProps } from '.';

const meta: Meta<SeparatorProps> = {
  title: 'Atoms/Separator',
  component: Separator,
  decorators: [],
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    direction: {
      control: 'select',
      description:
        'Determines the orientation of the separator. Choose between "vertical" to display the separator vertically and "horizontal" to display it horizontally.',
      options: ['vertical', 'horizontal'],
    },
    className: {
      control: 'text',
      description:
        'Custom CSS class to apply additional styles to the component. Useful for applying specific styles or integrating with a CSS framework.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SeparatorProps>;

/**
 * default separator
 */
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    direction: 'vertical',
    className: '!bg-negative',
  },
};
