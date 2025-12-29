import { InputRef } from 'antd';
import { MouseEvent, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon } from '../../../atoms/icon';
import { InputDefault, InputDefaultProps } from '../default';

export interface InputSearchProps extends InputDefaultProps {
  onIconClick?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
}

export const InputSearch = forwardRef<InputRef, InputSearchProps>(
  ({ onIconClick, ...rest }, ref) => {
    const { t } = useTranslation();
    return (
      <InputDefault
        placeholder={t('common.literal.search')}
        suffix={<Icon name="Search_header" onClick={onIconClick} />}
        ref={ref}
        hideErrorMessage
        {...rest}
      />
    );
  },
);
