import { Meta, StoryObj } from '@storybook/react';

import { Box } from '.';
import { StatusBoxProps } from './status';
import { TitleBoxProps } from './title';

export default {
  title: 'Molecules/Box',
  component: undefined,
  subcomponents: { TitleBox: Box.Title, StatusBox: Box.Status },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description:
        'The title text to be displayed in the box. This applies to the `TitleBox` sub component.',
    },
    children: {
      control: 'text',
      description:
        'Content to be rendered inside the box. This can be a ReactNode or a plain string, and it applies to both `TitleBox` and `StatusBox`.',
    },
    active: {
      control: 'boolean',
      description:
        'Determines whether the box is displayed as active. This affects the appearance of the `StatusBox` subcomponent by showing an active or inactive icon.',
    },
  },
  tags: ['autodocs'],
} as Meta<TitleBoxProps & StatusBoxProps>;

const StatusBox = (props: StatusBoxProps) => {
  return <Box.Status {...props} />;
};

const TitleBox = (props: TitleBoxProps) => {
  return <Box.Title {...props} />;
};

type Story = StoryObj<TitleBoxProps & StatusBoxProps>;

/**
 * Status ICON
 */
export const Status: Story = {
  args: {
    active: true,
  },
  render: StatusBox,
};
/**
 * Title box
 */
export const Title: Story = {
  args: {
    title: 'Only Title Displayed',
    children: <span>this test of title</span>,
  },
  render: TitleBox,
};
