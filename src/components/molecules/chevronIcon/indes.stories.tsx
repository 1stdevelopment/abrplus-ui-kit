// src/components/molecules/ChevronIcon/ChevronIcon.stories.tsx
import { Meta, StoryObj } from '@storybook/react';

import { ChevronIcon, ChevronIconProps } from '.';

// Define metadata for the component
export default {
  title: 'Molecules/ChevronIcon',
  component: ChevronIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **ChevronIcon** component is a versatile icon used to indicate directional navigation, such as moving forward or backward. It can be customized by direction, size, and color to fit various design needs.',
      },
    },
  },
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['forward', 'backward'],
      },
      description:
        'Determines the direction the chevron icon points. Can be "forward" or "backward".',
    },
    size: {
      control: {
        type: 'number',
      },
      description: 'Defines the size of the chevron icon in pixels.',
    },
    color: {
      control: {
        type: 'color',
      },
      description: 'Specifies the color of the chevron icon.',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof ChevronIcon>;

// Template for stories
type Story = StoryObj<ChevronIconProps>;

// Default Story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    direction: 'forward',
    size: 24,
    color: '#000',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default configuration of the ChevronIcon, pointing "forward" with a size of 24 pixels and black color.',
      },
    },
  },
};
