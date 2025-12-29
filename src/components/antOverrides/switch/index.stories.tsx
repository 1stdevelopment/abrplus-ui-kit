import { Meta, StoryObj } from '@storybook/react';
import { SwitchProps } from 'antd';

import { Switch } from '.';

const meta: Meta<SwitchProps> = {
  title: 'AntOverrides/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'],
      description:
        'Sets the size of the switch. "default" is the standard size, while "small" is a more compact version.',
    },
    checked: {
      control: 'boolean',
      description:
        'Controls the checked state of the switch. When true, the switch is in the "on" position; when false, it is in the "off" position.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the switch if set to true. When disabled, the switch cannot be toggled or interacted with by the user.',
    },
    loading: {
      control: 'boolean',
      description:
        'Shows a loading indicator on the switch when set to true. Useful for indicating that the switch is processing or waiting for an operation to complete.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    checked: false,
    size: 'default',
    disabled: false,
    loading: false,
  },
};
export const SmallSwitch: Story = {
  args: {
    checked: false,
    size: 'small',
    disabled: false,
    loading: false,
  },
};
export const DefaultCheck: Story = {
  args: {
    defaultChecked: true,
    disabled: false,
    loading: false,
  },
};

export const SwitchWithChildren: Story = {
  args: {
    checked: false,
    size: 'default',
    disabled: false,
    loading: false,
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
  },
};

export const DisabledSwitch: Story = {
  args: {
    checked: false,
    size: 'default',
    disabled: true,
    loading: false,
  },
};

export const LoadingSwitch: Story = {
  args: {
    checked: false,
    size: 'default',
    disabled: false,
    loading: true,
  },
};
