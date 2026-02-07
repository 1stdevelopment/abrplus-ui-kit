import type { Meta, StoryObj } from '@storybook/react';

import { iconsPack } from './constants/iconsPack';
import { Icon, IconMoonsProps } from './index';

/* -------------------------------------------------------------------------- */
const meta: Meta<IconMoonsProps> = {
  title: 'Atoms/Icon', // Title for the Storybook entry
  component: Icon,
  decorators: [], // No decorators applied
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **Icon** component is a versatile UI element used for displaying scalable vector icons. It supports various sizes and colors, making it easy to integrate into different design contexts. The component can be customized through props to change its appearance and behavior, including its size, color, and click functionality. It is ideal for use in buttons, navigation, and other interactive elements where visual representation is key.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      defaultValue: 'Accidental',
      options: Object.keys(iconsPack), // Provides a dropdown of available icons
      description:
        'Name of the icon to be displayed. Select from available icons defined in the `iconsPack` constant.',
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 12, 14, 18, 24, 30, 50],
      description:
        'Size of the icon. Choose from predefined sizes or specify a custom size. This controls the icon’s dimensions and overall visual impact.',
    },
    color: {
      control: 'color',
      description:
        'Color of the icon. Use this property to set the icon’s fill color, which can be customized to fit your design requirements.',
    },
    onClick: {
      action: 'clicked',
      description:
        'Callback function triggered when the icon is clicked. This allows the icon to be interactive, handling user interactions or events.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<IconMoonsProps>;

// Default Story for Icon component
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    size: 50, // Default size of the icon
    name: 'Accidental', // Default icon name
    onClick: undefined, // No action on click by default
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story showcases the Icon component with a default icon and size. The icon is set to the "Accidental" icon and is displayed at a size of 50. This example demonstrates the basic usage of the Icon component without any interactive behavior.',
      },
    },
  },
};

export const Clickable: Story = {
  name: 'ClickableIcon',
  args: {
    size: 50, // Size of the icon
    name: 'Accidental', // Icon to display
    onClick: () => alert('Icon clicked!'), // Action to perform when icon is clicked
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Clickable** story demonstrates the Icon component with an interactive click event. The icon is set to "Accidental" and displays an alert when clicked. This example illustrates how the icon can be used in interactive scenarios, enhancing user engagement with click functionality.',
      },
    },
  },
};
