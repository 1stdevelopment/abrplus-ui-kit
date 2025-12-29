import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select, SelectProps } from './index';
import { SelectRawValue } from './types';

// Define the type for your options
type OptionType = { value: string; label: string };

/**
 * Default export for Storybook
 */
export default {
  title: 'Molecules/Select',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description:
        'The label displayed for the select component, used to provide context or instructions to the user.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Determines if the select component is disabled. When true, the component is not interactive.',
    },
    isLoading: {
      control: 'boolean',
      description:
        'Indicates whether the select component is in a loading state. This usually shows a loading spinner or indicator.',
    },
    placeholder: {
      control: 'text',
      description:
        'Placeholder text displayed when no option is selected. It provides a hint or instruction to the user.',
    },
    height: {
      control: 'number',
      description:
        'Height of the select component in pixels. Adjusts the vertical size of the select dropdown.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS class names applied to the select component for styling purposes.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'The size of the select component. Adjusts the overall dimensions and styling of the component.',
    },
    hasError: {
      control: 'boolean',
      description:
        'Indicates whether there is an error state for the select component. When true, it typically triggers error styling.',
    },
    error: {
      control: 'text',
      description:
        'Error message associated with the select component. Displays when there is an error or validation issue.',
    },
  },
  tags: ['autodocs'],
} as Meta<SelectProps<OptionType, 'single'>>;

type SingleStory = StoryObj<SelectProps<OptionType, 'single'>>;
type MultipleStory = StoryObj<SelectProps<OptionType, 'multiple'>>;

// Wrapper function to ensure the render function returns a React element
const RenderSingleSelect = (props: SelectProps<OptionType, 'single'>) => {
  const [selectedItems, setSelectedItems] = useState<SelectRawValue>(null);

  return (
    <Select.Single onChangeValue={setSelectedItems} selectedValue={selectedItems} {...props} />
  );
};
const RenderMultipleSelect = (props: SelectProps<OptionType, 'multiple'>) => {
  //   const [selectedObjects, setselectedObjects] = useState<OptionType[]>();
  const [selectedItems, setselectedItems] = useState<SelectRawValue[]>();
  return (
    <Select.Multiple<OptionType>
      {...props}
      //   onChange={setselectedObjects}  // its return object
      //   value={selectedObjects} value is object
      onChangeValue={setselectedItems} // just  label or value
      selectedValue={selectedItems} // just  label or value
    />
  );
};

// Stories for SingleSelect
/**
 * Primary export for Storybook
 */
export const Single: SingleStory = {
  name: 'SingleSelect',
  render: RenderSingleSelect,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    disabled: false,
    className: '',
  },
};
// Stories for MultipleSelect
export const Multiple: MultipleStory = {
  name: 'MultipleSelect',
  render: RenderMultipleSelect,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    disabled: false,
    className: '',
    labelExtractor: (item) => item.label,
    valueExtractor: (item) => item.value,
    tagExtractor: (i) => i.label || '',
  },
};
export const WithHeaderAndFooter: SingleStory = {
  render: RenderSingleSelect,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    disabled: false,
    className: '',
    header: <span>its header</span>,
    footer: <span>its Footer</span>,
    error: { message: 'inputError' },
  },
};
export const WithInputError: SingleStory = {
  render: RenderSingleSelect,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    disabled: false,
    className: '',
    hasError: true,
    error: { message: 'inputError' },
  },
};
/**
 * ##render node before or after select
 */
export const WithAddonBeforeAndAfter: SingleStory = {
  render: RenderSingleSelect,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    disabled: false,
    addonBefore: <span>addonBefore</span>,
    addonAfter: <span>addonAfter</span>,
  },
};
export const WithLoading: SingleStory = {
  render: RenderSingleSelect,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    disabled: false,
    loading: true,
  },
};
