import { Meta, StoryFn } from '@storybook/react';

import { Text, TextProps } from '.';

const meta: Meta<TextProps> = {
  title: 'AntOverrides/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'small', 'normal', 'medium', 'large'],
      description:
        'Sets the font size of the text. Options range from "tiny" for very small text to "large" for larger text.',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'bold'],
      description:
        'Determines the font weight. Options include "light", "normal", "medium", and "bold" to adjust text thickness.',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description:
        'Specifies the position of any associated icon. Options are "start" to place the icon before the text, or "end" to place it after.',
    },
    transform: {
      control: 'select',
      options: ['lowercase', 'uppercase'],
      description:
        'Controls text transformation. "lowercase" converts all text to lowercase, while "uppercase" converts it to uppercase.',
    },
    color: {
      control: 'color',
      description:
        'Sets the text color. Use any valid CSS color value to customize the appearance of the text.',
    },
    children: {
      control: 'text',
      description:
        'The text content to be displayed. This is where you provide the actual text string or content to be rendered.',
    },
    underlineAsLink: {
      control: 'boolean',
      description:
        'When set to true, the text is styled to look like a link (underlined). Useful for indicating clickable text.',
    },
    colon: {
      control: 'boolean',
      description:
        'Determines whether a colon should be appended to the text. Useful for labeling or format purposes.',
    },
    lineClamp: {
      control: 'number',
      description:
        'Limits the number of lines the text can occupy. If the text exceeds this number of lines, it will be truncated.',
    },
    numberOfLines: {
      control: 'number',
      description:
        'Specifies the maximum number of lines to display before truncating the text. Works in conjunction with `lineClamp`.',
    },
    showTooltipOnTruncate: {
      control: 'boolean',
      description:
        'Displays a tooltip with the full text when the text is truncated. Useful for providing additional context.',
    },
    onClick: {
      action: 'clicked',
      description:
        'Callback function triggered when the text is clicked. Useful for handling click events on the text element.',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Text',
  size: 'normal',
  weight: 'normal',
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
  children: 'Text with Icon at Start',
  size: 'medium',
  weight: 'bold',
  iconName: 'Alert',
  iconPosition: 'start',
};

export const LinkText = Template.bind({});
LinkText.args = {
  children: 'Link Text',
  size: 'normal',
  weight: 'normal',
  lang: 'en',
  as: 'link',
  underlineAsLink: true,
};

export const TruncatedText = Template.bind({});
TruncatedText.args = {
  children: 'This is a long text that will be truncated if it exceeds the container width.',
  size: 'normal',
  weight: 'normal',
  lang: 'en',
  numberOfLines: 1,
  showTooltipOnTruncate: true,
  className: 'w-16',
};

export const PersianText = Template.bind({});
PersianText.args = {
  children: 'نمونه متن به زبان فارسی',
  size: 'medium',
  weight: 'bold',
  lang: 'fa',
};
export const WithOnclick = Template.bind({});
WithOnclick.args = {
  children: 'click me...',
  onClick: () => alert('clicked'),
};
