// InputDatePicker.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputDatePicker, InputDatePickerProps } from '.';
// Adjust the import path as necessary
import { Flex } from '../..';

// Define the meta object with component information
const meta: Meta<InputDatePickerProps> = {
  title: 'Atoms/InputDatePicker', // Title for the Storybook entry
  component: InputDatePicker,
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **InputDatePicker** component is a UI element for selecting dates. It combines an input field with a date picker, allowing users to choose a date from a calendar interface. The component supports various customization options, including error handling and value changes. It is ideal for forms and any interface requiring date inputs.',
      },
    },
  },
  argTypes: {
    onChangeISO: {
      action: 'onChangeISO',
      description:
        'Callback function triggered when the date value changes, providing the new date in ISO format.',
    },
    onChange: {
      action: 'onChange',
      description:
        'Callback function triggered when the date value changes, providing the new date in a standard format.',
    },
    label: {
      control: 'text',
      description:
        'Label text to display alongside the date picker input. Useful for describing the purpose of the date picker.',
    },
    error: {
      control: 'object',
      defaultValue: { message: 'Error message' },
      description:
        'Error object for displaying error messages related to date input validation. Includes a message to inform users of input issues.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputDatePickerProps>;

// Default story for InputDatePicker component
export const Default: Story = {
  render: (args) => {
    const DatePickerWithState = () => {
      const [date, setDate] = useState<string | undefined>('');

      return (
        <Flex className="w-full max-w-xs">
          <InputDatePicker {...args} valueISO={date} onChangeISO={(newDate) => setDate(newDate)} />
        </Flex>
      );
    };

    return <DatePickerWithState />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the `InputDatePicker` component with a basic configuration. It shows how the component handles date selection with default settings and updates its state based on user interaction. Ideal for showing the basic functionality of the date picker in a standard use case.',
      },
    },
  },
};

// Story demonstrating InputDatePicker with error state
export const WithError: Story = {
  render: (args) => {
    const DatePickerWithStateAndError = () => {
      const [date, setDate] = useState<string | undefined>('');

      return (
        <Flex className="w-full max-w-xs">
          <InputDatePicker
            {...args}
            valueISO={date}
            onChangeISO={(newDate) => setDate(newDate)}
            error={{ message: 'Error message' }} // Example error message
          />
        </Flex>
      );
    };

    return <DatePickerWithStateAndError />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **WithError** story demonstrates the `InputDatePicker` component in a state where an error is present. This example includes an error message to show how the component displays validation errors. It helps visualize how the component behaves when there is an issue with the selected date or input.',
      },
    },
  },
};
