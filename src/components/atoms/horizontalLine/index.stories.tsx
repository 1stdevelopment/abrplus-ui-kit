import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '@configs';

import { HorizontalLine, HorizontalLineProps } from '.';

// Define the meta object with component information
const meta: Meta<HorizontalLineProps> = {
  title: 'Atoms/HorizontalLine', // Title of your component in Storybook
  component: HorizontalLine,
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **HorizontalLine** component is a versatile UI element used to separate content horizontally. It can be styled with various properties including color, text, and custom classes. This component is useful for creating visual breaks in content and enhancing layout organization. It supports inline styles and custom colors, making it adaptable to different design requirements.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description:
        'Additional CSS classes to apply directly to the horizontal line element. Use this property to apply custom styles or to integrate with existing design systems.',
    },
    wrapperClassName: {
      control: 'text',
      description:
        'CSS classes to apply to the wrapper container surrounding the horizontal line. This property allows for styling of the container that holds the line, providing more control over layout and spacing.',
    },
    style: {
      control: 'object',
      description:
        'Inline styles applied directly to the horizontal line. This property is useful for quick, one-off style adjustments that are not covered by the `className` property.',
    },
    color: {
      control: 'color',
      description:
        'Sets the color of the horizontal line. Use this property to customize the line’s color according to the design requirements or to match the surrounding content.',
    },
    text: {
      control: 'text',
      description:
        'Text to be displayed beside or over the horizontal line. This property allows you to add descriptive or decorative text in conjunction with the line, enhancing its visual impact and context.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Default Story for HorizontalLine component
export const Default: StoryObj<HorizontalLineProps> = {
  args: {
    className: '', // Default class name for additional styling
    wrapperClassName: '', // Default wrapper class name for the container
    style: {}, // Default inline styles
    color: colors.primary, // Default color from the imported colors
    text: 'Sample Text', // Default text to display beside the line
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story illustrates the HorizontalLine component with default settings. It shows a simple horizontal line with a default color, optional text, and no additional classes or styles. This story serves as a basic example of how the component appears with minimal configuration.',
      },
    },
  },
};
