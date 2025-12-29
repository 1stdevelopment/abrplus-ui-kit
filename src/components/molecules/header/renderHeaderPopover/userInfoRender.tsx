import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  MediaDevicesStore,
  colors,
  resolveUserProfileUrl,
  scopedRoutes,
  useImageFromFileId,
  userManager,
} from '@configs';
import {
  UserCurrentStatusVM,
  UserStatus,
  useGetGeneralGenerateListenKey,
} from '@configs/global';

import { RenderPopup } from '../../../../core/constants/enum';
import { Render } from '../../../../utilities';
import { Avatar, Flex, Loading, Text } from '../../../antOverrides';
import { Icon } from '../../../atoms';
import { userItemStatus } from '../userStatusColors';

interface Props {
  setShowStatus: (item: RenderPopup) => void;
  fileId: string;
  isUserLoading: boolean;
  email: string;
  username?: string;
  userStatus?: UserCurrentStatusVM | undefined;
}

const UserInfoRender = ({
  setShowStatus,
  fileId,
  isUserLoading,
  email,
  username,
  userStatus,
}: Props) => {
  const { t, i18n } = useTranslation();
  const { imageSrc } = useImageFromFileId({ fileId });

  const setDefaultNotShowAgain = () => {
    const localStorageData = localStorage.getItem('selectedMediaDevices');
    if (!localStorageData) return;
    const selectedMediaDevices = JSON.parse(localStorageData) as { state: MediaDevicesStore };
    selectedMediaDevices.state.permanentNotShowAgain = false;
    selectedMediaDevices.state.temporaryNotShowAgain = false;
    const stringifiedSelectedMediaDevices = JSON.stringify(selectedMediaDevices);
    localStorage.setItem('selectedMediaDevices', stringifiedSelectedMediaDevices);
  };

  const { data: listenKey } = useGetGeneralGenerateListenKey();

  const linkToResolver = (query: { tab: 'profile' | 'settings' | 'password' | 'calender' }) => {
    // If you want to develop on local in cloud app you should remove __LOCALHOST__: after we fix our env remove __LOCALHOST__ and it works correctly
    return __PLATFORM__ === 'onprem' || __LOCALHOST__
      ? {
          to: scopedRoutes.userWorkspaceProfile.create({ query }),
        }
      : {
          to: '#',
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = resolveUserProfileUrl({ domainId: listenKey?.domainId });
          },
        };
  };
  return (
    <>
      <Flex className="p-4">
        <Link className="flex w-full justify-between" {...linkToResolver({ tab: 'profile' })}>
          <Render
            when={!isUserLoading}
            fallback={<Loading size={0.3} color={colors.primary_light_2} />}
          >
            <Avatar
              icon={<Icon name="User" />}
              className="border-light-7 border"
              src={imageSrc}
              size={40}
              shape="circle"
            />
          </Render>
          <Flex className="flex-col">
            <Text size={14}>{username}</Text>
            <Text color={colors.secondary} size={12}>
              {email}
            </Text>
          </Flex>
          <Icon name={i18n.language === 'fa' ? 'Chevron_Left' : 'Chevron_Right'} />
        </Link>
      </Flex>
      <Flex
        onClick={() => setShowStatus(RenderPopup.user_status)}
        className="border-light-7 cursor-pointer justify-between border-y px-4 py-2"
      >
        <Flex className="items-center gap-2">
          <div
            style={{
              background: userItemStatus[userStatus?.userStatus || UserStatus.Available],
            }}
            className="mb-1 h-2 w-2 rounded-full"
          />

          <Text className="mb-0.5 line-clamp-1 max-w-[120px]">{userStatus?.subStatusName}</Text>
        </Flex>
        <Icon name={i18n.language === 'fa' ? 'Chevron_Left' : 'Chevron_Right'} />
      </Flex>
      <Flex
        onClick={() => setShowStatus(RenderPopup.user_lang)}
        className="border-light-7 cursor-pointer justify-between border-b py-2 pl-4 pr-3"
      >
        <Flex className="items-center gap-2">
          <Icon size={16} name="localize" color={colors.secondary} />
          <Text>{i18n.language === 'fa' ? 'فارسی' : 'English'}</Text>
        </Flex>
        <Icon name={i18n.language === 'fa' ? 'Chevron_Left' : 'Chevron_Right'} />
      </Flex>
      <Flex className="flex-col p-4" gap={16}>
        {/* <Text size={14} color={colors.primary} className="cursor-pointer">
          {t('common.literal.successorUsersManagement')}
        </Text> */}
        <Link className="flex gap-2" {...linkToResolver({ tab: 'password' })}>
          <Text size={14} color={colors.primary} className="cursor-pointer">
            {t('common.literal.changePassword')}
          </Text>
        </Link>
        {/* <Link
          className="flex gap-2"
          to={scopedRoutes.userWorkspaceProfile.create({ query: { tab: 'settings' } })}
        >
          <Text size={14} color={colors.primary} className="cursor-pointer">
            {t('common.literal.systemDate')}
          </Text>
        </Link> */}
      </Flex>
      <Flex className="bg-light-1 text-secondary items-center justify-center gap-2 p-2">
        <Icon name="logout-outlined" />
        <Text
          onClick={() => {
            setDefaultNotShowAgain();
            userManager.signoutRedirect({
              post_logout_redirect_uri: `${window.origin}/${__APP__}`,
            });
          }}
          className="cursor-pointer"
        >
          {t('common.literal.logout')}
        </Text>
      </Flex>
    </>
  );
};

export { UserInfoRender };
