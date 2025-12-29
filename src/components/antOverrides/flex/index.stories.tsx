import { Meta, StoryObj } from '@storybook/react';
import { FlexProps } from 'antd';
import { Flex } from '.';

const meta: Meta<FlexProps> = {
  title: 'AntOverrides/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    vertical: {
      control: 'boolean',
      description: ' Provides a toggle to switch between vertical and horizontal flex direction.',
    },
    wrap: {
      control: 'boolean',
      description:
        'Allows toggling of flex wrapping (i.e., whether items should wrap onto multiple lines).',
    },
    justify: {
      control: 'select',
      description: 'Dropdown control for selecting the alignment of items along the cross axis.',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      control: 'select',
      description: 'Text input to set the gap between flex items, allowing for spacing control.',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    gap: {
      control: 'text',
      description: 'Text input to set the gap between flex items, allowing for spacing control.',
    },
    prefixCls: {
      control: 'text',
      description: 'Text input for customizing the prefix used for component class names.',
    },
    rootClassName: {
      control: 'text',
      description:
        'Text input for applying custom class names to the root element of the component.',
    },
    children: {
      control: 'text',
      description: 'Text input to provide children content for the Flex container.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FlexProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Child 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Child 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Child 3</div>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Child 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Child 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Child 3</div>
      </>
    ),
    vertical: true,
  },
};

export const Wrapped: Story = {
  args: {
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Child 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Child 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Child 3</div>
        <div style={{ backgroundColor: 'lightpink', padding: '10px' }}>Child 4</div>
      </>
    ),
    wrap: true,
  },
};

export const CustomGap: Story = {
  args: {
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Child 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Child 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Child 3</div>
      </>
    ),
  },
};
