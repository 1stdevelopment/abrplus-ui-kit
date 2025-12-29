import { Meta, StoryFn } from '@storybook/react';
import { PaginationProps } from 'antd';
import { useState } from 'react';

import { Pagination } from '.';

const meta: Meta<PaginationProps> = {
  title: 'AntOverrides/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description:
        'Specifies the size of the pagination component. Choose between "default" and "small" to adjust the pagination control’s size.',
    },
    showQuickJumper: {
      control: 'boolean',
      description:
        'Enables or disables the quick jumper feature, which allows users to jump to a specific page number directly.',
    },
    responsive: {
      control: 'boolean',
      description:
        'Determines whether the pagination component should adapt its layout for different screen sizes, improving responsiveness.',
    },
    role: {
      control: 'text',
      description:
        'Defines the role attribute for accessibility purposes. This attribute helps assistive technologies understand the component’s purpose.',
    },
    totalBoundaryShowSizeChanger: {
      control: 'number',
      description:
        'Sets the maximum number of pagination controls to be shown when the total number of items exceeds this value. Use this to control pagination display boundaries.',
    },
    rootClassName: {
      control: 'text',
      description:
        'Allows you to apply custom CSS class names to the root element of the pagination component, enabling further styling customization.',
    },
    className: {
      control: 'text',
      description:
        'Provides a CSS class name that can be applied to the pagination component for additional styling and layout adjustments.',
    },
    onChange: {
      action: 'changed',
      description:
        'Action triggered when the page changes. This callback function is useful for handling pagination events and updating the content accordingly.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<PaginationProps> = (args) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, pageSize?: number) => {
    setCurrent(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  return <Pagination {...args} current={current} pageSize={pageSize} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  total: 100,
  showQuickJumper: true,
  showSizeChanger: true,
};
