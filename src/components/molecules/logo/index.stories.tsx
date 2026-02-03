// src/components/molecules/Logo/Logo.stories.tsx
import { LogoIconNameType } from '@configs';
import { Meta, StoryObj } from '@storybook/react';

import { Logo, LogoProps } from '.';

export default {
  title: 'Organisms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Logo** component displays an avatar with an optional tooltip and either a custom image or a default icon depending on the provided entity type.',
      },
    },
  },
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
      description: 'The shape of the avatar (circle or square).',
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the avatar.',
    },
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(LogoIconNameType),
      },
      description: 'Type of the entity to determine which icon to display.',
    },
    uniqueFileId: {
      control: 'text',
      description: 'ID of the file used to fetch the image avatar (if any).',
    },
    hasToolTip: {
      control: 'boolean',
      description: 'Whether the avatar has a tooltip.',
    },
    toolTipTitle: {
      control: 'text',
      description: 'Text to display in the tooltip.',
    },
    hasAnimation: {
      control: 'boolean',
      description: 'Whether to apply animation on hover.',
    },
  },
  tags: ['autodocs'],
} as Meta<LogoProps>;

type Story = StoryObj<LogoProps>;

export const DefaultUser: Story = {
  name: 'Default User Icon',
  args: {
    iconName: LogoIconNameType.User,
    shape: 'circle',
    hasToolTip: true,
    toolTipTitle: 'John Doe',
    hasAnimation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a default user icon in a circular shape with a tooltip.',
      },
    },
  },
};

export const WithImage: Story = {
  name: 'With Custom Image',
  args: {
    shape: 'square',
    hasToolTip: true,
    toolTipTitle: 'Custom Image Avatar',
    hasAnimation: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Displays a square avatar using an image from a file ID, with tooltip and hover animation.',
      },
    },
  },
};
