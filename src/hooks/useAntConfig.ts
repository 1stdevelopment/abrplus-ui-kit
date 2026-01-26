import { AppDirection, Language, colors } from '@configs';
import EN from 'antd/locale/en_US';
import FA from 'antd/locale/fa_IR';

export const useAntConfig = (language: Language) => {
  const isFA = language === 'fa';

  const direction: AppDirection | undefined = isFA ? 'rtl' : 'ltr';

  const locale = isFA ? FA : EN;

  const theme = {
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
      Collapse: {
        headerBg: colors.light_2,
      },
    },
  };
  return { theme, direction, locale };
};
