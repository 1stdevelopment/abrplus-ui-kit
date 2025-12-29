import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Input } from '.';
import { InputTextAreaProps } from './TextArea';
import { InputDefaultProps } from './default';
import { InputGhostProps } from './ghost';
import { InputNumberProps } from './number';
import { InputSearchProps } from './search';

export default {
  title: 'Molecules/Input',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Input** component is a versatile input field that comes in multiple variants such as Default, Ghost, Number, Search, and TextArea. Each variant caters to different input needs, from simple text entry to number-specific fields, search bars, and text areas for multiline input. It offers a wide range of customization options including size, appearance, and behavior settings.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text displayed when the input is empty.',
    },
    background: {
      control: 'color',
      description: 'Background color of the input field.',
    },
    inputSize: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field.',
    },
    lang: {
      control: 'radio',
      options: ['fa', 'en'],
      description:
        'Language direction of the input text (e.g., "fa" for Persian, "en" for English).',
    },
    error: {
      control: 'object',
      description: 'Displays an error message and styles the input with error indication.',
    },
    helperText: {
      control: 'text',
      description:
        'Helper text displayed below the input field to provide additional context or instructions.',
    },
    label: {
      control: 'text',
      description: 'Label text for the input field.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field, preventing user interaction.',
    },
    isCurrency: {
      control: 'boolean',
      description: 'If true, formats the input as a currency.',
    },
    onlyNumber: {
      control: 'boolean',
      description: 'Restricts the input to only accept numeric values.',
    },
    onChangeText: {
      action: 'onChangeText',
      description: 'Callback function triggered when the text in the input field changes.',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback function triggered when the input value changes.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the input field read-only, allowing it to be viewed but not edited.',
    },
    prefix: {
      control: 'text',
      description: 'Text or icon to display before the input content.',
    },
    suffix: {
      control: 'text',
      description: 'Text or icon to display after the input content.',
    },
    rows: {
      control: 'number',
      description: 'Number of rows for text area inputs, determining its height.',
    },
    height: {
      control: 'number',
      description: 'Specifies the height of the input field.',
    },
    min: {
      control: 'number',
      description: 'The minimum value entered by the user in input number.',
    },
    max: {
      control: 'number',
      description: 'The maximum value entered by the user in input number.',
    },
  },
  tags: ['autodocs'],
} as Meta<InputDefaultProps>;

const CustomNumber = (args: InputNumberProps) => {
  const [numberValue, setNumberValue] = useState(0);
  return (
    <Input.Number
      value={numberValue}
      onChange={setNumberValue}
      placeHolder={args.placeholder}
      background={args.background}
      onlyNumber={args.onlyNumber}
      label={args.label}
      inputSize={args.inputSize}
      error={args.error}
      helperText={args.helperText}
      lang={args.lang}
      disabled={args.disabled}
      isCurrency={args.isCurrency}
      readOnly={args.readOnly}
      prefix={args.prefix}
      suffix={args.suffix}
      height={args.height}
      min={args.min}
      max={args.max}
    />
  );
};

// Stories for InputDefault
export const InputDefaultStory: StoryObj<InputDefaultProps> = {
  name: 'Default',
  render: (args) => <Input.Default {...args} />,
  args: {
    placeholder: 'نام و نام خانوادگی',
    label: 'نام و نام خانوادگی',
    helperText: '',
  },
};

// Stories for InputGhost
export const InputGhostStory: StoryObj<InputGhostProps> = {
  name: 'Ghost',
  render: (args) => <Input.Ghost {...args} />,
  args: {
    placeholder: 'نام و نام خانوادگی',
    label: 'نام و نام خانوادگی',
    helperText: '',
  },
};

// Stories for InputNumber
export const InputNumberStory: StoryObj<InputNumberProps> = {
  name: 'Number',
  render: (args) => CustomNumber(args),
  args: {
    placeholder: 'تعداد',
    label: 'تعداد',
    onlyNumber: true,
  },
};

// Stories for InputSearch
export const InputSearchStory: StoryObj<InputSearchProps> = {
  name: 'Search',
  render: (args) => <Input.Search {...args} />,
  args: {
    placeholder: 'جستجو...',
    label: 'جستجو',
  },
};

// Stories for InputTextArea
export const InputTextAreaStory: StoryObj<InputTextAreaProps> = {
  name: 'TextArea',
  render: (args) => <Input.TextArea {...args} />,
  args: {
    placeholder: 'متن تستی',
    label: 'متن تستی',
    rows: 4,
  },
};
