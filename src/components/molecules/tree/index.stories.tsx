import { Meta, StoryFn } from '@storybook/react';

import { IconsNames } from '../../atoms/icon';
import { Tree } from '../../molecules/tree';

// TODO - HESAM - Fix Icon in Story
export default {
  title: 'molecules/Tree',
  component: Tree,
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    treeData: {
      control: { type: 'object' },
      description: 'Tree structure data',
    },
    isExpandable: {
      control: { type: 'boolean' },
      description: 'Enables expandable drawer mode',
    },
    switcherIconName: {
      control: { type: 'select', options: ['Chevron_Down', 'Chevron_Right', 'Chevron_Left'] },
      description: 'Custom icon for expanding/collapsing nodes',
    },

    titleHeader: {
      control: { type: 'text' },
      description: 'Header title for the tree component',
    },
    titleIcon: {
      control: { type: 'select', options: ['folders-outlined', 'folder-add-line', 'add'] },
      description: 'Icon for the tree header',
    },
  },
} as Meta<typeof Tree>;

// Sample Tree Data
const sampleTreeData = [
  {
    key: '1',
    name: 'Category 1',
    label: 'Category 1',
    value: '1',
    icon: 'add' as IconsNames,
    hasChildren: true,
    children: [
      {
        key: '1-1',
        name: 'Subcategory 1-1',
        label: 'Subcategory 1-1',
        value: '1-1',
        icon: 'folder_fill' as IconsNames,
        hasChildren: false,
        children: [],
      },
      {
        key: '1-2',
        name: 'Subcategory 1-2',
        label: 'Subcategory 1-2',
        value: '1-2',
        icon: 'add' as IconsNames,
        hasChildren: false,
        children: [],
      },
    ],
  },
];

// Default Tree Story
const Template: StoryFn<typeof Tree> = (args) => <Tree {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  treeData: sampleTreeData,
  isExpandable: false,
  titleHeader: 'دسته بندی گروه',
  titleIcon: 'folders-outlined',
  switcherIconName: 'Chevron_Up',
};

// Expandable Tree Story
export const Expandable = Template.bind({});
Expandable.args = {
  treeData: sampleTreeData,
  isExpandable: true,
  titleHeader: 'دسته بندی گروه',
  titleIcon: 'folders-outlined',
  switcherIconName: 'Chevron_Up',
};
