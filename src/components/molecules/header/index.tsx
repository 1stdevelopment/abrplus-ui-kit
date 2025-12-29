import { useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { colors, scopedRoutes, useUser } from '@configs';

import { DeveloperSettings, Logo } from '../..';
import { ApplicationProvider, SignalRProvider } from '../../../core';
import { HEADER_HEIGHT } from '../../../core/constants/dimantions';
import { RenderPopup } from '../../../core/constants/enum';
import { Render } from '../../../utilities';
import { Flex, Loading } from '../../antOverrides';
import { Clickable, Icon, Popover } from '../../atoms';
import { AppNameTitle } from './AppNameTitle';
import { AddHeader } from './add';
import { PortalContainer } from './portalContainer';
import { ReminderNotification } from './reminderNotification';
import { UserInfoRender } from './renderHeaderPopover/userInfoRender';
import { UserLanguageRender } from './renderHeaderPopover/userLanguageRender';
import { UserStatusRender } from './renderHeaderPopover/userStatusRender';
import { SearchHeader } from './search';
import { useUserStatusListener } from './signalR/userStatusListener';
import { TaskBar } from './taskBar';
import { userItemStatus } from './userStatusColors';

export interface HeaderProps {
  isFixed?: boolean;
}

export const Header = ({ isFixed }: HeaderProps) => {
  const { isAppInitialized } = ApplicationProvider.use();

  const [showStatus, setShowStatus] = useState<RenderPopup>(RenderPopup.user_info);

  const { currentUser: { userId, fileId, userStatus, userName, ...user } = {}, isUserLoading } =
    useUser();

  const { userStatusListener } = useUserStatusListener();

  SignalRProvider.use('UserStatusChanged', userStatusListener);

  const renderItem = () => {
    switch (showStatus) {
      case RenderPopup.user_info:
        return (
          <UserInfoRender
            setShowStatus={setShowStatus}
            fileId={fileId || ''}
            isUserLoading={isUserLoading}
            email={user.email || ''}
            username={userName}
            userStatus={userStatus}
          />
        );

      case RenderPopup.user_status:
        return (
          <UserStatusRender userStatus={userStatus?.userStatus} setShowStatus={setShowStatus} />
        );

      case RenderPopup.user_lang:
        return <UserLanguageRender setShowStatus={setShowStatus} />;

      default:
        return (
          <UserInfoRender
            setShowStatus={setShowStatus}
            fileId={fileId || ''}
            isUserLoading={isUserLoading}
            email={user.email || ''}
            username={userName}
          />
        );
    }
  };

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className={twMerge(
          'bg-white-ff border-light-7  border-b px-4 shadow-sm',
          isFixed && 'fixed left-0 top-0 z-50 w-[calc(100%-64px)]',
          `h-[${HEADER_HEIGHT}px] min-h-[${HEADER_HEIGHT}px]`,
        )}
      >
        <Flex className=" items-center">
          <AppNameTitle />

          <Render when={__STAGE__ === 'dev'}>
            <DeveloperSettings />
          </Render>

          <PortalContainer />
        </Flex>
        <Flex align="center" className="h-full w-full justify-end gap-x-3 py-4">
          <Flex className=" w-full items-center justify-end">
            <SearchHeader />
            <AddHeader />

            <div className=" bg-light-7 mx-[10px] h-[23px] w-[1px]" />

            <TaskBar />
            <Link to={scopedRoutes.userNotification.create()}>
              <Clickable>
                <Icon size={18} name="Notification_header" />
              </Clickable>
            </Link>

            <Link to={scopedRoutes.calendar.create()}>
              <Clickable>
                <Icon size={18} name="calendar_header" />
              </Clickable>
            </Link>

            <Render when={isAppInitialized && !window.electron}>
              <Link to={scopedRoutes.settings.root.create()}>
                <Clickable>
                  <Icon size={18} name="settings_header" />
                </Clickable>
              </Link>
            </Render>
          </Flex>

          <div className="bg-light-7 h-full w-[1px]" />

          <Popover
            trigger={['hover']}
            align={{ offset: [5, -15] }}
            onOpenChange={() => setShowStatus(RenderPopup.user_info)}
            overlayInnerStyle={{ padding: 0 }}
            content={
              <Flex vertical className="bg-white-ff border-light-7 w-[220px] rounded border">
                {renderItem()}
              </Flex>
            }
          >
            <Flex align="center" className="cursor-pointer gap-x-2">
              <Flex
                align="center"
                justify="center"
                className="bg-light-7 relative h-[35px] w-[35px] rounded-full"
              >
                <Render
                  when={!isUserLoading}
                  fallback={<Loading isLoading size={28} color={colors.primary} />}
                >
                  <Logo
                    userId={userId}
                    className="border-light-7 !size-full border"
                    isFullSizeLogo
                    shape="circle"
                    badged
                    badgeColor={
                      (userStatus?.userStatus && userItemStatus[userStatus?.userStatus]) ||
                      colors.light_7
                    }
                    badgePosition="right"
                  />
                </Render>
              </Flex>
            </Flex>
          </Popover>
        </Flex>
      </Flex>

      <ReminderNotification />
    </>
  );
};
