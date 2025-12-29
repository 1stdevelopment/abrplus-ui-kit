import { useQueryClient } from '@tanstack/react-query';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';
import {
  EngineAction,
  getV1InboxInboxlist,
  usePostV1CartableContextMenuDoAction,
} from '@configs/crmObject';

import { Flex, Icon } from '../../../../../../..';

export const CompleteButton = ({ lifePathId }: { lifePathId: string | undefined }) => {
  const queryClient = useQueryClient();
  const { mutate: setDone, isPending: isWaitingToDone } = usePostV1CartableContextMenuDoAction({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getV1InboxInboxlist.key],
        refetchType: 'all',
      });
    },
  });

  function doneTaskHandler(id: string | undefined) {
    if (id) {
      setDone({
        requestBody: {
          key: 'TerminateWorkFlowExecutionContext',
          contextType: EngineAction.Finishing,
          values: [id],
        },
      });
    }
  }
  return (
    <Flex
      align="center"
      justify="center"
      onClick={() => doneTaskHandler(lifePathId)}
      className={twMerge(
        'border-light-7 hover:border-positive-light-2 group/complete relative h-6 w-6 cursor-pointer overflow-hidden rounded-full border-2 border-dashed transition',
        isWaitingToDone && 'border-positive-light-2 bg-positive-light-2 border-solid',
      )}
    >
      <Icon
        name="Checkmark"
        color={isWaitingToDone ? colors.white_ff : colors.positive_light_2}
        className={twMerge(
          'color-negative z-10 mx-[1px] mt-1 h-full w-full translate-y-5 opacity-0 transition duration-300 group-hover/complete:translate-y-0 group-hover/complete:opacity-100',
          isWaitingToDone && 'translate-y-0 opacity-100',
        )}
      />

      <div
        className={twMerge(
          'bg-positive-light-2 pointer-events-none absolute h-full w-full translate-y-3 rounded-full opacity-0 transition',
          isWaitingToDone && 'translate-y-0 opacity-100',
        )}
      />
    </Flex>
  );
};
