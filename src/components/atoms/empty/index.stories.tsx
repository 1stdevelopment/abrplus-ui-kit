// Empty.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Empty, EmptyProps } from '.';

const meta: Meta<EmptyProps> = {
  title: 'Atoms/Empty', // Title for the Storybook entry
  component: Empty,
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **Empty** component is a flexible container that adapts to its parent’s size and layout requirements. It can be used as a placeholder or a flexible space in layouts where no content is available or where additional components may be added later. This component supports flexbox properties to control its sizing and alignment within its container.',
      },
    },
  },
  argTypes: {
    flex: {
      control: 'number',
      description:
        'Specifies the flex grow/shrink value for the component. This determines how the Empty component will grow or shrink relative to other flex items within the same container.',
    },
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
      description:
        'Defines the direction of the flex layout. Use "horizontal" to align items in a row and "vertical" to align items in a column.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<EmptyProps>;

// Default Story for Empty component
export const Default: Story = {
  args: {
    flex: 1,
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the Empty component with a flex value of 1 and horizontal direction. This configuration shows the component as a flexible container that expands or contracts based on its container’s layout in a horizontal direction.',
      },
    },
  },
};

// Vertical Flex Story
export const VerticalFlex: Story = {
  args: {
    flex: 2,
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **VerticalFlex** story showcases the Empty component with a flex value of 2 and vertical direction. This configuration highlights how the component adjusts its size and alignment in a vertical layout, making it useful for stacked or column-based layouts.',
      },
    },
  },
};

// Horizontal Flex Story
export const HorizontalFlex: Story = {
  args: {
    flex: 3,
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **HorizontalFlex** story features the Empty component with a flex value of 3 and horizontal direction. This example demonstrates how the component stretches or contracts in a row-based layout, ideal for creating flexible and responsive horizontal arrangements.',
      },
    },
  },
};
