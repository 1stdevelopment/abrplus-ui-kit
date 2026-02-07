import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { iconsPack } from '../../atoms/icon/constants/iconsPack';
import { ActionButtonProps } from './action';
import { IconButtonProps } from './icon';
import { ButtonProps } from './shared';

/**
 * Default export for Storybook
 */
export default {
  title: 'Molecules/Buttons',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text displayed on the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Determines if the button is disabled, preventing user interaction.',
    },
    isLoading: {
      control: 'boolean',
      description:
        'If true, the button will display a loading spinner, indicating a processing state.',
    },
    iconName: {
      control: 'select',
      defaultValue: 'Accidental',
      options: Object.keys(iconsPack), // Adjust this based on how your IconsNames is structured
      description:
        'The name of the icon to be displayed inside the button, selected from available icon names.',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to the button text, either at the start or end.',
    },
    mode: {
      control: 'select',
      options: ['block', 'inline'],
      description:
        'Defines the display mode of the button, either "block" for full-width or "inline" for inline display.',
    },
    height: {
      control: 'number',
      description: 'The height of the button in pixels.',
    },
    lang: {
      control: 'select',
      options: ['fa', 'en'],
      description:
        'Language setting for the button, used to adjust direction and locale-specific styling.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling of the button.',
    },
  },
  tags: ['autodocs'],
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;
type StoryIcon = StoryObj<IconButtonProps>;

// Stories for PrimaryButton
export const PrimaryStory: Story = {
  name: 'Primary',
  render: Button.Primary,
  args: {
    children: 'Primary Button',
    disabled: false,
    isLoading: false,
    iconName: 'Additional-info',
    iconPosition: 'start',
    mode: 'block',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Primary** button is styled for primary actions. It is usually the most prominent button on a screen and signifies the main action a user should take.',
      },
    },
  },
};

// Stories for Tertiary Button
export const TertiaryStory: Story = {
  name: 'Tertiary',
  render: Button.Tertiary,
  args: {
    children: 'Tertiary Button',
    disabled: false,
    isLoading: false,
    iconName: 'Additional-info',
    iconPosition: 'start',
    mode: 'block',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Tertiary** button is a less prominent button used for secondary actions or less important options. It is often used alongside primary buttons.',
      },
    },
  },
};

// Stories for SecondaryButton
export const SecondaryStory: Story = {
  name: 'Secondary',
  render: Button.Secondary,
  args: {
    children: 'Secondary Button',
    disabled: false,
    isLoading: false,
    iconName: 'Additional-info',
    iconPosition: 'start',
    mode: 'block',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Secondary** button is used for secondary actions that are not the primary focus of the page, but still important. It is less visually prominent than the primary button.',
      },
    },
  },
};

// Stories for NegativeButton
export const NegativeStory: Story = {
  name: 'Negative',
  render: Button.Negative,
  args: {
    children: 'Negative Button',
    disabled: false,
    isLoading: false,
    iconName: 'Additional-info',
    iconPosition: 'start',
    mode: 'block',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Negative** button is typically used for actions that could have a negative impact or to represent destructive actions, like delete or remove.',
      },
    },
  },
};

// Stories for SecondaryQuietButton
export const SecondaryQuiet: Story = {
  name: 'SecondaryQuiet',
  render: Button.SecondaryQuiet,
  args: {
    children: 'SecondaryQuiet Button',
    disabled: false,
    isLoading: false,
    iconName: 'Additional-info',
    iconPosition: 'start',
    mode: 'block',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **SecondaryQuiet** button is a subtle button variant, usually styled without a border or background color. It is used for less critical actions or when you want to keep a clean UI.',
      },
    },
  },
};

// Stories for ActionButton
export const ActionStory: StoryObj<ActionButtonProps> = {
  name: 'Action',
  render: Button.Action,
  args: {
    children: 'Action Button',
    iconName: 'Additional-info',
    disabled: false,
    isLoading: false,
    iconPosition: 'start',
    mode: 'block',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Action** button is designed for general actions. It is versatile and can be used in various places within an application.',
      },
    },
  },
};

// Stories for IconButton
export const IconStory: StoryIcon = {
  name: 'Icon',
  render: Button.Icon,
  args: {
    disabled: false,
    iconName: 'Additional-info',
    iconPosition: 'start',
    height: 34,
    lang: 'fa',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Icon** button is a button that contains only an icon with no text. It is used for actions that are represented well by an icon, saving space and providing a minimalistic design.',
      },
    },
  },
};
