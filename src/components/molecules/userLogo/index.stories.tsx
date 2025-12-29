import { Meta, StoryObj } from '@storybook/react';

import { UserLogo, UserLogoProps } from '.';

// Define the Storybook metadata
export default {
  title: 'Molecules/UserLogo',
  component: UserLogo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
      description:
        'The source URL of the logo image. This should be a string representing the path or URL to the image file.',
    },
    isMe: {
      control: 'boolean',
      description:
        'Determines if the logo represents the current user (me). This can be used to apply different styling or coloring specific to the current user.',
    },
    identityId: {
      control: 'text',
      description:
        'Unique identifier for the user. This ID is used to fetch or associate the correct image or data for the user.',
    },
    width: {
      control: 'number',
      description:
        'The width of the logo image in pixels. Adjust this value to scale the image horizontally.',
    },
    height: {
      control: 'number',
      description:
        'The height of the logo image in pixels. Adjust this value to scale the image vertically.',
    },
  },
  tags: ['autodocs'],
} as Meta<UserLogoProps>;

type Story = StoryObj<UserLogoProps>;

// Default story - image loads successfully
export const Default: Story = {
  args: {
    isMe: false,
    width: 50,
    height: 50,
    identityId: '12',
  },
};
// Story for when the image fails to load and shows a fallback icon
export const WithError: Story = {
  args: {
    src: 'invalid-url', // Invalid URL to trigger error state
    isMe: false,
    width: 50,
    height: 50,
    onError: () => alert('error'),
    alt: 'alt image',
  },
};
// Story when the "isMe" prop is true, showing a different color for the icon
export const IsMe: Story = {
  args: {
    src: 'invalid-url',
    isMe: true,
    width: 50,
    height: 50,
  },
};
