import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { teamRoutes } from '@configs';
import {
  CrmObjectTypeQuickAddResponseVM,
  useGetV1CrmObjectTypeListQuickAdd,
} from '@configs/crmObject';
import { Clickable, Flex, Icon, IconsNames, Popover, Text, View } from '@abrplus/ui';

import { ModalQuickAdd } from './modal';

export const AddHeader = () => {
  const { t } = useTranslation();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CrmObjectTypeQuickAddResponseVM | undefined>(
    undefined,
  );
  const { data, isLoading } = useGetV1CrmObjectTypeListQuickAdd({
    enabled: isPopoverOpen,
    staleTime: 60000,
  });

  const navigate = useNavigate();

  const handleSelectItem = (item?: CrmObjectTypeQuickAddResponseVM) => {
    if (window.electron && item?.crmObjectTypeIndex) {
      navigate(
        teamRoutes.workOffice.externalView.create({
          query: {
            title: item.localizedName,
            crmOT: item?.crmObjectTypeIndex,
            type: 'add',
          },
        }),
      );
    } else {
      setSelectedItem(item);
    }

    setIsPopoverOpen(false);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      <Popover
        placement="bottom"
        overlayInnerClassName="!p-0 rounded overflow-hidden"
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        trigger={'click'}
        content={
          <View
            isLoading={isLoading}
            vertical
            className="small-custom-scrollbar max-h-[200px] w-[200px] overflow-y-auto"
          >
            {data?.length ? (
              data.map((d) => (
                <Flex
                  key={d.localizedName}
                  onClick={() => handleSelectItem(d)}
                  gap={4}
                  className="hover:bg-light-4 cursor-pointer p-2"
                >
                  <Icon name={d.iconName as IconsNames} />
                  <Text>{d.localizedName}</Text>
                </Flex>
              ))
            ) : (
              <Text className="text-primary p-2">{t('common.error.noItem')}</Text>
            )}
          </View>
        }
      >
        <Clickable onClick={togglePopover}>
          <Icon name="add_square" />
        </Clickable>
      </Popover>

      {selectedItem && <ModalQuickAdd selectedItem={selectedItem} toggle={handleSelectItem} />}
    </>
  );
};
