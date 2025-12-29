import type { Meta, StoryObj } from '@storybook/react';

import { BorderedTitle, BorderedTitleProps } from '.';

/* -------------------------------------------------------------------------- */
const meta: Meta<BorderedTitleProps> = {
  title: 'Atoms/BorderTitle',
  component: BorderedTitle,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **BorderedTitle** component is used to display a title with a customizable border around it. This component supports different text sizes, alignments, and colors, making it versatile for various design needs.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text to display.',
    },
    textSize: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 12, 14, 18, 24, 30, 50],
      description: 'The size of the text, which can be a predefined size or a specific number.',
    },
    align: {
      control: 'select',
      options: ['center', 'end', 'start'],
      description: 'The alignment of the title text within the bordered container.',
    },
    textColor: {
      control: 'color',
      description: 'The color of the text.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BorderedTitleProps>;

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    textSize: 50,
    align: 'center',
    title: 'test',
  },
};
