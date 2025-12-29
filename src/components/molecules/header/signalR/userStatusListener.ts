import { useQueryClient } from '@tanstack/react-query';

import { CurrentUserVM, UserStatus, getGeneralCurrentUser } from '@configs/global';

interface UserStatusStreamData {
  activitySubStatusId: number;
  description: string | null;
  emotionalEmoji: number;
  key: string;
  name: string;
  userStatus: UserStatus;
}

export const useUserStatusListener = () => {
  const queryClient = useQueryClient();

  const userStatusListener = (streamData: UserStatusStreamData) => {
    queryClient.setQueryData([getGeneralCurrentUser.key], (oldData: CurrentUserVM | undefined) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        userStatus: {
          ...oldData.userStatus,
          subStatusKey: streamData.key,
          userStatus: streamData.userStatus,
          subStatusName: streamData.name,
          activitySubStatusId: streamData.activitySubStatusId,
          description: streamData.description,
          emotionalEmoji: streamData.emotionalEmoji,
        },
      } as CurrentUserVM;
    });
  };

  return { userStatusListener };
};
