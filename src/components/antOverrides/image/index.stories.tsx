import { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from '.';

const meta: Meta<ImageProps> = {
  title: 'AntOverrides/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Specifies the source URL of the image to be displayed.',
    },
    wrapperClassName: {
      control: 'text',
      description: 'Custom class name for the wrapper element that surrounds the image.',
    },
    wrapperStyle: {
      control: 'object',
      description: 'Inline style for the wrapper element that contains the image.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder image or element displayed while the main image is loading.',
    },
    fallback: {
      control: 'text',
      description: 'Fallback image URL used if the image fails to load.',
    },
    rootClassName: {
      control: 'text',
      description: 'Custom class name applied to the root element of the Image component.',
    },
    preview: {
      control: 'boolean',
      description: 'Toggle to enable or disable image preview on click.',
    },
    onClick: {
      action: 'clicked',
      description: 'Action handler triggered when the image is clicked.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Default Image',
  },
};

export const WithFallback: Story = {
  args: {
    src: '',
    fallback: 'this is fallback',
  },
};

export const ClickableImage: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Clickable Image',
    onClick: () => alert('Image clicked!'),
  },
};

export const PreviewImage: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Image with Preview',
    preview: true,
  },
};
