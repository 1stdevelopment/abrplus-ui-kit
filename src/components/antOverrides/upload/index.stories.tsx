// src/components/Upload/Upload.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { UploadProps as AntUploadProps, Button } from 'antd';

import { Upload } from '.';

export default {
  title: 'AntOverrides/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    action: { control: 'text', description: 'The URL or function to handle the file upload' },
    headers: { control: 'object', description: 'Set request headers' },
    accept: { control: 'text', description: 'File types that can be accepted' },
    disabled: { control: 'boolean', description: 'Disable the upload button' },
    directory: { control: 'boolean', description: 'Allow selecting a directory' },
    showUploadList: { control: 'boolean', description: 'Show the upload list' },
  },
} as Meta;

const customRequest = async (options: any) => {
  try {
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const { file } = options;

        if (file) {
          if (file.name.endsWith('.xlsx')) {
            resolve();
          } else {
            reject(new Error('Only .xlsx files are allowed'));
          }
        } else {
          reject(new Error('No file provided'));
        }
      }, 2000);
    });
  } catch (err) {
    alert((err as Error).message);
  }
};
type Story = StoryObj<AntUploadProps>;
export const Default: Story = {
  args: {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    children: <Button>Click to Upload</Button>,
  },
};

export const DisabledUpload: Story = {
  args: {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    disabled: true,
    children: <Button>Upload (Disabled)</Button>,
  },
};

export const AcceptOnlyImages: Story = {
  args: {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    accept: 'image/*',
    children: <Button>Upload Image</Button>,
  },
};
/**
 * Get Just Directory
 */
export const DirectoryUpload: Story = {
  args: {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    directory: true,
    children: <Button>Upload Directory</Button>,
  },
};
/**
 * Get Just Excel file
 */
export const CustomRequestExample: Story = {
  args: {
    customRequest,
    children: <Button>Click to Upload</Button>,
  },
};
