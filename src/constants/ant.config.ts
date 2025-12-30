import { AppDirection, colors } from '@configs';
import { ThemeConfig } from 'antd';
import EN from 'antd/locale/en_US';
import FA from 'antd/locale/fa_IR';
import { useTranslation } from 'react-i18next';


export const useAntConfig = () => {
  const { i18n } = useTranslation();

  const isFA = i18n.language === 'fa';

  const direction: AppDirection | undefined = isFA ? 'rtl' : 'ltr';

  const locale = isFA ? FA : EN;

  const theme: ThemeConfig = {
    token: {
      fontFamily: isFA ? 'YekanBakhFaRegular' : 'RobotoRegular',
      colorPrimary: colors.primary,
      colorSuccess: colors.positive,
      colorError: colors.negative,
      borderRadius: 4,
    },
    components: {
      Input: {
        colorBorder: colors.primary_light_3,
        hoverBorderColor: colors.primary_dark_1,
        colorBgContainerDisabled: colors.light_6,
      },
    },
  };
  return { theme, direction, locale };
};
