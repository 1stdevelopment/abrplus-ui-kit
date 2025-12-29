import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import {
  UserStatus,
  useGetGeneralGetSubStatusList,
  usePostGeneralSetUserStatus,
} from '@configs/global';

import i18next from 'i18next';
import { RenderPopup } from '../../../../core/constants/enum';
import { Flex, Text } from '../../../antOverrides';
import { Icon } from '../../../atoms';
import { userItemStatus } from '../userStatusColors';

const UserStatusRender = ({
  setShowStatus,
  userStatus = UserStatus.Available,
}: {
  setShowStatus: (value: RenderPopup) => void;
  userStatus?: UserStatus;
}) => {
  const { t } = useTranslation();
  const [statusId, setStatusId] = useState<number | undefined>(undefined);
  const { data: statusList } = useGetGeneralGetSubStatusList({});
  const { mutate } = usePostGeneralSetUserStatus({
    onError: () => setStatusId(undefined),
  });
  return (
    <Flex vertical className="bg-white-ff border-light-7 w-[220px] rounded border">
      <Flex className="border-light-7 gap-2 border-b py-3 pl-4 pr-3">
        <Icon
          onClick={() => setShowStatus(RenderPopup.user_info)}
          className="cursor-pointer"
          name={i18next.language === 'fa' ? 'Chevron_Right' : 'Chevron_Left'}
        />
        <Text>{t('common.literal.status')}</Text>
      </Flex>

      <Flex className="flex-col">
        {statusList?.map((item) => {
          return (
            <Flex
              key={item.id}
              onClick={() => {
                setStatusId(item.id);
                mutate({ queryParams: { statusId: item.id } });
              }}
              className="hover:bg-light-1 cursor-pointer justify-between px-4 py-2"
              style={{
                background: item.id === statusId ? colors.light_1 : '',
              }}
            >
              <Flex className="items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: userItemStatus[item?.userStatus || UserStatus.Available],
                  }}
                />
                <Text>{item.name}</Text>
              </Flex>
              {userStatus === item.userStatus && <Icon name="Checkmark" />}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export { UserStatusRender };
