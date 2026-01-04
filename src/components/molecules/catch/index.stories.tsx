import { ClientError } from '@configs';
import type { Meta, StoryObj } from '@storybook/react';

import { Catch, CatchProps } from '.';

const defaultError: ClientError = {
  message: 'An unexpected error occurred.',
  isApiException: true,
  name: 'InternalRequestError',
};

/* -------------------------------------------------------------------------- */
const meta: Meta<CatchProps> = {
  title: 'Atoms/Catch',
  component: Catch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Catch** component is designed to handle and display error states within the application. It provides a standardized way to catch errors and display a user-friendly message or interface, along with an optional retry function to attempt the operation again. This is particularly useful for handling API exceptions or any operational errors gracefully.',
      },
    },
  },
  argTypes: {
    error: {
      description:
        'The error object to display. This object should contain information about the error, such as the message and error type, which will be displayed to the user.',
      control: 'object',
    },
    retry: {
      description:
        'Function to retry the operation after an error occurs. This allows users to attempt the action again, providing a better user experience in case of recoverable errors.',
      action: 'retried',
    },
    children: {
      control: 'text',
      description:
        'Content to display when there is no error. This represents the normal content of the application when no errors are present.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CatchProps>;

/* -------------------------------------------------------------------------- */

// Story with Retry
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    error: defaultError,
    retry: () => alert('Retry clicked!'),
    children: 'Some content here',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **With Retry** story demonstrates the Catch component with an error state and a retry button. This allows users to see how the component handles errors and provides an option to retry the failed operation.',
      },
    },
  },
};

// Story without Error
export const WithoutErrorStory: Story = {
  name: 'Without Error',
  args: {
    error: null as unknown as ClientError,
    retry: undefined,
    children: 'Content without error',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Without Error** story shows the Catch component in a normal state without any errors. This demonstrates how the component behaves when there is no error, simply displaying the provided content.',
      },
    },
  },
};
