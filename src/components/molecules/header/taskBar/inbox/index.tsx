import { useState } from 'react';

import { InboxFilterResponseVM } from '@configs/crmObject';

import { FiltersList } from './filtersList';
import { TaskList } from './taskList';

export const Inbox = () => {
  const [inboxFilter, setInboxFilter] = useState<InboxFilterResponseVM | undefined>();

  return (
    <>
      {inboxFilter?.id ? (
        <TaskList inboxFilter={inboxFilter} onBack={() => setInboxFilter(undefined)} />
      ) : (
        <FiltersList onFilterClick={setInboxFilter} />
      )}
    </>
  );
};
