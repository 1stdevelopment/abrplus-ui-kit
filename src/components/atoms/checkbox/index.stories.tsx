import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps } from 'antd';
import { useState } from 'react';
import { Checkbox } from '.'; // Adjust the import path as necessary

// Define the title and component in Storybook
const meta: Meta<CheckboxProps> = {
  title: 'Atoms/Checkbox', // Define the title of your component in Storybook
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Checkbox** component is a versatile UI element that allows users to select or deselect an option. It can be used individually or as part of a group to provide users with multiple selection options. The checkbox supports various states such as checked, unchecked, and disabled, making it a flexible choice for forms, settings, and other interactive elements in a web application.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description:
        'Whether the checkbox is checked. This boolean prop determines the current state of the checkbox, either checked (true) or unchecked (false).',
    },
    disabled: {
      control: 'boolean',
      description:
        'Whether the checkbox is disabled. A disabled checkbox appears visually different and cannot be interacted with, useful for non-editable states.',
    },
    onChange: {
      action: 'changed',
      description:
        'Callback function triggered on checkbox state change. This function is called with the new checked state whenever the user interacts with the checkbox.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Default Story for Checkbox
export const Default: StoryObj<CheckboxProps> = {
  render: (args) => <Checkbox {...args} />,
  args: {
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story shows a simple checkbox component with default props. Users can toggle the checkbox on or off to see how the `checked` state changes, and also disable the checkbox to see its disabled state.',
      },
    },
  },
};

// Story for Checkbox Group
const CheckboxGroupComponent = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleChange = (checkedValue: any[]) => {
    setCheckedValues(checkedValue);
  };

  return (
    <Checkbox.Group
      options={[
        { label: 'گزینه تستی 1', value: 'A' },
        { label: 'گزینه تستی 2', value: 'B' },
        { label: 'گزینه تستی 3', value: 'C' },
      ]}
      value={checkedValues}
      onChange={handleChange}
    />
  );
};

export const CheckboxGroup: StoryObj<CheckboxProps> = {
  render: () => <CheckboxGroupComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'The **Checkbox Group** story demonstrates the use of multiple checkboxes grouped together, allowing users to select multiple options from a predefined set. This is useful for scenarios where a user needs to make multiple selections, such as choosing from a list of features or settings.',
      },
    },
  },
};
