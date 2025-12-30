import { t } from 'i18next';
import { RefAttributes, useState } from 'react';

import { useDebounce } from '@hooks';
import { InputRef, InputSearchProps } from '../../../molecules/input';
import { InputSearch } from '../../../molecules/input/search';

type TreeSearchBarProps = InputSearchProps &
  RefAttributes<InputRef> & {
    onSearch: (value: string) => void;
  };

export const TreeSearchBar = ({ onSearch, ...props }: TreeSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(onSearch, 500);

  return (
    <InputSearch
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e.target.value);
      }}
      placeholder={t('common.literal.search') ?? 'Search'}
      {...props}
    />
  );
};
