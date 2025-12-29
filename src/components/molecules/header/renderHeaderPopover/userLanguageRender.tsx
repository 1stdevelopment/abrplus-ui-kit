import { useQueryClient } from '@tanstack/react-query';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import { usePostGeneralUserSettingSetUserLanguage } from '@configs/global';

import { RenderPopup } from '../../../../core/constants/enum';
import { isPersianOrArabic } from '../../../../utilities';
import { Flex, Text } from '../../../antOverrides';
import { Icon } from '../../../atoms';

const langOption = [
  {
    key: 'fa',
    label: 'فارسی',
  },
  {
    key: 'en',
    label: 'English',
  },
];
const UserLanguageRender = ({ setShowStatus }: { setShowStatus: (value: RenderPopup) => void }) => {
  const { t, i18n } = useTranslation();
  const queryclient = useQueryClient();

  const { mutate } = usePostGeneralUserSettingSetUserLanguage({
    onSuccess: () => {
      queryclient.invalidateQueries({
        type: 'all',
        refetchType: 'all',
      });
    },
  });
  const changeLang = (key: string) => {
    i18n.changeLanguage(key);
    setShowStatus(RenderPopup.user_info);
    mutate({ queryParams: { languageCulture: key === 'fa' ? 'fa-IR' : 'en-US' } });
  };
  return (
    <Flex vertical className="bg-white-ff border-light-7 w-[220px] rounded border">
      <Flex className="border-light-7 gap-2 border-b py-3 pl-4 pr-3">
        <Icon
          onClick={() => setShowStatus(RenderPopup.user_info)}
          className="cursor-pointer"
          name={i18next.language === 'fa' ? 'Chevron_Right' : 'Chevron_Left'}
        />
        <Text>{t('sales.literal.systemLanguage')}</Text>
      </Flex>
      <Flex className="flex-col">
        {langOption.map((item) => {
          return (
            <Flex
              key={item.key}
              onClick={() => changeLang(item.key)}
              className="hover:bg-light-1 cursor-pointer justify-between px-4 py-2"
              style={{ background: item.key === i18n.language ? colors.light_1 : '' }}
            >
              <Flex className="items-center gap-2">
                <Text lang={isPersianOrArabic(item.label) ? 'fa' : 'en'}>{item.label || '--'}</Text>
              </Flex>
              {item.key === i18n.language ? <Icon name="Checkmark" /> : null}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
export { UserLanguageRender };
