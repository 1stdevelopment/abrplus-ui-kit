import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { TagInput } from '.';
import { TagInputProps } from './types';

export default {
  title: 'Molecules/TagInput',
  component: TagInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description:
        'The label for the TagInput component. It provides context or instructions to the user on what to enter.',
    },
    placeholder: {
      control: 'text',
      description:
        'Placeholder text displayed when no tags are present. Provides a hint or example of what the user can input.',
    },
    options: {
      control: 'object',
      description:
        'Array of options available for tagging. Each option represents a selectable tag.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Determines if the TagInput is disabled. When true, the input field will be uneditable and unselectable.',
    },
    loading: {
      control: 'boolean',
      description:
        'Indicates if the TagInput is in a loading state. When true, a loading spinner or indicator is displayed to show that data is being fetched or processed.',
    },
    error: {
      control: 'object',
      description:
        'Error object containing information about validation or other issues. Used to display error messages or styling.',
    },
    allowClear: {
      control: 'boolean',
      description:
        'Allows the user to clear the selected tags. When true, a clear button or similar UI element is provided.',
    },
  },
  tags: ['autodocs'],
} as Meta<TagInputProps<any>>;

type Story = StoryObj<TagInputProps<any>>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const RenderTagInputWithFailure = (props: TagInputProps<any>) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleChange = (newSelectedItems: any[]) => {
    setSelectedItems(newSelectedItems);
  };

  const handleAddNew = async () => {
    try {
      await new Promise((_, reject) => setTimeout(() => reject('Failed to add new item'), 1000));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <TagInput
        {...props}
        options={defaultOptions}
        selectedValue={selectedItems}
        onChangeValue={handleChange}
        onAddNew={handleAddNew}
        tagExtractor={(item) => item.label}
      />
    </div>
  );
};

const RenderTagInput = (props: TagInputProps<any>) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [options, setOptions] = useState(defaultOptions);

  const handleChange = (newSelectedItems: any[]) => {
    setSelectedItems(newSelectedItems);
  };

  const handleAddNew = (newItem: string) => {
    const newOption = { value: newItem, label: newItem };
    setOptions([...options, newOption]);
    setSelectedItems([...selectedItems, newOption]);
  };

  return (
    <TagInput
      {...props}
      options={options}
      selectedValue={selectedItems}
      onChangeValue={handleChange}
      onAddNew={handleAddNew}
      tagExtractor={(item) => item.label}
    />
  );
};

// Default Story
export const Default: Story = {
  render: (args) => <RenderTagInput {...args} />,
  args: {
    label: 'Fruits',
    placeholder: 'Select a fruit',
  },
};

/**
 * Mocking Api Call Reject Adding Tag
 */
export const FailureAddingTag: Story = {
  render: (args) => <RenderTagInputWithFailure {...args} />,
  args: {
    label: 'Fruits',
    placeholder: 'Select a fruit',
  },
};
