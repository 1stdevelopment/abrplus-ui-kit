import { colors } from '@configs';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ConfigProvider } from 'antd';
import React from 'react';
import { useNotification } from '.';

const meta: Meta = {
  title: 'molecules/useNotification',

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * Type of Notification
 */
const NotificationExample: React.FC = () => {
  const {
    success,
    neutral,
    negative,
    informative,
    successfullyAdded,
    successfullyEdited,
    successfullyDeleted,
    copied,
    error,
  } = useNotification();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Button onClick={() => success({ message: 'Success Notification' })}>
          Trigger Success
        </Button>
        <Button onClick={() => neutral({ message: 'Neutral Notification' })}>
          Trigger Neutral
        </Button>
        <Button onClick={() => negative({ message: 'Negative Notification' })}>
          Trigger Negative
        </Button>
        <Button onClick={() => informative({ message: 'Informative Notification' })}>
          Trigger Informative
        </Button>
        <Button onClick={() => successfullyAdded()}>Trigger Successfully Added</Button>
        <Button onClick={() => successfullyEdited()}>Trigger Successfully Edited</Button>
        <Button onClick={() => successfullyDeleted()}>Trigger Successfully Deleted</Button>
        <Button onClick={() => copied()}>Trigger Copied</Button>
        <Button onClick={() => error('Custom Error Message')}>Trigger Error</Button>
      </div>
    </ConfigProvider>
  );
};

export const Default: StoryFn = () => <NotificationExample />;
