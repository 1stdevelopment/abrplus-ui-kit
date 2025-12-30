import { useTranslation } from 'react-i18next';
import { Icon } from 'src/main';

const SelectClearIcon = () => {
  const { i18n } = useTranslation();
  return (
    <Icon
      name="Close_Circle"
      size={18}
      className="text-light-1 hover:text-secondary"
      //   @todo improve this
      style={{
        position: 'absolute',
        right: i18n.language === 'fa' ? -10 : 20,
        top: -3,
        width: 'fit-content',
      }}
    />
  );
};

export { SelectClearIcon };
