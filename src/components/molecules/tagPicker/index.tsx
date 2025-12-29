import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@configs';
import { TagVM, getV2TagList, useGetV2TagList, usePostV2Tag } from '@configs/global';

import { TagInput, useNotification } from '..';
import { TagInputProps, TagResponseVM } from '../tagInput/types';

export interface TagPickerProps
  extends Omit<
    TagInputProps<TagVM>,
    'onChange' | 'value' | 'options' | 'onChangeValue' | 'selectedValue'
  > {
  onChange?: (list: TagResponseVM[]) => void;
  value?: TagResponseVM[];
}

export const TagPicker = ({ onChange, value, ...rest }: TagPickerProps) => {
  const notification = useNotification();

  const [searchTerm, setSearchTerm] = useState('');
  const [term] = useDebounce(500, searchTerm);

  const { list, hasMore, fetchNextPage } = useGetV2TagList({ searchTerm: term });

  const queryClient = useQueryClient();

  const { mutate, isPending } = usePostV2Tag({
    onSuccess: (newItem) => {
      if (!newItem.id) return;
      queryClient.invalidateQueries({
        queryKey: [getV2TagList.key],
        refetchType: 'all',
      });
      const prevArray = value || [];
      const updated = [...prevArray, newItem];
      onChange?.(updated);
      return updated;
    },
    onError: (error) => {
      notification.negative({ message: error.message });
    },
  });

  const mutation = (item: string) => {
    mutate({ requestBody: { tagName: item } });
  };

  return (
    <TagInput<TagVM>
      {...rest}
      loading={isPending}
      onAddNew={mutation}
      options={list}
      labelExtractor={(item) => item.tag}
      valueExtractor={(item) => item.id!}
      onChangeValue={onChange}
      selectedValues={value}
      onSearch={setSearchTerm}
      infinite={{
        fetchNextPage,
        hasMore,
      }}
    />
  );
};
