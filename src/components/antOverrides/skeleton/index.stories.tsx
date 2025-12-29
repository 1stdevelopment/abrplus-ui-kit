import { Meta, StoryFn } from '@storybook/react';
import { ConfigProvider, SkeletonProps } from 'antd';

import { Skeleton } from '.';

const meta: Meta<SkeletonProps> = {
  title: 'AntOverrides/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description:
        'Defines the title text of the Skeleton component. This is used when the Skeleton is used to represent a loading state for a title or heading element.',
    },
    paragraph: {
      control: 'boolean',
      description:
        'Determines whether the Skeleton component should be rendered as a paragraph. When enabled, the Skeleton will display in a paragraph format, often used for simulating loading text.',
    },
    active: {
      control: 'boolean',
      description:
        'Specifies if the Skeleton component should display an animated loading state. When set to true, an animation is applied to simulate loading content.',
    },
    avatar: {
      control: 'boolean',
      description:
        'Indicates if the Skeleton component should render as an avatar. When enabled, it adjusts its shape and size to represent a user avatar or profile picture.',
    },
    round: {
      control: 'boolean',
      description:
        'Enables rounded corners for the Skeleton component. When true, the corners of the Skeleton will be rounded, providing a softer appearance.',
    },
    className: {
      control: 'text',
      description:
        'Allows you to apply custom CSS class names to the Skeleton component. Use this to add specific styles or to override default styling.',
    },
    style: {
      control: 'object',
      description:
        'Provides inline styles for the Skeleton component. This allows for direct styling adjustments through the style attribute.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const AvatarSkeleton: StoryFn = () => (
  <ConfigProvider>
    <Skeleton.Avatar active />
  </ConfigProvider>
);

export const ButtonSkeleton: StoryFn = () => (
  <ConfigProvider>
    <Skeleton.Button active />
  </ConfigProvider>
);

export const ImageSkeleton: StoryFn = () => (
  <ConfigProvider>
    <Skeleton.Image active />
  </ConfigProvider>
);

export const InputSkeleton: StoryFn = () => (
  <ConfigProvider>
    <Skeleton.Input active />
  </ConfigProvider>
);

export const NodeSkeleton: StoryFn = () => (
  <ConfigProvider>
    <Skeleton.Node active />
  </ConfigProvider>
);
