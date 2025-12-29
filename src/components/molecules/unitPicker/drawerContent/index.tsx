import { useQueryClient } from '@tanstack/react-query';
import { t } from 'i18next';
import { forwardRef, useImperativeHandle, useState } from 'react';

import { CreateUnitRequestVM, getV2UnitList, usePostV2Unit } from '@configs/global';
import { Drawer } from '@abrplus/ui';

import { UnitDrawerStateType } from '..';
import UnitDrawerContent from '../../../pages/settings/unitGroup/list/components/unitDrawer';
import { UnitAddFrom } from '../../../pages/settings/unitGroup/list/components/unitDrawer/type';

const AddUnitGroupDrawerContent = forwardRef<UnitDrawerStateType, {}>((_props, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const { handleSubmit, reset, getValues } = UnitAddFrom.useFormContext();

  const isEditMode = !!getValues('symbol') || !!getValues('nameResourceValues')?.length;

  const queryClient = useQueryClient();
  const { mutateAsync: postUnit } = usePostV2Unit({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getV2UnitList.key],
        refetchType: 'all',
        type: 'all',
      });
    },
  });

  useImperativeHandle(ref, () => ({
    setOpen: () => setOpen(true),
  }));

  const onClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data: CreateUnitRequestVM) => {
    postUnit({
      requestBody: [
        {
          id: data.id,
          nameResourceValues: data.nameResourceValues,
          symbol: data.symbol,
        },
      ],
    }).then(() => onClose());
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      width={350}
      title={isEditMode ? t('sales.literal.editUnitGroup') : t('sales.literal.addUnitGroup')}
      submitTitle={t('common.literal.save')}
      discardTitle={t('common.literal.discard')}
      onSubmit={() => {
        handleSubmit(onSubmit)();
      }}
      onDiscard={onClose}
    >
      <UnitDrawerContent />
    </Drawer>
  );
});

export default AddUnitGroupDrawerContent;
