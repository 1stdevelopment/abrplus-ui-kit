import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import { Text } from 'src/components/antOverrides';
import { Icon } from 'src/components/atoms';
import { Input } from '../input';

export interface TagCollectionProps {
  tags?: { value: string; onRemove?: () => void }[];
  label?: ReactNode;
  hasMore?: boolean;
  fetchNextPage?: () => void;
  isSearchable?: boolean;
  noContentFoundMessage?: string;
  numberOfRows?: number;
}

interface TagItemProps {
  value: string;
  onRemove?: () => void;
}

const TagItem = ({ value, onRemove }: TagItemProps) => {
  return (
    <div className="bg-light-1 border-primary-light-3 flex h-5 flex-row items-center justify-center gap-1  rounded border-[1px] px-2 py-3">
      <Text color={colors.primary} weight="medium">
        {value}
      </Text>
      <Icon
        name="Close"
        className="cursor-pointer"
        color={colors.primary_light_2}
        size={14}
        onClick={onRemove}
      />
    </div>
  );
};

export const TagCollectionView = ({
  tags,
  label,
  hasMore,
  fetchNextPage,
  isSearchable = false,
  noContentFoundMessage,
  numberOfRows = 3,
}: TagCollectionProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { t } = useTranslation();

  const filteredTags = tags?.filter(({ value }) => value?.startsWith(searchTerm));

  return (
    <div className="w-full flex-1">
      {typeof label === 'string' ? (
        <Text color={colors.primary} weight="normal" size={14}>
          {label}
        </Text>
      ) : (
        label
      )}
      <div
        className="border-primary-light-3 rounded border-[1px]"
        // style={{ paddingTop: isSearchable ? 0 : 12 }}
      >
        {isSearchable && (
          <div className="sticky top-0 p-3">
            <Input.Default
              suffix={<Icon name="Search_header" />}
              value={searchTerm}
              height={34}
              className=""
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
        <div
          style={{ height: numberOfRows * 40, paddingTop: isSearchable ? 0 : 12 }}
          className="tiny-custom-scrollbar flex w-full flex-wrap gap-2 overflow-y-auto p-3"
        >
          <>
            {filteredTags?.length ? (
              filteredTags?.map(({ value, onRemove }) =>
                value ? <TagItem value={value} onRemove={onRemove} /> : null,
              )
            ) : (
              <Text size={14} weight="normal" color={colors.primary_light_3}>
                {noContentFoundMessage || t('common.message.noResultFound')}...
              </Text>
            )}
          </>

          <Text as="link" color={colors.secondary} onClick={fetchNextPage}>
            {hasMore && `${t('common.literal.more')} ...`}
          </Text>
        </div>
      </div>
    </div>
  );
};
