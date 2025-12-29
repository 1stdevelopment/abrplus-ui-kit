import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { colors, getAppKey, goto, teamRoutes, useDebounce } from '@configs';
import {
  useGetApiMobileV1FullsearchGet,
  useGetApiMobileV1FullsearchReadablecrmobjecttypes,
} from '@configs/v2';
import { Avatar, ClickAwayListener, Flex, Icon, Input, Popover, Select, Text } from '@abrplus/ui';

import { SearchHeaderForm } from '../form';

interface SearchBarProps {
  open: boolean;
  toggle: (open: boolean) => void;
}

export const SearchBar = SearchHeaderForm.withFormProvider(({ toggle, open }: SearchBarProps) => {
  const formTerm = SearchHeaderForm.useWatch();
  const [term] = useDebounce(400, formTerm);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { data: { groups } = {}, isLoading: searchLoading } = useGetApiMobileV1FullsearchGet(
    {
      term: term.input,
      type: (term.select1 === 'all' ? undefined : term.select1) as any,
      crmobjecttype: (term.select2 === 'all' ? undefined : term.select2) as any,
      pageNumber: 1,
      pageSize: 3,
    },
    { enabled: !!term.input },
  );

  const { data: crmObjectType, isLoading: searchSelectLoading } =
    useGetApiMobileV1FullsearchReadablecrmobjecttypes();

  const firstSelectOptions = useMemo(
    () => [
      { value: 'all', label: t('common.literal.all') },
      { value: '0', label: t('common.literal.history') },
      { value: '1', label: t('common.literal.Identity') },
      { value: '2', label: t('common.literal.sendList') },
      { value: '3', label: t('common.literal.receiveList') },
    ],
    [t],
  );

  const secondSelectOptions = useMemo(
    () => [
      { value: 'all', label: 'همه' },
      ...(crmObjectType?.map((type) => ({ value: type.type, label: type.name })) || []),
    ],
    [crmObjectType],
  );

  const handleItemClick = ({
    crmObjectId,
    url,
    title,
  }: {
    crmObjectId?: string;
    url?: string;
    title?: string;
  }) => {
    if (window.electron) {
      navigate(
        teamRoutes.workOffice.externalView.create({
          query: {
            externalUrl: url ? encodeURIComponent(url) : undefined,
            crmObjectId,
            title,
          },
        }),
      );
    } else {
      goto(origin + url, true);
    }
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    if (term.input !== '') {
      setIsPopoverOpen(true);
    }
  }, [term]);

  return (
    <ClickAwayListener
      className=" justify-end"
      onClickAway={() => {
        setIsPopoverOpen(false);
      }}
    >
      <Flex id="popover-search-container" className=" w-full justify-end">
        <Popover
          getPopupContainer={() =>
            document.getElementById('popover-search-container') as HTMLElement
          }
          open={isPopoverOpen}
          overlayInnerStyle={{ width: 554 }}
          overlayInnerClassName="p-0"
          placement="bottomLeft"
          className="w-full"
          content={
            <Flex className="small-custom-scrollbar max-h-[500px] overflow-y-auto" vertical>
              {groups?.length && !searchLoading ? (
                groups.some((group) => group.totalCount > 0) ? (
                  groups.map((group) => (
                    <Flex vertical key={group.name}>
                      {!!group.totalCount && (
                        <>
                          <Text color={colors.primary} className="bg-light-5 w-full px-4 py-2">
                            {group.name} ({group.totalCount})
                          </Text>
                          <Flex className="justify-between">
                            <Flex vertical className="w-full">
                              {group.data?.map((d) => (
                                <Flex
                                  key={d.id}
                                  onClick={() =>
                                    // TODO using groupType as number is absolute TOF, get a proper enum from backend
                                    handleItemClick({
                                      url:
                                        group.groupType > 1
                                          ? d.url + `&DialogView=True&appKey=${getAppKey()}`
                                          : undefined,
                                      crmObjectId: group.groupType <= 1 ? d.id : undefined,
                                      title: d.name,
                                    })
                                  }
                                  flex={1}
                                  className="w-full cursor-pointer items-center p-2"
                                  gap={12}
                                >
                                  <Avatar icon={<Icon name="User" />} size={45} />
                                  <Text>{d.name}</Text>
                                </Flex>
                              ))}
                            </Flex>
                            {group.totalCount > 3 && (
                              <Flex className="w-1/4 justify-end self-end p-3">
                                <Text
                                  onClick={() =>
                                    handleItemClick({
                                      url: group.url + `&DialogView=True&appKey=${getAppKey()}`,
                                      title: group.name,
                                    })
                                  }
                                  className="text-secondary cursor-pointer"
                                >
                                  {t('common.literal.showAll')}
                                </Text>
                                <Icon
                                  color={colors.secondary}
                                  name="Chevron_Left"
                                  className="text-secondary cursor-pointer"
                                />
                              </Flex>
                            )}
                          </Flex>
                        </>
                      )}
                    </Flex>
                  ))
                ) : (
                  <Text className="p-4 text-center text-gray-500">
                    {t('common.message.noResultFound')}
                  </Text>
                )
              ) : null}
            </Flex>
          }
        >
          <Flex className="  justify-end self-end">
            <SearchHeaderForm.Controller
              name="input"
              render={({ field: { value, onChange } }) => (
                <Input.Default
                  value={value}
                  onChangeText={(text) => {
                    onChange(text);
                    if (text.length > 0) {
                      setIsPopoverOpen(true);
                    }
                  }}
                  onFocus={() => {
                    if (term.input) {
                      setIsPopoverOpen(true);
                    }
                  }}
                  height={34}
                  rootClassName="border-s-0"
                  wrapperClassName="max-w-[650px]"
                  className="group p-0"
                  hideErrorMessage={true}
                  prefix={
                    <Flex>
                      <SearchHeaderForm.Controller
                        name="select1"
                        render={({ field }) => (
                          <Select.Single
                            defaultValue={firstSelectOptions[0]}
                            wrapperClassName="max-w-[108px]"
                            placeholder={t('common.literal.select')}
                            className="group-focus-within:border-primary group-hover:border-primary min-w-[108px] rounded-e-none transition-colors"
                            options={firstSelectOptions}
                            size="small"
                            onChangeValue={field.onChange}
                            hideErrorMessage={true}
                          />
                        )}
                      />
                      <SearchHeaderForm.Controller
                        name="select2"
                        render={({ field }) => (
                          <>
                            {term.select1 === '0' && (
                              <Select.Single
                                defaultValue={secondSelectOptions[0]}
                                loading={searchSelectLoading}
                                wrapperClassName="max-w-[153px]"
                                rootClassName="custom-scrollbar"
                                className="group-focus-within:border-primary group-hover:border-primary min-w-[153px] rounded-none border-0 border-y border-l transition-colors"
                                options={secondSelectOptions}
                                size="small"
                                onChangeValue={field.onChange}
                                hideErrorMessage={true}
                              />
                            )}
                          </>
                        )}
                      />
                    </Flex>
                  }
                  suffix={
                    <Icon
                      onClick={() => toggle(!open)}
                      className="border-primary-light-2 group-focus-within:border-primary group-hover:border-primary flex h-[33px] w-[33px]  cursor-pointer items-center justify-center rounded-l-md border-r transition-colors"
                      name={searchLoading ? 'clock-outlined' : 'Search_header'}
                    />
                  }
                />
              )}
            />
          </Flex>
        </Popover>
      </Flex>
    </ClickAwayListener>
  );
});
