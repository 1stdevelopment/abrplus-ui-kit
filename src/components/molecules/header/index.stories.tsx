// src/components/Header/Header.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { withReactQuery, withReactRouter } from '../../../utilities/testUtils';

import { Header, HeaderProps } from '.';

// Create a new QueryClient instance

export default {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'The **Header** component is a versatile navigation component designed to be used at the top of the application. It can be fixed to the top of the viewport or scroll with the page content, depending on the `isFixed` prop. The component supports various content configurations and is often used to display navigation links, branding, or user profile information.',
      },
    },
  },
  decorators: [(Story) => withReactRouter(withReactQuery(<Story />))],
  argTypes: {
    isFixed: {
      control: 'boolean',
      description:
        'Determines whether the header is fixed at the top of the viewport or scrolls with the page content. When `true`, the header stays fixed at the top of the window; when `false`, it scrolls away with the rest of the content.',
    },
  },
  tags: ['autodocs'],
} as Meta<HeaderProps>;

// Default story configuration for Header component
export const DefaultStory: StoryObj<HeaderProps> = {
  name: 'Default',
  args: {
    isFixed: false, // By default, the header scrolls with the page content
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default configuration of the `Header` component. It is not fixed by default, meaning it will scroll away with the content. This configuration is ideal for pages where the header does not need to remain visible at all times.',
      },
    },
  },
};
