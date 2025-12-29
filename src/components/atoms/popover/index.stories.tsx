import { Meta, StoryFn } from '@storybook/react';

import { Popover, PopoverProps } from '.';
import { Text } from '../..';

export default {
  title: 'Atoms/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    headerTitle: {
      control: 'text',
      description:
        'Title displayed at the top of the popover. Useful for providing context or a heading.',
    },
    content: {
      control: 'text',
      description:
        'Main content displayed inside the popover. This could be text, elements, or any React nodes.',
    },
    closeable: {
      control: 'boolean',
      description:
        'Determines if the popover includes a close button, allowing users to dismiss the popover.',
    },
    footer: {
      control: 'text',
      description:
        'Footer content displayed at the bottom of the popover. Typically used for actions or additional information.',
    },
    overlayInnerClassName: {
      control: 'text',
      description: 'Custom CSS class name for styling the inner content of the popover.',
    },
    overlayClassName: {
      control: 'text',
      description: 'Custom CSS class name for styling the outer wrapper of the popover.',
    },
    onClose: {
      action: 'closed',
      description:
        'Callback function triggered when the popover is closed. Useful for handling popover dismissal actions.',
    },
  },
  tags: ['autodocs'],
} as Meta<PopoverProps>;

const Template: StoryFn<PopoverProps> = (args: PopoverProps) => (
  <Popover {...args}>
    <button>hover me</button>
  </Popover>
);
/**
 * default Popover
 */
export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Header Title',
  content: 'This is the popover content.',
  footer: 'Footer content',
};
/**
 * Popover with Header
 */
export const WithCustomHeader = Template.bind({});
WithCustomHeader.args = {
  headerTitle: (
    <Text size={14} weight="bold">
      Custom Header
    </Text>
  ),
  content: 'This is the popover content.',
  footer: 'Footer content',
};
/**
 * Popover without Header
 */
export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  headerTitle: 'Header Title',
  content: 'This popover has no footer.',
  footer: undefined,
};
/**
 *  closable Popover
 */
export const ClosablePopover = Template.bind({});
ClosablePopover.args = {
  headerTitle: 'Header Title',
  content: 'This popover can be closed.',
  closeable: true,
  onClose: () => alert('Popover closed!'),
};
/**
 *  Non closable Popover
 */
export const NonClosablePopover = Template.bind({});
NonClosablePopover.args = {
  headerTitle: 'Header Title',
  content: 'This popover cannot be closed.',
  closeable: false,
};
