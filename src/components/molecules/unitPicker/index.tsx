import { useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { colors, useDebounce } from '@configs';
import {
  CreateUnitRequestVM,
  UnitVM,
  getV2UnitList,
  useDeleteV2Unit,
  useGetV2UnitList,
} from '@configs/global';
import { Flex, Icon, Input, Modal, Select, SelectProps, Text, View } from '@abrplus/ui';

import { UnitAddFrom } from '../../pages/settings/unitGroup/list/components/unitDrawer/type';
import AddUnitGroupDrawerContent from './drawerContent';

type UnitType = UnitVM & CreateUnitRequestVM;
export interface UnitPickerProps {
  singleProps?: Omit<SelectProps<UnitVM, 'single'>, 'options'>;
  multipleProps?: Omit<SelectProps<UnitVM, 'multiple'>, 'options'>;
}

export interface UnitDrawerStateType {
  setOpen: (open: boolean) => void;
}

interface SelectedUnitType {
  id?: string;
  name?: string;
}

const UnitPicker = UnitAddFrom.withFormProvider(
  ({ singleProps, multipleProps }: UnitPickerProps) => {
    const [selectedUnit, setSelectedUnit] = useState<SelectedUnitType>({});
    const [searchTerm, setSearchTerm] = useState<string>();
    const [term] = useDebounce(300, searchTerm);
    const unitDrawerState = useRef<UnitDrawerStateType>(null);
    const queryClient = useQueryClient();

    const { list, isLoading, fetchNextPage, hasMore } = useGetV2UnitList({
      name: term,
    });

    const { setValue } = UnitAddFrom.useFormContext();
    const { t } = useTranslation();

    const { mutateAsync: deleteUnit, isPending } = useDeleteV2Unit({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [getV2UnitList.key],
          refetchType: 'all',
          type: 'all',
        });
        setSelectedUnit({});
      },
    });

    const header = (
      <View align="center" className="flex-1" gap={8}>
        <Input.Search
          name="search"
          placeholder={t('common.literal.search')}
          onChangeText={setSearchTerm}
          value={searchTerm}
          height={34}
          hideErrorMessage
        />
      </View>
    );
    const renderItem = (unit: UnitType) => {
      const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        setValue('nameResourceValues', unit.nameResourceValues);
        setValue('symbol', unit.symbol);
        setValue('id', unit.id);
        unitDrawerState.current?.setOpen(true);
      };

      return (
        <Flex className="group w-full px-2" justify="space-between" align="center">
          <Text color="#293955" size={'medium'} weight="medium" className="flex items-center gap-1">
            {unit.name}
            <Text color={colors.primary_light_2}>({unit.symbol})</Text>
          </Text>
          <Flex
            align="center"
            gap={8}
            className="opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Icon
              name="Edit"
              size={'medium'}
              color={colors.primary}
              onClick={(e) => handleEdit(e)}
            />
            <Icon
              name="Delete"
              size={'medium'}
              color={colors.negative}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedUnit({
                  id: unit.id,
                  name: unit.name,
                });
              }}
            />
          </Flex>
        </Flex>
      );
    };

    const Footer = () => {
      const { t } = useTranslation();
      return (
        <>
          <Text
            color={colors.secondary}
            className="flex cursor-pointer items-center gap-1"
            onClick={() => unitDrawerState.current?.setOpen(true)}
          >
            <Icon name="add" color={colors.secondary} />
            {t('sales.literal.addUnitGroup')}
          </Text>
        </>
      );
    };

    if (singleProps && Object.keys(singleProps).length > 0) {
      return (
        <>
          <Select.Single<UnitVM>
            {...singleProps}
            placeholder={t('common.message.pleaseSelect')}
            options={list}
            labelExtractor={(item) => item.name}
            valueExtractor={(item) => item.id || ''}
            loading={isLoading}
            header={header}
            renderItem={renderItem}
            footer={<Footer />}
            infinite={{ fetchNextPage, hasMore }}
          />
          <AddUnitGroupDrawerContent ref={unitDrawerState} />
          <Modal.Delete
            open={!!selectedUnit.id}
            discardTitle={t('common.literal.no')}
            submitTitle={t('common.message.yesDelete')}
            isLoadingSubmit={isPending}
            onSubmit={() => {
              deleteUnit({ requestBody: { id: selectedUnit.id } });
            }}
            onDiscard={() => setSelectedUnit({})}
          >
            {t('common.message.deleteMessage', { value: selectedUnit.name || '' })}
          </Modal.Delete>
        </>
      );
    }

    <Select.Multiple<UnitVM>
      {...multipleProps}
      options={list}
      label={t('sales.literal.category')}
      labelExtractor={(item) => item.name}
      valueExtractor={(item) => item.id || ''}
      tagExtractor={(i) => i.name}
      loading={isLoading}
      showSearch
      isLocaleSearch
    />;
  },
);

export { UnitPicker };
