import type { Meta, StoryObj } from '@storybook/react';

import { Fallback, FallbackProps } from '.';

// Adjust the import path as necessary

const meta: Meta<FallbackProps> = {
  title: 'Atoms/Fallback', // Title for the Storybook entry
  component: Fallback,
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **Fallback** component is used as a placeholder or loading indicator when content is being fetched or processed. It can display a loading spinner or other fallback UI to inform users that something is happening in the background. This component is particularly useful for improving user experience during asynchronous operations.',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'number',
        min: 20,
        max: 100,
        step: 10,
      },
      description:
        'Specifies the size of the loading spinner. Adjust this value to control the diameter of the spinner, which is useful for fitting the spinner into various layouts and designs.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FallbackProps>;

// Default Story for Fallback component
export const Default: Story = {
  args: {
    size: 40, // Default size for the spinner
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story showcases the Fallback component with a size of 40. This represents a typical loading spinner size, suitable for most use cases where a moderate-sized spinner is needed to indicate loading or processing states.',
      },
    },
  },
};
