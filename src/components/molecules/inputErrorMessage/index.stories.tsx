import { colors } from '@configs';
import { Meta, StoryObj } from '@storybook/react';
import { ErrorProps, InputErrorMessage } from '.';

// Default export with Storybook metadata
export default {
  title: 'Molecules/InputErrorMessage',
  component: InputErrorMessage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **InputErrorMessage** component is used to display error messages associated with form input fields. It provides a consistent way to show validation errors or any other messages to users, ensuring a clear and accessible user interface. The component allows customization of the text message and color, providing flexibility to match different design systems or themes.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'The name of the input field associated with the error message. Useful for form validation libraries.',
    },
    children: {
      control: 'text',
      description:
        'The content to be displayed inside the error message component. This could be additional text or elements.',
    },
    message: {
      control: 'text',
      description: 'The main error message text to display.',
    },
    textColor: {
      control: 'color',
      description:
        'Custom color for the error message text. Can be set to match the theme of the application.',
    },
    testID: {
      control: 'text',
      description: 'An optional test ID for targeting the component in tests.',
    },
  },
  tags: ['autodocs'],
} as Meta<ErrorProps>;

type Story = StoryObj<ErrorProps>;

// Default story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    message: 'This is an error message',
    textColor: colors.negative, // Or any other color you want to use
  },
};
