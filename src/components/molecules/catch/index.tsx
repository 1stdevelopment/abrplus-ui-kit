import { ClientError, colors } from '@configs';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../antOverrides';
import { Render } from '../../atoms';

export interface CatchProps {
  children: React.ReactNode;
  error: ClientError;
  retry?: () => void;
}

const Catch = ({ children, error, retry }: CatchProps) => {
  const { t } = useTranslation();

  if (error) {
    return (
      <div className="flex h-[calc(100%-56px)] w-full p-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden">
          <Text color={colors.negative_light_1}>{t('common.literal.serverError')}</Text>
          <Render when={Boolean(retry)}>
            <button
              onClick={retry}
              className="rounded bg-primary px-4 py-2 shadow-sm hover:bg-primary-dark-1"
            >
              <Text color={colors.white_ff}>{t('common.message.tryAgain')}</Text>
            </button>
          </Render>
        </div>
      </div>
    );
  }

  return <Fragment>{children}</Fragment>;
};

export { Catch };
