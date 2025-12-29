import { Meta, StoryObj } from '@storybook/react';

import { VerticalTabs, VerticalTabsProps } from '.';
import { Text } from '../..';
import { withReactRouter } from '../../../utilities/testUtils';

export default {
  title: 'Molecules/VerticalTabs',
  component: VerticalTabs,
  decorators: [(Story) => withReactRouter(<Story />)],
  subcomponents: { Tab: VerticalTabs.Tab },
  argTypes: {
    defaultActiveTab: {
      control: 'text',
      description:
        'Determines the initially active tab by its identifier. This should match one of the tab identifiers provided in the `children` prop.',
    },
    query: {
      control: 'boolean',
      description:
        'If true, the active tab will be controlled via the URL query string. Useful for maintaining tab state across navigation.',
    },
    className: {
      control: 'text',
      description:
        'Custom CSS class name to apply to the `VerticalTabs` component for additional styling.',
    },
    transparent: {
      control: 'boolean',
      description:
        'When true, the content of the tab will have a transparent background, allowing for more flexible styling and design.',
    },
    extraNode: {
      control: 'text',
      description:
        'Additional React node rendered alongside the tab content. This can be used for extra information or controls associated with the tab.',
    },
  },
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<VerticalTabsProps>;
/**
 *  Default Tabs
 */
export const Default: Story = {
  args: {
    defaultActiveTab: 'tab1',
    children: [
      <VerticalTabs.Tab key="tab1" tab="tab1" title="Tab 1">
        <Text>This is the content of Tab 1.</Text>
      </VerticalTabs.Tab>,
      <VerticalTabs.Tab key="tab2" tab="tab2" title="Tab 2">
        <Text>This is the content of Tab 2.</Text>
      </VerticalTabs.Tab>,
      <VerticalTabs.Tab key="tab3" tab="tab3" title="Tab 3">
        <Text>This is the content of Tab 3.</Text>
      </VerticalTabs.Tab>,
    ],
  },
};

/**
 *  Transparent Tab Content
 */
export const Transparent: Story = {
  args: {
    defaultActiveTab: 'tab3',
    children: [
      <VerticalTabs.Tab key="tab1" tab="tab1" title="Tab 1" transparent>
        <Text>This is the transparent content of Tab 1.</Text>
      </VerticalTabs.Tab>,
      <VerticalTabs.Tab key="tab2" tab="tab2" title="Tab 2" transparent>
        <Text>This is the transparent content of Tab 2.</Text>
      </VerticalTabs.Tab>,
      <VerticalTabs.Tab key="tab3" tab="tab3" title="Tab 3" transparent>
        <Text>This is the transparent content of Tab 3.</Text>
      </VerticalTabs.Tab>,
    ],
  },
};
/**
 *   With Extra Node
 */
export const WithExtraNode: Story = {
  args: {
    defaultActiveTab: 'tab1',
    children: [
      <VerticalTabs.Tab
        key="tab1"
        tab="tab1"
        title="Tab 1"
        extraNode={<Text size={12}>Extra Content</Text>}
      >
        <Text>This is the content of Tab 1 with an extra node.</Text>
      </VerticalTabs.Tab>,
      <VerticalTabs.Tab key="tab2" tab="tab2" title="Tab 2">
        <Text>This is the content of Tab 2.</Text>
      </VerticalTabs.Tab>,
    ],
  },
};
