import { Meta, StoryFn } from '@storybook/react';

import { Text } from '../../antOverrides/text';
import { View, ViewProps } from './';

export default {
  title: 'Atoms/View',
  component: View,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isLoading: {
      control: 'boolean',
      description:
        'Indicates whether the component is in a loading state. When true, a loading spinner or indicator is displayed.',
    },
    error: {
      control: 'text',
      description:
        'Displays an error message when there is an issue. This message is shown when the component encounters an error.',
    },
    loadingMinHeight: {
      control: 'number',
      description:
        'Sets the minimum height for the loading spinner or indicator. Useful for maintaining layout consistency during loading states.',
    },
    loadingSize: {
      control: 'number',
      description:
        'Defines the size of the loading spinner or indicator. Adjust this value to make the spinner larger or smaller according to your needs.',
    },
    onRetry: {
      action: 'onRetry',
      description:
        'Callback function triggered when a retry action is initiated. Useful for handling retry logic when loading fails or an error occurs.',
    },
  },
  tags: ['autodocs'],
} as Meta<ViewProps>;

const Template: StoryFn<ViewProps> = (args) => <View {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Default View Content</Text>,
};
/**
 * when loading
 */
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  loadingMinHeight: 200,
  loadingSize: 40,
};
/**
 *when error accrued
 */
export const Error = Template.bind({});
Error.args = {
  error: 'An error occurred!',
  loadingMinHeight: 200,
  onRetry: () => alert('Retry clicked'),
};
