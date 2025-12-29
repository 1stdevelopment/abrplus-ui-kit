import { Meta, StoryObj } from '@storybook/react';
import { DropdownProps, MenuProps } from 'antd';
import { Dropdown } from './';

const meta: Meta<DropdownProps> = {
  title: 'AntOverrides/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    arrow: {
      control: 'boolean',
      description: 'Provides a toggle switch to control the visibility of the dropdown arrow.',
    },
    trigger: {
      control: 'radio',
      description: 'The available options for how the dropdown can be triggered.',
      options: ['click', 'hover', 'contextMenu'],
    },
    placement: {
      control: 'select',
      description:
        'These options define where the dropdown will appear relative to the trigger element.',
      options: [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'top',
        'bottom',
      ],
    },
    open: {
      control: 'boolean',
      description: ' Provides a toggle to manually control whether the dropdown is open.',
    },
    disabled: { control: 'boolean', description: ' Provides a toggle to disable the dropdown.' },
    destroyPopupOnHide: {
      control: 'boolean',
      description:
        'Toggles whether the dropdown popup is destroyed when hidden, or kept in the DOM.',
    },
    autoAdjustOverflow: {
      control: 'boolean',
      description:
        'Provides a toggle to enable or disable automatic overflow adjustment for the dropdown.',
    },
    onOpenChange: {
      action: 'openChanged',
      description:
        'Logs when the dropdowns open state changes, useful for seeing interaction events in Storybooks Action Logger',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DropdownProps>;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <span>Options 1</span>,
  },
  {
    key: '2',
    label: <span>Options 2</span>,
  },
  {
    key: '3',
    label: <span>Options 3</span>,
  },
];

export const Default: Story = {
  args: {
    menu: { items },
    children: <span>Hover me</span>,
    trigger: ['hover'],
  },
};

export const Disabled: Story = {
  args: {
    menu: { items },
    children: <span>Disabled Dropdown</span>,
    trigger: ['hover'],
    disabled: true,
  },
};

export const CustomPlacement: Story = {
  args: {
    menu: { items },
    children: <span>Custom Placement</span>,
    placement: 'topLeft',
  },
};
