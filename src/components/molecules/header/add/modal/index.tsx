import { CrmObjectTypeQuickAddResponseVM } from '@configs/crmObject';
import { ExternalView, Flex, Modal } from '@abrplus/ui';

import { useExternalUrlMapper } from '../../../../../core/hooks';

export const ModalQuickAdd = ({
  selectedItem,
  toggle,
}: {
  selectedItem: CrmObjectTypeQuickAddResponseVM | undefined;
  toggle: (item?: CrmObjectTypeQuickAddResponseVM) => void;
}) => {
  const { deepLink, externalUrl, externalQueryString } = useExternalUrlMapper({
    crmObjectType: selectedItem?.crmObjectTypeIndex,
    type: 'add',
  });

  return (
    <Modal.Base
      centered
      width={1280}
      footer={null}
      onClose={() => toggle(undefined)}
      title=""
      open={!!selectedItem}
    >
      <Flex className="h-[430px]">
        <ExternalView
          deepLink={deepLink}
          externalUrl={externalUrl}
          externalQueryString={`${externalQueryString}&TypeIndex=${selectedItem?.crmObjectTypeIndex}`}
          shouldSyncQueryStrings={false}
        />
      </Flex>
    </Modal.Base>
  );
};
