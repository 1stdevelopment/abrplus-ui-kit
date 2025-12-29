import { Meta, StoryObj } from '@storybook/react';
import { RadioProps } from 'antd';

import { Radio } from '.';

const meta: Meta<RadioProps> = {
  title: 'Atoms/Radio',
  component: Radio,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Indicates whether the radio button is selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button, making it un selectable.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Automatically focuses the radio button when the component is mounted.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered when the radio button is selected or deselected.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state of the radio button when it is first rendered.',
    },
    children: {
      control: 'radio',
      description: 'The label or option text displayed next to the radio button.',
      options: ['email', 'phone', 'mail'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    onChange: () => alert('checked change'),
    children: 'Option 1',
  },
};
/**
 * disabled Radio
 */
export const DisabledStory: Story = {
  args: {
    disabled: true,
  },
};
/**
 * Default Radio Group
 */
export const Group: Story = {
  name: 'Radio Group',
  render: () => (
    <Radio.Group>
      <Radio value={1}>Option 1</Radio>
      <Radio value={2}>Option 2</Radio>
      <Radio value={3}>Option 3</Radio>
    </Radio.Group>
  ),
};
