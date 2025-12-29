import { Meta, StoryObj } from '@storybook/react';
import { Loading, SpinnerProps } from '.';
const meta: Meta<SpinnerProps> = {
  title: 'AntOverrides/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 18,
      description:
        'Defines the size of the loader (in pixels). Adjust this value to increase or decrease the loader’s dimensions.',
    },
    thickness: {
      control: 'number',
      defaultValue: 2,
      description:
        'Sets the thickness of the loader’s border or line (in pixels). Use this to control the visual weight of the loader.',
    },
    color: {
      control: 'color',
      description:
        'Specifies the color of the loader. This can be used to match the loader’s color to your design theme or brand colors.',
    },
    isLoading: {
      control: 'boolean',
      defaultValue: true,
      description:
        'Controls the visibility of the loader. Set to true to display the loader, or false to hide it when not needed.',
    },
    heightOffset: {
      control: 'number',
      description:
        'Adjusts the vertical offset of the loader’s position (in pixels). This can be useful for aligning the loader within its container or relative to other elements.',
    },
    children: {
      control: 'text',
      description:
        'Provides additional content or text that can be displayed alongside or within the loader. This is useful for adding labels or messages.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  args: {
    size: 18,
    thickness: 2,
    color: '#00f',
    isLoading: true,
    heightOffset: 50,
  },
};
