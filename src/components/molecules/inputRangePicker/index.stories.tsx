// InputRangePicker.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputRangePicker, InputRangePickerProps } from '.';
// Adjust the import path as necessary
import { Flex } from '../..';

// Define the meta object with component information
const meta: Meta<InputRangePickerProps> = {
  title: 'Molecules/InputRangePicker', // Title of the component in Storybook
  component: InputRangePicker,
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **InputRangePicker** component allows users to select a date range by picking a start and end date. It provides an intuitive interface for selecting ranges and is ideal for applications that require date range inputs, such as booking systems or reporting tools.',
      },
    },
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      description:
        'Callback function triggered when the date range value changes. It provides the new start and end dates.',
    },
    error: {
      control: 'object',
      defaultValue: { message: 'Error message' },
      description:
        'Error object for displaying validation messages related to the date range input. Includes a message to inform users of any input issues.',
    },
    label: {
      control: 'text',
      description:
        'Label text to display for the date range picker input. Useful for providing context or instructions for the input field.',
    },
    helperText: {
      control: 'text',
      description:
        'Helper text displayed as a tooltip or additional guidance for users. Provides supplementary information about the date range picker.',
    },
    required: {
      control: 'boolean',
      description:
        'Indicates whether the date range picker field is mandatory. If true, the field must be filled before submission.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputRangePickerProps>;

// Default story for InputRangePicker component
export const Default: Story = {
  render: (args) => {
    const RangePickerWithState = () => {
      const [value, setValue] = useState<any>();

      return (
        <Flex className="w-full max-w-xs">
          <InputRangePicker {...args} value={value} onChange={(newValue) => setValue(newValue)} />
        </Flex>
      );
    };

    return <RangePickerWithState />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the `InputRangePicker` component in its standard configuration. It showcases the component’s basic functionality for selecting a date range, with an interactive example where users can select and change the date range.',
      },
    },
  },
};

// Story demonstrating InputRangePicker with error state
export const WithError: Story = {
  render: (args) => {
    const RangePickerWithError = () => {
      const [value, setValue] = useState<any>();

      return (
        <Flex className="w-full max-w-xs">
          <InputRangePicker
            {...args}
            error={{ message: 'Error message' }} // Example error message
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </Flex>
      );
    };

    return <RangePickerWithError />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **WithError** story shows the `InputRangePicker` component with an error state. This example includes an error message to illustrate how the component handles and displays validation errors, helping users understand how to handle erroneous inputs.',
      },
    },
  },
};
