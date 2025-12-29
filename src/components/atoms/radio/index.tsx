import { Radio as AntRadio, RadioProps } from 'antd';

const Radio = (props: RadioProps) => <AntRadio {...props} />;

Radio.Group = AntRadio.Group;

export { Radio };
