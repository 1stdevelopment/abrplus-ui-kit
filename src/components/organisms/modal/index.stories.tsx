// Modal.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal } from '.';
import { Button } from '../../molecules';

/**
 * Default export for Storybook
 */
export default {
  title: 'Organisms/Modals',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the modal.',
    },
    children: {
      control: 'text',
      description: 'The content displayed inside the modal.',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback function triggered on submit.',
    },
    onDiscard: {
      action: 'discarded',
      description: 'Callback function triggered on discard.',
    },
    submitTitle: {
      control: 'text',
      defaultValue: 'Submit',
      description: 'The text displayed on the submit button.',
    },
    discardTitle: {
      control: 'text',
      defaultValue: 'Discard',
      description: 'The text displayed on the discard button.',
    },
    isLoadingSubmit: {
      control: 'boolean',
      description: 'Determines if the submit button is in a loading state.',
    },
    error: {
      control: 'text',
      description: 'Error message displayed in the modal.',
    },
    visible: {
      control: 'boolean',
      description: 'Controls whether the modal is open or closed.',
    },
  },
  tags: ['autodocs'],
} as Meta;

/**
 * Template component to render each Modal story with a button to open it.
 */
const Template = (ModalComponent: any) => {
  return (args: any) => {
    const RenderTemplate = () => {
      const [isVisible, setIsVisible] = useState(false);

      return (
        <>
          <Button.Primary onClick={() => setIsVisible(true)}>Open Modal</Button.Primary>
          <ModalComponent
            {...args}
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            onSubmit={() => {
              args.onSubmit();
              setIsVisible(false);
            }}
            onDiscard={() => {
              args.onDiscard();
              setIsVisible(false);
            }}
          />
        </>
      );
    };
    return <RenderTemplate />;
  };
};

/**
 * Story for BaseModal
 */
export const Base: StoryObj = {
  name: 'Default',
  render: Template(Modal.Base),
  args: {
    title: 'مودال تستی',
    children: 'این یک متن تستی است',
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **BaseModal** is a foundational component for creating modals with custom content.',
      },
    },
  },
};

/**
 * Story for ConfirmModal
 */
export const Confirm: StoryObj = {
  name: 'ConfirmModal',
  render: Template(Modal.Confirm),
  args: {
    title: 'مودال تایید',
    children: 'آیا از انجام این کار مطمئن هستید؟',
    submitTitle: 'تایید',
    discardTitle: 'لغو',
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **ConfirmModal** is used to confirm user actions with two choices: confirm or cancel.',
      },
    },
  },
};

/**
 * Story for ErrorModal
 */
export const Error: StoryObj = {
  name: 'ErrorModal',
  render: Template(Modal.Error),
  args: {
    title: 'خطا',
    children: 'خطای غیر منتظره ای رخ داد',
    submitTitle: 'بازگشت',
    visible: false,
    isLoadingSubmit: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **ErrorModal** displays error messages and provides a single action button to dismiss.',
      },
    },
  },
};

/**
 * Story for DeleteModal
 */
export const Delete: StoryObj = {
  name: 'DeleteModal',
  render: Template(Modal.Delete),
  args: {
    title: 'حذف آیتم',
    children: 'آیا از حذف این آیتم اطمینان دارید؟',
    submitTitle: 'حذف',
    discardTitle: 'لغو',
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **DeleteModal** prompts the user for confirmation before performing a destructive action.',
      },
    },
  },
};

/**
 * Story for InfoModal
 */
export const Info: StoryObj = {
  name: 'InfoModal',
  render: Template(Modal.Info),
  args: {
    title: 'اطلاعیه',
    children: 'این یک متن تستی برای اطلاعیه است',
    submitTitle: 'تایید',
    discardTitle: 'بازگشت',
    visible: false,
    isLoadingSubmit: false,
    error: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'The **InfoModal** is used to display information with optional action buttons.',
      },
    },
  },
};
