import { useQueryClient } from '@tanstack/react-query';

import { colors, useInteractions } from '@configs';
import { getV1InboxInboxlist, usePostV1InboxSetimportant } from '@configs/crmObject';

import { Icon } from '../../../../../../..';

interface StarButtonProps {
  crmObjectId: string | undefined;
  isImportant: boolean | undefined;
}

export const StarButton = ({ crmObjectId, isImportant }: StarButtonProps) => {
  const queryClient = useQueryClient();
  const { isHovered, eventHandlers } = useInteractions();
  const { mutate: setImportant } = usePostV1InboxSetimportant({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getV1InboxInboxlist.key],
        type: 'all',
        refetchType: 'all',
      });
    },
  });

  function toggleImportant() {
    setImportant({ requestBody: { crmObjectId: crmObjectId, isImportant: !isImportant } });
  }
  return (
    <div {...eventHandlers()} className="me-[2px]" onClick={toggleImportant}>
      <Icon
        name={isHovered || isImportant ? 'star-filed' : 'star-outlined'}
        className="cursor-pointer"
        color={isHovered || isImportant ? colors.sales.action_light_3 : colors.primary_light_2}
        size={16}
      />
    </div>
  );
};
