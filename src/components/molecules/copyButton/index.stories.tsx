// src/components/molecules/CopyButton/CopyButton.stories.tsx
import { Meta, StoryObj } from '@storybook/react';

import { CopyButton, CopyButtonProps } from '.';

// Define metadata for the component
export default {
  title: 'Molecules/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textToCopy: {
      control: 'text',
      description: 'Text to be copied to the clipboard',
    },
    variant: {
      control: {
        type: 'select',
        options: ['informative', 'success', 'error', 'default'],
      },
      description: 'Variant of the tooltip that appears on copy',
    },
    renderButton: {
      control: 'object',
      description: 'Optional custom button render',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof CopyButton>;

// Template for stories
type Story = StoryObj<CopyButtonProps>;

// Default Story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    textToCopy: 'Copy this text!',
    variant: 'success',
  },
};
