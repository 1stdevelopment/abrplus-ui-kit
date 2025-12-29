import { Meta, StoryObj } from '@storybook/react';

import { colors } from '@configs';

import { Tag, TagProps } from '.';

export default {
  title: 'Molecules/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClose: {
      action: 'closed',
      description: 'Callback function triggered when the tag is closed or removed.',
    },
    imageSrc: {
      control: 'text',
      description:
        'Source URL of the image to be displayed on the tag. Allows for custom images or icons within the tag.',
    },
    title: {
      control: 'text',
      description:
        'Text content displayed inside the tag. Represents the main label or description of the tag.',
    },
    closable: {
      control: 'boolean',
      description:
        'Determines whether the tag can be closed or removed. When true, a close icon will be shown.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Indicates if the tag is in a disabled state. When true, the tag will not be interactive or clickable.',
    },
    error: {
      control: 'boolean',
      description:
        'Applies an error styling to the tag. When true, the tag will display with an error state appearance.',
    },
    height: {
      control: { type: 'number' },
      description:
        'Specifies the height of the tag. Allows for customization of the tag’s vertical size.',
    },
    className: {
      control: 'text',
      description:
        'Custom CSS class name for additional styling of the tag. Enables application of custom styles.',
    },
    style: {
      control: 'object',
      description:
        'Inline CSS styles to be applied directly to the tag. Provides granular control over the tag’s appearance.',
    },
  },
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<TagProps>;
export const Default: Story = {
  args: {
    title: 'Default Tag',
  },
};

export const Closable: Story = {
  args: {
    title: 'Closable Tag',
    closable: true,
    onClose: () => alert('closed'),
  },
};
export const WithImage: Story = {
  args: {
    title: 'Tag with Image',
    imageSrc: 'https://via.placeholder.com/12',
    style: { backgroundColor: colors.primary_light_1, borderRadius: '12px' },
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Tag',
    disabled: true,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long tag title that will be truncated',
  },
};

export const CustomStyle: Story = {
  args: {
    title: 'Custom Style Tag',
    style: { backgroundColor: colors.primary_light_1, borderRadius: '12px' },
  },
};

export const ErrorState: Story = {
  args: {
    title: 'Error Tag',
    error: true,
    style: { borderColor: 'red' },
  },
};
