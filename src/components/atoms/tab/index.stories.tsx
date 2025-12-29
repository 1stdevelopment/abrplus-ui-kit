import { Meta, StoryFn } from '@storybook/react';
import { NavigationTabs, Text } from '../..'; // Adjust the path as necessary

export default {
  title: 'Atoms/NavigationTabs',
  component: NavigationTabs,
  parameters: {
    layout: 'centered',
  },
  args: {
    spaceBetweenTabs: 24,
    tabFontSize: 18,
  },
  argTypes: {
    onChange: {
      action: 'changed',
      description:
        'Callback function triggered when a change event occurs. Useful for handling user interactions or updates.',
    },
    activeStyleMode: {
      control: 'select',
      description:
        'Defines the style applied to the active tab. Choose from "underlined" for an underline effect, "background" for a background color change, or "textGlow" for a glowing text effect.',
      options: ['underlined', 'background', 'textGlow'],
    },
  },
  tags: ['autodocs'],
} as Meta<typeof NavigationTabs>;

const Template: StoryFn<typeof NavigationTabs> = (args) => <NavigationTabs {...args} />;
/**
 * default tab
 */
export const Default = Template.bind({});
Default.args = {
  defaultTabKey: 'tab1',
  children: [
    <NavigationTabs.Tab key="tab1" tabKey="tab1" title="Tab 1">
      <Text>Content for Tab 1</Text>
    </NavigationTabs.Tab>,
    <NavigationTabs.Tab key="tab2" tabKey="tab2" title="Tab 2">
      <Text>Content for Tab 2</Text>
    </NavigationTabs.Tab>,
    <NavigationTabs.Tab key="tab3" tabKey="tab3" title="Tab 3">
      <Text>Content for Tab 3</Text>
    </NavigationTabs.Tab>,
  ],
};
/**
 * desired styles
 */
export const CustomStyles = Template.bind({});
CustomStyles.args = {
  defaultTabKey: 'tab1',
  activeStyleMode: 'underlined',
  wrapperClassName: 'bg-gray-100 p-4',
  tabsWrapperStyle: { backgroundColor: '#f0f0f0' },
  tabClassName: 'text-blue-500',
  children: [
    <NavigationTabs.Tab key="tab1" tabKey="tab1" title="Styled Tab 1">
      <Text>Styled content for Tab 1</Text>
    </NavigationTabs.Tab>,
    <NavigationTabs.Tab key="tab2" tabKey="tab2" title="Styled Tab 2">
      <Text>Styled content for Tab 2</Text>
    </NavigationTabs.Tab>,
    <NavigationTabs.Tab key="tab3" tabKey="tab3" title="Styled Tab 3">
      <Text>Styled content for Tab 3</Text>
    </NavigationTabs.Tab>,
  ],
};
/**
 * render node before or after
 */
export const WithExtras = Template.bind({});
WithExtras.args = {
  defaultTabKey: 'tab1',
  extraBeforeItem: <Text>Before Tabs</Text>,
  extraAfterItem: <Text>After Tabs</Text>,
  children: [
    <NavigationTabs.Tab key="tab1" tabKey="tab1" title="Tab 1">
      <Text>Content for Tab 1</Text>
    </NavigationTabs.Tab>,
    <NavigationTabs.Tab key="tab2" tabKey="tab2" title="Tab 2">
      <Text>Content for Tab 2</Text>
    </NavigationTabs.Tab>,
  ],
};
/**
 * dynamic tab
 */
export const DynamicTabs = Template.bind({});
DynamicTabs.args = {
  defaultTabKey: 'tab1',
  children: [
    <NavigationTabs.Tab
      key="tab1"
      tabKey="tab1"
      title={(color) => <Text style={{ color }}>Dynamic Tab 1</Text>}
    >
      <Text>Dynamic content for Tab 1</Text>
    </NavigationTabs.Tab>,
    <NavigationTabs.Tab
      key="tab2"
      tabKey="tab2"
      title={(color) => <Text style={{ color }}>Dynamic Tab 2</Text>}
    >
      <Text>Dynamic content for Tab 2</Text>
    </NavigationTabs.Tab>,
  ],
};
