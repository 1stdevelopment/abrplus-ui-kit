import { t } from 'i18next';
import { RefAttributes, useEffect, useState } from 'react';

import { useDebounce } from '@configs';

import { InputRef, InputSearchProps } from '../../../molecules/input';
import { InputSearch } from '../../../molecules/input/search';

type TreeSearchBarProps = InputSearchProps &
  RefAttributes<InputRef> & {
    onSearch?: (value: string) => void;
  };

export const TreeSearchBar = ({ onSearch, ...props }: TreeSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(500, searchTerm)[0];

  useEffect(() => {
    if (onSearch) onSearch(debouncedTerm);
  }, [debouncedTerm, onSearch]);

  return (
    <InputSearch
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={t('common.literal.search') ?? 'Search'}
      {...props}
    />
  );
};
