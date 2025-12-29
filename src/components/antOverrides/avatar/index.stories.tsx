import type { Meta, StoryObj } from '@storybook/react';
import { AvatarProps } from 'antd';
import { Avatar } from '.';

const meta: Meta<AvatarProps> = {
  title: 'AntOverrides/Avatar',
  component: Avatar,
  decorators: [],
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'The selectable options for the shape prop.',
    },
    className: {
      control: 'text',
      description: 'Allows users to input a string for the className prop.',
    },
    size: {
      control: 'select',
      description: ' Various sizes available for the Avatar component',
      options: ['large', 'small', 'default', 12, 14, 18, 24, 30, 50],
    },
    onClick: { action: 'clicked', description: 'Logs click actions in Storybooks Action Logger.' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    shape: 'circle',
    size: 'large',
  },
};
export const ClickableStory: Story = {
  name: 'Clickable',
  args: {
    shape: 'circle',
    size: 'large',
    onClick: () => alert('clicked'),
  },
};
