import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Clickable, Icon } from '@abrplus/ui';

import { SearchBar } from './searchbar';

export const SearchHeader = () => {
  const [isOpen, setToggleOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <Clickable onClick={() => setToggleOpen((prev) => !prev)}>
          <Icon className={twMerge(' cursor-pointer ')} name="Search_header" />
        </Clickable>
      ) : (
        <SearchBar toggle={setToggleOpen} open={isOpen} />
      )}
    </>
  );
};
