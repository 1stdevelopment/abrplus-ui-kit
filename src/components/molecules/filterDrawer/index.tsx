import React, { useRef } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useObserveWindow } from '@configs';

import { Drawer, DrawerProps, Flex } from '../..';
import { FilterItem, FilterItemProps } from './filterItem';

export interface FilterDrawerProps extends DrawerProps {
  children: React.ReactElement<FilterItemProps>[];
  onFilter?: () => void;
  onClear?: () => void;
  hasCheckbox?: boolean;
  top?: number;
}

const FilterDrawer = ({
  children,
  onClose,
  open,
  onFilter,
  onClear,
  top,
  hasCheckbox,
  ...rest
}: FilterDrawerProps) => {
  const { t } = useTranslation();
  const methods = useFormContext();
  const { isSmallerThanSmall } = useObserveWindow();

  const handleReset = () => {
    methods.reset({});
    onClear?.();
    onClose?.();
  };
  const handleFinish = () => {
    onFilter?.();
    onClose?.();
  };
  return (
    <Drawer
      placement="left"
      width={isSmallerThanSmall ? '100%' : 333}
      open={open}
      onClose={onClose}
      closable={isSmallerThanSmall}
      styles={{
        mask: {
          backgroundColor: 'transparent',
        },
      }}
      rootStyle={
        !isSmallerThanSmall
          ? {
              position: 'absolute',
              top,
            }
          : undefined
      }
      contentWrapperStyle={{
        borderTopRightRadius: 10,
      }}
      classNames={{ body: 'small-custom-scrollbar' }}
      wrapperClassName="bg-white-ff p-0"
      headerHeight={42}
      destroyOnClose={false}
      title={t('common.literal.filter')}
      submitTitle={t('common.literal.applyFilter')}
      discardTitle={t('common.literal.erase')}
      onDiscard={handleReset}
      onSubmit={handleFinish}
      {...rest}
    >
      <Flex vertical className="flex-1 overflow-auto">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            hasCheckbox: hasCheckbox ?? React.Children.count(children) > 5,
            name: index.toString(),
          });
        })}
      </Flex>
    </Drawer>
  );
};

const Parent = (props: FilterDrawerProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <FilterDrawer {...props} />
    </FormProvider>
  );
};

const useCalculateTop = () => {
  const ref = useRef<HTMLElement>(null);

  return {
    /**
     * pass this ref to the wrapper of your component that you want drawer opens from.
     * ```
     */
    ref,
    /**
     * pass this property to the FilterDrawer component.
     * ```
     */
    top: ref.current?.offsetTop,
  };
};
Parent.Item = FilterItem;
Parent.useCalculateTop = useCalculateTop;
export { Parent as FilterDrawer };
