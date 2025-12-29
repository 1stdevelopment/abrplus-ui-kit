import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardProps } from '.';

const meta: Meta<CardProps> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Card** component serves as a flexible container to display content and actions related to a single subject. It can be used to display various types of content, such as text, images, and buttons, providing a clean and consistent look across your application. The Card component is highly customizable, allowing you to adjust its content and appearance to fit your needs.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Content inside the Card component. This can be any valid React node, such as text, images, or other components.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  name: 'DefaultCard',
  args: {
    children: <div>Card Text</div>,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story shows the Card component with simple text content. This example demonstrates how to use the Card component to display basic content, making it easy to use in a variety of layouts.',
      },
    },
  },
};

export const CustomClass: Story = {
  name: 'CustomClass',
  args: {
    children: <div>Card Text</div>,
    className: 'bg-tertiary-dark-1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story shows the Card component with simple text content. This example demonstrates how to use the Card component to display basic content, making it easy to use in a variety of layouts.',
      },
    },
  },
};
