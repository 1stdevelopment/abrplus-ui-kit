import './index.css';

import { Collapse as AntCollapse, CollapseProps } from 'antd';

const Collapse = ({ ...props }: CollapseProps) => {
  return <AntCollapse {...props} />;
};

Collapse.Panel = AntCollapse.Panel;
export { Collapse };
