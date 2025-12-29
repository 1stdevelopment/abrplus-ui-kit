// src/components/molecules/ExternalView/ExternalView.stories.tsx
import { Meta, StoryObj } from '@storybook/react';

import { ExternalView, ExternalViewProps } from '.';
import { withReactRouter } from '../../../utilities/testUtils';

// Meta configuration for Storybook
export default {
  title: 'Molecules/Frame',
  component: ExternalView,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **ExternalView** component is designed to display content from an external URL within an iframe. This is useful for embedding third-party content or displaying settings and menu items hosted on a different domain or within a different context.',
      },
    },
  },
  decorators: [(Story) => withReactRouter(<Story />)],
  argTypes: {
    source: {
      control: 'select',
      options: ['menu', 'settings'],
      description:
        'Defines the source of the view to control the context or type of content being displayed.',
    },
    externalUrl: {
      control: 'text',
      description:
        'The URL that will be loaded into the iframe. This allows dynamic content to be shown based on user interaction or configuration.',
    },
    externalQueryString: {
      control: 'text',
      description:
        'Optional query string parameters to append to the external URL, enabling more customized or targeted content to be displayed.',
    },
  },
  tags: ['autodocs'],
} as Meta<ExternalViewProps>;

type Story = StoryObj<ExternalViewProps>;

// Default Story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    source: 'menu',
    externalUrl: 'https://www.google.com',
    externalQueryString: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default story for the `ExternalView` component. It demonstrates embedding an external URL (e.g., Google) in an iframe without any additional query string parameters.',
      },
    },
  },
};

// Additional Story for testing different query strings
export const WithQueryString: Story = {
  name: 'WithQueryString',
  args: {
    source: 'settings',
    externalUrl: 'https://www.google.com',
    externalQueryString: 'param1=value1&param2=value2',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the `ExternalView` component with query string parameters appended to the URL, allowing for more dynamic and customized content display.',
      },
    },
  },
};
