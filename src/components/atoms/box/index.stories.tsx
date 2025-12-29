import type { Meta, StoryObj } from '@storybook/react';

import { BoxProps, Clickable } from '.';

/* -------------------------------------------------------------------------- */
const meta: Meta<BoxProps> = {
  title: 'Atoms/Box',
  component: Clickable,
  decorators: [],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Clickable** component is a versatile container that can be clicked, making it suitable for interactive elements like buttons, cards, or any other clickable area. It accepts children elements, making it flexible to use with various content.',
      },
    },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Function to call when the Clickable component is clicked.',
    },
    children: {
      control: 'text',
      description:
        'Content inside the Clickable component. This could be text, images, or any JSX element.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BoxProps>;

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    onClick: undefined,
    children: 'Default Child Content',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the basic usage of the Clickable component with default content and no click handler.',
      },
    },
  },
};

export const ClickableBox: Story = {
  name: 'Clickable',
  args: {
    onClick: () => alert('Box clicked!'),
    children: 'Clickable Box Content',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **ClickableBox** story showcases the Clickable component with a custom click handler that displays an alert when clicked.',
      },
    },
  },
};
