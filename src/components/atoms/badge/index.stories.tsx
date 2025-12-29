// Badge.stories.tsx
import { colors } from '@configs'; // Import color utilities or constants if needed
import type { Meta, StoryObj } from '@storybook/react';
import { BadgeProps } from 'antd';
import { Badge } from '.';

// Define the meta object with component information
const meta: Meta<BadgeProps> = {
  title: 'Atoms/Badge', // Title of the component in Storybook
  component: Badge,
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **Badge** component is used to display a small count or status indicator. It can be utilized to show notifications, labels, or status indicators on various UI elements. The component leverages the Ant Design `Badge` component to provide a consistent and customizable badge appearance.',
      },
    },
  },
  argTypes: {
    count: {
      control: 'number',
      description:
        'The number or content to display inside the badge. If omitted, no badge is displayed.',
    },
    dot: {
      control: 'boolean',
      description:
        'Whether to display a dot instead of a badge with a count. Useful for status indicators without numeric content.',
    },
    overflowCount: {
      control: 'number',
      description: 'The maximum count to display before truncating with a plus sign.',
    },
    showZero: {
      control: 'boolean',
      description: 'Whether to show the badge when the count is zero. Defaults to false.',
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
      description: 'Size of the badge. Options are "default" and "small".',
    },
    color: {
      control: 'color',
      description:
        'Background color of the badge. You can customize it to match your design system.',
    },
    children: {
      control: 'text',
      description: 'Content inside the badge. Typically used to render the badge label or number.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the badge.',
    },
    style: {
      control: 'object',
      description: 'Inline styles to apply to the badge.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<BadgeProps>;

// Default story for Badge component
export const Default: Story = {
  args: {
    count: 5,
    size: 'small',
    dot: false,
    overflowCount: 99,
    showZero: false,
    color: colors.primary, // Use your color utilities or constants
    children: 'Notice',
  },
  parameters: {
    docs: {
      description: {
        story:
          "The **Default** story showcases the Badge component with a count of 5. It demonstrates the badge in its standard form, displaying a numeric count and allowing customization of the badge's appearance through various props.",
      },
    },
  },
};
