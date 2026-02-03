import { useTranslation } from 'react-i18next';

import { Icon } from '../../..';

export interface ExpandIconProps {
  expanded: boolean;
  expandable: boolean;
  onExpand: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const ExpandIcon = ({ expandable, expanded, onExpand }: ExpandIconProps) => {
  const { i18n } = useTranslation();

  if (!expandable) {
    return null;
  }

  return (
    <button className="float-start h-full items-center justify-center">
      <Icon
        onClick={onExpand}
        name={expanded ? 'Chevron_Down' : i18n.language === 'fa' ? 'Chevron_Left' : 'Chevron_Right'}
      />
    </button>
  );
};

export { ExpandIcon };
