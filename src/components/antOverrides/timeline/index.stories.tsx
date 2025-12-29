import { Meta, StoryObj } from '@storybook/react';

import { Timeline, TimelineProps } from '.';

const meta: Meta<TimelineProps> = {
  title: 'AntOverrides/Timeline',
  component: Timeline,
  argTypes: {
    mode: {
      control: 'select',
      options: ['left', 'alternate', 'right'],
      description:
        'Specifies the alignment of the timeline items. "left" aligns items to the left, "right" aligns them to the right, and "alternate" alternates the position of items on the left and right sides.',
    },
    reverse: {
      control: 'boolean',
      description:
        'Reverses the order of the timeline items. When true, the items are displayed in reverse chronological order.',
    },
    pending: {
      control: 'text',
      description:
        'Provides a text label for the pending item in the timeline. This is typically used to indicate that a timeline item is yet to be completed or added.',
    },
    pendingDot: {
      control: 'text',
      description:
        'Customizes the dot used for the pending item. You can provide a custom component or text to represent the pending state visually.',
    },
    className: {
      control: 'text',
      description:
        'Applies additional CSS class names to the timeline component for custom styling.',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<TimelineProps>;

export const Default: Story = {
  args: {
    items: [{ children: 'Event 1' }, { children: 'Event 2' }, { children: 'Event 3' }],
  },
};

export const AlternateTimeline: Story = {
  args: {
    mode: 'alternate',
    items: [{ children: 'Event 1' }, { children: 'Event 2' }, { children: 'Event 3' }],
    className: 'w-40',
  },
};
export const RightAlignedTimeline: Story = {
  args: {
    mode: 'right',
    items: [{ children: 'Event 1' }, { children: 'Event 2' }, { children: 'Event 3' }],
    className: 'w-40',
  },
};
export const PendingTimeline: Story = {
  args: {
    pending: 'Loading...',
    items: [{ children: 'Event 1' }, { children: 'Event 2' }, { children: 'Event 3' }],
    className: 'w-40',
  },
};
export const ReverseTimeline: Story = {
  args: {
    reverse: true,
    items: [{ children: 'Event 1' }, { children: 'Event 2' }, { children: 'Event 3' }],
    className: 'w-40',
  },
};
export const CustomPendingDotTimeline: Story = {
  args: {
    pending: 'Custom Pending',
    pendingDot: '⏳',
    items: [{ children: 'Event 1' }, { children: 'Event 2' }, { children: 'Event 3' }],
    className: 'w-40',
  },
};
