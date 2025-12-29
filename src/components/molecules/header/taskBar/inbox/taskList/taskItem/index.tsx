import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { colors, teamRoutes, useConvertISOToLocal } from '@configs';
import { InboxResponseVM } from '@configs/crmObject';

import { AvatarGroup, DateTimeModal } from '../../../../../../';
import { useExternalUrlMapper } from '../../../../../../../core/hooks';
import { Render } from '../../../../../../../utilities';
import { Flex, Text } from '../../../../../../antOverrides';
import { Icon, VerticalLine } from '../../../../../../atoms';
import { ToggleButton } from '../../../components';
import { StartTaskProps } from '../../../hooks/useToggleTask';
import { CompleteButton } from './completeButton';
import { StarButton } from './starButton';

interface TaskItemProps extends InboxResponseVM {
  hasTeam: boolean;
  isActive?: boolean;
  onToggle: (props: StartTaskProps) => void;
}

export const TaskItem = memo(
  ({
    crmObjectId,
    lifePathId,
    subject,
    enterCardtableDate,
    isImportant,
    canDone,
    otherHolders,
    stageName,
    hasAttachment,
    hasComment,
    stageColorR,
    stageColorB,
    stageColorG,
    hasReminder,
    hasFollowUp,
    crmObjectType,
    crmObjectTypeId,
    hasTeam,
    isActive,
  }: TaskItemProps) => {
    const [isOpenReminder, setIsOpenReminder] = useState<{
      isOpen: boolean;
      crmObjectId?: string;
      type?: 'followUp' | 'reminder';
    }>({
      isOpen: false,
    });
    const navigate = useNavigate();
    const { convertISOToLocal } = useConvertISOToLocal();

    const renderDotSeparator = (
      <Text weight="medium" color={colors.primary_light_2}>
        .
      </Text>
    );

    const { deepLink, externalQueryString } = useExternalUrlMapper({
      crmObjectId,
      crmObjectType,
      type: 'edit',
    });

    const quernNavigate = () => {
      const searchObj = { lifePathId, typeId: crmObjectTypeId };
      const searchParams = new URLSearchParams(searchObj as Record<string, string>);

      const search = searchParams.toString();

      if (crmObjectId && crmObjectType)
        navigate(
          window.electron
            ? teamRoutes.workOffice.externalView.create({
                query: {
                  crmObjectId,
                  crmOT: crmObjectType,
                  type: 'edit',
                  title: subject,
                  ...searchObj,
                },
              })
            : { pathname: deepLink, search: externalQueryString + '&' + search },
        );
    };

    return (
      <>
        <Flex
          justify="space-between"
          align="center"
          className="bg-white-ff hover:border-primary-light-2 group box-border rounded border border-transparent p-3 transition-all hover:border hover:border-solid"
        >
          <Flex gap={8}>
            {canDone && <CompleteButton lifePathId={lifePathId} />}

            <Flex vertical gap={8}>
              <Text
                // className="cursor-pointer"
                onClick={quernNavigate}
                color={colors.primary}
                weight="medium"
              >
                {subject || '--'}
              </Text>

              <Flex gap={4} align="center" className="w-full">
                <Flex gap={4} align="center">
                  <Icon size={14} name="calendar_header" color={colors.primary_light_2} />

                  <Text weight="medium" color={colors.primary_light_2} size={12}>
                    {enterCardtableDate ? convertISOToLocal(enterCardtableDate).human : '--'}
                  </Text>
                </Flex>
                {renderDotSeparator}
                <Render when={hasAttachment}>
                  <Icon size={14} name="attachment_line" color={colors.primary_light_2} />
                  {renderDotSeparator}
                </Render>
                <Render when={hasComment}>
                  <Icon size={14} name="note" color={colors.primary_light_2} />
                  {renderDotSeparator}
                </Render>
                <Icon
                  className={twMerge(!hasReminder && 'cursor-pointer')}
                  size={14}
                  name="Notification_header"
                  color={hasReminder ? colors.positive : colors.primary_light_2}
                  {...(!hasReminder
                    ? {
                        onClick: () =>
                          setIsOpenReminder({
                            isOpen: true,
                            crmObjectId: crmObjectId,
                            type: 'reminder',
                          }),
                      }
                    : {})}
                />
                <Icon
                  className={twMerge(!hasFollowUp && 'cursor-pointer')}
                  size={17}
                  name="alarm-outlined"
                  color={hasFollowUp ? colors.positive : colors.primary_light_2}
                  {...(!hasFollowUp
                    ? {
                        onClick: () =>
                          setIsOpenReminder({
                            isOpen: true,
                            crmObjectId: crmObjectId,
                            type: 'followUp',
                          }),
                      }
                    : {})}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={6} vertical className="h-full" align="end" justify="space-between">
            <Flex align="center">
              {stageName ? (
                <Flex gap={8} className="overflow-hidden">
                  <Flex className="translate-x-3 opacity-0 transition group-hover:-translate-x-16 group-hover:opacity-100">
                    <AvatarGroup
                      avatarProps={{ size: 24 }}
                      max={2}
                      items={
                        otherHolders?.map(({ holderId, holderName }) => ({
                          id: holderId || '',
                          name: holderName || '',
                        })) || []
                      }
                    />
                  </Flex>

                  <Text
                    size={12}
                    color={colors.primary_light_1}
                    numberOfLines={1}
                    style={{
                      backgroundColor: `rgb(${stageColorR}, ${stageColorG}, ${stageColorB})`,
                    }}
                    className=" min-w-14 translate-x-0 rounded px-2 py-[2px] text-center transition group-hover:-translate-x-16"
                  >
                    {stageName}
                  </Text>
                </Flex>
              ) : (
                <AvatarGroup
                  avatarProps={{ size: 24 }}
                  max={2}
                  items={
                    otherHolders?.map(({ holderId, holderName }) => ({
                      id: holderId || '',
                      name: holderName || '',
                    })) || []
                  }
                />
              )}
              <VerticalLine color={colors.primary_light_2} />
              <StarButton crmObjectId={crmObjectId} isImportant={isImportant} />
            </Flex>

            {hasTeam && (
              <ToggleButton
                isActive={isActive}
                crmObjectId={crmObjectId}
                lifePathId={lifePathId}
                subject={subject}
              />
            )}
          </Flex>
        </Flex>
        <DateTimeModal
          open={isOpenReminder.isOpen}
          onClose={() => setIsOpenReminder({ isOpen: false, crmObjectId: undefined })}
          crmObjectId={crmObjectId}
          type={isOpenReminder.type}
        />
      </>
    );
  },
);
