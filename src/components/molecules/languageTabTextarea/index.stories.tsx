// LanguageTabTextarea.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { withReactQuery, withReactRouter } from '../../../utilities/testUtils';

// Adjust the path as needed
import { LanguageTabTextarea, LanguageTabTextareaProps } from '.';

// Default export with Storybook metadata
export default {
  title: 'Molecules/LanguageTabTextarea',
  component: LanguageTabTextarea,
  decorators: [(Story) => withReactRouter(withReactQuery(<Story />))],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Current value of the textarea, usually an array to support multiple languages.',
    },
    required: {
      control: 'boolean',
      description: 'Indicates whether the textarea input is required.',
    },
    helperText: {
      control: 'text',
      description: 'Additional helper text displayed below the textarea.',
    },
    label: {
      control: 'text',
      description: 'Label for the textarea input.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea input when set to true.',
    },
    resizable: {
      control: 'boolean',
      description: 'Allows the textarea to be resizable if set to true.',
    },
    rows: {
      control: 'number',
      description: 'Specifies the number of visible text lines for the textarea.',
    },
    height: {
      control: 'number',
      description: 'Height of the textarea in pixels.',
    },
    error: {
      control: 'object',
      description: 'Error object containing error details, like message to display.',
    },
    hideErrorMessage: {
      control: 'boolean',
      description: 'Controls the visibility of an error message below the textarea.',
    },
    lang: {
      control: 'text',
      description: 'Specifies the language or localization of the textarea content.',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the textarea input.',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback function that is triggered when the textarea content changes.',
    },
  },
  tags: ['autodocs'],
} as Meta<Story>;

type Story = StoryObj<LanguageTabTextareaProps>;

// Default story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    label: 'متن تستی',
    rows: 4,
    height: 100,
    value: [],
    helperText: 'متن کمکی',
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic example of the `LanguageTabTextarea` component with default props',
      },
    },
  },
};

// Story with error message
export const WithErrorMessageStory: Story = {
  name: 'With Error Message',
  args: {
    label: 'متن تستی',
    rows: 4,
    height: 100,
    value: [],
    error: { message: 'پیغام ارور' },
    hideErrorMessage: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'An example of the `LanguageTabTextarea` component that displays an error message below the textarea when there is a validation issue.',
      },
    },
  },
};
