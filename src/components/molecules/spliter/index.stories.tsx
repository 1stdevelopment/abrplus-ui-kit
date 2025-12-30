import { Meta, StoryObj } from '@storybook/react';


import { PropsTypes, Spliter } from '.';
import { Flex, Text } from 'src/main';

// Meta configuration for Storybook
export default {
  title: 'Molecules/Spliter',
  component: Spliter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['center', 'left', 'right'],
      description:
        'Specifies the direction in which the split content should be aligned. Options include "center", "left", and "right".',
    },
    title: {
      control: 'text',
      description:
        'Title text displayed in the Spliter component. Provides a label or heading for the split content.',
    },
    expand: {
      control: 'boolean',
      description:
        'Determines whether the Spliter component is expandable or collapsible. When true, it allows the content to expand or collapse.',
    },
    onClear: {
      control: 'action',
      description:
        'Callback function triggered when the clear action is performed. This is typically used to handle the clearing of content or state.',
    },
  },
  tags: ['autodocs'],
} as Meta<PropsTypes>;

type Story = StoryObj<PropsTypes>;

// Story with children content
export const ExpandableStory: Story = {
  name: 'Expandable',
  args: {
    title: 'Expanded Spliter',
    expand: true,
    children: (
      <Flex style={{ direction: 'ltr' }} className="h-full w-full ">
        <Text>This is the content inside the Spliter component when expanded.</Text>
      </Flex>
    ),
  },
};
