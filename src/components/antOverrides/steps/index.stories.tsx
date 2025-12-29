import { Meta, StoryFn } from '@storybook/react';
import { StepsProps } from 'antd';

import { Steps } from '.';
import { Flex } from '../flex';

const meta: Meta<StepsProps> = {
  title: 'AntOverrides/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'navigation', 'inline'],
      description:
        'Defines the style of the steps. Choose between "default" for a standard step layout, "navigation" for a navigation-oriented display, or "inline" for a compact, inline arrangement.',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        'Specifies the direction of the steps. Select "horizontal" for a left-to-right layout or "vertical" for a top-to-bottom arrangement.',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description:
        'Sets the size of the steps. "default" provides a standard size, while "small" adjusts the steps to a more compact size.',
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
      description:
        'Indicates the status of each step. Choose from "wait" for uncompleted steps, "process" for steps in progress, "finish" for completed steps, or "error" for steps that encountered an issue.',
    },
    current: {
      control: 'number',
      description:
        'Determines the index of the current step. This controls which step is highlighted as the active or ongoing step.',
    },
    progressDot: {
      control: 'boolean',
      description:
        'Enables or disables the progress dot feature. When true, dots will appear on the steps to indicate progress visually.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Default Steps Example
export const DefaultSteps: StoryFn<StepsProps> = (args) => (
  <Steps {...args}>
    <Steps.Step title="Step 1" description="Description for Step 1" />
    <Steps.Step title="Step 2" description="Description for Step 2" />
    <Steps.Step title="Step 3" description="Description for Step 3" />
  </Steps>
);

DefaultSteps.args = {
  current: 1,
  direction: 'horizontal',
  size: 'default',
  status: 'process',
};

// Vertical Steps Example
export const VerticalSteps: StoryFn<StepsProps> = (args) => (
  <Flex style={{ direction: 'ltr' }}>
    <Steps {...args}>
      <Steps.Step title="Step 1" description="Description for Step 1" />
      <Steps.Step title="Step 2" description="Description for Step 2" />
      <Steps.Step title="Step 3" description="Description for Step 3" />
    </Steps>
  </Flex>
);

VerticalSteps.args = {
  current: 0,
  direction: 'vertical',
  size: 'default',
  status: 'wait',
};

// Small Size Steps Example
export const SmallSteps: StoryFn<StepsProps> = (args) => (
  <Steps {...args}>
    <Steps.Step title="Step 1" description="Description for Step 1" />
    <Steps.Step title="Step 2" description="Description for Step 2" />
    <Steps.Step title="Step 3" description="Description for Step 3" />
  </Steps>
);

SmallSteps.args = {
  current: 1,
  direction: 'horizontal',
  size: 'small',
  status: 'process',
};

// Navigation Steps Example
export const NavigationSteps: StoryFn<StepsProps> = (args) => (
  <Steps {...args} type="navigation">
    <Steps.Step title="Step 1" description="Description for Step 1" />
    <Steps.Step title="Step 2" description="Description for Step 2" />
    <Steps.Step title="Step 3" description="Description for Step 3" />
  </Steps>
);

NavigationSteps.args = {
  current: 2,
  direction: 'horizontal',
  size: 'default',
  status: 'finish',
};
